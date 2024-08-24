'use client'

import { NEWS_PER_PAGE } from "@/constants/constants";
import Link from "next/link";

const ListPagesToChoose = ({news, page, maxLengthPage, path}) => {
    return (
        <div className="inline-flex">
                    <ul>
                        <Link href={path+`${page-1}`}>
                            <li className="mx-[2px] inline-flex rounded-full border-[1px] border-primary text-primary">
                                <button className="h-[30px] w-[30px]">«</button>
                            </li>
                        </Link>
                        {news?.map((item2, index2) =>
                            index2 % NEWS_PER_PAGE == 0 &&
                            index2 / NEWS_PER_PAGE < page + maxLengthPage &&
                            index2 / NEWS_PER_PAGE > page - maxLengthPage ? (
                                index2 / NEWS_PER_PAGE + 1 == page ? (
                                    <li
                                        key={item2.id}
                                        className="mx-[2px] inline-flex rounded-full border-[1px] border-primary bg-primary text-white"
                                    >
                                        <Link
                                            href={path+`${index2 / NEWS_PER_PAGE + 1}`}
                                            key={index2 / NEWS_PER_PAGE}
                                        >
                                            <button className="h-[30px] w-[30px]">
                                                {(index2 - (index2 % NEWS_PER_PAGE)) /
                                                    NEWS_PER_PAGE +
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
                                            href={path+`${index2 / NEWS_PER_PAGE + 1}`}
                                            key={index2 / NEWS_PER_PAGE}
                                        >
                                            <button className="h-[30px] w-[30px]">
                                                {(index2 - (index2 % NEWS_PER_PAGE)) /
                                                    NEWS_PER_PAGE +
                                                    1}
                                            </button>
                                        </Link>
                                    </li>
                                )
                            ) : null
                        )}
                        <Link href={path+`${page+1}`}>
                            <li className="mx-[2px] inline-flex rounded-full border-[1px] border-primary text-primary">
                                <button className="h-[30px] w-[30px]">»</button>
                            </li>
                        </Link>
                    </ul>
                </div>
    );
};

export default ListPagesToChoose;