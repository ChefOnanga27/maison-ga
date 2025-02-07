"use client"

import { useState } from "react";
import  Layout  from "@/app/components/layout";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input"
import { Textarea } from "@/app/components/ui/textarea"
import { Label } from "@/app/components/ui/label"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto py-12 px-6 sm:px-10 lg:px-12">
        <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">Contactez-nous</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Section d'information */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
            <p className="mb-6 text-gray-700">
              Une question ? Un projet ? Contactez-nous, notre équipe est à votre disposition pour vous accompagner.
            </p>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-blue-900 mb-3">Nos coordonnées</h2>
              <p className="text-gray-700"><strong>Email :</strong> contact@maisongabonaise.com</p>
              <p className="text-gray-700"><strong>Téléphone :</strong> +241 074692348</p>
              <p className="text-gray-700"><strong>Adresse :</strong> Libreville, Gabon</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-3">Horaires</h2>
              <p className="text-gray-700"><strong>Lundi - Vendredi :</strong> 9h00 - 18h00</p>
              <p className="text-gray-700"><strong>Samedi :</strong> 9h00 - 13h00</p>
              <p className="text-gray-700"><strong>Dimanche :</strong> Fermé</p>
            </div>
          </div>

          {/* Formulaire de contact */}
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg space-y-5">
            <div>
              <Label htmlFor="name" className="text-blue-900 font-medium">Nom</Label>
              <Input 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                className="focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-blue-900 font-medium">Email</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                className="focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <Label htmlFor="subject" className="text-blue-900 font-medium">Sujet</Label>
              <Input 
                id="subject" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange} 
                required 
                className="focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <Label htmlFor="message" className="text-blue-900 font-medium">Message</Label>
              <Textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                className="focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-blue-800 text-white font-bold py-3 rounded-lg hover:bg-blue-900 transition duration-300"
            >
              Envoyer
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  )
}
