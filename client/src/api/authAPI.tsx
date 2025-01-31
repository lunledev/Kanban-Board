import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route

  try {
    /*
    fetch('/auth/login') - starts a network request
     to /auth/login endpoint.
     method: 'Post' - specifies POST request.
     headers: 
     {'content-Type': 'application/json'} - 
     set request body to contain JSON data.
     body: JSON.stringify(userInfo) - convert userINfo object
      to JSON string and set JSON string to request body.
      const data = await response.json(); - 
      waiting for promise to resolve(async operatior to complete successfully). 
      and store server's response object using variable named data.
    */





  }
  catch(err)
  {

  }
}



export { login };
