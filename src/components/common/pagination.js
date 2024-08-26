// 'use client';

// import { cn } from '@/lib/utils';
// import { CircleChevronLeft, CircleChevronRight } from 'lucide-react';
// import React from 'react';

// const Pagination = ({
//     currentPage,
//     totalPages,
//     setCurrentPage,
//     totalItems,
// }) => {
//     const prev = () => {
//         if (currentPage <= 1) return;
//         setCurrentPage((pre) => (pre <= 1 ? 1 : pre - 1));
//     };

//     const next = () => {
//         if (currentPage >= totalPages) return;
//         setCurrentPage((pre) => (pre >= totalPages - 1 ? totalPages : pre + 1));
//     };
//     return (
//         <div className="flex items-center justify-center space-x-2 py-5 text-primary">
//             <button onClick={prev}>
//                 <CircleChevronLeft />
//             </button>
//             <div className="flex items-center justify-center space-x-2">
//                 {Array.from({ length: totalPages }, () => null).map(
//                     (item, index) => {
//                         return (
//                             <button
//                                 key={index + 1}
//                                 className={cn(
//                                     'rounded-full border-2 border-primary px-2',
//                                     `${index + 1 === currentPage && 'bg-primary text-white'}`
//                                 )}
//                                 onClick={() => {
//                                     setCurrentPage(index + 1);
//                                 }}
//                             >
//                                 {index + 1}
//                             </button>
//                         );
//                     }
//                 )}
//             </div>
//             <button onClick={next}>
//                 <CircleChevronRight />
//             </button>
//         </div>
//     );
// };

// export default Pagination;

'use client';

import { cn } from '@/lib/utils';
import { CircleChevronLeft, CircleChevronRight } from 'lucide-react';
import React from 'react';

const Pagination = ({
    currentPage,
    totalPages,
    setCurrentPage,
    totalItems,
}) => {
    const goToPage = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    const prev = () => goToPage(currentPage - 1);
    const next = () => goToPage(currentPage + 1);

    const pageNumbers = [];

    const implement = () => {
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            pageNumbers.push(1, 2);
            pageNumbers.push('...');

            for (let i = 3; i < totalPages - 1; i++) {
                if (i === currentPage) {
                    pageNumbers.push(currentPage);
                }
            }
            pageNumbers.push('...');

            pageNumbers.push(totalPages - 1, totalPages);
        }
    };

    implement();

    return (
        <div className="flex items-center justify-center space-x-2 py-5 text-primary">
            <button
                onClick={prev}
                disabled={currentPage <= 1}
                aria-label="Previous Page"
            >
                <CircleChevronLeft />
            </button>
            <div className="flex items-center justify-center space-x-2">
                {pageNumbers.map((page, index) =>
                    page === '...' ? (
                        <span key={index} className="px-2">
                            ...
                        </span>
                    ) : (
                        <button
                            key={index}
                            className={cn(
                                'rounded-full border-2 border-primary px-2',
                                page === currentPage && 'bg-primary text-white'
                            )}
                            onClick={() => goToPage(page)}
                        >
                            {page}
                        </button>
                    )
                )}
            </div>
            <button
                onClick={next}
                disabled={currentPage >= totalPages}
                aria-label="Next Page"
            >
                <CircleChevronRight />
            </button>
        </div>
    );
};

export default Pagination;
