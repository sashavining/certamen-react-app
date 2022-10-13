import React, { useState } from 'react'
import { useEffect } from 'react'

const Card = ({title, body, makeSelection, value, currentSelection}) => {
    const [bgClass, setBgClass] = useState('background-primary-light')

    useEffect(
        () => {
          if (value !== currentSelection) setBgClass('background-primary-light')
          else setBgClass('background-primary-dark')
        },
        [currentSelection, value]
      );    

    const handleClick = () => {
        makeSelection(value)
    }

    return (
        <div className={`text-secondary text-center corners-rounded-5 px-3 pb-3 m-3 mb-6 mobile-mb-2 ${bgClass}`} onClick={handleClick}>
            <h3 className="my-1">{title}</h3>
            {body}
        </div>
    )
}

export default Card