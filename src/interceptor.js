import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`
});

axiosClient.interceptors.response.use((response) => {
    return response;
}, (error) => {
    try {
        const { response } = error;
        if (response.status === 401) {
            console.log(response);
            alert('Oops');
        }
    } catch (error) {
        console.log(error)
    }

    throw error
});

export default axiosClient