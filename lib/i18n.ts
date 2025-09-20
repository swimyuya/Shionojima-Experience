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
