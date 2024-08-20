/* eslint-disable react/display-name */
import React from 'react';

const TextArea = React.forwardRef(({ ...props }, ref) => {
    return (
        <textarea
            ref={ref}
            className="w-full border border-black bg-transparent px-3 py-2 outline-none"
            {...props}
        />
    );
});

export default TextArea;
