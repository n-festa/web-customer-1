// function to post data
export async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST', 
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify(data) 
    });
    return response.json();
};

export async function postDataInclude(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST', 
        credentials: 'include',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true
        },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify(data) 
    });
    return response.json();
}