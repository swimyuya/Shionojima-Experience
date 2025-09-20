import { Header } from "@/components/header"
import { ExperienceDetailClient } from "./experience-detail-client"
import { experiencesData } from "@/lib/experiences-data"

// Generate static params for all experience IDs
export async function generateStaticParams() {
  return experiencesData.map((experience) => ({
    id: experience.id,
  }))
}

interface ExperienceDetailPageProps {
  params: {
    id: string
  }
}

export default function ExperienceDetailPage({ params }: ExperienceDetailPageProps) {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <ExperienceDetailClient experienceId={params.id} />
      </div>
    </div>
  )
}