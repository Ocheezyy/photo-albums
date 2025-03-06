import { useQuery } from "@tanstack/react-query";
import { fetchAlbums } from "@/api";
import { Album } from "@/schemas";

export const useAlbums = () => {
  return useQuery<Album[], Error>({
    queryKey: ["albums"],
    queryFn: fetchAlbums,
  });
};