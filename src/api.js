import { useEffect, useState } from 'react';

const path = "https://api.keyvalue.xyz/ca8aaefe/born";

export async function getBorn() {
    const response = await fetch(path);
    const json = await response.json();
    return Boolean(json);
}

export async function setBorn(born) {
    const response = await fetch(`${path}/${born}`, {
        method: 'POST'
    });
}

export function useBorn() {
    const [bornState, setBornState] = useState(false);
    useEffect(() => {
        let timer;
        async function pollBorn() {
            const born = await getBorn();
            setBornState(born);
            timer = window.setTimeout(pollBorn, 6000);
        }
        pollBorn();
        return () => {
            window.clearTimeout(timer);
        }
    }, []);

    return bornState;
}