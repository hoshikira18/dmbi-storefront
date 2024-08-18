/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const PartnerSlider = ({ partners, options }) => {
    const [emblaRef] = useEmblaCarousel(options, [
        Autoplay({ playOnInit: true, delay: 3000 }),
    ]);

    return (
        <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="grid auto-cols-[50%] grid-flow-col grid-rows-1 px-3 pb-10 md:auto-cols-[30%] md:px-8 lg:auto-cols-[20%] lg:px-10">
                {partners?.map((partner, index) => {
                    return (
                        <div
                            key={index}
                            className="mx-2 h-[50px] bg-white px-3 sm:h-[80px] md:mx-3 md:h-[100px]"
                        >
                            <img
                                src={partner.image_url}
                                alt={partner.name}
                                className="h-full w-full object-contain"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PartnerSlider;
