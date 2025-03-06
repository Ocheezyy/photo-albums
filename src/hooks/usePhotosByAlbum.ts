import { useQuery } from "@tanstack/react-query";
import { fetchPhotosByAlbum } from "@/api";
import { Photo } from "@/schemas";

export const usePhotosByAlbum = (albumId: string) => {
  return useQuery<Photo[], Error>({
    queryKey: ["photosByAlbum"],
    queryFn: () => fetchPhotosByAlbum(albumId),
  });
};