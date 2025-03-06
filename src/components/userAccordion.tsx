import { ChevronDown } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { User, Album } from "@/schemas";

interface UserAccordionProps {
  user: User
  albums: Album[] | undefined
  isOpen: boolean
  onToggle: () => void
}

export default function UserAccordion({ user, albums, isOpen, onToggle }: UserAccordionProps) {
  return (
    <Accordion type="single" collapsible value={isOpen ? `user-${user.id}` : ""} className="border rounded-md">
      <AccordionItem value={`user-${user.id}`} className="border-none">
        <AccordionTrigger onClick={onToggle} className="px-4 py-3 hover:bg-muted/50 transition-all">
          <div className="flex items-center w-full">
            <span className="font-medium text-left">{user.name}</span>
            <ChevronDown className="h-4 w-4 shrink-0 ml-auto transition-transform duration-200" />
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="px-4 py-2 space-y-2">
            {albums?.map((album) => (
              <div key={album.id} className="pl-6 py-2 border-l-2 border-muted-foreground/20 ml-4">
                <span className="text-sm">{album.title}</span>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}