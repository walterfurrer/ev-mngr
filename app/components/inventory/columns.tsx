"use client"

import type { ColumnDef } from "@tanstack/react-table"
import type { Vehicle } from "@/types/vehicle.types"

export const columns: ColumnDef<Vehicle>[] = [
  {
    accessorKey: "id",
    header: "id",
  },
  {
    accessorKey: "year",
    header: "Year",
  },
  {
    accessorKey: "make",
    header: "Make",
  },
  {
    accessorKey: "model",
    header: "Model",
  },
]