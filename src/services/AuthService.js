const url = `http://localhost:3000`

export async function login({username, password}) {
    
    
    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
      body: JSON.stringify({username, password})
    }
    return await fetch(`${url}/users/login`, options);
 
}
export async function register({username, email, password, gender}) {
    
    
    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
      body: JSON.stringify({username, email, password, gender})
    }
    return await fetch(`${url}/users/register`, options);
 
}
export async function logout(accessToken) {

     const options = {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken
        },
     
    }
   return await fetch(`${url}/users/logout`, options);
   
}
export async function getProfile(accessToken) {

    const options = {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken
        },
     
    }
    const response =  await fetch(`${url}/users/profile`, options);
    return await response.json();


}
export async function editProfile({username, email, gender}, userId, accessToken){

    const options = {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify({username, email, gender})
    }

    return await fetch(`${url}/users/profile/${userId}`, options)

}

export async function getUsers() {

  
    const response =  await fetch(`${url}/users`);
    return await response.json();


}
