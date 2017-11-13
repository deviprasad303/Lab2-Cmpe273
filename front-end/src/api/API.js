const api = 'http://localhost:3001'

const headers = {
    'Accept': 'application/json'
};

export const doLogin = (payload) =>
    fetch(`${api}/login`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => {
       // localStorage.setItem('user', JSON.stringify(res.username));
        console.log(res);
        return res.json();
    })
        .catch(error => {
            console.log(error);
            return error;
        });



export const host1 = () =>
    fetch(`${api}/host1`, {
        method: 'GET',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include'
    }).then(res => {
        return res.status;
        res.data;
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });





export const host2 = () =>
    fetch(`${api}/host2`, {
        method: 'GET',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include'
    }).then(res => {
        return res.status;
        res.data;
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });
export const host3 = () =>
    fetch(`${api}/host3`, {
        method: 'GET',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include'
    }).then(res => {
        return res.status;
        res.data;
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const updatelog = (payload) =>
    fetch(`${api}/updatelog` + payload,{
        method: 'GET',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        // body: JSON.stringify(payload)
    }).then(res => {
        //return res.json();
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const updatelog1 = (payload) =>
    fetch(`${api}/host1` + payload,{
        method: 'GET',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        // body: JSON.stringify(payload)
    }).then(res => {
        //return res.json();
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });


export const updatelog2 = (payload) =>
    fetch(`${api}/host2` + payload,{
        method: 'GET',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        // body: JSON.stringify(payload)
    }).then(res => {
        //return res.json();
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const updatelog3 = (payload) =>
    fetch(`${api}/host3` + payload,{
        method: 'GET',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        // body: JSON.stringify(payload)
    }).then(res => {
        //return res.json();
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });



export const logout = () =>
    fetch(`${api}/logout`, {
        method: 'POST',
        headers: {
            ...headers
        },
        credentials:'include'
    }).then(res => {
        return res.status;
        res.data;
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });
export const doSignup = (payload) =>
    fetch(`${api}/signup`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => {
        return res.json();
        res.data;
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });


export const getfiles = (payload) =>

    fetch(`${api}/getuserfiles/` + payload, {
        method: 'GET',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include'
    }).then(res => {
        return res.json();
        res.data;
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const getgraphs = (payload) =>

    fetch(`${api}/graphs`, {
        method: 'GET',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include'
    }).then(res => {
        return res.json();
        //res.data;
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });