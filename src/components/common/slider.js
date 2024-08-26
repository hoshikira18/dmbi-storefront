'use client';
import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';

const Slider = ({
    children,
    options = {},
    autoplay = true,
    delay = 3000,
    loop = true,
    className,
}) => {
    const plugins = autoplay ? [Autoplay({ playOnInit: true, delay })] : [];
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop, ...options },
        plugins
    );

    return (
        <div className={cn('relative overflow-hidden')} ref={emblaRef}>
            <div
                className={cn(
                    'grid auto-cols-[50%] grid-flow-col gap-x-5 pb-10 sm:auto-cols-[33%] md:auto-cols-[25%] lg:auto-cols-[20%]',
                    className
                )}
            >
                {children}
            </div>
        </div>
    );
};

export default Slider;
