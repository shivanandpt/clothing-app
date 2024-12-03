import "./ProductList.css";
import { ProductListProps } from "../Product"
import ProductCard from "../productCard/ProductCard";
import { useEffect, useState } from "react";
import ProductDetail from "../productDetails/ProductDetail";
import { useDispatch, useSelector } from "react-redux";
import { sortProducts, filterProduct } from "../../store/productSlice/productSlice";

const ProductList: React.FC<ProductListProps> = ({

}) => {

    const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch();
    const [sortOrder, setSortOrder] = useState('low-to-high');

    useEffect(() => {
        dispatch(sortProducts(sortOrder));
    }, [sortOrder]);

    useEffect(() => {
        dispatch(sortProducts(sortOrder));
    }, [])

    const handleSort = (e: any) => {
        setSortOrder(e.target.value);
    }
    return (
        <>
            <div className="sort-dropdown">
                <label htmlFor="sort">Sort by Price: </label>
                <select id="sort" value={sortOrder} onChange={handleSort}>
                    {/*  <option value="default">Default</option> */}
                    <option value="low-to-high">Low to High</option>
                    <option value="high-to-low">High to Low</option>
                </select>
            </div>
            <div>
                <div className="product-grid">
                    {products.map((product) => (
                        <ProductCard key={product.id}  {...product} ></ProductCard>
                    ))}
                </div>

            </div>

        </>
    );

}

export default ProductList;