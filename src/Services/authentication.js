import { BASE_URL } from "../constants/baseUrl";
const login = async ({ email, password }) => {
    try {
        const response = await fetch(`${BASE_URL}/auth/login/`, { method: 'POST', headers: {
            'Content-Type': 'application/json' 
          }, body: JSON.stringify({ email, password }) })
        
        const data = await response.json();
        return data
    } catch (error) {
        console.error('Error', error);
    }
}

const register = async ({ name, email, password, avatar }) => {
    console.log({ name, email, password, avatar })
    try {
        const response = await fetch(`${BASE_URL}/users/`, { method: 'POST', headers: {
            'Content-Type': 'application/json' 
          }, body: JSON.stringify({ name, email, password, avatar }) })
        const data = await response.json();
        return data
    } catch (error) {
        console.error('Error', error);
    }
}

export {register, login};

