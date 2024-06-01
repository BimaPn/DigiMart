export const products = [
    {
        name:`Sharp 55" Q8000 4K (2160p)`,
        slug: "sharp-55-q8000",
        images:['/images/categories/tv.png'],
        rating: 5,
        sold: 42,
        price: 415,
        category: "televisions",
        stock: 21,
        variants : [
          {
            label: "Color",
            options: ["Black","White","Gray"]
          },
        ],
        isFavorite: true
    },
    {
        name:'Asus Zenbook Flip S UX370',
        images:['/images/categories/laptop.png'],
        slug: "asus-zenbook-flip-ux370",
        rating: 4.5,
        sold: 64,
        price: 718,
        stock: 41,
        category: "computers",
        variants : [
          {
            label: "Color",
            options: ["Black","White","Gray"]
          },
          {
            label: "Storage",
            options: ["128GB","256GB","512GB"]
          },
        ]
    },
    {
        name:'iPhone 13 Pro Max',
        slug: "iphone-13-pro-max",
        images:['/images/categories/phone.png'],
        rating: 4.8,
        sold: 110,
        price: 1200,
        stock: 3,
        category: "phones-mobiles",
        variants : [
          {
            label: "Color",
            options: ["Black","White","Gray"]
          },
        ]
    },
    {
        name:'Playstation 4 Pro 1TB',
        slug: "ps-4-pro",
        images:['/images/categories/console.png'],
        rating: 4.2,
        sold: 400,
        price: 250,
        stock: 9,
        category: "consoles",
        variants : [
          {
            label: "Color",
            options: ["Black","White","Gray"]
          },
        ]
    },
    {
        name:'Playstation 4 Controller',
        slug: "ps-4-controller",
        images:['/images/categories/controller.png'],
        rating: 4.5,
        sold: 84,
        price: 60,
        stock: 29,
        category: "games-videos",
        variants : [
          {
            label: "Color",
            options: ["Black","White","Gray"]
          },
        ]
    },
    {
        name:'Beats Pro Wired Headphones',
        slug: "beats-pro-wired-headphones",
        images:['/images/categories/headset.png'],
        rating: 5,
        sold: 32,
        price: 225,
        category: "headsets",
        stock: 7,
        variants : [
          {
            label: "Color",
            options: ["Black","White","Gray"]
          },
        ]
    },
    {
        name:'Fitbit Versa 2 Black',
        slug: "fitbit-versa-2-black",
        images:['/images/categories/smartwatch.png'],
        rating: 5,
        sold: 119,
        price: 350,
        stock: 14,
        category: "smartwatches",
        variants : [
          {
            label: "Color",
            options: ["Black","White","Gray"]
          },
        ]
    },
    {
        name:'VR Oculus Headsets',
        slug: "vr-oculus-headsets",
        images:['/images/categories/vr.png'],
        rating: 5,
        sold: 650,
        price: 415,
        stock: 99,
        category: "vr",
        variants : [
          {
            label: "Color",
            options: ["Black","White","Gray"]
          },
        ]
    },
    {
        name:'Thermaltake KB-CMC Gaming Keyboard',
        slug: "thermatake-kb-cmc-gaming-keyboard",
        images:['/images/categories/keyboardMouse.png'],
        rating: 5,
        sold: 99,
        price: 115,
        stock: 12,
        category: "mise-keyboards",
        variants : [
          {
            label: "Color",
            options: ["Black","White","Gray"]
          },
        ]
    },
]

const cancelledProducts = [
  {
      name:'VR Oculus Headsets',
      slug: "vr-oculus-headsets",
      image:'/images/categories/vr.png',
      price: 415,
      quantity: 2,
      variants : [
        {
          label: "Color",
          value: "Black"
        },
      ],
      stock: 0
  },
  {
      name:'Beats Pro Wired Headphones',
      slug: "beats-pro-wired-headphones",
      image:'/images/categories/headset.png',
      price: 225,
      quantity: 1,
      variants : [
        {
          label: "Color",
          value: "White"
        },
      ],
      stock: 0
  },
]

const finishedProducts = [
  {
      name:'iPhone 13 Pro Max',
      slug: "iphone-13-pro-max",
      image: '/images/categories/phone.png',
      price: 1200,
      quantity: 1,
      variants : [
        {
          label: "Color",
          value: "Black"
        },
      ],
      stock: 0
  },
]
const onDeliveryProducts = [
  {
      name:'Asus Zenbook Flip S UX370',
      image: '/images/categories/laptop.png',
      slug: "asus-zenbook-flip-ux370",
      price: 718,
      stock: 0,
      quantity: 2,
      variants : [
        {
          label: "Color",
          value: "Black"
        },
        {
          label: "Storage",
          value: "128GB"
        },
      ]
  },
]

export const cancelledTransactions: Transaction[] = [
  {
    status: "cancelled",
    payment: "paypal",
    shipping: "Faster",
    totalPrice: 1055,
    products: cancelledProducts
  },
]
export const finishedTransactions: Transaction[] = [
  {
    status: "finished",
    payment: "paypal",
    shipping: "Fastest",
    totalPrice: 1200,
    products: finishedProducts 
  },
]
export const onDeliveryTransactions: Transaction[] = [
  {
    status: "onDelivery",
    payment: "paypal",
    shipping: "Fastest",
    totalPrice: 1436,
    products: onDeliveryProducts 
  },
]

export const newArrivalProductIndexes = [1,4,2,6,8,5]
export const trendingProductIndexes = [2,7,0,1,6,3]
export const mostPopularProductIndexes = [7,8,3,2,5,4]

