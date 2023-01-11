import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useSearch = (searchText: string) => {
  const query = useInfiniteQuery({
    queryKey: ['search', searchText],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await axios.get(
        `http://localhost:3005/search?searchText=${searchText}&page=${pageParam}`
      );
      return response.data;
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.meta.hasNextPage) {
        return lastPage.meta.page + 1;
      }
    },
  });

  return query;
};