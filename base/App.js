import logo from './logo.svg';
import './App.css';
import { Routes ,Route, BrowserRouter } from 'react-router-dom';
import './Quest.css'

import Quest from './Quest';
import MainPage from './MainPage';
import FirstQ from './FirstQ';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="two" element={<Quest />} />
        <Route path='first' element={<FirstQ />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
