"use client"

import { useState, useMemo } from "react"
import   Layout  from "@/app/components/layout"
import { PropertyCard } from "@/app/components/property-card"
import { Button } from "@/app/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select"
import { Input } from "@/app/components/ui/input"

const allProperties = [
  { id: "1", title: "Villa de luxe à Libreville", type: "Maison", price: 250000000, location: "Libreville", imageUrl: "/maison3.jpg" },
  { id: "2", title: "Appartement moderne au centre-ville", type: "Appartement", price: 150000000, location: "Libreville", imageUrl:"/appartement1.jpg" },
  { id: "3", title: "Bureau spacieux à Franceville", type: "Bureau", price: 500000, location: "Franceville", imageUrl: "/bureau2.jpg" },
  { id: "4", title: "Chambre étudiante à Owendo", type: "Chambre", price: 150000, location: "Owendo", imageUrl: "/chambre2.jpg" },
  { id: "5", title: "Local commercial à Port-Gentil", type: "Commerce", price: 700000, location: "Port-Gentil", imageUrl: "/commerce.jpg" },
  { id: "6", title: "Maison familiale à Oyem", type: "Maison", price: 180000000, location: "Oyem", imageUrl: "/Maison2.jpg" },
]

export default function PropertiesPage() {
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProperties = useMemo(() => {
    return allProperties.filter((property) => {
      const matchesCategory = categoryFilter === "all" || property.type === categoryFilter
      const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) || property.location.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [categoryFilter, searchQuery])

  return (
    <Layout>
      <div className="max-w-6xl mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Nos Propriétés</h1>

        {/* Filtres */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <Select onValueChange={setCategoryFilter} defaultValue="all">
            <SelectTrigger className="w-[200px] bg-white border-gray-300 shadow-sm">
              <SelectValue placeholder="Catégorie" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes</SelectItem>
              <SelectItem value="Maison">Maisons</SelectItem>
              <SelectItem value="Appartement">Appartements</SelectItem>
              <SelectItem value="Bureau">Bureaux</SelectItem>
              <SelectItem value="Chambre">Chambres</SelectItem>
              <SelectItem value="Commerce">Commerces</SelectItem>
            </SelectContent>
          </Select>

          <Input
            type="text"
            placeholder="Rechercher une propriété..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-[300px] border-gray-300 shadow-sm"
          />
        </div>

        {/* Résultats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => <PropertyCard key={property.id} {...property} />)
          ) : (
            <p className="text-gray-500 text-center col-span-3">Aucune propriété trouvée.</p>
          )}
        </div>
      </div>
    </Layout>
  )
}
