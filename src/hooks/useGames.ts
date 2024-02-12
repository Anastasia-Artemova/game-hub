import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
    rating_top: number;
  }
  

const useGames = (gameQury: GameQuery) => useQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQury],
    queryFn: () => apiClient
    .get('/games', {
        params: {
            genres: gameQury.genre?.id, 
            parent_platforms: gameQury.platform?.id,
            ordering: gameQury.sortOrder,
            search: gameQury.searchText
        },
    })
    .then(res => res.data),
});

// useData<Game>('/games', {params: {
//     genres: gameQury.genre?.id, 
//     platforms: gameQury.platform?.id,
//     ordering: gameQury.sortOrder,
//     search: gameQury.searchText
// }}, 
// [gameQury]);

export default useGames;