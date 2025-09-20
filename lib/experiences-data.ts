export interface Experience {
  id: string
  title: {
    ja: string
    en: string
  }
  description: {
    ja: string
    en: string
  }
  price: number
  duration: {
    ja: string
    en: string
  }
  capacity: number
  rating: number
  reviewCount: number
  image: string
  category: {
    ja: string
    en: string
  }
}

export const experiencesData: Experience[] = [
  {
    id: "1",
    title: {
      ja: "伝統漁業体験 - 定置網漁と船上料理",
      en: "Traditional Fishing Experience - Fixed Net Fishing & Onboard Cooking"
    },
    description: {
      ja: "篠島の漁師と一緒に定置網漁を体験し、獲れたての魚で船上料理を楽しみます。",
      en: "Experience fixed net fishing with Shinojima fishermen and enjoy cooking fresh catch onboard."
    },
    price: 8500,
    duration: {
      ja: "4時間",
      en: "4 hours"
    },
    capacity: 8,
    rating: 4.8,
    reviewCount: 127,
    image: "/traditional-fishing-boat-with-nets-in-japanese-coa.jpg",
    category: {
      ja: "漁業体験",
      en: "Fishing Experience"
    }
  },
  {
    id: "2",
    title: {
      ja: "神饌文化体験 - おんべ鯛の調理と奉納",
      en: "Sacred Food Culture Experience - Ombe-tai Preparation & Offering"
    },
    description: {
      ja: "伊勢神宮に奉納される神聖な「おんべ鯛」の調理法を学び、神饌文化の深さを体験します。",
      en: "Learn the preparation of sacred 'Ombe-tai' offered to Ise Grand Shrine and experience the depth of sacred food culture."
    },
    price: 12000,
    duration: {
      ja: "3時間",
      en: "3 hours"
    },
    capacity: 6,
    rating: 4.9,
    reviewCount: 89,
    image: "/sacred-japanese-sea-bream-preparation-ceremony-wit.jpg",
    category: {
      ja: "文化・歴史",
      en: "Culture & History"
    }
  },
  {
    id: "3",
    title: {
      ja: "島の恵み料理教室 - 海の幸を味わう",
      en: "Island Bounty Cooking Class - Taste the Sea's Gifts"
    },
    description: {
      ja: "篠島で獲れた新鮮な魚介類を使った伝統料理を地元の料理人から学びます。",
      en: "Learn traditional cooking using fresh seafood caught in Shinojima from local chefs."
    },
    price: 6800,
    duration: {
      ja: "2.5時間",
      en: "2.5 hours"
    },
    capacity: 12,
    rating: 4.7,
    reviewCount: 156,
    image: "/japanese-cooking-class-with-fresh-seafood-and-trad.jpg",
    category: {
      ja: "グルメ・食育",
      en: "Gourmet & Food Education"
    }
  },
  {
    id: "4",
    title: {
      ja: "早朝漁業体験 - 朝市と魚の競り",
      en: "Early Morning Fishing Experience - Morning Market & Fish Auction"
    },
    description: {
      ja: "早朝の漁港で魚の競りを見学し、新鮮な魚介類を購入できます。",
      en: "Observe fish auctions at the early morning fishing port and purchase fresh seafood."
    },
    price: 4500,
    duration: {
      ja: "2時間",
      en: "2 hours"
    },
    capacity: 15,
    rating: 4.6,
    reviewCount: 203,
    image: "/early-morning-fish-market-auction-in-japanese-fish.jpg",
    category: {
      ja: "漁業体験",
      en: "Fishing Experience"
    }
  },
  {
    id: "5",
    title: {
      ja: "篠島神社参拝と歴史散策",
      en: "Shinojima Shrine Visit & Historical Walk"
    },
    description: {
      ja: "島の守り神を祀る神社を参拝し、篠島の歴史と文化を学びます。",
      en: "Visit the shrine dedicated to the island's guardian deity and learn about Shinojima's history and culture."
    },
    price: 3200,
    duration: {
      ja: "1.5時間",
      en: "1.5 hours"
    },
    capacity: 20,
    rating: 4.5,
    reviewCount: 78,
    image: "/traditional-japanese-shrine-on-coastal-island-with.jpg",
    category: {
      ja: "文化・歴史",
      en: "Culture & History"
    }
  },
  {
    id: "6",
    title: {
      ja: "海女文化体験 - 素潜りと海藻採取",
      en: "Ama Diving Culture Experience - Free Diving & Seaweed Harvesting"
    },
    description: {
      ja: "篠島の海女さんから素潜りの技術を学び、海藻採取を体験します。",
      en: "Learn free diving techniques from Shinojima's ama divers and experience seaweed harvesting."
    },
    price: 9800,
    duration: {
      ja: "3.5時間",
      en: "3.5 hours"
    },
    capacity: 6,
    rating: 4.8,
    reviewCount: 94,
    image: "/japanese-ama-diver-woman-in-traditional-white-outf.jpg",
    category: {
      ja: "漁業体験",
      en: "Fishing Experience"
    }
  }
]