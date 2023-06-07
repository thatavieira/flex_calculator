
import { useUser } from '../contexts/UserContext';

import Auth from './Auth';
import Main from './Main';

const Route = () => {

    const { signed } = useUser();

    return (
        <>
            {
                signed
                    ? <Main />
                    : <Auth />
            }
        </>
    )
}

export default Route;