"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star, Heart } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

interface ExperienceCardProps {
  id: string
  title: string
  description: string
  price: number
  duration: string
  capacity: number
  rating: number
  reviewCount: number
  image: string
  category: string
}

export function ExperienceCard({
  id,
  title,
  description,
  price,
  duration,
  capacity,
  rating,
  reviewCount,
  image,
  category,
}: ExperienceCardProps) {
  const { language, t } = useLanguage()

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={250}
          className="w-full h-48 object-cover"
        />
        <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground">{category}</Badge>
        <Button variant="ghost" size="sm" className="absolute top-3 right-3 bg-background/80 hover:bg-background">
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{description}</p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {duration}
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            {language === "ja" ? `最大${capacity}名` : `Max ${capacity} people`}
          </div>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{rating}</span>
          </div>
          <span className="text-muted-foreground text-sm">
            ({reviewCount}
            {language === "ja" ? "件" : " reviews"})
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary">
          {t.yen}
          {price.toLocaleString()}
          <span className="text-sm font-normal text-muted-foreground">/{t.person}</span>
        </div>
        <Button asChild>
          <Link href={`/experiences/${id}`}>{language === "ja" ? "詳細を見る" : "View Details"}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
