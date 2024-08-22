import { getNews } from '@/api/news/api';
import { Title } from '@/components/common';
import NewsCard from '@/components/homepage/news/news-card';
import { cn } from '@/lib/utils';
import React from 'react';

const News = async ({ className }) => {
    const posts = await getNews(6, 0);
    console.log(posts.length);

    if (posts.length === 0) {
        return <div>Hiện chưa có bài viết nào</div>;
    }

    return (
        <div className={cn('overflow-hidden', className)}>
            <Title className="z-20 bg-primary py-2 text-lg text-white md:py-3 md:text-xl">
                Tin tức sự kiện
            </Title>
            <div className="grid gap-4 py-5 md:grid-cols-1 lg:grid-cols-2">
                {posts.map((p, index) => (
                    <NewsCard key={index} post={p} />
                ))}
            </div>
        </div>
    );
};

export default News;
