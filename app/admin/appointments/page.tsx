"use client";

import { useState } from "react";
import { Navigation } from "@/app/components/navigation";
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

const initialAppointments: Appointment[] = [
  { id: "1", propertyId: "1", name: "John Doe", email: "john@example.com", date: "2023-06-15", status: "En attente" },
  { id: "2", propertyId: "2", name: "Jane Smith", email: "jane@example.com", date: "2023-06-16", status: "Confirmé" },
  { id: "3", propertyId: "3", name: "Bob Johnson", email: "bob@example.com", date: "2023-06-17", status: "Annulé" },
];

export default function AdminAppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>(initialAppointments);

  const updateAppointmentStatus = (id: string, status: "Confirmé" | "Annulé") => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.id === id ? { ...appointment, status } : appointment
      )
    );
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
            variant="destructive"
            onClick={() => updateAppointmentStatus(appointment.id, "Annulé")}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            Annuler
          </Button>
        </>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <main className="max-w-6xl mx-auto py-8 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold mb-8 text-center text-teal-400">Gestion des rendez-vous</h1>
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
      </main>
    </div>
  );
}
