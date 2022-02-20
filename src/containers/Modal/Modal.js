import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ModlaContext } from '../../Context/ModalContext'
import './Modal.scss'

function Modal() {
    const { state, setState } = useContext(ModlaContext)
    const ref = useRef(null)


    const handleClose = (e) => {
        if (e.target === ref.current) {
            setState(!state)
        }
    }

    return (
        <div
            className={`modal ${state ? 'visible' : ''}`}
            onClick={handleClose}
            ref={ref}
        >
            <div className="modal-inner">
                <Link to='/' className='modal__link'>
                    Who are We
                </Link>

                <Link to='/learn-play' className='modal__link'>
                    Learn To Earn and Paly To Earn
                </Link>

                <Link className='modal__link' to='/nfts'>
                    NFTs
                </Link>

                <Link className='modal__link' to='/game-fi'>
                    Gamefi
                </Link>

                <Link className='modal__link' to='/defi'>
                    DeFi
                </Link>
            </div>
        </div>
    )
}

export default Modal