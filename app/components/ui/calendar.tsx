"use client";

import * as React from "react";
import { DayPicker } from "react-day-picker";
import { cn } from "@/app/lib/utils";
import { buttonVariants } from "@/app/components/ui/button";

interface CalendarProps {
  mode?: "single" | "multiple" | "range";
  selected: Date | Date[] | { from: Date; to: Date } | undefined;
  onSelect: (date: Date | Date[] | { from: Date; to: Date } | undefined) => void;
  className?: string;
}

// 🎨 Styles optimisés pour un rendu élégant
const customClassNames = {
  months: "flex flex-col sm:flex-row gap-6",
  month: "bg-white shadow-md rounded-lg p-5 w-full border border-gray-200",
  caption: "flex justify-between items-center text-lg font-semibold text-gray-700",
  caption_label: "text-sm font-medium uppercase tracking-wide text-gray-600",
  nav: "flex items-center space-x-2",
  nav_button: cn(
    buttonVariants({ variant: "outline" }),
    "h-9 w-9 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition"
  ),
  table: "w-full border-collapse",
  head_row: "flex",
  head_cell: "text-gray-500 font-semibold w-12 text-center text-xs uppercase tracking-wide",
  row: "flex w-full",
  cell: "h-12 w-12 flex items-center justify-center text-sm rounded-lg transition cursor-pointer",
  day: cn(
    buttonVariants({ variant: "ghost" }),
    "h-12 w-12 p-0 text-gray-700 font-medium hover:bg-gray-200 hover:text-gray-900 transition"
  ),
  day_selected: "bg-blue-600 text-white font-bold hover:bg-blue-700 transition",
  day_today: "border border-blue-500 text-blue-600 font-semibold",
  day_outside: "text-gray-300 opacity-50",
  day_disabled: "text-gray-300 cursor-not-allowed",
  day_hidden: "invisible",
};

export const Calendar: React.FC<CalendarProps> = ({ mode = "single", selected, onSelect, className }) => {
  return (
    <div className={cn("flex flex-col items-center space-y-4", className)}>
      <h3 className="text-xl font-semibold text-gray-800">📅 Sélectionnez une date</h3>
      {selected && (
        <p className="text-lg font-medium text-gray-700">
          📌 Date sélectionnée :{" "}
          <span className="text-blue-600 font-semibold">
            {Array.isArray(selected)
              ? selected.map((date) => date.toLocaleDateString()).join(", ")
              : selected instanceof Date
              ? selected.toLocaleDateString()
              : selected.from && selected.to
              ? `${selected.from.toLocaleDateString()} → ${selected.to.toLocaleDateString()}`
              : "Aucune"}
          </span>
        </p>
      )}
    </div>
  );
};
