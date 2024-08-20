import Link from 'next/link';

const BreadCrumb = ({ data }) => {
    return (
        <div className="py-3">
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
