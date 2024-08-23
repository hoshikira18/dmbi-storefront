import { getNews } from '@/api/news/api';
import { getProduct } from '@/api/products/api';
import { ProductDetailTemplate } from '@/components/products';

export async function generateMetadata({ params }) {
    const product = await getProduct(params.id);

    return {
        title: product.title || 'DMB Industrial',
        description:
            'DMB Industrial, chuyên cung cấp các sản phẩm công nghiệp, máy móc, thiết bị công nghiệp, dịch vụ sửa chữa, bảo trì máy móc công nghiệp',
    };
}

const ProductDetailPage = async ({ params }) => {
    const product = await getProduct(params.id);
    const news = await getNews(3);

    return <ProductDetailTemplate product={product} news={news} />;
};

export default ProductDetailPage;
