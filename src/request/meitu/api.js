import axios from "axios"

let httpUrl = ''
let bendi = ''




export function getTu(params) {
    return new Promise((resolve, reject) => {
        axios.get(httpUrl, {
            params: params,
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    })


}


export function getImgDetails(params) {
    return new Promise((resolve, reject) => {
        axios.get('http://101.43.185.20:8089/', {
            params: { imgURL: params },
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    })


}

export function getType() {
    return new Promise((resolve, reject) => {
        axios.get('http://127.0.0.1:8088', {})
            .then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err.data);
            })
    })
}

export function setType(params) {
    return new Promise((resolve, reject) => {
        axios.get('http://127.0.0.1:8088', {
            params: params,
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    })
}