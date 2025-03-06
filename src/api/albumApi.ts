import axios from "axios";
import { Album, ParseAlbums, User } from "@/schemas";

const API_URL = "https://jsonplaceholder.typicode.com/albums";

export const fetchAlbums = async (): Promise<Album[]> => {
  const { data } = await axios.get<Album[]>(API_URL);
  return ParseAlbums(data);
};

export const fetchAlbumsByUser = async (user: User): Promise<Album[]> => {
  const { data } = await axios.get<Album[]>(`${API_URL}?userId=${user.id}`);
  return ParseAlbums(data);
}