import "./ProductList.css";
import { ProductListProps } from "../Product"
import ProductCard from "../productCard/ProductCard";
import { useEffect, useState } from "react";
import ProductDetail from "../productDetails/ProductDetail";

const ProductList: React.FC<ProductListProps> = ({
    products,
}) => {
    const [sortOrder, setSortOrder] = useState('low-to-high');
    const [productData, setProductData] = useState(products);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleClick = (e: any, id: number) => {
        const productClicked = productData.find((product) => product.id === id);
        if (productClicked) {
            setSelectedProduct(productClicked);
        }
        console.log('handleClick', selectedProduct)
    }
    const sortProducts = (order: string, data: any) => {
        switch (order) {
            case 'high-to-low':
                return [...data].sort((a, b) => b.price - a.price);
            default:
                return [...data].sort((a, b) => a.price - b.price);
        }
    }
    // useEffect(() => {
    //     // setSelectedProduct(null);
    // }, []);
    useEffect(() => {
        const sortedProducts = sortProducts(sortOrder, productData);
        setProductData(sortedProducts);
    }, [sortOrder]);

    const handleSort = (e: any) => {
        setSortOrder(e.target.value);
        const sortedProducts = sortProducts(sortOrder, productData);
        setProductData(sortedProducts);
    }
    console.log(selectedProduct)
    return (
        <>
            {!selectedProduct && (<div className="sort-dropdown">
                <label htmlFor="sort">Sort by Price: </label>
                <select id="sort" value={sortOrder} onChange={handleSort}>
                    {/*  <option value="default">Default</option> */}
                    <option value="low-to-high">Low to High</option>
                    <option value="high-to-low">High to Low</option>
                </select>
            </div>)}
            <div>
                {
                    selectedProduct ? (<ProductDetail {...selectedProduct}></ProductDetail>) :
                        (<div className="product-grid">
                            {productData.map((product) => (
                                <ProductCard key={product.id} handleClick={handleClick} {...product} ></ProductCard>
                            ))}
                        </div>)
                }
            </div>

        </>
    );

}

export default ProductList;