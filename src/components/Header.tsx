import useStore from "@/store";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, Asterisk } from "lucide-react"

const Header = () => {
    const { title, showButtons, toggleUrl } = useStore();

     return (
        <header className="sticky top-0 z-10 flex items-center h-16 px-4 bg-gradient-to-r from-primary/90 to-primary shadow-md justify-between">
            {showButtons && (
                <Link to="/" className="flex items-center justify-center w-8 h-8 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/30 transition-colors">
                    <ChevronLeft className="w-5 h-5 text-primary-foreground" />
                </Link>
            )}
            <h1 className="ml-4 text-xl font-bold text-primary-foreground text-center">{title}</h1>
            {showButtons && (
                <Link to={toggleUrl} className="flex items-center justify-center w-8 h-8 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/30 transition-colors">
                    <Asterisk className="w-5 h-5 text-primary-foreground" />
                </Link>
            )}
        </header>
    )
}

export default Header;