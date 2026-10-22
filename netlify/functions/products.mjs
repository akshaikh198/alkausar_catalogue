
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    type: {
      type: String,
      enum: ["attars", "perfumes", "bakhoor"],
      required: true,
    },
    imageUrl: { type: String, default: "" },
    description: { type: String, required: true },
    topNotes: [{ type: String }],
    heartNotes: [{ type: String }],
    baseNotes: [{ type: String }],
    longevity: { type: String, default: "24+ Hours" },
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product ||
  mongoose.model("Product", productSchema);

let connectionPromise;

async function connectDB() {
  if (mongoose.connection.readyState === 1) return;

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not configured.");
  }

  if (!connectionPromise) {
    connectionPromise = mongoose
      .connect(process.env.MONGO_URI, {
        serverSelectionTimeoutMS: 10000,
      })
      .catch((error) => {
        connectionPromise = undefined;
        throw error;
      });
  }

  await connectionPromise;
}

export default async (request) => {
  if (request.method !== "GET") {
    return new Response(
      JSON.stringify({ message: "Method not allowed" }),
      {
        status: 405,
        headers: {
          "Content-Type": "application/json",
          Allow: "GET",
        },
      }
    );
  }

  try {
    await connectDB();

    const url = new URL(request.url);
    const category = url.searchParams.get("type");

    const filter = {};
    if (category) {
      if (!["attars", "perfumes", "bakhoor"].includes(category)) {
        return Response.json(
          { message: "Invalid product category." },
          { status: 400 }
        );
      }
      filter.type = category;
    }

    const products = await Product.find(filter)
      .sort({ createdAt: -1 })
      .lean();

    return Response.json(products);
  } catch (error) {
    console.error("Product API error:", error.message);

    return Response.json(
      { message: "Unable to load products right now." },
      { status: 500 }
    );
  }
};
