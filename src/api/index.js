import { getRequest } from './fetch';

class Request {
    getFeeds() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await getRequest('http://forum-express-api.herokuapp.com/api/restaurants/feeds');
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
                const res = await getRequest('http://forum-express-api.herokuapp.com/api/restaurants/feeds');
                resolve(
                    res.comments.map(c => ({...c}))
                );
            } catch (error) {
                reject(error);
            }
        })
    }

    getRestaurants() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await getRequest('http://forum-express-api.herokuapp.com/api/restaurants');
                resolve(
                    res
                );
            } catch (error) {
                reject(error);
            }
        })
    }
}

export default Request;