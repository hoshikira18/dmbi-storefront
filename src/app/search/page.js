'use client';
import { Search } from '@/components/layout';
import React, { useEffect } from 'react';

const SearchPage = () => {
    useEffect(() => {
        document.title = 'Tìm kiếm sản phẩm';
    }, []);
    return (
        <div className="mx-auto max-w-screen-xl space-y-5 py-20">
            <h1 className="text-center text-2xl font-bold text-primary">
                Tìm kiếm sản phẩm
            </h1>
            <div className="mx-auto w-1/2 px-20">
                <Search />
            </div>
        </div>
    );
};

export default SearchPage;
