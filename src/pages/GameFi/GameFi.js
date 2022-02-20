import React, { useContext, useEffect } from 'react'
import { ModlaContext } from '../../Context/ModalContext'
import './GameFi.scss'
import Image from '../../assets/images/gamefiImg.png'
import GameCard from '../../components/GameCard/GameCard'
import Watch from '../../assets/icons/watch.svg'
import Coin from '../../assets/icons/coin.svg'
import Gg from '../../assets/icons/gg.svg'
import Trophy from '../../assets/icons/trophy.svg'

function GameFi() {
    const { setState } = useContext(ModlaContext)
    useEffect(() => {
        setState(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='game'>
            <div className="game-hero">
                <div className="game-hero__content">
                    <h2 className="game-hero__title">
                        What is <span>GAMEFI?</span>
                    </h2>
                </div>
            </div>

            <div className="game-hero-bottom">
                <div className="container">
                    <p className="game-hero-bottom__title">
                        As a gamer, you probably have earned multiple collectibles and awards before. But have you ever exchanged them for real-world spending? Never, right? Well, we are here to solve this mystery of gamers. It has been a long time dream of game that time spent playing games can earn them valued items in the real world. This is where our GameFi comes into play. This became a reality with the latest innovation of GameFi.
                    </p>
                </div>
            </div>

            <section className='game-strategy'>
                <div className="game-strategy-inner container">

                    <div className="game-strategy-left">
                        <h2 className="game-strategy__title">
                            <span>Our GameFi Strategy</span> allows users to turn game points and collectibles into real-world spending!
                        </h2>

                        <p className="game-strategy__text">
                            Given the unattained dreams of gamers worldwide, GameFi came into play to make those dreams real and achievable. By combining the power of the blockchain, Gaming, DeFi, and NFTs, an incredible innovation called GameFi came into existence. It incorporates a reward system for game players who complete a certain number of levels, attain a certain score, or take the lead position on a leaderboard.
                        </p>

                        <p className="game-strategy__text">
                            Play to Earn is the most common GameFi of the day! ( Link back to All You Need to Know About Play to Earn )
                        </p>

                        <h2 className="game-strategy__title">
                            <span>The most common GameFI is the play-to-earn. </span>
                        </h2>

                        <p className="game-strategy__text">
                            Certain GameFis also allow major DeFi services like lending and borrowing, yield farming, NFT rewards, cryptocurrency exchanges, etc.
                        </p>
                    </div>
                    <div className="game-strategy-right">
                        <img src={Image} alt="" />
                    </div>
                </div>
            </section>

            <section className='gamers'>
                <div className="gamers-inner container">
                    <h2 className='gamers__title'>
                        BEP-20 GameFi will allow our gamers to:
                    </h2>

                    <div className="gamers-wrapper">
                        <GameCard
                            title='Real-time rewards, collectibles, and milestones.'
                            img={Watch}
                        />

                        <GameCard
                            title='Instant Exchange of those collectibles into real-world spending.'
                            img={Coin}
                        />

                        <GameCard
                            title='Skills enhancement and developing expertise as a gamer.'
                            img={Gg}
                        />

                        <GameCard
                            title='Competing with professional players and gamers. '
                            img={Trophy}
                        />
                    </div>
                </div>
            </section>

            <section className='space'>
                <div className="space-inner">
                    <p className="space-inner__text">
                        In unique cases where GameFi incorporates a DAO, it becomes a global community of gamers. These gamers would earn rewards for playing and vote on next-level changes or new types of games to introduce in the system. As a result, the gamers community will have a platform where they can achieve their dreams and enhance their skills
                    </p>
                </div>
            </section>
        </div>
    )
}

export default GameFi