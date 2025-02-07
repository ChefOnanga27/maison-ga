"use client";

import { useState } from "react";
import  Layout  from "@/app/components/layout";
import { PropertyCard } from "@/app/components/property-card";
import { Button } from "@/app/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { Input } from "@/app/components/ui/input";

const allProperties = [
    {
      id: "1",
      title: "Villa de luxe à Libreville",
      type: "Maison",
      price: 250000000,
      location: "Libreville",
      description: "Villa spacieuse et moderne offrant des vues exceptionnelles à Libreville.",
      imageUrl: "/places1.jpg",
    },
    {
      id: "2",
      title: "Appartement moderne au centre-ville",
      type: "Appartement",
      price: 150000000,
      location: "Libreville",
      description: "Appartement contemporain au cœur du centre-ville avec toutes les commodités.",
      imageUrl: "/appartement1.jpg",
    },
    {
      id: "3",
      title: "Bureau spacieux à Franceville",
      type: "Bureau",
      price: 500000,
      location: "Franceville",
      description: "Bureau spacieux et lumineux idéalement situé à Franceville, parfait pour les professionnels.",
      imageUrl: "/bureau1.jpg",
    },
    {
      id: "4",
      title: "Chambre étudiante à Owendo",
      type: "Chambre",
      price: 150000,
      location: "Owendo",
      description: "Chambre simple et abordable située près des écoles et universités à Owendo.",
      imageUrl: "/chambre1.avif",
    },
    {
      id: "5",
      title: "Local commercial à Port-Gentil",
      type: "Commerce",
      price: 700000,
      location: "Port-Gentil",
      description: "Local commercial spacieux et bien situé à Port-Gentil, idéal pour divers commerces.",
      imageUrl: "commerce.jpg",
    },
    {
      id: "6",
      title: "Maison familiale à Oyem",
      type: "Maison",
      price: 180000000,
      location: "Oyem",
      description: "Maison confortable avec jardin, parfaite pour une famille, située à Oyem.",
      imageUrl: "/block1.jpg",
    },
  ];
  

export default function PropertiesPage() {
  const [filteredProperties, setFilteredProperties] = useState(allProperties);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilter = () => {
    let result = allProperties;

    if (categoryFilter !== "all") {
      result = result.filter((property) => property.type === categoryFilter);
    }

    if (searchQuery) {
      result = result.filter(
        (property) =>
          property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          property.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProperties(result);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-blue-800 mb-6">Toutes nos propriétés</h1>
        
        {/* Filtres et recherche */}
        <div className="flex items-center space-x-4 mb-8">
        <Select onValueChange={(value) => setCategoryFilter(value)}>
  <SelectTrigger>
    <div className="custom-class">
      <SelectValue placeholder="Catégorie" />
    </div>
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="all">Toutes</SelectItem>
    {/* Autres options */}
  </SelectContent>
</Select>


          <Input
            type="text"
            placeholder="Rechercher une propriété..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow border border-blue-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <Button
            onClick={handleFilter}
            className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-md"
          >
            Filtrer
          </Button>
        </div>

        {/* Propriétés filtrées */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600">Aucune propriété trouvée</p>
          )}
        </div>
      </div>
    </Layout>
  );
}
