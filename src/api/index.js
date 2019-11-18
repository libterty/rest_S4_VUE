import { getRequest, postRequest, postAuthRequest, deleteRequest } from './fetch';
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
                    resolve (
                        res
                    );
                } else {
                    const res = await getRequest(config.REST_BASE_URL+url);
                    resolve (
                        res
                    );
                }
            } catch (error) {
                reject(error);
            }
        })
    }

    getAdminRestaurants() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await getRequest(config.ADMIN_BASE_URL+'/restaurants');
                resolve (
                    res.restaurants
                );
            } catch (error) {
                reject(error);
            }
        })
    }

    getRestaurant(url) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await getRequest(config.ROOT_URL+url);
                resolve (
                    res
                );
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

    getTopRestaurants() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await getRequest(config.REST_BASE_URL + '/top');
                resolve (
                    res.restaurants.map(r => ({...r}))
                );
            } catch (error) {
                reject(error);
            }
        })
    }

    getRestaurantDashboard(url) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await getRequest(config.ROOT_URL + url);
                resolve(
                    res.restaurant
                );
            } catch (error) {
                reject(error);
            }
        })
    }

    postSignIn(data) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await postRequest(config.ROOT_URL+'/signin', data);
                res.data.status === 'success' ? localStorage.setItem('credit', JSON.stringify(res.data)) : null;
                resolve(
                    res.data
                );
            } catch (error) {
                reject
            }
        })
    }

    postSignUp(data) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await postRequest(config.ROOT_URL+'/signup', data);
                resolve (
                    res.data
                );
            } catch (error) {
                reject
            }
        })
    }

    postComment(data) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await postAuthRequest(config.ROOT_URL+'/comments', data);
                resolve (
                    res.data
                );
            } catch (error) {
                reject(error);
            }
        })
    }

    postFavorite(rId) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await postAuthRequest(config.ROOT_URL+'/favorite/'+rId);
                resolve (
                    res
                );
            } catch (error) {
                reject(error);
            }
        })
    }

    postLike(rId) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await postAuthRequest(config.ROOT_URL+'/like/'+rId);
                resolve (
                    res
                );
            } catch (error) {
                reject(error);
            }
        })
    }

    postFollow(uId) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await postAuthRequest(config.ROOT_URL+'/following/'+uId);
                resolve (
                    res
                );
            } catch (error) {
                reject(error);
            }
        })
    }

    deleteComment(cId) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await deleteRequest(config.ROOT_URL+'/comments/'+cId)
                resolve (
                    res
                );
            } catch (error) {
                reject(error);
            }
        })
    }

    deleteFavorite(rId) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await deleteRequest(config.ROOT_URL+'/favorite/'+rId)
                resolve(
                    res
                );
            } catch (error) {
                reject(error);
            }
        })
    }

    deleteLike(rId) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await deleteRequest(config.ROOT_URL+'/like/'+rId)
                resolve(
                    res
                );
            } catch (error) {
                reject(error);
            }
        })
    }

    deleteFollow(uId) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await deleteRequest(config.ROOT_URL+'/following/'+uId);
                resolve (
                    res
                );
            } catch (error) {
                reject(error);
            }
        })
    }
}

export default Request;