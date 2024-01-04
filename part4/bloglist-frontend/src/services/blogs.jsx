import axios from 'axios';
const baseUrl = '/api/blogs';

const getAll = () => {
    return axios.get(baseUrl)
        .then(response => response.data)
        .catch(error => {
            console.error('Error fetching blogs:', error);
            throw error;
        });
};

const create = (newBlog) => {
    return axios.post(baseUrl, newBlog)
        .then(response => response.data)
        .catch(error => {
            console.error('Error creating blog:', error);
            throw error;
        });
};

export default { getAll, create };