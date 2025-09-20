import { Header } from "@/components/header"
import { BookingFormClient } from "./booking-form-client"
import { experiencesData } from "@/lib/experiences-data"

// Generate static params for all experience IDs
export async function generateStaticParams() {
  return experiencesData.map((experience) => ({
    id: experience.id,
  }))
}

interface BookingPageProps {
  params: {
    id: string
  }
}

export default function BookingPage({ params }: BookingPageProps) {
  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      <div className="pt-20">
        <BookingFormClient experienceId={params.id} />
      </div>
    </div>
  )
}