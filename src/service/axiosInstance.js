import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://cometake.net",
    timeout: 10000, // 10 seconds,
});

// Requet Interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        // Add Authoriztion token to headers if available.
        const token = localStorage.getItem('authToken');
        if(token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        //Handle request error
        return Promise.reject(error);
    }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        // Handle response (e.g., format data)
        return response.data;
    },
    (error) => {
        // Handle errors (e.g., token expiration, server errors then display error message)
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error(`API request error: ${error.response.status} - ${error.response.statusText}`);
            if (error.response.status === 401) {
                // Unauthorized, clear the token and redirect to login page
                console.error('Unauthorized! Logging out...');
                localStorage.removeItem('authToken');
                window.location.href = '/login';
            }
        } else if (error.request) {
            // The request was made but no response was received
            console.error('API request error: No response received');
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('API request error: ', error.message);
        }
        return Promise.reject(error);
    }
)

export default axiosInstance;