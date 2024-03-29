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
import HostVans from './pages/host/HostVans';
import HostVanDetail from './pages/host/HostVanDetail';

import Detail from './components/host/Detail';
import Pricing from './components/host/Pricing';
import Photos from './components/host/Photos';

import '../server/server';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VansDetail />} />

          <Route path='host' element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='reviews' element={<Reviews />} />
            <Route path='vans' element={<HostVans />} />

            <Route path='vans/:id' element={<HostVanDetail />}>
              <Route index element={<Detail />} />
              <Route path='pricing' element={<Pricing />} />
              <Route path='photos' element={<Photos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
