
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './home/Home'
import { ThemeProvider } from './theme/Theme';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Contact from "./contact/Contact.tsx";
import AboutPage from './about/AboutPage.tsx';
import NewArrival from './newArrival/NewArrival.tsx';
import { Provider } from 'react-redux';
import store from './store/store.ts';
import ProductDetail from './product/productDetails/ProductDetail.tsx';
import Navbar from './home/navbar/Navbar.tsx';
import Cart from './cart/Cart.tsx';
function App() {

  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
          <Router>
            <Navbar></Navbar>
            <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='contact' element={<Contact></Contact>}> </Route>
              <Route path='about' element={<AboutPage></AboutPage>}></Route>
              <Route path='newArrival' element={<NewArrival></NewArrival>}></Route>
              <Route path='products' element={<Home></Home>}></Route>
              <Route path='cart' element={<Cart></Cart>}></Route>
              <Route path='products/:id' element={<ProductDetail></ProductDetail>}></Route>
            </Routes>
          </Router>
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default App
