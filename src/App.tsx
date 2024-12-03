
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './home/Home'
import { ThemeProvider } from './theme/Theme';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Contact from "./contact/Contact.tsx";
import AboutPage from './about/AboutPage.tsx';
import NewArrival from './newArrival/NewArrival.tsx';
import ProductDetail from './product/productDetails/ProductDetail.tsx';

function App() {

  return (
    <>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='contact' element={<Contact></Contact>}> </Route>
            <Route path='about' element={<AboutPage></AboutPage>}></Route>
            <Route path='newArrival' element={<NewArrival></NewArrival>}></Route>
            <Route path='products' element={<Home></Home>}></Route>
            {/* <Route path='products/:id' element={<ProductDetail></ProductDetail>}></Route> */}
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App