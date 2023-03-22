import './App.css';
import ClippedDrawer from './components/ClippedDrawer';
import Dashboard from './pages/Dashboard/Dashboard';
import MealsRecomendation from './pages/Meals/MealsRecomendation';
import Journal from './pages/Journal/Journal';
import Times from './pages/Calendar/Times'; // import the Times component
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ClippedDrawer />}>
          <Route index element={<Dashboard />} />
          <Route path='calendar' element={<Times />} /> {/* add this new Route element */}
          <Route path='mealsRecommendation' element={<MealsRecomendation />} />
          <Route path='journal' element={<Journal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
