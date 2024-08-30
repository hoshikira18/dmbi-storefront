/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import {
    BASE_URL,
    NEWS_PER_PAGE,
    PRODUCTS_PER_PAGE,
} from '@/constants/constants';
import useFetch from '@/hook/useFetch';
import { Pagination, Title } from '../common';
import NewsItem from './news-card';

import ProductItem from './detail/products-card';
import { useEffect, useState } from 'react';
import { useProducts } from 'medusa-react';

const NewsTemplate = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const { data: news, loading } = useFetch(BASE_URL + '/store/posts', {
        params: {
            limit: NEWS_PER_PAGE,
            offset: (currentPage - 1) * NEWS_PER_PAGE,
        },
    });

    useEffect(() => {
        setCurrentPage(1);
    });
    const { products, count } = useProducts({
        limit: 3,
        offset: 0,
    });

    const TOTAL_PAGES = Math.ceil(count / NEWS_PER_PAGE);

    return (
        <div className="mx-auto block min-h-[80vh] max-w-screen-xl">
            <h1 className="px-5 py-5 text-xl font-bold uppercase text-primary md:py-7 md:text-2xl lg:px-0">
                TIN TỨC
            </h1>
            <div className="mx-auto block min-h-[80vh] max-w-screen-xl md:flex">
                <div className="w-1/1 md:w-3/4">
                    <div>
                        <div className="space-y-3 px-[15px] md:px-0 md:pr-[15px]">
                            {news?.posts?.map((newsItem) => (
                                <NewsItem key={newsItem.id} news={newsItem} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <Pagination
                            currentPage={1}
                            totalPages={TOTAL_PAGES}
                            setCurrentPage={setCurrentPage}
                        />
                    </div>
                </div>
                <div className="w-1/1 flex md:block md:w-1/4 md:justify-between">
                    {products?.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewsTemplate;
