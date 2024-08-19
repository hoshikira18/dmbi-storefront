/* eslint-disable @next/next/no-img-element */
import { getProducts, getProductTags } from '@/api/products/api';
import Title from '@/components/common/title';
import BestSellingSlider from '@/components/homepage/best-selling/best-selling-slider';

const BestSelling = async () => {
    const productTags = await getProductTags({
        order: 'created_at',
        limit: 1,
    });

    const bestSellingProducts = await getProducts({
        tags: [productTags[0].id],
    });

    console.log(bestSellingProducts);
    console.log(bestSellingProducts.length);

    return (
        <div className="bg-third mb-10 rounded-md border shadow">
            <Title className="text-center">Sản phẩm bán chạy</Title>
            <BestSellingSlider products={bestSellingProducts} />
        </div>
    );
};

export default BestSelling;
