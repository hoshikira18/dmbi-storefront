/* eslint-disable @next/next/no-img-element */
'use client';

import Carousel from './carousel';

const BannerTemplate = ({ banners }) => {
    return (
        <div>
            <Carousel className="hidden md:block">
                {banners.map((banner) => (
                    <img
                        key={banner.id}
                        src={banner.image_pc}
                        alt={banner.id}
                        className="object-cover"
                    />
                ))}
            </Carousel>
        </div>
    );
};

export default BannerTemplate;
