"use client"

import { Header } from "@/components/header"
import { ExperienceCard } from "@/components/experience-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Fish, Waves, MapPin } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { experiencesData } from "@/lib/experiences-data"

export default function HomePage() {
  const { language, t } = useLanguage()
  const featuredExperiences = experiencesData.slice(0, 3)
  
  const categories = [
    { name: "fishingExperience", icon: Fish, count: 8 },
    { name: "cultureHistory", icon: MapPin, count: 5 },
    { name: "gourmetEducation", icon: Waves, count: 12 },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/beautiful-aerial-view-of-shinojima-island-with-fis.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">{t.heroTitle}</h1>
          <p className="text-xl md:text-2xl mb-8 text-balance opacity-90">{t.heroSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link href="/experiences">
                {t.exploreExperiences}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20"
              asChild
            >
              <Link href="/about">{t.aboutShinojima}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.categoriesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/experiences?category=${encodeURIComponent(t[category.name as keyof typeof t] as string)}`}
                className="group"
              >
                <div className="bg-card rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <category.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{t[category.name as keyof typeof t] as string}</h3>
                  <p className="text-muted-foreground">
                    {category.count}
                    {t.experienceCount}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Experiences */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">{t.featuredTitle}</h2>
            <Button variant="outline" asChild>
              <Link href="/experiences">
                {t.viewAll}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredExperiences.map((experience) => (
              <ExperienceCard
                key={experience.id}
                id={experience.id}
                title={experience.title[language]}
                description={experience.description[language]}
                category={experience.category[language]}
                price={experience.price}
                duration={experience.duration[language]}
                capacity={experience.capacity}
                rating={experience.rating}
                reviewCount={experience.reviewCount}
                image={experience.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{t.aboutTitle}</h2>
            <p className="text-lg mb-8 opacity-90 text-balance">{t.aboutDescription}</p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/about/history">{t.learnMoreHistory}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">
                {language === "ja" ? "篠島体験" : "Shinojima Experience"}
              </h3>
              <p className="text-muted-foreground">
                {language === "ja"
                  ? "篠島の伝統文化と自然の恵みを世界に発信する体験プラットフォーム"
                  : "Experience platform sharing Shinojima's traditional culture and natural bounty with the world"}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t.experiences}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link
                    href={`/experiences?category=${encodeURIComponent(t.fishingExperience)}`}
                    className="hover:text-primary"
                  >
                    {t.fishingExperience}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/experiences?category=${encodeURIComponent(t.cultureHistory)}`}
                    className="hover:text-primary"
                  >
                    {t.cultureHistory}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/experiences?category=${encodeURIComponent(t.gourmetEducation)}`}
                    className="hover:text-primary"
                  >
                    {t.gourmetEducation}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{language === "ja" ? "情報" : "Information"}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/about" className="hover:text-primary">
                    {t.aboutShinojima}
                  </Link>
                </li>
                <li>
                  <Link href="/access" className="hover:text-primary">
                    {language === "ja" ? "アクセス" : "Access"}
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-primary">
                    {language === "ja" ? "よくある質問" : "FAQ"}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{language === "ja" ? "お問い合わせ" : "Contact"}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>📧 info@shinojima-experience.jp</li>
                <li>📞 0569-67-XXXX</li>
                <li>📍 {language === "ja" ? "愛知県知多郡南知多町篠島" : "Shinojima, Minamichita, Aichi"}</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 {language === "ja" ? "篠島体験" : "Shinojima Experience"}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
