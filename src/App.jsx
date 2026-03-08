
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import FloatingButtons from './components/FloatingButtons'
import Collection from './pages/Collection'
import Sanctuary from './pages/Sanctuary'
import Boardroom from './pages/Boardroom'
import Culinary from './pages/Culinary'
import Journal from './pages/Journal'
import Wellness from './pages/Wellness'
import Travel from './pages/Travel'
import Contact from './pages/Contact'

function App() {

  return (
     <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection/>} />
        <Route path='/sanctuaries' element={<Sanctuary/>} />
        <Route path='/boardroom' element={<Boardroom/>} />
        <Route path='/culinary' element={<Culinary/>} />
         <Route path="/journal" element={<Journal/>} />
        <Route path='/wellness' element={<Wellness/>} />
        <Route path='/travel' element={<Travel/>} />
        <Route path='/contact' element={<Contact/>} />

       
      </Routes>
      <FloatingButtons/>
    </>
  )
}

export default App
