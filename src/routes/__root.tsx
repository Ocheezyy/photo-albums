import { HeaderDataProvider } from '@/contexts/HeaderContext';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner"

export const Route = createRootRoute({
  component: () => (
    <HeaderDataProvider value={{ title: "Users", showBack: false }}>
      <div className="flex flex-col h-full max-w-md mx-auto bg-background">
        <Header />
        <Outlet />
        <Toaster />
      </div>
      <TanStackRouterDevtools />
    </HeaderDataProvider>
  ),
})