'use client';
import { useProducts } from 'medusa-react';
import React from 'react';
import { Banner } from '../sections/home';
import { BannerTemplate } from '../common';

const ProductsTemplate = ({ banners }) => {
    const { products, isLoading: isProductsLoading } = useProducts();
    console.log(products);
    return (
        <div className="flex lg:space-x-5">
            <div className="w-1/4 bg-gray-300"></div>
            <div className="w-3/4">
                <BannerTemplate banners={banners} />
            </div>
        </div>
    );
};

export default ProductsTemplate;
