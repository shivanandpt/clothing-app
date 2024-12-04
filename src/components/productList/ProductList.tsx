import "./ProductList.css";
import { ProductListProps } from "../../pages/products/Product"
import ProductCard from "../productCard/ProductCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortProducts, filterProduct } from "../../redux/productSlice/productSlice";

const ProductList: React.FC<ProductListProps> = ({

}) => {
    const products = useSelector((state: any) => state.products.products);
    const dispatch = useDispatch();
    const [sortOrder, setSortOrder] = useState('low-to-high');
    /* 
        Add this so that only sorted values shows up, if not added 1st unsorted array will showup and next useEffect will run
        rerender the sorted array, we will see unsorted array for fraction on screen 
     */
    const [productsInitialized, setProductsInitialized] = useState(false);

    useEffect(() => {
        dispatch(sortProducts(sortOrder));
    }, [sortOrder]);

    useEffect(() => {
        dispatch(sortProducts(sortOrder));
        setProductsInitialized(true);
    }, []);

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
                    {productsInitialized && products.map((product: any) => (
                        <ProductCard key={product.id}  {...product} ></ProductCard>
                    ))}
                </div>

            </div>

        </>
    );

}

export default ProductList;