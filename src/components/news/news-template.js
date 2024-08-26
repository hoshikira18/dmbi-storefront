'use client';

import { BASE_URL } from '@/constants/constants';
import useFetch from '@/hook/useFetch';

const NewsTemplate = () => {
    const { data: news, loading } = useFetch(BASE_URL + '/store/posts', {
        params: {
            limit: 2,
            offset: 1,
        },
    });
    console.log(news?.posts);
    return <div></div>;
};

export default NewsTemplate;
