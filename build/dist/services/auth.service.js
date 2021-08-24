import axios from '../../_snowpack/pkg/axios.js';
import authHeader from './auth-header.js';
import createInterceptor from './auth-interceptor.js';

const API_URL = 'http://localhost:5000/'
class AuthService {
    async login({ email, password }, setAccessToken) {

        let response = await axios.post(API_URL + "auth/login", {
            email,
            password
        })
        if (response.data.accessToken) {
            setAccessToken(response.data.accessToken);
        }

        return response;
    }

    async logout() {
        let response = await axios.put(API_URL + "auth/logout");
        return response;
    }

    async signup({ firstName, lastName, email, password }) {
        let response = await axios.post(API_URL + "auth/signup", {
            firstName,
            lastName,
            email,
            password
        });
        return response;
    }

    async getNewAccessToken() {
        try {
            let response = await axios.get(API_URL + "token");
            return response;
        } catch (err) {
            return err.response;
        }
    }

    async verifyAccessToken(accessToken, setAccessToken) {

        let authInterceptor = createInterceptor(accessToken, setAccessToken);
        try {
            let response = await authInterceptor.get(API_URL + "auth/verify", { headers: authHeader(accessToken) });
            return response;
        }
        catch (err) {
            return ({ status: err.status });
        }
    }
}

export default new AuthService();