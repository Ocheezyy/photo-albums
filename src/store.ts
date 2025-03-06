import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { combine } from 'zustand/middleware';

interface StoreState {
  title: string;
  showButtons: boolean;
  toggleUrl: string;
  photoAlbumUrl: string;
  ignoredAlbums: number[];
}

interface StoreActions {
  setTitle: (title: string) => void;
  setShowButtons: (show: boolean) => void;
  setToggleUrl: (url: string) => void;
  setPhotoAlbumUrl: (url: string) => void;
  ignoreAlbum: (albumId: number) => void;
}

const useStore = create(
  persist(
    combine<StoreState, StoreActions>(
      {
        title: 'Users',
        showButtons: false,
        toggleUrl: '/photos',
        photoAlbumUrl: '',
        ignoredAlbums: []
      },
      (set) => ({
        setTitle: (title) => set({ title }),
        setShowButtons: (show) => set({ showButtons: show }),
        setToggleUrl: (url) => set({ toggleUrl: url }),
        setPhotoAlbumUrl: (url) => set({ photoAlbumUrl: url }),
        ignoreAlbum: (albumId) => set((state) => ({
            ignoredAlbums: state.ignoredAlbums.includes(albumId)
              ? state.ignoredAlbums
              : [...state.ignoredAlbums, albumId],
          })),
      })
    ),
    {
      name: 'user-albums-settings-otr',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useStore;