function createPlaceholderImages(productId, colors) {
    return colors.map((colorPair, index) => ({
        id: `${productId}-image-0${index + 1}`,
        label: `Placeholder image ${index + 1}`,
        colors: colorPair
    }));
}

const pearlPalette = [
    ["#e7ddd4", "#f8f3ec"],
    ["#d8c9bc", "#f1e7dc"],
    ["#eee8df", "#cfc1b5"],
    ["#dacdc4", "#fffaf2"]
];

const blushPalette = [
    ["#e9cfc8", "#faf0ea"],
    ["#dcbeb6", "#f5e2db"],
    ["#f1ded7", "#ceb1aa"],
    ["#dfc5bd", "#fff5ef"]
];

const stonePalette = [
    ["#d8d3cc", "#f4f1eb"],
    ["#c7c0b8", "#e8e2db"],
    ["#e5e1dc", "#bcb4ab"],
    ["#d0cac3", "#faf7f1"]
];

const champagnePalette = [
    ["#dcc9a8", "#f7efe1"],
    ["#cdb893", "#eee1cb"],
    ["#eadcc2", "#bda887"],
    ["#d5c09f", "#fff7e8"]
];

const productCategories = [
    {
        id: "rings",
        name: "Rings",
        introduction: "Sculptural silhouettes and delicate details designed to bring a polished finish to every gesture.",
        products: [
            {
                id: "ring-01",
                name: "Dawn Halo Ring",
                summary: "A luminous halo with a softly modern profile.",
                description: "The Dawn Halo Ring frames a radiant center with a refined circle of light. Its balanced proportions make it an effortless statement for celebrations and everyday elegance alike.",
                images: createPlaceholderImages("ring-01", pearlPalette)
            },
            {
                id: "ring-02",
                name: "Blush Arc Ring",
                summary: "A graceful curve inspired by a rising horizon.",
                description: "The Blush Arc Ring follows a fluid, upward line that feels light and contemporary. Wear it alone for quiet polish or pair it with slim bands for a layered look.",
                images: createPlaceholderImages("ring-02", blushPalette)
            },
            {
                id: "ring-03",
                name: "Celeste Signet",
                summary: "A softened signet with understated character.",
                description: "The Celeste Signet reimagines a classic shape with rounded edges and a smooth, luminous face. Its confident simplicity brings an elevated touch to daily styling.",
                images: createPlaceholderImages("ring-03", stonePalette)
            },
            {
                id: "ring-04",
                name: "Golden Thread Ring",
                summary: "Fine interwoven lines with a warm glow.",
                description: "The Golden Thread Ring brings slender bands together in an airy woven form. The open construction catches light from every angle while remaining delicate on the hand.",
                images: createPlaceholderImages("ring-04", champagnePalette)
            },
            {
                id: "ring-05",
                name: "Petal Light Ring",
                summary: "A delicate floral form with subtle sparkle.",
                description: "The Petal Light Ring takes its cue from unfolding petals, arranged around a softly gleaming center. It adds a romantic detail without losing its clean, modern feeling.",
                images: createPlaceholderImages("ring-05", blushPalette)
            },
            {
                id: "ring-06",
                name: "Moonline Band",
                summary: "A slender crescent traced in polished light.",
                description: "The Moonline Band curves gently across the finger in a minimal crescent silhouette. Its smooth finish and easy proportions make it a versatile piece for stacking or wearing solo.",
                images: createPlaceholderImages("ring-06", pearlPalette)
            }
        ]
    },
    {
        id: "earrings",
        name: "Earrings",
        introduction: "From subtle shimmer to expressive movement, these pieces frame the face with modern elegance.",
        products: [
            {
                id: "earring-01",
                name: "Morning Drop Earrings",
                summary: "Light-catching drops with an elegant sway.",
                description: "Morning Drop Earrings suspend smooth luminous forms from refined settings. Their gentle movement brings brightness to the face and an effortless finish to both daytime and evening looks.",
                images: createPlaceholderImages("earring-01", pearlPalette)
            },
            {
                id: "earring-02",
                name: "Rose Orbit Hoops",
                summary: "Rounded hoops traced with a blush-toned glow.",
                description: "Rose Orbit Hoops balance a familiar circular silhouette with softly sculpted volume. Designed to feel polished yet relaxed, they are an easy signature for everyday wear.",
                images: createPlaceholderImages("earring-02", blushPalette)
            },
            {
                id: "earring-03",
                name: "Silver Leaf Studs",
                summary: "Petite leaves shaped with crisp simplicity.",
                description: "Silver Leaf Studs capture the clean outline of a young leaf in a compact, polished form. Their restrained scale offers a fresh detail that layers beautifully with other earrings.",
                images: createPlaceholderImages("earring-03", stonePalette)
            },
            {
                id: "earring-04",
                name: "Sunveil Climbers",
                summary: "A fine line of light sweeping upward.",
                description: "Sunveil Climbers follow the curve of the ear with a graduated trail of warm shimmer. Their elongated line creates a contemporary statement while retaining a delicate character.",
                images: createPlaceholderImages("earring-04", champagnePalette)
            },
            {
                id: "earring-05",
                name: "Soft Echo Drops",
                summary: "Paired organic forms in quiet motion.",
                description: "Soft Echo Drops combine two fluid shapes that move gently together. The sculptural pairing feels artistic and refined, offering an expressive accent without overpowering the wearer.",
                images: createPlaceholderImages("earring-05", blushPalette)
            },
            {
                id: "earring-06",
                name: "Luna Pearl Hoops",
                summary: "Slim hoops finished with luminous pearl accents.",
                description: "Luna Pearl Hoops pair a clean, slender circle with softly glowing pearl-inspired details. The contrast of line and luster makes them timeless, feminine, and easy to style.",
                images: createPlaceholderImages("earring-06", pearlPalette)
            }
        ]
    },
    {
        id: "necklaces",
        name: "Necklaces",
        introduction: "Refined chains and expressive pendants created to layer, shine, and become part of your daily rhythm.",
        products: [
            {
                id: "necklace-01",
                name: "Aurora Pendant",
                summary: "A radiant centerpiece on a delicate chain.",
                description: "The Aurora Pendant gathers light in a smooth central form suspended from a fine chain. Its quiet radiance rests elegantly at the collarbone and layers with ease.",
                images: createPlaceholderImages("necklace-01", pearlPalette)
            },
            {
                id: "necklace-02",
                name: "Blush Horizon Necklace",
                summary: "A curved bar with a soft rose-inspired finish.",
                description: "The Blush Horizon Necklace draws a gentle arc across the neckline. Its minimal silhouette and warm tone create a contemporary foundation for both simple and layered styling.",
                images: createPlaceholderImages("necklace-02", blushPalette)
            },
            {
                id: "necklace-03",
                name: "Quiet Star Lariat",
                summary: "A slender lariat ending in a subtle star detail.",
                description: "The Quiet Star Lariat falls in a graceful vertical line, finished with a small celestial accent. Adjustable styling lets its clean shape complement open necklines and layered chains.",
                images: createPlaceholderImages("necklace-03", stonePalette)
            },
            {
                id: "necklace-04",
                name: "Golden Current Chain",
                summary: "Fluid links with a softly sculpted rhythm.",
                description: "The Golden Current Chain joins rounded links in an easy, flowing sequence. Its warm polish catches the light while the refined scale keeps it versatile for everyday wear.",
                images: createPlaceholderImages("necklace-04", champagnePalette)
            },
            {
                id: "necklace-05",
                name: "Petal Moon Pendant",
                summary: "Floral softness meets a crescent silhouette.",
                description: "The Petal Moon Pendant blends a delicate petal motif with the calm curve of a crescent. The result is a romantic, modern emblem designed to sit close to the heart.",
                images: createPlaceholderImages("necklace-05", blushPalette)
            },
            {
                id: "necklace-06",
                name: "Pearl Mist Strand",
                summary: "Scattered luminous accents on a fine chain.",
                description: "The Pearl Mist Strand places softly glowing details at airy intervals along a delicate chain. Light and graceful, it brings texture to a neckline without feeling formal.",
                images: createPlaceholderImages("necklace-06", pearlPalette)
            }
        ]
    },
    {
        id: "bracelets",
        name: "Bracelets",
        introduction: "Polished lines and delicate movement designed to bring effortless detail to the wrist.",
        products: [
            {
                id: "bracelet-01",
                name: "Dawnline Bracelet",
                summary: "A fine luminous line with a radiant center.",
                description: "The Dawnline Bracelet traces the wrist with a slender chain and a softly gleaming focal point. Its balanced simplicity makes it a natural companion for every day.",
                images: createPlaceholderImages("bracelet-01", pearlPalette)
            },
            {
                id: "bracelet-02",
                name: "Rose Ribbon Cuff",
                summary: "A fluid open cuff shaped like folded ribbon.",
                description: "The Rose Ribbon Cuff curves around the wrist in a smooth, sculptural sweep. Its open shape feels modern and expressive while the soft finish keeps the look refined.",
                images: createPlaceholderImages("bracelet-02", blushPalette)
            },
            {
                id: "bracelet-03",
                name: "Stillwater Bangle",
                summary: "A clean polished circle with serene simplicity.",
                description: "The Stillwater Bangle celebrates an uninterrupted line and a mirror-smooth finish. Worn alone it feels quietly confident; stacked, it adds a crisp rhythm to the wrist.",
                images: createPlaceholderImages("bracelet-03", stonePalette)
            },
            {
                id: "bracelet-04",
                name: "Sun Thread Bracelet",
                summary: "Warm interlaced strands with delicate texture.",
                description: "The Sun Thread Bracelet brings fine strands together in a subtle woven pattern. Its tactile surface reflects warm points of light and layers easily with a watch or bangle.",
                images: createPlaceholderImages("bracelet-04", champagnePalette)
            },
            {
                id: "bracelet-05",
                name: "Blossom Link Bracelet",
                summary: "Petal-inspired links joined in a graceful chain.",
                description: "The Blossom Link Bracelet repeats a softly abstracted petal along the wrist. The articulated design moves comfortably while creating a romantic and distinctive silhouette.",
                images: createPlaceholderImages("bracelet-05", blushPalette)
            },
            {
                id: "bracelet-06",
                name: "Moonlit Pearl Chain",
                summary: "A delicate chain dotted with gentle luster.",
                description: "The Moonlit Pearl Chain combines a fine link with evenly spaced pearl-inspired accents. It offers an airy glow that feels elegant on its own and effortless in a stack.",
                images: createPlaceholderImages("bracelet-06", pearlPalette)
            }
        ]
    }
];

export default productCategories;
