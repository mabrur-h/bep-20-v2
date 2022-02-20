import React, {useContext, useEffect} from 'react'
import NftCalendar from '../../components/NftCalendar/NftCalendar'
import NftFeatures from '../../components/NftFeatures/NftFeatures'
import NftHero from '../../components/NftHero/NftHero'
import './Nft.scss'

import { ModlaContext } from '../../Context/ModalContext'

function Nft() {
  const {setState} = useContext(ModlaContext)

  useEffect(() => {
    setState(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className='nft'>
        <NftHero/>
        <NftFeatures/>
        <NftCalendar/>
    </div>
  )
}

export default Nft