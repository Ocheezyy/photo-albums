import { z } from "zod";

export const PhotoSchema = z.object({
  id: z.number().positive(),
  albumId: z.number().positive(),
  thumbnailUrl: z.string().url()
});

export const ParsePhotos = (data: unknown) => {
  const result = PhotosSchema.safeParse(data);

  if (!result.success) {
    console.error("Invalid Photo response", result.error);
    throw new Error("Invalid Photo response");
  }

  return result.data;
};

export const PhotosSchema = z.array(PhotoSchema);

export type Photo = z.infer<typeof PhotoSchema>;