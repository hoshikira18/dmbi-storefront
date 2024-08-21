'use client';

import { SearchIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const Search = ({ setSearchValue }) => {
    const [q, setQ] = useState('');
    return (
        <div className="flex w-full items-center rounded-md border-2 border-gray-300 py-1 pl-3 pr-2">
            <input
                type="text"
                placeholder="Tìm kiếm sản phẩm"
                onChange={(e) => {
                    setQ(e.target.value);
                    setSearchValue && setSearchValue(e.target.value);
                }}
                className="mr-2 w-full truncate bg-transparent text-sm outline-none lg:w-4/5"
            />
            <Link
                href={!setSearchValue ? `/search/${q}` : '/products'}
                className="rounded-md bg-primary px-4 py-2 text-white"
            >
                <SearchIcon size={18} />
            </Link>
        </div>
    );
};

export default Search;
