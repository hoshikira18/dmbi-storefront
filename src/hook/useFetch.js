import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useFetch(url, options) {
    const [data, setData] = useState(null);
    const [err, setErr] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async function () {
            try {
                setLoading(true);
                const response = await axios.get(url, options);
                setData(response.data);
            } catch (err) {
                setErr(err);
            } finally {
                setLoading(false);
            }
        })();
    }, [url]);

    return { data, err, loading };
}
