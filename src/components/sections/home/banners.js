import { getBanners } from '@/api/banners/api';
import { BannerTemplate } from '@/components/common';

export const Banners = async () => {
    const banners = await getBanners();
    return <BannerTemplate banners={banners} />;
};

export default Banners;
