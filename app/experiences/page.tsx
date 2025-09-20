"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { ExperienceCard } from "@/components/experience-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

const allExperiences = [
  {
    id: "1",
    title: "伝統漁業体験 - 定置網漁と船上料理",
    description: "篠島の漁師と一緒に定置網漁を体験し、獲れたての魚で船上料理を楽しみます。",
    price: 8500,
    duration: "4時間",
    capacity: 8,
    rating: 4.8,
    reviewCount: 127,
    image: "/traditional-fishing-boat-with-nets-in-japanese-coa.jpg",
    category: "漁業体験",
  },
  {
    id: "2",
    title: "神饌文化体験 - おんべ鯛の調理と奉納",
    description: "伊勢神宮に奉納される神聖な「おんべ鯛」の調理法を学び、神饌文化の深さを体験します。",
    price: 12000,
    duration: "3時間",
    capacity: 6,
    rating: 4.9,
    reviewCount: 89,
    image: "/sacred-japanese-sea-bream-preparation-ceremony-wit.jpg",
    category: "文化・歴史",
  },
  {
    id: "3",
    title: "島の恵み料理教室 - 海の幸を味わう",
    description: "篠島で獲れた新鮮な魚介類を使った伝統料理を地元の料理人から学びます。",
    price: 6800,
    duration: "2.5時間",
    capacity: 12,
    rating: 4.7,
    reviewCount: 156,
    image: "/japanese-cooking-class-with-fresh-seafood-and-trad.jpg",
    category: "グルメ・食育",
  },
  {
    id: "4",
    title: "早朝漁業体験 - 朝市と魚の競り",
    description: "早朝の漁港で魚の競りを見学し、新鮮な魚介類を購入できます。",
    price: 4500,
    duration: "2時間",
    capacity: 15,
    rating: 4.6,
    reviewCount: 203,
    image: "/early-morning-fish-market-auction-in-japanese-fish.jpg",
    category: "漁業体験",
  },
  {
    id: "5",
    title: "篠島神社参拝と歴史散策",
    description: "島の守り神を祀る神社を参拝し、篠島の歴史と文化を学びます。",
    price: 3200,
    duration: "1.5時間",
    capacity: 20,
    rating: 4.5,
    reviewCount: 78,
    image: "/traditional-japanese-shrine-on-coastal-island-with.jpg",
    category: "文化・歴史",
  },
  {
    id: "6",
    title: "海女文化体験 - 素潜りと海藻採取",
    description: "篠島の海女さんから素潜りの技術を学び、海藻採取を体験します。",
    price: 9800,
    duration: "3.5時間",
    capacity: 6,
    rating: 4.8,
    reviewCount: 94,
    image: "/japanese-ama-diver-woman-in-traditional-white-outf.jpg",
    category: "漁業体験",
  },
]


export default function ExperiencesPage() {
  const { language, t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(t.all)
  const [sortBy, setSortBy] = useState("popular")
  const [filteredExperiences, setFilteredExperiences] = useState(allExperiences)

  const categories = [t.all, t.fishingExperience, t.cultureHistory, t.gourmetEducation]
  const sortOptions = [
    { value: "popular", label: t.popular },
    { value: "newest", label: t.newest },
    { value: "price-low", label: t.priceLow },
    { value: "price-high", label: t.priceHigh },
    { value: "rating", label: t.rating },
  ]

  const handleSearch = () => {
    let filtered = allExperiences

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (exp) =>
          exp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          exp.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Filter by category
    if (selectedCategory !== t.all) {
      const categoryMap = {
        [t.fishingExperience]: "漁業体験",
        [t.cultureHistory]: "文化・歴史", 
        [t.gourmetEducation]: "グルメ・食育"
      }
      const jaCategory = categoryMap[selectedCategory as keyof typeof categoryMap]
      if (jaCategory) {
        filtered = filtered.filter((exp) => exp.category === jaCategory)
      }
    }

    // Sort experiences
    switch (sortBy) {
      case "newest":
        // In a real app, you'd sort by creation date
        break
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      default:
        // Popular (default order)
        break
    }

    setFilteredExperiences(filtered)
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="pt-24 pb-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">
            {language === "ja" ? "体験プログラム一覧" : "Experience Programs"}
          </h1>
          <p className="text-muted-foreground text-lg">
            {language === "ja" 
              ? "篠島の魅力を存分に味わえる体験プログラムをお選びください"
              : "Choose from experience programs that let you fully enjoy the charm of Shinojima"
            }
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder={language === "ja" ? "体験を検索..." : "Search experiences..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              />
            </div>

            <div className="flex gap-4 items-center">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button onClick={handleSearch}>
                <Filter className="h-4 w-4 mr-2" />
                {t.search}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Badges */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              {language === "ja" 
                ? `${filteredExperiences.length}件の体験が見つかりました`
                : `${filteredExperiences.length} experiences found`
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredExperiences.map((experience) => (
              <ExperienceCard 
                key={experience.id} 
                {...experience}
                title={language === "ja" ? experience.title : experience.title}
                description={language === "ja" ? experience.description : experience.description}
                category={language === "ja" ? experience.category : 
                  experience.category === "漁業体験" ? "Fishing Experience" :
                  experience.category === "文化・歴史" ? "Culture & History" :
                  experience.category === "グルメ・食育" ? "Gourmet & Food Education" :
                  experience.category
                }
              />
            ))}
          </div>

          {filteredExperiences.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                {language === "ja" 
                  ? "条件に合う体験が見つかりませんでした。"
                  : "No experiences found matching your criteria."
                }
              </p>
              <Button
                variant="outline"
                className="mt-4 bg-transparent"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory(t.all)
                  setSortBy("popular")
                  setFilteredExperiences(allExperiences)
                }}
              >
                {language === "ja" ? "検索条件をリセット" : "Reset search criteria"}
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
