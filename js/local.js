var listProductInCart = []
var listFavorite = [
]
var products = [
    {
        id: 1,
        name: 'Gray T-shirt',
        img: '/img/men/26-1.png',
        price: 20,
        category: 'mobile',
        rating: 4,
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quod perspiciatis incidunt modi cum vitae temporibus consectetur quibusdam saepe explicabo esse aliquam quo atque optio, fugit praesentium inventore quas tempora.'
    },
    {
        id: 2,
        name: 'Cricle White T-shirt',
        img: '/img/men/33-1.png',
        price: 24,
        category: 'mobile',
        rating: 4,
        detail: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 3,
        name: 'Checkered Shirt',
        img: '/img/men/37-1-1.png',
        price: 30,
        category: 'men',
        rating: 5,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 4,
        name: 'Any Time T-Shirt',
        img: '/img/men/38-1-1.png',
        price: 27,
        category: 'men',
        rating: 3,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 5,
        name: 'Blue Polo Shirt',
        img: '/img/men/39-1-1.png',
        price: 30,
        category: 'men',
        rating: 5,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 6,
        name: 'Virtual Reality',
        img: '/img/mobile/3D-VR-Glass-Virtual-Reality-1.jpg',
        price: 1032,
        category: 'mobile',
        rating: 5,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 7,
        name: 'Hawei Phone',
        img: '/img/mobile/21-1.png',
        price: 816,
        category: 'mobile',
        rating: 4,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 8,
        name: 'Xiaomi Note 10',
        img: '/img/mobile/22-1.png',
        price: 979,
        category: 'mobile',
        rating: 4,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 9,
        name: 'Hawei Ren Phone',
        img: '/img/mobile/24-1.png',
        price: 999,
        category: 'mobile',
        rating: 3,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 10,
        name: 'Apple Iphone 7',
        img: '/img/mobile/iphone7-1.png',
        price: 979,
        category: 'mobile',
        rating: 5,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 11,
        name: 'Apple Iphone 7',
        img: '/img/mobile/iphone7-1.png',
        price: 979,
        category: 'mobile',
        rating: 5,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 12,
        name: 'Zhndu Phone',
        img: '/img/mobile/Zhndu-Mobile-1-1.png',
        price: 1279,
        category: 'mobile',
        rating: 5,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 13,
        name: 'Apple Watch',
        img: '/img/watches/apple_watch.png',
        price: 670,
        category: 'watches',
        rating: 5,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 14,
        name: 'Bracelet Watch',
        img: '/img/watches/bracelet_watch.png',
        price: 450,
        category: 'watches',
        rating: 4,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 15,
        name: 'Diamond Watch',
        img: '/img/watches/Diamond_Watches.jpeg',
        price: 2056,
        category: 'watches',
        rating: 5,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 16,
        name: 'Gold watch',
        img: '/img/watches/gold_watch.jpeg',
        price: 2057,
        category: 'watches',
        rating: 4,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },

    {
        id: 17,
        name: 'Goldenhour watch',
        img: '/img/watches/goldenhour_watch.png',
        price: 2000,
        category: 'watches',
        rating: 4,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },

    {
        id: 18,
        name: 'Luxury Watch',
        img: '/img/watches/Luxury_Watche.jpeg',
        price: 1056,
        category: 'watches',
        rating: 2,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },

    {
        id: 19,
        name: 'Mens-Watches',
        img: '/img/watches/Mens-Watches.jpeg',
        price: 20561,
        category: 'watches',
        rating: 2,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },

    {
        id: 20,
        name: 'Cotton Brand',
        img: '/img/women/30-1.png',
        price: 45612,
        category: 'women',
        rating: 3,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },

    {
        id: 21,
        name: 'SWE Teemin',
        img: '/img/women/31-1.png',
        price: 205613,
        category: 'women',
        rating: 3,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 22,
        name: 'T-Shirt Autora',
        img: '/img/women/34-1-1.png',
        price: 22563,
        category: 'women',
        rating: 2,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 23,
        name: 'Odin Hot',
        img: '/img/women/35-1-1.png',
        price: 2023,
        category: 'women',
        rating: 4,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 24,
        name: 'OMG Radisit',
        img: '/img/women/36-1-1.png',
        price: 3233,
        category: 'women',
        rating: 5,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },


    {
        id: 25,
        name: 'Filter Camera',
        img: '/img/camera/outdoor_camera.png',
        price: 20563,
        category: 'camera',
        rating: 3,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 26,
        name: '3D-VR-Glass-1',
        img: '/img/camera/3D-VR-Glass-1.jpg',
        price: 20563,
        category: 'camera',
        rating: 4,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 27,
        name: 'Led Camera',
        img: '/img/camera/led_camera.jpeg',
        price: 24653,
        category: 'camera',
        rating: 3,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 28,
        name: 'Outdoor Camera',
        img: '/img/camera/outdoor_camera.png',
        price: 20583,
        category: 'drone',
        rating: 4,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },

    {
        id: 29,
        name: 'Arasdm-APP-RC',
        img: '/img/drone/Arasdm-APP-RC-Drones-1.jpg',
        price: 2356,
        category: 'drone',
        rating: 4,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 30,
        name: 'Camera Drone',
        img: '/img/drone/camera-drone.png',
        price: 2793,
        category: 'drone',
        rating: 5,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 31,
        name: 'CC Camera',
        img: '/img/drone/cc_camera.png',
        price: 8523,
        category: 'drone',
        rating: 5,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 32,
        name: 'Foldable Drones 1',
        img: '/img/drone/WIFI-FPV-With-720P-Camera-High-Hold-Foldable-Drones-1.jpg',
        price: 7523,
        category: 'drone',
        rating: 4,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },

    {
        id: 33,
        name: 'Light RGB Headphones',
        img: '/img/headphone/49-300x300-1-1.jpg',
        price: 17523,
        category: 'headphone',
        rating: 3,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 34,
        name: 'Auto Turn Headphones',
        img: '/img/headphone/51-1.png ',
        price: 75231,
        category: 'headphone',
        rating: 2,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 35,
        name: 'DEEP BASS V2 Headphones',
        img: '/img/headphone/DEEP-BASS-Headphones-Earphones-3-5mm-AUX-Foldable-Portable-Adjustable-Gaming-Headset-For-Phones-MP3-MP4-2-1.jpg ',
        price: 752333,
        category: 'headphone',
        rating: 1,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 36,
        name: 'DEEP BASS Headphones',
        img: '/img/headphone/DEEP-BASS-Headphones-Earphones-3-5mm-AUX-Foldable-Portable-Adjustable-Gaming-Headset-For-Phones-MP3-MP4-4.jpg ',
        price: 56322,
        category: 'headphone',
        rating: 5,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 37,
        name: 'Headphones-Wireless',
        img: '/img/headphone/Headphones-Wireless-Stereo-Headsets-earbuds-with-Mic-1.jpg',
        price: 5623,
        category: 'headphone',
        rating: 5,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 38,
        name: 'HTB1 Headphones',
        img: '/img/headphone/HTB1olbtmlDH8KJj-1.jpg ',
        price: 7323,
        category: 'headphone',
        rating: 1,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },

    {
        id: 39,
        name: '7th Generation',
        img: '/img/laptop/7th_generation_laptop.png',
        price: 4531,
        category: 'laptop',
        rating: 2,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 40,
        name: 'Blutooth Gamepad',
        img: '/img/laptop/blutooth_gamepad.png ',
        price: 45213,
        category: 'laptop',
        rating: 5,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },

    {
        id: 41,
        name: 'Corei7 Laptop',
        img: '/img/laptop/corei7_laptop.png ',
        price: 9623,
        category: 'laptop',
        rating: 3,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },

    {
        id: 42,
        name: 'Inter Laptop',
        img: '/img/laptop/inter_laptop.jpeg ',
        price: 15131,
        category: 'laptop',
        rating: 5,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },

    {
        id: 43,
        name: 'Minigame Hand',
        img: '/img/laptop/minigame_controller.png ',
        price: 12135,
        category: 'laptop',
        rating: 5,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },

    {
        id: 44,
        name: 'Voyo Vbook V3',
        img: '/img/laptop/voyo_vbook_v3_pro_laptop.jpeg ',
        price: 121312,
        category: 'laptop',
        rating: 5,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },

    {
        id: 45,
        name: 'Xpeed Laptop',
        img: '/img/laptop/xpeed_laptop.jpeg ',
        price: 95652,
        category: 'laptop',
        rating: 1,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },

    {
        id: 46,
        name: 'Xpeed V Laptop',
        img: '/img/laptop/xpeed_v2_laptop.jpeg ',
        price: 16231,
        category: 'laptop',
        rating: 5,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },

    {
        id: 47,
        name: 'Ammo T-Shirt',
        img: '/img/men/26-1.png',
        price: 13546,
        category: 'men',
        rating: 1,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 48,
        name: 'HNX T_Shirt',
        img: '/img/men/33-1.png',
        price: 165512,
        category: 'men',
        rating: 5,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 49,
        name: 'Ca-ro SoMi',
        img: '/img/men/37-1-1.png',
        price: 12349,
        category: 'men',
        rating: 5,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 50,
        name: 'Caradet Odin',
        img: '/img/men/38-1-1.png',
        price: 5623,
        category: 'men',
        rating: 4,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 51,
        name: 'Holiwood KKKa',
        img: '/img/men/39-1-1.png',
        price: 23465,
        category: 'men',
        rating: 4,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },

    {
        id: 52,
        name: 'ADLV Dela Vie',
        img: '/img/mobile/21-1.png',
        price: 56323,
        category: 'mobile',
        rating: 5,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 53,
        name: 'Odin Teddy',
        img: '/img/mobile/22-1.png',
        price: 4562,
        category: 'mobile',
        rating: 3,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 54,
        name: 'Rose Portland',
        img: '/img/mobile/24-1.png',
        price: 1213,
        category: 'mobile',
        rating: 5,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 55,
        name: '3D-VR-Glass-1',
        img: '/img/mobile/3D-VR-Glass-Virtual-Reality-1.jpg',
        price: 2561,
        category: 'mobile',
        rating: 4,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 56,
        name: 'Iphone7 plus',
        img: '/img/mobile/iphone7-1.png',
        price: 4561,
        category: 'mobile',
        rating: 3,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 57,
        name: 'LED-32-LG-32LJ500U',
        img: '/img/mobile/LED-32-LG-32LJ500U-1-1.jpg',
        price: 12354,
        category: 'mobile',
        rating: 1,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 58,
        name: 'Zhndu Phone',
        img: '/img/mobile/Zhndu-Mobile-1-1.png',
        price: 25893,
        category: 'mobile',
        rating: 5,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 59,
        name: 'Apple Watch 6',
        img: '/img/watches/apple_watch.png',
        price: 870,
        category: 'watches',
        rating: 5,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 60,
        name: 'Pink Bag 2022',
        img: '/img/women/32971-4-women-bag-image-thumb.png',
        price: 870,
        category: 'women',
        rating: 5,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 61,
        name: 'Purse Thumb Bag',
        img: '/img/women/35834-6-purse-transparent-thumb.png',
        price: 870,
        category: 'women',
        rating: 5,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 62,
        name: 'Christian New',
        img: '/img/women/37232-5-christian-louboutin-heels-image-thumb.png',
        price: 870,
        category: 'women',
        rating: 5,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },

]

var topThisWeek = [
    {
        id: 60,
        name: 'Pink Bag 2022',
        img: '/img/women/32971-4-women-bag-image-thumb.png',
        price: 870,
        category: 'women',
        rating: 5,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 61,
        name: 'Purse Thumb Bag',
        img: '/img/women/35834-6-purse-transparent-thumb.png',
        price: 870,
        category: 'women',
        rating: 5,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 62,
        name: 'Christian New',
        img: '/img/women/37232-5-christian-louboutin-heels-image-thumb.png',
        price: 870,
        category: 'women',
        rating: 5,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 54,
        name: 'Rose Portland',
        img: '/img/mobile/24-1.png',
        price: 1213,
        category: 'mobile',
        rating: 5,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 55,
        name: '3D-VR-Glass-1',
        img: '/img/mobile/3D-VR-Glass-Virtual-Reality-1.jpg',
        price: 2561,
        category: 'mobile',
        rating: 4,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 56,
        name: 'Iphone7 plus',
        img: '/img/mobile/iphone7-1.png',
        price: 4561,
        category: 'mobile',
        rating: 3,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 30,
        name: 'Camera Drone',
        img: '/img/drone/camera-drone.png',
        price: 2793,
        category: 'drone',
        rating: 5,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 31,
        name: 'CC Camera',
        img: '/img/drone/cc_camera.png',
        price: 8523,
        category: 'drone',
        rating: 5,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 32,
        name: 'Foldable Drones 1',
        img: '/img/drone/WIFI-FPV-With-720P-Camera-High-Hold-Foldable-Drones-1.jpg',
        price: 7523,
        category: 'drone',
        rating: 4,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 4,
        name: 'Any Time T-Shirt',
        img: '/img/men/38-1-1.png',
        price: 27,
        category: 'men',
        rating: 3,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 5,
        name: 'Blue Polo Shirt',
        img: '/img/men/39-1-1.png',
        price: 30,
        category: 'men',
        rating: 5,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
    {
        id: 6,
        name: 'Virtual Reality',
        img: '/img/mobile/3D-VR-Glass-Virtual-Reality-1.jpg',
        price: 1032,
        category: 'mobile',
        rating: 5,
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus et quam iure nihil, eius optio esse reprehenderit culpa molestiae accusantium modi fugit excepturi veniam soluta, facere natus ipsam ratione?'
    },
]

var user = [
    {
        loginName: 'buiquangtruong',
        password: 'buiquangtruong',
        role: 'Admin',
        name: 'Bùi Quang Trưởng',
        phoneNumber: '0868037932',
        address: 'Tân Bình - Hồ Chí Minh',
        email: 'kingbqt03@gmail.com',
       
    },
    {
        loginName: 'hieungoc',
        password: 'hieungocxinh',
        role: 'user',
        name: 'Trần Thị Hiếu Ngọc',
        phoneNumber: '0868037932',
        address: 'Tân Phú - Hồ Chí Minh',
        email: 'tranthihieungoc@gmail.com',
        
    },

]

localStorage.setItem('products', JSON.stringify(products))
localStorage.setItem('topThisWeek', JSON.stringify(topThisWeek))
localStorage.setItem('listFavorite', JSON.stringify(listFavorite))
localStorage.setItem('listProductInCart', JSON.stringify(listProductInCart))
localStorage.setItem('listUser', JSON.stringify(user))
localStorage.setItem('userName', JSON.stringify(''))
