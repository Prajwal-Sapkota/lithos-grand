
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import FloatingButtons from './components/FloatingButtons'

function App() {

  return (
     <>
      <Routes>
        <Route path="/" element={<Home />} />
       
      </Routes>
      <FloatingButtons/>
    </>
  )
}

export default App
