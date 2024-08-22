import { getBanners } from '@/api/banners/api';
import { BreadCrumb } from '@/components/common';
import { ProductsTemplate, Standee } from '@/components/products';

export const metadata = {
    title: 'DMB Industrial | Sản phẩm',
    description:
        'DMB Industrial, chuyên cung cấp các sản phẩm công nghiệp, máy móc, thiết bị công nghiệp, dịch vụ sửa chữa, bảo trì máy móc công nghiệp',
};

export const dynamic = 'force-dynamic';

const ProductsPage = async () => {
    const banners = await getBanners();

    const breadcrumb = [
        {
            title: 'Trang chủ',
            href: '/',
        },
        {
            title: 'Sản phẩm chung',
            href: '/products',
        },
    ];
    return (
        <div className="mx-auto min-h-[80vh] max-w-screen-2xl">
            <BreadCrumb data={breadcrumb} />
            <ProductsTemplate banners={banners}>
                <Standee />
            </ProductsTemplate>
        </div>
    );
};

export default ProductsPage;
