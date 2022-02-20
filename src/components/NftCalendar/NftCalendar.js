import React from 'react'
import classes from './NftCalendar.module.scss'
import NftFinalWord from '../NftFinalWord/NftFinalWord'

import calendarBg from '../../assets/backgrounds/calendar-bg.png'

function NftCalendar() {
  return (
    <div className={classes.calendar}>
      <div className="container">
        <div className={classes.bgBlack}></div>
        <div className={classes.inner}>
          <h3 className={classes.title}>Utilize the NFT Calendar</h3>
          <img className={classes.img} src={calendarBg} alt="calendarBg" />
          <p className={classes.text}>NFT calendars serve as a collection point for NFT drops. Their primary goal is to make the lives of collectors easier by providing them with a central location where they can get ideas. NFT drop calendars offer a variety of NFT drops from a variety of NFT markets.<br/> This eliminates the need for them to spend countless hours looking for artists. The most beneficial aspect of NFT drops is that they increase your visibility while also assisting you in selling your NFT collection more rapidly.</p>
          <NftFinalWord />
        </div>
      </div>
    </div>
  )
}

export default NftCalendar