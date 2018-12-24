class EasyHTTP {
    // make HTTP GET Request
    async  get(url){
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }

    // make HTTP POST Request
    async post(url, data){
        const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
    }
    // make HTTP PUT Request
    async put(url, data){
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            const resData = await response.json();
            return resData;
    }
    // make HTTP DELETE Request
    async delete(url, data){
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const resData = await 'Resource deleted';
            return resData;
    }
}