import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import About from './pages/About';

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </nav>

      <Routes>
        <Route path='/' element={<h1>hello, world!</h1>} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
