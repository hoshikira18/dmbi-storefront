import { NAV_ITEMS } from '@/constants/constants';
import { Search } from '../layout';
import Link from 'next/link';
import { AlignJustify, X } from 'lucide-react';
import { useState } from 'react';

/* eslint-disable @next/next/no-img-element */
const Header = () => {
    const [isHidden, setIsHidden] = useState('hidden');
    return (
        <header className="sticky top-0 bg-white">
            <div className="relative mx-auto flex max-w-screen-2xl items-center justify-between px-5 py-4 md:px-8 md:py-8">
                {/* logo */}
                <Link href={'/'} className="block w-1/3">
                    <img
                        src={'/LOGODMB.png'}
                        alt="logo"
                        className="h-6 w-auto md:h-8"
                    />
                </Link>

                {/* navigation */}
                <nav
                    className={`${isHidden} animate-fade-down animate-duration-200 absolute left-0 right-0 top-full bg-white transition-all lg:relative lg:block lg:w-full lg:animate-none`}
                >
                    <div className="mb-2 flex justify-center p-2 lg:hidden">
                        <Search />
                    </div>
                    <ul className="flex flex-col items-center justify-center space-y-3 text-base uppercase text-primary transition-all lg:flex-row lg:space-x-10 lg:space-y-0 lg:text-sm xl:space-x-16 xl:text-base">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.title}>
                                <Link href={item.url}>{item.title}</Link>
                            </li>
                        ))}
                        <li
                            onClick={() => {
                                setIsHidden('hidden');
                            }}
                            className="flex w-full cursor-pointer items-center justify-center bg-primary py-2 text-white shadow-md lg:hidden lg:shadow-none"
                        >
                            <X /> <span>Đóng</span>
                        </li>
                    </ul>
                </nav>

                {/* search */}
                <div className="hidden w-1/3 lg:block">
                    <Search />
                </div>

                {/* mobile navigation toggle */}
                <button
                    onClick={() => {
                        setIsHidden(isHidden === 'hidden' ? '' : 'hidden');
                    }}
                    className="rounded-full p-2 transition-all hover:bg-gray-400 lg:hidden"
                >
                    <AlignJustify />
                </button>
            </div>
        </header>
    );
};

export default Header;
