"use client"

import { useParams } from "next/navigation"
import { useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import Link from "next/link"
import { Clock, Users, Star, MapPin, Heart, Share2, ArrowLeft, Check } from "lucide-react"

// Experience data mapping
const experienceDataMap = {
  "1": {
    id: "1",
    title: "伝統漁業体験 - 定置網漁と船上料理",
    description:
      "篠島の漁師と一緒に定置網漁を体験し、獲れたての魚で船上料理を楽しみます。島の伝統的な漁法を学びながら、新鮮な海の幸を味わう特別な体験です。",
    price: 8500,
    duration: "4時間",
    capacity: 8,
    rating: 4.8,
    reviewCount: 127,
    category: "漁業体験",
    images: [
      "/traditional-fishing-boat-with-nets-in-japanese-coa.jpg",
      "/fishermen-working-with-traditional-nets-on-boat-de.jpg",
      "/fresh-seafood-cooking-on-boat-with-ocean-view.jpg",
      "/group-of-tourists-learning-fishing-techniques-from.jpg",
    ],
    schedule: [
      { time: "06:00", activity: "漁港集合・出航準備" },
      { time: "06:30", activity: "定置網漁場へ出航" },
      { time: "07:00", activity: "定置網漁体験・魚の選別" },
      { time: "09:00", activity: "船上料理体験" },
      { time: "10:00", activity: "漁港帰港・解散" },
    ],
    included: ["乗船料", "漁具レンタル", "船上料理材料費", "保険料", "ライフジャケット"],
    requirements: ["動きやすい服装", "滑りにくい靴", "帽子・日焼け止め", "着替え（濡れる可能性があります）"],
    location: {
      name: "篠島漁港",
      address: "愛知県知多郡南知多町篠島字浦磯",
      mapUrl: "https://maps.google.com",
    },
    host: {
      name: "田中 太郎",
      avatar: "/friendly-japanese-fisherman-portrait.jpg",
      bio: "篠島で3代続く漁師の家系。30年以上の漁業経験を持ち、伝統的な漁法の継承に取り組んでいます。",
      experience: "30年以上",
    },
    reviews: [
      {
        id: 1,
        name: "山田 花子",
        rating: 5,
        date: "2024年12月15日",
        comment:
          "本当に素晴らしい体験でした！漁師さんがとても親切で、伝統的な漁法について詳しく教えてくれました。船上で食べた新鮮な魚は絶品でした。",
      },
      {
        id: 2,
        name: "John Smith",
        rating: 5,
        date: "2024年12月10日",
        comment:
          "Amazing authentic experience! The fisherman was very patient and explained everything in simple Japanese. The fresh fish we caught was delicious!",
      },
      {
        id: 3,
        name: "佐藤 一郎",
        rating: 4,
        date: "2024年12月5日",
        comment:
          "家族で参加しました。子供たちも大喜びで、貴重な体験ができました。少し早起きが大変でしたが、それ以上の価値がありました。",
      },
    ],
  },
  "2": {
    id: "2",
    title: "神饌文化体験 - おんべ鯛の調理と奉納",
    description:
      "伊勢神宮に奉納される神聖な「おんべ鯛」の調理法を学び、神饌文化の深さを体験します。篠島の神聖な伝統と、海の恵みに感謝する心を学ぶ特別な文化体験です。",
    price: 12000,
    duration: "3時間",
    capacity: 6,
    rating: 4.9,
    reviewCount: 89,
    category: "文化・歴史",
    images: [
      "/sacred-japanese-sea-bream-preparation-ceremony-wit.jpg",
      "/traditional-japanese-shrine-ceremony-with-sea-bre.jpg",
      "/elderly-japanese-priest-teaching-traditional-coo.jpg",
      "/beautifully-prepared-sea-bream-on-traditional-jap.jpg",
    ],
    schedule: [
      { time: "09:00", activity: "神社集合・お清め" },
      { time: "09:30", activity: "おんべ鯛の歴史と意義について学習" },
      { time: "10:00", activity: "伝統的な調理法の実習" },
      { time: "11:30", activity: "奉納の儀式体験" },
      { time: "12:00", activity: "終了・解散" },
    ],
    included: ["調理材料費", "神社拝観料", "伝統衣装レンタル", "お守り", "記念品"],
    requirements: [
      "清潔な服装",
      "髪の長い方はまとめてください",
      "アクセサリーは控えめに",
      "神聖な場所での体験のため、敬意を持った態度",
    ],
    location: {
      name: "篠島神社",
      address: "愛知県知多郡南知多町篠島字神戸",
      mapUrl: "https://maps.google.com",
    },
    host: {
      name: "宮司 山田 清",
      avatar: "/elderly-japanese-priest-portrait.jpg",
      bio: "篠島神社の宮司として40年以上奉職。おんべ鯛の伝統を守り続け、多くの人に神饌文化の素晴らしさを伝えています。",
      experience: "40年以上",
    },
    reviews: [
      {
        id: 1,
        name: "田中 美香",
        rating: 5,
        date: "2024年12月12日",
        comment:
          "神聖な体験でした。宮司さんの丁寧な説明で、おんべ鯛の深い意味を理解できました。日本の伝統文化の素晴らしさを実感しました。",
      },
      {
        id: 2,
        name: "Emily Johnson",
        rating: 5,
        date: "2024年12月8日",
        comment:
          "Incredible spiritual experience! Learning about the sacred sea bream tradition was deeply moving. The priest was very kind and patient.",
      },
      {
        id: 3,
        name: "鈴木 健太",
        rating: 5,
        date: "2024年12月3日",
        comment: "伊勢神宮との関係や、篠島の歴史について詳しく学べました。実際に調理体験もでき、とても貴重な時間でした。",
      },
    ],
  },
  "3": {
    id: "3",
    title: "島の恵み料理教室 - 海の幸を味わう",
    description:
      "篠島で獲れた新鮮な魚介類を使った伝統料理を地元の料理人から学びます。島の食文化と調理技術を体験し、海の恵みを存分に味わう料理教室です。",
    price: 6800,
    duration: "2.5時間",
    capacity: 12,
    rating: 4.7,
    reviewCount: 156,
    category: "グルメ・食育",
    images: [
      "/japanese-cooking-class-with-fresh-seafood-and-trad.jpg",
      "/fresh-seafood-ingredients-on-wooden-cutting-board.jpg",
      "/traditional-japanese-kitchen-with-cooking-utensil.jpg",
      "/group-of-people-cooking-together-in-japanese-kitc.jpg",
    ],
    schedule: [
      { time: "10:00", activity: "料理教室集合・食材の説明" },
      { time: "10:30", activity: "魚の下処理と調理法の実習" },
      { time: "11:30", activity: "伝統料理の調理体験" },
      { time: "12:00", activity: "完成した料理の試食" },
      { time: "12:30", activity: "終了・解散" },
    ],
    included: ["食材費", "調理器具レンタル", "エプロン", "レシピ集", "試食"],
    requirements: [
      "エプロン持参（レンタルも可）",
      "動きやすい服装",
      "髪の長い方はまとめてください",
      "食物アレルギーがある方は事前にお知らせください",
    ],
    location: {
      name: "篠島料理教室",
      address: "愛知県知多郡南知多町篠島字東側",
      mapUrl: "https://maps.google.com",
    },
    host: {
      name: "料理長 佐藤 恵子",
      avatar: "/friendly-japanese-chef-woman-portrait.jpg",
      bio: "篠島で20年以上料理教室を運営。地元の食材を活かした料理で多くの人に島の魅力を伝えています。",
      experience: "20年以上",
    },
    reviews: [
      {
        id: 1,
        name: "高橋 真由美",
        rating: 5,
        date: "2024年12月14日",
        comment: "とても楽しい料理教室でした！新鮮な魚の扱い方から丁寧に教えてもらい、家でも作れるようになりました。",
      },
      {
        id: 2,
        name: "Michael Brown",
        rating: 4,
        date: "2024年12月9日",
        comment:
          "Great hands-on cooking experience! The instructor was very patient and the seafood was incredibly fresh. Learned a lot about Japanese cooking techniques.",
      },
      {
        id: 3,
        name: "中村 健",
        rating: 5,
        date: "2024年12月4日",
        comment: "家族で参加しました。子供たちも楽しく料理できて、篠島の食文化について学べました。レシピ集も嬉しいです。",
      },
    ],
  },
  "4": {
    id: "4",
    title: "早朝漁業体験 - 朝市と魚の競り",
    description:
      "篠島の漁師たちと共に早朝の海に出て、伝統的な漁業を体験します。朝市での魚の競りや、新鮮な海の幸の選び方を学べる貴重な体験です。",
    price: 4500,
    duration: "2時間",
    capacity: 15,
    rating: 4.6,
    reviewCount: 89,
    category: "漁業体験",
    images: [
      "/early-morning-fishing-boat-departure-at-sunrise-in-j.jpg",
      "/traditional-japanese-fish-auction-at-morning-market.jpg",
      "/fishermen-sorting-fresh-catch-at-shinojima-port.jpg",
    ],
    schedule: [
      { time: "4:30", activity: "篠島港集合" },
      { time: "4:45", activity: "漁船出港、朝日鑑賞" },
      { time: "5:00", activity: "漁業体験開始" },
      { time: "5:45", activity: "帰港、漁獲物整理" },
      { time: "6:00", activity: "朝市見学、競り体験" },
      { time: "6:30", activity: "海の幸試食、解散" },
    ],
    included: ["漁船乗船料", "漁具レンタル", "朝市見学", "海の幸試食", "記念写真撮影"],
    requirements: [
      "暖かい服装（早朝は冷え込みます）",
      "滑りにくい靴",
      "カメラ（撮影可能）",
      "現金（魚の購入希望者）",
    ],
    location: {
      name: "篠島港",
      address: "愛知県知多郡南知多町篠島",
      mapUrl: "https://maps.google.com",
    },
    host: {
      name: "篠島漁業協同組合",
      avatar: "/friendly-japanese-fisherman-portrait.jpg",
      bio: "篠島の漁業を支える協同組合。伝統的な漁法を守りながら、持続可能な漁業を実践しています。",
      experience: "組合設立50年以上",
    },
    reviews: [
      {
        id: 1,
        name: "松本 健一",
        rating: 5,
        date: "2024年12月16日",
        comment: "早朝の体験でしたが、朝日と共に出港する感動は忘れられません。競りの様子も見学でき、とても勉強になりました。",
      },
      {
        id: 2,
        name: "Sarah Wilson",
        rating: 4,
        date: "2024年12月11日",
        comment: "Early start but worth it! Seeing the fish auction was fascinating and the fresh seafood tasting was amazing.",
      },
      {
        id: 3,
        name: "伊藤 雅子",
        rating: 5,
        date: "2024年12月6日",
        comment: "漁師さんたちの仕事ぶりを間近で見ることができ、海の恵みへの感謝の気持ちが深まりました。",
      },
    ],
  },
  "5": {
    id: "5",
    title: "篠島神社参拝と歴史散策",
    description:
      "篠島神社への参拝と島内の歴史的スポットを巡る散策ツアーです。地元ガイドが島の歴史や伝説、文化について詳しく解説します。",
    price: 3200,
    duration: "1.5時間",
    capacity: 20,
    rating: 4.4,
    reviewCount: 156,
    category: "文化・歴史",
    images: [
      "/traditional-japanese-shrine-on-shinojima-island-with.jpg",
      "/historic-japanese-townscape-with-traditional-buildi.jpg",
      "/scenic-coastal-view-from-shinojima-island-observato.jpg",
    ],
    schedule: [
      { time: "9:00", activity: "篠島港集合" },
      { time: "9:15", activity: "篠島神社参拝" },
      { time: "9:45", activity: "古い町並み散策" },
      { time: "10:00", activity: "史跡巡り" },
      { time: "10:15", activity: "展望台で絶景鑑賞" },
      { time: "10:30", activity: "解散" },
    ],
    included: ["ガイド料", "神社参拝料", "史跡入場料", "記念品", "散策マップ"],
    requirements: [
      "歩きやすい靴",
      "帽子・日焼け止め",
      "飲み物",
      "カメラ（撮影可能）",
    ],
    location: {
      name: "篠島港",
      address: "愛知県知多郡南知多町篠島",
      mapUrl: "https://maps.google.com",
    },
    host: {
      name: "篠島観光ガイド協会",
      avatar: "/friendly-japanese-fisherman-portrait.jpg",
      bio: "篠島の歴史と文化を愛する地元ガイドの集まり。島の魅力を多くの人に伝えることを使命としています。",
      experience: "ガイド歴平均15年",
    },
    reviews: [
      {
        id: 1,
        name: "木村 直子",
        rating: 4,
        date: "2024年12月13日",
        comment: "ガイドさんの説明がとても分かりやすく、篠島の歴史について深く学ぶことができました。",
      },
      {
        id: 2,
        name: "David Chen",
        rating: 5,
        date: "2024年12月7日",
        comment: "Beautiful walking tour with great views! The guide was very knowledgeable about local history and legends.",
      },
      {
        id: 3,
        name: "渡辺 修",
        rating: 4,
        date: "2024年12月2日",
        comment: "神社参拝から始まり、島の歴史を感じながら散策できました。展望台からの景色は絶景でした。",
      },
    ],
  },
  "6": {
    id: "6",
    title: "海女文化体験 - 素潜りと海藻採取",
    description:
      "篠島の伝統的な海女文化を体験します。現役の海女さんから素潜りの技術を学び、海藻や貝類の採取を体験できる貴重なプログラムです。",
    price: 9800,
    duration: "3.5時間",
    capacity: 6,
    rating: 4.8,
    reviewCount: 67,
    category: "漁業体験",
    images: [
      "/traditional-japanese-ama-diver-woman-in-white-divin.jpg",
      "/seaweed-harvesting-underwater-scene-in-clear-japane.jpg",
      "/traditional-ama-hut-by-the-sea-in-japan-with-divin.jpg",
    ],
    schedule: [
      { time: "8:00", activity: "海女小屋集合、着替え" },
      { time: "8:30", activity: "海女文化の説明" },
      { time: "9:00", activity: "素潜り技術指導" },
      { time: "9:30", activity: "海藻採取体験" },
      { time: "10:30", activity: "貝類採取体験" },
      { time: "11:00", activity: "海女小屋で休憩・試食" },
      { time: "11:30", activity: "解散" },
    ],
    included: ["ウェットスーツレンタル", "採取道具一式", "海女小屋利用料", "採取物の試食", "記念写真撮影"],
    requirements: [
      "水着（ウェットスーツ貸出可能）",
      "タオル・着替え",
      "日焼け止め（海に優しいもの）",
      "飲み物",
    ],
    location: {
      name: "篠島海女小屋",
      address: "愛知県知多郡南知多町篠島",
      mapUrl: "https://maps.google.com",
    },
    host: {
      name: "篠島海女組合",
      avatar: "/traditional-japanese-ama-diver-woman-in-white-divin.jpg",
      bio: "篠島の海女文化を守り続ける現役海女たちの組合。伝統的な技術を次世代に伝えることに取り組んでいます。",
      experience: "海女歴平均25年",
    },
    reviews: [
      {
        id: 1,
        name: "小林 美穂",
        rating: 5,
        date: "2024年12月15日",
        comment: "海女さんの技術の高さに驚きました。素潜りは難しかったですが、とても貴重な体験ができました。",
      },
      {
        id: 2,
        name: "Lisa Anderson",
        rating: 5,
        date: "2024年12月10日",
        comment: "Incredible experience learning from real Ama divers! The underwater world was beautiful and the cultural aspect was fascinating.",
      },
      {
        id: 3,
        name: "田村 健",
        rating: 4,
        date: "2024年12月5日",
        comment: "海女文化の深さを実感しました。海藻採取は思った以上に大変でしたが、海女さんたちの技術に感動しました。",
      },
    ],
  },
}

export default function ExperienceDetailPage() {
  const params = useParams()
  const experienceId = params.id as string
  
  // Get experience data based on ID, fallback to experience 1 if not found
  const experienceData = experienceDataMap[experienceId as keyof typeof experienceDataMap] || experienceDataMap["1"]
  
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState("")
  const [adultCount, setAdultCount] = useState(2)
  const [childCount, setChildCount] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const totalPrice = adultCount * experienceData.price + childCount * experienceData.price * 0.7
  const totalParticipants = adultCount + childCount

  const availableTimes = ["06:00", "07:00", "08:00"]

  return (
    <div className="min-h-screen">
      <Header />

      <div className="pt-20">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              ホーム
            </Link>
            <span>/</span>
            <Link href="/experiences" className="hover:text-primary">
              体験一覧
            </Link>
            <span>/</span>
            <span className="text-foreground">{experienceData.title}</span>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/experiences">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      戻る
                    </Link>
                  </Button>
                  <Badge>{experienceData.category}</Badge>
                </div>

                <h1 className="text-3xl font-bold mb-4">{experienceData.title}</h1>

                <div className="flex items-center gap-6 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{experienceData.rating}</span>
                    <span className="text-muted-foreground">({experienceData.reviewCount}件のレビュー)</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {experienceData.location.name}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm">
                    <Heart className="h-4 w-4 mr-2" />
                    お気に入り
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    シェア
                  </Button>
                </div>
              </div>

              {/* Image Gallery */}
              <div className="mb-8">
                <div className="relative mb-4">
                  <Image
                    src={experienceData.images[currentImageIndex] || "/placeholder.svg"}
                    alt={experienceData.title}
                    width={800}
                    height={400}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {experienceData.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative overflow-hidden rounded-lg ${
                        currentImageIndex === index ? "ring-2 ring-primary" : ""
                      }`}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${experienceData.title} ${index + 1}`}
                        width={200}
                        height={120}
                        className="w-full h-20 object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">体験について</h2>
                <p className="text-muted-foreground leading-relaxed">{experienceData.description}</p>
              </div>

              {/* Schedule */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">当日のスケジュール</h2>
                <div className="space-y-4">
                  {experienceData.schedule.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium min-w-fit">
                        {item.time}
                      </div>
                      <p className="text-muted-foreground">{item.activity}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's Included */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">含まれるもの</h3>
                  <ul className="space-y-2">
                    {experienceData.included.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">持ち物・服装</h3>
                  <ul className="space-y-2">
                    {experienceData.requirements.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Host */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">ホスト紹介</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={experienceData.host.avatar || "/placeholder.svg"} />
                        <AvatarFallback>田中</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{experienceData.host.name}</h3>
                        <p className="text-muted-foreground mb-2">漁業経験: {experienceData.host.experience}</p>
                        <p className="text-muted-foreground">{experienceData.host.bio}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Reviews */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">レビュー</h2>
                <div className="space-y-6">
                  {experienceData.reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <Avatar>
                            <AvatarFallback>{review.name[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-semibold">{review.name}</h4>
                              <div className="flex items-center gap-1">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                              <span className="text-muted-foreground text-sm">{review.date}</span>
                            </div>
                            <p className="text-muted-foreground">{review.comment}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card>
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-6">
                      ¥{experienceData.price.toLocaleString()}
                      <span className="text-base font-normal text-muted-foreground">/人</span>
                    </div>

                    <div className="space-y-6">
                      {/* Date Selection */}
                      <div>
                        <label className="text-sm font-medium mb-2 block">日付を選択</label>
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          className="rounded-md border"
                          disabled={(date) => date < new Date()}
                        />
                      </div>

                      {/* Time Selection */}
                      <div>
                        <label className="text-sm font-medium mb-2 block">時間を選択</label>
                        <Select value={selectedTime} onValueChange={setSelectedTime}>
                          <SelectTrigger>
                            <SelectValue placeholder="時間を選択してください" />
                          </SelectTrigger>
                          <SelectContent>
                            {availableTimes.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Participant Count */}
                      <div>
                        <label className="text-sm font-medium mb-2 block">参加人数</label>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span>大人</span>
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setAdultCount(Math.max(1, adultCount - 1))}
                              >
                                -
                              </Button>
                              <span className="w-8 text-center">{adultCount}</span>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setAdultCount(Math.min(experienceData.capacity, adultCount + 1))}
                              >
                                +
                              </Button>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>子供 (30%割引)</span>
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setChildCount(Math.max(0, childCount - 1))}
                              >
                                -
                              </Button>
                              <span className="w-8 text-center">{childCount}</span>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() =>
                                  setChildCount(Math.min(experienceData.capacity - adultCount, childCount + 1))
                                }
                              >
                                +
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Price Breakdown */}
                      <div className="border-t pt-4">
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>大人 × {adultCount}</span>
                            <span>¥{(adultCount * experienceData.price).toLocaleString()}</span>
                          </div>
                          {childCount > 0 && (
                            <div className="flex justify-between">
                              <span>子供 × {childCount}</span>
                              <span>¥{(childCount * experienceData.price * 0.7).toLocaleString()}</span>
                            </div>
                          )}
                          <div className="flex justify-between font-semibold text-base border-t pt-2">
                            <span>合計</span>
                            <span>¥{totalPrice.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>

                      <Button
                        className="w-full"
                        size="lg"
                        disabled={!selectedDate || !selectedTime || totalParticipants > experienceData.capacity}
                        asChild
                      >
                        <Link href={`/experiences/${experienceData.id}/booking`}>予約に進む</Link>
                      </Button>

                      <div className="text-xs text-muted-foreground text-center">予約確定まで料金は発生しません</div>
                    </div>
                  </CardContent>
                </Card>

                {/* Experience Info */}
                <Card className="mt-4">
                  <CardContent className="p-4">
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>所要時間: {experienceData.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>最大参加人数: {experienceData.capacity}名</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{experienceData.location.name}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
