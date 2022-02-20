import React, { useEffect, useContext} from 'react'
import './DeFi.scss'
import DeFiHero from '../../components/DeFiHero/DefiHero'
import DeFiItems from '../../components/DeFiItems/DeFiItems'
import { ModlaContext } from '../../Context/ModalContext'

function DeFi() {
    const {setState} = useContext(ModlaContext)

    useEffect(() => {
        setState(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  return (
    <div className='defi'>
      <DeFiHero />
      <DeFiItems />
    </div>
  )
}

export default DeFi