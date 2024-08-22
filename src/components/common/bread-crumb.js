import { cn } from '@/lib/utils';
import Link from 'next/link';

const BreadCrumb = ({ data, className }) => {
    return (
        <div className={cn('py-3', className)}>
            {data.map((item, i) => (
                <Link
                    className="text-base font-medium text-primary"
                    key={item.title}
                    href={item.href}
                >
                    {item.title} {i !== data.length - 1 && <span> / </span>}
                </Link>
            ))}
        </div>
    );
};

export default BreadCrumb;
