import { getNewsCategories } from '@/api/news/api';
import Link from 'next/link';

const NewsCategories = async () => {
    const categories = await getNewsCategories();

    return (
        <ul className="list-disc space-y-2 px-4 text-sm">
            {categories?.map((category, index) => {
                return (
                    <li key={index} className="">
                        <Link
                            href={`/news/categories/${category.id}`}
                            className="hover:border-b-2 hover:border-yellow-600 hover:text-yellow-600"
                        >
                            {category.title}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default NewsCategories;
