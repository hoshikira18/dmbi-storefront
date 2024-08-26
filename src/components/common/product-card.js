import { formatNumber } from '@/lib/utils';
import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */
const ProductCard = ({ product }) => {
    return (
        <Link
            href={`/products/${product.id}`}
            className="min-h-64 space-y-2 rounded-md border bg-white px-3 pb-5 pt-3 shadow md:mx-3"
        >
            <img
                src={product?.thumbnail}
                alt={product?.title}
                className="h-60 w-full object-contain"
            />
            <p className="line-clamp-3 text-base font-medium">
                {product?.title}
            </p>
            {
                product?.metadata?.price && 
            <p className="text-base font-medium text-red-500">
                {formatNumber(product?.metadata?.price)} vnđ
            </p>
            }
        </Link>
    );
};

export default ProductCard;
