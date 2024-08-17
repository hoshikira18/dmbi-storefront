import { SearchIcon } from 'lucide-react';

const Search = () => {
    return (
        <div className="flex w-full items-center rounded-md border-2 border-gray-300 py-1 pl-3 pr-2">
            <input
                type="text"
                placeholder="Tìm kiếm sản phẩm"
                className="mr-2 w-full truncate bg-transparent text-sm outline-none lg:w-4/5"
            />
            <button className="rounded-md bg-primary px-4 py-2 text-white">
                <SearchIcon size={18} />
            </button>
        </div>
    );
};

export default Search;
