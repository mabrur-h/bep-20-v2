import './assets/styles/main.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
import Modal from './containers/Modal/Modal';
import Header from './containers/Header/Header'
import Footer from './containers/Footer/Footer'

// pages
import Home from './pages/Home/Home';
import GameFi from './pages/GameFi/GameFi';
import LearnToEarn from './pages/LearnToEarn/LearnToEarn';
import Nft from './pages/Nft/Nft';
import DeFi from './pages/DeFi/DeFi';


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Modal/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/game-fi' element={<GameFi/>} />
        <Route path='/learn-play' element={<LearnToEarn/>} />
        <Route path='/nfts' element={<Nft/>} />
        <Route path='/defi' element={<DeFi/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
