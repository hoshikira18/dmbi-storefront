'use client';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const Slider = ({
    children,
    options,
    slidePerPage = {
        default: 2,
        sm: 2,
        md: 3,
        lg: 5,
    },
}) => {
    const [emblaRef] = useEmblaCarousel(options, [
        Autoplay({ playOnInit: true, delay: 3000 }),
    ]);
    return (
        <div className="overflow-hidden" ref={emblaRef}>
            <div
                className={`grid auto-cols-[${100 / slidePerPage.default}%] grid-flow-col grid-rows-1 px-3 pb-10 sm:auto-cols-[${100 / slidePerPage.sm}%] md:auto-cols-[33%] md:px-8 lg:auto-cols-[${100 / slidePerPage.lg}%] lg:px-10`}
            >
                {children}
            </div>
        </div>
    );
};

export default Slider;
