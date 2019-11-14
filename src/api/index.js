import { fetch } from './fetch';

class Request {
    getFeeds() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await fetch('http://forum-express-api.herokuapp.com/api/restaurants/feeds');
                resolve(
                    res.restaurants.map(r => ({...r}))
                );
            } catch (error) {
                reject(error);
            }
        })
    }
}

export default Request;