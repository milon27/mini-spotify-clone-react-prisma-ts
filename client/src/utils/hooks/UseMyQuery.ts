import axios from 'axios';
import { useState } from 'react';
import useMyEffect from './UseMyEffect';

const useMyQuery = <T>(url: string, init: T) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | undefined>(undefined);
    const [data, setData] = useState<T>(init);

    useMyEffect(() => {
        const load = async () => {
            try {
                const { data } = await axios.get(url);
                setData(data);
            } catch (e) {
                setError((e as Error).message);
            } finally {
                setLoading(false);
            }
        };
        load();
    }, []);

    return { data, error, loading };
};
export default useMyQuery;