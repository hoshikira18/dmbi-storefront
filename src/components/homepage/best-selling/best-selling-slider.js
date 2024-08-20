'use client';

const { Slider } = require('@/components/common');
const { default: ProductCard } = require('@/components/common/product-card');

const BestSellingSlider = ({ products }) => {
    return (
        <Slider
            className={
                'auto-cols-[100%] sm:auto-cols-[50%] md:auto-cols-[33%] lg:auto-cols-[25%]'
            }
        >
            {products?.map((product, index) => {
                return <ProductCard key={index} product={product} />;
            })}
        </Slider>
    );
};

export default BestSellingSlider;
