export interface Product {
  category: string;
  image: string;
  rating: number;
  id: number;
  name: string;
  price: number;
  description: string;
  link: string;
}

export const products: Product[] = [
  {
    category: "Smartphone",
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQhEdI_whIJcq-I8pNeSEbcp8LJwBd47ijO8J5xW_ulqbT4MQ35lj3yd81Ze_HtxnbJODEEHbWoxD4kzr23M6V9BOxmxpZTuqXnYVMvVhP8seJiuhI2mWc-wWIgxQwZma1WY9XwRA&usqp=CAc',
    rating: 2,
    id: 1,
    name: 'Phone 11',
    price: 799,
    description: 'A large phone with one of the best screens',
    link: "tps://kaspi.kz/shop/p/apple-iphone-11-64gb-chernyi-1005115/"
  },
  {
    category: "Smartphone",
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h96/h3c/46392664227870/apple-iphone-13-128gb-belyj-102298420-1-Container.jpg',
    id: 2,
    name: 'Phone 13',
    rating: 2.3,
    price: 899,
    description: 'A great phone with one of the best cameras',
    link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/"
  },
  {
    category: "Smartphone",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTaySA46N3LGyKqvBPnziPQTZUOc_NkLvB_FXcB8hDC24_uZksKzPmzY9SCE2RoyEaWtHYA3oxXWEwTvGYbDJSJiEKXEHdY8GTsCkShXhE5nahmbQVEkg8GzFNTBDTF_n_-MwvDeto&usqp=CAc",
    id: 3,
    rating: 3.8,
    name: 'Phone XR',
    price: 699,
    description: 'The best phone for his price',
    link: "https://kaspi.kz/shop/p/apple-iphone-xr-128gb-slim-box-chernyi-100692542/"
  },

  {
    category:"Headphones",
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h12/h12/46719106023454/apple-airpods-3-belyj-102667744-1.jpg',
    id: 4,
    rating: 5.0,
    name: 'Airpods 3 series',
    price: 200,
    description: 'The Apple-designed dynamic driver uses a dedicated amplifier to deliver incredible sound detail. rewind tracks, answer calls and end them. The headphone case is easily charged with the MagSafe charger.',
    link: "https://kaspi.kz/shop/p/apple-airpods-3-belyi-102667744/",
  },
  {
    category:"Headphones",
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQq_5NUd11OgE0TpvEpQy7w84Zskvf3U_so9dxVP2STRlJv77guxNXh9Qz62RwqVKifAWbHL23cWNKHuzqjfVp90j3ZdC_gjZ02SRFQumwiHr50j1oT6CLsTzUhtxsirQq-AEdGkQ&usqp=CAc',
    id: 5,
    rating: 6.0,
    name: 'Airpods pro',
    price: 250,
    description: 'AirPods Pro are unique headphones with Active Noise Canceling technology that continuously optimizes sound based on the shape of your ear and the position of the earbuds. They perfectly muffle external noise, so you can completely immerse yourself in the music. These are brand new headphones.',
    link: "https://kaspi.kz/shop/p/apple-airpods-pro-belyi-4804718/",
  },
  {
    category: "Laptop",
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd6/h5b/33271772446750/apple-macbook-air-2020-13-3-mgn93-serebristyj-100798912-1-Container.jpg',
    id: 6,
    rating: 7.0,
    name: 'Macbook Air M1',
    price: 1399,
    description: 'Small chip. Big breakthrough The first chip designed specifically for the Mac. Amazingly, the Apple M1 system-on-a-chip packs 16 billion transistors and integrates a CPU, GPU, Neural Engine, I/O controllers, and a host of other components. The Apple M1 chip brings unique technologies to your Mac and delivers incredible performance combined with industry-leading power efficiency.',
    link: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93-serebristyi-100798912/",
  },
  {
    category: "Laptop",
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd9/h66/33943966842910/apple-macbook-pro-13-m1-2020-custom-16-gb-1-tb-ssd-z11b-a2338-seryj-101029564-1.jpg',
    id: 7,
    rating: 5.0,
    name: 'Macbook Pro M1',
    price: 1699,
    description: 'The M1 chip has a built-in Neural Engine, a component that Apple first started adding to its A-series chips a few years ago. The Neural Engine is designed to accelerate machine learning tasks across the Mac for things like video analysis, voice recognition, image processing, and more',
    link: "https://kaspi.kz/shop/p/apple-macbook-pro-13-m1-2020-custom-16-gb-1-tb-ssd-z11b-a2338-seryi-101029564/",
  },
  {
    category: "Smart-Watch",
    image: 'data:image/jpeg;base64,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',
    id: 8,
    rating: 3.5,
    name: 'Apple Watch 6 series ',
    price: 499,
    description: 'Retina Display: Now you dont have to raise your hand or touch the display to see the time or other information on the watch face. When you need to quickly check your time or fitness metrics - like when you are cycling, doing abs or sitting in a meeting for a long time - just glance at the display.',
    link: "https://kaspi.kz/shop/p/apple-watch-series-6-44-mm-seryi-100568498/",
  },
  {
    category: "Smart-Watch",
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hae/hcf/46553394249758/apple-watch-series-7-41-mm-cernyj-102582811-1.jpg',
    id: 9,
    rating: 8.0,
    name: 'Apple Watch 7 series',
    price: 599,
    description: 'Series 7 is the most durable Apple Watch ever. Fundamental design changes were necessary because the challenge was to create an always-on, larger Retina display. Innovative solutions have been developed specifically for this. Then, with their help, it was possible to make the front glass of the display of ultra-high strength with protection against cracks.',
    link: "https://kaspi.kz/shop/p/apple-watch-series-7-45-mm-chernyi-102582811/",
  },
  {
    category: "Smart-Watch",
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h69/63158968057886/apple-watch-series-8-41-mm-cernyj-106362847-1.jpg',
    id: 10,
    rating: 5.5,
    name: 'Apple Watch 8 series',
    price: 699,
    description: 'Apple Watch Series 8 has an innovative new sensor that tracks your temperature while you sleep, so you can see changes over time. Cycle Tracking uses this data to provide a retrospective estimate of when you likely ovulated, which can be helpful for family planning.',
    link: "https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/",
  },
  {
    category: "Smartphone",
    image: 'data:image/jpeg;base64,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',
    id: 11,
    rating: 1.0,
    name: 'Iphone 14 pro',
    price: 1299,
    description: 'The iPhone 14 Pro comes with a 6.1-inch ProMotion OLED display with 1-120Hz adaptive refresh rates, Dolby Vision, and a Face ID Dynamic Island that allows Apple to utilize an always-on display feature, which dims the lock screen similarly to an Apple Watch.',
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-128gb-serebristyi-106363274/'
  },
  {
    category: "Smartphone",
    image: 'data:image/jpeg;base64,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',
    id: 12,
    rating: 9.0,
    name: 'Iphone 14 pro max',
    price: 1499,
    description: 'The iPhone 14 Pro Max measures in at 6.33 inches tall (160.7mm), 3.05 inches wide (77.6mm), and 0.31 inches thick (7.85mm). Apples iPhone 14 Pro weighs 7.27 ounces or 206 grams, while the Pro Max weighs 8.47 ounces or 240 grams.',
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-chernyi-106363289/'
  },
  {
    category: "Laptop",
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd8/hac/52195421978654/custom-16-inch-macbook-pro-apple-m1-max-with-10c-cpu-32c-gpu-64gb-unified-memory-1tb-ssd-space-grey-105663881-1.jpg',
    id: 13,
    rating: 7.0,
    name: 'Macbook Pro 16',
    price: 6000,
    description: 'The Apple MacBook Pro "M1 Max" 10-Core CPU/32-Core GPU 16-Inch (2021) model features a 3.2 GHz Apple M1 Max processor with ten cores (eight performance cores and 2 efficiency cores), a 32-core GPU, a 16-core Neural Engine, 32 GB of onboard RAM, and a 1 TB onboard SSD',
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-z14x000me-seryi-105663881/'
  },
  {
    category: "Laptop",
    image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h40/h14/32693202059294/acer-aspire-7-gaming-a715-75g-nh-q87er-00f-cernyj-100503512-1-Container.jpg',
    id: 14,
    rating: 6.0,
    name: 'Acer Aspire 7 Gaming',
    price: 1299,
    description: 'Strict design hides great opportunities - powerful processors and video cards will allow you to enjoy modern games and easily cope with work tasks. The large 15.6 IPS screen has a narrow bezel, making the notebook more compact than traditional 15 models. With m.2 SSD storage and Wi-Fi 6 wireless connectivity for extra speed, the Aspire 7 delivers outstanding performance despite its compact size.',
    link: 'https://kaspi.kz/shop/p/acer-aspire-7-gaming-a715-75g-nh-q87er-00f-chernyi-100503512/'
  },
  {
    category: "Laptop",
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb7/h54/47697415864350/lenovo-ideapad-gaming-3-15ihu6-82k1005ark-cernyj-103140545-1.jpg',
    id: 15,
    rating: 5.5,
    name: 'Lenovo Ideapad Gaming 3',
    price: 1099,
    description: 'Play, record and stream games simultaneously with a powerful and efficient 35W processor optimized for maximum performance. Play most of the top games in Full HD resolution. Enjoy blazing data transfer speeds and ultimate network connectivity with Intel Wi-Fi 5. Play at the highest settings with the latest NVIDIA GeForce RTX 3050 mobile graphics cards.',
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-gaming-3-15ihu6-82k1005ark-chernyi-103140545/'
  },
  {
    category:"Headphones",
    image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0f/h18/33524667154462/apple-airpods-max-serebristyj-100949286-1-Container.jpg',
    id: 16,
    rating: 4.5,
    name: 'Airpods Max',
    price: 799,
    description: 'The Apple AirPods Max Bluetooth Headset can completely change the way you think about full-size headphones. This model is designed using first-class materials and advanced technologies. It is based on the Apple H1 processor and proprietary dynamic drivers, among the advantages of which one can note high performance parameters.',
    link: 'https://kaspi.kz/shop/p/apple-airpods-max-serebristyi-100949286/'
  },
  {
    category:"Headphones",
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfa/h88/47981646905374/bang-olufsen-1321010-beoplay-portal-sinij-103190576-1.jpg',
    id: 17,
    rating: 3.7,
    name: 'Bang & Olufsen 1321010 Beoplay',
    price: 699,
    description: 'Beoplay Portal are powerful, comfortable headphones that fit seamlessly into your life - whether youre gaming, listening to music or talking on the phone. Connect to your computer wirelessly to chat, interact and listen to music during work hours, answer calls from your phone, and then immerse yourself in the game with an uninterrupted Xbox connection when its time to relax.',
    link: 'https://kaspi.kz/shop/p/bang-olufsen-1321010-beoplay-portal-sinii-103190576/'
  },
  {
    category:"Headphones",
    image: 'data:image/jpeg;base64,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',
    id: 18,
    rating: 9.0,
    name: 'Samsung Galaxy Buds Live',
    price: 249,
    description: 'These headphones are designed to be in tune with your lifestyle. Their iconic shape and groundbreaking ergonomic design will blend in with your natural surroundings. Their speaker is also optimized for your quality user experience. This sound was made for your ears.',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-buds-live-chernyi-100491521/'
  },
  {
    category: "Smart-Watch",
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6c/h85/62047597592606/samsung-galaxy-watch-4-classic-sm-r890-cernyj-102170938-1-Container.jpg',
    id: 19,
    rating: 3.4,
    name: 'Samsung Galaxy Watch 4 Classic',
    price: 299,
    description: 'Samsung smart watches are not just a gadget, but your faithful companion on the way to achieving goals and self-improvement. Seek help from a personal trainer, doctor, and analyst right here and now with the Galaxy Watch4 smartwatch. Listen to your body. The Galaxy Watch4 smart watch is designed to make it easy for us to track and capture the data coming from your body.',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-watch-4-classic-sm-r890nzkacis-46-mm-chernyi-chernyi-102170938/'
  },
  {
    category: "Smart-Watch",
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTHlhA3hCA-3CFDzPWuK9X4H1aKVwumCncLytfzuCY2aLaIMs_HrT8whUDVApbLZiooFi6ETRS3PPuP5ayJ6qs2vRdKbRZ-OBiOP1E8VVPIxYQZe0aWSZk3_XPWUkpGIFGMCC0V4TgE-O0&usqp=CAc',
    id: 20,
    rating: 7.3,
    name: 'Huawei Watch GT3 Pro',
    price: 499,
    description: 'The watch displays diving data in real time, including the speed, depth, and duration of dives.',
    link:'https://kaspi.kz/shop/p/huawei-watch-gt3-pro-43-mm-belyi-105186210/'
  },
  


  




  





];


