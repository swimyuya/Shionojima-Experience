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

// Mock data - in a real app, this would come from an API
const experienceData = {
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
}

export default function ExperienceDetailPage() {
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
