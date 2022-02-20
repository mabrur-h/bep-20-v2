import React from 'react'
import './EarnCard.scss'

function EarnCard({img, title, text}) {
  return (
    <div className='earn-card'>
        <img className='earn-card__img' src={img} alt="" />
        <h4 className="earn-card__title">
            {title}
        </h4>
        <p className="earn-card__text">
            {text}
        </p>
    </div>
  )
}

export default EarnCard