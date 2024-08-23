import { BreadCrumb, Title } from '../common';
import TextViewer from '../homepage/about/text-view';
import ProductGeneral from './product-general';
import ProductImage from './product-image';

export const metadata = {
    title: 'DMB Industrial',
    description:
        'DMB Industrial, chuyên cung cấp các sản phẩm công nghiệp, máy móc, thiết bị công nghiệp, dịch vụ sửa chữa, bảo trì máy móc công nghiệp',
};

const ProductDetailTemplate = ({ product }) => {
    const breadcrumbData = [
        {
            title: 'Trang chủ',
            href: '/',
        },
        {
            title: 'Sản phẩm',
            href: '/products',
        },
        {
            title: product?.title,
            href: `/products/${product?.id}`,
        },
    ];

    return (
        <div className="mx-auto mb-10 min-h-[80vh] max-w-screen-xl">
            <BreadCrumb className={'pt-5'} data={breadcrumbData} />
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 grid grid-cols-7 gap-3 rounded border bg-white py-5 shadow md:gap-0 lg:col-span-9">
                    <ProductImage
                        className="col-span-7 md:col-span-3"
                        images={product?.images.map((image) => image.url)}
                    />
                    <ProductGeneral
                        className="col-span-7 md:col-span-4"
                        product={product}
                    />
                    <div className="col-span-7 overflow-hidden px-5">
                        <Title className="px-0 text-base md:px-0 md:text-lg">
                            Mô tả
                        </Title>
                        <TextViewer content={product?.description} />
                    </div>
                </div>

                <div className="col-span-3 hidden lg:block">
                    <div className="rounded border bg-white p-3 shadow">
                        <div className="border-b pb-2 text-sm font-semibold uppercase text-gray-600">
                            Chính sách hỗ trợ khách hàng
                        </div>
                        <ul className="list-disc space-y-2 px-5 py-2 text-sm">
                            <li>Thiết kế hệ thống xử lý khí thải</li>
                            <li>Thiết kế hệ thống xử lý khí thải</li>
                            <li>Thiết kế hệ thống xử lý khí thải</li>
                            <li>Thiết kế hệ thống xử lý khí thải</li>
                            <li>Thiết kế hệ thống xử lý khí thải</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailTemplate;
