"use client"

import { Navigation } from "@/app/components/navigation"
import { Button } from "@/app/components/ui/button"
import {Calendar} from "@/app/components/ui/calendar"  
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/app/components/ui/form"
import { Input } from "@/app/components/ui/input"
import { useState } from "react"
import { useForm } from "react-hook-form"

interface CalendarProps {
  mode: string;
  selected: Date | undefined;
  onSelect: (date: Date | undefined) => void;
  className: string;
}

const Calendar: React.FC<CalendarProps> = ({ mode, selected, onSelect, className }) => {
  // Implémentation du composant Calendar
  return (
    <div className={className}>
      {/* Votre logique d'affichage du calendrier ici */}
      <input
        type="date"
        value={selected?.toISOString().split("T")[0]}
        onChange={(e) => onSelect(new Date(e.target.value))}
      />
    </div>
  )
}

export default function BookingPage({ params }: { params: { id: string } }) {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const form = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
    // Ici, vous enverriez les données à votre backend
    alert("Demande de rendez-vous envoyée !")
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <main className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6">Prendre rendez-vous</h1>
        <div className="bg-white shadow-xl rounded-lg overflow-hidden p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom</FormLabel>
                    <FormControl>
                      <Input placeholder="Votre nom" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="votre@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date de visite</FormLabel>
                    <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
                    <FormDescription>Choisissez la date à laquelle vous souhaitez visiter le bien.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Envoyer la demande</Button>
            </form>
          </Form>
        </div>
      </main>
    </div>
  )
}
