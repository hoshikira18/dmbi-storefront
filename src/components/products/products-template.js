'use client';
import { useProducts } from 'medusa-react';
import React from 'react';

const ProductsTemplate = () => {
    const { products, isLoading: isProductsLoading } = useProducts();
    console.log(products);
    return <div className=""></div>;
};

export default ProductsTemplate;
