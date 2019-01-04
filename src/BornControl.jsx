import React, { useState, useEffect } from 'react';
import { useAuth } from './Identity';
import { setBorn, getBorn } from './api';

export default function Toggle() {
    const { user } = useAuth();

    if (!user) {
        return null;
    }

    return (
        <div>
            <button onClick={() => setBorn(true)}>Born</button>
            <button onClick={() => setBorn(false)}>Not Born</button>
        </div>
    )
}