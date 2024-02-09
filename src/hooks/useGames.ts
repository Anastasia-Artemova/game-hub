import { GameQuery } from "../App";
import useData from "./useData";

export interface Platform{
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
  }
  

const useGames = (gameQury: GameQuery) => 
useData<Game>('/games', {params: {
    genres: gameQury.genre?.id, 
    platforms: gameQury.platform?.id,
    ordering: gameQury.sortOrder
}}, 
[gameQury]);

export default useGames;