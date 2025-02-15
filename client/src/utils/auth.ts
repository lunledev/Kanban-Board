import { JwtPayload, jwtDecode } from 'jwt-decode';
import { UserData } from '../interfaces/UserData';

class AuthService {
  getProfile() {
    // TODO: return the decoded token
    return jwtDecode<UserData>(this.getToken());
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    const login_token = this.getToken();
    return !!login_token&&!this.isTokenExpired(login_token);

  }

  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired
   try{
    const tokenDecoded =  jwtDecode<JwtPayload>(token);

    //checks token build in exp( expiration property) 
    // and if token < current time in seconds(Date.now()/1000). 
    if(tokenDecoded?.exp && tokenDecoded?.exp < Date.now()/1000)
    {
      return true;
    }
  }catch(err){
    return false; //if decode fails

  }
}

  getToken(): string {
    // TODO: return the token
    const userLogged = localStorage.getItem('id_token') || '';
    return userLogged;
  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    localStorage.setItem('id_token', idToken);

    // TODO: redirect to the home page
    /*( window.location -provides info about current URL
     and allows manipulation of it.
    //assign('/') -  loads new document in current window that
     takes an URL as a argument and directs the browser to 
    /that URL address.  In this case root of the current website
     is being passed to assign.)*/
    window.location.assign('/');
  }

  logout() {
    // TODO: remove the token from localStorage
    localStorage.removeItem('id_token');
    // TODO: redirect to the login page
    window.location.assign('/login');
  }
}

export default new AuthService();
