
import "./Home.css"

import ProductList from "../productList/ProductList";
import { products } from "../../pages/products/Product"
import Carousel from "../carousel/Carousel";
const images = [
    { image: "https://placehold.co/1200x500?text=Image+1", id: 1 },
    { image: "https://placehold.co/1200x500?text=Image+2", id: 2 },
    { image: "https://placehold.co/1200x500?text=Image+3", id: 3 },
    { image: "https://placehold.co/1200x500?text=Image+4", id: 4 },
    { image: "https://placehold.co/1200x500?text=Image+5", id: 5 },
];
const Home = () => {

    return (
        <div className="home">
            <Carousel images={images}></Carousel>
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