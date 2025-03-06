import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "@/api";
import { User } from "@/schemas";

export const useUsers = () => {
  return useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
};