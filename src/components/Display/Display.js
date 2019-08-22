import React from 'react'

export default function Display(props) {
    return (
        <div id="display">
            <div id="displayTop">
                {props.oldNumber}
            </div>
            <div id="displayBot">
                <span>
                    {props.operator}
                </span>
                <span>
                    {props.newNumber}
                </span>
            </div>
        </div>
    )
}
