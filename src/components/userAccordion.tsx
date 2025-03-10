import { Trash2, Image, Video, Music } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Album } from "@/schemas";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

interface UserAccordionProps {
  user: User
  albums: Album[] | undefined
  isOpen: boolean
  onToggle: () => void
  onIgnoreAlbum: (albumId: number) => void
}

const getRandomIcon = (id: number) => {
  const icons = [Music, Image, Video]
  return icons[id % icons.length]
}

// Function to get a random color class for each album
const getRandomColor = (id: number) => {
  const colors = [
    "bg-gradient-to-r from-blue-500 to-blue-700",
    "bg-gradient-to-r from-purple-500 to-violet-600",
    "bg-gradient-to-r from-teal-400 to-cyan-500",
    "bg-gradient-to-r from-rose-400 to-pink-500",
  ]
  return colors[id % colors.length]
}

export default function UserAccordion({ user, albums, isOpen, onToggle, onIgnoreAlbum }: UserAccordionProps) {
  const [hoveredAlbum, setHoveredAlbum] = useState<number | null>(null)
  const userInitials = user.name.slice(0, 1) + user.name.split(" ")[1].slice(0, 1);
  const avatarRandomColor = getRandomColor(user.id);

  return (
    <Accordion type="single" collapsible value={isOpen ? `user-${user.id}` : ""} className="rounded-xl shadow-lg border-0 bg-white dark:bg-gray-800">
      <AccordionItem value={`user-${user.id}`} className="border-none">
        <AccordionTrigger onClick={onToggle} className="px-5 py-4 hover:no-underline bg-gradient-to-r from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/20 transition-all duration-500">
          <div className="flex items-center w-full">
          <div className="relative">
              <Avatar className="h-12 w-12 border-2 border-primary/20">
                <AvatarImage src="" alt={userInitials} />
                <AvatarFallback className={`bg-gradient-to-r ${avatarRandomColor} text-primary-foreground font-bold`}>
                  {userInitials}
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="ml-4 text-left">
              <span className="font-bold text-lg">{user.name}</span>
              <p className="text-xs text-muted-foreground mt-0.5">{albums?.length} albums</p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="bg-gradient-to-b from-background/50 to-background pb-0">
          <div className="px-4 py-2 space-y-2">
            {albums?.map((album) => {
              const AlbumIcon = getRandomIcon(album.id)
              const colorClass = getRandomColor(album.id)
              const isHovered = hoveredAlbum === album.id

              return (
                <div 
                  key={album.id} 
                  className={`
                    relative rounded-lg overflow-hidden transition-all duration-300
                    ${isHovered ? "scale-[1.02] shadow-md" : "scale-100"}`
                  }
                  onMouseEnter={() => setHoveredAlbum(album.id)}
                  onMouseLeave={() => setHoveredAlbum(null)}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${colorClass} opacity-${isHovered ? "90" : "80"}`}
                  />
                  <div className="relative px-4 py-3 flex items-center justify-between">
                    <Link to={`/photos/${album.id.toString()}`} className="flex items-center min-w-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm">
                        <AlbumIcon className="h-4 w-4 text-white" />
                      </div>
                      <span className="ml-3 text-white font-medium whitespace-nowrap">{album.title}</span>
                    </Link>
                    <button
                      onClick={() => onIgnoreAlbum(album.id)}
                      className={`
                        p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 
                        transition-all duration-300 text-white
                        ${isHovered ? "opacity-100" : "opacity-70"}
                      `}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  
                </div>
              )
            })}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}