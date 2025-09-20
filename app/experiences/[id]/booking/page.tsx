"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, CreditCard, Shield, Calendar, Users, Clock } from "lucide-react"

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

export default function BookingPage() {
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
    <div className="min-h-screen bg-muted/30">
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
            <Link href={`/experiences/${bookingData.experience.id}`} className="hover:text-primary">
              体験詳細
            </Link>
            <span>/</span>
            <span className="text-foreground">予約確認</span>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-12">
          <div className="mb-6">
            <Button variant="ghost" size="sm" asChild>
              <Link href={`/experiences/${bookingData.experience.id}`}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                体験詳細に戻る
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">予約情報の入力</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">お客様情報</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="lastName">姓 *</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                            placeholder="山田"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="firstName">名 *</Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            placeholder="太郎"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">連絡先情報</h3>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="email">メールアドレス *</Label>
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
                          <Label htmlFor="phone">電話番号 *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            placeholder="090-1234-5678"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Special Requests */}
                    <div>
                      <Label htmlFor="specialRequests">特別なご要望（任意）</Label>
                      <textarea
                        id="specialRequests"
                        value={formData.specialRequests}
                        onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                        placeholder="アレルギーや特別な配慮が必要な場合はお書きください"
                        className="w-full min-h-[100px] px-3 py-2 border border-input rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>

                    {/* Payment Method */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">お支払い方法</h3>
                      <Card className="border-2 border-primary">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3">
                            <CreditCard className="h-5 w-5 text-primary" />
                            <div>
                              <p className="font-medium">クレジットカード</p>
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
                          <p className="font-medium mb-2">キャンセルポリシー</p>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• 7日前まで: 無料キャンセル</li>
                            <li>• 3-6日前: 50%のキャンセル料</li>
                            <li>• 2日前以降: 100%のキャンセル料</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Test Booking Disclaimer */}
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                      <div className="flex items-start gap-2">
                        <div className="text-yellow-600 text-sm">⚠️</div>
                        <div className="text-sm text-yellow-800">
                          <p className="font-medium mb-1">テスト予約システムについて</p>
                          <p>
                            これはデモンストレーション用の予約システムです。実際の予約は行われませんので、ご注意ください。
                          </p>
                        </div>
                      </div>
                    </div>

                    <Button type="submit" className="w-full" size="lg" disabled={!isFormValid}>
                      予約を確定する
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
                    <CardTitle>予約内容</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Experience Details */}
                    <div>
                      <Badge className="mb-2">{bookingData.experience.category}</Badge>
                      <h3 className="font-semibold text-lg mb-2">{bookingData.experience.title}</h3>
                    </div>

                    <Separator />

                    {/* Booking Details */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{bookingData.selectedDate}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>
                          {bookingData.selectedTime} 開始 ({bookingData.experience.duration})
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>
                          大人{bookingData.participants.adults}名
                          {bookingData.participants.children > 0 && `, 子供${bookingData.participants.children}名`}
                        </span>
                      </div>
                    </div>

                    <Separator />

                    {/* Price Breakdown */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>大人 × {bookingData.participants.adults}</span>
                        <span>
                          ¥{(bookingData.participants.adults * bookingData.experience.price).toLocaleString()}
                        </span>
                      </div>
                      {bookingData.participants.children > 0 && (
                        <div className="flex justify-between text-sm">
                          <span>子供 × {bookingData.participants.children}</span>
                          <span>
                            ¥{(bookingData.participants.children * bookingData.experience.price * 0.7).toLocaleString()}
                          </span>
                        </div>
                      )}
                      <Separator />
                      <div className="flex justify-between font-semibold text-lg">
                        <span>合計金額</span>
                        <span className="text-primary">¥{bookingData.totalPrice.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="text-xs text-muted-foreground bg-muted/50 p-3 rounded">
                      <p className="mb-1">• 予約確定後に確認メールをお送りします</p>
                      <p className="mb-1">• 当日は集合時間の15分前にお越しください</p>
                      <p>• 天候により体験内容が変更になる場合があります</p>
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
