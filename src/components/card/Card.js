import React from 'react'
import './card.scss'

function Card({title}) {
  return (
    <div className='card'>
        <h4 className='card__title'>{title}</h4>
    </div>
  )
}

export default Card