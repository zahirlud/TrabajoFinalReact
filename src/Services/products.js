import { BASE_URL } from "../constants/baseUrl";
const getProducts = async () => {
    try {
        const response = await fetch(`${BASE_URL}/products`);
        
        const data = await response.json();

        return data
    } catch (error) {
        console.error('Error', error);
    }
}


export {getProducts};



