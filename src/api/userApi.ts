import axios from "axios";
import { ParseUsers, User } from "@/schemas";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = async (): Promise<User[]> => {
  const { data } = await axios.get<User[]>(API_URL);
  return ParseUsers(data);
};