import { z } from "zod";

export const UserSchema = z.object({
  id: z.number().positive(),
  name: z.string(),
  username: z.string()
});

export const ParseUsers = (data: unknown) => {
  const result = UsersSchema.safeParse(data);

  if (!result.success) {
    console.error("Invalid User response", result.error);
    throw new Error("Invalid User response");
  }

  return result.data;
};

export const UsersSchema = z.array(UserSchema);

export type User = z.infer<typeof UserSchema>;