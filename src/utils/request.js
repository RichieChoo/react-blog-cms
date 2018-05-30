/**
 * Created by Richie on 2018/4/12
 */
import 'es6-promise';
import 'whatwg-fetch';

import config from '../api';

const requestHeaders = {
    //加上会出错
    "Content-Type": "application/json"
};


function tokenHeader(token) {
    return {
        "Content-Type": "application/json",
        'X-Auth-Token':token
    }
}


export function getRequestHeader(path,header) {
    return fetch(path, {
        method:'GET',
        mode: config.MODE,
        headers: header,
    }).then((response) => {
        return response.json();
    })
}


export function getRequest(path) {
    return fetch(path, {
        method:'GET',
        mode: config.MODE,
        headers: requestHeaders,
    }).then((response) => {
        return response.json();
    })
}


export function getRequestDetail(token, path) {
    return fetch(path, {
        method:'GET',
        mode: config.MODE,
        headers: tokenHeader(token),
    }).then((response) => {
        return response.json();
    })
}


export function postRequest(path, entity) {
    return fetch(path, {
        method: 'POST',
        mode: config.MODE,
        headers: requestHeaders,
        body: JSON.stringify(entity),
    }).then((response) => {
        return response.json();
    })
}

export function postRequestDetail(token, path, entity) {
    return fetch(path, {
        method: 'POST',
        mode: config.MODE,
        headers: tokenHeader(token),
        body: JSON.stringify(entity),
    }).then((response) => {
        return response.json();
    })
}

export function putRequest(path, entity) {
    return fetch(path, {
        method: 'PUT',
        mode: config.MODE,
        headers: requestHeaders,
        body: JSON.stringify(entity)
    }).then((response) => {
        return response.json()
    })
}


export function putRequestDetail(token, path,entity) {
    return fetch(path, {
        method: 'PUT',
        mode: config.MODE,
        headers: tokenHeader(token),
        body:JSON.stringify(entity)
    }).then((response) => {
        return response.json()
    })
}

export function deleteRequest( path, entity) {
    return fetch(path, {
        method: 'DELETE',
        mode: config.MODE,
        headers: requestHeaders,
        body: JSON.stringify(entity)
    }).then((response) => {
        return response.json()
    })
}
export function deleteRequestDetail(token, path, entity) {
    return fetch(path, {
        method: 'DELETE',
        mode: config.MODE,
        headers: tokenHeader(token),
        body: JSON.stringify(entity)
    }).then((response) => {
        return response.json()
    })
}


export function uploadFile(path, file) {
    const data = new FormData();
    data.append('file', file);
    return fetch(path, {
        method: 'POST',
        mode: config.MODE,
        headers: requestHeaders,
        body: JSON.stringify(data)
    }).then((response) => {
        return response.json()
    })
}


export function uploadFileDetail(token, path, file) {
    const data = new FormData();
    data.append('file', file);
    return fetch(path, {
        method: 'POST',
        mode: config.MODE,
        headers: tokenHeader(token),
        body: data
    }).then((response) => {
        return response.json()
    })
}