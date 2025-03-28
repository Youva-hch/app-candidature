import { Routes, Route } from 'react-router-dom';
import './App.css';
import Connect from './connexion/connect.jsx';


import Layout from './component/layout'
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
   <Routes>
    <Route path="/connexion" element={<Connect />} />
    <Route path="" element={<Layout />} />
    <Route path="/Home" element={<Home />} />
    <Route path="*" element={<NotFound />} />
   </Routes>
  );
}

export default App;