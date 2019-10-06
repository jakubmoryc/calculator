import React from 'react'

export default function OperationTile({operationSign, operationPassed, explicit}) {
    return (
        <button  
        className="tile operationTile" 
        onClick={(e) => {
                explicit ?
                operationPassed(true) :
                operationPassed(operationSign)
            }}>
            <div className="">
                {operationSign}
            </div>
        </button >
    )
}
