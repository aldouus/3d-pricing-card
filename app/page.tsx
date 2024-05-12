import PricingCard from "@/components/PricingCard";

export default function Home() {
  return (
    <main className="h-screen grid place-content-center">
      <PricingCard modelPath="/models/banana.glb" />
    </main>
  )
}