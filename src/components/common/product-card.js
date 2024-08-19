import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */
const ProductCard = ({ product }) => {
    return (
        <Link
            href={`/products/${product.id}`}
            className="mx-4 min-h-64 space-y-2 rounded-md bg-white px-3 pb-5 pt-3 md:mx-3"
        >
            <img
                src={product?.thumbnail}
                alt={product?.title}
                className="h-60 w-full object-contain"
            />
            <p className="line-clamp-2 text-base font-medium">
                {product?.title}
            </p>
        </Link>
    );
};

export default ProductCard;
