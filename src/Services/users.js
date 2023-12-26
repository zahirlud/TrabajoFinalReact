import { BASE_URL } from "../constants/baseUrl";
const getUsers = async ({userId}) => {
    try {
        const response = await fetch(`${BASE_URL}/users/${userId}`);
        
        const data = await response.json();

        return data
    } catch (error) {
        console.error('Error', error);
    }
}

export {getUsers};