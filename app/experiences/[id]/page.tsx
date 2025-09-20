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
import { useLanguage } from "@/hooks/use-language"
import { experiencesData } from "@/lib/experiences-data"

export default function ExperienceDetailPage() {
  const { language, t } = useLanguage()
  const params = useParams()
  const experienceId = params.id as string

  // Get experience data based on ID, fallback to first experience if not found
  const experienceData = experiencesData.find(exp => exp.id === experienceId) || experiencesData[0]

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState("")
  const [adultCount, setAdultCount] = useState(2)
  const [childCount, setChildCount] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const totalPrice = adultCount * experienceData.price + childCount * experienceData.price * 0.7
  const totalParticipants = adultCount + childCount

  const availableTimes = ["06:00", "07:00", "08:00", "09:00", "10:00"]

  // Sample schedule data (could be expanded in data structure later)
  const sampleSchedule = [
    { time: "06:00", activity: language === "ja" ? "集合・準備" : "Gather and prepare" },
    { time: "07:00", activity: language === "ja" ? "活動開始" : "Start activity" },
    { time: "09:00", activity: language === "ja" ? "メイン体験" : "Main experience" },
    { time: "10:30", activity: language === "ja" ? "終了・解散" : "End and dismiss" },
  ]

  const sampleIncluded = [
    language === "ja" ? "材料費" : "Material costs",
    language === "ja" ? "道具レンタル" : "Equipment rental",
    language === "ja" ? "保険料" : "Insurance",
    language === "ja" ? "記念品" : "Souvenir"
  ]

  const sampleRequirements = [
    language === "ja" ? "動きやすい服装" : "Comfortable clothing",
    language === "ja" ? "滑りにくい靴" : "Non-slip shoes",
    language === "ja" ? "帽子・日焼け止め" : "Hat and sunscreen",
    language === "ja" ? "飲み物" : "Drinks"
  ]

  const sampleImages = [
    experienceData.image,
    "/traditional-fishing-boat-with-nets-in-japanese-coa.jpg",
    "/sacred-japanese-sea-bream-preparation-ceremony-wit.jpg",
    "/japanese-cooking-class-with-fresh-seafood-and-trad.jpg"
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <div className="pt-20">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              {t.home}
            </Link>
            <span>/</span>
            <Link href="/experiences" className="hover:text-primary">
              {t.experiences}
            </Link>
            <span>/</span>
            <span className="text-foreground">
              {experienceData.title[language]}
            </span>
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
                      {t.back}
                    </Link>
                  </Button>
                  <Badge>
                    {experienceData.category[language]}
                  </Badge>
                </div>

                <h1 className="text-3xl font-bold mb-4">
                  {experienceData.title[language]}
                </h1>

                <div className="flex items-center gap-6 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{experienceData.rating}</span>
                    <span className="text-muted-foreground">
                      ({experienceData.reviewCount} {t.reviews})
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {language === "ja" ? "篠島" : "Shinojima"}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm">
                    <Heart className="h-4 w-4 mr-2" />
                    {language === "ja" ? "お気に入り" : "Favorite"}
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    {language === "ja" ? "シェア" : "Share"}
                  </Button>
                </div>
              </div>

              {/* Image Gallery */}
              <div className="mb-8">
                <div className="relative mb-4">
                  <Image
                    src={sampleImages[currentImageIndex] || "/placeholder.svg"}
                    alt={experienceData.title[language]}
                    width={800}
                    height={400}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {sampleImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative overflow-hidden rounded-lg ${
                        currentImageIndex === index ? "ring-2 ring-primary" : ""
                      }`}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${experienceData.title[language]} ${index + 1}`}
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
                <h2 className="text-2xl font-bold mb-4">
                  {language === "ja" ? "体験について" : "About This Experience"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {experienceData.description[language]}
                </p>
              </div>

              {/* Schedule */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  {language === "ja" ? "当日のスケジュール" : "Daily Schedule"}
                </h2>
                <div className="space-y-4">
                  {sampleSchedule.map((item, index) => (
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
                  <h3 className="text-xl font-bold mb-4">
                    {t.included}
                  </h3>
                  <ul className="space-y-2">
                    {sampleIncluded.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">
                    {t.requirements}
                  </h3>
                  <ul className="space-y-2">
                    {sampleRequirements.map((item, index) => (
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
                <h2 className="text-2xl font-bold mb-4">
                  {language === "ja" ? "ホスト紹介" : "Meet Your Host"}
                </h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src="/friendly-japanese-fisherman-portrait.jpg" />
                        <AvatarFallback>田中</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">
                          {language === "ja" ? "田中 太郎" : "Taro Tanaka"}
                        </h3>
                        <p className="text-muted-foreground mb-2">
                          {language === "ja" ? "経験: 30年以上" : "Experience: Over 30 years"}
                        </p>
                        <p className="text-muted-foreground">
                          {language === "ja"
                            ? "篠島で3代続く漁師の家系。30年以上の漁業経験を持ち、伝統的な漁法の継承に取り組んでいます。"
                            : "Third-generation fisherman from Shinojima with over 30 years of experience, dedicated to preserving traditional fishing methods."
                          }
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Reviews */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  {language === "ja" ? "レビュー" : "Reviews"}
                </h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar>
                          <AvatarFallback>山</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold">
                              {language === "ja" ? "山田 花子" : "Hanako Yamada"}
                            </h4>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <span className="text-muted-foreground text-sm">
                              {language === "ja" ? "2024年12月15日" : "December 15, 2024"}
                            </span>
                          </div>
                          <p className="text-muted-foreground">
                            {language === "ja"
                              ? "本当に素晴らしい体験でした！漁師さんがとても親切で、伝統的な漁法について詳しく教えてくれました。"
                              : "It was truly a wonderful experience! The fisherman was very kind and taught us in detail about traditional fishing methods."
                            }
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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
                      <span className="text-base font-normal text-muted-foreground">
                        /{t.person}
                      </span>
                    </div>

                    <div className="space-y-6">
                      {/* Date Selection */}
                      <div>
                        <label className="text-sm font-medium mb-2 block">{t.selectDate}</label>
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
                        <label className="text-sm font-medium mb-2 block">{t.selectTime}</label>
                        <Select value={selectedTime} onValueChange={setSelectedTime}>
                          <SelectTrigger>
                            <SelectValue placeholder={language === "ja" ? "時間を選択してください" : "Select time"} />
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
                        <label className="text-sm font-medium mb-2 block">{t.participants}</label>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span>{t.adults}</span>
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
                            <span>{t.children} ({t.childDiscount})</span>
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
                            <span>{t.adults} × {adultCount}</span>
                            <span>¥{(adultCount * experienceData.price).toLocaleString()}</span>
                          </div>
                          {childCount > 0 && (
                            <div className="flex justify-between">
                              <span>{t.children} × {childCount}</span>
                              <span>¥{(childCount * experienceData.price * 0.7).toLocaleString()}</span>
                            </div>
                          )}
                          <div className="flex justify-between font-semibold text-base border-t pt-2">
                            <span>{t.total}</span>
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
                        <Link href={`/experiences/${experienceData.id}/booking`}>
                          {t.proceedToBooking}
                        </Link>
                      </Button>

                      <div className="text-xs text-muted-foreground text-center">
                        {t.noChargeUntilConfirmed}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Experience Info */}
                <Card className="mt-4">
                  <CardContent className="p-4">
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{t.duration}: {experienceData.duration[language]}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{t.maxParticipants}: {experienceData.capacity}{language === "ja" ? "名" : ""}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{language === "ja" ? "篠島" : "Shinojima Island"}</span>
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