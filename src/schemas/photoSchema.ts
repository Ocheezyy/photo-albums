import { z } from "zod";

export const PhotoSchema = z.object({
  id: z.number().positive(),
  albumId: z.number().positive(),
  thumbnailUrl: z.string().url()
});

export const PhotosSchema = z.array(PhotoSchema);

export type Photo = z.infer<typeof PhotoSchema>;