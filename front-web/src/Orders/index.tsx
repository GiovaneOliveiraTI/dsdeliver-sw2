import App from "../App"
import './styles.css';
import { ReactComponent as Logo } from './logo.svg';
import StepsHeader from "./StepsHeader";
import ProductsList from "./ProductList";
import { useEffect, useState } from "react";
import { OrderLocationData, Product } from "./types";
import { fetchProducts } from "./api";
import OrderLocation from "./OrderLocation";
import OrderSummary from "./OrderSummary";
import Footer from "../Footer";
import { checkIsSelected } from "./helpers";
function Orders() {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
    const totalPrice = selectedProducts.reduce((sum, item) => {
        return sum + item.price;

    }, 0);

    console.log(products);
    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error));
    }, []);

    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = checkIsSelected(selectedProducts, product)

        if (isAlreadySelected) {
            const selected = selectedProducts.filter(item => item.id !== product.id);
            setSelectedProducts(selected);
        } else {
            setSelectedProducts(previous => [...previous, product]);
        }
    }

    return (
        <>
            <div className="orders-container">
                <StepsHeader />
                <ProductsList
                    products={products}
                    onSelectProduct={handleSelectProduct}
                    selectedProducts={selectedProducts}
                    isSelected
                />
                <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
                <OrderSummary amount={selectedProducts.length} 
                totalPrice={totalPrice} 
                />
            </div>
            <Footer />
        </>

    )
}
export default Orders;