import { getNews } from '@/api/news/api';
import PageNews from '../List_Page/page';

const NewsPage = async (id) => {
    const news = await getNews();
    console.log((id?.params.id));
    console.log(news);
    return (
        <div>
            <PageNews news={news?.posts} pageID={+(id?.params.id)} />
        </div>
    );
};

export default NewsPage;