"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronLeft, Calendar, Users, Clock, AlertTriangle } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export default function Experience5BookingPage() {
  const { language } = useLanguage()
  const router = useRouter()
  const [formData, setFormData] = useState({
    date: "",
    participants: "1",
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
    agreeToTerms: false,
  })

  const experience = {
    id: 5,
    title: {
      ja: "篠島神社参拝と歴史散策",
      en: "Shinojima Shrine Visit and Historical Walk",
    },
    price: 3200,
    duration: {
      ja: "1.5時間",
      en: "1.5 hours",
    },
    capacity: 20,
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.agreeToTerms) {
      alert(language === "ja" ? "利用規約に同意してください" : "Please agree to the terms and conditions")
      return
    }
    // Redirect to confirmation page
    router.push(`/experiences/${experience.id}/booking/confirmation`)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const totalPrice = Number.parseInt(formData.participants) * experience.price

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
            <Link href={`/experiences/${experience.id}`} className="hover:text-blue-600">
              {experience.title[language]}
            </Link>
            <span>/</span>
            <span className="text-gray-900">{language === "ja" ? "予約" : "Booking"}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          href={`/experiences/${experience.id}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          {language === "ja" ? "体験詳細に戻る" : "Back to Experience Details"}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{language === "ja" ? "予約情報入力" : "Booking Information"}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Date Selection */}
                  <div>
                    <Label htmlFor="date" className="flex items-center mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      {language === "ja" ? "希望日" : "Preferred Date"}
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange("date", e.target.value)}
                      required
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>

                  {/* Participants */}
                  <div>
                    <Label htmlFor="participants" className="flex items-center mb-2">
                      <Users className="h-4 w-4 mr-2" />
                      {language === "ja" ? "参加人数" : "Number of Participants"}
                    </Label>
                    <Select
                      value={formData.participants}
                      onValueChange={(value) => handleInputChange("participants", value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: experience.capacity }, (_, i) => i + 1).map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {language === "ja" ? "名" : "person(s)"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">{language === "ja" ? "お名前" : "Full Name"}</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">{language === "ja" ? "メールアドレス" : "Email Address"}</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">{language === "ja" ? "電話番号" : "Phone Number"}</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                    />
                  </div>

                  {/* Special Requests */}
                  <div>
                    <Label htmlFor="specialRequests">{language === "ja" ? "特別なご要望" : "Special Requests"}</Label>
                    <Textarea
                      id="specialRequests"
                      value={formData.specialRequests}
                      onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                      placeholder={
                        language === "ja"
                          ? "アレルギーや特別な配慮が必要な事項があればお書きください"
                          : "Please mention any allergies or special considerations"
                      }
                      rows={3}
                    />
                  </div>

                  {/* Terms Agreement */}
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                    />
                    <Label htmlFor="terms" className="text-sm leading-relaxed">
                      {language === "ja"
                        ? "利用規約およびキャンセルポリシーに同意します。神社参拝時は帽子を脱ぎ、写真撮影は指定場所のみで行うことを理解しています。"
                        : "I agree to the terms and conditions and cancellation policy. I understand that hats must be removed during shrine visits and photography is only allowed at designated areas."}
                    </Label>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                    {language === "ja" ? "予約を確定する" : "Confirm Booking"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Booking Summary */}
          <div>
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle>{language === "ja" ? "予約内容" : "Booking Summary"}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">{experience.title[language]}</h3>
                  <div className="flex items-center text-sm text-gray-600 mb-1">
                    <Clock className="h-4 w-4 mr-1" />
                    {experience.duration[language]}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-1" />
                    {formData.participants} {language === "ja" ? "名" : "person(s)"}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span>{language === "ja" ? "料金" : "Price"}</span>
                    <span>
                      ¥{experience.price.toLocaleString()} × {formData.participants}
                    </span>
                  </div>
                  <div className="flex justify-between items-center font-bold text-lg">
                    <span>{language === "ja" ? "合計" : "Total"}</span>
                    <span>¥{totalPrice.toLocaleString()}</span>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-blue-800">
                      <p className="font-semibold mb-1">{language === "ja" ? "参拝マナー" : "Worship Etiquette"}</p>
                      <p>
                        {language === "ja"
                          ? "神社参拝時は帽子を脱ぎ、静粛にお参りください。"
                          : "Please remove hats and maintain silence during shrine worship."}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
