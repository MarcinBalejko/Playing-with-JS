const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');


const sendHttpRequest = (method, url, data) => {  // it doesn't matter if we don't have third argument (data) in the get request
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.responseType = 'json';

        if (data) {
            xhr.setRequestHeader('Content-Type', 'application/json');
        } // api can't parse request SO we need to create a header here

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        };

        xhr.onerror = () => {
            reject('Something went wrong!');
        };

        xhr.send(JSON.stringify(data));  //  we need this in case of post method
    });                                     // it converts js object to json
    return promise;

};

const getData = () => {
    sendHttpRequest('GET', 'https://reqres.in/api/users').then(responseData => {
        console.log(responseData);
    });
}

const sendData = () => {
    sendHttpRequest('POST', 'https://reqres.in/api/register', {
        email: 'eve.holt@reqres.in',
        password: 'pistol'
    }).then(responseData => {
        console.log(responseData);
    }).catch(err => {
        console.log(err);
    });
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);