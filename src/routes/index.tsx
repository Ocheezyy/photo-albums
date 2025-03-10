import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from "react";
import { useUsers, useAlbums, useErrorNotification } from "@/hooks";
import UserAccordion from '@/components/UserAccordion';
import Spinner from '@/components/Spinner';
import useStore from '@/store';

const UsersComponent = () => {
  const { ignoredAlbums, ignoreAlbum, setTitle, setShowButtons, setPhotoAlbumUrl } = useStore();
  const [openUser, setOpenUser] = useState<number | null>(null);

  const { data: users, isLoading: usersLoading, error: usersError } = useUsers();
  const { data: albums, isLoading: albumsLoading, error: albumsError } = useAlbums();

  const handleToggle = (userId: number) => {
    setOpenUser(openUser === userId ? null : userId)
  }

  useErrorNotification({
    isError: usersError !== null,
    title: "Error getting users",
    description: usersError?.message
  });

  useErrorNotification({
    isError: albumsError !== null,
    title: "Error getting albums",
    description: albumsError?.message
  });

  useEffect(() => {
    setTitle("Users");
    setShowButtons(false);
    setPhotoAlbumUrl("");
  }, [setTitle, setShowButtons, setPhotoAlbumUrl])

  const onIgnoreAlbum = (albumId: number) => {
    ignoreAlbum(albumId);
  }

  if (usersLoading || albumsLoading) {
    return <Spinner />
  }

  return (
    <div className="flex-1 p-4">
        <div className="space-y-2">
          {users?.map((user) => (
            <UserAccordion
              key={user.id}
              onIgnoreAlbum={onIgnoreAlbum}
              albums={albums?.filter(album => album.userId === user.id).filter(album => !ignoredAlbums.includes(album.id))}
              user={user}
              isOpen={openUser === user.id}
              onToggle={() => handleToggle(user.id)}
            />
          ))}
        </div>
      </div>
  )
}


export const Route = createFileRoute('/')({
  component: UsersComponent,
});