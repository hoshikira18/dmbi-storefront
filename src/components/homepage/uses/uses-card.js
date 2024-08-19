import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */
const UsesCard = ({
    categoryImage = '',
    categoryTitle = '',
    categoryId = '',
}) => {
    return (
        <Link
            href={`/products/categories/${categoryId}`}
            className="block space-y-4 rounded bg-white p-3"
        >
            <div className="h-[200px] rounded">
                <img
                    src={categoryImage}
                    alt={categoryTitle}
                    className="h-full w-full object-contain"
                />
            </div>
            <div className="h-[100px]">
                <div className="text-center text-base font-medium text-primary">
                    {categoryTitle}
                </div>
            </div>
        </Link>
    );
};

export default UsesCard;
