"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, CreditCard, Shield, Calendar, Users, Clock } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

// Mock booking data - would come from previous page/state management
const bookingData = {
  experience: {
    id: "1",
    title: "伝統漁業体験 - 定置網漁と船上料理",
    price: 8500,
    duration: "4時間",
    category: "漁業体験",
  },
  selectedDate: "2025年1月15日",
  selectedTime: "06:00",
  participants: {
    adults: 2,
    children: 1,
  },
  totalPrice: 22950,
}

interface BookingFormClientProps {
  experienceId: string
}

export function BookingFormClient({ experienceId }: BookingFormClientProps) {
  const { language, t } = useLanguage()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle booking submission
    console.log("Booking submitted:", { ...bookingData, customerInfo: formData })
    window.location.href = `/experiences/${bookingData.experience.id}/booking/confirmation`
  }

  const isFormValid = formData.firstName && formData.lastName && formData.email && formData.phone

  return (
    <>
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
          <Link href={`/experiences/${bookingData.experience.id}`} className="hover:text-primary">
            {language === "ja" ? "体験詳細" : "Experience Details"}
          </Link>
          <span>/</span>
          <span className="text-foreground">{t.bookingTitle}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-12">
        <div className="mb-6">
          <Button variant="ghost" size="sm" asChild>
            <Link href={`/experiences/${bookingData.experience.id}`}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              {language === "ja" ? "体験詳細に戻る" : "Back to Experience Details"}
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  {language === "ja" ? "予約情報の入力" : "Enter Booking Information"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">{t.personalInfo}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="lastName">{t.lastName} *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          placeholder={language === "ja" ? "山田" : "Yamada"}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="firstName">{t.firstName} *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          placeholder={language === "ja" ? "太郎" : "Taro"}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      {language === "ja" ? "連絡先情報" : "Contact Information"}
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="email">{t.email} *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="example@email.com"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">{t.phone} *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder={language === "ja" ? "090-1234-5678" : "+81-90-1234-5678"}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <Label htmlFor="specialRequests">{t.specialRequests}</Label>
                    <textarea
                      id="specialRequests"
                      value={formData.specialRequests}
                      onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                      placeholder={language === "ja"
                        ? "アレルギーや特別な配慮が必要な場合はお書きください"
                        : "Please mention any allergies or special requirements"
                      }
                      className="w-full min-h-[100px] px-3 py-2 border border-input rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>

                  {/* Payment Method */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      {language === "ja" ? "お支払い方法" : "Payment Method"}
                    </h3>
                    <Card className="border-2 border-primary">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <CreditCard className="h-5 w-5 text-primary" />
                          <div>
                            <p className="font-medium">
                              {language === "ja" ? "クレジットカード" : "Credit Card"}
                            </p>
                            <p className="text-sm text-muted-foreground">Visa, Mastercard, JCB, American Express</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-primary mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium mb-2">{t.cancellationPolicy}</p>
                        <ul className="space-y-1 text-muted-foreground">
                          <li>• {language === "ja" ? "7日前まで: 無料キャンセル" : "Up to 7 days: Free cancellation"}</li>
                          <li>• {language === "ja" ? "3-6日前: 50%のキャンセル料" : "3-6 days: 50% cancellation fee"}</li>
                          <li>• {language === "ja" ? "2日前以降: 100%のキャンセル料" : "2 days or less: 100% cancellation fee"}</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Test Booking Disclaimer */}
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                    <div className="flex items-start gap-2">
                      <div className="text-yellow-600 text-sm">⚠️</div>
                      <div className="text-sm text-yellow-800">
                        <p className="font-medium mb-1">
                          {language === "ja" ? "テスト予約システムについて" : "About Test Booking System"}
                        </p>
                        <p>
                          {language === "ja"
                            ? "これはデモンストレーション用の予約システムです。実際の予約は行われませんので、ご注意ください。"
                            : "This is a demonstration booking system. No actual reservations will be made."
                          }
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={!isFormValid}>
                    {t.confirmBooking}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card>
                <CardHeader>
                  <CardTitle>{t.bookingTitle}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Experience Details */}
                  <div>
                    <Badge className="mb-2">
                      {language === "ja" ? bookingData.experience.category :
                        bookingData.experience.category === "漁業体験" ? "Fishing Experience" : bookingData.experience.category
                      }
                    </Badge>
                    <h3 className="font-semibold text-lg mb-2">
                      {language === "ja" ? bookingData.experience.title :
                        "Traditional Fishing Experience - Fixed Net Fishing & Onboard Cooking"
                      }
                    </h3>
                  </div>

                  <Separator />

                  {/* Booking Details */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>
                        {language === "ja" ? bookingData.selectedDate : "January 15, 2025"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>
                        {bookingData.selectedTime} {language === "ja" ? "開始" : "Start"} ({language === "ja" ? bookingData.experience.duration : "4 hours"})
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>
                        {language === "ja"
                          ? `大人${bookingData.participants.adults}名${bookingData.participants.children > 0 ? `, 子供${bookingData.participants.children}名` : ''}`
                          : `${bookingData.participants.adults} adult${bookingData.participants.adults > 1 ? 's' : ''}${bookingData.participants.children > 0 ? `, ${bookingData.participants.children} child${bookingData.participants.children > 1 ? 'ren' : ''}` : ''}`
                        }
                      </span>
                    </div>
                  </div>

                  <Separator />

                  {/* Price Breakdown */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{t.adults} × {bookingData.participants.adults}</span>
                      <span>
                        ¥{(bookingData.participants.adults * bookingData.experience.price).toLocaleString()}
                      </span>
                    </div>
                    {bookingData.participants.children > 0 && (
                      <div className="flex justify-between text-sm">
                        <span>{t.children} × {bookingData.participants.children}</span>
                        <span>
                          ¥{(bookingData.participants.children * bookingData.experience.price * 0.7).toLocaleString()}
                        </span>
                      </div>
                    )}
                    <Separator />
                    <div className="flex justify-between font-semibold text-lg">
                      <span>{t.total}</span>
                      <span className="text-primary">¥{bookingData.totalPrice.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="text-xs text-muted-foreground bg-muted/50 p-3 rounded">
                    <p className="mb-1">
                      • {language === "ja" ? "予約確定後に確認メールをお送りします" : "Confirmation email will be sent after booking"}
                    </p>
                    <p className="mb-1">
                      • {language === "ja" ? "当日は集合時間の15分前にお越しください" : "Please arrive 15 minutes before the meeting time"}
                    </p>
                    <p>
                      • {language === "ja" ? "天候により体験内容が変更になる場合があります" : "Experience content may change due to weather conditions"}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}