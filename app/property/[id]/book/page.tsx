"use client";

import { Navigation } from "@/app/components/navigation";
import { Button } from "@/app/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

interface PageProps {
  params: { id: string };
}

interface FormValues {
  name: string;
  email: string;
  date: Date | undefined;
}

// Composant personnalisé pour la sélection de la date
const CustomCalendar: React.FC<{
  selected: Date | undefined;
  onSelect: (date: Date | undefined) => void;
}> = ({ selected, onSelect }) => {
  return (
    <div>
      <input
        type="date"
        value={selected ? selected.toISOString().split("T")[0] : ""}
        onChange={(e) => onSelect(new Date(e.target.value))}
        className="p-2 border rounded-md w-full"
      />
    </div>
  );
};

export default function BookingPage({ params }: PageProps) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(null);

  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      date: undefined,
    },
  });

  // Utiliser useEffect pour résoudre l'ID
  useEffect(() => {
    if (params && params.id) {
      setResolvedParams(params);
    }
  }, [params]);

  const onSubmit = (data: FormValues) => {
    if (resolvedParams) {
      console.log("Form Data:", data);
      alert(`Demande de rendez-vous envoyée pour le bien ID: ${resolvedParams.id}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <main className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6">Prendre rendez-vous</h1>
        <div className="bg-white shadow-xl rounded-lg overflow-hidden p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Champ pour le nom */}
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

              {/* Champ pour l'email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="votre@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Champ pour la sélection de la date */}
              <FormItem>
                <FormLabel>Date du rendez-vous</FormLabel>
                <FormControl>
                  <CustomCalendar selected={date} onSelect={setDate} />
                </FormControl>
                <FormMessage />
              </FormItem>

              {/* Bouton d'envoi */}
              <Button type="submit" className="w-full py-3 text-lg">
                Envoyer la demande
              </Button>
            </form>
          </Form>
        </div>
      </main>
    </div>
  );
}
