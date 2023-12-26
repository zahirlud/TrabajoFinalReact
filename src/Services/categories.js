import { BASE_URL } from "../constants/baseUrl";
const getCategories = async () => {
    try {
        const response = await fetch(`${BASE_URL}/categories`);
        if (!response.ok) {
            throw new Error('Error cargando datos');
        }
        const data = await response.json();
        return data
    } catch (error) {
        console.error('Error', error);
    }
}

export {getCategories};