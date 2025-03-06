import ImageGrid from '@/components/ImageGrid';
import Spinner from '@/components/Spinner';
import { useErrorNotification, usePhotos } from '@/hooks';
import useStore from '@/store';
import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react';

export const Route = createFileRoute('/photos/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { setTitle, setShowButtons, setToggleUrl, photoAlbumUrl } = useStore();
  const { data: photos, isLoading: photosLoading, error: photosError } = usePhotos();

  useErrorNotification({
    isError: photosError !== null,
    title: "Error getting photos",
    description: photosError?.message
  });

  useEffect(() => {
    setTitle("All Photos");
    setShowButtons(true);
    setToggleUrl(photoAlbumUrl);
  }, [setTitle, setShowButtons, setToggleUrl, photoAlbumUrl])

  if (photosLoading) {
    return <Spinner />
  }

  return <ImageGrid photos={photos} />
}
