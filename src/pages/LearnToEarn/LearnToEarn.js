import React, {useEffect, useContext} from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"
import LearnCard from '../../components/LearnCard/LearnCard'
import './LearnToEarn.scss'
import { ModlaContext } from '../../Context/ModalContext'

import BEP from '../../assets/images/bep.png'
import BEP2 from '../../assets/images/bep2.png'
import EarnCard from '../../components/EarnCard/EarnCard'

import Coin from '../../assets/images/coin.png'
import Diverce from '../../assets/images/diverce.png'
import Process from '../../assets/images/proccess.png'
import umbrella from '../../assets/images/umbrella.png'

function LearnToEarn() {

    const {setState} = useContext(ModlaContext)

    useEffect(() => {
        setState(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='learn-earn'>
            <div className="learn-earn-hero">
                <h2 className="learn-earn-hero__title">
                    What is Learn to Earn & Play to Earn?
                </h2>

                <div className="learn-earn-hero-inner container">
                    <LearnCard
                        img={BEP}
                        title='Let`s be honest, cryptocurrency modules and courses are found everywhere.'
                        text='Every social media influencer and so-called entrepreneurs “lecture” about crypto investments and marketing. But none of these are standard. And most of the time, these crypto modules are costly. This is where BEP-20 Learn to Earn strategy comes in. 
                    '
                    />

                    <LearnCard
                        img={BEP2}
                        title='BEP-20 presents our community with the opportunities to learn these investment modules and courses.'
                        text='At the end of each course or module, you will earn. With the spirit of inclusiveness and encouraging communities to learn more, the learn-to-earn incentive programs were built. Those who read or watch videos to complete a certain number of modules or unlock badges are rewarded for their hard work with tokens.
 
                    '
                    />
                </div>

                <section className='learn-earn-bottom'>
                    <div className="learn-earn-bottom__inner container">
                        <h3 className="learn-earn-bottom__title">
                            So is BEP-20 <span>Play to Earn Strategy</span>
                        </h3>

                        <p className="learn-earn-bottom__text">
                            For our gamers, we present an opportunity to play different games with a target in mind. Our gamers can play games and at the completion of tasks, they will be rewarded. Thus, this will allow our users to enjoy different games, simultaneously making good earnings.
                        </p>

                        <h4 className="learn-earn-bottom__subtitle">
                            Our <span>Learn to Earn and Play to Earn</span> Strategies are:
                        </h4>

                        <div className="learn-earn-bottom-wrapper">
                            <EarnCard
                                img={Coin}
                                title='Sustainable'
                                text='backed by prompt payments.
                                '
                            />

                            <EarnCard
                                img={Diverce}
                                title='Transparent and diverse.'
                                text='Since it provides ample and equal opportunities to all of our users regardless of their background and financial status.
                                '
                            />

                            <EarnCard
                                img={Process}
                                title='Accountable and smooth process.'
                                text='Every single activity is properly tracked and the users have peace of mind to focus on their learning and skills. 
                                '
                            />

                            <EarnCard
                                img={umbrella}
                                title='Оne umbrella platform'
                                text='Our DApps allow the users to make all the financial activities under one umbrella platform that befits all of their needs.
                                '
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default LearnToEarn