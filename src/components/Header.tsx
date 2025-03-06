import useStore from "@/store";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, Asterisk } from "lucide-react"

const Header = () => {
    const { title, showButtons, toggleUrl } = useStore();

     return (
        <header className="sticky top-0 z-10 flex items-center h-14 px-4 border-b bg-background justify-between">
            {showButtons && (
                <Link to="/" className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-muted">
                    <ChevronLeft className="w-5 h-5" />
                </Link>
            )}
            <h1 className="ml-4 text-lg font-medium text-center">{title}</h1>
            {showButtons && (
                <Link to={toggleUrl} className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-muted text-lg">
                    <Asterisk className="w-5 h-5" />
                </Link>
            )}
        </header>
    )
}

export default Header;