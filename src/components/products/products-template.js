'use client';
import { useProducts } from 'medusa-react';
import React, { useState } from 'react';
import { BannerTemplate, Pagination, ProductCardSkeleton } from '../common';
import ProductCard from '../common/product-card';
import { Search } from '../layout';
import { PRODUCTS_PER_PAGE } from '@/constants/constants';

const ProductsTemplate = ({ banners }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const {
        products,
        isLoading: isProductsLoading,
        count,
    } = useProducts({
        limit: PRODUCTS_PER_PAGE,
        offset: (currentPage - 1) * PRODUCTS_PER_PAGE,
    });

    const TOTAL_PAGES = Math.ceil(count / PRODUCTS_PER_PAGE);

    return (
        <div className="flex px-3 md:px-5 lg:space-x-10 lg:px-8">
            <div className="hidden w-1/4 rounded border bg-white p-5 shadow lg:block">
                <Search />
            </div>
            <div className="w-full lg:w-3/4">
                <div className="overflow-hidden rounded">
                    <BannerTemplate banners={banners} />
                </div>
                <div>
                    {isProductsLoading ? (
                        <div className="grid gap-y-5 py-5 sm:grid-cols-2 md:grid-cols-3">
                            {Array.from(
                                { length: PRODUCTS_PER_PAGE },
                                () => null
                            ).map((_, index) => (
                                <ProductCardSkeleton key={index} />
                            ))}
                        </div>
                    ) : (
                        <div>
                            <div className="grid gap-y-5 py-5 sm:grid-cols-2 md:grid-cols-3">
                                {products?.map((product, index) => (
                                    <ProductCard
                                        key={index}
                                        product={product}
                                    />
                                ))}
                            </div>
                            <Pagination
                                // totalItems={20}
                                totalPages={TOTAL_PAGES}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductsTemplate;
