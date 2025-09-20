"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, MapPin, Star, ChevronLeft, Sunrise, Fish } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export default function Experience4Page() {
  const { language, t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState(0)

  const experience = {
    id: 4,
    title: {
      ja: "早朝漁業体験 - 朝市と魚の競り",
      en: "Early Morning Fishing Experience - Morning Market and Fish Auction",
    },
    subtitle: {
      ja: "漁師と共に朝の海へ、新鮮な魚の競りを体験",
      en: "Join fishermen at dawn, experience fresh fish auctions",
    },
    price: 4500,
    duration: {
      ja: "2時間",
      en: "2 hours",
    },
    capacity: 15,
    rating: 4.6,
    reviews: 89,
    category: {
      ja: "漁業体験",
      en: "Fishing Experience",
    },
    description: {
      ja: "篠島の漁師たちと共に早朝の海に出て、伝統的な漁業を体験します。朝市での魚の競りや、新鮮な海の幸の選び方を学べる貴重な体験です。",
      en: "Join Shinojima fishermen at dawn to experience traditional fishing. Learn about fish auctions at the morning market and how to select the freshest seafood.",
    },
    highlights: {
      ja: [
        "早朝4:30出発の本格漁業体験",
        "朝市での魚の競り見学",
        "漁師から学ぶ魚の見分け方",
        "新鮮な海の幸の試食",
        "朝日と共に出港する感動体験",
      ],
      en: [
        "Authentic fishing experience starting at 4:30 AM",
        "Observe fish auctions at morning market",
        "Learn fish identification from fishermen",
        "Taste fresh seafood",
        "Emotional experience departing with sunrise",
      ],
    },
    included: {
      ja: ["漁船乗船料", "漁具レンタル", "朝市見学", "海の幸試食", "記念写真撮影"],
      en: [
        "Fishing boat boarding fee",
        "Fishing equipment rental",
        "Morning market tour",
        "Seafood tasting",
        "Commemorative photo session",
      ],
    },
    schedule: {
      ja: [
        "4:30 - 篠島港集合",
        "4:45 - 漁船出港、朝日鑑賞",
        "5:00 - 漁業体験開始",
        "5:45 - 帰港、漁獲物整理",
        "6:00 - 朝市見学、競り体験",
        "6:30 - 海の幸試食、解散",
      ],
      en: [
        "4:30 - Meet at Shinojima Port",
        "4:45 - Boat departure, sunrise viewing",
        "5:00 - Fishing experience begins",
        "5:45 - Return to port, organize catch",
        "6:00 - Morning market tour, auction experience",
        "6:30 - Seafood tasting, dismissal",
      ],
    },
    images: [
      "/early-morning-fish-market-auction-in-japanese-fish.jpg",
      "/fishermen-working-with-traditional-nets-on-boat-de.jpg",
      "/fresh-seafood-cooking-on-boat-with-ocean-view.jpg",
    ],
  }

  const images = [
    {
      src: experience.images[0],
      alt: language === "ja" ? "早朝の漁船出港" : "Early morning boat departure",
    },
    {
      src: experience.images[1],
      alt: language === "ja" ? "朝市での魚の競り" : "Fish auction at morning market",
    },
    {
      src: experience.images[2],
      alt: language === "ja" ? "新鮮な漁獲物" : "Fresh catch sorting",
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
                  <Sunrise className="h-5 w-5 text-gray-400 mr-2" />
                  <span>{language === "ja" ? "早朝4:30開始" : "Starts 4:30 AM"}</span>
                </div>
                <div className="flex items-center">
                  <Fish className="h-5 w-5 text-gray-400 mr-2" />
                  <span>{language === "ja" ? "朝市見学" : "Market tour"}</span>
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
                    <p className="font-semibold">{language === "ja" ? "篠島港" : "Shinojima Port"}</p>
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
                  <li>
                    •{" "}
                    {language === "ja"
                      ? "早朝4:30集合のため、前日宿泊推奨"
                      : "Overnight stay recommended due to 4:30 AM start"}
                  </li>
                  <li>
                    • {language === "ja" ? "天候により内容変更の可能性あり" : "Content may change due to weather"}
                  </li>
                  <li>• {language === "ja" ? "動きやすい服装でお越しください" : "Please wear comfortable clothing"}</li>
                  <li>
                    • {language === "ja" ? "酔い止め薬の持参をお勧めします" : "Motion sickness medication recommended"}
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
