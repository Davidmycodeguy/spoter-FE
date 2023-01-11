import { useCallback } from 'react';

interface ISearch {
  search: string;
  setSearch: (search: string) => void;
}

const Search: React.FC<ISearch> = ({ search, setSearch }) => {
  
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="container mx-auto">
      <div className="relative w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-gray-500 absolute top-2 left-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>

        <input
          value={search}
          onChange={onChangeHandler}
          type="search"
          className="w-full h-10 focus:outline-[#1AB76C] placeholder:text-lg rounded-full pl-10 pr-5 bg-[#F7F7F7]"
          placeholder="search"
        />
      </div>
    </div>
  );
};
export default Search;
