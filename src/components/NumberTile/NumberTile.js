import React from 'react'

export default function NumberTile({number, zero, add, dot}) {
    const isZero = zero ? "zero" : ""; {/*CSS STUFF */}
    const classes = `tile numberTile ${isZero}`;
    return dot ?
   (
    <button className={classes} onClick={(e) => {e.preventDefault()}}>
      <div>
       {number}
      </div>
    </button >
    ) 
    : 
    (
    <button  className={classes} onClick={(e) => {add(number)}}>
      <div>
       {number}
      </div>
    </button >
    )
}
