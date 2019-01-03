import React, {useEffect, useCallback, useState} from 'react';
import identity from 'netlify-identity-widget'

export function useAuth() {
    const [user, setUser] = useState(identity.currentUser());
    useEffect(() => {
        identity.init();
        identity.on('login', user => {
            setUser(user);
        })
        identity.on('logout', () => {
            setUser(null);
        })
        identity.on('init', user => {
            console.log('init')
            setUser(user);
        });
        identity.on('error', err => {
            console.error(err);
        })
    }, [])

    const open = useCallback(() => {
        identity.open();
    });

    return {
        open,
        user
    }
}

export default function SecretAuthWrapper({children}) {
    const { open } = useAuth();
    const [numClicks, setNumClicks] = useState(0);

    if (numClicks > 9) {
        open();
        setNumClicks(0);
    }

    return <div onClick={() => setNumClicks(numClicks + 1)}>{children}</div>
}
