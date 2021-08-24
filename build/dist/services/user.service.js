import axios from '../../_snowpack/pkg/axios.js';
import authHeader from './auth-header.js';
import createInterceptor from './auth-interceptor.js';

const API_URL = 'http://localhost:5000/'
class UserService {
    getPublicDetails() {
        return axios.get(API_URL + 'all');
    }

    async getPrivateDetails({ accessToken, setAccessToken }) {
        try {
            let authInterceptor = createInterceptor(accessToken, setAccessToken);
            let response = await authInterceptor.get(API_URL + 'user-details', { headers: authHeader(accessToken) });
            return { status: response.status, data: response.data };
        } catch (err) {
            return { status: err.status, data: err.data };
        }

    }
}

export default new UserService();