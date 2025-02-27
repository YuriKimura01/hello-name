import { GreetingForm } from "@/components/greeting-form"
import { ExplanationSection } from "@/components/explanation-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 md:p-24 bg-background">
      <div className="w-full max-w-3xl space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Next.js 15.1 Greeting App</h1>
          <p className="text-muted-foreground">A simple demo of server actions with React 19</p>
        </div>

        <GreetingForm />

        <ExplanationSection />
      </div>

      <Footer />
    </main>
  )
}

