import axios from "axios";
import { Album, ParseAlbums } from "@/schemas";

const API_URL = "https://jsonplaceholder.typicode.com/albums";

export const fetchAlbums = async (): Promise<Album[]> => {
  const { data } = await axios.get<Album[]>(API_URL);
  return ParseAlbums(data);
};

export const fetchAlbumById = async (albumId: string): Promise<Album[]> => {
  const { data } = await axios.get<Album[]>(`${API_URL}?id=${albumId}`);
  return ParseAlbums(data);
};