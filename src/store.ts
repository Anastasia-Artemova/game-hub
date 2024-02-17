import { create } from "zustand";

export interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder: string;
    searchText: string;
  }

interface GameQueryStore{
    gamequery: GameQuery;
    setSearchtext: (searchText: string) => void;
    setGenreId: (genreId: number) => void;
    setPlatformId: (platformId: number) => void;
    setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>(set => ({
    gamequery: {} as GameQuery,
    setSearchtext: (searchText) => set(state => ({gamequery: { ...state.gamequery, searchText}})),
    setGenreId: (genreId) => set(state => ({gamequery: {...state.gamequery, genreId}})),
    setPlatformId: (platformId) => set(state => ({gamequery: {...state.gamequery, platformId}})),
    setSortOrder: (sortOrder) => set(state => ({gamequery: {...state.gamequery, sortOrder}}))
}))

export default useGameQueryStore;