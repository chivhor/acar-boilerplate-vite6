import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import "@/assets/styles/global.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

const Layout = () => {
  return (
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <SidebarTrigger />
          <Outlet />
        </main>
      </SidebarProvider>
  );
};

export default Layout;
