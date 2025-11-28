import axios from "axios";

const axiosInstance = axios.create({
    baseUrl: 'https://krishi-link-server-flax.vercel.app/'
})

const useAxios = () => {
    return axiosInstance;
}

export default useAxios