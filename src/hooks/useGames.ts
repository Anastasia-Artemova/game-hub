import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
    rating_top: number;
  }
  
  const apiClient = new APIClient<Game>('/games');

const useGames = (gameQury: GameQuery) => useQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQury],
    queryFn: () => 
    apiClient.getAll( {
        params: {
            genres: gameQury.genre?.id, 
            parent_platforms: gameQury.platform?.id,
            ordering: gameQury.sortOrder,
            search: gameQury.searchText
        },
    }),
});


export default useGames;