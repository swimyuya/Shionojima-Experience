"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Calendar, Scroll, Crown, Anchor, Waves } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

const historicalPeriods = {
  ja: [
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
  ],
  en: [
    {
      period: "Ancient - Heian Period",
      years: "~1185",
      icon: Scroll,
      title: "Island Origins and Beginning of Sacred Food Culture",
      description:
        "Shinojima has an ancient history, with people believed to have lived here since the Jomon period. The offering of sea bream to Ise Grand Shrine is thought to have begun during the Heian period.",
      highlights: ["Discovery of Jomon period shell mound ruins", "Origins of sea bream offerings to Ise Grand Shrine", "Development as a maritime traffic hub"],
    },
    {
      period: "Kamakura - Muromachi Period",
      years: "1185-1573",
      icon: Crown,
      title: "Development Under Warrior Government",
      description:
        "Through the Kamakura and Muromachi shogunate periods, Shinojima played an important role as a maritime traffic hub. Fishing techniques also developed significantly during this time.",
      highlights: ["Establishment of fixed net fishing methods", "Prosperity as a maritime hub", "Institutionalization of sacred food culture"],
    },
    {
      period: "Edo Period",
      years: "1603-1868",
      icon: Anchor,
      title: "Golden Age of Fishery",
      description:
        "The Edo period was the golden age of Shinojima fishery. Under the protection of the Owari Domain, fishery developed and the Ombe-tai offering was established as an institution.",
      highlights: ["Fishery protection policies by Owari Domain", "Institutional establishment of Ombe-tai offerings", "Population growth and prosperity on the island"],
    },
    {
      period: "Meiji - Early Showa",
      years: "1868-1945",
      icon: Calendar,
      title: "Modernization and Tradition Preservation",
      description:
        "Even after the Meiji Restoration, Shinojima continued traditional fishery while introducing modern fishing techniques. Stable development continued until before the war.",
      highlights: ["Introduction of modern fishing techniques", "Establishment of educational systems", "Protection and inheritance of traditional culture"],
    },
    {
      period: "Post-war - Present",
      years: "1945-Present",
      icon: Waves,
      title: "Reconstruction and New Challenges",
      description:
        "After post-war reconstruction, Shinojima aims for a balance between sustainable fishery and tourism. Focusing on experiential tourism that utilizes traditional culture.",
      highlights: ["Post-war reconstruction and fishery rebuilding", "Tourism development", "Start of cultural experience programs"],
    },
  ],
}

const culturalTraditions = {
  ja: [
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
  ],
  en: [
    {
      title: "Ombe-tai Offering",
      description: "Shinojima's largest sacred ritual performed annually in October for Ise Grand Shrine's Kanname-sai. A tradition continuing for over 1,000 years.",
      significance: "The sea bream offered as sacred food to Ise Grand Shrine is specially prepared only in Shinojima.",
    },
    {
      title: "Fixed Net Fishing",
      description: "Shinojima's primary fishing method. Inherited as a sustainable fishing method utilizing ocean currents.",
      significance: "An environmentally friendly traditional fishing method that protects fish ecosystems.",
    },
    {
      title: "Island Festivals",
      description: "Seasonal festivals with full island participation, including spring and summer festivals. Deepens community solidarity.",
      significance: "Important cultural events that strengthen islanders' identity and bonds.",
    },
  ],
}

export default function HistoryPage() {
  const { language, t } = useLanguage()
  const periods = historicalPeriods[language]
  const traditions = culturalTraditions[language]

  return (
    <div className="min-h-screen">
      <Header />

      <div className="pt-20">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              {t.home}
            </Link>
            <span>/</span>
            <Link href="/about" className="hover:text-primary">
              {t.aboutShinojima}
            </Link>
            <span>/</span>
            <span className="text-foreground">{t.history}</span>
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">{t.historyTitle}</h1>
            <p className="text-xl md:text-2xl text-balance opacity-90">
              {language === "ja"
                ? "1000年以上続く神饌文化と漁業の歴史"
                : "Over 1000 years of sacred food culture and fishing history"
              }
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          {/* Back Button */}
          <div className="mb-8">
            <Button variant="ghost" asChild>
              <Link href="/about">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {language === "ja" ? "篠島についてに戻る" : "Back to About Shinojima"}
              </Link>
            </Button>
          </div>

          {/* Introduction */}
          <section className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold mb-6">
              {language === "ja" ? "篠島の歩み" : "The Journey of Shinojima"}
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              {language === "ja"
                ? "篠島の歴史は古く、縄文時代から人々が住み、海の恵みとともに生きてきました。特に伊勢神宮への「おんべ鯛」奉納は1000年以上続く神聖な伝統として、島の文化とアイデンティティの中核を成しています。"
                : "Shinojima has an ancient history, with people living here since the Jomon period and thriving alongside the ocean's bounty. The offering of 'Ombe-tai' to Ise Grand Shrine, a sacred tradition continuing for over 1000 years, forms the core of the island's culture and identity."
              }
            </p>
          </section>

          {/* Historical Timeline */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              {language === "ja" ? "歴史年表" : "Historical Timeline"}
            </h2>
            <div className="space-y-8">
              {periods.map((period, index) => (
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
                          <h5 className="font-medium mb-2">
                            {language === "ja" ? "主な出来事・特徴:" : "Key Events & Features:"}
                          </h5>
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
            <h2 className="text-3xl font-bold text-center mb-12">
              {language === "ja" ? "受け継がれる文化" : "Inherited Culture"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {traditions.map((tradition, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{tradition.title}</h3>
                    <p className="text-muted-foreground mb-4">{tradition.description}</p>
                    <div className="bg-muted/50 p-3 rounded">
                      <p className="text-sm font-medium text-primary">
                        {language === "ja" ? "文化的意義" : "Cultural Significance"}
                      </p>
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
                <h2 className="text-3xl font-bold mb-6">
                  {language === "ja" ? "おんべ鯛の歴史と意義" : "History and Significance of Ombe-tai"}
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    {language === "ja"
                      ? "「おんべ鯛」は篠島の最も重要な文化的伝統です。毎年10月に行われる伊勢神宮の神嘗祭において、篠島で獲れた鯛が神饌として奉納されます。"
                      : "'Ombe-tai' is Shinojima's most important cultural tradition. Every October during Ise Grand Shrine's Kanname-sai festival, sea bream caught in Shinojima is offered as sacred food."
                    }
                  </p>
                  <p>
                    {language === "ja"
                      ? "この伝統は平安時代から続いているとされ、篠島の漁師たちは代々この神聖な役割を担ってきました。鯛は特別な方法で調理・保存され、神宮まで運ばれます。"
                      : "This tradition is said to have continued since the Heian period, with Shinojima's fishermen carrying out this sacred role for generations. The sea bream is prepared and preserved using special methods and transported to the shrine."
                    }
                  </p>
                  <p>
                    {language === "ja"
                      ? "現在でも島民にとって最も重要な年中行事であり、島のアイデンティティの核となっています。この文化を通じて、篠島は日本の神道文化と深く結びついた特別な場所として位置づけられています。"
                      : "Even today, it remains the most important annual event for islanders and forms the core of the island's identity. Through this culture, Shinojima is positioned as a special place deeply connected to Japan's Shinto culture."
                    }
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
            <h2 className="text-3xl font-bold text-center mb-8">
              {language === "ja" ? "文化継承への取り組み" : "Cultural Preservation Efforts"}
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground text-center mb-8">
                {language === "ja"
                  ? "篠島では伝統文化を次世代に継承するため、様々な取り組みを行っています。"
                  : "Shinojima conducts various initiatives to preserve traditional culture for future generations."
                }
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">
                    {language === "ja" ? "教育プログラム" : "Education Programs"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === "ja"
                      ? "島の子どもたちに伝統的な漁業技術や文化の意義を教える教育プログラムを実施。"
                      : "Implementing educational programs that teach island children traditional fishing techniques and cultural significance."
                    }
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">
                    {language === "ja" ? "体験観光" : "Experience Tourism"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === "ja"
                      ? "訪問者に本物の島の暮らしと文化を体験してもらうことで、文化の価値を幅広く伝える。"
                      : "Sharing the value of culture widely by offering visitors authentic island life and cultural experiences."
                    }
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">
                    {language === "ja" ? "記録保存" : "Documentation & Preservation"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === "ja"
                      ? "伝統的な技術や知識を映像や文書で記録し、将来世代のために保存。"
                      : "Recording traditional techniques and knowledge through video and documents, preserving them for future generations."
                    }
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">
                    {language === "ja" ? "地域連携" : "Regional Collaboration"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === "ja"
                      ? "他の地域や研究機関と連携し、文化保護の取り組みを強化。"
                      : "Collaborating with other regions and research institutions to strengthen cultural preservation efforts."
                    }
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              {language === "ja" ? "篠島の歴史を体験しませんか？" : "Experience the History of Shinojima?"}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              {language === "ja"
                ? "1000年以上続く伝統文化を、実際に体験することで深く理解することができます。篠島でしか味わえない特別な文化体験をお楽しみください。"
                : "You can deeply understand traditional culture that has continued for over 1000 years through actual experience. Enjoy special cultural experiences that can only be tasted in Shinojima."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href={`/experiences?category=${encodeURIComponent(t.cultureHistory)}`}>
                  {language === "ja" ? "文化体験を見る" : "View Cultural Experiences"}
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">{t.aboutShinojima}</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
