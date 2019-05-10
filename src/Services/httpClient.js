class Http {
    static async get(url, token=null){
        const response = await  fetch(url,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        return  response.json();
    }
    static async post(url, token=null, data){
        try {
            const response = await fetch(url,{
                method:'POST',
                headers:{
                    Authorization:`Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(data)

            });
            const result = await response.json();
            return  result;
        }catch (e) {
            console.log(e)
        }

    }
}

export  default Http;
