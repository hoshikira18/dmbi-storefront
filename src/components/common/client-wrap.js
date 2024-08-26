'use client';

import { useState } from 'react';

const ClientWrap = ({ children }) => {
    const [test, setTest] = useState();
    return <div>{children}</div>;
};

export default ClientWrap;
