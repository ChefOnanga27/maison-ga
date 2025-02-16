"use client"

import React, { useState, useEffect } from "react";
import { Button } from "@/app/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/components/ui/table";

interface Appointment {
  id: string;
  propertyId: string;
  name: string;
  email: string;
  date: string;
  status: "En attente" | "Confirmé" | "Annulé";
}

export default function AdminAppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch initial appointments
  useEffect(() => {
    async function fetchAppointments() {
      try {
        const response = await fetch("/api/appointments");
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des rendez-vous.");
        }
        const data = await response.json();
        setAppointments(data);
      } catch (err) {
        setError("Impossible de charger les rendez-vous.");
      } finally {
        setLoading(false);
      }
    }
    
    fetchAppointments();
  }, []);

  const updateAppointmentStatus = async (id: string, status: "Confirmé" | "Annulé") => {
    try {
      const response = await fetch(`/api/appointments/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la mise à jour du statut.");
      }

      // Mettre à jour localement les rendez-vous si la mise à jour a réussi
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment.id === id ? { ...appointment, status } : appointment
        )
      );
    } catch (error) {
      setError("Impossible de mettre à jour le statut.");
    }
  };

  const renderActions = (appointment: Appointment) => {
    if (appointment.status === "En attente") {
      return (
        <>
          <Button
            onClick={() => updateAppointmentStatus(appointment.id, "Confirmé")}
            className="mr-2 bg-teal-600 hover:bg-teal-700 text-white"
          >
            Confirmer
          </Button>
          <Button
            variant="default"
            onClick={() => updateAppointmentStatus(appointment.id, "Annulé")}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            Annuler
          </Button>
        </>
      );
    }
  };

  if (loading) {
    return <div>Chargement des rendez-vous...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Gestion des rendez-vous</h1>
      <div className="overflow-hidden bg-white rounded-lg shadow-lg">
        <Table>
          <TableHeader>
            <TableRow className="bg-teal-600 text-white">
              <TableHead>Nom</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={appointment.id} className="hover:bg-teal-50">
                <TableCell>{appointment.name}</TableCell>
                <TableCell>{appointment.email}</TableCell>
                <TableCell>{appointment.date}</TableCell>
                <TableCell>{appointment.status}</TableCell>
                <TableCell>{renderActions(appointment)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
