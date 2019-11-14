import { getRequest } from './fetch';
import config from '../../config';

class Request {
    getFeeds() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await getRequest(config.BASE_URL+'/feeds');
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
                const res = await getRequest(config.BASE_URL+'/feeds');
                resolve(
                    res.comments.map(c => ({...c}))
                );
            } catch (error) {
                reject(error);
            }
        })
    }

    getRestaurants(url) {
        return new Promise(async (resolve, reject) => {
            try {
                if (!url) {
                    const res = await getRequest(config.BASE_URL);
                    resolve(
                        res
                    );
                } else {
                    const res = await getRequest(config.BASE_URL+url);
                    resolve(
                        res
                    );
                }
            } catch (error) {
                reject(error);
            }
        })
    }
}

export default Request;