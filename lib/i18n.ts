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

  // Experiences Page
  experiencesTitle: string
  experiencesSubtitle: string
  searchPlaceholder: string
  experiencesFound: string
  noExperiencesFound: string
  resetSearchCriteria: string

  // About Page
  islandLocation: string
  islandDescription: string
  culturalHeritage: string
  naturalBeauty: string
  accessInfo: string
  contact: string

  // History Page
  historyTitle: string
  historyIntro: string
  ancientTimes: string
  fishingTradition: string
  modernDevelopment: string

  // Experience Details
  highlights: string
  included: string
  requirements: string
  location: string
  meetingPoint: string
  cancellationPolicy: string
  weatherDependent: string

  // Booking Form
  personalInfo: string
  firstName: string
  lastName: string
  email: string
  phone: string
  specialRequests: string
  agreeTerms: string
  termsAndConditions: string
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

    // Experiences Page
    experiencesTitle: "体験プログラム一覧",
    experiencesSubtitle: "篠島の魅力を存分に味わえる体験プログラムをお選びください",
    searchPlaceholder: "体験を検索...",
    experiencesFound: "件の体験が見つかりました",
    noExperiencesFound: "条件に合う体験が見つかりませんでした。",
    resetSearchCriteria: "検索条件をリセット",

    // About Page
    islandLocation: "篠島の位置",
    islandDescription: "篠島は愛知県知多半島の南端に位置する美しい島です。",
    culturalHeritage: "文化的遺産",
    naturalBeauty: "自然の美しさ",
    accessInfo: "アクセス情報",
    contact: "お問い合わせ",

    // History Page
    historyTitle: "篠島の歴史",
    historyIntro: "古くから漁業で栄えた篠島の歴史をご紹介します。",
    ancientTimes: "古代からの歩み",
    fishingTradition: "漁業の伝統",
    modernDevelopment: "現代の発展",

    // Experience Details
    highlights: "ハイライト",
    included: "含まれるもの",
    requirements: "参加条件",
    location: "場所",
    meetingPoint: "集合場所",
    cancellationPolicy: "キャンセルポリシー",
    weatherDependent: "天候に左右されます",

    // Booking Form
    personalInfo: "個人情報",
    firstName: "姓",
    lastName: "名",
    email: "メールアドレス",
    phone: "電話番号",
    specialRequests: "特別なご要望",
    agreeTerms: "利用規約に同意する",
    termsAndConditions: "利用規約",
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

    // Experiences Page
    experiencesTitle: "Experience Programs",
    experiencesSubtitle: "Choose from experience programs that let you fully enjoy the charm of Shinojima",
    searchPlaceholder: "Search experiences...",
    experiencesFound: " experiences found",
    noExperiencesFound: "No experiences found matching your criteria.",
    resetSearchCriteria: "Reset search criteria",

    // About Page
    islandLocation: "Shinojima Location",
    islandDescription: "Shinojima is a beautiful island located at the southern tip of the Chita Peninsula in Aichi Prefecture.",
    culturalHeritage: "Cultural Heritage",
    naturalBeauty: "Natural Beauty",
    accessInfo: "Access Information",
    contact: "Contact",

    // History Page
    historyTitle: "History of Shinojima",
    historyIntro: "Discover the history of Shinojima, an island that has prospered from fishing since ancient times.",
    ancientTimes: "Ancient Times",
    fishingTradition: "Fishing Tradition",
    modernDevelopment: "Modern Development",

    // Experience Details
    highlights: "Highlights",
    included: "Included",
    requirements: "Requirements",
    location: "Location",
    meetingPoint: "Meeting Point",
    cancellationPolicy: "Cancellation Policy",
    weatherDependent: "Weather dependent",

    // Booking Form
    personalInfo: "Personal Information",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email Address",
    phone: "Phone Number",
    specialRequests: "Special Requests",
    agreeTerms: "I agree to the terms and conditions",
    termsAndConditions: "Terms and Conditions",
  },
}
