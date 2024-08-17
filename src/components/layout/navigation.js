import { NAV_ITEMS } from '@/constants/constants';
import Link from 'next/link';

const Navigation = () => {
    return (
        <nav className="">
            <ul className="flex items-center justify-around space-x-6 text-sm uppercase text-white">
                {NAV_ITEMS.map((item) => (
                    <li key={item.title}>
                        <Link href={item.url}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
