"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/app/lib/utils"

// Définir les variantes de style pour le composant Label
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)} // Applique les styles par défaut + les classes personnalisées
    {...props} // Passe toutes les autres propriétés au composant Root
  />
))

// Donne un nom au composant pour un meilleur débogage et compréhension
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
