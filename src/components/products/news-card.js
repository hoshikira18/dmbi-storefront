/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

const NewsCard = ({ post }) => {
    return (
        <Link href={`/news/${post.id}`} className="flex w-full space-x-2">
            <img
                src={post.image}
                className="h-[80px] w-1/3 rounded"
                alt={post.title}
            />
            <div className="w-2/3 space-y-2">
                <div className="text-sm font-medium">{post.title}</div>
            </div>
        </Link>
    );
};

export default NewsCard;
