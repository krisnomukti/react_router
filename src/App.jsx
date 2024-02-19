import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans';
import VansDetail from './pages/VansDetail';
import Layout from './components/Layout';

import '../server/server';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/vans' element={<Vans />} />
          <Route path='/vans/:id' element={<VansDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
