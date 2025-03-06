import { z } from "zod";

export const AlbumSchema = z.object({
  id: z.number().positive(),
  userId: z.number().positive(),
  title: z.string()
});

export const ParseAlbums = (data: unknown) => {
  const result = AlbumsSchema.safeParse(data);

  if (!result.success) {
    console.error("Invalid Album response", result.error);
    throw new Error("Invalid Album response");
  }

  return result.data;
};

export const AlbumsSchema = z.array(AlbumSchema);

export type Album = z.infer<typeof AlbumSchema>;