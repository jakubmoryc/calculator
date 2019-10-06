import React from 'react'

export default function FunctionTile(props) {
    return (
        <button className="functionTile tile" onClick={props.functionPassed}>
             <div>
                {props.functionName}
            </div>
        </button>
    )
}
