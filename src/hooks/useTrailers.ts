import { useQuery } from '@tanstack/react-query';
import { Trailer } from '../entities/Trailers';
import APIClient from '../services/api-client'
import ms from 'ms';



const useTrailers = (id:number) => {
    const apiClient = new APIClient<Trailer>(`/games/${id}/movies`);

    return useQuery({
    queryKey: ['trailers'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
})
};
export default useTrailers