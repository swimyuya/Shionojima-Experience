import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { CheckCircle, Calendar, Clock, Users, Mail, Phone, MapPin } from "lucide-react"

// Mock confirmation data - would come from booking submission
const confirmationData = {
  bookingId: "SHN-2025-0001",
  experience: {
    id: "1",
    title: "伝統漁業体験 - 定置網漁と船上料理",
    price: 8500,
    duration: "4時間",
    category: "漁業体験",
    location: "篠島漁港",
    host: "篠島漁業協同組合",
  },
  selectedDate: "2025年1月15日",
  selectedTime: "06:00",
  participants: {
    adults: 2,
    children: 1,
  },
  totalPrice: 22950,
  customer: {
    name: "山田 太郎",
    email: "yamada@example.com",
    phone: "090-1234-5678",
  },
  meetingPoint: "篠島漁港 第1桟橋",
  contactInfo: {
    phone: "0569-67-2111",
    email: "info@shinojima-gyokyo.jp",
  },
}

export default function BookingConfirmationPage() {
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
            <h1 className="text-3xl font-bold text-green-600 mb-2">予約が完了しました！</h1>
            <p className="text-muted-foreground">確認メールを {confirmationData.customer.email} に送信いたします</p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Booking Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  予約詳細
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">予約番号</p>
                  <p className="font-mono text-lg font-semibold">{confirmationData.bookingId}</p>
                </div>

                <Separator />

                <div>
                  <Badge className="mb-2">{confirmationData.experience.category}</Badge>
                  <h3 className="font-semibold text-lg">{confirmationData.experience.title}</h3>
                  <p className="text-sm text-muted-foreground">主催: {confirmationData.experience.host}</p>
                </div>

                <Separator />

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{confirmationData.selectedDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>
                      {confirmationData.selectedTime} 開始 ({confirmationData.experience.duration})
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>
                      大人{confirmationData.participants.adults}名
                      {confirmationData.participants.children > 0 &&
                        `, 子供${confirmationData.participants.children}名`}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{confirmationData.meetingPoint}</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between font-semibold text-lg">
                  <span>合計金額</span>
                  <span className="text-primary">¥{confirmationData.totalPrice.toLocaleString()}</span>
                </div>
              </CardContent>
            </Card>

            {/* Important Information */}
            <Card>
              <CardHeader>
                <CardTitle>重要なご案内</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">集合について</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• 開始時間の15分前に集合場所にお越しください</li>
                    <li>• 集合場所: {confirmationData.meetingPoint}</li>
                    <li>• 遅刻される場合は必ずご連絡ください</li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-2">持ち物・服装</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• 動きやすい服装（汚れても良いもの）</li>
                    <li>• 滑りにくい靴（サンダル不可）</li>
                    <li>• 帽子・日焼け止め</li>
                    <li>• タオル・着替え</li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-2">天候について</h4>
                  <p className="text-sm text-muted-foreground">
                    悪天候により体験が中止となる場合は、前日の18:00までにご連絡いたします。
                    中止の場合は全額返金いたします。
                  </p>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-2">お問い合わせ</h4>
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
                <Link href="/experiences">他の体験を見る</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/">ホームに戻る</Link>
              </Button>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
              <div className="flex items-start gap-2">
                <div className="text-blue-600 text-sm">ℹ️</div>
                <div className="text-sm text-blue-800">
                  <p className="font-medium mb-1">テスト予約システムについて</p>
                  <p>これはデモンストレーション用の予約完了画面です。実際の予約は行われておりません。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
