import React from 'react'
import './LearnCard.scss'

function LearnCard({img,title,text}) {
  return (
    <div className='learn-card'>
        <img className='learn-card__img' src={img} alt="" />
        <h4 className="learn-card__title">
            {title}
        </h4>
        <p className="learn-card__text">
            {text}
        </p>
    </div>
  )
}

export default LearnCard