import React from 'react';

const Input = ({ placeholder = '', ...props }) => {
    return (
        <input
            {...props}
            placeholder={placeholder}
            className="w-full border border-black bg-transparent px-3 py-2 outline-none"
        />
    );
};

export default Input;
