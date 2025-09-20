"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { CheckCircle, Calendar, Clock, Users, Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

// Mock confirmation data for experience 1
const confirmationData = {
  bookingId: "SHN-2025-0001",
  experience: {
    id: "1",
    title: {
      ja: "伝統漁業体験 - 定置網漁と船上料理",
      en: "Traditional Fishing Experience - Fixed Net Fishing & Onboard Cooking",
    },
    price: 8500,
    duration: { ja: "4時間", en: "4 hours" },
    category: { ja: "漁業体験", en: "Fishing Experience" },
    location: { ja: "篠島漁港", en: "Shinojima Fishing Port" },
    host: { ja: "篠島漁業協同組合", en: "Shinojima Fisheries Cooperative" },
  },
  selectedDate: { ja: "2025年1月15日", en: "January 15, 2025" },
  selectedTime: "06:00",
  participants: { adults: 2, children: 1 },
  totalPrice: 22950,
  customer: {
    name: "山田 太郎",
    email: "yamada@example.com",
    phone: "090-1234-5678",
  },
  meetingPoint: { ja: "篠島漁港 第1桟橋", en: "Shinojima Fishing Port Pier 1" },
  contactInfo: {
    phone: "0569-67-2111",
    email: "info@shinojima-gyokyo.jp",
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
                      {confirmationData.participants.children > 0 &&
                        `, ${language === "ja" ? "子供" : "Children"}${confirmationData.participants.children}${language === "ja" ? "名" : ""}`}
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
                    <li>
                      •{" "}
                      {language === "ja"
                        ? "遅刻される場合は必ずご連絡ください"
                        : "Please contact us if you will be late"}
                    </li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-2">{language === "ja" ? "持ち物・服装" : "What to Bring"}</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>
                      •{" "}
                      {language === "ja"
                        ? "動きやすい服装（汚れても良いもの）"
                        : "Comfortable clothes (that can get dirty)"}
                    </li>
                    <li>• {language === "ja" ? "滑りにくい靴（サンダル不可）" : "Non-slip shoes (no sandals)"}</li>
                    <li>• {language === "ja" ? "帽子・日焼け止め" : "Hat and sunscreen"}</li>
                    <li>• {language === "ja" ? "タオル・着替え" : "Towel and change of clothes"}</li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-2">{language === "ja" ? "天候について" : "Weather Policy"}</h4>
                  <p className="text-sm text-muted-foreground">
                    {language === "ja"
                      ? "悪天候により体験が中止となる場合は、前日の18:00までにご連絡いたします。中止の場合は全額返金いたします。"
                      : "If the experience is cancelled due to bad weather, we will contact you by 6:00 PM the day before. Full refund will be provided for cancellations."}
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
