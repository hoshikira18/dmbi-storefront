import React from 'react';

const ProductCardSkeleton = () => {
    return (
        <div className="mx-3 rounded-md border bg-white p-5 shadow">
            <div className="h-60 animate-pulse rounded-md bg-gray-300"></div>
            <div className="my-2 mr-10 h-4 animate-pulse rounded-md bg-gray-300"></div>
            <div className="mt-10 h-4 w-10 animate-pulse rounded-md bg-gray-300"></div>
        </div>
    );
};

export default ProductCardSkeleton;
