import React from 'react';

const TextArea = ({ ...props }) => {
    return (
        <textarea
            className="w-full border border-black bg-transparent px-3 py-2 outline-none"
            {...props}
        />
    );
};

export default TextArea;
