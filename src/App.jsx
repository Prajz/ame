import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Explore from './components/Explore';


function App() {

  return (
  <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/index.html" element={<div className='uer'><Explore /></div>} />
      <Route path="*" element={<Home />} />
    </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
