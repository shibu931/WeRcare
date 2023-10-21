import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
