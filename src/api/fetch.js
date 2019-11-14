import axios from 'axios';
import config from '../../config/index';
const auth = process.env.TOKEN || config.TOKEN;

export const getRequest = url => {
    return axios(url, 
        { headers: 
            { Authorization: auth }
        }
    ).then(res => {
        return res.data
    })
    .catch(err => console.log('fetch err', err.message))
}

