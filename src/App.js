import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductCard from './components/ProductCard';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import ProductDetailPage from './pages/ProductDetailPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navigation';
import ProductsDetail from './components/ProductDetail';
function App() {
  return (   
    <div>      
      <Navigation/>
      <Routes>      
      <Route path='/' element={<HomePage/>} ></Route>
      <Route path='/about' element={<AboutPage/>} ></Route>
      <Route path='/detalle/:id' element={<ProductDetailPage/>}> </Route>      
      <Route path='/*' element={<NotFound/>} ></Route>
    </Routes>
    
    </div> 
        
  );
}

export default App;
