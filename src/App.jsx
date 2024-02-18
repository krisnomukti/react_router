import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>hello, world!</h1>} />
        <Route path='/about' element={<h1>hello, react router!</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
