"use client"

import * as React from "react"
import * as TogglesPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const ToggleViewContainer = TogglesPrimitive.Root

const TogglesList = React.forwardRef<
  React.ElementRef<typeof TogglesPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TogglesPrimitive.List>
>(({ className, ...props }, ref) => (
  <TogglesPrimitive.List
    ref={ref}
    className={cn(
      "flex flex-row rounded-lg drop-shadow overflow-hidden border",
      className
    )}
    {...props}
  />
))

TogglesList.displayName = TogglesPrimitive.List.displayName

const ToggleTrigger = React.forwardRef<
  React.ElementRef<typeof TogglesPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TogglesPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TogglesPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center text-center cursor-pointer w-full transition-all transition-all data-[state=active]:bg-active-bg data-[state=active]:text-active-text",
      className
    )}
    {...props}
  />
))

ToggleTrigger.displayName = TogglesPrimitive.Trigger.displayName

const ToggleContent = React.forwardRef<
  React.ElementRef<typeof TogglesPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TogglesPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TogglesPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))

ToggleContent.displayName = TogglesPrimitive.Content.displayName

export { ToggleViewContainer, TogglesList, ToggleTrigger, ToggleContent }




