import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "EV MNGR" },
    { name: "description", content: "Welcome to EV MNGR" },
  ];
}

export default function Home() {
  return (
    <h1>Home</h1>
  )
}
