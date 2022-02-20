import React from 'react';
import classes from './NftFeatures.module.scss'


import featuresImg1 from '../../assets/images/features-img1.png'
import featuresImg2 from '../../assets/images/features-img2.png'
import featuresImg3 from '../../assets/images/features-img3.png'
import featuresImg4 from '../../assets/images/features-img4.png'

function NftFeatures() {
  return (
    <div className={classes.features}>
      <div className={classes.bgSquare}></div>
      <div className={classes.bgBlack}></div>
      <div className={classes.bgBlack2 + " " + classes.bgBlack}></div>
      <div className="container">
        <div className={classes.inner}>
          <ul className={classes.list}>
            <li className={classes.item}>
              <div className={classes.texts}>
                <p className={classes.title}><span className={classes.golden}>Search Engine Optimization</span> is the King</p>
                <p className={classes.text}>This method is one that most online marketers seem familiar with and have experience in. If you have a website where you sell your artwork, an NFT SEO approach will be pretty beneficial to you. </p>
                <p className={classes.staticText + " " + classes.text}>The quickest way SEO can benefit you is by allowing one's NFT space to appear elevated on search engine result pages (SERPS). This implies that more collectors will be exposed to your page due to this. Please remember that you'll need to invest in Pay-Per-Click advertisements.</p>
              </div>
              <div className={classes.imgs}>
                <img className={classes.img} src={featuresImg1} alt="featuresImage" />
              </div>
            </li>
            <li className={classes.item}>
              <div className={classes.texts}>
                <p className={classes.title}>Get Some <span className={classes.golden}>Influencers on Board</span></p>
                <p className={classes.text}>This method is one that most online marketers seem familiar with and have experience in. If you have a website where you sell your artwork, an NFT SEO approach will be pretty beneficial to you. </p>
                <p className={classes.staticText + " " + classes.text}>The quickest way SEO can benefit you is by allowing one's NFT space to appear elevated on search engine result pages (SERPS). This implies that more collectors will be exposed to your page due to this. Please remember that you'll need to invest in Pay-Per-Click advertisements.</p>
              </div>
              <div className={classes.imgs}>
                <img className={classes.img} src={featuresImg2} alt="featuresImage" />
              </div>
            </li>
            <li className={classes.item}>
              <div className={classes.texts}>
                <p className={classes.title}><span className={classes.golden}>Establish Your Blog</span></p>
                <p className={classes.text}>This method is one that most online marketers seem familiar with and have experience in. If you have a website where you sell your artwork, an NFT SEO approach will be pretty beneficial to you. </p>
                <p className={classes.staticText + " " + classes.text}>The quickest way SEO can benefit you is by allowing one's NFT space to appear elevated on search engine result pages (SERPS). This implies that more collectors will be exposed to your page due to this. Please remember that you'll need to invest in Pay-Per-Click advertisements.</p>
              </div>
              <div className={classes.imgs}>
                <img className={classes.img} src={featuresImg3} alt="featuresImage" />
              </div>
            </li>
            <li className={classes.item}>
              <div className={classes.texts}>
                <p className={classes.title}><span className={classes.golden}>Create an Exciting Trailer</span></p>
                <p className={classes.text}>This method is one that most online marketers seem familiar with and have experience in. If you have a website where you sell your artwork, an NFT SEO approach will be pretty beneficial to you. </p>
                <p className={classes.staticText + " " + classes.text}>The quickest way SEO can benefit you is by allowing one's NFT space to appear elevated on search engine result pages (SERPS). This implies that more collectors will be exposed to your page due to this. Please remember that you'll need to invest in Pay-Per-Click advertisements.</p>
              </div>
              <div className={classes.imgs}>
                <img className={classes.img} src={featuresImg4} alt="featuresImage" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NftFeatures