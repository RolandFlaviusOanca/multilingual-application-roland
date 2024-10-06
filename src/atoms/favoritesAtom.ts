import { UserType } from "@/lib/types";
import { atom } from "jotai";

const getFavoritesFromStorage = (): UserType[] => {
    if (typeof window !== 'undefined') {
        const storedFavorites = localStorage.getItem("favorites");
        return storedFavorites ? JSON.parse(storedFavorites) : [];
    }
    return [];
};

const setFavoritesToStorage = (favorites: UserType[]) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }
};

export const favoritesAtom = atom<UserType[]>(getFavoritesFromStorage());

export const favoritesWithPersistenceAtom = atom(
    (get) => get(favoritesAtom),
    (get, set, update: UserType[] | ((prev: UserType[]) => UserType[])) => {
        const newFavorites = typeof update === 'function' ? update(get(favoritesAtom)) : update;
        set(favoritesAtom, newFavorites);
        setFavoritesToStorage(newFavorites);
    }
);