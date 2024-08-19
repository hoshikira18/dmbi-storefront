import { cn } from '@/lib/utils';
import React from 'react';

const Title = ({ title = '', className = '' }) => {
    return (
        <div
            className={cn(
                'px-3 py-5 text-xl font-bold uppercase text-primary md:px-5 md:py-7 md:text-2xl',
                className
            )}
        >
            {title}
        </div>
    );
};

export default Title;
