// use axios for api call
import axios from "axios";

function getProductsData() {
    axios.get('https://movie-fake-server.herokuapp.com/products')
    
}

const sortProducts = () => {};

const filterProducts = () => {};

export { getProductsData, sortProducts, filterProducts };
