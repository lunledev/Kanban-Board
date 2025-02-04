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
      waiting for promise to resolve(async operator to complete successfully). 
      and store server's response object using variable named data.
    */
    const response = await fetch('/auth/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
      });

      //throws error if response is not ok(200 to 299)
      if (!response.ok)
      {
        const errorloginData = await response.json();
        throw new Error(`Error: ${errorloginData.message}`);

      }

      const loginData = await response.json(); // awaiting operations to complete and store response object from server in loginData.
      return loginData;  //return data from server.
  }
  catch (err) {

    console.log('Error from user login: ', err); //display any errors during fetch.
    return Promise.reject('Could not fetch user info'); //returns failed operation with a error message.
    

  }
}



export { login };
