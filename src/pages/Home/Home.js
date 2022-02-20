import React, { useEffect, useContext } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"
import './home.scss'
import WhoWeAre from '../../assets/images/whoWeAre.png'
import { Link } from 'react-router-dom'
import Img from '../../assets/backgrounds/hero.png'
import WinnerTakes from '../../assets/images/winner-takes.png'
import Card from '../../components/card/Card'
import Mission from '../../assets/images/mission.png'
import { ModlaContext } from '../../Context/ModalContext'

function Home() {
    const { setState } = useContext(ModlaContext)
    useEffect(() => {
        setState(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
        AOS.init({duration: 1000})
    }, [])
    return (
        <div className='home'>
            <section className="hero">
                <div className="hero-top">

                    <div className="hero__inner container" data-aos="fade-right">
                        <h1 className="hero__title">
                            BEST CRYPTO  <span>TOKEN</span>
                        </h1>

                        <p className="hero__text">
                            Leverage on any tokens with a protocol trusted with billions for its price execution, super low fees and reliability.
                        </p>

                        <div className="hero__wrapper">
                            <button className="hero__btn">Button 1</button>
                            <button className="hero__btn btn--outelined">Button 2</button>
                        </div>
                    </div>
                </div>

                <img src={Img} alt="" className="hero__absolute-img" />

                <div id='whoWeAre' className="hero-bottom">
                    <div className="hero-bottom__inner container" data-aos="fade-up">
                        <h2 className="hero-bottom__title">
                            Who We Are?
                        </h2>

                        <p className="hero-bottom__text" data-aos="fade-up">
                            BEP-20 is a community-based network that aims at helping gamers, investors, developers, and other users in making borderless transactions.
                        </p>

                        <img height='626' src={WhoWeAre} className='hero-bottom__img' alt="" />

                        <div className="hero-bottom__wrapper">
                            <div className="hero-bottom__left" data-aos="fade-up">
                                <h3 className="hero-bottom__subtitle">
                                    Centralized Control of banks
                                </h3>

                                <p className="hero-bottom__subtext">
                                    If there's a problem that remains an unsolved obstacle for investors, gamers, and developers, it is the Centralized Control of banks and other financial institutions.To overcome this obstacle we have come forward with an all-encompassing solution: Decentralized Finance (DeFi). You can read here <Link className='hero-bottom__defi' to='/aboute-defi'>All You Need to Know About DeFi</Link>

                                </p>
                            </div>

                            <div className="hero-bottom__right" data-aos="fade-up">
                                <h3 className="hero-bottom__subtitle">
                                    We believe that DeFi will revolutionize finance
                                </h3>

                                <p className="hero-bottom__subtext">
                                    by making transactions, savings, exchanging funds, borrowing, and lending an easy and feasible process for everyone. We aim at providing a platform where everyone can make these transactional processes in a trustless and permissionless network in a peer-to-peer manner. Our dream is to provide a sustainable and equal platform to everyone, irrespective of their previous financial status.


                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <section className='winner-takes'>
                    <div className="winner-takes-inner container-second">
                        <h3 className='winner-takes-inner__title' data-aos="fade-up">
                            Eliminating the <span>“Winner takes all”</span> mindset is our motto!
                        </h3>

                        <div className="winner-takes-wrapper" data-aos="fade-up">
                            <div className="winner-takes__left">
                                <h4 className="winner-takes-inner__subtitle">
                                    No need for third parties and middlemen.
                                </h4>

                                <p className="winner-takes-inner__text">
                                    Backed by blockchain, our initiative has the unwavering capability to eliminate the need for third parties and middlemen. Consequently, it will make the transaction process easy, convenient, flexible, and cheaper. Unlike the centralized financial system, BEP-20 provides you with a platform where you can self-bank all your transactions using our DeFi
                                </p>
                            </div>

                            <div className="winner-takes__right">
                                <img className='winner-takes-inner__img' src={WinnerTakes} alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className='unify'>
                    <div className="unify-inner container-second">
                        <h3 className="unify-inner__title">
                            <span>To Unify</span> Gamers, Developers, and Investors Under a Unanimous and Diverse Platform, we Offer Blockchain Tools Like:
                        </h3>

                        <div className="unify-inner-wrapper" >
                            <Card
                                title='DApps'
                            />

                            <Card
                                title='Remix'
                            />

                            <Card
                                title='Metamask'
                            />

                            <Card
                                title='Smart Contracts'
                            />

                            <Card
                                title='Solidity'
                            />

                            <Card
                                title='Truffle & many more'
                            />

                            <Card
                                title='Geth'
                            />

                            <Card
                                title='Ganache'
                            />
                        </div>
                    </div>
                </section>

                <section className='mission'>
                    <div className="mission-inner container">
                        <img src={Mission} className='mission-inner__img' alt="" data-aos="fade-right" />

                        <div className="mission-inner-right" data-aos="fade-left">
                            <h4 className="mission-inner__subtitle">
                                BEP-20 has the mission
                            </h4>
                            <p className="mission-inner__text">
                                to offer a diverse platform for developers and gamers where they can Learn to Earn. Our Learn to Earn mission will enable gamers and developers to equip themselves with the growing technology, simultaneously making good earnings.
                            </p>

                            <h2 className="mission-inner__title">
                                Our mission is to facilitate developers with the inevitable opportunity of “Learn to Earn.”
                            </h2>

                            <p className="mission-inner__text">
                                BEP-20 community presents all the available facilities for developers to learn new technology trends and make handsome earnings out of them. With equal benefits and power, these users will be able to make borderless transactions and can carry out self-banking through our DeFi system.
                            </p>
                        </div>
                    </div>
                </section>

            </section>

        </div>
    )
}

export default Home