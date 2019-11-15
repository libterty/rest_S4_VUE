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
    console.log('data', data);
    return axios({
        method: 'POST',
        url: url,
        data: data,
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => { return res})
        .catch(err => console.log('fetch POST err', err.message));
}
