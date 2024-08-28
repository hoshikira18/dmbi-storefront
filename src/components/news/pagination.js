'use client'

import { ChevronsLeft, ChevronsRight } from "lucide-react";
import Link from "next/link";

const Pagination = ({currentPage, totalPages, setCurrentPage,}) => {
    
    const goToPage = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    const prev = () => goToPage(currentPage - 1);
    const next = () => goToPage(currentPage + 1);

    const listPage = [];
    const implement = () => {
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                listPage.push(i);
            }
        } else {
            listPage.push(1,2);
            if(currentPage==1 || currentPage==totalPages){
                listPage.push('...');
            }else if(currentPage==2){
                listPage.push(3);
                listPage.push('...');
            }else if(currentPage==3){
                listPage.push(3, 4);
                listPage.push('...');
            }else if(currentPage==totalPages-2){
                listPage.push('...');
                listPage.push(totalPages-3, totalPages-2);
            }else if(currentPage==totalPages-1){
                listPage.push('...');
                listPage.push(totalPages-2);
            }else{
            listPage.push('...');
            listPage.push(currentPage-1, currentPage, currentPage+1);
            listPage.push('...');
            }
            listPage.push(totalPages - 1, totalPages);
        }
    };
    
    implement();
    return (
        <div className="inline-flex">
            <ul>
                <Link href={path + `${1}`}>
                    <li className="mx-[2px] inline-flex text-primary"
                    key={1}>
                        <button className="h-[30px] w-[30px]"><ChevronsLeft className='mt-[9px] rounded-full border-[1px] border-primary size-8' /></button>
                    </li>
                </Link>
                <Link href={path + `${prev(currentPage)}`}>
                    <li className="mx-[2px] inline-flex rounded-full border-[1px] border-primary text-primary"
                    key={1}>
                        <button className="h-[30px] w-[30px]">«</button>
                    </li>
                </Link>
                {listPage.map((item, index) =>
                    item == '...' ? (
                        <li
                            key={item}
                            className="mx-[2px] inline-flex font-bold text-primary h-[30px] w-[30px] justify-center"
                        >
                            {item}
                        </li>
                    ):(
                        +item == currentPage ? (
                            <li
                                key={item}
                                className="mx-[2px] inline-flex rounded-full border-[1px] border-primary bg-primary text-white"
                            >
                                <Link
                                    href={path + `${item}`}
                                >
                                    <button className="h-[30px] w-[30px]">
                                        {item}
                                    </button>
                                </Link>
                            </li>
                        ) : (
                            <li
                                key={item}
                                className="mx-[2px] inline-flex rounded-full border-[1px] border-primary text-primary"
                            >
                                <Link
                                    href={path + `${item}`}
                                >
                                    <button className="h-[30px] w-[30px]">
                                        {item}
                                    </button>
                                </Link>
                            </li>
                        )
                    )
                )}
                <Link href={path + `${next(currentPage)}`}>
                    <li className="mx-[2px] inline-flex rounded-full border-[1px] border-primary text-primary"
                    key={totalPages}>
                        <button className="h-[30px] w-[30px]">»</button>
                    </li>
                </Link>
                <Link href={path + `${totalPages}`}>
                    <li className="mx-[2px] inline-flex text-primary"
                    key={1}>
                        <button className="h-[30px] w-[30px]"><ChevronsRight className='mt-[9px] rounded-full border-[1px] border-primary size-8' /></button>
                    </li>
                </Link>
            </ul>
        </div>
    );
};

export default Pagination;