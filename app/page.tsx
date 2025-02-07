import Layout  from "@/app/components/layout"
import { PropertyCard } from "@/app/components/property-card"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"
import HeroSection from "@/app/components/ui/hero"
import ContentSection from "@/app/components/service"
import ContactSection from "@/app/components/contact"
import Testimonials from "@/app/components/testimony"
import Link from "next/link"
import Image from "next/image"

const categories = [
  { name: "Maisons", image: "/Maison2.jpg", link: "/proprietes?category=Maison" },
  { name: "Appartements", image: "/residence1.jpg", link: "/proprietes?category=Appartement" },
  { name: "Bureaux", image: "/bureau1.jpg", link: "/proprietes?category=Bureau" },
  { name: "Chambres", image: "/chambre1.avif", link: "/proprietes?category=Chambre" },
  { name: "Commerces", image: "/commerce.jpg", link: "/proprietes?category=Commerce" },
]

const testimonials = [
  {
    id: 1,
    name: "Marie K.",
    text: "Grâce à Maison Gabonaise, j'ai trouvé l'appartement de mes rêves en un temps record !",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Pierre M.",
    text: "Le service client de Maison Gabonaise est exceptionnel. Ils m'ont accompagné tout au long de mon achat.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Sophie L.",
    text: "Je recommande vivement Maison Gabonaise pour la qualité de leurs annonces et leur professionnalisme.",
    image: "/placeholder.svg?height=100&width=100",
  },
]

const trendingHouses = [
  {
    id: "1",
    title: "Villa de luxe avec vue sur mer",
    type: "Maison",
    price: 350000000,
    location: "Libreville, Bord de mer",
    description: "Magnifique villa moderne avec 5 chambres, piscine à débordement et vue imprenable sur l'océan.",
    imageUrl: "/building1.png",
  },
  {
    id: "2",
    title: "Maison familiale avec jardin",
    type: "Maison",
    price: 180000000,
    location: "Owendo, Quartier résidentiel",
    description: "Charmante maison de 4 chambres avec un grand jardin, parfaite pour une famille.",
    imageUrl: "/cason 1.png",
  },
  {
    id: "3",
    title: "Appartement de standing en centre-ville",
    type: "Appartement",
    price: 120000000,
    location: "Libreville, Centre-ville",
    description: "Superbe appartement de 3 chambres avec finitions haut de gamme, au cœur de Libreville.",
    imageUrl: "/appartement1.jpg",
  },
]

export default function Home() {
  return (
    <Layout>
       {/* section Hero */}
       <HeroSection/>
       {/* service Section */}
       <ContentSection />
      {/* Trending Houses Section */}
      <section className="py-16 bg-white">
        <div className=" px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Maisons en vogue</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingHouses.map((house) => (
              <PropertyCard key={house.id} {...house} />
            ))}
          </div>
        </div>
      </section>
      {/* Section temoignages*/}
      <Testimonials />
      {/* Contact Section */}
      <ContactSection />
    </Layout>
  )
}
