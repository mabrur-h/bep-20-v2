import React from 'react'
import classes from './DeFiSystem.module.scss'

function DeFiSystem() {
  return (
    <div className={classes.box}>
      <div className={classes.dot} />
      <div className={classes.bigBg} >
        <div className={classes.staticBg} />
      </div>
      <div className={classes.texts}>
        <p className={classes.text}>Nevertheless, these activities are done in a peer-to-peer manner with significantly lower cost, a faster time, and greater transparency. These functionalities make our </p>
        <p className={classes.title}><span className={classes.golden}>DeFi system<br /></span> transparent, flexible, convenient, and beneficial for both parties.</p>
      </div>
    </div>
  )
}

export default DeFiSystem