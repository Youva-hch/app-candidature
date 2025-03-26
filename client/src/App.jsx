import { Routes, Route } from 'react-router-dom';
import './App.css';


import Layout from './component/Layout'
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
   <Routes>
    <Route path="" element={<Layout />} />
    <Route path="/Home" element={<Home />} />
    <Route path="*" element={<NotFound />} />
   </Routes>
  );
}

export default App;