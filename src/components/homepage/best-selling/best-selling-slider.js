'use client';

const { Slider } = require('@/components/common');
const { default: ProductCard } = require('@/components/common/product-card');

const BestSellingSlider = ({ products }) => {
    return (
        <Slider
            slidePerPage={{
                default: 1,
                sm: 2,
                md: 3,
                lg: 4,
            }}
        >
            {products?.map((product, index) => {
                return <ProductCard key={index} product={product} />;
            })}
        </Slider>
    );
};

export default BestSellingSlider;
