/* eslint-disable @next/next/no-img-element */
'use client';

import { NEWS_PER_PAGE } from '@/constants/constants';
import { useProducts } from 'medusa-react';
import ListPagesToChoose from './list-pages-in-newsPage';
import ListNewsInNewsPage from './list-news-in-newsPage';
import ListProductInNewsPage from './list-products-in-newsPage';

const NewsTemplate = ({ news, page }) => {
    const { products, isLoading } = useProducts();
    console.log(products);
    const maxLengthPage = 2;
    const maxNumber =
        news?.length % NEWS_PER_PAGE == 0
            ? news?.length / NEWS_PER_PAGE
            : (news?.length - (news?.length % NEWS_PER_PAGE)) / NEWS_PER_PAGE +
              1;
    console.log(maxLengthPage);
    console.log(news);
    return (
        <div className="h-full p-[30px]">
            <div className="block md:flex">
                <ListNewsInNewsPage news={news} />
                <div className="w-1/1 mr-[10px] hidden bg-red-400 md:flex md:w-1/4">
                    <ListProductInNewsPage products={products} />
                </div>
            </div>
            <div className="mt-[20px] text-center">
                <ListPagesToChoose
                    news={news}
                    page={page}
                    maxLengthPage={maxLengthPage}
                    path={'news/'}
                />
            </div>
            <div className="block md:flex">
                <div className="w-1/1 mr-[10px] flex bg-red-400 md:hidden md:w-1/4">
                    <ListProductInNewsPage products={products} />
                </div>
            </div>
        </div>
    );
};

export default NewsTemplate;
