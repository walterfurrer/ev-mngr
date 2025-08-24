import { useLoaderData } from "react-router";
import type { Route } from "./+types/vehicle";

export async function Loader({ params }: Route.LoaderArgs) {
  const { vehicleId } = params;
}

interface vehicleInfo {
  vehicleId: number;
  year: number;
  make: string;
  model: string;
}

export default function VehiclePage() {
  const { vehicleInfo, error } = useLoaderData<{
    vehicleInfo: vehicleInfo | null;
    error: string | null;
  }>();

  if (error) {
    return <div className="text-destructive">Error: {error}</div>
  }

  if (!vehicleInfo) {
    return <div>Loading vehicle information...</div>
  }

  return (
    <div>
      <h1>{vehicleInfo.year} {vehicleInfo.make} {vehicleInfo.model}</h1>
    </div>
  )
}