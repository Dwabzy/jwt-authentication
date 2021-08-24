import axios from "../../_snowpack/pkg/axios.js";
import AuthService from './auth.service.js';


function createInterceptor(accessToken, setAccessToken) {
    let authInterceptorInstance = axios.create();
    authInterceptorInstance.interceptors.request.use(
        async (req) => {
            try {
                if (!accessToken) {
                    let newAccessTokenResponse = await AuthService.getNewAccessToken();
                    if (newAccessTokenResponse.status === 200) {
                        let newAccessToken = newAccessTokenResponse.data.accessToken
                        req.headers.Authorization = "Bearer " + newAccessToken;
                        // Set Access Token
                        setAccessToken(newAccessToken);
                    }
                }
                return req;
            }
            catch (err) {
                return req;
            }
        },
        (err) => {
            return Promise.reject(err);
        }
    );
    authInterceptorInstance.interceptors.response.use(undefined,
        async (err) => {
            const originalConfig = err.config;
            try {
                if (err.response && err.response.status === 401 && err.response.data.expired && !originalConfig._retry) {
                    originalConfig._retry = true;
                    let newAccessTokenResponse = await AuthService.getNewAccessToken();
                    if (newAccessTokenResponse.status === 200) {
                        let newAccessToken = newAccessTokenResponse.data.accessToken
                        originalConfig.headers.Authorization = "Bearer " + newAccessToken;
                        // Set Access Token
                        setAccessToken(newAccessToken);
                        return authInterceptorInstance(originalConfig);
                    } else {
                        return Promise.reject(newAccessTokenResponse);
                    }
                }
                else if (err.response && err.response.status === 401 && err.response.data.invalid) {
                    return Promise.reject(err);
                }
                return Promise.reject(err);
            } catch (err) {
                return Promise.reject(err);
            }
        }
    );

    return authInterceptorInstance;
}
export default createInterceptor;