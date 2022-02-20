import React from 'react'
import './GameCard.scss'

function GameCard({img, title}) {
  return (
    <div className='game-card'>
        <img src={img} alt="" className="game-card__img" />

        <h4 className="game-card__title">
            {title}
        </h4>
    </div>
  )
}

export default GameCard