import './App.css';
import { Home } from './component/Home';
import { Navbar } from './component/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Product } from './Product';
import { Products } from './component/Products';
import { Login } from './component/Login';
import Regester from './component/Regester';
import About from './About';
import Contact from './component/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/products' element={<Product />} />
        <Route exact path='/products/:id' element={<Products />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/regester' element={<Regester />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        {/* <Home /> */}
      </Routes>
    </div>
  );
}

export default App;
