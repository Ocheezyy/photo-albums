import axios from "axios";
import { Album, Photo } from "@/schemas";

const API_URL = "https://jsonplaceholder.typicode.com/photos";

export const fetchPhotos = async (): Promise<Photo[]> => {
  const { data } = await axios.get<Photo[]>(API_URL);
  return data;
};

export const fetchPhotosByAlbum = async (album: Album): Promise<Photo[]> => {
  const { data } = await axios.get<Photo[]>(`${API_URL}?albumId=${album.id}`);
  return data;
}