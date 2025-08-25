import { Outlet } from "react-router";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

export default function Dashboard() {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main>
        <div id="root">
          <SidebarTrigger />
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  )
}