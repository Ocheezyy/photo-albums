import { useQuery } from "@tanstack/react-query";
import { fetchAlbumsByUser } from "@/api";
import { User, Album } from "@/schemas";

export const useAlbumsByUser = (user: User) => {
  return useQuery<Album[], Error>({
    queryKey: ["albumsByUser"],
    queryFn: () => fetchAlbumsByUser(user),
  });
};