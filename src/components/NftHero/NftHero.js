import React from 'react'
import classes from './NftHero.module.scss';

function NftHero() {
  return (
    <div className={classes.hero}>
      <div className="container">
        <div className={classes.inner}>
          <div className={classes.about}>
            <h2 className={classes.title}><span className={classes.golden}>5 Expert Tips</span> to Promote Your NFT Collections </h2>
            <p className={classes.description}>Leverage on any tokens with a protocol trusted with billions for its price execution, super low fees and reliability.</p>
            <ul className={classes.list}>
              <li className={classes.item}><span className={classes.icon}></span><span className={classes.text}>A unique update from the NFT gallery is introduced to the public market almost every week. But, to maximize your revenues, it is necessary to understand how to advertise your NFT collections. The NFT sector is increasing and providing many artists with an opportunity to make a living. People may still auction their NFT artwork on various NFT auction websites. On the other hand, making a sale needs more than just a product listing.</span></li>
              <li className={classes.item}><span className={classes.icon}></span><span className={classes.text}>NFT collectors will not become aware of your efforts until you actively promote your initiative. Because of this, you must use a strong advertising and marketing approach. Best Paid Ways to Promote your NFT Collection Following are three best-paid ways to market your NFT Collection. </span></li>
            </ul>
          </div>
          <div></div>
          {/* <div className={classes.bacg}>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default NftHero