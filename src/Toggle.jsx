import React, { useState } from 'react';
import { useAuth } from './Identity';

const togglePath = 'https://westmarwick.family/.netlify/functions/toggle';

async function toggle({user}) {
    const response = await fetch(togglePath, {
        headers: {
            'Authorization': `Bearer ${user.token.access_token}`
        }
    });
    return response;
}

export default function Toggle() {
    const { user } = useAuth();
    if (!user) {
        return null;
    }
    const [data, setData] = useState(null);
    const doToggle = async () => {
        const response = await toggle({user});
        setData(response)
    }
    return (
        <React.Fragment>
            <button onClick={doToggle}>Toggle Born</button>
            {data && JSON.stringify(data)}
        </React.Fragment>
    )
}