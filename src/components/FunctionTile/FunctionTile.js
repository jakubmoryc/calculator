import React from 'react'

export default function FunctionTile(props) {
    return (
        <a className="functionTile tile" onClick={props.functionPassed}>
             <div>
                {props.functionName}
            </div>
        </a>
    )
}
