// TechPulse Products Database
const products = [
    // Smartphones
    {
        id: 1,
        name: "Galaxy S24 Ultra",
        category: "smartphones",
        price: 1199.99,
        originalPrice: 1299.99,
        discount: 8,
        image: "https://pixabay.com/get/g923d5064234715ff019f8d5c3fb3a4e1f89499e947354fe52b8e8aff43318fad537945ac194a711412914719a40cd031fa0ad1e6f93ecd01b52e9317f0bc99a2_1280.jpg",
        images: [
            "https://pixabay.com/get/g923d5064234715ff019f8d5c3fb3a4e1f89499e947354fe52b8e8aff43318fad537945ac194a711412914719a40cd031fa0ad1e6f93ecd01b52e9317f0bc99a2_1280.jpg",
            "https://pixabay.com/get/g1ce6011e6355511f69fbfce66f3e4aa4ffeea3becabb041ae1312aade0fcdd6cb7f2aa88b4123275392667e1e0363a8e9260df0cb5704153795f9949e96d5e50_1280.jpg",
            "https://pixabay.com/get/g4c3f10c5cc1e6a11999f026af43d53e794c139313131b53f51a3175808064650f3f444f06cd842a8bff628230b8b853f4a6ca0098d112e714f2f1f8b0a6fbbdc_1280.jpg"
        ],
        description: "The ultimate flagship smartphone with cutting-edge technology and premium design.",
        detailedDescription: "Experience the pinnacle of smartphone innovation with the Galaxy S24 Ultra. Featuring a stunning 6.8-inch Dynamic AMOLED display, advanced camera system with 200MP main sensor, and lightning-fast performance powered by the latest Snapdragon processor. Built with premium materials and designed for professionals and tech enthusiasts who demand the best.",
        specifications: {
            "Display": "6.8-inch Dynamic AMOLED 2X, 3088 x 1440 pixels",
            "Processor": "Snapdragon 8 Gen 3",
            "RAM": "12GB/16GB",
            "Storage": "256GB/512GB/1TB",
            "Camera": "200MP main, 50MP periscope telephoto, 10MP telephoto, 12MP ultrawide",
            "Battery": "5000mAh with 45W fast charging",
            "OS": "Android 14 with One UI 6.1",
            "Colors": "Titanium Black, Titanium Gray, Titanium Violet, Titanium Yellow"
        },
        rating: 4.8,
        reviews: 324,
        inStock: true,
        featured: true,
        trending: true
    },
    {
        id: 2,
        name: "iPhone 15 Pro Max",
        category: "smartphones",
        price: 1099.99,
        originalPrice: 1199.99,
        discount: 8,
        image: "https://pixabay.com/get/g1ce6011e6355511f69fbfce66f3e4aa4ffeea3becabb041ae1312aade0fcdd6cb7f2aa88b4123275392667e1e0363a8e9260df0cb5704153795f9949e96d5e50_1280.jpg",
        images: [
            "https://pixabay.com/get/g1ce6011e6355511f69fbfce66f3e4aa4ffeea3becabb041ae1312aade0fcdd6cb7f2aa88b4123275392667e1e0363a8e9260df0cb5704153795f9949e96d5e50_1280.jpg",
            "https://pixabay.com/get/g4c3f10c5cc1e6a11999f026af43d53e794c139313131b53f51a3175808064650f3f444f06cd842a8bff628230b8b853f4a6ca0098d112e714f2f1f8b0a6fbbdc_1280.jpg",
            "https://pixabay.com/get/gead738622626e10eb205002a87615ba1aee499b83d59567935fd98d170810b228881cca737d34bc4cb25b83705dbc565424533d53b9c40bad8ccc82c4335d024_1280.jpg"
        ],
        description: "The most advanced iPhone ever with titanium design and pro camera system.",
        detailedDescription: "Discover the iPhone 15 Pro Max, crafted from aerospace-grade titanium for the perfect balance of lightweight feel and exceptional durability. Features the powerful A17 Pro chip, revolutionary camera system with 5x telephoto zoom, and Action Button for quick access to your favorite features.",
        specifications: {
            "Display": "6.7-inch Super Retina XDR OLED, 2796 x 1290 pixels",
            "Processor": "A17 Pro chip with 6-core GPU",
            "RAM": "8GB",
            "Storage": "256GB/512GB/1TB",
            "Camera": "48MP main, 12MP telephoto (5x), 12MP ultrawide",
            "Battery": "Up to 29 hours video playback",
            "OS": "iOS 17",
            "Colors": "Natural Titanium, Blue Titanium, White Titanium, Black Titanium"
        },
        rating: 4.9,
        reviews: 892,
        inStock: true,
        featured: true,
        trending: true
    },
    {
        id: 3,
        name: "Google Pixel 8 Pro",
        category: "smartphones",
        price: 899.99,
        image: "https://pixabay.com/get/g4c3f10c5cc1e6a11999f026af43d53e794c139313131b53f51a3175808064650f3f444f06cd842a8bff628230b8b853f4a6ca0098d112e714f2f1f8b0a6fbbdc_1280.jpg",
        images: [
            "https://pixabay.com/get/g4c3f10c5cc1e6a11999f026af43d53e794c139313131b53f51a3175808064650f3f444f06cd842a8bff628230b8b853f4a6ca0098d112e714f2f1f8b0a6fbbdc_1280.jpg",
            "https://pixabay.com/get/gead738622626e10eb205002a87615ba1aee499b83d59567935fd98d170810b228881cca737d34bc4cb25b83705dbc565424533d53b9c40bad8ccc82c4335d024_1280.jpg",
            "https://pixabay.com/get/gab7feb1cf3f4f2b894d297c36a0b64689f0a7f7820918638e98a9109718b7034fc73936ff6b9d12c52fce654051dd9300cc9968ee6120ee4ecd5206bf6996a53_1280.jpg"
        ],
        description: "AI-powered photography and pure Android experience in a premium package.",
        detailedDescription: "The Google Pixel 8 Pro brings together the best of Google's AI technology with exceptional camera capabilities. Experience computational photography at its finest with Magic Eraser, Real Tone, and advanced night mode. Powered by Google Tensor G3 for intelligent features and seamless performance.",
        specifications: {
            "Display": "6.7-inch LTPO OLED, 2992 x 1344 pixels, 120Hz",
            "Processor": "Google Tensor G3",
            "RAM": "12GB",
            "Storage": "128GB/256GB/512GB/1TB",
            "Camera": "50MP main, 48MP telephoto, 48MP ultrawide",
            "Battery": "5050mAh with 30W fast charging",
            "OS": "Android 14",
            "Colors": "Obsidian, Porcelain, Bay"
        },
        rating: 4.7,
        reviews: 156,
        inStock: true,
        trending: true
    },
    {
        id: 4,
        name: "OnePlus 12",
        category: "smartphones",
        price: 799.99,
        image: "https://pixabay.com/get/gead738622626e10eb205002a87615ba1aee499b83d59567935fd98d170810b228881cca737d34bc4cb25b83705dbc565424533d53b9c40bad8ccc82c4335d024_1280.jpg",
        images: [
            "https://pixabay.com/get/gead738622626e10eb205002a87615ba1aee499b83d59567935fd98d170810b228881cca737d34bc4cb25b83705dbc565424533d53b9c40bad8ccc82c4335d024_1280.jpg",
            "https://pixabay.com/get/gab7feb1cf3f4f2b894d297c36a0b64689f0a7f7820918638e98a9109718b7034fc73936ff6b9d12c52fce654051dd9300cc9968ee6120ee4ecd5206bf6996a53_1280.jpg",
            "https://pixabay.com/get/g8050498f38a324135a0f73f861dc1838df358c9d1276511f1460bb15c154bbe4cc402d5236823f44dafc42285b0d33ed280a864f15a7c117e8f9831c3d9040da_1280.jpg"
        ],
        description: "Flagship performance with ultra-fast charging and premium design.",
        detailedDescription: "The OnePlus 12 delivers flagship performance without compromise. Featuring the latest Snapdragon processor, stunning 120Hz display, and revolutionary 100W SuperVOOC charging that powers up your device in minutes. Experience speed and elegance in perfect harmony.",
        specifications: {
            "Display": "6.82-inch LTPO4 AMOLED, 3168 x 1440 pixels, 120Hz",
            "Processor": "Snapdragon 8 Gen 3",
            "RAM": "12GB/16GB",
            "Storage": "256GB/512GB",
            "Camera": "50MP main, 64MP periscope telephoto, 48MP ultrawide",
            "Battery": "5400mAh with 100W SuperVOOC charging",
            "OS": "OxygenOS 14 (Android 14)",
            "Colors": "Silky Black, Flowy Emerald, Pale Green"
        },
        rating: 4.6,
        reviews: 89,
        inStock: true
    },
    {
        id: 5,
        name: "Xiaomi 14 Ultra",
        category: "smartphones",
        price: 749.99,
        image: "https://pixabay.com/get/gab7feb1cf3f4f2b894d297c36a0b64689f0a7f7820918638e98a9109718b7034fc73936ff6b9d12c52fce654051dd9300cc9968ee6120ee4ecd5206bf6996a53_1280.jpg",
        images: [
            "https://pixabay.com/get/gab7feb1cf3f4f2b894d297c36a0b64689f0a7f7820918638e98a9109718b7034fc73936ff6b9d12c52fce654051dd9300cc9968ee6120ee4ecd5206bf6996a53_1280.jpg",
            "https://pixabay.com/get/g8050498f38a324135a0f73f861dc1838df358c9d1276511f1460bb15c154bbe4cc402d5236823f44dafc42285b0d33ed280a864f15a7c117e8f9831c3d9040da_1280.jpg",
            "https://pixabay.com/get/g923d5064234715ff019f8d5c3fb3a4e1f89499e947354fe52b8e8aff43318fad537945ac194a711412914719a40cd031fa0ad1e6f93ecd01b52e9317f0bc99a2_1280.jpg"
        ],
        description: "Photography-focused flagship with Leica camera system and premium build.",
        detailedDescription: "The Xiaomi 14 Ultra represents the pinnacle of mobile photography with its Leica-engineered quad-camera system. Featuring a massive 1-inch main sensor, variable aperture, and professional-grade image processing for stunning photos in any condition.",
        specifications: {
            "Display": "6.73-inch LTPO AMOLED, 3200 x 1440 pixels, 120Hz",
            "Processor": "Snapdragon 8 Gen 3",
            "RAM": "12GB/16GB",
            "Storage": "256GB/512GB/1TB",
            "Camera": "50MP main (1-inch sensor), 50MP periscope, 50MP telephoto, 50MP ultrawide",
            "Battery": "5300mAh with 90W fast charging",
            "OS": "HyperOS (Android 14)",
            "Colors": "Black, White, Blue"
        },
        rating: 4.5,
        reviews: 67,
        inStock: true
    },
    {
        id: 6,
        name: "Nothing Phone (2a)",
        category: "smartphones",
        price: 349.99,
        image: "https://pixabay.com/get/g8050498f38a324135a0f73f861dc1838df358c9d1276511f1460bb15c154bbe4cc402d5236823f44dafc42285b0d33ed280a864f15a7c117e8f9831c3d9040da_1280.jpg",
        images: [
            "https://pixabay.com/get/g8050498f38a324135a0f73f861dc1838df358c9d1276511f1460bb15c154bbe4cc402d5236823f44dafc42285b0d33ed280a864f15a7c117e8f9831c3d9040da_1280.jpg",
            "https://pixabay.com/get/g923d5064234715ff019f8d5c3fb3a4e1f89499e947354fe52b8e8aff43318fad537945ac194a711412914719a40cd031fa0ad1e6f93ecd01b52e9317f0bc99a2_1280.jpg",
            "https://pixabay.com/get/g1ce6011e6355511f69fbfce66f3e4aa4ffeea3becabb041ae1312aade0fcdd6cb7f2aa88b4123275392667e1e0363a8e9260df0cb5704153795f9949e96d5e50_1280.jpg"
        ],
        description: "Unique transparent design with Glyph Interface and clean Android experience.",
        detailedDescription: "The Nothing Phone (2a) brings distinctive design and functionality at an accessible price. Features the iconic Glyph Interface with customizable LED patterns, clean Nothing OS based on Android, and solid performance for everyday use.",
        specifications: {
            "Display": "6.7-inch AMOLED, 2412 x 1080 pixels, 120Hz",
            "Processor": "MediaTek Dimensity 7200 Pro",
            "RAM": "8GB/12GB",
            "Storage": "128GB/256GB",
            "Camera": "50MP main, 50MP ultrawide",
            "Battery": "5000mAh with 45W fast charging",
            "OS": "Nothing OS 2.5 (Android 14)",
            "Colors": "Black, White"
        },
        rating: 4.3,
        reviews: 234,
        inStock: true
    },

    // Laptops
    {
        id: 7,
        name: "MacBook Pro 16-inch M3 Max",
        category: "laptops",
        price: 3499.99,
        originalPrice: 3999.99,
        discount: 13,
        image: "https://pixabay.com/get/g0c802b478fe1a4fd3c1cfd2b65b1cdc7feb7fbb2ee61fd9e5096ea70f73ceb20a4c152045d368525dbf63bdc20b2fd0e736a2eeb44467db076fb6ae8288dade1_1280.jpg",
        images: [
            "https://pixabay.com/get/g0c802b478fe1a4fd3c1cfd2b65b1cdc7feb7fbb2ee61fd9e5096ea70f73ceb20a4c152045d368525dbf63bdc20b2fd0e736a2eeb44467db076fb6ae8288dade1_1280.jpg",
            "https://pixabay.com/get/gd008d4584b35209e223dbfa983f164316b9f9b9826cf99ea96544aad553c1d015c3c7765c8f0514359c5f8d2a5f79b82c50f80a80cbbe0c14f1998bffd6c9a4b_1280.jpg",
            "https://pixabay.com/get/gf17e74105d8b4da497b487b83117047b78ef4e69447a769286c2d05465b9a294e2aa037036e10c3335cfc62f615edf9bc0516b4a8350da9d2b4e4abb88ec3408_1280.jpg"
        ],
        description: "The ultimate creative powerhouse with M3 Max chip and stunning Liquid Retina XDR display.",
        detailedDescription: "Experience unprecedented performance with the MacBook Pro 16-inch featuring the revolutionary M3 Max chip. Perfect for professional video editing, 3D rendering, and complex workflows. The stunning 16.2-inch Liquid Retina XDR display brings your content to life with extreme dynamic range and over a billion colors.",
        specifications: {
            "Display": "16.2-inch Liquid Retina XDR, 3456 x 2234 pixels, 1000 nits sustained",
            "Processor": "Apple M3 Max chip with 16-core CPU and 40-core GPU",
            "RAM": "36GB/48GB/64GB/128GB unified memory",
            "Storage": "1TB/2TB/4TB/8TB SSD",
            "Ports": "3x Thunderbolt 4, HDMI, SDXC, MagSafe 3",
            "Battery": "Up to 22 hours video playback",
            "Weight": "4.7 pounds (2.1 kg)",
            "Colors": "Space Black, Silver"
        },
        rating: 4.9,
        reviews: 167,
        inStock: true,
        featured: true,
        trending: true
    },
    {
        id: 8,
        name: "Dell XPS 15 OLED",
        category: "laptops",
        price: 2299.99,
        image: "https://pixabay.com/get/gd008d4584b35209e223dbfa983f164316b9f9b9826cf99ea96544aad553c1d015c3c7765c8f0514359c5f8d2a5f79b82c50f80a80cbbe0c14f1998bffd6c9a4b_1280.jpg",
        images: [
            "https://pixabay.com/get/gd008d4584b35209e223dbfa983f164316b9f9b9826cf99ea96544aad553c1d015c3c7765c8f0514359c5f8d2a5f79b82c50f80a80cbbe0c14f1998bffd6c9a4b_1280.jpg",
            "https://pixabay.com/get/gf17e74105d8b4da497b487b83117047b78ef4e69447a769286c2d05465b9a294e2aa037036e10c3335cfc62f615edf9bc0516b4a8350da9d2b4e4abb88ec3408_1280.jpg",
            "https://pixabay.com/get/g4d0dcab5bd41c3452342ce47ab367c4e41e9d6141b043625f6dfcf4e80a698701fdae7c4bac969c9d139a5e15518b4ce212b7f57a5f93fe45954e943d38904ba_1280.jpg"
        ],
        description: "Premium Windows laptop with stunning OLED display and powerful performance.",
        detailedDescription: "The Dell XPS 15 OLED combines stunning visual excellence with powerful performance. Featuring a vibrant 15.6-inch OLED display with perfect blacks and brilliant colors, powered by the latest Intel processors and NVIDIA graphics for creators and professionals.",
        specifications: {
            "Display": "15.6-inch OLED, 3456 x 2160 pixels, 400 nits, 100% DCI-P3",
            "Processor": "Intel Core i7-13700H or i9-13900H",
            "RAM": "16GB/32GB/64GB DDR5",
            "Storage": "512GB/1TB/2TB/4TB PCIe SSD",
            "Graphics": "NVIDIA GeForce RTX 4050/4060/4070",
            "Ports": "2x Thunderbolt 4, USB-C, SD card reader",
            "Battery": "Up to 13 hours",
            "Weight": "4.23 pounds (1.92 kg)"
        },
        rating: 4.7,
        reviews: 89,
        inStock: true,
        trending: true
    },
    {
        id: 9,
        name: "Lenovo ThinkPad X1 Carbon Gen 11",
        category: "laptops",
        price: 1899.99,
        image: "https://pixabay.com/get/gf17e74105d8b4da497b487b83117047b78ef4e69447a769286c2d05465b9a294e2aa037036e10c3335cfc62f615edf9bc0516b4a8350da9d2b4e4abb88ec3408_1280.jpg",
        images: [
            "https://pixabay.com/get/gf17e74105d8b4da497b487b83117047b78ef4e69447a769286c2d05465b9a294e2aa037036e10c3335cfc62f615edf9bc0516b4a8350da9d2b4abb88ec3408_1280.jpg",
            "https://pixabay.com/get/g4d0dcab5bd41c3452342ce47ab367c4e41e9d6141b043625f6dfcf4e80a698701fdae7c4bac969c9d139a5e15518b4ce212b7f57a5f93fe45954e943d38904ba_1280.jpg",
            "https://pixabay.com/get/ge8ec70033a1a772c9066482c5f7116bfa3bb1ebeb81a92fb505f291e45073dbaa5db48ffcab78a07a21ffed8454aa8e225b62ab8733cc2146a22fa5ceb61c43b_1280.jpg"
        ],
        description: "Ultra-light business laptop with exceptional keyboard and enterprise features.",
        detailedDescription: "The ThinkPad X1 Carbon Gen 11 represents the pinnacle of business laptops. Weighing under 2.5 pounds with military-grade durability, featuring the legendary ThinkPad keyboard, and enterprise-grade security features for professionals who demand reliability.",
        specifications: {
            "Display": "14-inch IPS, 1920 x 1200 or 2880 x 1800 pixels, 400 nits",
            "Processor": "Intel Core i5-1335U or i7-1365U",
            "RAM": "16GB/32GB LPDDR5",
            "Storage": "512GB/1TB/2TB PCIe SSD",
            "Graphics": "Intel Iris Xe",
            "Ports": "2x Thunderbolt 4, 2x USB-A, HDMI, audio jack",
            "Battery": "Up to 15 hours",
            "Weight": "2.48 pounds (1.12 kg)"
        },
        rating: 4.8,
        reviews: 203,
        inStock: true
    },
    {
        id: 10,
        name: "ASUS ROG Zephyrus G16",
        category: "laptops",
        price: 2499.99,
        image: "https://pixabay.com/get/g4d0dcab5bd41c3452342ce47ab367c4e41e9d6141b043625f6dfcf4e80a698701fdae7c4bac969c9d139a5e15518b4ce212b7f57a5f93fe45954e943d38904ba_1280.jpg",
        images: [
            "https://pixabay.com/get/g4d0dcab5bd41c3452342ce47ab367c4e41e9d6141b043625f6dfcf4e80a698701fdae7c4bac969c9d139a5e15518b4ce212b7f57a5f93fe45954e943d38904ba_1280.jpg",
            "https://pixabay.com/get/ge8ec70033a1a772c9066482c5f7116bfa3bb1ebeb81a92fb505f291e45073dbaa5db48ffcab78a07a21ffed8454aa8e225b62ab8733cc2146a22fa5ceb61c43b_1280.jpg",
            "https://pixabay.com/get/g4f4a5f8e1ef2d3f10fba9f2825c869d6b35f635cf7207bb6e2700ed6aa1c82164ef40b25ff2cc112d7400990232fabd0f6db3651721c0a32d2808c84e0305d04_1280.jpg"
        ],
        description: "Ultra-slim gaming laptop with powerful RTX graphics and ROG innovations.",
        detailedDescription: "The ROG Zephyrus G16 redefines gaming laptops with its incredibly slim profile and powerful performance. Featuring the latest RTX graphics, high-refresh OLED display, and advanced cooling technology for the ultimate gaming and creative experience.",
        specifications: {
            "Display": "16-inch OLED, 2560 x 1600 pixels, 240Hz, 0.2ms response time",
            "Processor": "Intel Core i7-13620H or i9-13900H",
            "RAM": "16GB/32GB DDR5",
            "Storage": "1TB/2TB PCIe 4.0 SSD",
            "Graphics": "NVIDIA GeForce RTX 4060/4070",
            "Ports": "2x USB-C, 2x USB-A, HDMI 2.1, audio jack",
            "Battery": "Up to 10 hours",
            "Weight": "4.3 pounds (1.95 kg)"
        },
        rating: 4.6,
        reviews: 145,
        inStock: true
    },
    {
        id: 11,
        name: "Microsoft Surface Laptop Studio 2",
        category: "laptops",
        price: 1999.99,
        image: "https://pixabay.com/get/ge8ec70033a1a772c9066482c5f7116bfa3bb1ebeb81a92fb505f291e45073dbaa5db48ffcab78a07a21ffed8454aa8e225b62ab8733cc2146a22fa5ceb61c43b_1280.jpg",
        images: [
            "https://pixabay.com/get/ge8ec70033a1a772c9066482c5f7116bfa3bb1ebeb81a92fb505f291e45073dbaa5db48ffcab78a07a21ffed8454aa8e225b62ab8733cc2146a22fa5ceb61c43b_1280.jpg",
            "https://pixabay.com/get/g4f4a5f8e1ef2d3f10fba9f2825c869d6b35f635cf7207bb6e2700ed6aa1c82164ef40b25ff2cc112d7400990232fabd0f6db3651721c0a32d2808c84e0305d04_1280.jpg",
            "https://pixabay.com/get/g0c802b478fe1a4fd3c1cfd2b65b1cdc7feb7fbb2ee61fd9e5096ea70f73ceb20a4c152045d368525dbf63bdc20b2fd0e736a2eeb44467db076fb6ae8288dade1_1280.jpg"
        ],
        description: "Versatile 2-in-1 laptop with unique hinge design and Surface Pen support.",
        detailedDescription: "The Surface Laptop Studio 2 offers unmatched versatility with its innovative Dynamic Woven Hinge that transforms between laptop, stage, and studio modes. Perfect for creators with Surface Pen support, powerful performance, and the full Windows 11 experience.",
        specifications: {
            "Display": "14.4-inch PixelSense Flow, 2400 x 1600 pixels, 120Hz, touch",
            "Processor": "Intel Core i7-13700H",
            "RAM": "16GB/32GB/64GB LPDDR5x",
            "Storage": "512GB/1TB/2TB SSD",
            "Graphics": "Intel Iris Xe or NVIDIA GeForce RTX 4050/4060",
            "Ports": "2x USB-C, 1x USB-A, Surface Connect",
            "Battery": "Up to 18 hours",
            "Weight": "4.0 pounds (1.8 kg)"
        },
        rating: 4.5,
        reviews: 76,
        inStock: true
    },
    {
        id: 12,
        name: "HP Spectre x360 16",
        category: "laptops",
        price: 1649.99,
        image: "https://pixabay.com/get/g4f4a5f8e1ef2d3f10fba9f2825c869d6b35f635cf7207bb6e2700ed6aa1c82164ef40b25ff2cc112d7400990232fabd0f6db3651721c0a32d2808c84e0305d04_1280.jpg",
        images: [
            "https://pixabay.com/get/g4f4a5f8e1ef2d3f10fba9f2825c869d6b35f635cf7207bb6e2700ed6aa1c82164ef40b25ff2cc112d7400990232fabd0f6db3651721c0a32d2808c84e0305d04_1280.jpg",
            "https://pixabay.com/get/g0c802b478fe1a4fd3c1cfd2b65b1cdc7feb7fbb2ee61fd9e5096ea70f73ceb20a4c152045d368525dbf63bdc20b2fd0e736a2eeb44467db076fb6ae8288dade1_1280.jpg",
            "https://pixabay.com/get/gd008d4584b35209e223dbfa983f164316b9f9b9826cf99ea96544aad553c1d015c3c7765c8f0514359c5f8d2a5f79b82c50f80a80cbbe0c14f1998bffd6c9a4b_1280.jpg"
        ],
        description: "Premium 2-in-1 convertible with OLED display and elegant design.",
        detailedDescription: "The HP Spectre x360 16 combines elegance with performance in a versatile 2-in-1 design. Features a stunning OLED display, premium build quality, and the flexibility to use as a laptop or tablet for work and creativity.",
        specifications: {
            "Display": "16-inch OLED, 3072 x 1920 pixels, touch, 400 nits",
            "Processor": "Intel Core i7-12700H",
            "RAM": "16GB/32GB LPDDR4x",
            "Storage": "512GB/1TB/2TB PCIe SSD",
            "Graphics": "Intel Iris Xe",
            "Ports": "2x Thunderbolt 4, 1x USB-A, microSD",
            "Battery": "Up to 12 hours",
            "Weight": "4.45 pounds (2.02 kg)"
        },
        rating: 4.4,
        reviews: 112,
        inStock: true
    },

    // Wearables
    {
        id: 13,
        name: "Apple Watch Ultra 2",
        category: "wearables",
        price: 799.99,
        image: "https://pixabay.com/get/g80e6e8c96b327fb2b094c282fbe5a115c0b2c98c854e88a2553ef45fda8cc3bf78a9dcaa2e7cd2e25640e0a136c7c4cbd53ad4f611ec5b0f33e339cc9e0468a3_1280.jpg",
        images: [
            "https://pixabay.com/get/g80e6e8c96b327fb2b094c282fbe5a115c0b2c98c854e88a2553ef45fda8cc3bf78a9dcaa2e7cd2e25640e0a136c7c4cbd53ad4f611ec5b0f33e339cc9e0468a3_1280.jpg",
            "https://pixabay.com/get/gb61472aa73f3fe81c18affc94ab83e132dd840465de70a995742e9dc34938f48be12bd119123776b06b32395277f355428cefecaac1ea60e39a682827f68e1eb_1280.jpg",
            "https://pixabay.com/get/g697d3075f4d215ffe723d7fdd0b5ea1b362323ffeb818bb9f28ac4e21e29c133b390ec7a747e22cdb49d33f6be04f8b093ee4cc7a5b16253dc07506f9f944ca7_1280.jpg"
        ],
        description: "The most rugged and capable Apple Watch designed for extreme adventures.",
        detailedDescription: "Built for the most demanding environments, the Apple Watch Ultra 2 features a robust titanium case, the brightest Apple Watch display ever, and advanced features for diving, mountaineering, and endurance sports. With up to 36 hours of battery life and precision dual-frequency GPS.",
        specifications: {
            "Display": "49mm Retina LTPO OLED, 502 x 410 pixels, 3000 nits",
            "Case": "Titanium, 49mm",
            "Processor": "S9 SiP with 64-bit dual-core processor",
            "Storage": "64GB",
            "Connectivity": "GPS, Cellular (optional), Wi-Fi, Bluetooth 5.3",
            "Sensors": "ECG, Blood Oxygen, Temperature, Depth gauge, Water temperature",
            "Battery": "Up to 36 hours (normal use), 72 hours (low power mode)",
            "Water Resistance": "100 meters, EN 13319 diving standard"
        },
        rating: 4.8,
        reviews: 234,
        inStock: true,
        featured: true,
        trending: true
    },
    {
        id: 14,
        name: "Samsung Galaxy Watch6 Classic",
        category: "wearables",
        price: 429.99,
        image: "https://pixabay.com/get/gb61472aa73f3fe81c18affc94ab83e132dd840465de70a995742e9dc34938f48be12bd119123776b06b32395277f355428cefecaac1ea60e39a682827f68e1eb_1280.jpg",
        images: [
            "https://pixabay.com/get/gb61472aa73f3fe81c18affc94ab83e132dd840465de70a995742e9dc34938f48be12bd119123776b06b32395277f355428cefecaac1ea60e39a682827f68e1eb_1280.jpg",
            "https://pixabay.com/get/g697d3075f4d215ffe723d7fdd0b5ea1b362323ffeb818bb9f28ac4e21e29c133b390ec7a747e22cdb49d33f6be04f8b093ee4cc7a5b16253dc07506f9f944ca7_1280.jpg",
            "https://pixabay.com/get/g6832fb0f3af9a0bb8da7968f4f456f23ff024a08ad1776a44f9b4f50d3bffcc32b497e7bc9640afa8e8bac3ae7425135aea828a95f303a5dca41fed68c162ba3_1280.jpg"
        ],
        description: "Premium smartwatch with rotating bezel and comprehensive health tracking.",
        detailedDescription: "The Galaxy Watch6 Classic combines timeless design with cutting-edge technology. Features the iconic rotating bezel for intuitive navigation, advanced health monitoring including body composition analysis, and seamless integration with your Galaxy ecosystem.",
        specifications: {
            "Display": "1.5-inch Super AMOLED, 480 x 480 pixels, Always-on",
            "Case": "Stainless Steel, 47mm",
            "Processor": "Exynos W930 Dual-core 1.4GHz",
            "Storage": "16GB",
            "RAM": "2GB",
            "Connectivity": "GPS, Bluetooth 5.3, Wi-Fi, NFC",
            "Sensors": "Samsung BioActive Sensor, Accelerometer, Gyroscope, Barometer",
            "Battery": "425mAh, up to 40 hours",
            "Water Resistance": "5ATM + IP68, MIL-STD-810H"
        },
        rating: 4.6,
        reviews: 187,
        inStock: true,
        trending: true
    },
    {
        id: 15,
        name: "Garmin Fenix 7X Sapphire Solar",
        category: "wearables",
        price: 899.99,
        image: "https://pixabay.com/get/g697d3075f4d215ffe723d7fdd0b5ea1b362323ffeb818bb9f28ac4e21e29c133b390ec7a747e22cdb49d33f6be04f8b093ee4cc7a5b16253dc07506f9f944ca7_1280.jpg",
        images: [
            "https://pixabay.com/get/g697d3075f4d215ffe723d7fdd0b5ea1b362323ffeb818bb9f28ac4e21e29c133b390ec7a747e22cdb49d33f6be04f8b093ee4cc7a5b16253dc07506f9f944ca7_1280.jpg",
            "https://pixabay.com/get/g6832fb0f3af9a0bb8da7968f4f456f23ff024a08ad1776a44f9b4f50d3bffcc32b497e7bc9640afa8e8bac3ae7425135aea828a95f303a5dca41fed68c162ba3_1280.jpg",
            "https://pixabay.com/get/g80e6e8c96b327fb2b094c282fbe5a115c0b2c98c854e88a2553ef45fda8cc3bf78a9dcaa2e7cd2e25640e0a136c7c4cbd53ad4f611ec5b0f33e339cc9e0468a3_1280.jpg"
        ],
        description: "Ultimate multisport GPS watch with solar charging and sapphire crystal display.",
        detailedDescription: "The Fenix 7X Sapphire Solar is built for serious athletes and outdoor enthusiasts. Features solar charging capability, scratch-resistant sapphire crystal, comprehensive training metrics, and preloaded TopoActive maps for navigation in any terrain.",
        specifications: {
            "Display": "1.4-inch transflective MIP, 280 x 280 pixels",
            "Case": "Fiber-reinforced polymer with titanium bezel, 51mm",
            "Memory": "32GB",
            "Battery": "Up to 28 days smartwatch mode (with solar), 89 hours GPS mode",
            "Water Rating": "10ATM",
            "Connectivity": "GPS, GLONASS, Galileo, Bluetooth, ANT+, Wi-Fi",
            "Sensors": "Pulse Ox, Compass, Gyroscope, Accelerometer, Thermometer",
            "Features": "Preloaded TopoActive maps, Multi-band GPS, Training Load Focus"
        },
        rating: 4.7,
        reviews: 98,
        inStock: true
    },
    {
        id: 16,
        name: "Fitbit Sense 2",
        category: "wearables",
        price: 299.99,
        image: "https://pixabay.com/get/g6832fb0f3af9a0bb8da7968f4f456f23ff024a08ad1776a44f9b4f50d3bffcc32b497e7bc9640afa8e8bac3ae7425135aea828a95f303a5dca41fed68c162ba3_1280.jpg",
        images: [
            "https://pixabay.com/get/g6832fb0f3af9a0bb8da7968f4f456f23ff024a08ad1776a44f9b4f50d3bffcc32b497e7bc9640afa8e8bac3ae7425135aea828a95f303a5dca41fed68c162ba3_1280.jpg",
            "https://pixabay.com/get/g80e6e8c96b327fb2b094c282fbe5a115c0b2c98c854e88a2553ef45fda8cc3bf78a9dcaa2e7cd2e25640e0a136c7c4cbd53ad4f611ec5b0f33e339cc9e0468a3_1280.jpg",
            "https://pixabay.com/get/gb61472aa73f3fe81c18affc94ab83e132dd840465de70a995742e9dc34938f48be12bd119123776b06b32395277f355428cefecaac1ea60e39a682827f68e1eb_1280.jpg"
        ],
        description: "Advanced health and fitness smartwatch with stress management and ECG.",
        detailedDescription: "The Fitbit Sense 2 focuses on holistic health and wellness. Features continuous stress monitoring, ECG app, skin temperature sensing, and comprehensive sleep tracking. Includes 6+ months of Fitbit Premium for personalized insights and guidance.",
        specifications: {
            "Display": "1.58-inch AMOLED, 336 x 336 pixels, Always-on",
            "Case": "Aluminum, 40.5mm",
            "Battery": "6+ days",
            "Water Resistance": "50 meters",
            "Connectivity": "GPS, Wi-Fi, Bluetooth 5.0, NFC",
            "Sensors": "Continuous EDA, ECG, Optical heart rate, SpO2, Skin temperature",
            "Compatibility": "Android 9+ / iOS 15+",
            "Features": "Google Assistant, Alexa Built-in, Fitbit Pay"
        },
        rating: 4.4,
        reviews: 156,
        inStock: true
    },

    // Accessories
    {
        id: 17,
        name: "Sony WH-1000XM5 Headphones",
        category: "accessories",
        price: 399.99,
        originalPrice: 449.99,
        discount: 11,
        image: "https://pixabay.com/get/gb6b855f5224eddd123041e4ed63d361cf8a28925a60e253b1cc4b766aa45eead5010bc25daca8a25a51efc067fa207ed1c6f64f6ded5b508270d8fe9fce15ccc_1280.jpg",
        images: [
            "https://pixabay.com/get/gb6b855f5224eddd123041e4ed63d361cf8a28925a60e253b1cc4b766aa45eead5010bc25daca8a25a51efc067fa207ed1c6f64f6ded5b508270d8fe9fce15ccc_1280.jpg",
            "https://pixabay.com/get/gf4164437f08a5877770b488920a9d088a575a0faa9118c6447b6e35512b1741b012eb57ece2d281432b055f69b4483f2aea7182de5b8baee8fea0cb3f629f66f_1280.jpg",
            "https://pixabay.com/get/gaab9198dafcdc70834e5e82324706814c32061259d384fd07d6b1c5e8564e7b353882be05408ac03404332695154ab6af0244b1957e7a987d59ba368d9e84fbc_1280.jpg"
        ],
        description: "Industry-leading noise canceling headphones with exceptional sound quality.",
        detailedDescription: "Experience the pinnacle of audio technology with the Sony WH-1000XM5. Featuring industry-leading noise cancellation, premium sound quality with 30mm drivers, and all-day comfort with lightweight design. Perfect for travel, work, or pure music enjoyment.",
        specifications: {
            "Driver": "30mm dynamic drivers",
            "Frequency Response": "4Hz - 40kHz",
            "Noise Cancellation": "Dual Noise Sensor technology",
            "Battery Life": "Up to 30 hours with ANC",
            "Quick Charge": "3 minutes for 3 hours playback",
            "Connectivity": "Bluetooth 5.2, multipoint connection",
            "Weight": "250g",
            "Features": "Speak-to-Chat, Adaptive Sound Control, LDAC support"
        },
        rating: 4.8,
        reviews: 456,
        inStock: true,
        featured: true,
        trending: true
    },
    {
        id: 18,
        name: "Apple AirPods Pro (2nd Gen)",
        category: "accessories",
        price: 249.99,
        image: "https://pixabay.com/get/gf4164437f08a5877770b488920a9d088a575a0faa9118c6447b6e35512b1741b012eb57ece2d281432b055f69b4483f2aea7182de5b8baee8fea0cb3f629f66f_1280.jpg",
        images: [
            "https://pixabay.com/get/gf4164437f08a5877770b488920a9d088a575a0faa9118c6447b6e35512b1741b012eb57ece2d281432b055f69b4483f2aea7182de5b8baee8fea0cb3f629f66f_1280.jpg",
            "https://pixabay.com/get/gaab9198dafcdc70834e5e82324706814c32061259d384fd07d6b1c5e8564e7b353882be05408ac03404332695154ab6af0244b1957e7a987d59ba368d9e84fbc_1280.jpg",
            "https://pixabay.com/get/ga0a1f14bf4bd592b592fa03d34eb97c134e32aa09befdd55563e3ea0cc322b95f80f5beb5a5c445937491aaaa15d6b307360187f5e72391882e90c4c5c3d2e79_1280.jpg"
        ],
        description: "Magical AirPods experience with Active Noise Cancellation and Spatial Audio.",
        detailedDescription: "The AirPods Pro (2nd generation) deliver an exceptional audio experience with the power of the H2 chip. Features upgraded Active Noise Cancellation, Adaptive Transparency, and Personalized Spatial Audio for immersive sound that surrounds you.",
        specifications: {
            "Chip": "Apple H2",
            "Active Noise Cancellation": "Yes, with upgraded algorithm",
            "Transparency Mode": "Adaptive Transparency",
            "Spatial Audio": "Personalized with dynamic head tracking",
            "Battery Life": "Up to 6 hours (AirPods), 30 hours (with case)",
            "Charging": "Lightning and MagSafe wireless charging",
            "Water Resistance": "IPX4 (AirPods and case)",
            "Features": "Touch control, Hey Siri, Audio Sharing"
        },
        rating: 4.7,
        reviews: 789,
        inStock: true,
        trending: true
    },
    {
        id: 19,
        name: "Anker PowerCore 10000 PD Redux",
        category: "accessories",
        price: 39.99,
        image: "https://pixabay.com/get/gaab9198dafcdc70834e5e82324706814c32061259d384fd07d6b1c5e8564e7b353882be05408ac03404332695154ab6af0244b1957e7a987d59ba368d9e84fbc_1280.jpg",
        images: [
            "https://pixabay.com/get/gaab9198dafcdc70834e5e82324706814c32061259d384fd07d6b1c5e8564e7b353882be05408ac03404332695154ab6af0244b1957e7a987d59ba368d9e84fbc_1280.jpg",
            "https://pixabay.com/get/ga0a1f14bf4bd592b592fa03d34eb97c134e32aa09befdd55563e3ea0cc322b95f80f5beb5a5c445937491aaaa15d6b307360187f5e72391882e90c4c5c3d2e79_1280.jpg",
            "https://pixabay.com/get/gb6b855f5224eddd123041e4ed63d361cf8a28925a60e253b1cc4b766aa45eead5010bc25daca8a25a51efc067fa207ed1c6f64f6ded5b508270d8fe9fce15ccc_1280.jpg"
        ],
        description: "Ultra-compact portable charger with USB-C Power Delivery for fast charging.",
        detailedDescription: "The Anker PowerCore 10000 PD Redux combines ultra-high capacity with an ultra-compact design. Features 18W USB-C Power Delivery for fast charging of phones, tablets, and even some laptops. Perfect for travel and daily use.",
        specifications: {
            "Capacity": "10000mAh / 37Wh",
            "Input": "USB-C 18W PD",
            "Output": "USB-C 18W PD, USB-A 12W",
            "Charging Speed": "iPhone 14: 0-50% in 30 mins",
            "Compatibility": "iPhone, Samsung, iPad, AirPods, and more",
            "Safety": "MultiProtect safety system",
            "Weight": "194g",
            "Dimensions": "106 × 52 × 25mm"
        },
        rating: 4.5,
        reviews: 1247,
        inStock: true
    },
    {
        id: 20,
        name: "Logitech MX Master 3S Wireless Mouse",
        category: "accessories",
        price: 99.99,
        image: "https://pixabay.com/get/ga0a1f14bf4bd592b592fa03d34eb97c134e32aa09befdd55563e3ea0cc322b95f80f5beb5a5c445937491aaaa15d6b307360187f5e72391882e90c4c5c3d2e79_1280.jpg",
        images: [
            "https://pixabay.com/get/ga0a1f14bf4bd592b592fa03d34eb97c134e32aa09befdd55563e3ea0cc322b95f80f5beb5a5c445937491aaaa15d6b307360187f5e72391882e90c4c5c3d2e79_1280.jpg",
            "https://pixabay.com/get/gb6b855f5224eddd123041e4ed63d361cf8a28925a60e253b1cc4b766aa45eead5010bc25daca8a25a51efc067fa207ed1c6f64f6ded5b508270d8fe9fce15ccc_1280.jpg",
            "https://pixabay.com/get/gf4164437f08a5877770b488920a9d088a575a0faa9118c6447b6e35512b1741b012eb57ece2d281432b055f69b4483f2aea7182de5b8baee8fea0cb3f629f66f_1280.jpg"
        ],
        description: "Advanced wireless mouse with ultra-fast scrolling and cross-computer control.",
        detailedDescription: "The MX Master 3S is the ultimate mouse for productivity and precision. Features ultra-fast MagSpeed electromagnetic scrolling, advanced tracking on any surface including glass, and the ability to seamlessly control multiple computers with Logitech Flow technology.",
        specifications: {
            "Sensor": "Darkfield high precision (8000 DPI)",
            "Connectivity": "Bluetooth Low Energy, USB receiver",
            "Battery": "Up to 70 days on full charge",
            "Scrolling": "MagSpeed electromagnetic, horizontal scroll wheel",
            "Buttons": "7 customizable buttons",
            "Compatibility": "Windows, macOS, Linux, Chrome OS",
            "Dimensions": "125.9 × 84.3 × 51.0mm",
            "Weight": "141g"
        },
        rating: 4.6,
        reviews: 567,
        inStock: true
    }
];

// Helper functions for product data
function getProductById(id) {
    return products.find(product => product.id === parseInt(id));
}

function getProductsByCategory(category) {
    if (category === 'all') return products;
    return products.filter(product => product.category === category);
}

function getFeaturedProducts() {
    return products.filter(product => product.featured);
}

function getTrendingProducts() {
    return products.filter(product => product.trending);
}

function searchProducts(query) {
    const searchTerm = query.toLowerCase();
    return products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
}

function filterProductsByPrice(products, minPrice, maxPrice) {
    return products.filter(product => {
        const price = product.price;
        return (!minPrice || price >= minPrice) && (!maxPrice || price <= maxPrice);
    });
}

function sortProducts(products, sortBy) {
    const sorted = [...products];
    
    switch (sortBy) {
        case 'price-low':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sorted.sort((a, b) => b.price - a.price);
        case 'name':
            return sorted.sort((a, b) => a.name.localeCompare(b.name));
        case 'featured':
        default:
            return sorted.sort((a, b) => {
                if (a.featured && !b.featured) return -1;
                if (!a.featured && b.featured) return 1;
                if (a.trending && !b.trending) return -1;
                if (!a.trending && b.trending) return 1;
                return 0;
            });
    }
}

function getRelatedProducts(productId, category, limit = 4) {
    return products
        .filter(product => product.id !== productId && product.category === category)
        .slice(0, limit);
}

// Export products data for use in other scripts
window.products = products;
window.getProductById = getProductById;
window.getProductsByCategory = getProductsByCategory;
window.getFeaturedProducts = getFeaturedProducts;
window.getTrendingProducts = getTrendingProducts;
window.searchProducts = searchProducts;
window.filterProductsByPrice = filterProductsByPrice;
window.sortProducts = sortProducts;
window.getRelatedProducts = getRelatedProducts;
