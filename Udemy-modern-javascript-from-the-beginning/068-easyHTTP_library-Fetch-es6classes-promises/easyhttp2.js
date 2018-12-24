class EasyHTTP {
    // make HTTP GET Request
    get(url){
        return new Promise((resolve, reject)=> {
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }

    // make HTTP POST Request
    post(url, data){
        return new Promise((resolve, reject)=> {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .then(err => reject(err));
        });
    }
    // make HTTP PUT Request
    put(url, data){
        return new Promise((resolve, reject)=> {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .then(err => reject(err));
        });
    }
    // make HTTP DELETE Request
    delete(url, data){
        return new Promise((resolve, reject)=> {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(() => resolve('Resource Deleted'))
            .then(err => reject(err));
        });
    }
}