import { BadgeX } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { User, Album } from "@/schemas";
import { Link } from "@tanstack/react-router";

interface UserAccordionProps {
  user: User
  albums: Album[] | undefined
  isOpen: boolean
  onToggle: () => void
  onIgnoreAlbum: (albumId: number) => void
}

export default function UserAccordion({ user, albums, isOpen, onToggle, onIgnoreAlbum }: UserAccordionProps) {
  return (
    <Accordion type="single" collapsible value={isOpen ? `user-${user.id}` : ""} className="border rounded-md">
      <AccordionItem value={`user-${user.id}`} className="border-none">
        <AccordionTrigger onClick={onToggle} className="px-4 py-3 hover:bg-muted/50 transition-all">
          <div className="flex items-center w-full">
            <span className="font-medium text-left">{user.name}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="px-4 py-2 space-y-2">
            {albums?.map((album) => (
              <div key={album.id} className="pl-6 py-2 border-l-2 border-muted-foreground/20 ml-4 flex items-center justify-between">
                <Link to={`/photos/${album.id.toString()}`}><span className="text-sm text-underline">{album.title}</span></Link>
                <button
                  onClick={() => onIgnoreAlbum(album.id)}
                  className="ml-2 p-1 text-destructive hover:bg-destructive/10 rounded-sm"
                >
                  <BadgeX className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}