/* eslint-disable @next/next/no-img-element */
import { getStore } from '@/api/store/api';

const Standee = async () => {
    const store = await getStore();

    return (
        <div>
            <img src={store?.metadata?.standee} alt="dmbi-standee" />
        </div>
    );
};

export default Standee;
