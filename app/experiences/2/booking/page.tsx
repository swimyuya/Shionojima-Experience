"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Users, MapPin, CreditCard, AlertTriangle } from "lucide-react"

const experienceData = {
  id: "2",
  title: "神饌文化体験 - おんべ鯛の調理と奉納",
  price: 12000,
  duration: "3時間",
  location: "篠島神社",
  category: "文化・歴史",
}

export default function Experience2BookingPage() {
  const [formData, setFormData] = useState({
    selectedDate: "2024-12-25",
    selectedTime: "09:00",
    adultCount: 2,
    childCount: 0,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
    paymentMethod: "",
  })

  const totalPrice = formData.adultCount * experienceData.price + formData.childCount * experienceData.price * 0.7

  const handleInputChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Redirect to confirmation page
    window.location.href = `/experiences/${experienceData.id}/booking/confirmation`
  }

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
            <Link href={`/experiences/${experienceData.id}`} className="hover:text-primary">
              {experienceData.title}
            </Link>
            <span>/</span>
            <span className="text-foreground">予約</span>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-12">
          <div className="flex items-center gap-4 mb-8">
            <Button variant="ghost" size="sm" asChild>
              <Link href={`/experiences/${experienceData.id}`}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                戻る
              </Link>
            </Button>
            <h1 className="text-3xl font-bold">予約内容の確認</h1>
          </div>

          {/* Test Booking Alert */}
          <Alert className="mb-8">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>テスト予約システム:</strong>{" "}
              これはデモ用の予約画面です。実際の予約は行われませんので、ご了承ください。
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Experience Summary */}
                <Card>
                  <CardHeader>
                    <CardTitle>体験内容</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-lg">{experienceData.title}</h3>
                        <Badge className="mt-2">{experienceData.category}</Badge>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{formData.selectedDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>
                            {formData.selectedTime} ({experienceData.duration})
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>
                            大人{formData.adultCount}名{formData.childCount > 0 ? `, 子供${formData.childCount}名` : ""}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>{experienceData.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Personal Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>お客様情報</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="lastName">姓 *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="firstName">名 *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">メールアドレス *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
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
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="specialRequests">特別なご要望・アレルギー等</Label>
                      <Textarea
                        id="specialRequests"
                        value={formData.specialRequests}
                        onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                        placeholder="食物アレルギーや特別なご要望がございましたらご記入ください"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Method */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5" />
                      お支払い方法
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Select
                      value={formData.paymentMethod}
                      onValueChange={(value) => handleInputChange("paymentMethod", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="お支払い方法を選択してください" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="credit">クレジットカード</SelectItem>
                        <SelectItem value="bank">銀行振込</SelectItem>
                        <SelectItem value="onsite">現地払い</SelectItem>
                      </SelectContent>
                    </Select>

                    <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">※ テスト環境のため、実際の決済は行われません。</p>
                    </div>
                  </CardContent>
                </Card>

                <Button type="submit" size="lg" className="w-full">
                  予約を確定する
                </Button>
              </form>
            </div>

            {/* Booking Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card>
                  <CardHeader>
                    <CardTitle>予約内容</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium">{experienceData.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{experienceData.category}</p>
                    </div>

                    <Separator />

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>日時:</span>
                        <span>
                          {formData.selectedDate} {formData.selectedTime}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>所要時間:</span>
                        <span>{experienceData.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>参加人数:</span>
                        <span>
                          大人{formData.adultCount}名{formData.childCount > 0 ? `, 子供${formData.childCount}名` : ""}
                        </span>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>大人 × {formData.adultCount}</span>
                        <span>¥{(formData.adultCount * experienceData.price).toLocaleString()}</span>
                      </div>
                      {formData.childCount > 0 && (
                        <div className="flex justify-between">
                          <span>子供 × {formData.childCount}</span>
                          <span>¥{(formData.childCount * experienceData.price * 0.7).toLocaleString()}</span>
                        </div>
                      )}
                      <Separator />
                      <div className="flex justify-between font-semibold text-base">
                        <span>合計金額</span>
                        <span>¥{totalPrice.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="text-xs text-muted-foreground">
                      ※ キャンセル料について: 前日まで無料、当日キャンセルは50%の料金が発生します。
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
