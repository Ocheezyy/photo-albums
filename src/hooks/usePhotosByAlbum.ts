import { useQuery } from "@tanstack/react-query";
import { fetchPhotosByAlbum } from "@/api";
import { Photo, Album } from "@/schemas";

export const usePhotosByAlbum = (album: Album) => {
  return useQuery<Photo[], Error>({
    queryKey: ["photosByAlbum"],
    queryFn: () => fetchPhotosByAlbum(album),
  });
};