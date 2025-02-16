"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/app/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { Input } from "@/app/components/ui/input";
import { PropertyCard } from "@/app/components/property-card";

interface Property {
  id: string;
  title: string;
  type: string;
  price: number;
  location: string;
  description: string;
  imageUrl: string;
}

export default function PropertiesPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>("");

  // Charger les propriétés au démarrage
  useEffect(() => {
    fetch("/api/properties")
      .then((response) => response.json())
      .then((data) => {
        setProperties(data);
        setFilteredProperties(data);
      })
      .catch((error) => console.error("Erreur de récupération des propriétés:", error));
  }, []);

  const handleFilter = () => {
    let result = properties;

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

  const handleModifyProperty = (property: Property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const handleAddProperty = () => {
    setSelectedProperty(null);
    setIsModalOpen(true);
    setImageUrl(""); // Réinitialiser l'image lors de l'ajout
  };

  const handleSaveProperty = (updatedProperty: Property) => {
    const method = selectedProperty ? "PUT" : "POST";
    const url = selectedProperty
      ? `/api/properties/${selectedProperty.id}`
      : "/api/properties";
    
    fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: updatedProperty.title,
        description: updatedProperty.description,
        price: updatedProperty.price,
        location: updatedProperty.location,
        imageUrl: updatedProperty.imageUrl,
        type: updatedProperty.type,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (method === "POST") {
          setProperties([...properties, data]);
        } else {
          setProperties(properties.map((property) =>
            property.id === data.id ? data : property
          ));
        }
        setFilteredProperties(properties);
        setIsModalOpen(false);
      })
      .catch((error) => console.error("Erreur lors de l'enregistrement de la propriété:", error));
  };

  const handleDeleteProperty = (id: string) => {
    fetch(`/api/properties/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setProperties(properties.filter((property) => property.id !== id));
        setFilteredProperties(filteredProperties.filter((property) => property.id !== id));
      })
      .catch((error) => console.error("Erreur lors de la suppression de la propriété:", error));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setImageUrl(URL.createObjectURL(file)); // Afficher l'image téléchargée
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Toutes nos propriétés</h1>

      <div className="flex items-center space-x-4 mb-8">
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="flex-grow">
            <SelectValue placeholder="Catégorie" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all" className="cursor-pointer">Toutes</SelectItem>
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

        <Button
          onClick={handleAddProperty}
          className="bg-green-600 text-white hover:bg-green-700 px-6 py-2 rounded-md"
        >
          Ajouter
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <div key={property.id} className="relative">
              <PropertyCard {...property} />
              <Button
                onClick={() => handleModifyProperty(property)}
                className="absolute top-2 right-2 bg-blue-600 text-white hover:bg-green-200 p-2 rounded-md"
              >
                Modifier
              </Button>
              <Button
                onClick={() => handleDeleteProperty(property.id)}
                className="absolute top-2 left-2 bg-black text-white hover:bg-green-700 p-2 rounded-md"
              >
                Supprimer
              </Button>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600">Aucune propriété trouvée</p>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md w-1/2">
            <h2 className="text-2xl font-bold mb-4">{selectedProperty ? "Modifier la propriété" : "Ajouter un local"}</h2>

            <Input
              type="text"
              placeholder="Titre"
              defaultValue={selectedProperty?.title || ""}
              className="w-full mb-4 border border-blue-400 rounded-md px-4 py-2"
            />

            <Input
              type="text"
              placeholder="Description"
              defaultValue={selectedProperty?.description || ""}
              className="w-full mb-4 border border-blue-400 rounded-md px-4 py-2"
            />

            <Input
              type="number"
              placeholder="Prix"
              defaultValue={selectedProperty?.price || ""}
              className="w-full mb-4 border border-blue-400 rounded-md px-4 py-2"
            />

            <Input
              type="text"
              placeholder="Localisation"
              defaultValue={selectedProperty?.location || ""}
              className="w-full mb-4 border border-blue-400 rounded-md px-4 py-2"
            />

            <Input
              type="file"
              onChange={handleImageUpload}
              className="w-full mb-4 border border-blue-400 rounded-md px-4 py-2"
            />
            {imageUrl && (
              <div className="mb-4">
                <img src={imageUrl} alt="Aperçu de l'image" className="w-32 h-32 object-cover" />
              </div>
            )}

            <div className="flex justify-between mt-4">
              <Button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-600 text-white hover:bg-gray-700 px-6 py-2 rounded-md"
              >
                Annuler
              </Button>
              <Button
                onClick={() =>
                  handleSaveProperty({
                    id: selectedProperty ? selectedProperty.id : `${Date.now()}`,
                    title: selectedProperty?.title || "Nouvelle Propriété",
                    description: selectedProperty?.description || "Description de la propriété",
                    price: selectedProperty?.price || 1000000,
                    location: selectedProperty?.location || "Libreville",
                    imageUrl: imageUrl || "/places1.jpg",
                    type: selectedProperty?.type || "Maison",
                  })
                }
                className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-md"
              >
                {selectedProperty ? "Modifier" : "Ajouter"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
