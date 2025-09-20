import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Fish, Waves, Mountain, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/beautiful-aerial-view-of-shinojima-island-with-fis.jpg')`,
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">篠島について</h1>
            <p className="text-xl md:text-2xl text-balance opacity-90">伊勢神宮に奉納される神聖な「おんべ鯛」の島</p>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          {/* Introduction */}
          <section className="max-w-4xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">篠島の魅力</h2>
              <p className="text-lg text-muted-foreground text-balance">
                愛知県知多半島の南端に位置する篠島は、面積約0.94km²、人口約1,500人の小さな島です。
                古くから漁業で栄え、特に伊勢神宮に奉納される神聖な「おんべ鯛」の産地として知られています。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="text-center p-6">
                <Fish className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">豊かな漁業</h3>
                <p className="text-sm text-muted-foreground">定置網漁を中心とした伝統的な漁業が今も続いています</p>
              </Card>
              <Card className="text-center p-6">
                <Waves className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">神聖な文化</h3>
                <p className="text-sm text-muted-foreground">おんべ鯛の奉納など、神道と深く結びついた文化</p>
              </Card>
              <Card className="text-center p-6">
                <Mountain className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">美しい自然</h3>
                <p className="text-sm text-muted-foreground">三河湾の美しい海と豊かな自然環境</p>
              </Card>
              <Card className="text-center p-6">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">温かい人々</h3>
                <p className="text-sm text-muted-foreground">島民の温かいおもてなしと伝統を大切にする心</p>
              </Card>
            </div>
          </section>

          {/* Geography & Access */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">地理・アクセス</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    篠島は愛知県知多郡南知多町に属し、知多半島の南端から約2.5kmの海上に位置しています。
                    三河湾国定公園の一部として指定されており、美しい自然環境が保護されています。
                  </p>
                  <p>
                    島へのアクセスは河和港または師崎港から定期船で約20-30分。
                    名古屋市内からは電車とフェリーを乗り継いで約2時間でアクセス可能です。
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">基本情報</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• 面積: 0.94km²</li>
                      <li>• 人口: 約1,500人（2023年現在）</li>
                      <li>• 周囲: 約5.6km</li>
                      <li>• 最高標高: 39m</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/shinojima-island-aerial-map-view-showing-harbors.jpg')`,
                  }}
                />
              </div>
            </div>
          </section>

          {/* Culture & Tradition */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-lg overflow-hidden lg:order-1">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/sacred-japanese-sea-bream-preparation-ceremony-wit.jpg')`,
                  }}
                />
              </div>
              <div className="lg:order-2">
                <h2 className="text-3xl font-bold mb-6">おんべ鯛と神饌文化</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    篠島の最も特徴的な文化が「おんべ鯛」の奉納です。
                    毎年10月に行われる伊勢神宮の神嘗祭において、篠島で獲れた鯛が神饌として奉納されます。
                  </p>
                  <p>
                    この伝統は約1,000年以上続いており、篠島の漁師たちは代々この神聖な役割を担ってきました。
                    おんべ鯛は特別な方法で調理・保存され、神宮まで運ばれます。
                  </p>
                  <p>
                    この文化は単なる漁業を超えて、島民のアイデンティティと誇りの源となっており、
                    現在も大切に受け継がれています。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Modern Shinojima */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">現在の篠島</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
                伝統を大切にしながらも、持続可能な観光業の発展に取り組む篠島。
                訪れる人々に本物の島の暮らしと文化を体験していただくことで、 地域の活性化と文化の継承を目指しています。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">持続可能な漁業</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    環境に配慮した漁業方法を継続し、海の資源を大切に管理しています。
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">文化体験観光</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    本物の島の暮らしを体験できる観光プログラムを提供しています。
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">地域コミュニティ</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    島民同士の結束が強く、温かいコミュニティが形成されています。
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-primary text-primary-foreground rounded-lg p-12">
            <h2 className="text-3xl font-bold mb-4">篠島の体験を始めませんか？</h2>
            <p className="text-lg mb-8 opacity-90">
              伝統的な漁業体験から神饌文化まで、篠島でしか味わえない特別な体験をご用意しています。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/experiences">
                  体験を探す
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <Link href="/about/history">歴史を詳しく見る</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
