"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, MapPin, Star, ChevronLeft, Mountain, Torus as Torii } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export default function Experience5Page() {
  const { language, t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState(0)

  const experience = {
    id: 5,
    title: {
      ja: "篠島神社参拝と歴史散策",
      en: "Shinojima Shrine Visit and Historical Walk",
    },
    subtitle: {
      ja: "島の歴史と文化を巡る神聖な散策体験",
      en: "Sacred walking experience through island history and culture",
    },
    price: 3200,
    duration: {
      ja: "1.5時間",
      en: "1.5 hours",
    },
    capacity: 20,
    rating: 4.4,
    reviews: 156,
    category: {
      ja: "文化体験",
      en: "Cultural Experience",
    },
    description: {
      ja: "篠島神社への参拝と島内の歴史的スポットを巡る散策ツアーです。地元ガイドが島の歴史や伝説、文化について詳しく解説します。",
      en: "A walking tour visiting Shinojima Shrine and historical spots around the island. Local guides provide detailed explanations of island history, legends, and culture.",
    },
    highlights: {
      ja: [
        "篠島神社での正式参拝",
        "島の歴史と伝説の解説",
        "古い町並みと史跡巡り",
        "絶景ポイントでの記念撮影",
        "地元ガイドによる文化解説",
      ],
      en: [
        "Formal worship at Shinojima Shrine",
        "Explanation of island history and legends",
        "Tour of old townscape and historical sites",
        "Photo opportunities at scenic spots",
        "Cultural commentary by local guides",
      ],
    },
    included: {
      ja: ["ガイド料", "神社参拝料", "史跡入場料", "記念品", "散策マップ"],
      en: ["Guide fee", "Shrine worship fee", "Historical site entrance fees", "Souvenir", "Walking map"],
    },
    schedule: {
      ja: [
        "9:00 - 篠島港集合",
        "9:15 - 篠島神社参拝",
        "9:45 - 古い町並み散策",
        "10:00 - 史跡巡り",
        "10:15 - 展望台で絶景鑑賞",
        "10:30 - 解散",
      ],
      en: [
        "9:00 - Meet at Shinojima Port",
        "9:15 - Shinojima Shrine worship",
        "9:45 - Old townscape walk",
        "10:00 - Historical sites tour",
        "10:15 - Scenic viewing at observatory",
        "10:30 - Dismissal",
      ],
    },
    images: [
      "/traditional-japanese-shrine-on-shinojima-island-with.jpg",
      "/historic-japanese-townscape-with-traditional-buildi.jpg",
      "/scenic-coastal-view-from-shinojima-island-observato.jpg",
    ],
  }

  const images = [
    {
      src: experience.images[0],
      alt: language === "ja" ? "篠島神社" : "Shinojima Shrine",
    },
    {
      src: experience.images[1],
      alt: language === "ja" ? "歴史的町並み" : "Historic townscape",
    },
    {
      src: experience.images[2],
      alt: language === "ja" ? "展望台からの景色" : "View from observatory",
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
                  <Torii className="h-5 w-5 text-gray-400 mr-2" />
                  <span>{language === "ja" ? "神社参拝" : "Shrine visit"}</span>
                </div>
                <div className="flex items-center">
                  <Mountain className="h-5 w-5 text-gray-400 mr-2" />
                  <span>{language === "ja" ? "展望台" : "Observatory"}</span>
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
                    • {language === "ja" ? "歩きやすい靴でお越しください" : "Please wear comfortable walking shoes"}
                  </li>
                  <li>• {language === "ja" ? "神社では帽子を脱いでください" : "Please remove hats at the shrine"}</li>
                  <li>• {language === "ja" ? "写真撮影は指定場所のみ" : "Photography only at designated areas"}</li>
                  <li>
                    •{" "}
                    {language === "ja" ? "雨天時は内容を変更する場合があります" : "Content may change in rainy weather"}
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
