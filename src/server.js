import { createServer, Model, Response } from "miragejs";

const products = [
  //1
  {
    id: "1",
    type: "headphone",
    name: "Rockid Rush",
    hostId: "123",
    price: "1499",
    caption: "Kids Wireless Bluetooth Headphone with 10 Hours   Playback",
    description:
      "Get your child the ticket to musical wonderland with boAt Rockid Rush. It comes with 30mm drivers tuned to deliver boAt Signature Sound & has a sound limit of 85 dB which is perfect for delicate ears of your child. Its soft and plush earcups & feather-light design provide extra comfort. Designed for your little explorer, it has 10 hours of playtime for them to embark on a long audio journey. Get a safer auditory experience with the coolest headphones designed just for your kid.",
    details: [
      {
        title: "Controlled Audio Environment",
        description:
          "boAt Rockid Rush comes with a controlled audio environment for the delicate ears of your child. With an 85 dB sound limit, it makes sure that your child is not exposed to loud sound.",
      },
      {
        title: "Immersive Experience",
        description:
          "Get your kid an immerse audio experience for their epic audio adventures with boAt Rockid Rush. The 30 mm drivers powered by the boAt Signature Sound ensure that every note that they hear is brought to life.",
      },
    ],
    imageUrls: [
      "Rockid_Rush1.png",
      "Rockid_Rush2.png",
      "Rockid_Rush4.png",
      "Rockid_Rush5.png",
      "Rockid_Rush6.png",
    ],
  },
  //2
  {
    id: "2",
    type: "headphone",
    name: "Rockerz Bat",
    hostId: "12",
    price: "1799",
    caption:
      "Bluetooth Wireless Headphone with 40 mm Drivers HD Immersive Audio, Power Up For 15HRS",
    description:
      "There is no better justice to your playlist than Rockerz 450 boAt | DC edition. If low battery is your enemy, the 15HRS non-stop playback is here to rightfully combat that. Feel the power rising up in your veins- just like the Dark Knight, as you indulge in your playlist with its 40mm dynamic drivers. Versatile just like the Batman, Rockerz 450 are equipped with super adaptive headbands for comfort. Be your batman as you get ready to rule with #CYOU.",
    details: [
      {
        title: "Power Up For 15HRS",
        description:
          "Power up your hustle as you become the hero you envision to be with 15HRS playback at your service.Rockerz 450 won't stop until you do.",
      },
      {
        title: "HD Immersive Audio",
        description:
          "The 40mm drivers will make you charge up as you immerse yourself in your playlist. The boAt Signature Sound will shine through, no matter what.",
      },
      {
        title: "Adaptive Ear Cups and Headband",
        description:
          "Based on a smooth comfortable fit design coated with a sleek matte finish that looks sharp and stays sharp, the boAt | DC edition is here for the win.",
      },
    ],
    imageUrls: [
      "Rockerz_Batman1.png",
      "Rockerz_Batman2.png",
      "Rockerz_Batman3.png",
      "Rockerz_Batman4.png",
      "Rockerz_Batman5.png",
    ],
  },
  //3
  {
    id: "3",
    type: "headphone",
    hostId: "123",
    name: "Rockerz 450 DC",
    price: "999",
    caption:
      "Wireless Bluetooth Headphone with 40mm Dynamic Drivers, Upto 15 Hours Playback, Adaptive Headband",
    description:
      "Wonder Woman's superpower? Super strength. Rockerz 450 boAt I DC edition's superpower? Super sound delivered via its 40mm dynamic drivers. If low battery is your enemy, the 15HRS non-stop playback is here to rightfully combat that. Feel the power rising up in your veins-just like the Warrior Princess as you indulge in your playlist with its 40mm dynamic drivers.",
    details: [
      {
        title: "Power Up For 15HRS",
        description:
          "Power up your hustle as you become the hero you envision to be with 15HRS playback at your service. Rockerz 450 won't stop until you do.",
      },
      {
        title: "HD Immersive Audio",
        description:
          "The 40mm drivers will make you charge up as you immerse yourself in your playlist. The boAt Signature Sound will shine through, no matter what.",
      },
      {
        title: "Adaptive Ear Cups and Headband",
        description:
          "Based on a smooth comfortable fit design coated with a sleek matte finish that looks sharp and stays sharp, the boAt | DC edition is here for the win.",
      },
    ],
    imageUrls: [
      "Rockerz_DC1.png",
      "Rockerz_DC2.png",
      "Rockerz_DC3.png",
      "Rockerz_DC4.png",
      "Rockerz_DC5.png",
    ],
  },
  //4
  {
    id: "4",
    type: "speaker",
    hostId: "123",
    name: "Partybox 110",
    price: "26999",
    caption:
      "Whether you're at home or outdoors, the JBL PartyBox 110 makes your music amazing with two levels of deep, adjustable bass and powerful JBL Original Pro Sound.",
    description:
      "Whether you're at home or outdoors, the JBL PartyBox 110 makes your music amazing with two levels of deep, adjustable bass and powerful JBL Original Pro Sound.",
    details: [
      {
        title: "Dynamic light show that syncs to the beat",
        description:
          "Every kind of music is better with a dynamic light show! Colors synched to the beat make you want to move your feet, while customizable strobes and patterns dazzle your eyes. It's a unique, immersive audiovisual experience that transforms any party into a work of art.",
      },
      {
        title: "Up to 12 hours of playtime",
        description:
          "Power the party all day or all night. With up to 12 hours of playtime and a built-in rechargeable battery, the beat will go on (and on)!",
      },
      {
        title: "IPX4 splashproof",
        description:
          "Whether your guests are dancing on the beach or sipping drinks by the pool, the JBL PartyBox 110 is IPX4 splashproof so you never have to worry about the party getting too wet and wild.",
      },
    ],
    imageUrls: [
      "JBL_Partybox1.png",
      "JBL_Partybox2.png",
      "JBL_Partybox3.png",
      "JBL_Partybox4.png",
      "JBL_Partybox5.png",
    ],
  },

  // verified till

  {
    id: "5",
    type: "speaker",
    hostId: "132",
    name: "SRS-XB100",
    price: "3,999",
    caption: "Compact body, powerful and clear sound",
    description:
      "Get ready for powerful and clear sound from a compact body. The XB100 speaker is everything you need for life on the move. It's durable, has plenty of battery and is perfect for listening at home or when out with friends. It's the perfect all-rounder for however you like to listen.",
    details: [
      {
        title: "Small speaker that packs a powerful, clear sound",
        description:
          "Music is the soundtrack to our lives, and we want you to be able to enjoy your tunes wherever you are. So we've packed powerful, clear sound into a portable body. We've even added a Sound Diffusion Processor, so you can enjoy the surround sound feeling.",
      },
      {
        title: "Sustainability in mind",
        description:
          "The XB100 body and strap are partially made from recycled plastic materials to help reduce the environmental impact. We're also proud to say that our packaging uses no plastic material. You can feel as good buying this speaker as you will listening to it.",
      },
      {
        title: "Get more from your speaker",
        description:
          "We want your speaker to fit into your lifestyle. As well as listening to music, you can use it to take and make calls. Plus, you can pair a second speaker via Bluetooth®, for stereo sound.",
      },
    ],
    imageUrls: ["Srs-Xb1.jpg", "Srs-Xb2.jpg", "Srs-Xb3.jpg", "Srs-Xb4.jpg"],
  },
  {
    id: "6",
    type: "laptop",
    hostId: "123",
    name: "ROG Strix G16",
    price: "1,99,990",
    caption: "RAISE YOUR GAME. CARRY YOUR SQUAD.",
    description:
      "Draw more frames and win more games with the brand new Strix G16 and Windows 11 Home. Powered by up to a 13th Gen Intel® Core™ i9-13980HX Processor and up to an NVIDIA GeForce RTX 4070 Laptop GPU boasting a max TGP of 140W with Dynamic Boost, be ready to dominate the competition in all of the latest games. Backed up with a dedicated MUX Switch and NVIDIA Advanced Optimus support, the Strix G16 unlocks the true potential of its hardware. With PCIe Gen4x4 SSD storage and up to 16GB of 4800MHz DDR5 RAM, large game libraries and intense multitasking sessions are a breeze for this gaming machine.",
    details: [
      {
        title: "Processor",
        description:
          "Intel Core i9 Processor 14900HX 2.2 GHz (36MB Cache, up to 5.8 GHz, 24 cores, 32 Threads)",
      },
      {
        title: "Memory",
        description:
          "16GB DDR5 SO-DIMM with | Storage: 1TB PCIe 4.0 NVMe M.2 SSD",
      },
      {
        title: "Graphics",
        description:
          "NVIDIA Dedicated GeForce RTX 4070 Laptop GPU2.5 8GB GDD VRAM",
      },
      {
        title: "Display",
        description:
          "16-inch QHD+ 16:10 (2560 x 1600, WQXGA), 3ms, 240Hz, IPS-level, 500nits, Anti-glare display, Pantone Validated",
      },
      {
        title: "Battery",
        description:
          "Play over 100 high-quality PC games, plus new and upcoming blockbusters on day one like Halo Infinite, Forza Horizon 5, and Age of Empires IV with your new FA507RM-HF030WS and one month of Game Pass-including EA Play.",
      },
    ],
    imageUrls: [
      "ROG_Strix_G161.png",
      "ROG_Strix_G162.jpg",
      "ROG_Strix_G163.jpg",
      "ROG_Strix_G164.jpg",
      "ROG_Strix_G165.jpg",
    ],
  },
  {
    id: "7",
    type: "laptop",
    hostId: "123",
    name: "TUF GAME A15",
    price: "1,24,990",
    caption: "Mechanized endurance. Battlefield brilliance.",
    description:
      "Jump right into the action with the TUF Gaming A15. Running Windows 11 out of the box with up to an AMD Ryzen™ 7 7435HS and up to 16GB of blisteringly fast 5600MHz DDR5 RAM, your streaming and multitasking are handled with ease. Leverage the full gaming performance of up to an NVIDIA® GeForce RTX™ 4070 Laptop GPU with a dedicated MUX Switch. When your game library gets full, an empty M.2 NVMe SSD slot makes upgrading storage capacity a breeze.",
    details: [
      {
        title: "Processor",
        description:
          "AMD Ryzen 7 7435HS Mobile Processor 3.1GHz (20MB Cache, up to 4.5 GHz, 8 cores, 16 Threads) delivers fast and responsive performance for demanding tasks such as gaming, content creation, and multitasking.",
      },
      {
        title: "Memory",
        description:
          "512GB PCIe 4.0 NVMe M.2 SSD | Memory : 16GB DDR5-5600 MHz Support Up to 32 GB Expandable 2x DDR5 SO-DIMM slots",
      },
      {
        title: "Graphics",
        description:
          "4GB GDDR6, NVIDIA GeForce RTX 3050 Laptop GPU, Up to 1675MHz at 60W (75W with Dynamic Boost)",
      },
      {
        title: "Display",
        description:
          "15.6-inch FHD (1920 x 1080) 16:9, 144Hz, 250 nits Brightness, Anti-Glare Display, Display output : 1x HDMI 2.1 TMDS, Keyboard : Backlit Chiclet Keyboard 1-Zone RGB",
      },
      {
        title: "Battery",
        description:
          "48WHrs, 3S1P, 3-cell Li-ion, Fast Charging : Recharge from 0-50% in 30 minutes",
      },
    ],
    imageUrls: [
      "TUF_GAMING_A151.png",
      "TUF_GAMING_A152.jpg",
      "TUF_GAMING_A153.jpg",
      "TUF_GAMING_A154.jpg",
      "TUF_GAMING_A155.jpg",
    ],
  },
];

createServer({
  models: {
    products: Model,
    users: Model,
  },

  seeds(server) {
    server.create("product", products[0]);
    server.create("product", products[6]);
    server.create("product", products[3]);
    server.create("product", products[2]);
    server.create("product", products[4]);
    server.create("product", products[5]);
    server.create("product", products[1]);

    server.create("user", {
      id: "123",
      email: "praveen@p.com",
      password: "123",
      name: "praveen",
    });
  },

  routes() {
    this.namespace = "api";
    this.logging = false;
    // 1s delay to test the Deffering Data
    // this.timing = 500;

    this.get("/products", (schema, request) => {
      // return new Response(400, {}, { error: "Error fetching data" });
      return schema.products.all();
    });

    this.get("/products/:id", (schema, request) => {
      const id = request.params.id;
      return schema.products.find(id);
    });

    this.get("/host/products", (schema) => {
      return schema.products.where({ hostId: "123" });
    });

    this.get("/host/products/:id", (schema, request) => {
      const id = request.params.id;
      return schema.products.findBy({ id, hostId: "123" });
    });

    this.post("/login", (schema, request) => {
      const { email, password } = JSON.parse(request.requestBody);

      const foundUser = schema.users.findBy({ email, password });
      if (!foundUser) {
        return new Response(
          401,
          {},
          { message: "No User with those credentials found!" }
        );
      }

      foundUser.password = undefined;
      return { user: foundUser, token: "Enjoy your time." };
    });
  },
});
