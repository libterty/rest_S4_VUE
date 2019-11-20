import axios from 'axios';
// import config from '../../config/index';
const auth = JSON.parse(localStorage.getItem('credit')) || null;

export const getRequest = url => {
    return axios(url, 
        { headers: 
            { Authorization: 'Bearer '+auth.token }
        }
    ).then(res => {
        return res.data
    })
    .catch(err => console.log('fetch GET err', err.message));
}

export const postRequest = (url, data) => {
    return axios({
        method: 'POST',
        url: url,
        data: data,
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => { return res })
        .catch(err => console.log('fetch POST err', err.message));
}

export const postAuthRequest = (url, data) => {
    return axios({
        method: 'POST',
        url: url,
        data: data,
        headers: { 'Content-Type': 'application/json', Authorization: 'Bearer '+auth.token}
    })
        .then(res => { return res })
        .catch(err => console.log('fetch POST Auth err', err.message));
}

export const putAuthRequest = (url, data) => {
    return axios({
        method: 'PUT',
        url: url,
        data: data,
        headers: { 'Content-Type': 'application/json', Authorization: 'Bearer '+auth.token}
    })
        .then(res => { return res })
        .catch(err => console.log('fetch PUT Auth err', err.message));
}

export const putAuthRequestWithImg = (url, formData) => {
    console.log('fetch log formdata', formData)
    return axios({
        method: 'PUT',
        url: url,
        formData,
        headers: { 'Content-Type': 'multipart/form-data', Authorization: 'Bearer '+auth.token }
    })
        .then(res => { return res })
        .catch(err => console.log('fetch PUT Auth err', err.message));
}

export const deleteRequest = url => {
    return axios.delete(url, 
        {  headers:
            { Authorization: 'Bearer '+auth.token}
        }
    ).then(res => {
        return res
    })
    .catch(err => console.log('fetch DELETE err', err.message));
}