class Http {

    static baseurl = 'https://fast-foods-api-main.herokuapp.com/api/v2';

    static async get(url, token) {
        try {
            const response = await fetch(url, {
                headers: this.addHeaders(token)
            })
            return response.json();
        } catch (error) {
            console.log(error)
        }
    }
    static async post(api, token, data) {
        try {
            const response = await fetch(`${this.baseurl}/${api}`, {
                method: 'POST',
                headers: this.addHeaders(token),
                body: JSON.stringify(data)
            });

            const result = await response.json();
            if(!response.ok){
              throw new Error(result.message);  
            }

            return result;
        } catch (e) {
            console.error(e);
        }
    }

    static addHeaders(token) {
        const headers = {
            'Content-Type': 'application/json'
        }
        if (token) {
            headers.Authorization = `Bearer ${token}`
        }
        return headers;
    }

    static handleError(response) {
        if(response.ok){
            throw new Error(response.status)
        }
       return response;
    }
}

export default Http;
