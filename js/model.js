const state = {
  products: [
    {
      id: "1",
      title: "Mi 10i 5G",
      image:
        "https://images-eu.ssl-images-amazon.com/images/I/31OEe720ujL._AC_SX368_.jpg",
      rating: "3+ ratings on this product",
      description:
        "Mi 10i 5G (Atlantic Blue, 6GB RAM, 128GB Storage) - 108MP Quad Camera | Snapdragon 750G Processor |",
      about:
        "Camera: 108 MP Quad Rear camera with Ultra-wide and Macro mode Processor: Octa-core Snapdragon 750G with 8nm process and support for next generation 5G Network Display: 16.9 centimeters (6.67-inch) FHD+ Full screen dot display with AdaptiveSync 120Hz refresh rate Battery: 4820 mAh large battery with 33W fast charger in-box and Type-C connectivity Memory, Storage & SIM: 6GB RAM | 128GB storage expandable up to 512GB with microSD card slot Warranty: 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase",
      price: "21,999",
      mrp: "24,999",
    },
    {
      id: "2",
      title: "Samsung Galaxy M42 5G ",
      image:
        "https://images-eu.ssl-images-amazon.com/images/I/41446q-VWuL._AC_SX368_.jpg",
      rating: "4+ stars on this product",
      description:
        "Samsung Galaxy M42 5G (Prism Dot Black, 8GB RAM, 128GB Storage)",
      about:
        "Camera: 108 MP Quad Rear camera with Ultra-wide and Macro mode Processor: Octa-core Snapdragon 750G with 8nm process and support for next generation 5G Network Display: 16.9 centimeters (6.67-inch) FHD+ Full screen dot display with AdaptiveSync 120Hz refresh rate Battery: 4820 mAh large battery with 33W fast charger in-box and Type-C connectivity Memory, Storage & SIM: 6GB RAM | 128GB storage expandable up to 512GB with microSD card slot Warranty: 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase",
      price: "23,999",
      mrp: "29,999",
    },
    {
      id: "3",
      title: "OnePlus Nord CE 5G",
      image:
        "https://images-eu.ssl-images-amazon.com/images/I/41I4ZIBgc3S._AC_SX184_.jpg",
      rating: "5 stars on this product",
      description:
        "Samsung Galaxy M42 5G (Prism Dot Black, 8GB RAM, 128GB Storage)",
      about:
        "64MP+8MP+2MP triple rear camera with 1080p video at 30/60 fps, 4k 30 fps | 16MP front camera with 1080p video at 30/60 fps. 6.43-inch, 90Hz fluid AMOLED display with 2400 x 1080 pixels resolution | 410ppi Memory, Storage & SIM: 8GB RAM | 128GB internal memory on UFS 2.1 storage system. Dual SIM (nano + nano) | OnePlus Nord CE currently supports dual 4G SIM Cards or a single 5G SIM + 4G SIM. Chipset: Qualcomm Snapdragon 750G 5G mobile platform with an octa-core processor, Kryo 570 CPU (20% improvement from predecessor), and an Adreno 619 GPU (10% improved graphics performance from predecessor). Alexa Hands-Free capable: Download the Alexa app to use Alexa hands-free. Play music, make calls, hear news, open apps, navigate, and more, all using just your voice, while on-the-go.",
      price: "24,000",
      mrp: "29,999",
    },
    {
      id: "4",
      title: "Samsung Galaxy M31",
      image:
        "https://m.media-amazon.com/images/I/71-Su4Wr0HL._AC_UL480_FMwebp_QL65_.jpg",
      rating: "3+ stars on this product",
      description: "Samsung Galaxy M31 (Ocean Blue, 8GB RAM, 128GB Storage) ",
      about:
        "Quad Camera Setup - 64MP (F1.8) Main Camera +8MP (F2.2) Ultra Wide Camera +5MP(F2.2) Depth Camera +5MP(F2.4) Macro Camera and 32MP (F2.0) front facing Camera 6.4-inch(16.21 centimeters) Super Amoled - Infinity U Cut Display , FHD+ Resolution (2340 x 1080) , 404 ppi pixel density and 16M color support Android v10.0 operating system with 2.3GHz + 1.7GHz Exynos 9611 Octa core processor , 8GB RAM, 128GB internal memory expandable up to 512GB and dual SIM 6000 mAh Battery 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase Please contact Samsung helpline number 1800 407 267864 for any assistance related to device",
      price: "16,999",
      mrp: "21,999",
    },
    {
      id: "5",
      title: "Oppo A31",
      image:
        "https://m.media-amazon.com/images/I/61CnyJ-IbML._AC_UL480_FMwebp_QL65_.jpg",
      rating: "3 stars on this product",
      description: "Oppo A31 (Fantasy White, 6GB RAM, 128GB Storage)",
      about:
        "12+2+2MP triple rear camera (12MP main camera+2MP macro lens+2MP depth camera) with Portrait bokeh, macro lens, dazzle color mode, AI beautification | 8MP front camera 16.5 centimeters (6.5-inch) waterdrop multi touch screen with an 89% screen to body ratio | 1600 x 720 pixels resolution, 269 ppi pixel density Memory, Storage & SIM: 6GB RAM | 128GB internal memory expandable up to 256GB | Dual SIM (nano+nano) dual-standby (4G+4G) Android Pie v9.0 based on ColorOS 6.1 operating system with 2.3GHz Mediatek 6765 octa core processor, IMG GE8320 4230mAH lithium-polymer battery providing talk-time of 45 hours and standby time of 450 hours 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase Box also includes: USB cable, Sim tray ejecter, pre-applied screen protector and protective case, booklet with warranty card and quick guide. The box does not include earphones",
      price: "12,000",
      mrp: "15,999",
    },
    {
      id: "6",
      title: "Redmi Note 9",
      image:
        "https://m.media-amazon.com/images/I/71X5I1cVfbL._AC_UL480_FMwebp_QL65_.jpg",
      rating: "3+ stars on this product",
      description:
        "Redmi Note 9 (Arctic White, 4GB RAM, 64GB Storage) - 48MP Quad Camera & Full HD+ Display",
      about:
        "48MP rear camera with ultra-wide, macro, depth sensor, portrait, night mode, ai scene recognition, hdr, pro mode | 13MP front camera 16.5862 centimeters (6.53-inch) FHD+ display with multi-touch capacitive touchscreen with 2340 x 1080 pixels resolution | 19.5:9 aspect ratio Memory, Storage & SIM: 4GB RAM | 64GB internal memory expandable up to 512GB | Dual SIM (nano+nano) dual-standby (4G+4G) Android v10 operating system with 2.0GHz Mediatek Helio G85 octa core processor with 12nm process, Helio G85 5020mAH lithium-polymer battery with 22.5W fast charger in-box | dedicated SD card support 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase Box also includes: Power adapter, USB cable, SIM eject tool, Warranty card, User guide, Clear soft case",
      price: "11,499",
      mrp: "14,999",
    },
    {
      id: "7",
      title: "Nokia G20 Smartphone",
      image:
        "https://m.media-amazon.com/images/I/61OiHUy-bfS._AC_UL480_FMwebp_QL65_.jpg",
      rating: "3+ stars on this product",
      description:
        "Nokia G20 Smartphone, Dual SIM 4G, 4GB RAM/64GB Storage, 48MP Quad Camera with 6.5” (16.51 cm) Screen | Blue",
      about:
        "Create quality content, all the time Do what you love for longer with up to 3-days battery life Discover pure Nordic design – stylish and incredibly practical Be the key to your world with advanced security features Enjoy the latest Android 11 features with up to 2 years of OS updates",
      price: "12,999",
      mrp: "14,999",
    },
    {
      id: "8",
      title: "Samsung Galaxy M12",
      image:
        "https://m.media-amazon.com/images/I/714QWDxXgNL._AC_UL480_FMwebp_QL65_.jpg",
      rating: "4 stars on this product",
      description: "Samsung Galaxy M12 (Black,6GB RAM, 128GB Storage)",
      about:
        "48MP+5MP+2MP+2MP Quad camera setup- True 48MP (F 2.0) main camera + 5MP (F2.2) Ultra wide camera+ 2MP (F2.4) depth camera + 2MP (2.4) Macro Camera| 8MP (F2.2) front came Memory, Storage & SIM: 6GB RAM | 128GB internal memory expandable up to 1TB| Dual SIM (nan +nano) dual-standby (4G+4 6000mAH lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase Android 11, v11.0 operating system,One UI 3.1, with 8nm Power Efficient Exynos850 (Octa Core 2.0GH 16.55 centimeters (6.5-inch) HD+ TFT LCD - infinity v-cut display,90Hz screen refresh rate, HD+ resolution with 720 x 1600 pixels resolution, 269 PPI with 16M color",
      price: "13,499",
      mrp: "15,499",
    },
    {
      id: "9",
      title: "New Apple iPhone 11 (128GB)",
      image:
        "https://m.media-amazon.com/images/I/71tpxtLD0aL._AC_UY327_FMwebp_QL65_.jpg",
      rating: "5 stars on this product",
      description: "New Apple iPhone 11 (128GB) - Purple",
      about:
        "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display Water and dust resistant (2 meters for up to 30 minutes, IP68) Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps 12MP TrueDepth front camera with Portrait mode, 4K video, and Slo-Mo Face ID for secure authentication A13 Bionic chip with third-generation Neural Engine Fast-charge capable",
      price: "121,999",
      mrp: "130,999",
    },
  ],
};

export default state;
