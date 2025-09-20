export type Language = "ja" | "en"

export interface Translations {
  // Navigation
  home: string
  experiences: string
  about: string
  history: string

  // Hero section
  heroTitle: string
  heroSubtitle: string
  exploreExperiences: string
  aboutShinojima: string

  // Categories
  categoriesTitle: string
  fishingExperience: string
  cultureHistory: string
  gourmetEducation: string
  experienceCount: string

  // Featured section
  featuredTitle: string
  viewAll: string

  // Experience details
  duration: string
  maxParticipants: string
  reviews: string
  bookNow: string
  proceedToBooking: string
  selectDate: string
  selectTime: string
  participants: string
  adults: string
  children: string
  childDiscount: string
  total: string
  noChargeUntilConfirmed: string

  // Booking
  bookingTitle: string
  confirmBooking: string
  testBookingNotice: string

  // Confirmation
  bookingConfirmed: string
  bookingNumber: string
  thankYou: string

  // About section
  aboutTitle: string
  aboutDescription: string
  learnMoreHistory: string

  // Common
  back: string
  search: string
  filter: string
  all: string
  popular: string
  newest: string
  priceLow: string
  priceHigh: string
  rating: string
  person: string
  yen: string
}

export const translations: Record<Language, Translations> = {
  ja: {
    // Navigation
    home: "ホーム",
    experiences: "体験一覧",
    about: "篠島について",
    history: "篠島の歴史",

    // Hero section
    heroTitle: "漁業と神饌文化の体験を世界へ",
    heroSubtitle: "篠島の暮らしを、旅のハイライトに",
    exploreExperiences: "体験を探す",
    aboutShinojima: "篠島について",

    // Categories
    categoriesTitle: "体験カテゴリー",
    fishingExperience: "漁業体験",
    cultureHistory: "文化・歴史",
    gourmetEducation: "グルメ・食育",
    experienceCount: "の体験",

    // Featured section
    featuredTitle: "今月のおすすめ体験",
    viewAll: "すべて見る",

    // Experience details
    duration: "所要時間",
    maxParticipants: "最大参加人数",
    reviews: "レビュー",
    bookNow: "予約する",
    proceedToBooking: "予約に進む",
    selectDate: "日付を選択",
    selectTime: "時間を選択",
    participants: "参加人数",
    adults: "大人",
    children: "子供",
    childDiscount: "30%割引",
    total: "合計",
    noChargeUntilConfirmed: "予約確定まで料金は発生しません",

    // Booking
    bookingTitle: "予約内容の確認",
    confirmBooking: "予約を確定する",
    testBookingNotice: "これはテスト予約システムです。実際の予約は行われません。",

    // Confirmation
    bookingConfirmed: "予約が完了しました",
    bookingNumber: "予約番号",
    thankYou: "ご予約ありがとうございました",

    // About section
    aboutTitle: "篠島について",
    aboutDescription:
      "愛知県知多半島の南端に位置する篠島は、古くから漁業で栄えた美しい島です。伊勢神宮に奉納される神聖な「おんべ鯛」の産地として知られ、豊かな海の恵みと深い文化的背景を持つ特別な場所です。",
    learnMoreHistory: "篠島の歴史を詳しく",

    // Common
    back: "戻る",
    search: "検索",
    filter: "フィルター",
    all: "すべて",
    popular: "人気順",
    newest: "新着順",
    priceLow: "価格が安い順",
    priceHigh: "価格が高い順",
    rating: "評価が高い順",
    person: "人",
    yen: "¥",
  },
  en: {
    // Navigation
    home: "Home",
    experiences: "Experiences",
    about: "About Shinojima",
    history: "History",

    // Hero section
    heroTitle: "Traditional Fishing & Sacred Food Culture Experiences",
    heroSubtitle: "Make Shinojima's lifestyle the highlight of your journey",
    exploreExperiences: "Explore Experiences",
    aboutShinojima: "About Shinojima",

    // Categories
    categoriesTitle: "Experience Categories",
    fishingExperience: "Fishing Experience",
    cultureHistory: "Culture & History",
    gourmetEducation: "Gourmet & Food Education",
    experienceCount: " experiences",

    // Featured section
    featuredTitle: "Featured Experiences This Month",
    viewAll: "View All",

    // Experience details
    duration: "Duration",
    maxParticipants: "Max Participants",
    reviews: "reviews",
    bookNow: "Book Now",
    proceedToBooking: "Proceed to Booking",
    selectDate: "Select Date",
    selectTime: "Select Time",
    participants: "Participants",
    adults: "Adults",
    children: "Children",
    childDiscount: "30% discount",
    total: "Total",
    noChargeUntilConfirmed: "No charge until booking is confirmed",

    // Booking
    bookingTitle: "Booking Confirmation",
    confirmBooking: "Confirm Booking",
    testBookingNotice: "This is a test booking system. No actual reservations will be made.",

    // Confirmation
    bookingConfirmed: "Booking Confirmed",
    bookingNumber: "Booking Number",
    thankYou: "Thank you for your booking",

    // About section
    aboutTitle: "About Shinojima",
    aboutDescription:
      'Located at the southern tip of the Chita Peninsula in Aichi Prefecture, Shinojima is a beautiful island that has prospered from fishing since ancient times. Known as the source of the sacred "Ombe-tai" (sea bream) offered to Ise Grand Shrine, it is a special place with rich marine bounty and deep cultural heritage.',
    learnMoreHistory: "Learn More About History",

    // Common
    back: "Back",
    search: "Search",
    filter: "Filter",
    all: "All",
    popular: "Popular",
    newest: "Newest",
    priceLow: "Price: Low to High",
    priceHigh: "Price: High to Low",
    rating: "Highest Rated",
    person: "person",
    yen: "¥",
  },
}

export const experienceTranslations = {
  ja: {
    experiences: [
      {
        id: "1",
        title: "伝統漁業体験 - 定置網漁と船上料理",
        description: "篠島の漁師と一緒に定置網漁を体験し、獲れたての魚で船上料理を楽しみます。",
        category: "漁業体験",
      },
      {
        id: "2",
        title: "神饌文化体験 - おんべ鯛の調理と奉納",
        description: "伊勢神宮に奉納される神聖な「おんべ鯛」の調理法を学び、神饌文化の深さを体験します。",
        category: "文化・歴史",
      },
      {
        id: "3",
        title: "島の恵み料理教室 - 海の幸を味わう",
        description: "篠島で獲れた新鮮な魚介類を使った伝統料理を地元の料理人から学びます。",
        category: "グルメ・食育",
      },
      {
        id: "4",
        title: "早朝漁業体験 - 朝市と魚の競り",
        description: "早朝の漁港で魚の競りを見学し、新鮮な魚介類を購入できます。",
        category: "漁業体験",
      },
      {
        id: "5",
        title: "篠島神社参拝と歴史散策",
        description: "島の守り神を祀る神社を参拝し、篠島の歴史と文化を学びます。",
        category: "文化・歴史",
      },
      {
        id: "6",
        title: "海女文化体験 - 素潜りと海藻採取",
        description: "篠島の海女さんから素潜りの技術を学び、海藻採取を体験します。",
        category: "漁業体験",
      },
    ],
  },
  en: {
    experiences: [
      {
        id: "1",
        title: "Traditional Fishing Experience - Fixed Net Fishing & Onboard Cooking",
        description: "Experience fixed net fishing with Shinojima fishermen and enjoy cooking fresh catch onboard.",
        category: "Fishing Experience",
      },
      {
        id: "2",
        title: "Sacred Food Culture Experience - Ombe-tai Preparation & Offering",
        description:
          "Learn the preparation of sacred 'Ombe-tai' offered to Ise Grand Shrine and experience the depth of sacred food culture.",
        category: "Culture & History",
      },
      {
        id: "3",
        title: "Island Bounty Cooking Class - Taste the Sea's Gifts",
        description: "Learn traditional cooking using fresh seafood caught in Shinojima from local chefs.",
        category: "Gourmet & Food Education",
      },
      {
        id: "4",
        title: "Early Morning Fishing Experience - Morning Market & Fish Auction",
        description: "Observe fish auctions at the early morning fishing port and purchase fresh seafood.",
        category: "Fishing Experience",
      },
      {
        id: "5",
        title: "Shinojima Shrine Visit & Historical Walk",
        description:
          "Visit the shrine dedicated to the island's guardian deity and learn about Shinojima's history and culture.",
        category: "Culture & History",
      },
      {
        id: "6",
        title: "Ama Diver Culture Experience - Free Diving & Seaweed Harvesting",
        description: "Learn free diving techniques from Shinojima's ama divers and experience seaweed harvesting.",
        category: "Fishing Experience",
      },
    ],
  },
}
