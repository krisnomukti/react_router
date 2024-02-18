import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './pages/About';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>hello, world!</h1>} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
