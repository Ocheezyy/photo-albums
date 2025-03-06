import { useQuery } from "@tanstack/react-query";
import { fetchPhotos } from "@/api";
import { Photo } from "@/schemas";

export const usePhotos = () => {
  return useQuery<Photo[], Error>({
    queryKey: ["photos"],
    queryFn: fetchPhotos,
  });
};