import React from 'react'

import githubLogo from '../../img/github-logo.png'

export default function Display(props) {
    return (
        <div id="display">
            <div id="displayTop">
                <a href="https://github.com/jakubmoryc/calculator/tree/master" target="_blank" rel="noopener noreferrer" title="See code on GitHub"> 
                    <img src={githubLogo} id="github-logo" alt="GitHub"/>
                </a>
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
