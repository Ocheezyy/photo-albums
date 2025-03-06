import { ChevronLeft } from "lucide-react"


const Header = () => {
     return (
        <header className="sticky top-0 z-10 flex items-center h-14 px-4 border-b bg-background">
            <button className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-muted">
            <ChevronLeft className="w-5 h-5" />
            <span className="sr-only">Back</span>
            </button>
            <h1 className="ml-4 text-lg font-medium">Users</h1>
        </header>
    )
}

export default Header;