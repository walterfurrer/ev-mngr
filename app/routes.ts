import { type RouteConfig, index, route, } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  route("dashboard", "routes/dashboard.tsx", [
    index("routes/dashboard-home.tsx"),
    route("inventory", "routes/inventory.tsx", [
      route(":vehicleId", "routes/vehicle.tsx"),
    ])
  ]),
] satisfies RouteConfig;
