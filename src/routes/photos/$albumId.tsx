import ImageGrid from '@/components/ImageGrid';
import Spinner from '@/components/Spinner';
import { useAlbumById, useErrorNotification, usePhotosByAlbum } from '@/hooks';
import useStore from '@/store';
import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react';

export const Route = createFileRoute('/photos/$albumId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { setTitle, setShowButtons, setToggleUrl, setPhotoAlbumUrl } = useStore();
  const { albumId } = Route.useParams();
  const { data: albums } = useAlbumById(albumId);
  const { data: photos, isLoading: photosLoading, error: photosError } = usePhotosByAlbum(albumId);

  useEffect(() => {
    setTitle(albums?.[0].title || `Album ${albumId}`);
    setShowButtons(true);
    setToggleUrl("/photos/");
    setPhotoAlbumUrl(`/photos/${albumId}`);
  }, [albumId, albums, setTitle, setShowButtons, setToggleUrl, setPhotoAlbumUrl])

  useErrorNotification({
      isError: photosError !== null,
      title: "Error getting photos",
      description: photosError?.message
  });

  if (photosLoading) {
    return <Spinner />
  }

  return <ImageGrid photos={photos} />
}
