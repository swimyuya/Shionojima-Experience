import { Header } from "@/components/header"
import { ConfirmationClient } from "./confirmation-client"
import { experiencesData } from "@/lib/experiences-data"

// Generate static params for all experience IDs
export async function generateStaticParams() {
  return experiencesData.map((experience) => ({
    id: experience.id,
  }))
}

interface ConfirmationPageProps {
  params: {
    id: string
  }
}

export default function BookingConfirmationPage({ params }: ConfirmationPageProps) {
  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      <div className="pt-20">
        <ConfirmationClient />
      </div>
    </div>
  )
}