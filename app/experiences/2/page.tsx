"use client"

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

const experienceData = {
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
}

export default function Experience2DetailPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState("")
  const [adultCount, setAdultCount] = useState(2)
  const [childCount, setChildCount] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const totalPrice = adultCount * experienceData.price + childCount * experienceData.price * 0.7
  const totalParticipants = adultCount + childCount

  const availableTimes = ["09:00", "14:00"]

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
                  <h3 className="text-xl font-bold mb-4">注意事項</h3>
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
                        <AvatarFallback>山田</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{experienceData.host.name}</h3>
                        <p className="text-muted-foreground mb-2">奉職経験: {experienceData.host.experience}</p>
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
