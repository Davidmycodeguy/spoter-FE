import { useState } from 'react';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import Search from '../components/Search';
import { useDebounce } from '../hooks/useDebounce';
import { useSearch } from '../hooks/useSearch';
import { Product } from '../types/types';

interface ISearchPage {}

const SearchPage: React.FC<ISearchPage> = ({}) => {
  const [search, setSearch] = useState('');
  const debouncedValue = useDebounce(search, 250);
  const { data, error, isLoading, isFetching, hasNextPage, fetchNextPage } =
    useSearch(debouncedValue);

  if (error)
    return (
      <div className="mt-5 flex justify-center w-full">
        Error Loading data...
      </div>
    );

  return (
    <div className="flex relative flex-col bg-[#FBFBFA] h-full">
      <div className="w-full sticky top-0 left-0 z-20 bg-white pt-5 pb-7 shadow-md">
        <Search search={search} setSearch={setSearch} />
      </div>
      {isLoading ? (
        <div className="mt-5 flex justify-center w-full">Loading...</div>
      ) : (
        <>
          {data?.pages[0].data.length === 0 ? (
            <div className="mt-5 flex text-red-500 justify-center w-full">
              No results found...
            </div>
          ) : (
            <div className="flex flex-1 flex-col container mx-auto">
              <h4 className="text-3xl font-semibold mt-5">Results</h4>
              <p className="text-gray-400">
                {data?.pages.reduce((acc, page) => acc + page.data.length, 0)}{' '}
                of {data?.pages[0].meta.totalCount}
              </p>
              <div className="grid grid-cols-1 mt-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">
                {data?.pages.map((page) => {
                  return page.data.map((product: Product) => (
                    <ProductCard key={product.id} product={product} />
                  ));
                })}
              </div>
              <div className="w-full flex justify-center my-10">
                {isFetching ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#1AB76C]"></div>
                ) : (
                  hasNextPage && <Button
                    className="text-[#1AB76C] disabled:cursor-not-allowed disabled:text-gray-500"
                    disabled={!hasNextPage || isFetching}
                    onClick={() => fetchNextPage()}
                  >
                    Show more
                  </Button>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
export default SearchPage;
