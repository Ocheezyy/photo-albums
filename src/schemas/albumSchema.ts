import { z } from "zod";

export const AlbumSchema = z.object({
  id: z.number().positive(),
  userId: z.number().positive(),
  title: z.string()
});

export const AlbumsSchema = z.array(AlbumSchema);

export type Album = z.infer<typeof AlbumSchema>;