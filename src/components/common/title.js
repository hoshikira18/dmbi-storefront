import { cn } from '@/lib/utils';
import React from 'react';

const Title = ({ title = '', className = '' }) => {
    return (
        <div
            className={cn(
                className,
                'my-7 text-2xl font-bold uppercase text-primary'
            )}
        >
            {title}
        </div>
    );
};

export default Title;
