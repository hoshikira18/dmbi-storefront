/* eslint-disable @next/next/no-img-element */
'use client';

import ListNewsInNewsPage from '@/components/news/list-news-in-newsPage';
import ListPagesToChoose from '@/components/news/list-pages-in-newsPage';
import ListProductInNewsPage from '@/components/news/list-products-in-newsPage';
import { NEWS_PER_PAGE } from '@/constants/constants';
import { useProducts } from 'medusa-react';

export const PageNews = ({ news, pageID }) => {
    console.log('kakaka');
    const { products, isLoading } = useProducts();
    console.log(products);
    console.log(pageID);
    const page = +pageID;
    console.log(news);
    const maxLengthPage = 2;
    const maxNumber =
        news?.length % NEWS_PER_PAGE == 0
            ? news?.length / NEWS_PER_PAGE
            : (news?.length - (news?.length % NEWS_PER_PAGE)) / NEWS_PER_PAGE +
              1;
    return (
        <div className="h-full p-[30px]">
            <div className="block md:flex">
                <ListNewsInNewsPage news={news} />
                <div className="w-1/1 mr-[10px] bg-red-400 hidden md:flex md:w-1/4 lg:flex">
                    <ListProductInNewsPage products={products} />
                </div>
            </div>
            <div className="mt-[20px] text-center">
                <ListPagesToChoose
                    news={news}
                    page={page}
                    maxLengthPage={maxLengthPage}
                    path={""}
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

export default PageNews;
