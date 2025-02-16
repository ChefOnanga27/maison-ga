"use client";

import * as React from "react";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { cn } from "@/app/lib/utils";
import { buttonVariants } from "@/app/components/ui/button";

// Définition des styles pour un meilleur rendu
const customClassNames = {
  months: "flex flex-col sm:flex-row gap-4",
  month: "space-y-4 bg-white shadow-lg rounded-lg p-6 w-full",
  caption: "flex justify-between items-center text-lg font-semibold text-blue-700",
  caption_label: "text-sm font-medium uppercase tracking-wide text-blue-600",
  nav: "flex items-center space-x-2",
  nav_button: cn(
    buttonVariants({ variant: "outline" }),
    "h-8 w-8 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-700 transition duration-300"
  ),
  table: "w-full border-collapse",
  head_row: "flex",
  head_cell: "text-blue-500 font-semibold w-12 text-center text-xs uppercase tracking-wide",
  row: "flex w-full",
  cell: "h-14 w-14 flex items-center justify-center text-sm rounded-lg transition duration-300 cursor-pointer",
  day: cn(
    buttonVariants({ variant: "ghost" }),
    "h-14 w-14 p-0 text-blue-700 font-medium hover:bg-blue-200 hover:text-blue-900 transition duration-300"
  ),
  day_selected:
    "bg-blue-600 text-white font-bold hover:bg-blue-700 hover:text-white transition duration-300",
  day_today: "border border-blue-500 text-blue-600 font-semibold",
  day_outside: "text-blue-300 opacity-50",
  day_disabled: "text-gray-300 cursor-not-allowed",
  day_hidden: "invisible",
};

export const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 15); // Autorise uniquement les chiffres (max 15 caractères)
    setPhone(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !name || !email || !phone) {
      setMessage("❌ Veuillez remplir tous les champs !");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          date: selectedDate.toISOString(),
        }),
      });

      if (response.ok) {
        setMessage("✅ Rendez-vous enregistré avec succès !");
        setName("");
        setEmail("");
        setPhone("");
        // La date reste affichée pour que l'utilisateur voie son choix
      } else {
        setMessage("❌ Erreur lors de l'enregistrement.");
      }
    } catch (error) {
      setMessage("❌ Erreur de connexion au serveur.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-800 p-6">
      <div className="max-w-2xl w-full bg-white shadow-2xl rounded-xl p-8 border border-blue-300">
        <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">
          📅 Réservez un rendez-vous
        </h2>

        {/* Affichage du calendrier avec la date sélectionnée marquée */}
        <DayPicker
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          showOutsideDays
          classNames={customClassNames}
          className="mb-6"
        />

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="👤 Votre nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="📧 Votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            placeholder="📞 Votre numéro de téléphone"
            value={phone}
            onChange={handlePhoneChange}
            className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className={cn(
              buttonVariants({ variant: "default" }),
              "w-full bg-blue-600 text-white py-3 text-lg rounded-lg hover:bg-blue-700 transition duration-300"
            )}
            disabled={loading}
          >
            {loading ? "⏳ Envoi en cours..." : "✅ Confirmer le rendez-vous"}
          </button>
        </form>

        {message && (
          <p className="mt-6 text-center text-lg font-semibold text-blue-700 animate-fade-in">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};


