import axios from "axios";
import { ParsePhotos, Photo } from "@/schemas";

const API_URL = "https://jsonplaceholder.typicode.com/photos";

export const fetchPhotos = async (): Promise<Photo[]> => {
  const { data } = await axios.get<Photo[]>(API_URL);
  return ParsePhotos(data);
};

export const fetchPhotosByAlbum = async (albumId: string): Promise<Photo[]> => {
  const { data } = await axios.get<Photo[]>(`${API_URL}?albumId=${albumId}`);
  return ParsePhotos(data);
}