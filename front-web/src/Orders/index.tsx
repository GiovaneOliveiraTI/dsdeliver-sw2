import App from "../App"
import './styles.css';
import { ReactComponent as Logo } from './logo.svg';
import StepsHeader from "./StepsHeader";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";
import { OrderLocationData, Product } from "./types";
import { fetchProducts } from "./api";
import OrderLocation from "./OrderLocation";
import OrderSummary from "./OrderSummary";
import Footer from "../Footer";
function Orders() {
    const [products, setProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
    console.log(products);
    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            <div className="orders-container">
                <StepsHeader />
                <ProductList products={products} />
                <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
                <OrderSummary />
            </div>
            <Footer />
        </>

    )
}
export default Orders;