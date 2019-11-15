import { getRequest } from './fetch';
import config from '../../config';

class Request {
    getFeeds() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await getRequest(config.REST_BASE_URL+'/feeds');
                resolve(
                    res.restaurants.map(r => ({...r}))
                );
            } catch (error) {
                reject(error);
            }
        })
    }

    getComments() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await getRequest(config.REST_BASE_URL+'/feeds');
                resolve(
                    res.comments.map(c => ({...c}))
                );
            } catch (error) {
                reject(error);
            }
        })
    }

    // Bug fix is required for more user interaction!!
    getRestaurants(url) {
        return new Promise(async (resolve, reject) => {
            try {
                if (!url) {
                    const res = await getRequest(config.REST_BASE_URL);
                    resolve(
                        res
                    );
                } else {
                    const res = await getRequest(config.REST_BASE_URL+url);
                    resolve(
                        res
                    );
                }
            } catch (error) {
                reject(error);
            }
        })
    }

    getTopUsers() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await getRequest(config.USER_BASE_URL+'/top')
                resolve(
                    res.users.map(u => ({...u}))
                );
            } catch (error) {
                reject(error)
            }
        })
    }
}

export default Request;