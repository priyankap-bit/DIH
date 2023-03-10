import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import StackedBarChart from './Components/Charts/StackedBarChart/StackedBarChart';
import ILTTwentySummary from './Pages/ILTTwentySummary/ILTTwentySummary';
import ILTTdataTowers from './Pages/ILTTdataTowers/ILTTdataTowers';

import ILTTloginPage from './Pages/ILTTloginPage/ILTTloginPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<ILTTdataTowers />} />
          <Route path='/login' element={<ILTTloginPage />} />
          <Route path='/ilt20-summary' element={<ILTTwentySummary />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;