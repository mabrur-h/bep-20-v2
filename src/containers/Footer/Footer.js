import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/icons/Logo.svg'
import './footer.scss'

import Instagram from '../../assets/icons/instagram.svg'
import Facebook from '../../assets/icons/facebook.svg'
import Twitter from '../../assets/icons/twitter.svg'
import Vk from '../../assets/icons/vk.svg'

function Footer() {
    return (
        <footer className='footer'>
            <div className="footer-inner container">
                <Link className='footer-logo' to='/'>
                    <img src={Logo} alt="" />
                </Link>

                <div className="social-list">
                    <a
                        target='_blank'
                        className='footer-inner__social'
                        href="http://localhost:3000/"
                        rel="noreferrer"
                    >
                        <img src={Instagram} alt="" className="footer-inner__img" />
                    </a>

                    <a
                        target='_blank'
                        className='footer-inner__social'
                        href="http://localhost:3000/"
                        rel="noreferrer"
                    >
                        <img src={Facebook} alt="" className="footer-inner__img" />
                    </a>

                    <a
                        target='_blank'
                        className='footer-inner__social'
                        href="http://localhost:3000/"
                        rel="noreferrer"
                    >
                        <img src={Twitter} alt="" className="footer-inner__img" />
                    </a>

                    <a
                        target='_blank'
                        className='footer-inner__social'
                        href="http://localhost:3000/"
                        rel="noreferrer"
                    >
                        <img src={Vk} alt="" className="footer-inner__img" />
                    </a>
                </div>

                <ul className="header-right">
                    <li className="header__item">
                        <Link to='/' className="header__link link--first">
                            Who are We
                        </Link>
                    </li>
                    <li className='header__item'>
                        <Link to='/learn-play' className="header__link">
                            Learn To Earn and Paly To Earn
                        </Link>
                    </li>

                    <li className='header__item'>
                        <Link to='/nfts' className="header__link">
                            NFTs
                        </Link>
                    </li>

                    <li className='header__item'>
                        <Link to='/game-fi' className="header__link">
                            Gamefi
                        </Link>
                    </li>

                    <li className='header__item'>
                        <Link to='/defi' className="header__link">
                            DeFi
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="footer-info">
                <h4 className="footer-info__title">
                    Copyright © 2022 BEP-20
                    All rights reserved  |  Privacy
                </h4>
            </div>
        </footer>
    )
}

export default Footer