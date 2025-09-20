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
import { experiencesData, type Experience } from "@/lib/experiences-data"


export default function ExperiencesPage() {
  const { language, t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(t.all)
  const [sortBy, setSortBy] = useState("popular")
  const [filteredExperiences, setFilteredExperiences] = useState(experiencesData)

  const categories = [t.all, t.fishingExperience, t.cultureHistory, t.gourmetEducation]
  const sortOptions = [
    { value: "popular", label: t.popular },
    { value: "newest", label: t.newest },
    { value: "price-low", label: t.priceLow },
    { value: "price-high", label: t.priceHigh },
    { value: "rating", label: t.rating },
  ]

  const handleSearch = () => {
    let filtered = experiencesData

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (exp) =>
          exp.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
          exp.description[language].toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Filter by category
    if (selectedCategory !== t.all) {
      filtered = filtered.filter((exp) => exp.category[language] === selectedCategory)
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
            {t.experiencesTitle}
          </h1>
          <p className="text-muted-foreground text-lg">
            {t.experiencesSubtitle}
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
                placeholder={t.searchPlaceholder}
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
              {filteredExperiences.length}{t.experiencesFound}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredExperiences.map((experience) => (
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

          {filteredExperiences.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                {t.noExperiencesFound}
              </p>
              <Button
                variant="outline"
                className="mt-4 bg-transparent"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory(t.all)
                  setSortBy("popular")
                  setFilteredExperiences(experiencesData)
                }}
              >
                {t.resetSearchCriteria}
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
