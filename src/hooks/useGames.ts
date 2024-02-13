import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
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

const useGames = (gameQury: GameQuery) => useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQury],
    queryFn: ({pageParam = 1}) => 
    apiClient.getAll( {
        params: {
            genres: gameQury.genre?.id, 
            parent_platforms: gameQury.platform?.id,
            ordering: gameQury.sortOrder,
            search: gameQury.searchText,
            page: pageParam
        },
    }),
    getNextPageParam: (lastPage, allPages) => {
        return lastPage.next ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
});


export default useGames;