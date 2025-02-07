"use client"

import { useState } from "react"
import { Input } from "@/app/components/ui/input"
import { Button } from "@/app/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/app/components/ui/select"

export function SearchBar({ onSearch }: { onSearch: (query: string, type: string) => void }) {
  const [query, setQuery] = useState("")
  const [type, setType] = useState("all")

  return (
    <div className="flex space-x-2">
      <Input
        type="text"
        placeholder="Rechercher..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow"
      />
      <Select onValueChange={setType}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Type de bien" />
        </SelectTrigger>
        <SelectContent>
          {["all", "maison", "chambre", "bureau"].map((item) => (
            <SelectItem key={item} value={item}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button onClick={() => onSearch(query, type)}>Rechercher</Button>
    </div>
  )
}
