import { cn } from '@/lib/utils';
import { Bookmark } from 'lucide-react';
import React from 'react';

const GeneralInfoItem = ({ label, value, className = '' }) => {
    return (
        <div className={cn('flex items-center space-x-1 text-sm', className)}>
            <label className="flex items-center space-x-1 font-semibold">
                <Bookmark size={16} />
                <span>{label}: </span>
            </label>
            <span>{value}</span>
        </div>
    );
};

export default GeneralInfoItem;
