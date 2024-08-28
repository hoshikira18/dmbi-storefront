/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';

const NewsItem = ({ news }) => {
    return (
        <Link
            href={`/news/${news.id}`}
            className="mb-[30px] block min-h-[225px] rounded-md bg-white p-[15px] pr-[3vw] shadow"
        >
            <div className="sm:block md:flex">
                <div className="mr-[15px] inline min-h-[200px] w-[30vw] items-center sm:max-h-[20vh] md:h-[20vh]">
                    <img
                        className="container inline h-[100%] max-h-[30vw] object-cover"
                        src={news.image}
                        alt={news.title}
                    />
                </div>
                <div className="sm:w-1/1 relative mr-[5px] min-h-[200px] content-between sm:max-h-[25vh] sm:pt-[10px] md:max-h-[30vh] md:w-3/5 md:pt-0">
                    <div>
                        <div className="w-[70vw] truncate text-2xl font-medium text-primary md:w-[40vw]">
                            {news.title}
                        </div>
                        <div className="max-h-[4.5em] overflow-hidden text-ellipsis text-justify md:max-h-[7.5em]">
                            <p className="inline">{news.description}</p>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 mt-[20px]">
                        <button className="btn w-[100px] rounded border-[2px] border-solid border-primary text-primary md:w-[120px]">
                            Xem thêm
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default NewsItem;
