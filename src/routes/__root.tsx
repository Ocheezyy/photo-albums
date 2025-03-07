import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const RootComponent = () => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <div className="flex flex-col h-full max-w-5xl mx-auto bg-gradient-to-b from-background to-background/80">
                <Header />
                <Outlet />
                <Toaster />
            </div>
            <TanStackRouterDevtools />
        </QueryClientProvider>
    )
}

export const Route = createRootRoute({
  component: RootComponent
})