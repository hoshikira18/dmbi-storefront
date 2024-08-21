'use client';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const Dropdown = ({ children, label, open = false }) => {
    const [isOpen, setIsOpen] = useState(open);
    return (
        <div className="space-y-3">
            <div
                onClick={() => {
                    setIsOpen((pre) => !pre);
                }}
                className="flex items-center space-x-5 border-b text-lg font-semibold uppercase text-primary"
            >
                <label className="w-full cursor-pointer text-wrap">
                    {label}
                </label>
                <button
                    className={cn(
                        isOpen && 'rotate-180',
                        'transition-all duration-200'
                    )}
                >
                    <ChevronDown />
                </button>
            </div>
            <div
                className={cn(
                    'animate-fade-down px-3 animate-duration-200',
                    !isOpen && 'hidden'
                )}
            >
                {children}
            </div>
        </div>
    );
};

export default Dropdown;
