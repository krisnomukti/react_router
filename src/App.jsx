import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import HostLayout from './components/HostLayout';

import Home from './pages/Home';
import About from './pages/About';

import Vans from './pages/vans/Vans';
import VansDetail from './pages/vans/VansDetail';

import Dashboard from './pages/host/Dashboard';
import Income from './pages/host/Income';
import Reviews from './pages/host/Reviews';

import '../server/server';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VansDetail />} />

          <Route path='host' element={<HostLayout />}>
            <Route path='host' element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
