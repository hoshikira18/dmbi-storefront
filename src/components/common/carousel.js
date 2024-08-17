'use client';
import {
    ArrowBigLeft,
    ArrowBigRight,
    ChevronLeft,
    ChevronRight,
} from 'lucide-react';
import React, { useState } from 'react';
import CarouselButton from './carousel-button';

const Carousel = ({ children: slides, className = '' }) => {
    const [curr, setCurr] = useState(0);

    const prev = () => {
        setCurr(curr === 0 ? slides.length - 1 : curr - 1);
    };

    const next = () => {
        setCurr(curr === slides.length - 1 ? 0 : curr + 1);
    };

    return (
        <div className="group relative overflow-hidden">
            <div
                className="z-10 flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {slides}
            </div>
            <div className="absolute inset-0 hidden animate-fade items-center justify-between px-5 transition-all animate-duration-300 group-hover:flex">
                <CarouselButton onClick={prev} icon={<ChevronLeft />} />

                <CarouselButton onClick={next} icon={<ChevronRight />} />
            </div>
            <div className="absolute bottom-4 left-0 right-0 z-20">
                <div className="flex items-center justify-center space-x-2">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                setCurr(index);
                            }}
                            className={`${index === curr ? 'p-2' : ''} h-3 w-3 cursor-pointer rounded-full bg-white transition-all duration-300`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
