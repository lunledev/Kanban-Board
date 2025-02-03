import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
  // TODO: If the user exists and the password is correct, return a JWT token
  
  const {username, password} = req.body; //getting data from client username and podsword.

  //variable user to store result of query
  const user = await User.findOne ({ //waits for query to complete for User(referening users table) and returns the results. 
  // User- refer to User table , findOne - ORM(Object-Relational Mapping) method to get a single record from database that match criteria where.

  where: {username}, //query users table where username matches variable username.
  
  });

  //if user does not exist return 401(unauthorized) 
  // and a message of authentification failed.
  if(!user)
  {
    return res.status(401).json({message: 'Authentication failed'});
  }

  //checks if passward is valid by using bcrypt by comparing password entered
  // with the stored user password in a database.
 const isValidPassword = await bcrypt.compare(password, user.password);

 ///if password not found return 401(unauthorized) 
  // and a message of authentification failed.
 if (!isValidPassword) {
  return res.status(401).json({message: 'Authentication failed'});

 }

//variable to hold secret key for a signed token.
const secretkey = process.env.JWT_SECRET_KEY || '';

//variable to hold a token.
//jwt.sign creates a JSON Web Token(store username,
//secret key for token authenticity,
//set experation time).

const token =  jwt.sign({username}, secretkey, {expiresIn: '30m'}); //30 mintues.
return res.json({token}); //return response to client.

};

const router = Router(); //create instance of Router() class and store it as a specific type router.

// POST /login - Login a user
router.post('/login', login);

export default router;
