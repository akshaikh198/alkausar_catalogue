const productImages = import.meta.glob(
  "../assets/Images/**/*.{png,jpg,jpeg,webp,avif,svg}",
  {
    eager: true,
    import: "default",
  }
);

// Default Al Kausar logo

const DEFAULT_PRODUCT_IMAGE =
  productImages["../assets/Images/Logo/Al_Kausar_Logo.png"] || "";

const resolveProductImage = (imagePath) => {
  // If image path is empty, use default logo
  if (!imagePath) {
    return DEFAULT_PRODUCT_IMAGE;
  }

  const normalizedPath = imagePath
    .replace(/\\/g, "/")
    .replace(/^\.\/src\//, "../")
    .replace(/^\.\//, "../");

  const resolvedImage = productImages[normalizedPath];

  // If image doesn't exist, use Al Kausar logo
  if (!resolvedImage) {
    console.warn(
      `Product image not found: ${imagePath}. Using default logo.`
    );

    return DEFAULT_PRODUCT_IMAGE;
  }

  return resolvedImage;
};

const RAW_STATIC_PRODUCTS = [
  // ==========================================
  // AL KAUSAR 100 ML (100GM) COLLECTION
  // ==========================================
  {
    _id: "p1",
    title: "Al Kausar Mousuf",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Experience the irresistible charm of Al Kausar Mousuf, combining delicious gourmet chocolate and ripe fruits with a velvety woody core. It leaves an alluring, sweet, and comforting trail that lingers effortlessly all day and night.",
    topNotes: ["Chocolate", "Grapes", "Citrus"],
    heartNotes: ["Caramel", "Spices", "Floral Notes"],
    baseNotes: ["Agarwood (Oud)", "Musk", "Warm Amber"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Al_Kausar_Mousuf.png",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/al_kausar_mousuf.png"
  },
  {
    _id: "p2",
    title: "Al Kausar Oud",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Immerse yourself in traditional luxury with Al Kausar Oud, an authentic fragrance celebrating deep woody character and smoky resinous undertones. Its refined, timeless aroma projects dignity and bold sophistication for any formal or royal gathering.",
    topNotes: ["Bergamot", "Saffron"],
    heartNotes: ["Rich Agarwood", "Smoky Cedar"],
    baseNotes: ["Amber", "Sandalwood", "Precious Musk"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/AL Kausar Oudh 100 gm Box & Bottle.png",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/Al_kausar_oudh.png"
  },
  {
    _id: "p3",
    title: "Al Kausar Oud Al Haram",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Embrace the spiritual serenity of Al Kausar Oud Al Haram, featuring meditative frankincense, sacred woods, and sweet oriental amber. A deeply soothing and long-lasting attar that envelopes your senses with pure peace, purity, and reverence.",
    topNotes: ["Frankincense", "Taif Rose"],
    heartNotes: ["Aged Oud", "Warm Spices"],
    baseNotes: ["Sweet Amber", "White Musk", "Cedarwood"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Oud Al Haram100 gm Box & Bottle.png",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/oud_al_haram.png"
  },
  {
    _id: "p4",
    title: "Ameage Interdude",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Make an unforgettable statement with Ameaouge Interdude, an opulent fusion of zesty bergamot, aromatic spices, and dark smoky leather. It wraps you in a commanding, warm aura that turns heads wherever your journey leads.",
    topNotes: ["Oregano", "Pimento Berry", "Bergamot"],
    heartNotes: ["Incense", "Opoponax", "Amber"],
    baseNotes: ["Leather", "Agarwood Smoke", "Patchouli"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Ameage_Interdude.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/Ameage_Interdude.jpeg"
  },
  {
    _id: "p5",
    title: "Ameer Oud",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Unveil regal indulgence with Ameer Oud, presenting rich caramelized vanilla blended harmoniously with smoldering wood and subtle herbal accents. This smooth, decadent fragrance is designed for connoisseurs who cherish warmth, distinction, and enduring sweetness.",
    topNotes: ["Cinnamon", "Nutmeg"],
    heartNotes: ["Caramelized Sugar", "Smooth Oud"],
    baseNotes: ["Vanilla Pod", "Amber", "Sandalwood"],
    whiteBgImageUrl: "./assets/Images/whitebg/bottlebox/Ameer_Oudh.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/Ameer_Oudh.jpeg"
  },
  {
    _id: "p6",
    title: "Aqua 212",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Recharge your spirit with Aqua 212, a crisp burst of freshly cut greens, sparkling citrus, and airy aquatic minerals. Perfect for modern individuals seeking an energetic, clean scent that stays remarkably crisp in any weather condition.",
    topNotes: ["Green Notes", "Grapefruit", "Mandarin"],
    heartNotes: ["Gardenia", "Ginger", "Aquatic Accord"],
    baseNotes: ["White Musk", "Sandalwood", "Guaiac Wood"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Aqua_212.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/aqua_212.jpeg"
  },
  {
    _id: "p7",
    title: "Aqua Zoo'",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Dive straight into ocean freshness with Aqua Zoo', an ultra-cooling marine fragrance featuring bracing sea spray and sunlit citrus. It delivers a lively, breezy burst of freshness that uplifts your mood while ensuring non-stop everyday comfort.",
    topNotes: ["Sea Salt", "Lemon Zest", "Calone"],
    heartNotes: ["Crushed Mint", "Neroli", "Blue Sage"],
    baseNotes: ["Driftwood", "Mineral Amber", "Clean Musk"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Aqua_Zoo.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/Aqua_zoo.jpeg"
  },
  {
    _id: "p8",
    title: "Addictive Ambergris",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Discover the rich elegance of Addictive Ambergris Attar, a luxurious fragrance with fresh opening notes, a smooth ambergris heart, and a warm, musky base. Its deep, captivating aroma creates a refined presence that lasts beautifully throughout the day.",
    topNotes: ["Fresh Citrus", "Marine"],
    heartNotes: ["Ambergris", "Soft Floral"],
    baseNotes: ["Musk", "Warm Amber", "Woody"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Addictive_Ambergris.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/addictive_Ambergris.png"
  },
  {
    _id: "p9",
    title: "Barkat Rouge",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Indulge in pure luxury with Barkat Rouge, featuring delicate saffron threads, sweet spun sugar, and luminous mineral ambergris. This luminous, high-status creation floats softly in the air and creates an unforgettable impression everywhere you go.",
    topNotes: ["Saffron", "Bitter Almond"],
    heartNotes: ["Jasmine Sambac", "Spun Sugar"],
    baseNotes: ["Ambergris", "Cedarwood", "Cashmeran"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Barkat_Rouge.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/Barkat_rouge.jpeg"
  },
  {
    _id: "p10",
    title: "Black Heart",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Explore your mysterious edge with Black Heart, a bold fragrance uniting dark roasted coffee, spicy cardamom, and sensual woods. Its captivating, evening-ready trail wraps you in deep confidence and leaves a powerful lingering shadow.",
    topNotes: ["Black Pepper", "Cardamom"],
    heartNotes: ["Dark Coffee", "Ebony Wood"],
    baseNotes: ["Smoky Amber", "Patchouli", "Black Musk"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Black_Heart.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/Black_heart.jpeg"
  },
  {
    _id: "p11",
    title: "Black Oud",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Step into dark sophistication with Black Oud, a potent blend of velvety velvety red rose, earthy Indonesian patchouli, and raw agarwood. Rich, exotic, and magnetic, it radiates an unmistakable intensity made for lovers of deep perfumery.",
    topNotes: ["Crimson Rose", "Mandarin"],
    heartNotes: ["Aged Agarwood", "French Labdanum"],
    baseNotes: ["Dark Patchouli", "Musk", "Leather"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Black Oud 100 gm Box & Bottle.png",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/Black_Oud.png"
  },
  {
    _id: "p12",
    title: "Black Touch",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Exude effortless class with Black Touch, combining earthy vetiver, fresh citrus sparkle, and aromatic dry cedar. Designed for the modern gentleman, it projects understated charm, clean masculinity, and an enduring aura of quiet strength.",
    topNotes: ["Bergamot", "Grapefruit", "Spices"],
    heartNotes: ["Geranium", "Magnolia", "Violet Leaves"],
    baseNotes: ["Vetiver", "Cedarwood", "Patchouli"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Black_Touch.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/Black_touch.jpeg"
  },
  {
    _id: "p13",
    title: "Black Horse",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Channel dynamic power with Black Horse, an invigorating creation crafted from spicy aromatic greens, leather notes, and robust woods. Its spirited character delivers tireless energy and charisma, matching the pace of your active lifestyle.",
    topNotes: ["Pink Pepper", "Green Apple"],
    heartNotes: ["Lavender", "Birch Leaves", "Leather"],
    baseNotes: ["Oakmoss", "Dry Amber", "Cedar"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Black Horse 100 gm Box & Bottle.png",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/Black_horse.jpeg"
  },
  {
    _id: "p14",
    title: "Cinema",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Feel like a star with Cinema, an enchanting symphony of sweet clementine, white florals, and creamy vanilla bean. Its radiant and comforting presence wraps you in glamorous elegance, ensuring you always take center stage effortlessly.",
    topNotes: ["Clementine", "Almond Blossom"],
    heartNotes: ["Amaryllis", "Jasmine", "Peony"],
    baseNotes: ["Bourbon Vanilla", "White Musk", "Golden Amber"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Cinema 100 gm Box & Bottle.png",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/cinema.png"
  },
  {
    _id: "p15",
    title: "Dylan Blue",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Own every room with Dylan Blue, an invigorating blend of sparkling Mediterranean citrus, crisp aquatic nuances, and smoky ambroxan. Perfectly versatile and clean, it offers a fresh masculine profile that performs flawlessly from morning meetings to late evenings.",
    topNotes: ["Calabrian Bergamot", "Grapefruit", "Aquatic Notes"],
    heartNotes: ["Violet Leaf", "Papyrus Wood", "Black Pepper"],
    baseNotes: ["Ambroxan", "Incense", "Tonka Bean"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Dylan_Blue.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/Dylan_blue.jpeg"
  },
  {
    _id: "p16",
    title: "E Collection",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Celebrate bespoke artistry with E Collection, a harmonious fusion of sweet nectar, blossoming petals, and soft woody base notes. Its graceful balance produces a delightful, welcoming scent that feels tailored for daily luxury.",
    topNotes: ["Fruity Accord", "Bergamot"],
    heartNotes: ["White Lily", "Freesia", "Orchid"],
    baseNotes: ["Clean Sandalwood", "White Musk", "Soft Amber"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/E Collection 100 gm Box & Bottle.png",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/e_collection.png"
  },
  {
    _id: "p17",
    title: "Ehsaas Al Arabia",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Feel the warmth of the Orient with Ehsas Al Arabia, a rich composition of velvety roses, delicate saffron, and soothing amber. This gentle yet persistent attar brings a sense of traditional hospitality and comforting refinement.",
    topNotes: ["Peach", "Fruity Accord"],
    heartNotes: ["Damascus Rose", "Saffron", "Lily"],
    baseNotes: ["Vanilla", "Precious Woods", "Ambergris"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Ehsaas Al Arabia 100 gm Box & Bottle.png",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/Ehsaas_Al_Arabia.jpeg"
  },
  {
    _id: "p18",
    title: "Emarat Gold",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Bask in the golden riches of Emarat Gold, where warm amber, royal spices, and polished woods unite in harmony. A grand, celebratory scent that radiates opulence, warmth, and prestige across every special moment.",
    topNotes: ["Cardamom", "Golden Citrus"],
    heartNotes: ["Honeyed Amber", "Cinnamon", "Dry Woods"],
    baseNotes: ["Oud Wood", "Musk", "Warm Benzoin"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Emarat_Gold.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/emarat_gold.jpeg"
  },
  {
    _id: "p19",
    title: "E-Rouge",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Captivate everyone with E-Rouge, an intoxicating blend of candied ambergris, warm cedar shavings, and crushed floral blossoms. It projects a chic, sweet, and airy sophistication that feels modern, lavish, and wonderfully addictive.",
    topNotes: ["Jasmine Flowers", "Saffron Sparkle"],
    heartNotes: ["Amberwood", "Soft Caramel"],
    baseNotes: ["Fir Resin", "Cedar", "White Musk"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/E_Rouge.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/e_rouge.jpeg"
  },
  {
    _id: "p20",
    title: "Good Night",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Unwind your thoughts with Good Night, a gentle and calming attar built around soothing lavender, powdery florals, and cozy musk. Its peaceful aroma helps you relax after a long day, creating a tranquil environment.",
    topNotes: ["French Lavender", "Chamomile"],
    heartNotes: ["Iris", "Soft Powdery Florals"],
    baseNotes: ["Clean Musk", "Sandalwood", "Creamy Vanilla"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Good_Night.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/good_night.jpeg"
  },
  {
    _id: "p21",
    title: "Hawas",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Ignite your vitality with Hawas, an adventurous aquatic fragrance mingling crisp green apples, sweet plum, and oceanic breezes. An invigorating everyday companion that radiates youth, magnetic energy, and refreshing masculine confidence.",
    topNotes: ["Apple", "Bergamot", "Lemon", "Cinnamon"],
    heartNotes: ["Watery Notes", "Plum", "Orange Blossom"],
    baseNotes: ["Ambergris", "Musk", "Driftwood"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Hawas.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/hawas.jpeg"
  },
  {
    _id: "p22",
    title: "Haw-As Ice",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Feel an extreme surge of freshness with Haw-As Ice, uniting frosty mint, iced citrus, and refreshing marine accords over light amber. It cuts through heat and humidity to give you a clean, arctic chill that stays crisp all day.",
    topNotes: ["Frozen Mint", "Italian Lemon", "Crisp Apple"],
    heartNotes: ["Ice Aquatic Accord", "Cardamom", "Star Anise"],
    baseNotes: ["Ambroxan", "Tonka Bean", "Clean Cedar"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Haw_As_Ice.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/haw_as_ice.jpeg"
  },
  {
    _id: "p23",
    title: "Jazira",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Take an olfactory escape to sun-drenched islands with Jazeera, featuring tropical florals, sea minerals, and sun-warmed amber woods. A uniquely uplifting and radiant attar that evokes pure warmth, freedom, and peaceful shores.",
    topNotes: ["Citrus Blossom", "Sea Spray"],
    heartNotes: ["Tropical Frangipani", "Jasmine"],
    baseNotes: ["Driftwood", "Golden Amber", "Soft Musk"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Jazira 100 gm Box & Bottle.png",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/jazira.jpeg"
  },
  {
    _id: "p24",
    title: "King Black",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Rule with authority using King Black, a commanding attar infused with rich leather, sharp spices, and noble woods. Its dominant and charismatic aroma makes an enduring statement of leadership, class, and unapologetic sophistication.",
    topNotes: ["Black Pepper", "Bergamot Zest"],
    heartNotes: ["Supple Leather", "Nutmeg", "Cacao"],
    baseNotes: ["Smoky Vetiver", "Agarwood", "Dark Amber"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/King_Black.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/king_black.jpeg"
  },
  {
    _id: "p25",
    title: "Mabet Man",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Step out in style with Marbit Men, a modern aromatic fougère that blends crisp herbal notes with smooth tonka bean and cedar. Tailored for sharp dressers, it provides an all-day fresh barbershop finish that never fades.",
    topNotes: ["Mint Leaves", "Green Apple", "Lemon"],
    heartNotes: ["Tonka Bean", "Geranium", "Ambroxan"],
    baseNotes: ["Madagascar Vanilla", "Vetiver", "Cedarwood"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Mabet Man 100 gm Box & Bottle.png",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/Mabet_man.jpeg"
  },
  {
    _id: "p26",
    title: "Misk Rijali Oud",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Experience sheer masculine refinement with Misk Rijali Oud, pairing clean, soapy musk with deep, aged wood accents. It produces an exceptionally well-groomed scent profile that conveys clean elegance, quiet strength, and effortless daily luxury.",
    topNotes: ["Fresh Herbs", "Bright Citrus"],
    heartNotes: ["Pure White Musk", "Geranium"],
    baseNotes: ["Subtle Oud", "Sandalwood", "Ambergris"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Misk_Rijali_Oud.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/misk_rijali_oudh.jpeg"
  },
  {
    _id: "p27",
    title: "Mr Blue Berry",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Delight your senses with Mr Blue Berry, an upbeat, mouthwatering fragrance packed with plump blueberries and juicy forest berries over soft vanilla. A playful, vibrant attar that spreads joy and sweet freshness with every single drop.",
    topNotes: ["Wild Blueberry", "Blackberry", "Sweet Lemon"],
    heartNotes: ["Raspberry Blossom", "Sugar Crystals"],
    baseNotes: ["Creamy Vanilla", "White Musk"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Mr Blueberry 100 gm Box & Bottle.png",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/Mr_Blueberry.jpeg"
  },
  {
    _id: "p28",
    title: "Mukhallat Badar",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Celebrate classic Arabian heritage with Mukhallat Badar, a balanced artisan blend of dewy Turkish roses, warm sandalwood, and golden amber. It offers a majestic, comforting scent profile that wraps your spirit in pure warmth and tradition.",
    topNotes: ["Rose Petals", "Warm Saffron"],
    heartNotes: ["Precious Sandalwood", "Cardamom"],
    baseNotes: ["Golden Amber", "Traditional Musk"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Mukhallat_Badar.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/mukhallat_badar.jpeg"
  },
  {
    _id: "p29",
    title: "Pink Candy",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Treat yourself to Pink Candy, a sweet, confectionary blend of pink spun sugar, ripe strawberries, and fluffy vanilla clouds. Sweet, joyful, and charmingly feminine, this delicious attar brings a bright smile and youthful spark to your day.",
    topNotes: ["Cotton Candy", "Strawberry", "Bergamot"],
    heartNotes: ["Red Licorice", "Lily of the Valley"],
    baseNotes: ["Vanilla Pod", "Caramel", "Musk"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Pink_Candy.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/pink_candy.jpeg"
  },
  {
    _id: "p30",
    title: "Musk Tahara",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Discover the pure essence of cleanliness with Al Kausar Musk Tahara, presenting a thick, velvety white musk with powdery floral nuances. Renowned for its comforting purity, it provides an uplifting, fresh-linen aura that lasts all day.",
    topNotes: ["White Lotus", "Powdery Notes"],
    heartNotes: ["Violet Petals", "Honeyed Floral Accord"],
    baseNotes: ["Creamy White Musk", "Sandalwood"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Musk Tahara 100 gm Box & Bottle.png",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/al_kausar_musk_tahara.jpeg"
  },
  {
    _id: "p31",
    title: "Nasru",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Awaken your spirit with Nasru, a traditional oriental composition highlighting zesty citrus, radiant florals, and earthy cedarwood. Its well-rounded harmony makes it an exceptional choice for daily prayers, special gatherings, and mindful contemplation.",
    topNotes: ["Citrus Zest", "Green Leaves"],
    heartNotes: ["Spicy Clove", "Rose", "Geranium"],
    baseNotes: ["Cedarwood", "Earthy Musk", "Amber"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Nasru.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/nasru.jpeg"
  },
  {
    _id: "p32",
    title: "XXS",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Make an unforgettable entrance with XXS, an energetic blend of juicy citrus, aromatic mint, and rich cocoa-touched woods. Bold, magnetic, and modern, it generates an irresistible presence tailored for evening parties and special occasions.",
    topNotes: ["Calabrian Lemon", "Sage", "Tagetes"],
    heartNotes: ["Praline", "Black Cardamom", "Cinnamon"],
    baseNotes: ["Black Amber", "Patchouli", "Rosewood"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/XXS.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/xxs.jpeg"
  },
  {
    _id: "p33",
    title: "SX",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Unleash sensual confidence with SX, a provocative attar featuring dark fruit accents, warm spices, and a magnetic musky base. Designed for magnetic appeal, its deep, intoxicating scent profile leaves a lasting impression wherever you step.",
    topNotes: ["Wild Berries", "Spicy Pepper"],
    heartNotes: ["Dark Rose", "Night Jasmine"],
    baseNotes: ["Sensual Amber", "Vanilla", "Black Musk"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/SX.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/sx.jpeg"
  },
  {
    _id: "p34",
    title: "Softy Oud",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Indulge in gentle luxury with Softy Oud, created specifically for those who love smooth, approachable agarwood without heavy medicinal tones. Softened by sweet florals and vanilla, it delivers gentle sophistication for every single day.",
    topNotes: ["Peach Blossom", "Soft Citrus"],
    heartNotes: ["Light Agarwood", "White Rose"],
    baseNotes: ["Creamy Vanilla", "Sandalwood", "Soft Musk"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Softy_Oudh.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/softy_oudh.jpeg"
  },
  {
    _id: "p35",
    title: "Shay Oud",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Experience the unique aroma of Shai Oud, combining the comforting warmth of black tea notes with rich smoky oud and spices. It creates an inviting, scholarly, and cozy atmosphere that feels wonderfully regal, distinguished, and serene.",
    topNotes: ["Black Tea Leaves", "Cardamom"],
    heartNotes: ["Precious Oud", "Clove", "Dried Fruit"],
    baseNotes: ["Leather", "Smoky Cedar", "Warm Amber"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Shay Oud 100 gm Box & Bottle.png",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/shay_oud.jpeg"
  },
  {
    _id: "p36",
    title: "Splendor",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Breathe in pure mountain freshness with Splendor, pairing sparkling green florals, bergamot, and crisp white cedarwood. A famously clean, cooling aroma that keeps you feeling revitalized, confident, and professional throughout a demanding day.",
    topNotes: ["Bergamot", "Green Accord", "Lemon"],
    heartNotes: ["Freesia", "Lily of the Valley", "Magnolia"],
    baseNotes: ["White Musk", "Cedarwood", "Ambergris"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Splendor.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/splendor.jpeg"
  },
  {
    _id: "p37",
    title: "Police",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Command respect with Police, a fearless fragrance packed with spicy black pepper, fresh herbal foliage, and smoky woods. Crisp and assertively masculine, it projects an aura of disciplined strength, reliability, and timeless charisma.",
    topNotes: ["Black Pepper", "Grapefruit"],
    heartNotes: ["Lavender", "Violet Leaves", "Nutmeg"],
    baseNotes: ["Patchouli", "Cedar", "White Amber"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Police 100 gm Box & Bottle.png",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/police.jpeg"
  },
  {
    _id: "p38",
    title: "Oud Silk Mood",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Drape yourself in sheer elegance with Oud Silk Mood, combining airy Bulgarian rose, soft chamomile, and fine agarwood. It drapes over the skin like pure liquid silk, offering a delicate, romantic, and incredibly luxurious presence.",
    topNotes: ["Bulgarian Rose", "Chamomile"],
    heartNotes: ["Moroccan Blue Rose", "Hedione"],
    baseNotes: ["Laotian Oud", "Papyrus", "Light Amber"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Oud_Silk_Mood.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/oud_silk_mood.jpeg"
  },
  {
    _id: "p39",
    title: "Smart Black",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Refine your signature presence with Smart Black, blending dark spices, smoky incense, and deep patchouli over masculine amber. An intensely rich and modern attar engineered for sophisticated evenings and confident professionals.",
    topNotes: ["Coriander", "Crisp Bergamot"],
    heartNotes: ["Black Incense", "Guaiac Wood"],
    baseNotes: ["Dark Amber", "Patchouli", "Suede"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Smart Black 100 gm Box & Bottle.png",
    designerBgImageUrl: "./src/assets/Images/Edited/bottle/Smart Black Bottle.png"
  },
  {
    _id: "p40",
    title: "Sandaliya Oud",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Experience the supreme harmony of Sandaliya Oud, bringing together smooth, creamy sandalwood and complex agarwood. This balanced woody sanctuary provides grounding tranquility, deep spiritual focus, and an enduring sense of inner royalty.",
    topNotes: ["Saffron", "Cardamom"],
    heartNotes: ["Mysore Sandalwood", "Rosewood"],
    baseNotes: ["Aged Oud", "Golden Amber", "Musk"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Sandaliya_Oud.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/sandaliya_oud.jpeg"
  },
  {
    _id: "p41",
    title: "Olympean",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Embody divine feminine power with Olympean, a heavenly collision of salty marine breeze, luminous green mandarin, and salted vanilla. This striking contrast creates a captivating, sensual trail that makes you feel utterly magnificent.",
    topNotes: ["Green Mandarin", "Water Jasmine", "Ginger Lily"],
    heartNotes: ["Salted Vanilla", "Solar Notes"],
    baseNotes: ["Cashmere Wood", "Ambergris", "Sandalwood"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Olympean 100 gm Box & Bottle.png",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/olympean.jpeg"
  },
  {
    _id: "p42",
    title: "Escape",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Break free from routine with Escape, an adventurous fragrance overflowing with juicy melon, aquatic foliage, and earthy moss. It delivers a refreshing feeling of limitless open skies, sea breezes, and rejuvenating outdoor vitality.",
    topNotes: ["Melon", "Eucalyptus", "Grapefruit"],
    heartNotes: ["Marine Accord", "Birch", "Rosemary"],
    baseNotes: ["Oakmoss", "Sandalwood", "Amber"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Escape 100 gm Box & Bottle.png",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/escape.jpeg"
  },
  {
    _id: "p43",
    title: "Fantasia",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Enter a whimsical realm with Fantasia, featuring playful pink pomelo, spicy pink pepper, and sweet pastel floral petals. Grounded by Himalayan cedar, this charming and dreamy scent brings delightful optimism to everyday moments.",
    topNotes: ["Pink Pomelo", "Cassis", "Pink Pepper"],
    heartNotes: ["Violet", "Orange Blossom", "Pastel Orchid"],
    baseNotes: ["Himalayan Cedar", "Golden Cypress", "Praline"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Fantasia.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/fantasia.jpeg"
  },
  {
    _id: "p44",
    title: "Harrera",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Embrace the rich heritage of Harera, an authentic oriental attar woven with fragrant spices, crushed florals, and warm dry woods. It delivers a soothing, homely, and enduring presence that wraps you in pure comfort and prestige.",
    topNotes: ["Cinnamon Bark", "Citrus Sparkle"],
    heartNotes: ["Red Carnation", "Rose Petals"],
    baseNotes: ["Sandalwood", "Cedar", "Soft Amber"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Harrera.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/harrera.jpeg"
  },
  {
    _id: "p45",
    title: "Russian Leather",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Experience the rugged grandeur of Russian Leather, pairing robust Siberian pine needles, frosty fern, and rich smoky leather. A masterclass in bold masculinity that transports you to vast snowy forests and warm fireside evenings.",
    topNotes: ["Pine Needles", "Basil", "Lavender"],
    heartNotes: ["Siberian Cedar", "Coriander", "Rosemary"],
    baseNotes: ["Russian Leather", "Birch Tar", "Cypress"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Russian Leather 100 gm Box & Bottle.png",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/russian_leather.jpeg"
  },
  {
    _id: "p46",
    title: "Aw Saaf Wardi",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Immerse yourself in blooming luxury with Aw Saaf Wardi, a delicate celebration of fresh Damask rose, fruity lychee, and powdery musk. Soft, romantic, and elegant, it graces your skin like freshly gathered morning petals.",
    topNotes: ["Lychee", "Sweet Orange", "Dewy Greens"],
    heartNotes: ["Damask Rose", "Peony", "Jasmine"],
    baseNotes: ["White Musk", "Cedarwood", "Cashmeran"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Aw saaf Wardi 100 gm Box & Bottle.png",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/aw_saaf_wardi.jpeg"
  },
  {
    _id: "p47",
    title: "Sandaliya Dahab Khusoosi",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Indulge in royal grandeur with Sandaliya Dahab Khusoosi, featuring select golden sandalwood distilled with rare saffron threads and honeyed amber. This rich, long-lasting formulation represents pure oriental majesty and unmatched quality.",
    topNotes: ["Kashmiri Saffron", "Nutmeg"],
    heartNotes: ["Royal Sandalwood", "Golden Amber"],
    baseNotes: ["Sweet Myrrh", "Aged Woods", "Precious Musk"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Sandaliya_Dahab_Khusoosi.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/sandaliya_dahab_khusoosi.jpeg"
  },
  {
    _id: "p48",
    title: "Yakult Sandal Aliya",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Unwind with the creamy comfort of Yakult Sandal Aliya, an innovative gourmand blend combining milky sweet nuances with buttery sandalwood. Its soothing, smooth character makes it a deeply comforting scent for peaceful daytime wear.",
    topNotes: ["Sweet Milk Accord", "Citrus Blossom"],
    heartNotes: ["Buttery Sandalwood", "Almond Milk"],
    baseNotes: ["Vanilla Cream", "White Musk"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Yakult_Sandal_Aliya.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/yakult_sandal_aliya.jpeg"
  },
  {
    _id: "p49",
    title: "Sandal Zafran",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Immerse your senses in Sandal Zafran, an exquisite marriage of authentic saffron stamens and warm, velvety sandalwood. Its warm, golden glow projects rich royal heritage, making every occasion feel genuinely celebratory.",
    topNotes: ["Pure Saffron", "Cardamom Seed"],
    heartNotes: ["Mysore Sandalwood", "Rose Water"],
    baseNotes: ["Warm Amber", "Cedar", "Earthy Musk"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Sandal_Zafran.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/sandal_zafran.jpeg"
  },
  {
    _id: "p50",
    title: "Munjool Addictive Sandal",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Experience the hypnotic warmth of Munjool Addictive Sandal, blending rich woody cedar, creamy sandalwood, and soft golden amber. Designed for true fragrance lovers, its rich, grounding character forms a calming aura that stays all day.",
    topNotes: ["Bergamot", "Cardamom"],
    heartNotes: ["Creamy Sandalwood", "Cedar Flakes"],
    baseNotes: ["Amber Crystals", "White Musk", "Dry Woods"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Munjool 100 gm Box & Bottle.png",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/munjool_addictive_sandal.jpeg"
  },
  {
    _id: "p51",
    title: "Musk Al Jawara",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Sparkle with Musk Al Jawara, an opulent jewel-like attar delivering crystalline white musk adorned with blooming white petals and gentle vanilla. Incredibly clean, graceful, and inviting, it elevates your everyday style with effortless elegance.",
    topNotes: ["White Lily", "Crisp Aldehydes"],
    heartNotes: ["Velvet Musk", "Jasmine Petals"],
    baseNotes: ["Powdered Vanilla", "Soft Cedar"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Musk_Al_Jawara.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/musk_al_jawara.jpeg"
  },
  {
    _id: "p52",
    title: "Bant Al Chad",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Experience the exotic intrigue of Bant Al Chad, inspired by rich Saharan spice traditions with clove, warm aromatic resins, and deep woods. A wonderfully unique and earthy attar that tells a story of heritage, courage, and timeless mystery.",
    topNotes: ["Clove Bud", "Aromatic Herbs"],
    heartNotes: ["Smoky Resins", "Rose Petals"],
    baseNotes: ["Earth Woods", "Dark Amber", "Musk"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Bent al Chad 100 gm Box & Bottle.png",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/bent_al_chad.jpeg"
  },
  {
    _id: "p53",
    title: "Miss Dollar",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Shine brightly with Miss Dollar, a vibrant and sparkling attar featuring juicy white peaches, sweet red berries, and radiant golden jasmine. Designed for chic trendsetters, it brings a cheerful, luxurious spark to every single moment.",
    topNotes: ["White Peach", "Raspberry", "Bergamot"],
    heartNotes: ["Golden Jasmine", "Orange Blossom"],
    baseNotes: ["Cashmeran", "Praline", "Vanilla Musk"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Miss_Dollor.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/miss_dollor.jpeg"
  },
  {
    _id: "p54",
    title: "Sandal Shabab",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Feel renewed with Sandal Shabab, a youthful and energizing interpretation of classic sandalwood lifted by crisp citrus and aquatic nuances. Fresh, smooth, and easily wearable, it is the ideal daily fragrance for vibrant, modern lifestyles.",
    topNotes: ["Fresh Lemon", "Crisp Mint"],
    heartNotes: ["Smooth Sandalwood", "Geranium"],
    baseNotes: ["Clean Cedar", "White Musk"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Sandal Shabab 100 gm Box & Bottle.png",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/sandal_shabab.jpeg"
  },
  {
    _id: "p55",
    title: "Mud Perfume Oud",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Connect with the soil through Mud Perfume Oud, combining the soothing aroma of petrichor and baked earth with noble agarwood. A deeply grounding and authentic scent that evokes the rejuvenating beauty of first rain on dry desert sands.",
    topNotes: ["Petrichor Accord", "Raindrops"],
    heartNotes: ["Baked Soil", "Light Saffron"],
    baseNotes: ["Earthy Oud", "Sandalwood", "Amber"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Mud 100 gm Box & Bottle.png",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/Mud_perfume_oud.jpeg"
  },
  {
    _id: "p56",
    title: "Double Cherry",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Surrender to the sweet indulgence of Double Cherry, loaded with ripe dark cherries, bitter almond drops, and rich vanilla liqueur. Deep, glossy, and deliciously seductive, it creates a luscious scent bubble that you will never want to leave.",
    topNotes: ["Black Cherry", "Bitter Almond", "Cherry Liqueur"],
    heartNotes: ["Turkish Rose", "Jasmine Sambac", "Plum"],
    baseNotes: ["Tonka Bean", "Vanilla", "Sandalwood", "Cedar"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Double_Cherry.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/double_cherry.png"
  },
  {
    _id: "p57",
    title: "Double Apple",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Invigorate your senses with Double Apple, blending crisp green granny smith and sweet red delicious apples with a hint of warm anise. Crisp, mouthwatering, and lively, it offers a refreshing punch of fruity sweetness all day long.",
    topNotes: ["Green Apple", "Red Apple"],
    heartNotes: ["Star Anise", "Cinnamon Shavings"],
    baseNotes: ["White Musk", "Cedar Shavings"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Double_Apple.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/double_apple.png"
  },
  {
    _id: "p58",
    title: "Bubble Gum",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Bring back delightful childhood memories with Bubble Gum, an irresistibly sweet explosion of pink candy, strawberry syrup, and banana sugar. Cheerful, nostalgic, and long-lasting, it adds pure joy and colorful fun to your perfume collection.",
    topNotes: ["Pink Bubblegum Accord", "Fruity Candies"],
    heartNotes: ["Strawberry", "Banana", "Cherry Drop"],
    baseNotes: ["Sweet Vanilla", "Spun Sugar", "Soft Musk"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Bubble_Gum.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/bubble_gum.png"
  },
  {
    _id: "p59",
    title: "Pear",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Bask in the juicy elegance of Pear, capturing the crisp sweetness of freshly picked Williams pears blended with white freesia petals. Clean, luminous, and refined, it provides a gentle, revitalizing trail perfect for warm sunny days.",
    topNotes: ["King William Pear", "Melon"],
    heartNotes: ["White Freesia", "Rose Petals"],
    baseNotes: ["Patchouli", "Rhubarb", "Clean Musk"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Pear.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/pear.png"
  },
  {
    _id: "p60",
    title: "Water Melon",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Beat the heat with Water Melon, an ultra-cooling, mouthwatering blend of chilled watermelon slices, crisp cucumber, and green melon skin. Exceptionally refreshing and uplifting, it delivers instant vitality and a sweet, breezy feeling.",
    topNotes: ["Chilled Watermelon", "Pink Grapefruit"],
    heartNotes: ["Cucumber Water", "Lotus Blossom"],
    baseNotes: ["Crystalline Musk", "Light Woods"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Water_Melon.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/water_melon.png"
  },
  {
    _id: "p61",
    title: "Sugar Yum",
    type: "100GM",
    longevity: "24+ Hours",
    description: "Satisfy your sweet tooth with Sugar Yum, a decadent gourmand dream featuring golden brown sugar, glazed pistachios, and rich melted vanilla caramel. Cozy, sweet, and comforting, it wraps you in an irresistible blanket of pure warmth.",
    topNotes: ["Caramelized Sugar", "Marshmallow"],
    heartNotes: ["Pistachio Cream", "Toffee"],
    baseNotes: ["Vanilla Bean", "Golden Honey", "White Amber"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Sugar_Yum.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/sugar_yum.png"
  },

  // ==========================================
  // AL KAUSAR 6 ML COLLECTION
  // ==========================================
  {
    _id: "p62",
    title: "Al Kausar Oud",
    type: "6ML",
    longevity: "24+ Hours",
    description: "Enjoy the luxury of pure oriental agarwood in a handy pocket roll-on format with Al Kausar Oud. Its deep woody warmth and dignified smoky presence ensure you can refresh your distinguished signature scent wherever life takes you.",
    topNotes: ["Bergamot", "Saffron"],
    heartNotes: ["Rich Agarwood", "Smoky Cedar"],
    baseNotes: ["Amber", "Sandalwood", "Precious Musk"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Al_Kausar_Oud_6ML.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/al_kausar_oud_6ml.png"
  },
  {
    _id: "p63",
    title: "Ameer Oud",
    type: "6ML",
    longevity: "24+ Hours",
    description: "Carry regal elegance in your pocket with Ameer Oud 6ml, offering an irresistible combination of roasted vanilla, burnt sugar, and rich agarwood. Perfectly sized for on-the-go luxury, it delivers enduring warmth and royal sophistication.",
    topNotes: ["Cinnamon", "Nutmeg"],
    heartNotes: ["Caramelized Sugar", "Smooth Oud"],
    baseNotes: ["Vanilla Pod", "Amber", "Sandalwood"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Ameer_Oud_6ML.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/ameer_oud_6ml.png"
  },
  {
    _id: "p64",
    title: "Amouge Interlude",
    type: "6ML",
    longevity: "24+ Hours",
    description: "Command instant respect with Amouge Interlude 6ml, featuring a compact powerhouse of smoldering frankincense, oregano herbs, and dark rugged leather. Just a single swipe releases a rich, commanding scent bubble that endures endlessly.",
    topNotes: ["Oregano", "Pimento Berry", "Bergamot"],
    heartNotes: ["Incense", "Opoponax", "Amber"],
    baseNotes: ["Leather", "Agarwood Smoke", "Patchouli"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/6ml/Ameage 6ml Bottle & Box.png",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/6ml/Ameage 6ml Bottle & Box.png"
  },
  {
    _id: "p65",
    title: "Aqua 121",
    type: "6ML",
    longevity: "24+ Hours",
    description: "Stay revitalized on the move with Aqua 121, packed with vibrant crushed greens, zesty citrus peel, and soothing gardenia musks. Its crisp, invigorating formulation keeps you feeling thoroughly clean, alert, and active anywhere you go.",
    topNotes: ["Citrus Zest", "Green Leaves"],
    heartNotes: ["Ginger", "Gardenia Petals"],
    baseNotes: ["Clean Musk", "Sandalwood", "Vetiver"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Aqua_121_6ML.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/aqua_121_6ml.png"
  },
  {
    _id: "p66",
    title: "Bacaar Rouge",
    type: "6ML",
    longevity: "24+ Hours",
    description: "Experience world-famous luxury with Bacaar Rouge 6ml, showcasing sweet burnt sugar, rare saffron, and luminous ambergris. Its radiant, airy elegance turns every setting into an upscale event with remarkable sillage and lasting grace.",
    topNotes: ["Saffron", "Bitter Almond"],
    heartNotes: ["Jasmine Sambac", "Spun Sugar"],
    baseNotes: ["Ambergris", "Cedarwood", "Cashmeran"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Bacaar_Rouge_6ML.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/bacaar_rouge_6ml.png"
  },
  {
    _id: "p67",
    title: "Black Oud",
    type: "6ML",
    longevity: "24+ Hours",
    description: "Make an unforgettable statement with Black Oud 6ml, uniting deep crimson roses with earthy patchouli and rich agarwood. Powerful, dark, and romantic, this compact concentrated attar provides intense projection with just one simple dab.",
    topNotes: ["Crimson Rose", "Mandarin"],
    heartNotes: ["Aged Agarwood", "French Labdanum"],
    baseNotes: ["Dark Patchouli", "Musk", "Leather"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Black Oud_6ML.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/black_oud_6ml.png"
  },
  {
    _id: "p68",
    title: "Black Touch",
    type: "6ML",
    longevity: "24+ Hours",
    description: "Exude timeless poise with Black Touch 6ml, blending sparkling citrus, crisp vetiver root, and smoky cedarwood. Designed for gentlemen seeking refined elegance, it offers an understated yet enduring fragrance suitable for any business or formal meeting.",
    topNotes: ["Bergamot", "Grapefruit", "Spices"],
    heartNotes: ["Geranium", "Magnolia", "Violet Leaves"],
    baseNotes: ["Vetiver", "Cedarwood", "Patchouli"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Black_Touch_6ML.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/black_touch_6ml.png"
  },
  {
    _id: "p69",
    title: "Cinema",
    type: "6ML",
    longevity: "24+ Hours",
    description: "Bring red-carpet sparkle to your routine with Cinema 6ml, featuring sweet clementine, velvety white blossoms, and warm Madagascar vanilla. A delightful pocket companion that makes you feel glamorous, confident, and celebrated every single day.",
    topNotes: ["Clementine", "Almond Blossom"],
    heartNotes: ["Amaryllis", "Jasmine", "Peony"],
    baseNotes: ["Bourbon Vanilla", "White Musk", "Golden Amber"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Cinema_6ML.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/cinema_6ml.png"
  },
  {
    _id: "p70",
    title: "E Collection",
    type: "6ML",
    longevity: "24+ Hours",
    description: "Enjoy an effortless blend of delicate florals and soothing soft woods with E Collection 6ml. Perfectly balanced for effortless all-day wear, it offers a gentle, refreshing aroma that enhances your natural elegance without overpowering.",
    topNotes: ["Fruity Accord", "Bergamot"],
    heartNotes: ["White Lily", "Freesia", "Orchid"],
    baseNotes: ["Clean Sandalwood", "White Musk", "Soft Amber"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/E_Collection_6ML.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/e_collection_6ml.png"
  },
  {
    _id: "p71",
    title: "Emarte Gold",
    type: "6ML",
    longevity: "24+ Hours",
    description: "Capture the luxury of gold in a compact roll-on with Emarte Gold 6ml, featuring spicy cardamom, honeyed amber, and refined woody undertones. Its warm, regal scent makes you stand out effortlessly during family events and festivals.",
    topNotes: ["Cardamom", "Golden Citrus"],
    heartNotes: ["Honeyed Amber", "Cinnamon", "Dry Woods"],
    baseNotes: ["Oud Wood", "Musk", "Warm Benzoin"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Emarte_Gold_6ML.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/emarte_gold_6ml.png"
  },
  {
    _id: "p72",
    title: "Hawas",
    type: "6ML",
    longevity: "24+ Hours",
    description: "Boost your energy on the fly with Hawas 6ml, an invigorating blend of sweet apples, aquatic breezes, and spicy cinnamon. This portable powerhouse guarantees an active, masculine trail that stays lively through busy workouts and travel.",
    topNotes: ["Apple", "Bergamot", "Lemon", "Cinnamon"],
    heartNotes: ["Watery Notes", "Plum", "Orange Blossom"],
    baseNotes: ["Ambergris", "Musk", "Driftwood"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Hawas_6ML.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/hawas_6ml.png"
  },
  {
    _id: "p73",
    title: "King Black",
    type: "6ML",
    longevity: "24+ Hours",
    description: "Lead with quiet strength using King Black 6ml, a compact fragrance infused with sharp black pepper, fine leather, and smoky agarwood. Designed for strong individuals who prefer a commanding, deep presence that lasts across multiple hours.",
    topNotes: ["Black Pepper", "Bergamot Zest"],
    heartNotes: ["Supple Leather", "Nutmeg", "Cacao"],
    baseNotes: ["Smoky Vetiver", "Agarwood", "Dark Amber"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/King_Black_6ML.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/king_black_6ml.png"
  },
  {
    _id: "p74",
    title: "Marbit Men",
    type: "6ML",
    longevity: "24+ Hours",
    description: "Maintain a sharp, clean grooming standard with Marbit Men 6ml, combining crisp green apple, fresh mint leaves, and rich tonka bean. Its fresh fougère aroma gives you that straight-from-the-barbershop feeling anywhere you go.",
    topNotes: ["Mint Leaves", "Green Apple", "Lemon"],
    heartNotes: ["Tonka Bean", "Geranium", "Ambroxan"],
    baseNotes: ["Madagascar Vanilla", "Vetiver", "Cedarwood"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Marbit_Men_6ML.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/marbit_men_6ml.png"
  },
  {
    _id: "p75",
    title: "Misk Rijali Oud",
    type: "6ML",
    longevity: "24+ Hours",
    description: "Discover clean masculine poise with Misk Rijali Oud 6ml, fusing crystal-clear white musk with grounding agarwood accents. It delivers an unmistakably crisp, confident scent profile that suits everyday work and special occasions alike.",
    topNotes: ["Fresh Herbs", "Bright Citrus"],
    heartNotes: ["Pure White Musk", "Geranium"],
    baseNotes: ["Subtle Oud", "Sandalwood", "Ambergris"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Misk_Rijali_Oud_6ML.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/misk_rijali_oud_6ml.png"
  },
  {
    _id: "p76",
    title: "Mukhallat Badar",
    type: "6ML",
    longevity: "24+ Hours",
    description: "Experience classic Arabic perfumery on the go with Mukhallat Badar 6ml, uniting velvety roses, warm sandalwood, and golden amber. Its comforting, noble trail is great for daily prayers and personal relaxation moments throughout the day.",
    topNotes: ["Rose Petals", "Warm Saffron"],
    heartNotes: ["Precious Sandalwood", "Cardamom"],
    baseNotes: ["Golden Amber", "Traditional Musk"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Mukhallat_Badar_6ML.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/mukhallat_badar_6ml.png"
  },
  {
    _id: "p77",
    title: "Oud Al Haram",
    type: "6ML",
    longevity: "24+ Hours",
    description: "Imbue your day with calm reverie through Oud Al Haram 6ml, offering peaceful frankincense, aged woods, and smooth amber resins. A sacred, spiritual attar sized conveniently to keep your presence tranquil and grounded everywhere.",
    topNotes: ["Frankincense", "Taif Rose"],
    heartNotes: ["Aged Oud", "Warm Spices"],
    baseNotes: ["Sweet Amber", "White Musk", "Cedarwood"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Oud_Al_Haram_6ML.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/oud_al_haram_6ml.png"
  },
  {
    _id: "p78",
    title: "Shai Oud",
    type: "6ML",
    longevity: "24+ Hours",
    description: "Enjoy the refined blend of aromatic black tea leaves and smooth woody oud in Shai Oud 6ml. Cozy, scholarly, and warm, this portable fragrance brings an air of quiet intellect and distinctive charm wherever you carry it.",
    topNotes: ["Black Tea Leaves", "Cardamom"],
    heartNotes: ["Precious Oud", "Clove", "Dried Fruit"],
    baseNotes: ["Leather", "Smoky Cedar", "Warm Amber"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Shai_Oud_6ML.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/shai_oud_6ml.png"
  },
  {
    _id: "p79",
    title: "SX",
    type: "6ML",
    longevity: "24+ Hours",
    description: "Unleash hypnotic charisma with SX 6ml, highlighting intoxicating wild berries, warm exotic spices, and sweet seductive musk. Perfectly pocket-sized, this sultry attar delivers instant magnetism for dates and late-night celebrations.",
    topNotes: ["Wild Berries", "Spicy Pepper"],
    heartNotes: ["Dark Rose", "Night Jasmine"],
    baseNotes: ["Sensual Amber", "Vanilla", "Black Musk"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/SX_6ML.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/sx_6ml.png"
  },
  {
    _id: "p80",
    title: "XXS",
    type: "6ML",
    longevity: "24+ Hours",
    description: "Step out boldly with XXS 6ml, an invigorating mix of bright lemon zest, sweet praline, and deep woody amber. Its thrilling, modern character delivers high energy and compliments throughout your busy social evenings.",
    topNotes: ["Calabrian Lemon", "Sage", "Tagetes"],
    heartNotes: ["Praline", "Black Cardamom", "Cinnamon"],
    baseNotes: ["Black Amber", "Patchouli", "Rosewood"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/XXS_6ML.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/xxs_6ml.png"
  },
  {
    _id: "p81",
    title: "Dirgham",
    type: "6ML",
    longevity: "24+ Hours",
    description: "Energize your daily routine with Dirgham 6ml, an uplifting blend of sunlit citrus, sweet white florals, and comforting cedarwood. Crisp, noble, and versatile, it keeps you feeling positive and sharp through any challenge.",
    topNotes: ["Mandarin", "Lemongrass", "Pineapple"],
    heartNotes: ["Jasmine", "Lily of the Valley", "Rose"],
    baseNotes: ["Cedarwood", "Vanilla", "White Musk"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Dirgham_6ML.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/dirgham_6ml.png"
  },
  {
    _id: "p82",
    title: "Aswad",
    type: "6ML",
    longevity: "24+ Hours",
    description: "Immerse yourself in mystery with Aswad 6ml, combining dark smoky incense, crushed black pepper, and resinous woods. A deep, mysterious roll-on attar that establishes an aura of unmistakable strength and masculine prestige.",
    topNotes: ["Black Pepper", "Smoky Bergamot"],
    heartNotes: ["Incense", "Labdanum", "Nutmeg"],
    baseNotes: ["Black Amber", "Oud Wood", "Leather"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Aswad_6ML.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/aswad_6ml.png"
  },
  {
    _id: "p83",
    title: "Jawahara",
    type: "6ML",
    longevity: "24+ Hours",
    description: "Shine bright with Jawahara 6ml, an attar sparkling with sweet orchard fruits, blooming jasmine, and creamy vanilla musk. Its joyful, sweet fragrance spreads pure radiance and warmth wherever you decide to wear it.",
    topNotes: ["Golden Pear", "Peach", "Bergamot"],
    heartNotes: ["Jasmine Blossoms", "Orange Flower"],
    baseNotes: ["Vanilla Pod", "Amber", "Cashmere Musk"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Jawahara_6ML.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/jawahara_6ml.png"
  },
  {
    _id: "p84",
    title: "Now",
    type: "6ML",
    longevity: "24+ Hours",
    description: "Capture the moment with Now 6ml, an explosion of juicy pineapple, crisp green apple, and smooth woody ambroxan. Modern, crisp, and high on compliments, this vibrant attar keeps your presence bold and delightfully trendy.",
    topNotes: ["Juicy Pineapple", "Bergamot", "Apple"],
    heartNotes: ["Birch", "Patchouli", "Moroccan Jasmine"],
    baseNotes: ["Ambroxan", "Musk", "Oakmoss"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Now_6ML.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/now_6ml.png"
  },
  {
    _id: "p85",
    title: "Super Rebel",
    type: "6ML",
    longevity: "24+ Hours",
    description: "Break the mold with Super Rebel 6ml, a daring combination of spicy chili, zesty citrus, and smoky vetiver woods. It expresses untamed charisma and fearless individuality, perfect for those who create their own rules.",
    topNotes: ["Red Pepper", "Grapefruit", "Pink Pepper"],
    heartNotes: ["Lavender", "Saffron", "Elemi Resin"],
    baseNotes: ["Smoky Vetiver", "Tobacco Leaves", "Leather"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Super_Rebel_6ML.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/super_rebel_6ml.png"
  },
  {
    _id: "p86",
    title: "Inspiration",
    type: "6ML",
    longevity: "24+ Hours",
    description: "Ignite creative passion with Inspiration 6ml, an uplifting blend of clean citrus, aromatic herbs, and soft cedarwood. Its bright, balanced character clears the mind and brings an airy, refined freshness to your work day.",
    topNotes: ["Mandarin", "Pink Pepper", "Clary Sage"],
    heartNotes: ["Peony", "Jasmine Petals", "Lily"],
    baseNotes: ["Sandalwood", "Vanilla Musk", "Iris"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Inspiration_6ML.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/inspiration_6ml.png"
  },
  {
    _id: "p87",
    title: "Chocolate",
    type: "6ML",
    longevity: "24+ Hours",
    description: "Treat your senses to Chocolate 6ml, a mouthwatering gourmand attar celebrating dark cocoa, sweet milk chocolate, and warm vanilla. It creates an irresistible, comforting trail that feels just like a rich, sweet hug on a cold day.",
    topNotes: ["Dark Cocoa Powder", "Sweet Orange"],
    heartNotes: ["Milk Chocolate", "Roasted Hazelnut"],
    baseNotes: ["Vanilla Cream", "Caramelized Sugar", "Musk"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Chocolate_6ML.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/chocolate_6ml.png"
  },
  {
    _id: "p88",
    title: "Zahra",
    type: "6ML",
    longevity: "24+ Hours",
    description: "Celebrate natural beauty with Zahra 6ml, a glowing floral bouquet brimming with fresh marigolds, red roses, and tender white petals. Clean, joyful, and radiant, it surrounds you in a soft garden breeze that lasts for hours.",
    topNotes: ["Green Florals", "Sweet Mandarin"],
    heartNotes: ["Rose Petals", "Marigold", "Jasmine"],
    baseNotes: ["White Musk", "Soft Sandalwood", "Amber"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Zahra_6ML.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/zahra_6ml.png"
  },
  {
    _id: "p89",
    title: "Al Fares",
    type: "6ML",
    longevity: "24+ Hours",
    description: "Channel the chivalry of Arabian knights with Al Fares 6ml, a noble composition of spicy herbal greenery and warm dry cedarwood. It projects an aura of dignity, timeless honor, and crisp masculinity through every occasion.",
    topNotes: ["Herbal Notes", "Crisp Thyme", "Bergamot"],
    heartNotes: ["Spicy Clove", "Patchouli Leaves"],
    baseNotes: ["Cedarwood", "Oakmoss", "Classic Musk"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Al_Fares_6ML.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/al_fares_6ml.png"
  },
  {
    _id: "p90",
    title: "Zamzam",
    type: "6ML",
    longevity: "24+ Hours",
    description: "Feel peaceful purity with Zamzam 6ml, an ultra-clean fragrance built on crisp watery notes, gentle rose water, and soft white musk. Its deeply refreshing and serene trail brings a comforting sense of calm clarity wherever you go.",
    topNotes: ["Water Accord", "Fresh Mint"],
    heartNotes: ["Rose Water", "Lotus Petals"],
    baseNotes: ["Pure White Musk", "Clear Amber"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Zamzam_6ML.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/zamzam_6ml.png"
  },
  {
    _id: "p91",
    title: "Attack",
    type: "6ML",
    longevity: "24+ Hours",
    description: "Make an unforgettable impression with Attack 6ml, an intensely energetic burst of sharp spices, citrus zest, and robust woods. Engineered for dynamic personalities who want an active, confident fragrance that refuses to fade away.",
    topNotes: ["Crushed Pepper", "Grapefruit", "Lemon"],
    heartNotes: ["Cardamom", "Geranium Leaves"],
    baseNotes: ["Smoky Cedar", "Vetiver", "Ambergris"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Attack_6ML.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/attack_6ml.png"
  },
  {
    _id: "p92",
    title: "Sabaya",
    type: "6ML",
    longevity: "24+ Hours",
    description: "Embrace feminine grace with Sabaya 6ml, a sweet, blossoming blend of morning roses, sparkling green citrus, and luminous white musk. Playful, clean, and charming, it brings a bright sunny aura that brightens every single day.",
    topNotes: ["Green Citrus", "Fresh Apple"],
    heartNotes: ["Taif Rose", "Jasmine Blossoms"],
    baseNotes: ["Clean White Musk", "Warm Amber"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Sabaya_6ML.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/sabaya_6ml.png"
  },
  {
    _id: "p93",
    title: "Bushra",
    type: "6ML",
    longevity: "24+ Hours",
    description: "Welcome good news and happy moments with Bushra 6ml, an uplifting attar brimming with sweet orchard fruits, honeyed florals, and warm amber. Its cheerful, comforting scent wraps you in celebration, joy, and positive energy.",
    topNotes: ["Sweet Orange", "Red Apple"],
    heartNotes: ["Honeyed Jasmine", "White Lily"],
    baseNotes: ["Golden Amber", "Musk", "Sandalwood"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Bushra_6ML.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/bushra_6ml.png"
  },
  {
    _id: "p94",
    title: "Dakar",
    type: "6ML",
    longevity: "24+ Hours",
    description: "Rediscover vintage masculine strength with Dakar 6ml, featuring an authentic blend of earthy oakmoss, crushed sage, and aromatic woods. Classic, reliable, and deeply bold, it evokes the rugged confidence of traditional barber craftsmanship.",
    topNotes: ["Sage", "Bergamot", "Artemisia"],
    heartNotes: ["Lavender", "Galbanum", "Cedar Leaves"],
    baseNotes: ["Rich Oakmoss", "Leather", "Patchouli"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Dakar_6ML.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/dakar_6ml.png"
  },
  {
    _id: "p95",
    title: "Noora",
    type: "6ML",
    longevity: "24+ Hours",
    description: "Illuminate your presence with Noora 6ml, an oriental masterpiece brimming with luscious strawberries, sweet orange blossom, and rich golden amber. Its radiant, sweet, and comforting trail makes every casual moment feel truly luxurious.",
    topNotes: ["Strawberry", "Orange Blossom", "Plum"],
    heartNotes: ["Rose Petals", "Ylang-Ylang", "Ginger Lily"],
    baseNotes: ["Golden Vanilla", "Honeyed Amber", "Sandalwood"],
    whiteBgImageUrl: "./src/assets/Images/whitebg/bottlebox/Noora_6ML.jpeg",
    designerBgImageUrl: "./src/assets/Images/Edited/bottlebox/noora_6ml.png"
  }
];

// Export products with Vite-resolved production images
export const STATIC_PRODUCTS = RAW_STATIC_PRODUCTS.map((product) => ({
  ...product,

  whiteBgImageUrl: resolveProductImage(
    product.whiteBgImageUrl
  ),

  designerBgImageUrl: resolveProductImage(
    product.designerBgImageUrl
  ),
}));
