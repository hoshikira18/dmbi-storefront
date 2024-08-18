import { getNews } from '@/api/news/api';
import { NewsTemplate } from '@/components/news';

const News = async () => {
    const news = await getNews();
    return <NewsTemplate news={news?.posts} />;
};

export default News;
