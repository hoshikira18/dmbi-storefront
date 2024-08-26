
import { getNews } from '@/api/news/api';
import PageNews from '../List_Page/page';
import { NEWS_PER_PAGE } from '@/constants/constants';

const NewsPage = async (id) => {
    const news = await getNews(NEWS_PER_PAGE,(+(id?.params.id)-1) * NEWS_PER_PAGE);
    console.log(news);
    return (
        <div>
            <PageNews news={news} pageID={+id?.params.id} />
        </div>
    );
};

export default NewsPage;

