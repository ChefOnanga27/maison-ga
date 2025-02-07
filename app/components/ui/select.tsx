"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/app/lib/utils"

// Typing SelectPrimitive components and props
const { Root: Select, Group: SelectGroup, Value: SelectValue } = SelectPrimitive

const commonSelectButtonStyles = "flex cursor-default items-center justify-center py-1"

// Typing props for SelectTrigger
interface SelectTriggerProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> {
  children: React.ReactNode
}

const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ className, children, ...props }, ref) => (
    <SelectPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDown className="h-4 w-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
)
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

// Typing props for SelectScrollButton
interface SelectScrollButtonProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton> {
  direction: "up" | "down"
}

const SelectScrollButton = React.forwardRef<HTMLDivElement, SelectScrollButtonProps>(
    ({ direction, ...props }, ref) => {
      const Icon = direction === "up" ? ChevronUp : ChevronDown
      return (
        <SelectPrimitive.ScrollUpButton ref={ref as any} className={cn(commonSelectButtonStyles)} {...props}>
          <Icon className="h-4 w-4" />
        </SelectPrimitive.ScrollUpButton>
      )
    }
  )
SelectScrollButton.displayName = SelectPrimitive.ScrollUpButton.displayName

// Typing props for SelectContent
interface SelectContentProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> {
    children: React.ReactNode;
    position?: "popper" | "item-aligned";  // Mise à jour pour correspondre aux types autorisés
  }

const SelectContent = React.forwardRef<HTMLDivElement, SelectContentProps>(
    ({ className, children, position = "popper", ...props }, ref) => (
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          ref={ref}
          className={cn(
            "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md",
            position === "popper" &&
              "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            className
          )}
          position={position} 
          {...props}
        >
          <SelectScrollButton direction="up" />
          <SelectPrimitive.Viewport className="p-1">
            {children}
          </SelectPrimitive.Viewport>
          <SelectScrollButton direction="down" />
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    )
  )
SelectContent.displayName = SelectPrimitive.Content.displayName

// Typing props for SelectLabel
interface SelectLabelProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label> {
  children: React.ReactNode
}

const SelectLabel = React.forwardRef<HTMLDivElement, SelectLabelProps>(
    ({ className, ...props }, ref) => (
      <div ref={ref} className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)} {...props} />
    )
  )
  
  
SelectLabel.displayName = SelectPrimitive.Label.displayName

// Typing props for SelectItem
interface SelectItemProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> {
  children: React.ReactNode
}

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ className, children, ...props }, ref) => (
    <SelectPrimitive.Item
      ref={ref}
      className={cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
)
SelectItem.displayName = SelectPrimitive.Item.displayName

// Typing props for SelectSeparator
interface SelectSeparatorProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator> {}

const SelectSeparator = React.forwardRef<HTMLHRElement, SelectSeparatorProps>(
  ({ className, ...props }, ref) => (
    <SelectPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
  )
)
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollButton,
}
