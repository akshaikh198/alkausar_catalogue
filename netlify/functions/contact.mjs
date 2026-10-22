
import nodemailer from "nodemailer";

const allowedInquiryTypes = new Set([
  "General Catalog Inquiry",
  "Artisanal Extraction Details",
  "Bulk/Boutique Curation",
]);

function jsonResponse(status, data) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

export default async (request) => {
  if (request.method !== "POST") {
    return jsonResponse(405, { success: false, message: "Method not allowed." });
  }

  let body;

  try {
    body = await request.json();
  } catch {
    return jsonResponse(400, { success: false, message: "Invalid JSON." });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const inquiryType =
    typeof body.inquiryType === "string" ? body.inquiryType.trim() : "";
  const message =
    typeof body.message === "string" ? body.message.trim() : "";

  if (
    !name ||
    name.length > 100 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    email.length > 254 ||
    !allowedInquiryTypes.has(inquiryType) ||
    !message ||
    message.length > 5000
  ) {
    return jsonResponse(400, {
      success: false,
      message: "Please check your name, email, inquiry type and message.",
    });
  }

  const {
    EMAIL_SMTP_USERNAME,
    EMAIL_SMTP_PASSWORD,
    EMAIL_TO_ADDRESS,
  } = process.env;

  if (!EMAIL_SMTP_USERNAME || !EMAIL_SMTP_PASSWORD || !EMAIL_TO_ADDRESS) {
    console.error("Contact function email environment variables are missing.");
    return jsonResponse(500, {
      success: false,
      message: "Email service is not configured yet.",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: EMAIL_SMTP_USERNAME,
        pass: EMAIL_SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Al-Kausar Website" <${EMAIL_SMTP_USERNAME}>`,
      to: EMAIL_TO_ADDRESS,
      replyTo: { name, address: email },
      subject: `AL-Kausar Website Enquiry: ${inquiryType}`,
      text: [
        "New enquiry received from the Al-Kausar website.",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Inquiry type: ${inquiryType}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return jsonResponse(200, {
      success: true,
      message: "Your enquiry has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact email failed:", error?.message || "Unknown error");
    return jsonResponse(502, {
      success: false,
      message: "We could not send your enquiry. Please try again later.",
    });
  }
};
