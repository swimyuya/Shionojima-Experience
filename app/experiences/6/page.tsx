"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, MapPin, Star, ChevronLeft, Waves, Heart } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export default function Experience6Page() {
  const { language, t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState(0)

  const experience = {
    id: 6,
    title: {
      ja: "海女文化体験 - 素潜りと海藻採取",
      en: "Ama Diver Culture Experience - Free Diving and Seaweed Harvesting",
    },
    subtitle: {
      ja: "伝統的な海女文化を体験し、海の恵みを収穫",
      en: "Experience traditional Ama diver culture and harvest ocean bounty",
    },
    price: 9800,
    duration: {
      ja: "3.5時間",
      en: "3.5 hours",
    },
    capacity: 6,
    rating: 4.8,
    reviews: 67,
    category: {
      ja: "文化体験",
      en: "Cultural Experience",
    },
    description: {
      ja: "篠島の伝統的な海女文化を体験します。現役の海女さんから素潜りの技術を学び、海藻や貝類の採取を体験できる貴重なプログラムです。",
      en: "Experience the traditional Ama diver culture of Shinojima. Learn free diving techniques from active Ama divers and experience harvesting seaweed and shellfish in this precious program.",
    },
    highlights: {
      ja: [
        "現役海女さんによる指導",
        "伝統的な素潜り技術の習得",
        "海藻・貝類の採取体験",
        "海女小屋での休憩と交流",
        "採取した海の幸の試食",
      ],
      en: [
        "Instruction by active Ama divers",
        "Learning traditional free diving techniques",
        "Seaweed and shellfish harvesting experience",
        "Rest and interaction at Ama hut",
        "Tasting harvested seafood",
      ],
    },
    included: {
      ja: ["ウェットスーツレンタル", "採取道具一式", "海女小屋利用料", "採取物の試食", "記念写真撮影"],
      en: [
        "Wetsuit rental",
        "Complete harvesting tools",
        "Ama hut usage fee",
        "Tasting of harvested items",
        "Commemorative photo session",
      ],
    },
    schedule: {
      ja: [
        "8:00 - 海女小屋集合、着替え",
        "8:30 - 海女文化の説明",
        "9:00 - 素潜り技術指導",
        "9:30 - 海藻採取体験",
        "10:30 - 貝類採取体験",
        "11:00 - 海女小屋で休憩・試食",
        "11:30 - 解散",
      ],
      en: [
        "8:00 - Meet at Ama hut, change clothes",
        "8:30 - Explanation of Ama culture",
        "9:00 - Free diving technique instruction",
        "9:30 - Seaweed harvesting experience",
        "10:30 - Shellfish harvesting experience",
        "11:00 - Rest and tasting at Ama hut",
        "11:30 - Dismissal",
      ],
    },
    images: [
      "/traditional-japanese-ama-diver-woman-in-white-divin.jpg",
      "/seaweed-harvesting-underwater-scene-in-clear-japane.jpg",
      "/traditional-ama-hut-by-the-sea-in-japan-with-divin.jpg",
    ],
  }

  const images = [
    {
      src: experience.images[0],
      alt: language === "ja" ? "海女さんの素潜り" : "Ama diver free diving",
    },
    {
      src: experience.images[1],
      alt: language === "ja" ? "海藻採取の様子" : "Seaweed harvesting scene",
    },
    {
      src: experience.images[2],
      alt: language === "ja" ? "海女小屋" : "Ama hut",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              {language === "ja" ? "ホーム" : "Home"}
            </Link>
            <span>/</span>
            <Link href="/experiences" className="hover:text-blue-600">
              {language === "ja" ? "体験一覧" : "Experiences"}
            </Link>
            <span>/</span>
            <span className="text-gray-900">{experience.title[language]}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link href="/experiences" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <ChevronLeft className="h-4 w-4 mr-1" />
          {language === "ja" ? "体験一覧に戻る" : "Back to Experiences"}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
              <Image
                src={images[selectedImage].src || "/placeholder.svg"}
                alt={images[selectedImage].alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-[4/3] relative rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? "border-blue-500" : "border-transparent"
                  }`}
                >
                  <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Experience Details */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                {experience.category[language]}
              </Badge>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{experience.title[language]}</h1>
              <p className="text-lg text-gray-600 mb-4">{experience.subtitle[language]}</p>

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-semibold">{experience.rating}</span>
                  <span className="ml-1 text-gray-600">
                    ({experience.reviews} {language === "ja" ? "レビュー" : "reviews"})
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-400 mr-2" />
                  <span>{experience.duration[language]}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-gray-400 mr-2" />
                  <span>
                    {language === "ja" ? `最大${experience.capacity}名` : `Up to ${experience.capacity} people`}
                  </span>
                </div>
                <div className="flex items-center">
                  <Waves className="h-5 w-5 text-gray-400 mr-2" />
                  <span>{language === "ja" ? "素潜り体験" : "Free diving"}</span>
                </div>
                <div className="flex items-center">
                  <Heart className="h-5 w-5 text-gray-400 mr-2" />
                  <span>{language === "ja" ? "海女文化" : "Ama culture"}</span>
                </div>
              </div>

              <div className="text-3xl font-bold text-blue-600 mb-6">
                ¥{experience.price.toLocaleString()}
                <span className="text-lg font-normal text-gray-600 ml-2">
                  {language === "ja" ? "/ 1名" : "/ person"}
                </span>
              </div>

              <Link href={`/experiences/${experience.id}/booking`}>
                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                  {language === "ja" ? "今すぐ予約" : "Book Now"}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Description and Details */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">
                  {language === "ja" ? "体験について" : "About This Experience"}
                </h2>
                <p className="text-gray-700 leading-relaxed">{experience.description[language]}</p>
              </CardContent>
            </Card>

            {/* Highlights */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">
                  {language === "ja" ? "体験のハイライト" : "Experience Highlights"}
                </h2>
                <ul className="space-y-2">
                  {experience.highlights[language].map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-2 w-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Schedule */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">{language === "ja" ? "スケジュール" : "Schedule"}</h2>
                <div className="space-y-3">
                  {experience.schedule[language].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-blue-600 font-semibold text-sm">{index + 1}</span>
                      </div>
                      <span className="text-gray-700 pt-1">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* What's Included */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">
                  {language === "ja" ? "料金に含まれるもの" : "What's Included"}
                </h3>
                <ul className="space-y-2">
                  {experience.included[language].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="h-1.5 w-1.5 bg-green-500 rounded-full mr-3" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Location */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">{language === "ja" ? "集合場所" : "Meeting Point"}</h3>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                  <div>
                    <p className="font-semibold">{language === "ja" ? "篠島海女小屋" : "Shinojima Ama Hut"}</p>
                    <p className="text-sm text-gray-600">
                      {language === "ja" ? "愛知県知多郡南知多町篠島" : "Shinojima, Minamichita, Chita District, Aichi"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Important Notes */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">{language === "ja" ? "重要事項" : "Important Notes"}</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• {language === "ja" ? "泳げる方のみ参加可能" : "Swimming ability required"}</li>
                  <li>• {language === "ja" ? "健康状態に問題のない方" : "Good health condition required"}</li>
                  <li>• {language === "ja" ? "水着をご持参ください" : "Please bring swimwear"}</li>
                  <li>• {language === "ja" ? "天候により中止の場合があります" : "May be cancelled due to weather"}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
