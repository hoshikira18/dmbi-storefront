/* eslint-disable react/display-name */
import React from 'react';

const Input = React.forwardRef(({ placeholder = '', ...props }, ref) => {
    return (
        <input
            ref={ref}
            {...props}
            placeholder={placeholder}
            className="w-full border border-black bg-transparent px-3 py-2 outline-none"
        />
    );
});

export default Input;
