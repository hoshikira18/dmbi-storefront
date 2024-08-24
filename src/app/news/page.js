import { getNews } from '@/api/news/api';
import { NewsTemplate } from '@/components/news';
import { NEWS_PER_PAGE } from '@/constants/constants';


const News = async () => {
    const news = await getNews(NEWS_PER_PAGE, 0);
    console.log("length: ", news.length)
    return <NewsTemplate news={news}  page={1} />;
};

export default News;
