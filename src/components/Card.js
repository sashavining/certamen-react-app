import React, { useState } from 'react'
import { useEffect } from 'react'

const Card = ({title, body, makeSelection, value, currentSelection}) => {
    // what if other card is selected?
    const [isSelected, setIsSelected] = useState(false)
    const [bgClass, setBgClass] = useState('background-lavender')

    useEffect(
        () => {
          if (value !== currentSelection) setBgClass('background-lavender')
          else setBgClass('background-dark-purple')
        },
        [currentSelection, value]
      );    

    const handleClick = () => {
        setIsSelected((prevIsSelected) => !prevIsSelected)
        makeSelection(value)
    }

    return (
        <div className={`text-white text-center corners-rounded-5 ${bgClass}`} onClick={handleClick}>
            <h2>{title}</h2>
            {body}
        </div>
    )
}

export default Card