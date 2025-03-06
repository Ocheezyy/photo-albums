import axios from "axios";
import { Photo } from "@/schemas";

const API_URL = "https://jsonplaceholder.typicode.com/photos";

export const fetchPhotos = async (): Promise<Photo[]> => {
  const { data } = await axios.get<Photo[]>(API_URL);
  return data;
};