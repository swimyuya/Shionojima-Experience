"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { CheckCircle, Calendar, Clock, Users, Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

// Mock confirmation data for experience 6
const confirmationData = {
  bookingId: "SHN-2025-0006",
  experience: {
    id: "6",
    title: {
      ja: "海女文化体験 - 素潜りと海藻採取",
      en: "Ama Diver Culture Experience - Free Diving & Seaweed Harvesting",
    },
    price: 9800,
    duration: { ja: "3.5時間", en: "3.5 hours" },
    category: { ja: "漁業体験", en: "Fishing Experience" },
    location: { ja: "篠島海女小屋", en: "Shinojima Ama Hut" },
    host: { ja: "篠島海女組合", en: "Shinojima Ama Divers Association" },
  },
  selectedDate: { ja: "2025年1月15日", en: "January 15, 2025" },
  selectedTime: "09:00",
  participants: { adults: 2, children: 0 },
  totalPrice: 19600,
  customer: {
    name: "山田 太郎",
    email: "yamada@example.com",
    phone: "090-1234-5678",
  },
  meetingPoint: { ja: "篠島海女小屋", en: "Shinojima Ama Hut" },
  contactInfo: {
    phone: "0569-67-6666",
    email: "info@shinojima-ama.jp",
  },
}

export default function BookingConfirmationPage() {
  const { language, t } = useLanguage()

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />

      <div className="pt-20">
        <div className="container mx-auto px-4 py-12">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-green-600 mb-2">{t.bookingConfirmed}!</h1>
            <p className="text-muted-foreground">
              {language === "ja"
                ? `確認メールを ${confirmationData.customer.email} に送信いたします`
                : `Confirmation email will be sent to ${confirmationData.customer.email}`}
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Booking Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  {language === "ja" ? "予約詳細" : "Booking Details"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">{t.bookingNumber}</p>
                  <p className="font-mono text-lg font-semibold">{confirmationData.bookingId}</p>
                </div>

                <Separator />

                <div>
                  <Badge className="mb-2">{confirmationData.experience.category[language]}</Badge>
                  <h3 className="font-semibold text-lg">{confirmationData.experience.title[language]}</h3>
                  <p className="text-sm text-muted-foreground">
                    {language === "ja" ? "主催: " : "Host: "}
                    {confirmationData.experience.host[language]}
                  </p>
                </div>

                <Separator />

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{confirmationData.selectedDate[language]}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>
                      {confirmationData.selectedTime} {language === "ja" ? "開始" : "start"} (
                      {confirmationData.experience.duration[language]})
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>
                      {language === "ja" ? "大人" : "Adults"}
                      {confirmationData.participants.adults}
                      {language === "ja" ? "名" : ""}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{confirmationData.meetingPoint[language]}</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between font-semibold text-lg">
                  <span>{t.total}</span>
                  <span className="text-primary">
                    {t.yen}
                    {confirmationData.totalPrice.toLocaleString()}
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Important Information */}
            <Card>
              <CardHeader>
                <CardTitle>{language === "ja" ? "重要なご案内" : "Important Information"}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">{language === "ja" ? "集合について" : "Meeting Point"}</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>
                      •{" "}
                      {language === "ja"
                        ? "開始時間の15分前に集合場所にお越しください"
                        : "Please arrive 15 minutes before start time"}
                    </li>
                    <li>
                      • {language === "ja" ? "集合場所: " : "Meeting point: "}
                      {confirmationData.meetingPoint[language]}
                    </li>
                    <li>• {language === "ja" ? "更衣室をご利用いただけます" : "Changing room is available"}</li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-2">{language === "ja" ? "持ち物・服装" : "What to Bring"}</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>
                      • {language === "ja" ? "水着（ウェットスーツ貸出可能）" : "Swimsuit (wetsuit rental available)"}
                    </li>
                    <li>• {language === "ja" ? "タオル・着替え" : "Towel and change of clothes"}</li>
                    <li>• {language === "ja" ? "日焼け止め（海に優しいもの）" : "Sunscreen (reef-safe)"}</li>
                    <li>• {language === "ja" ? "飲み物" : "Water bottle"}</li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-2">{language === "ja" ? "安全について" : "Safety Information"}</h4>
                  <p className="text-sm text-muted-foreground">
                    {language === "ja"
                      ? "経験豊富な海女さんが指導します。泳げない方でも浅瀬での体験が可能です。安全装備は全て貸出いたします。"
                      : "Experienced ama divers will provide instruction. Even non-swimmers can participate in shallow water. All safety equipment is provided."}
                  </p>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-2">{language === "ja" ? "お問い合わせ" : "Contact"}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{confirmationData.contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>{confirmationData.contactInfo.email}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="text-center mt-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/experiences">{language === "ja" ? "他の体験を見る" : "View Other Experiences"}</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/">{language === "ja" ? "ホームに戻る" : "Return Home"}</Link>
              </Button>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
              <div className="flex items-start gap-2">
                <div className="text-blue-600 text-sm">ℹ️</div>
                <div className="text-sm text-blue-800">
                  <p className="font-medium mb-1">
                    {language === "ja" ? "テスト予約システムについて" : "About Test Booking System"}
                  </p>
                  <p>{t.testBookingNotice}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
