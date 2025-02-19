const products = [
  // Netflix
  {
    id: 1,
    name: "Netflix 2 User - 1 Day",
    price: 2000,
    originalPrice: 4000,
    category: "Netflix",
    image: "https://static.vecteezy.com/ti/vecteur-libre/p3/14018571-logo-netflix-sur-fond-transparent-gratuit-vectoriel.jpg"
  },
  {
    id: 2,
    name: "Netflix 2 User - 2 Days",
    price: 3500,
    originalPrice: 7000,
    category: "Netflix",
    image: "https://static.vecteezy.com/ti/vecteur-libre/p3/14018571-logo-netflix-sur-fond-transparent-gratuit-vectoriel.jpg"
  },
  {
    id: 3,
    name: "Netflix 2 User - 1 Week",
    price: 8000,
    originalPrice: 16000,
    category: "Netflix",
    image: "https://static.vecteezy.com/ti/vecteur-libre/p3/14018571-logo-netflix-sur-fond-transparent-gratuit-vectoriel.jpg"
  },
  {
    id: 4,
    name: "Netflix 2 User - 1 Month",
    price: 15000,
    originalPrice: 30000,
    category: "Netflix",
    image: "https://static.vecteezy.com/ti/vecteur-libre/p3/14018571-logo-netflix-sur-fond-transparent-gratuit-vectoriel.jpg"
  },
  {
    id: 5,
    name: "Netflix 1 User - 1 Day",
    price: 2500,
    originalPrice: 5000,
    category: "Netflix",
    image: "https://static.vecteezy.com/ti/vecteur-libre/p3/14018571-logo-netflix-sur-fond-transparent-gratuit-vectoriel.jpg"
  },
  {
    id: 6,
    name: "Netflix 1 User - 2 Days",
    price: 5000,
    originalPrice: 10000,
    category: "Netflix",
    image: "https://static.vecteezy.com/ti/vecteur-libre/p3/14018571-logo-netflix-sur-fond-transparent-gratuit-vectoriel.jpg"
  },
  {
    id: 7,
    name: "Netflix 1 User - 1 Week",
    price: 10000,
    originalPrice: 20000,
    category: "Netflix",
    image: "https://static.vecteezy.com/ti/vecteur-libre/p3/14018571-logo-netflix-sur-fond-transparent-gratuit-vectoriel.jpg"
  },
  {
    id: 8,
    name: "Netflix 1 User - 1 Month",
    price: 20000,
    originalPrice: 40000,
    category: "Netflix",
    image: "https://static.vecteezy.com/ti/vecteur-libre/p3/14018571-logo-netflix-sur-fond-transparent-gratuit-vectoriel.jpg"
  },

  // Lok Lok
  {
    id: 9,
    name: "Lok Lok Sharing - 1 Month",
    price: 5000,
    originalPrice: 10000,
    category: "LokLok",
    image: "https://play-lh.googleusercontent.com/4t0i-acu0fXRblwi07KSgwrO36lYEwNNupGdc3svuX5suXeesRBQ1pNKxaOADTaOdWOW"
  },
  {
    id: 10,
    name: "Lok Lok Sharing - 1 Year",
    price: 12000,
    originalPrice: 24000,
    category: "LokLok",
    image: "https://play-lh.googleusercontent.com/4t0i-acu0fXRblwi07KSgwrO36lYEwNNupGdc3svuX5suXeesRBQ1pNKxaOADTaOdWOW"
  },
  {
    id: 11,
    name: "Lok Lok Private - 2 Weeks",
    price: 14000,
    originalPrice: 28000,
    category: "LokLok",
    image: "https://play-lh.googleusercontent.com/4t0i-acu0fXRblwi07KSgwrO36lYEwNNupGdc3svuX5suXeesRBQ1pNKxaOADTaOdWOW"
  },

  // Capcut
   
   {
    id: 12,
    name: "Capcut Sharing 5 User - 1 Month",
    price: 6000,
    originalPrice: 12000,
    category: "Capcut",
    image: "https://th.bing.com/th/id/OIP.7UVP9u44oRNHKQGrH8UpsAAAAA?w=300&h=300&rs=1&pid=ImgDetMain"
  },
  {
    id: 13,
    name: "Capcut Sharing 5 User - 1 Year",
    price: 13000,
    originalPrice: 26000,
    category: "Capcut",
    image: "https://th.bing.com/th/id/OIP.7UVP9u44oRNHKQGrH8UpsAAAAA?w=300&h=300&rs=1&pid=ImgDetMain"
  },
  {
    id: 14,
    name: "Capcut Private - 1 Month",
    price: 10000,
    originalPrice: 20000,
    category: "Capcut",
    image: "https://th.bing.com/th/id/OIP.7UVP9u44oRNHKQGrH8UpsAAAAA?w=300&h=300&rs=1&pid=ImgDetMain"
  },
  {
    id: 15,
    name: "Capcut Private - 1 Year",
    price: 16000,
    originalPrice: 32000,
    category: "Capcut",
    image: "https://th.bing.com/th/id/OIP.7UVP9u44oRNHKQGrH8UpsAAAAA?w=300&h=300&rs=1&pid=ImgDetMain"
  },

  // Apple Music
  {
    id: 16,
    name: "Apple Music - 1 Month (iMess)",
    price: 6000,
    originalPrice: 12000,
    category: "AppleMusic",
    image: "https://cdn.jim-nielsen.com/ios/1024/apple-music-2020-09-25.png"
  },
  {
    id: 17,
    name: "Apple Music - 3 Months (iMess)",
    price: 8000,
    originalPrice: 16000,
    category: "AppleMusic",
    image: "https://cdn.jim-nielsen.com/ios/1024/apple-music-2020-09-25.png"
  },

  // Viu
  {
    id: 18,
    name: "Viu Private Unlimited - 1 Month",
    price: 1500,
    originalPrice: 3000,
    category: "Viu",
    image: "https://th.bing.com/th/id/OIP.UfDBVhPb3XbjDrFYOcYydQHaGm?w=376&h=335&rs=1&pid=ImgDetMain"
  },
  {
    id: 19,
    name: "Viu Private Unlimited - 3 Months",
    price: 3000,
    originalPrice: 6000,
    category: "Viu",
    image: "https://th.bing.com/th/id/OIP.UfDBVhPb3XbjDrFYOcYydQHaGm?w=376&h=335&rs=1&pid=ImgDetMain"
  },
  {
    id: 20,
    name: "Viu Private Unlimited - 10 Months",
    price: 4500,
    originalPrice: 9000,
    category: "Viu",
    image: "https://th.bing.com/th/id/OIP.UfDBVhPb3XbjDrFYOcYydQHaGm?w=376&h=335&rs=1&pid=ImgDetMain"
  },
  {
    id: 21,
    name: "Viu Private Unlimited - 1 Year",
    price: 5000,
    originalPrice: 10000,
    category: "Viu",
    image: "https://th.bing.com/th/id/OIP.UfDBVhPb3XbjDrFYOcYydQHaGm?w=376&h=335&rs=1&pid=ImgDetMain"
  },

  // Vidio
  {
    id: 22,
    name: "Vidio Sharing - 1 Month (2 Users, All Devices)",
    price: 14000,
    originalPrice: 28000,
    category: "Vidio",
    image: "https://cdn.freelogovectors.net/wp-content/uploads/2021/12/vidio-logo-freelogovectors.net_.png"
  },
  {
    id: 23,
    name: "Vidio Private - 1 Month (All Devices)",
    price: 22000,
    originalPrice: 44000,
    category: "Vidio",
    image: "https://cdn.freelogovectors.net/wp-content/uploads/2021/12/vidio-logo-freelogovectors.net_.png"
  },

  // iQiyi
  
    {
      "id": 24,
      "name": "iQiyi Sharing - 1 Month",
      "price": 5000,
      "originalPrice": 10000,
      "category": "Iqiyi",
      "image": "https://img.utdstc.com/icon/ed6/8b4/ed68b4fb0e85c4b7c454944d7e1a9fee9003c17829ca7a439664fb4dd8dabd24:200"
    },
    {
      "id": 25,
      "name": "iQiyi Sharing - 3 Months",
      "price": 9000,
      "originalPrice": 18000,
      "category": "Iqiyi",
      "image": "https://img.utdstc.com/icon/ed6/8b4/ed68b4fb0e85c4b7c454944d7e1a9fee9003c17829ca7a439664fb4dd8dabd24:200"
    },
    {
      "id": 26,
      "name": "iQiyi Sharing - 1 Year",
      "price": 12000,
      "originalPrice": 24000,
      "category": "Iqiyi",
      "image": "https://img.utdstc.com/icon/ed6/8b4/ed68b4fb0e85c4b7c454944d7e1a9fee9003c17829ca7a439664fb4dd8dabd24:200"
    },
    {
      "id": 27,
      "name": "iQiyi Private - 2 Weeks",
      "price": 14000,
      "originalPrice": 28000,
      "category": "Iqiyi",
      "image": "https://img.utdstc.com/icon/ed6/8b4/ed68b4fb0e85c4b7c454944d7e1a9fee9003c17829ca7a439664fb4dd8dabd24:200"
    },
  
  
  // YouTube
  
    {
      "id": 28,
      "name": "YouTube Family Plan - 1 Month",
      "price": 4000,
      "originalPrice": 8000,
      "category": "Youtube",
      "image": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/09/youtube-official-website-1663335361.jpg"
    },
    {
      "id": 29,
      "name": "YouTube Individual Plan - 1 Month",
      "price": 8000,
      "originalPrice": 16000,
      "category": "Youtube",
      "image": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/09/youtube-official-website-1663335361.jpg"
    },
  
    
      {
        "id": 30,
        "name": "Remini Pro Sharing - 1 Month",
        "price": 5000,
        "originalPrice": 10000,
        "category": "Remini",
        "image": "https://play-lh.googleusercontent.com/xDh13mMPU9Z0cuPybhWla8k8LsjhgMmDi7XSKKFjyazb0Rohn3EDXNq9blytK-dVfDQw"
      },
      {
        "id": 31,
        "name": "Remini Pro Sharing - 3 Months",
        "price": 9000,
        "originalPrice": 18000,
        "category": "Remini",
        "image": "https://play-lh.googleusercontent.com/xDh13mMPU9Z0cuPybhWla8k8LsjhgMmDi7XSKKFjyazb0Rohn3EDXNq9blytK-dVfDQw"
      },
      {
        "id": 32,
        "name": "Remini Pro Private - 1 Week",
        "price": 6000,
        "originalPrice": 12000,
        "category": "Remini",
        "image": "https://play-lh.googleusercontent.com/xDh13mMPU9Z0cuPybhWla8k8LsjhgMmDi7XSKKFjyazb0Rohn3EDXNq9blytK-dVfDQw"
      },
      {
        "id": 33,
        "name": "Remini Pro Private - 1 Month",
        "price": 10000,
        "originalPrice": 20000,
        "category": "Remini",
        "image": "https://play-lh.googleusercontent.com/xDh13mMPU9Z0cuPybhWla8k8LsjhgMmDi7XSKKFjyazb0Rohn3EDXNq9blytK-dVfDQw"
      },

  // Alight Motion
  {
    id: 34,
    name: "Alight Motion Sharing - 1 Year",
    price: 3000,
    originalPrice: 6000,
    category: "AlightMotion",
    image: "https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/97/12/ee/9712eec9-2cd1-e244-7de1-26c5e351bec0/AppIcon-0-0-1x_U007emarketing-0-0-0-4-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1024x1024bb.png"},
    {
    id: 35,
    name: "Alight Motion Private - 1 Year",
    price: 5000,
    originalPrice: 10000,
    category: "AlightMotion",
    image: "https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/97/12/ee/9712eec9-2cd1-e244-7de1-26c5e351bec0/AppIcon-0-0-1x_U007emarketing-0-0-0-4-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1024x1024bb.png"},

  // Youku
  {
    id: 36,
    name: "Youku Sharing - 1 Month",
    price: 5000,
    originalPrice: 10000,
    category: "Youku",
    image: "https://th.bing.com/th/id/R.10174785d81f6213712a3a52bc51f575?rik=C1K7K2AxIL3EMg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2flogo-youku-png-youku-video-app-icon-1024.png&ehk=epX1SsZ9aY35LBxjGy0HcknMObr1yk5bSH1wAEUQhLM%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    id: 37,
    name: "Youku Sharing - 1 Year",
    price: 10000,
    originalPrice: 20000,
    category: "Youku",
    image: "https://th.bing.com/th/id/R.10174785d81f6213712a3a52bc51f575?rik=C1K7K2AxIL3EMg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2flogo-youku-png-youku-video-app-icon-1024.png&ehk=epX1SsZ9aY35LBxjGy0HcknMObr1yk5bSH1wAEUQhLM%3d&risl=&pid=ImgRaw&r=0"
  },

  // WeTV
  {
    id: 38,
    name: "WeTV Sharing - 1 Week",
    price: 3000,
    originalPrice: 6000,
    category: "Wetv",
    image: "https://www.newshubasia.com/wp-content/uploads/2020/11/WeTV.jpg"
  },
  {
    id: 39,
    name: "WeTV Sharing - 1 Month",
    price: 5000,
    originalPrice: 10000,
    category: "Wetv",
    image: "https://www.newshubasia.com/wp-content/uploads/2020/11/WeTV.jpg"
  },

  // Disney
  {
    id: 40,
    name: "Disney Sharing - 1 Day (10 Users)",
    price: 4500,
    originalPrice: 9000,
    category: "Disney",
    image: "https://thinglabs.io/wp-content/uploads/2e3d33fc0eefc265131cc02158c1c69a_4096x2303_0d094a0f1-scaled.jpg"
  },
  {
    id: 41,
    name: "Disney Sharing - 3 Days (10 Users)",
    price: 7000,
    originalPrice: 14000,
    category: "Disney",
    image: "https://thinglabs.io/wp-content/uploads/2e3d33fc0eefc265131cc02158c1c69a_4096x2303_0d094a0f1-scaled.jpg"
  },
  {
    id: 42,
    name: "Disney Sharing - 7 Days (10 Users)",
    price: 9000,
    originalPrice: 18000,
    category: "Disney",
    image: "https://thinglabs.io/wp-content/uploads/2e3d33fc0eefc265131cc02158c1c69a_4096x2303_0d094a0f1-scaled.jpg"
  },
  {
    id: 43,
    name: "Disney Sharing - 1 Month (10 Users)",
    price: 19000,
    originalPrice: 38000,
    category: "Disney",
    image: "https://thinglabs.io/wp-content/uploads/2e3d33fc0eefc265131cc02158c1c69a_4096x2303_0d094a0f1-scaled.jpg"
  },

  // Canva
  {
    id: 44,
    name: "Canva Sharing - 1 Month",
    price: 3000,
    originalPrice: 6000,
    category: "Canva",
    image: "https://th.bing.com/th/id/OIP.ARfZd0cxjhNU-yBAmoFH4QHaEK?rs=1&pid=ImgDetMain"
  }
];