/* eslint-disable @next/next/no-img-element */
import { getProducts } from '@/api/products/api';
import { formatNumber } from '@/lib/utils';
import Link from 'next/link';

const Products = async () => {
    const products = await getProducts({
        limit: 5,
        order: 'created_at',
    });
    return (
        <div className="space-y-2 border-gray-600 px-2 py-4">
            {products?.map((product) => {
                return (
                    <Link
                        key={product?.id}
                        href={`/products/${product.id}`}
                        className="flex w-full space-x-2 border-b pb-2"
                    >
                        <img
                            src={product.thumbnail}
                            className="h-[80px] w-1/3 rounded"
                            alt={product.title}
                        />
                        <div className="w-2/3 space-y-2">
                            <div className="line-clamp-2 text-sm font-medium">
                                {product.title}
                            </div>
                            <span className="text-sm font-semibold text-red-600">
                                {formatNumber(product?.metadata?.price)} vnđ
                            </span>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default Products;
