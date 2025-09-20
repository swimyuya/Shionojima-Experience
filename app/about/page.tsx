"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Fish, Waves, Mountain, Users } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export default function AboutPage() {
  const { language, t } = useLanguage()

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
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">{t.aboutTitle}</h1>
            <p className="text-xl md:text-2xl text-balance opacity-90">
              {language === "ja"
                ? "伊勢神宮に奉納される神聖な「おんべ鯛」の島"
                : "Sacred island of 'Ombe-tai' offered to Ise Grand Shrine"
              }
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          {/* Introduction */}
          <section className="max-w-4xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">
                {language === "ja" ? "篠島の魅力" : "The Charm of Shinojima"}
              </h2>
              <p className="text-lg text-muted-foreground text-balance">
                {language === "ja"
                  ? "愛知県知多半島の南端に位置する篠島は、面積約0.94km²、人口約1,500人の小さな島です。古くから漁業で栄え、特に伊勢神宮に奉納される神聖な「おんべ鯛」の産地として知られています。"
                  : "Shinojima is a small island with an area of about 0.94 km² and a population of about 1,500, located at the southern tip of the Chita Peninsula in Aichi Prefecture. It has prospered from fishing since ancient times and is particularly known as the source of the sacred 'Ombe-tai' offered to Ise Grand Shrine."
                }
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="text-center p-6">
                <Fish className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">
                  {language === "ja" ? "豊かな漁業" : "Rich Fishery"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === "ja"
                    ? "定置網漁を中心とした伝統的な漁業が今も続いています"
                    : "Traditional fishing methods centered on fixed net fishing continue to this day"
                  }
                </p>
              </Card>
              <Card className="text-center p-6">
                <Waves className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">
                  {language === "ja" ? "神聖な文化" : "Sacred Culture"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === "ja"
                    ? "おんべ鯛の奉納など、神道と深く結びついた文化"
                    : "Culture deeply connected to Shinto, including the offering of Ombe-tai"
                  }
                </p>
              </Card>
              <Card className="text-center p-6">
                <Mountain className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">
                  {language === "ja" ? "美しい自然" : "Beautiful Nature"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === "ja"
                    ? "三河湾の美しい海と豊かな自然環境"
                    : "Beautiful waters of Mikawa Bay and rich natural environment"
                  }
                </p>
              </Card>
              <Card className="text-center p-6">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">
                  {language === "ja" ? "温かい人々" : "Warm People"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === "ja"
                    ? "島民の温かいおもてなしと伝統を大切にする心"
                    : "Warm hospitality of islanders and hearts that cherish tradition"
                  }
                </p>
              </Card>
            </div>
          </section>

          {/* Geography & Access */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  {language === "ja" ? "地理・アクセス" : "Geography & Access"}
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    {language === "ja"
                      ? "篠島は愛知県知多郡南知多町に属し、知多半島の南端から約2.5kmの海上に位置しています。三河湾国定公園の一部として指定されており、美しい自然環境が保護されています。"
                      : "Shinojima belongs to Minamichita Town, Chita District, Aichi Prefecture, and is located about 2.5km offshore from the southern tip of the Chita Peninsula. It is designated as part of Mikawa Bay Quasi-National Park, protecting its beautiful natural environment."
                    }
                  </p>
                  <p>
                    {language === "ja"
                      ? "島へのアクセスは河和港または師崎港から定期船で約20-30分。名古屋市内からは電車とフェリーを乗り継いで約2時間でアクセス可能です。"
                      : "Access to the island is by regular ferry from Kowa Port or Morozaki Port, taking about 20-30 minutes. From downtown Nagoya, it takes about 2 hours by train and ferry connections."
                    }
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">
                      {language === "ja" ? "基本情報" : "Basic Information"}
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li>• {language === "ja" ? "面積" : "Area"}: 0.94km²</li>
                      <li>• {language === "ja" ? "人口" : "Population"}: {language === "ja" ? "約1,500人（2023年現在）" : "Approx. 1,500 people (as of 2023)"}</li>
                      <li>• {language === "ja" ? "周囲" : "Circumference"}: {language === "ja" ? "約5.6km" : "Approx. 5.6km"}</li>
                      <li>• {language === "ja" ? "最高標高" : "Highest elevation"}: 39m</li>
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
                <h2 className="text-3xl font-bold mb-6">
                  {language === "ja" ? "おんべ鯛と神饌文化" : "Ombe-tai and Sacred Food Culture"}
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    {language === "ja"
                      ? "篠島の最も特徴的な文化が「おんべ鯛」の奉納です。毎年10月に行われる伊勢神宮の神嘗祭において、篠島で獲れた鯛が神饌として奉納されます。"
                      : "Shinojima's most characteristic culture is the offering of 'Ombe-tai'. Every October during Ise Grand Shrine's Kanname-sai festival, sea bream caught in Shinojima is offered as sacred food."
                    }
                  </p>
                  <p>
                    {language === "ja"
                      ? "この伝統は約1,000年以上続いており、篠島の漁師たちは代々この神聖な役割を担ってきました。おんべ鯛は特別な方法で調理・保存され、神宮まで運ばれます。"
                      : "This tradition has continued for over 1,000 years, with Shinojima's fishermen carrying out this sacred role for generations. Ombe-tai is prepared and preserved using special methods and transported to the shrine."
                    }
                  </p>
                  <p>
                    {language === "ja"
                      ? "この文化は単なる漁業を超えて、島民のアイデンティティと誇りの源となっており、現在も大切に受け継がれています。"
                      : "This culture goes beyond mere fishing and has become a source of identity and pride for the islanders, and continues to be cherished today."
                    }
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Modern Shinojima */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">
                {language === "ja" ? "現在の篠島" : "Modern Shinojima"}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
                {language === "ja"
                  ? "伝統を大切にしながらも、持続可能な観光業の発展に取り組む篠島。訪れる人々に本物の島の暮らしと文化を体験していただくことで、地域の活性化と文化の継承を目指しています。"
                  : "While cherishing traditions, Shinojima is working on sustainable tourism development. By offering visitors authentic island life and cultural experiences, we aim for regional revitalization and cultural preservation."
                }
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">
                    {language === "ja" ? "持続可能な漁業" : "Sustainable Fishery"}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {language === "ja"
                      ? "環境に配慮した漁業方法を継続し、海の資源を大切に管理しています。"
                      : "Continuing environmentally conscious fishing methods and carefully managing marine resources."
                    }
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">
                    {language === "ja" ? "文化体験観光" : "Cultural Experience Tourism"}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {language === "ja"
                      ? "本物の島の暮らしを体験できる観光プログラムを提供しています。"
                      : "Providing tourism programs where visitors can experience authentic island life."
                    }
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">
                    {language === "ja" ? "地域コミュニティ" : "Local Community"}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {language === "ja"
                      ? "島民同士の結束が強く、温かいコミュニティが形成されています。"
                      : "Strong bonds among islanders form a warm community."
                    }
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-primary text-primary-foreground rounded-lg p-12">
            <h2 className="text-3xl font-bold mb-4">
              {language === "ja" ? "篠島の体験を始めませんか？" : "Ready to Experience Shinojima?"}
            </h2>
            <p className="text-lg mb-8 opacity-90">
              {language === "ja"
                ? "伝統的な漁業体験から神饌文化まで、篠島でしか味わえない特別な体験をご用意しています。"
                : "From traditional fishing experiences to sacred food culture, we offer special experiences that can only be enjoyed in Shinojima."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/experiences">
                  {t.exploreExperiences}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <Link href="/about/history">{t.learnMoreHistory}</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
