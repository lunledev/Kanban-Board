import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';


interface JwtPayload { //defining interface called JwtPayload.
  username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  // TODO: verify the token exists and add the user data to the request object

  //store header authorization from request.
  const authHeader = req.headers.authorization;

 //check if authHeader exists
 if(authHeader)
 {
    //obtain the token from authorization header.
    const token = authHeader.split(' ')[1];
    
    const secretKey = process.env.JWT_SECRET_KEY || '';


    jwt.verify(token, secretKey, (err, user) => { //verify jwt token
      if(err)
      {
        return res.sendStatus(403); //if token is invalid, then sent Forbidden (403)
      }

      //store user to request object(req.user)
      req.user = user as JwtPayload;
      return next(); //call next function of middleware


    });
 }
 else{
   res.sendStatus(401); //if authHeader does not exist, then sent 401 (unauthorized).
 }

 



  
};
