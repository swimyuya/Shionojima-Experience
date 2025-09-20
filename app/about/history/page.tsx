import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Calendar, Scroll, Crown, Anchor, Waves } from "lucide-react"

const historicalPeriods = [
  {
    period: "古代〜平安時代",
    years: "〜1185年",
    icon: Scroll,
    title: "島の起源と神饌文化の始まり",
    description:
      "篠島の歴史は古く、縄文時代から人々が住んでいたとされています。平安時代には既に伊勢神宮への鯛の奉納が始まっていたと考えられています。",
    highlights: ["縄文時代の貝塚遺跡の発見", "伊勢神宮への鯛奉納の起源", "海上交通の要所としての発展"],
  },
  {
    period: "鎌倉〜室町時代",
    years: "1185年〜1573年",
    icon: Crown,
    title: "武家政権下での発展",
    description:
      "鎌倉幕府、室町幕府の時代を通じて、篠島は海上交通の要所として重要な役割を果たしました。この時期に漁業技術も大きく発達しました。",
    highlights: ["定置網漁法の確立", "海上交通の拠点として繁栄", "神饌文化の制度化"],
  },
  {
    period: "江戸時代",
    years: "1603年〜1868年",
    icon: Anchor,
    title: "漁業の黄金時代",
    description:
      "江戸時代は篠島漁業の黄金時代でした。尾張藩の保護下で漁業が発達し、おんべ鯛の奉納も制度として確立されました。",
    highlights: ["尾張藩による漁業保護政策", "おんべ鯛奉納の制度確立", "島内人口の増加と繁栄"],
  },
  {
    period: "明治〜昭和初期",
    years: "1868年〜1945年",
    icon: Calendar,
    title: "近代化と伝統の継承",
    description:
      "明治維新後も篠島は伝統的な漁業を継続しながら、近代的な漁業技術を導入。戦前まで安定した発展を続けました。",
    highlights: ["近代漁業技術の導入", "教育制度の整備", "伝統文化の保護と継承"],
  },
  {
    period: "戦後〜現代",
    years: "1945年〜現在",
    icon: Waves,
    title: "復興と新たな挑戦",
    description:
      "戦後復興を経て、篠島は持続可能な漁業と観光業の両立を目指しています。伝統文化を活かした体験観光に力を入れています。",
    highlights: ["戦後復興と漁業の再建", "観光業の発展", "文化体験プログラムの開始"],
  },
]

const culturalTraditions = [
  {
    title: "おんべ鯛奉納",
    description: "毎年10月の伊勢神宮神嘗祭に合わせて行われる、篠島最大の神事。約1,000年以上続く伝統。",
    significance: "伊勢神宮の神饌として奉納される鯛は、篠島でのみ調製される特別なもの。",
  },
  {
    title: "定置網漁",
    description: "篠島の主要な漁法。海の流れを利用した持続可能な漁業方法として受け継がれている。",
    significance: "環境に優しく、魚の生態系を保護しながら行う伝統的漁法。",
  },
  {
    title: "島の祭り",
    description: "春祭り、夏祭りなど、季節ごとに行われる島民総出の祭り。コミュニティの結束を深める。",
    significance: "島民のアイデンティティと絆を強める重要な文化的行事。",
  },
]

export default function HistoryPage() {
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
            <Link href="/about" className="hover:text-primary">
              篠島について
            </Link>
            <span>/</span>
            <span className="text-foreground">歴史</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/historical-shinojima-island-traditional-fishing-vi.jpg')`,
            }}
          >
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">篠島の歴史</h1>
            <p className="text-xl md:text-2xl text-balance opacity-90">1000年以上続く神饌文化と漁業の歴史</p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          {/* Back Button */}
          <div className="mb-8">
            <Button variant="ghost" asChild>
              <Link href="/about">
                <ArrowLeft className="h-4 w-4 mr-2" />
                篠島についてに戻る
              </Link>
            </Button>
          </div>

          {/* Introduction */}
          <section className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold mb-6">篠島の歩み</h2>
            <p className="text-lg text-muted-foreground text-balance">
              篠島の歴史は古く、縄文時代から人々が住み、海の恵みとともに生きてきました。
              特に伊勢神宮への「おんべ鯛」奉納は1000年以上続く神聖な伝統として、
              島の文化とアイデンティティの中核を成しています。
            </p>
          </section>

          {/* Historical Timeline */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">歴史年表</h2>
            <div className="space-y-8">
              {historicalPeriods.map((period, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
                      <div className="bg-primary text-primary-foreground p-6 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-3">
                          <period.icon className="h-6 w-6" />
                          <Badge variant="secondary" className="bg-primary-foreground text-primary">
                            {period.years}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold">{period.period}</h3>
                      </div>
                      <div className="p-6 lg:col-span-3">
                        <h4 className="text-lg font-semibold mb-3">{period.title}</h4>
                        <p className="text-muted-foreground mb-4">{period.description}</p>
                        <div>
                          <h5 className="font-medium mb-2">主な出来事・特徴:</h5>
                          <ul className="space-y-1">
                            {period.highlights.map((highlight, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Cultural Traditions */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">受け継がれる文化</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {culturalTraditions.map((tradition, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{tradition.title}</h3>
                    <p className="text-muted-foreground mb-4">{tradition.description}</p>
                    <div className="bg-muted/50 p-3 rounded">
                      <p className="text-sm font-medium text-primary">文化的意義</p>
                      <p className="text-sm text-muted-foreground">{tradition.significance}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Ombe-tai Deep Dive */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">おんべ鯛の歴史と意義</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    「おんべ鯛」は篠島の最も重要な文化的伝統です。毎年10月に行われる伊勢神宮の神嘗祭において、
                    篠島で獲れた鯛が神饌として奉納されます。
                  </p>
                  <p>
                    この伝統は平安時代から続いているとされ、篠島の漁師たちは代々この神聖な役割を担ってきました。
                    鯛は特別な方法で調理・保存され、神宮まで運ばれます。
                  </p>
                  <p>
                    現在でも島民にとって最も重要な年中行事であり、島のアイデンティティの核となっています。
                    この文化を通じて、篠島は日本の神道文化と深く結びついた特別な場所として位置づけられています。
                  </p>
                </div>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/sacred-japanese-sea-bream-preparation-ceremony-wit.jpg')`,
                  }}
                />
              </div>
            </div>
          </section>

          {/* Modern Preservation Efforts */}
          <section className="mb-16 bg-muted/30 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8">文化継承への取り組み</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground text-center mb-8">
                篠島では伝統文化を次世代に継承するため、様々な取り組みを行っています。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">教育プログラム</h3>
                  <p className="text-sm text-muted-foreground">
                    島の子どもたちに伝統的な漁業技術や文化の意義を教える教育プログラムを実施。
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">体験観光</h3>
                  <p className="text-sm text-muted-foreground">
                    訪問者に本物の島の暮らしと文化を体験してもらうことで、文化の価値を広く伝える。
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">記録保存</h3>
                  <p className="text-sm text-muted-foreground">
                    伝統的な技術や知識を映像や文書で記録し、将来世代のために保存。
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">地域連携</h3>
                  <p className="text-sm text-muted-foreground">
                    他の地域や研究機関と連携し、文化保護の取り組みを強化。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-6">篠島の歴史を体験しませんか？</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              1000年以上続く伝統文化を、実際に体験することで深く理解することができます。
              篠島でしか味わえない特別な文化体験をお楽しみください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/experiences?category=文化・歴史">文化体験を見る</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">篠島について</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
