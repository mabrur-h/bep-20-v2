import React from 'react'
import defiHeroBg from '../../assets/backgrounds/defi-hero-bg.svg'
import classes from './DefiHero.module.scss'

function DeFiHero() {
  return (
    <div className={classes.hero}>
      <div className="container">
        <div className={classes.inner}>
          <div className={classes.texts}>
            <h2 className={classes.title}>All You Need to Know About <span className={classes.golden}>DeFi</span></h2>
            <ul className={classes.list}>
              <li className={classes.item}> <span className={classes.desc}>Studies show that over the years, only 1% of the global population is rich, and the rest 99% fall under the category of either poor, working-class, or labor. This alarming 1% remains constant despite enormous technological advancements. The reason behind this grave human labor crisis remains one major driving force: The Centralized Financial System.</span> </li>
              <li className={classes.item}> <span className={classes.desc}>A centralized financial system limits the opportunities of gaining wealth through constricted resources of financial activities. Developers, gamers, and investors are left behind in this centralized financial system. Ultimately, this limits the wealth opportunities to the 1% who accumulate wealth. </span> </li>
              <li className={classes.item}> <span className={classes.desc}>This is where the Decentralized Financial System AKA DeFi comes into play. It broadens the transaction and opportunities of financial activities. It makes transactions, borrowing, and lending borderless and limitless. From peer-to-peer transactions to sustainable and real-time currency exchange, DeFi opens numberless opportunities for crypto investors, gamers, and developers.</span> </li>
            </ul>
          </div>
          <div className={classes.imgs}>
            <img className={classes.img} src={defiHeroBg} alt="defibg" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeFiHero