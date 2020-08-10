import Example1 from './Example1'
    import React from 'react';

export default function Example2(props) {
    return (
        <div>
            <Example1 name="Tushar">- ReactJS</Example1>
            <h2>{props.msg}</h2>
        </div>

    )
}