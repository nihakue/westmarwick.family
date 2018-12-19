import React from 'react';

import './Family.css';
import { ReactComponent as Dad } from './Dad.svg';
import { ReactComponent as Mom } from './Mom.svg';

export default function Family() {
    return (<section className="family">
    <Mom color="pink" />
    <Dad color="lightblue"/>
    <Baby born={false}/>
    <Baby born={false}/>
    </section>)
}

function Baby({born}) {
    if (!born) {
        return <Spinner />
    }
    return <Dad color="lightblue" width="50px" />
}

function Spinner() {
    return <div class="spinner" />
}