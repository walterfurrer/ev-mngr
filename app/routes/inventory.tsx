import type { Vehicle } from "@/types/vehicle.types"
import { mockVehicles } from "@/mocks/vehicles.mocks"
import { columns } from "@/components/inventory/columns"
import { DataTable } from "@/components/inventory/data-table"

async function getData(): Promise<Vehicle[]> {
  return mockVehicles;
}

export default async function Inventory() {
  const data = await getData()

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-4xl font-semibold">Inventory</h1>
      <div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>

  )
}