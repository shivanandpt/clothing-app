
import "./Home.css"
import Navbar from "./navbar/Navbar";
import ProductList from "../product/productList/ProductList";
import { products } from "../product/Product"
const Home = () => {

    return (
        <div className="home">
            <Navbar></Navbar>
            <ProductList products={products}></ProductList>
            {/* <ProductDetail></ProductDetail> */}
            {/*  <Panel images={showcaseImages}>
            </Panel>
            <NewArrival products={newArrivalProducts}>
            </NewArrival>
            <div className="product-cards">
                <h2>Explore more</h2>
                <div className="card-list">
                    {products.map((product) => (
                        <ProductCard key={product.id} {...product}></ProductCard>
                    ))}
                </div>
            </div> */}
        </div>
    );
}

export default Home;