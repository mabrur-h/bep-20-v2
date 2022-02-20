import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/icons/Logo.svg'
import { ModlaContext } from '../../Context/ModalContext'
import './header.scss'

function Header() {

    const {state, setState} = useContext(ModlaContext)

    return (
        <header className='header'>
            <div className="header__inner container">
                <Link to='/'>
                    <img src={Logo} className='header__logo' alt="" />
                </Link>

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

                <div
                    className={`burger ${state ? 'cross' : ''}`}
                    onClick={() => setState(!state)}
                >
                    <span className='burger__line'></span>
                    <span className='burger__line'></span>
                    <span className='burger__line'></span>
                </div>
            </div>
        </header>
    )
}

export default Header