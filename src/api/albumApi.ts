import axios from "axios";
import { Album } from "@/schemas";

const API_URL = "https://jsonplaceholder.typicode.com/albums";

export const fetchAlbums = async (): Promise<Album[]> => {
  const { data } = await axios.get<Album[]>(API_URL);
  return data;
};