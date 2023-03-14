import { useState } from 'react'
import './App.css'
import ClippedDrawer from './components/ClippedDrawer'
import Account from './pages/Account'
import Calendar from './pages/Calendar'
import Dashboard from './pages/Dashboard'
import MealsRecomendation from './pages/MealsRecomendation'
import Journal from './pages/Journal'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    // <div className="App">
    //   <Login />
    // </div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ClippedDrawer />}>
        <Route index element={<Dashboard />} />
        <Route path='calendar' element={<Calendar />} />
        <Route path='mealsRecommendation' element={<MealsRecomendation />} />
        <Route path='account' element={<Account />} />
        <Route path='journal' element={<Journal />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
