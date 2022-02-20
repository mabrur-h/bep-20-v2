import React from 'react'
// import { finalWordImg } from '../../assets/imgs'
import finalWordImg from '../../assets/images/final-word-img.png'
import classes from '../NftCalendar/NftCalendar.module.scss'

function NftFinalWord() {
  return (
    <div className={classes.finalWord}>
      <img className={classes.miniImg} src={finalWordImg} alt="final-word" />
      <div className={classes.texts}>
        <p className={classes.staticTitle + " " + classes.title}>The Final Word: </p>
        <p className={classes.text}>This blog contains a step-by-step approach to advertising your NFT project in both free and commercial methods. These 5 expert tips will help you better market your NFTs. We hope it was informative for you. </p>
      </div>
    </div>
  )
}

export default NftFinalWord