/* dry&co — sellable catalogue, cart, quick-view, bundles */

const FREE_SHIP = (typeof SITE !== "undefined" && SITE.freeShipZar) || 1200;
const WA_NUMBER = (typeof SITE !== "undefined" && SITE.whatsapp) || "27600000000";

const PRODUCTS = [
  {
    id: "dry-robe-sand",
    name: "Cape Dry Robe",
    category: "drying",
    catLabel: "Dry Ritual",
    price: 690,
    compare: 890,
    badge: "bestseller",
    rating: 4.9,
    reviews: 128,
    stock: 14,
    hook: "The robe that started the brand.",
    desc: "Double-layer microfibre that drinks water after beach, bath or pool. Soft enough for sofa naps. The piece customers reorder for every dog in the house.",
    colors: "Sand / Navy trim",
    sizes: ["S", "M", "L", "XL"],
    source: "Sewn in Cape Town",
    image: "assets/images/products/product-dry-robe-sand.png",
    motif: "ROBE",
    pairsWith: ["towel-set", "dry-shampoo"]
  },
  {
    id: "dry-robe-navy",
    name: "Harbour Dry Coat",
    category: "drying",
    catLabel: "Dry Ritual",
    price: 790,
    compare: 990,
    badge: "new",
    rating: 4.8,
    reviews: 46,
    stock: 9,
    hook: "Longer coverage. Leather badge. Mud walks sorted.",
    desc: "Extended dry coat with leather DRY & CO. badge — built for wet Labradors and the walk home.",
    colors: "Navy",
    sizes: ["S", "M", "L", "XL"],
    source: "Sewn in Cape Town",
    image: "assets/images/products/product-dry-robe-navy.png",
    motif: "COAT",
    pairsWith: ["boot-liner", "treat-pouch"]
  },
  {
    id: "check-blanket",
    name: "Estate Check Blanket",
    category: "home",
    catLabel: "Home",
    price: 850,
    compare: 1100,
    badge: "bestseller",
    rating: 5.0,
    reviews: 91,
    stock: 11,
    hook: "The signature sofa claim.",
    desc: "Heavy navy & ivory buffalo check with stitched leather patch. Looks like home décor. Feels like devotion.",
    colors: "Navy / Ivory",
    sizes: ["One size"],
    source: "Finished in SA",
    image: "assets/images/products/product-check-blanket.png",
    motif: "CHECK",
    pairsWith: ["boucle-bed", "calm-mist"]
  },
  {
    id: "travel-mat",
    name: "Winelands Travel Mat",
    category: "home",
    catLabel: "Home",
    price: 490,
    compare: 620,
    rating: 4.7,
    reviews: 63,
    stock: 22,
    hook: "Guest-bed insurance.",
    desc: "Fold-flat waterproof mat with soft face. Cars, Airbnbs, weekend houses — protected in one roll.",
    colors: "Stone",
    sizes: ["One size"],
    source: "Local cut & sew",
    image: "assets/images/products/product-travel-mat.png",
    motif: "MAT",
    pairsWith: ["boot-liner", "treat-pouch"]
  },
  {
    id: "boucle-bed",
    name: "Constantia Bouclé Bed",
    category: "home",
    catLabel: "Home",
    price: 1890,
    compare: 2490,
    badge: "bestseller",
    rating: 4.9,
    reviews: 54,
    stock: 6,
    hook: "Furniture first. Dog bed second.",
    desc: "Orthopedic bouclé bed that reads as lounge seating. Removable cover. The piece interiors people photograph.",
    colors: "Oatmeal · Charcoal",
    sizes: ["M", "L"],
    source: "Local upholstery",
    image: "assets/images/products/product-boucle-bed.png",
    motif: "BED",
    pairsWith: ["check-blanket", "calm-mist"]
  },
  {
    id: "leather-collar",
    name: "Karoo Leather Collar",
    category: "leather",
    catLabel: "Leather",
    price: 420,
    compare: 560,
    badge: "bestseller",
    rating: 4.9,
    reviews: 203,
    stock: 31,
    hook: "Ages like a favourite belt.",
    desc: "Full-grain vegetable-tanned leather, solid brass, hand-finished edges. The daily wearable that makes nylon feel cheap.",
    colors: "Tan · Navy · Olive",
    sizes: ["S", "M", "L"],
    source: "SA leather goods",
    image: "assets/images/products/product-leather-collar.png",
    motif: "COLLAR",
    pairsWith: ["leather-lead", "name-tag"]
  },
  {
    id: "leather-lead",
    name: "Long Walk Lead",
    category: "leather",
    catLabel: "Leather",
    price: 480,
    compare: 620,
    rating: 4.8,
    reviews: 117,
    stock: 28,
    hook: "Match the collar. Own the walk.",
    desc: "1.4 m soft-hand lead with reinforced stitch points. Pair with the Karoo collar for the set everyone notices.",
    colors: "Tan · Navy · Olive",
    sizes: ["Standard"],
    source: "SA leather goods",
    image: "assets/images/products/product-leather-lead.png",
    motif: "LEAD",
    pairsWith: ["leather-collar", "treat-pouch"]
  },
  {
    id: "harness",
    name: "Quiet Y-Harness",
    category: "leather",
    catLabel: "Leather",
    price: 620,
    compare: 790,
    badge: "new",
    rating: 4.8,
    reviews: 38,
    stock: 12,
    hook: "Pull without the choke.",
    desc: "Minimal Y-front in leather & webbing. Even distribution. Brass that feels expensive in the hand.",
    colors: "Tan / Navy",
    sizes: ["S", "M", "L"],
    source: "SA leather + webbing",
    image: "assets/images/products/product-harness.png",
    motif: "HARNESS",
    pairsWith: ["leather-lead", "treat-pouch"]
  },
  {
    id: "treat-pouch",
    name: "Pocket Treat Pouch",
    category: "leather",
    catLabel: "Leather",
    price: 280,
    compare: 360,
    rating: 4.7,
    reviews: 84,
    stock: 40,
    hook: "Silent magnetic close.",
    desc: "Belt-clip leather pouch for treats & bags. No plastic rattle. The small upgrade that feels big every walk.",
    colors: "Tan",
    sizes: ["One size"],
    source: "SA leather goods",
    image: "assets/images/products/product-treat-pouch.png",
    motif: "POUCH",
    pairsWith: ["leather-lead", "bandana"]
  },
  {
    id: "ceramic-bowls",
    name: "Stone Pair Bowls",
    category: "dining",
    catLabel: "Dining",
    price: 560,
    compare: 720,
    badge: "bestseller",
    rating: 4.9,
    reviews: 76,
    stock: 18,
    hook: "Kitchen-counter beautiful.",
    desc: "Weighted matte ceramic — food & water — that belongs next to your own tableware.",
    colors: "Ivory · Slate",
    sizes: ["Medium pair"],
    source: "Local ceramics",
    image: "assets/images/products/product-ceramic-bowls.png",
    motif: "BOWLS",
    pairsWith: ["elevated-feeder", "calm-mist"]
  },
  {
    id: "elevated-feeder",
    name: "Oak Elevated Feeder",
    category: "dining",
    catLabel: "Dining",
    price: 980,
    compare: 1280,
    rating: 4.8,
    reviews: 41,
    stock: 8,
    hook: "Joinery, not plastic.",
    desc: "Solid oak stand with ceramic inserts. Better posture. Looks like furniture because it is.",
    colors: "Natural oak",
    sizes: ["M", "L"],
    source: "Local joinery",
    image: "assets/images/products/product-elevated-feeder.png",
    motif: "FEEDER",
    pairsWith: ["ceramic-bowls"]
  },
  {
    id: "boot-liner",
    name: "Weekend Boot Liner",
    category: "travel",
    catLabel: "Travel",
    price: 790,
    compare: 990,
    badge: "new",
    rating: 4.8,
    reviews: 52,
    stock: 15,
    hook: "Leather seats stay leather seats.",
    desc: "Quilted waterproof boot cover with raised bumpers. Mud in. Dignity intact.",
    colors: "Navy",
    sizes: ["Universal"],
    source: "Local finish",
    image: "assets/images/products/product-boot-liner.png",
    motif: "LINER",
    pairsWith: ["travel-mat", "dry-robe-sand"]
  },
  {
    id: "bandana",
    name: "Olive Grove Bandana",
    category: "apparel",
    catLabel: "Apparel",
    price: 150,
    compare: 190,
    rating: 4.9,
    reviews: 156,
    stock: 55,
    hook: "The easiest gift that still looks expensive.",
    desc: "Soft cotton estate olive check. Photogenic. Perfect add-on at checkout.",
    colors: "Olive check",
    sizes: ["S", "M", "L"],
    source: "Local print & sew",
    image: "assets/images/products/product-bandana.png",
    motif: "BANDANA",
    pairsWith: ["leather-collar", "name-tag"]
  },
  {
    id: "knit-jumper",
    name: "Knit Companion Jumper",
    category: "apparel",
    catLabel: "Apparel",
    price: 450,
    compare: 580,
    rating: 4.7,
    reviews: 67,
    stock: 19,
    hook: "Cape evening weather, handled.",
    desc: "Fine-gauge knit in cream or navy. Neutral enough for any interior shoot.",
    colors: "Cream · Navy",
    sizes: ["XS", "S", "M", "L", "XL"],
    source: "Branded in SA",
    image: "assets/images/products/product-knit-jumper.png",
    motif: "KNIT",
    pairsWith: ["bandana", "check-blanket"]
  },
  {
    id: "calm-mist",
    name: "After-Walk Calm Mist",
    category: "grooming",
    catLabel: "Grooming",
    price: 220,
    compare: 280,
    rating: 4.8,
    reviews: 98,
    stock: 44,
    hook: "Linen. Cedar. Fresh without a bath.",
    desc: "Light mist for coats between washes. The ritual customers keep by the door.",
    colors: "100 ml",
    sizes: ["100 ml"],
    source: "Filled locally",
    image: "assets/images/products/product-calm-mist.png",
    motif: "MIST",
    pairsWith: ["dry-shampoo", "towel-set"]
  },
  {
    id: "dry-shampoo",
    name: "No-Bath Dry Clean",
    category: "grooming",
    catLabel: "Grooming",
    price: 190,
    compare: 240,
    badge: "bestseller",
    rating: 4.9,
    reviews: 211,
    stock: 60,
    hook: "The namesake ritual. Repeat buy.",
    desc: "Powder dry clean for in-between washes. Soft coat. No chalky finish. Highest reorder rate in the line.",
    colors: "80 g tin",
    sizes: ["80 g"],
    source: "Filled locally",
    image: "assets/images/products/product-dry-shampoo.png",
    motif: "DRY",
    pairsWith: ["calm-mist", "dry-robe-sand"]
  },
  {
    id: "towel-set",
    name: "Double Dry Towel Set",
    category: "drying",
    catLabel: "Dry Ritual",
    price: 380,
    compare: 480,
    rating: 4.8,
    reviews: 73,
    stock: 26,
    hook: "Two towels. Zero excuses.",
    desc: "Ultra-absorbent microfibre pair with leather loop tags. Boot. Pool. Always ready.",
    colors: "Sand",
    sizes: ["2 × large"],
    source: "Branded in SA",
    image: "assets/images/products/product-towel-set.png",
    motif: "TOWEL",
    pairsWith: ["dry-robe-sand", "dry-shampoo"]
  },
  {
    id: "name-tag",
    name: "Brass Name Disc",
    category: "leather",
    catLabel: "Leather",
    price: 120,
    compare: 160,
    rating: 5.0,
    reviews: 189,
    stock: 80,
    hook: "Engraved locally. Quiet flex.",
    desc: "Solid brass ID disc. Pair with any collar. The detail that finishes the look.",
    colors: "Brass",
    sizes: ["Engraved"],
    source: "Local engraving",
    image: "assets/images/products/product-name-tag.png",
    motif: "BRASS",
    pairsWith: ["leather-collar", "bandana"]
  },
  {
    id: "rain-shell",
    name: "Packable Rain Shell",
    category: "drying",
    catLabel: "Dry Ritual",
    price: 640,
    compare: 820,
    badge: "bestseller",
    rating: 4.9,
    reviews: 74,
    stock: 16,
    hook: "Folds into nothing. Saves every sudden Cape downpour.",
    desc: "Lightweight waterproof shell with leather badge and brass snaps. Stuff it in the boot — the impulse buy that becomes essential.",
    colors: "Navy",
    sizes: ["S", "M", "L", "XL"],
    source: "Local sew",
    image: "assets/images/products/product-rain-shell.png",
    motif: "SHELL",
    pairsWith: ["boot-liner", "towel-set"]
  },
  {
    id: "car-hammock",
    name: "City Car Hammock",
    category: "travel",
    catLabel: "Travel",
    price: 890,
    compare: 1150,
    badge: "bestseller",
    rating: 4.9,
    reviews: 112,
    stock: 13,
    hook: "Back seat stays pristine. Dog stays secure.",
    desc: "Quilted hammock seat cover with raised sides. The travel product Instagram dog parents actually repurchase for the second car.",
    colors: "Navy",
    sizes: ["Universal"],
    source: "Local finish",
    image: "assets/images/products/product-car-hammock.png",
    motif: "CAR",
    pairsWith: ["travel-mat", "treat-pouch"]
  },
  {
    id: "paw-butter",
    name: "Karoo Paw Butter",
    category: "grooming",
    catLabel: "Grooming",
    price: 180,
    compare: 230,
    badge: "bestseller",
    rating: 5.0,
    reviews: 246,
    stock: 70,
    hook: "The tin that lives by the door. Highest reorder in grooming.",
    desc: "Rich paw balm for hot tar, salt and winter cracks. Opens, smells clean, empties fast — then they buy again.",
    colors: "60 g tin",
    sizes: ["60 g"],
    source: "Filled locally",
    image: "assets/images/products/product-paw-butter.png",
    motif: "PAW",
    pairsWith: ["calm-mist", "dry-shampoo"]
  },
  {
    id: "cooling-mat",
    name: "Poolside Cool Mat",
    category: "home",
    catLabel: "Home",
    price: 520,
    compare: 680,
    badge: "new",
    rating: 4.8,
    reviews: 58,
    stock: 21,
    hook: "Summer’s silent bestseller.",
    desc: "Pressure-activated cool gel mat with leather corner tag. Patio, tiles, travel crates — heat handled without drama.",
    colors: "Stone grey",
    sizes: ["M", "L"],
    source: "Branded SA",
    image: "assets/images/products/product-cooling-mat.png",
    motif: "COOL",
    pairsWith: ["dry-robe-sand", "travel-mat"]
  },
  {
    id: "felt-toys",
    name: "Quiet Hours Felt Trio",
    category: "apparel",
    catLabel: "Play",
    price: 320,
    compare: 410,
    badge: "new",
    rating: 4.9,
    reviews: 93,
    stock: 34,
    hook: "Zero squeak. Maximum calm. Gift-set gold.",
    desc: "Three dense felt shapes in navy, sand and olive. Soft enough for indoor evenings. Pretty enough to leave out.",
    colors: "Navy · Sand · Olive",
    sizes: ["Set of 3"],
    source: "Local craft",
    image: "assets/images/products/product-felt-toys.png",
    motif: "FELT",
    pairsWith: ["bandana", "calm-mist"]
  },
  {
    id: "brass-hook",
    name: "Estate Leash Hook",
    category: "home",
    catLabel: "Home",
    price: 290,
    compare: 380,
    badge: "bestseller",
    rating: 4.9,
    reviews: 67,
    stock: 25,
    hook: "Home décor that earns its wall space.",
    desc: "Solid brass architectural hook for leads and robes. The entryway piece that makes the whole brand feel permanent.",
    colors: "Brass",
    sizes: ["One"],
    source: "Local metalwork",
    image: "assets/images/products/product-brass-hook.png",
    motif: "HOOK",
    pairsWith: ["leather-lead", "dry-robe-sand"]
  },
  {
    id: "window-perch",
    name: "Sill Watch Perch",
    category: "home",
    catLabel: "Home",
    price: 780,
    compare: 980,
    badge: "new",
    rating: 4.8,
    reviews: 39,
    stock: 10,
    hook: "Window real estate, claimed.",
    desc: "Bolstered oatmeal perch cushion for sunny sills. Removable cover. Looks like interior design, not pet gear.",
    colors: "Oatmeal",
    sizes: ["M", "L"],
    source: "Local upholstery",
    image: "assets/images/products/product-window-perch.png",
    motif: "SILL",
    pairsWith: ["check-blanket", "calm-mist"]
  },
  {
    id: "rain-candle",
    name: "Rain on Stone Candle",
    category: "home",
    catLabel: "Home",
    price: 340,
    compare: 420,
    badge: "bestseller",
    rating: 4.9,
    reviews: 141,
    stock: 48,
    hook: "The scent of after-walk calm. Humans buy it for themselves.",
    desc: "Amber glass candle — wet stone, linen, soft cedar. Cross-sells with every robe and mist. Smells like the brand story.",
    colors: "Amber glass",
    sizes: ["220 g"],
    source: "Filled locally",
    image: "assets/images/products/product-rain-candle.png",
    motif: "SCENT",
    pairsWith: ["calm-mist", "check-blanket"]
  },
  {
    id: "denim-jacket",
    name: "Weekend Denim Chore",
    category: "apparel",
    catLabel: "Apparel",
    price: 590,
    compare: 750,
    badge: "new",
    rating: 4.8,
    reviews: 44,
    stock: 17,
    hook: "The jacket that gets photographed first.",
    desc: "Washed indigo chore jacket with leather patch and brass buttons. Fashion margin. Instant unboxing moment.",
    colors: "Indigo",
    sizes: ["S", "M", "L", "XL"],
    source: "Local sew",
    image: "assets/images/products/product-denim-jacket.png",
    motif: "DENIM",
    pairsWith: ["bandana", "leather-collar"]
  },
  {
    id: "cat-cave",
    name: "Cloud Cave Nest",
    category: "cats",
    catLabel: "Cats",
    price: 890,
    compare: 1150,
    badge: "bestseller",
    rating: 4.9,
    reviews: 86,
    stock: 14,
    hook: "The hideaway that looks like furniture.",
    desc: "Bouclé cave nest with arched opening and leather patch. Cats disappear into it. Guests ask where you bought the ottoman.",
    colors: "Oatmeal",
    sizes: ["One size"],
    source: "Local upholstery",
    image: "assets/images/products/product-cat-cave.png",
    motif: "CAVE",
    pairsWith: ["cat-toys", "cat-groom"]
  },
  {
    id: "cat-tree",
    name: "Oak Climb Tower",
    category: "cats",
    catLabel: "Cats",
    price: 2490,
    compare: 3200,
    badge: "bestseller",
    rating: 4.9,
    reviews: 52,
    stock: 7,
    hook: "A climbing tree that belongs in the living room.",
    desc: "Minimal oak tower with sisal posts and soft platforms. Vertical play without the ugly carpet catastrophe.",
    colors: "Natural oak / oatmeal",
    sizes: ["Tall"],
    source: "Local joinery",
    image: "assets/images/products/product-cat-tree.png",
    motif: "TOWER",
    pairsWith: ["cat-cave", "cat-hammock"]
  },
  {
    id: "cat-fountain",
    name: "Quiet Flow Fountain",
    category: "cats",
    catLabel: "Cats",
    price: 680,
    compare: 860,
    badge: "bestseller",
    rating: 5.0,
    reviews: 119,
    stock: 18,
    hook: "Hydration that looks like ceramics.",
    desc: "Matte ivory ceramic fountain. Gentle flow cats prefer. The dining piece that ends plastic bowl shame.",
    colors: "Ivory",
    sizes: ["One"],
    source: "Local ceramics",
    image: "assets/images/products/product-cat-fountain.png",
    motif: "FLOW",
    pairsWith: ["cat-groom", "rain-candle"]
  },
  {
    id: "cat-toys",
    name: "Midnight Hunt Set",
    category: "cats",
    catLabel: "Cats",
    price: 280,
    compare: 360,
    badge: "new",
    rating: 4.8,
    reviews: 73,
    stock: 40,
    hook: "Felt mice + sisal scratch — gift-ready.",
    desc: "Soft hunt toys and a compact scratch pad in estate colours. Play that still looks styled on the rug.",
    colors: "Navy · Sand · Olive",
    sizes: ["Set"],
    source: "Local craft",
    image: "assets/images/products/product-cat-toys.png",
    motif: "HUNT",
    pairsWith: ["cat-cave", "cat-collar"]
  },
  {
    id: "cat-collar",
    name: "Velvet Breakaway Collar",
    category: "cats",
    catLabel: "Cats",
    price: 220,
    compare: 290,
    badge: "bestseller",
    rating: 4.9,
    reviews: 158,
    stock: 45,
    hook: "Safety breakaway. Tiny brass bell. Quiet luxury.",
    desc: "Soft navy velvet with secure breakaway clasp and engraved charm. The collar that photographs like jewellery.",
    colors: "Navy velvet",
    sizes: ["S", "M"],
    source: "Local sew",
    image: "assets/images/products/product-cat-collar.png",
    motif: "VELVET",
    pairsWith: ["name-tag", "cat-toys"]
  },
  {
    id: "litter-cabinet",
    name: "Hidden Litter Cabinet",
    category: "cats",
    catLabel: "Cats",
    price: 2190,
    compare: 2790,
    badge: "new",
    rating: 4.8,
    reviews: 41,
    stock: 6,
    hook: "Litter, disguised as a sideboard.",
    desc: "White oak cabinet that hides the box completely. The product multi-cat apartments wait for.",
    colors: "White oak",
    sizes: ["Standard"],
    source: "Local joinery",
    image: "assets/images/products/product-litter-cabinet.png",
    motif: "HIDE",
    pairsWith: ["cat-fountain", "rain-candle"]
  },
  {
    id: "cat-hammock",
    name: "Sunledge Hammock",
    category: "cats",
    catLabel: "Cats",
    price: 560,
    compare: 720,
    badge: "bestseller",
    rating: 4.9,
    reviews: 97,
    stock: 22,
    hook: "Window real estate for cats who run the house.",
    desc: "Bolstered oatmeal sill hammock. Soft ledge energy. The nap spot they fight over.",
    colors: "Oatmeal",
    sizes: ["M", "L"],
    source: "Local sew",
    image: "assets/images/products/product-cat-hammock.png",
    motif: "LEDGE",
    pairsWith: ["cat-cave", "cat-tree"]
  },
  {
    id: "cat-groom",
    name: "Linen Coat Ritual",
    category: "cats",
    catLabel: "Cats",
    price: 390,
    compare: 490,
    badge: "new",
    rating: 4.8,
    reviews: 64,
    stock: 28,
    hook: "Mist + brush. Less fur on the sofa.",
    desc: "Cat calm mist and soft wooden brush set. The grooming ritual that keeps coats glossy and couches survivable.",
    colors: "Amber / wood",
    sizes: ["Set"],
    source: "Filled & finished SA",
    image: "assets/images/products/product-cat-groom.png",
    motif: "GROOM",
    pairsWith: ["cat-fountain", "cat-collar"]
  },
  {
    id: "cat-carrier",
    name: "Soft Estate Carrier",
    category: "cats",
    catLabel: "Cats",
    price: 980,
    compare: 1250,
    badge: "bestseller",
    rating: 4.9,
    reviews: 71,
    stock: 12,
    hook: "Vet days, without the plastic crate shame.",
    desc: "Sand canvas carrier with leather trim and brass hardware. Looks like a weekender. Feels calm for the cat.",
    colors: "Sand / tan leather",
    sizes: ["Standard"],
    source: "Local sew",
    image: "assets/images/products/product-cat-carrier.png",
    motif: "CARRY",
    pairsWith: ["cat-collar", "cat-blanket"]
  },
  {
    id: "cat-tunnel",
    name: "Chase Tunnel",
    category: "cats",
    catLabel: "Cats",
    price: 420,
    compare: 540,
    badge: "new",
    rating: 4.8,
    reviews: 55,
    stock: 24,
    hook: "Indoor cardio that still looks styled.",
    desc: "Navy and ivory play tunnel with leather tag. Collapses for cupboards. Explodes into zoomies.",
    colors: "Navy / ivory",
    sizes: ["One"],
    source: "Local sew",
    image: "assets/images/products/product-cat-tunnel.png",
    motif: "TUNNEL",
    pairsWith: ["cat-toys", "cat-scratcher"]
  },
  {
    id: "cat-diner",
    name: "Petite Oak Diner",
    category: "cats",
    catLabel: "Cats",
    price: 740,
    compare: 920,
    badge: "bestseller",
    rating: 4.9,
    reviews: 88,
    stock: 15,
    hook: "Whisker-friendly bowls on real oak.",
    desc: "Elevated twin ceramic bowls on a solid oak stand. Better posture, prettier kitchen.",
    colors: "Oak / ivory",
    sizes: ["One"],
    source: "Local joinery",
    image: "assets/images/products/product-cat-diner.png",
    motif: "DINER",
    pairsWith: ["cat-fountain", "litter-cabinet"]
  },
  {
    id: "cat-blanket",
    name: "Lap Check Throw",
    category: "cats",
    catLabel: "Cats",
    price: 480,
    compare: 620,
    badge: "bestseller",
    rating: 5.0,
    reviews: 104,
    stock: 30,
    hook: "The sofa claim — cat edition.",
    desc: "Smaller estate check throw with leather patch. Soft enough for naps, handsome enough for guests.",
    colors: "Navy / ivory",
    sizes: ["Cat size"],
    source: "Finished in SA",
    image: "assets/images/products/product-cat-blanket.png",
    motif: "THROW",
    pairsWith: ["cat-cave", "rain-candle"]
  },
  {
    id: "cat-shelves",
    name: "Wall Walk Shelves",
    category: "cats",
    catLabel: "Cats",
    price: 1280,
    compare: 1650,
    badge: "new",
    rating: 4.8,
    reviews: 36,
    stock: 9,
    hook: "Architecture for cats. Art for walls.",
    desc: "Set of three oak floating shelves with soft pads. Turns a blank wall into a runway.",
    colors: "Oak / oatmeal",
    sizes: ["Set of 3"],
    source: "Local joinery",
    image: "assets/images/products/product-cat-shelves.png",
    motif: "WALL",
    pairsWith: ["cat-tree", "cat-hammock"]
  },
  {
    id: "cat-catnip",
    name: "Garden Catnip Trio",
    category: "cats",
    catLabel: "Cats",
    price: 210,
    compare: 270,
    badge: "bestseller",
    rating: 4.9,
    reviews: 132,
    stock: 55,
    hook: "The tiny tin that empties fast.",
    desc: "Three linen catnip sachets plus refill jar. Low price, high joy, perfect add-on at checkout.",
    colors: "Olive · Navy · Sand",
    sizes: ["Trio"],
    source: "Filled locally",
    image: "assets/images/products/product-cat-catnip.png",
    motif: "NIP",
    pairsWith: ["cat-toys", "cat-tunnel"]
  },
  {
    id: "cat-scratcher",
    name: "Column Scratcher",
    category: "cats",
    catLabel: "Cats",
    price: 590,
    compare: 760,
    badge: "bestseller",
    rating: 4.9,
    reviews: 79,
    stock: 18,
    hook: "Save the sofa. Keep the aesthetic.",
    desc: "Compact sisal column with cushion top and brass detail. The scratcher people don’t hide.",
    colors: "Natural / oatmeal",
    sizes: ["One"],
    source: "Local make",
    image: "assets/images/products/product-cat-scratcher.png",
    motif: "SCRATCH",
    pairsWith: ["cat-cave", "cat-catnip"]
  },
  {
    id: "cat-harness",
    name: "Garden Walk Harness",
    category: "cats",
    catLabel: "Cats",
    price: 520,
    compare: 680,
    badge: "new",
    rating: 4.8,
    reviews: 47,
    stock: 20,
    hook: "Adventure cats, finally dressed for it.",
    desc: "Soft leather-and-webbing harness with matching lead. Secure, handsome, patio-ready.",
    colors: "Tan / navy",
    sizes: ["S", "M", "L"],
    source: "SA leather + webbing",
    image: "assets/images/products/product-cat-harness.png",
    motif: "WALK",
    pairsWith: ["cat-collar", "cat-carrier"]
  }
];

const BUNDLES = [
  {
    id: "bundle-dry-ritual",
    name: "Dry Ritual Set",
    tagline: "Robe + towels + dry clean — the after-swim system.",
    items: ["dry-robe-sand", "towel-set", "dry-shampoo"],
    price: 1120,
    compare: 1260,
    save: 140,
    image: "assets/images/products/product-dry-robe-sand.png"
  },
  {
    id: "bundle-walk",
    name: "Long Walk Set",
    tagline: "Collar + lead + pouch. Look expensive on every pavement.",
    items: ["leather-collar", "leather-lead", "treat-pouch"],
    price: 1050,
    compare: 1180,
    save: 130,
    image: "assets/images/products/product-leather-collar.png"
  },
  {
    id: "bundle-weekend",
    name: "Weekend Escape Set",
    tagline: "Car hammock + rain shell + paw butter. Ready for anywhere.",
    items: ["car-hammock", "rain-shell", "paw-butter"],
    price: 1580,
    compare: 1710,
    save: 130,
    image: "assets/images/products/product-car-hammock.png"
  },
  {
    id: "bundle-home-scent",
    name: "House Calm Set",
    tagline: "Candle + mist + felt trio. Soft evenings, sorted.",
    items: ["rain-candle", "calm-mist", "felt-toys"],
    price: 790,
    compare: 880,
    save: 90,
    image: "assets/images/products/product-rain-candle.png"
  },
  {
    id: "bundle-cats",
    name: "Cat Estate Set",
    tagline: "Cave + fountain + velvet collar. Instant cat household.",
    items: ["cat-cave", "cat-fountain", "cat-collar"],
    price: 1620,
    compare: 1790,
    save: 170,
    image: "assets/images/products/product-cat-cave.png"
  },
  {
    id: "bundle-cat-play",
    name: "Happy Cat Play Set",
    tagline: "Tunnel + hunt toys + catnip. Zoomies, curated.",
    items: ["cat-tunnel", "cat-toys", "cat-catnip"],
    price: 820,
    compare: 910,
    save: 90,
    image: "assets/images/products/product-cat-tunnel.png"
  },
  {
    id: "bundle-cat-home",
    name: "Cat Interior Set",
    tagline: "Scratcher + lap throw + shelves starter energy.",
    items: ["cat-scratcher", "cat-blanket", "cat-catnip"],
    price: 1180,
    compare: 1280,
    save: 100,
    image: "assets/images/products/product-cat-scratcher.png"
  }
];

const REVIEWS = [
  { name: "Sarah M.", place: "Constantia", text: "The dry robe is the first pet product that doesn’t look like a joke in our hallway. Milo would have loved this.", stars: 5 },
  { name: "James K.", place: "Stellenbosch", text: "Bought the collar and lead set. People stop us on walks. Worth every rand.", stars: 5 },
  { name: "Anika P.", place: "Sea Point", text: "Estate blanket lives on the sofa permanently. Guests think it’s ours. It is — for the dog.", stars: 5 },
  { name: "Thandi R.", place: "Parkhurst", text: "Finally a brand that understands wet Cape weather and good interiors.", stars: 5 },
  { name: "Lila N.", place: "Illovo", text: "The Cloud Cave is the only cat bed that doesn’t ruin the lounge. Our Siamese lives in it.", stars: 5 }
];

const CART_KEY = "dryco_cart_v2";

function money(n) {
  return "R " + Number(n).toLocaleString("en-ZA");
}

function productImages(p) {
  if (p.images && p.images.length) return p.images;
  const file = (p.image || "").split("/").pop() || "";
  const stem = file.replace(/\.[^.]+$/, "");
  // Hero master first, then true alternate pro shots
  const list = [];
  if (p.image) list.push(p.image);
  if (stem) {
    const base = `assets/images/products/views/${stem}`;
    for (const view of ["angle", "detail", "flat"]) {
      list.push(`${base}-${view}.jpg?v=7`);
    }
  }
  return list;
}

function stars(n) {
  const full = Math.round(n);
  return "★".repeat(full) + "☆".repeat(5 - full);
}

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
  renderCart();
  updateShipBar();
}

function cartTotal() {
  return getCart().reduce((s, line) => {
    const p = PRODUCTS.find((x) => x.id === line.id);
    const b = BUNDLES.find((x) => x.id === line.id);
    const price = p ? p.price : b ? b.price : 0;
    return s + price * line.qty;
  }, 0);
}

function updateCartCount() {
  const count = getCart().reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll(".cart-count").forEach((el) => {
    el.textContent = String(count);
    el.hidden = count === 0;
  });
}

function updateShipBar() {
  const el = document.querySelector("[data-ship-bar]");
  if (!el) return;
  const total = cartTotal();
  const left = Math.max(0, FREE_SHIP - total);
  const pct = Math.min(100, Math.round((total / FREE_SHIP) * 100));
  if (total <= 0) {
    el.innerHTML = `<span>Free nationwide shipping over ${money(FREE_SHIP)}</span><div class="ship-track"><i style="width:0%"></i></div>`;
  } else if (left > 0) {
    el.innerHTML = `<span>You’re ${money(left)} from free shipping</span><div class="ship-track"><i style="width:${pct}%"></i></div>`;
  } else {
    el.innerHTML = `<span class="ship-unlocked">Free shipping unlocked</span><div class="ship-track"><i style="width:100%"></i></div>`;
  }
}

function addToCart(id, qty = 1, size = "") {
  const product = PRODUCTS.find((p) => p.id === id);
  const bundle = BUNDLES.find((b) => b.id === id);
  if (!product && !bundle) return;
  const cart = getCart();
  const key = size ? `${id}::${size}` : id;
  const existing = cart.find((i) => i.key === key || (!i.key && i.id === id && !size));
  if (existing) existing.qty += qty;
  else cart.push({ id, qty, size, key });
  saveCart(cart);
  showToast(`${(product || bundle).name} added`);
  openCart();
}

function setQty(keyOrId, qty) {
  let cart = getCart();
  const match = (i) => i.key === keyOrId || i.id === keyOrId;
  if (qty <= 0) cart = cart.filter((i) => !match(i));
  else {
    const line = cart.find(match);
    if (line) line.qty = qty;
  }
  saveCart(cart);
}

function productCardHTML(p) {
  const badge =
    p.badge === "bestseller"
      ? '<span class="badge best">Bestseller</span>'
      : p.badge === "new"
        ? '<span class="badge">New</span>'
        : "";
  const save = p.compare ? Math.round((1 - p.price / p.compare) * 100) : 0;
  return `
  <article class="product-card reveal" data-category="${p.category}">
    <div class="product-media" data-quick="${p.id}" role="button" tabindex="0">
      ${badge}
      ${save ? `<span class="badge save">-${save}%</span>` : ""}
      <img src="${p.image}" alt="${p.name}" loading="lazy">
      <button class="quick-btn" type="button" data-quick="${p.id}">Quick view</button>
    </div>
    <div class="product-body">
      <div class="product-cat">${p.catLabel} · <span class="rating">${stars(p.rating)}</span> ${p.rating}</div>
      <h3 data-quick="${p.id}">${p.name}</h3>
      <p class="desc">${p.hook || p.desc}</p>
      <div class="product-meta">
        <div class="price">${p.compare ? `<s>${money(p.compare)}</s>` : ""}${money(p.price)}</div>
        <button class="btn btn-outline btn-sm" data-add="${p.id}">Add</button>
      </div>
    </div>
  </article>`;
}

function bundleCardHTML(b) {
  return `
  <article class="bundle-card reveal">
    <div class="bundle-media"><img src="${b.image}" alt="${b.name}"></div>
    <div class="bundle-body">
      <span class="bundle-save">Save ${money(b.save)}</span>
      <h3>${b.name}</h3>
      <p>${b.tagline}</p>
      <div class="product-meta">
        <div class="price"><s>${money(b.compare)}</s>${money(b.price)}</div>
        <button class="btn btn-leather btn-sm" data-add-bundle="${b.id}">Add set</button>
      </div>
    </div>
  </article>`;
}

function renderProducts(filter = "all", sort = "featured", target = "#product-grid") {
  const el = document.querySelector(target);
  if (!el) return;
  let list = filter === "all" ? [...PRODUCTS] : PRODUCTS.filter((p) => p.category === filter);
  if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
  if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
  if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
  if (sort === "bestsellers") list.sort((a, b) => (b.reviews || 0) - (a.reviews || 0));
  el.innerHTML = list.map(productCardHTML).join("");
  observeReveals();
}

function renderBundles() {
  const el = document.querySelector("#bundle-grid");
  if (!el) return;
  el.innerHTML = BUNDLES.map(bundleCardHTML).join("");
}

function renderReviews() {
  const el = document.querySelector("#review-rail");
  if (!el) return;
  el.innerHTML = REVIEWS.map(
    (r) => `
    <blockquote class="review-card reveal">
      <div class="rating">${stars(r.stars)}</div>
      <p>“${r.text}”</p>
      <cite>${r.name} · ${r.place}</cite>
    </blockquote>`
  ).join("");
}

function renderCart() {
  const box = document.querySelector(".cart-items");
  const totalEl = document.querySelector("[data-cart-total]");
  if (!box) return;
  const cart = getCart();
  if (!cart.length) {
    box.innerHTML = `<div class="cart-empty">Your bag is empty.<br><span>The Dry Ritual Set is the move.</span></div>`;
    if (totalEl) totalEl.textContent = money(0);
    updateShipBar();
    return;
  }
  box.innerHTML = cart
    .map((line) => {
      const p = PRODUCTS.find((x) => x.id === line.id);
      const b = BUNDLES.find((x) => x.id === line.id);
      const item = p || b;
      if (!item) return "";
      const key = line.key || line.id;
      const thumb = item.image
        ? `<img class="thumb" src="${item.image}" alt="">`
        : `<div class="thumb">${item.motif || "SET"}</div>`;
      return `
      <div class="cart-line">
        ${thumb}
        <div>
          <h4>${item.name}${line.size ? ` · ${line.size}` : ""}</h4>
          <div class="meta">${money(item.price)}</div>
          <div class="qty-row">
            <button type="button" data-qty="${key}" data-delta="-1">−</button>
            <span>${line.qty}</span>
            <button type="button" data-qty="${key}" data-delta="1">+</button>
          </div>
        </div>
        <button type="button" data-remove="${key}" aria-label="Remove">✕</button>
      </div>`;
    })
    .join("");
  if (totalEl) totalEl.textContent = money(cartTotal());
  updateShipBar();
}

function openQuick(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) return;
  const modal = document.querySelector(".qv-modal");
  if (!modal) return;
  const gallery = productImages(p);
  const sizes = (p.sizes || ["One size"])
    .map((s, i) => `<button type="button" class="size-chip${i === 0 ? " active" : ""}" data-size="${s}">${s}</button>`)
    .join("");
  const pairs = (p.pairsWith || [])
    .map((pid) => PRODUCTS.find((x) => x.id === pid))
    .filter(Boolean)
    .map(
      (x) =>
        `<button type="button" class="pair-chip" data-quick="${x.id}"><img src="${x.image}" alt=""><span>${x.name}<br><strong>${money(x.price)}</strong></span></button>`
    )
    .join("");
  const thumbs = gallery
    .map((src, i) => {
      const labels = ["Hero", "¾ angle", "Detail", "Flat lay", "Studio"];
      const label = labels[i] || `View ${i + 1}`;
      return `<button type="button" class="qv-thumb${i === 0 ? " active" : ""}" data-qv-src="${src}" aria-label="${label}" title="${label}"><img src="${src}" alt=""></button>`;
    })
    .join("");
  const sizeLink =
    p.sizes && p.sizes.length && p.sizes[0] !== "One size"
      ? `<a class="size-guide-link" href="size-guide.html">Size guide</a>`
      : "";

  modal.innerHTML = `
    <div class="qv-panel">
      <button type="button" class="qv-close" data-close-qv aria-label="Close">✕</button>
      <div class="qv-grid">
        <div class="qv-media">
          <img class="qv-main" src="${gallery[0]}" alt="${p.name}">
          <div class="qv-thumbs">${thumbs}</div>
        </div>
        <div class="qv-copy">
          <div class="product-cat">${p.catLabel} · ${stars(p.rating)} ${p.rating} (${p.reviews})</div>
          <h2>${p.name}</h2>
          <p class="qv-hook">${p.hook || ""}</p>
          <div class="price qv-price">${p.compare ? `<s>${money(p.compare)}</s>` : ""}${money(p.price)}</div>
          <p>${p.desc}</p>
          <p class="qv-meta">${p.colors} · ${p.source}</p>
          <p class="stock ${p.stock < 10 ? "low" : ""}">${p.stock < 10 ? `Only ${p.stock} left` : `${p.stock} in stock`} · ships in 2–4 days</p>
          <div class="size-row" data-size-row>${sizes}${sizeLink}</div>
          <div class="qv-actions">
            <button class="btn btn-primary" data-qv-add="${p.id}">Add to bag</button>
            <button class="btn btn-outline" data-qv-wa="${p.id}">Buy on WhatsApp</button>
          </div>
          <div class="pair-block">
            <h4>Complete the look</h4>
            <div class="pair-row">${pairs}</div>
          </div>
        </div>
      </div>
    </div>`;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeQuick() {
  const modal = document.querySelector(".qv-modal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function openCart() {
  document.querySelector(".cart-drawer")?.classList.add("open");
  document.querySelector(".cart-overlay")?.classList.add("open");
  document.body.style.overflow = "hidden";
  updateShipBar();
}

function closeCart() {
  document.querySelector(".cart-drawer")?.classList.remove("open");
  document.querySelector(".cart-overlay")?.classList.remove("open");
  document.body.style.overflow = "";
}

function showToast(msg) {
  const t = document.querySelector(".toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => t.classList.remove("show"), 2200);
}

function observeReveals() {
  const els = document.querySelectorAll(".reveal:not(.visible)");
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  els.forEach((el) => io.observe(el));
}

function initHeader() {
  const header = document.querySelector(".site-header");
  const onScroll = () => header?.classList.toggle("scrolled", window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  toggle?.addEventListener("click", () => links?.classList.toggle("open"));
  links?.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => links.classList.remove("open")));
}

function initFilters() {
  const valid = ["all", "drying", "leather", "home", "dining", "travel", "apparel", "grooming", "cats"];
  let sort = "featured";

  function applyFilter(filter, updateHash = true) {
    const key = valid.includes(filter) ? filter : "all";
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.toggle("active", b.dataset.filter === key));
    if (document.querySelector("#product-grid")) renderProducts(key, sort);
    if (updateHash && location.pathname.toLowerCase().includes("shop")) {
      const next = key === "all" ? "#shop" : `#${key}`;
      if (location.hash !== next) history.replaceState(null, "", next);
    }
  }

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyFilter(btn.dataset.filter || "all"));
  });

  document.querySelector("[data-sort]")?.addEventListener("change", (e) => {
    sort = e.target.value;
    const active = document.querySelector(".filter-btn.active")?.dataset.filter || "all";
    applyFilter(active, false);
  });

  document.querySelectorAll('a[href^="#drying"], a[href^="#leather"], a[href^="#home"], a[href^="#dining"], a[href^="#travel"], a[href^="#apparel"], a[href^="#grooming"], a[href^="#cats"], a[href="#shop"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      if (!document.querySelector("#product-grid")) return;
      const hash = (a.getAttribute("href") || "").replace("#", "") || "shop";
      if (hash === "shop") {
        e.preventDefault();
        applyFilter("all");
        return;
      }
      if (valid.includes(hash)) {
        e.preventDefault();
        applyFilter(hash);
      }
    });
  });

  const hash = location.hash.replace("#", "");
  if (document.querySelector("#product-grid") && valid.includes(hash)) applyFilter(hash, false);
}

function initNewsletter() {
  document.querySelectorAll("[data-newsletter]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("You’re on the quiet list");
      form.reset();
    });
  });
}

function initContact() {
  document.querySelector("[data-contact]")?.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("Message received — we’ll reply soon");
    e.target.reset();
  });
}

function initSectionScroll() {
  const hash = location.hash.replace("#", "");
  if (!hash || document.querySelector("#product-grid")) return;
  const el = document.getElementById(hash);
  if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
}

function whatsappCheckout() {
  const cart = getCart();
  if (!cart.length) {
    showToast("Add items first");
    return;
  }
  const lines = cart.map((line) => {
    const p = PRODUCTS.find((x) => x.id === line.id);
    const b = BUNDLES.find((x) => x.id === line.id);
    const item = p || b;
    if (!item) return "";
    return `• ${item.name}${line.size ? ` (${line.size})` : ""} × ${line.qty} — ${money(item.price * line.qty)}`;
  });
  const total = cartTotal();
  const ship = total >= FREE_SHIP ? "Free shipping" : `Shipping quoted (free over ${money(FREE_SHIP)})`;
  const text = encodeURIComponent(
    `Hi dry&co — I’d like to order:\n\n${lines.join("\n")}\n\nTotal: ${money(total)}\n${ship}\n\nDelivery suburb: `
  );
  window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank");
}

function waProduct(id, size) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) return;
  const text = encodeURIComponent(
    `Hi dry&co — I’d like the ${p.name}${size ? ` in size ${size}` : ""} (${money(p.price)}).\n\nDelivery suburb: `
  );
  window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank");
}

document.addEventListener("click", (e) => {
  // Close quick view first — never let other handlers reopen it
  if (e.target.closest("[data-close-qv]") || e.target === document.querySelector(".qv-modal.open")) {
    e.preventDefault();
    closeQuick();
    return;
  }

  const add = e.target.closest("[data-add]");
  if (add) addToCart(add.dataset.add);

  const addBundle = e.target.closest("[data-add-bundle]");
  if (addBundle) addToCart(addBundle.dataset.addBundle);

  const quick = e.target.closest("[data-quick]");
  if (quick && !e.target.closest("[data-add]")) openQuick(quick.dataset.quick);

  if (e.target.closest("[data-open-cart]")) openCart();
  if (e.target.closest("[data-close-cart]")) closeCart();

  const sizeChip = e.target.closest(".size-chip");
  if (sizeChip) {
    sizeChip.parentElement.querySelectorAll(".size-chip").forEach((c) => c.classList.remove("active"));
    sizeChip.classList.add("active");
  }

  const qvThumb = e.target.closest(".qv-thumb");
  if (qvThumb) {
    const src = qvThumb.dataset.qvSrc;
    const main = document.querySelector(".qv-main");
    if (src && main) {
      main.src = src;
      qvThumb.parentElement.querySelectorAll(".qv-thumb").forEach((t) => t.classList.remove("active"));
      qvThumb.classList.add("active");
    }
  }

  const qvAdd = e.target.closest("[data-qv-add]");
  if (qvAdd) {
    const size = document.querySelector(".size-chip.active")?.dataset.size || "";
    addToCart(qvAdd.dataset.qvAdd, 1, size);
    closeQuick();
  }

  const qvWa = e.target.closest("[data-qv-wa]");
  if (qvWa) {
    const size = document.querySelector(".size-chip.active")?.dataset.size || "";
    waProduct(qvWa.dataset.qvWa, size);
  }

  const qtyBtn = e.target.closest("[data-qty]");
  if (qtyBtn) {
    const key = qtyBtn.dataset.qty;
    const delta = Number(qtyBtn.dataset.delta);
    const line = getCart().find((i) => i.key === key || i.id === key);
    if (line) setQty(key, line.qty + delta);
  }

  const remove = e.target.closest("[data-remove]");
  if (remove) setQty(remove.dataset.remove, 0);

  if (e.target.closest("[data-whatsapp-checkout]")) whatsappCheckout();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeQuick();
    closeCart();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  if (!document.querySelector(".announce")) {
    document.documentElement.style.setProperty("--announce-h", "0px");
  }
  initHeader();
  initFilters();
  initNewsletter();
  initContact();
  initSectionScroll();
  updateCartCount();
  renderCart();
  renderBundles();
  renderReviews();
  updateShipBar();

  if (document.querySelector("#product-grid")) {
    const hash = location.hash.replace("#", "");
    const valid = ["drying", "leather", "home", "dining", "travel", "apparel", "grooming", "cats"];
    if (!valid.includes(hash)) renderProducts("all");
  }
  if (document.querySelector("#home-featured-grid")) {
    const hotIds = [
      "dry-robe-sand",
      "paw-butter",
      "car-hammock",
      "check-blanket",
      "rain-shell",
      "rain-candle",
      "leather-collar",
      "denim-jacket"
    ];
    const featured = hotIds.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean);
    document.querySelector("#home-featured-grid").innerHTML = featured.map(productCardHTML).join("");
  }
  if (document.querySelector("#cats-grid")) {
    const cats = PRODUCTS.filter((p) => p.category === "cats");
    document.querySelector("#cats-grid").innerHTML = cats.map(productCardHTML).join("");
  }
  observeReveals();
});

window.addEventListener("hashchange", () => {
  const hash = location.hash.replace("#", "");
  const valid = ["all", "drying", "leather", "home", "dining", "travel", "apparel", "grooming", "cats"];
  if (document.querySelector("#product-grid") && valid.includes(hash)) {
    document.querySelector(`.filter-btn[data-filter="${hash}"]`)?.click();
  } else {
    document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

window.DRYCO = { PRODUCTS, BUNDLES, money, addToCart, openQuick };
