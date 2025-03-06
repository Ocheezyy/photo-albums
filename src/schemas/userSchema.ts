import { z } from "zod";

export const UserSchema = z.object({
  id: z.number().positive(),
  name: z.string(),
  username: z.string()
});

export const UsersSchema = z.array(UserSchema);

export type User = z.infer<typeof UserSchema>;