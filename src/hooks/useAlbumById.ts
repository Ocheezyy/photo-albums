import { useQuery } from "@tanstack/react-query";
import { fetchAlbumById } from "@/api";
import { Album } from "@/schemas";

export const useAlbumById = (albumId: string) => {
  return useQuery<Album[], Error>({
    queryKey: ["albumById"],
    queryFn: () => fetchAlbumById(albumId),
  });
};