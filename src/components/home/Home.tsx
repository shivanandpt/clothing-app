
import "./Home.css"

import ProductList from "../productList/ProductList";
import Carousel from "../carousel/Carousel";
import Filter from '../filter/Filter'
import filters from "../../constant/filter";

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
            <div className="app">
                <main className="app-main">
                    <aside className="app-filters">
                        <Filter filters={filters}></Filter>
                    </aside>
                    <section className="app-products">
                        <Carousel images={images}></Carousel>
                        <ProductList ></ProductList>
                    </section>
                </main>
            </div>


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