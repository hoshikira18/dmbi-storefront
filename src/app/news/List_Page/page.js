/* eslint-disable @next/next/no-img-element */
'use client';

import BodyOfNews from '@/components/news/body-of-news-template';
import Link from 'next/link';

export const PageNews = ({ news, pageID }) => {
    console.log('kakaka');
    console.log(pageID);
    const page = +pageID;
    console.log(news);
    const number = 3;
    const maxLengthPage = 2;
    const maxNumber =
        news?.length % number == 0
            ? news?.length / number
            : (news?.length - (news?.length % number)) / number + 1;
    return (
        <div className="h-full p-[30px]">
            <BodyOfNews news={news} number={number} page={page} />
            <div className="mt-[20px] text-center">
                <div className="inline-flex">
                    <ul>
                        <Link href={`${1}`} key={1}>
                            <li className="mx-[2px] inline-flex rounded-full border-[1px] border-primary text-primary">
                                <button className="h-[30px] w-[30px]">«</button>
                            </li>
                        </Link>
                        {news?.map((item2, index2) =>
                            index2 % number == 0 &&
                            index2 / number + 1 <= page + maxLengthPage &&
                            index2 / number + 1 >= page - maxLengthPage ? (
                                index2 / number + 1 == page ? (
                                    <li
                                        key={item2.id}
                                        className="mx-[2px] inline-flex rounded-full border-[1px] border-primary bg-primary text-white"
                                    >
                                        <Link
                                            href={`${index2 / number + 1}`}
                                            key={index2 / number}
                                        >
                                            <button className="h-[30px] w-[30px]">
                                                {(index2 - (index2 % number)) /
                                                    number +
                                                    1}
                                            </button>
                                        </Link>
                                    </li>
                                ) : (
                                    <li
                                        key={item2.id}
                                        className="mx-[2px] inline-flex rounded-full border-[1px] border-primary text-primary"
                                    >
                                        <Link
                                            href={`${index2 / number + 1}`}
                                            key={index2 / number}
                                        >
                                            <button className="h-[30px] w-[30px]">
                                                {(index2 - (index2 % number)) /
                                                    number +
                                                    1}
                                            </button>
                                        </Link>
                                    </li>
                                )
                            ) : null
                        )}
                        <Link href={`${maxNumber}`} key={maxNumber}>
                            <li className="mx-[2px] inline-flex rounded-full border-[1px] border-primary text-primary">
                                <button className="h-[30px] w-[30px]">»</button>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PageNews;
