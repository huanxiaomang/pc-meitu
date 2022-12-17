import axios from "axios"

let httpUrl = 'http://101.43.185.20:3000/'


export function getSearchMusic(param) {
    return new Promise((resolve, reject) => {
        axios.get(`http://101.43.185.20:3000/search?keywords=${param}`, {
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    })


}
