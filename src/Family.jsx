import React from 'react';

import './Family.css';
import { ReactComponent as MaleSymbol } from './Male.svg';
import { ReactComponent as FemaleSymbol } from './Female.svg';
import { useBorn } from './api';

export default function Family() {
    const born = useBorn();
    return (<section className="family">
    <Female />
    <Male />
    <Baby born={born}/>
    <Baby born={born}/>
    </section>)
}

function Male(props) {
    return <MaleSymbol color="lightblue" {...props} />
}

function Female(props) {
    return <FemaleSymbol color="pink" {...props} />
}

function Baby({born}) {
    if (!born) {
        return <Spinner />
    }
    return <Male color="lightblue" width="50px" />
}

function Spinner() {
    return <div className="spinner" />
}