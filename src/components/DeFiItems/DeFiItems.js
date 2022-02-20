import React from 'react'
import classes from './DeFiItems.module.scss';
import DeFiSystem from '../DeFiSystem/DeFiSystem';

function DeFiItems() {
  return (
    <div className={classes.items}>
      <div className={classes.darkBg} />
      <div className={classes.bigbg} />
      <div className="container">
        <div className={classes.inner}>
          <div className={classes.texts}>
            <h3 className={classes.title}><span className={classes.golden}>BEP-20</span> Encourages Everyone to Build Good Net Worth</h3>
            <p className={classes.text}>Given these shortcomings of the Centralized Financial System, BEP-20 presents DeFi to our users. Our DeFi system will allow users to gain enough wealth through sustainable investing and a smooth transaction process.<br /><br /> With that being said, BEP-20 eliminates the unnecessary need for third parties to ease the complexities of centralized transactions. DeFi allows users to carry out functions that compare to those accessible in centralized finance such as:</p>
          </div>
          <ul className={classes.list}>
            <li className={classes.item}>
              <div className={classes.innerTexts}>
                <p className={classes.staticTitle}>Staking </p>
                <p className={classes.staticText}>which equates to saving or fixed deposits depending on the staking mechanism.</p>
              </div>
            </li>
            <li className={classes.item}>
              <div className={classes.innerTexts}>
                <p className={classes.staticTitle}>Lending and borrowing </p>
                <p className={classes.staticText}>Equates fixed deposits and loan acquisition</p>
              </div>
            </li>
            <li className={classes.item}>
              <div className={classes.innerTexts}>
                <p className={classes.staticTitle}>Real-time exchange rate </p>
                <p className={classes.staticText}>which equates to saving or fixed deposits depending on the staking mechanism.</p>
              </div>
            </li>
            <li className={classes.item}>
              <div className={classes.innerTexts}>
                <p className={classes.staticTitle}>Cryptocurrency sending and receiving </p>
                <p className={classes.staticText}>Equates transfer and receipt of funds.</p>
              </div>
            </li>
            <li className={classes.item}>
              <div className={classes.innerTexts}>
                <p className={classes.staticTitle}>Cryptocurrency exchange </p>
                <p className={classes.staticText}>Equates exchanging of fiat currencies or Forex (Trading in Pairs). </p>
              </div>
            </li>
            <li className={classes.item}>
              <div className={classes.innerTexts}>
                <p className={classes.staticTitle}>P2P transactions </p>
                <p className={classes.staticText}>where the users can auto-bank their finances and keep proper track of cash flow. </p>
              </div>
            </li>
          </ul>
          <DeFiSystem />
        </div>
      </div>
    </div>
  )
}

export default DeFiItems