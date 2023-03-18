import './App.css'
import ClippedDrawer from './components/ClippedDrawer'
import Account from './pages/Account/Account'
import Calendar from './pages/Calendar/Calendar'
import Dashboard from './pages/Dashboard/Dashboard'
import MealsRecomendation from './pages/Meals/MealsRecomendation'
import Journal from './pages/Journal/Journal'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
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
