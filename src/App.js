import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './common/Header'
import Footer from './common/Footer'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default App
