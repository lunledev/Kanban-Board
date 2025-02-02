import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
  // TODO: If the user exists and the password is correct, return a JWT token
  
  const {username, password} = req.body; //getting data from client username and podsword.

  //variable user to store result of query
  const user = await User.findOne ({ //waits for query to complete for User(referening users table) and returns the results. 
  // User- refer to User table , findOne - ORM get a single record from database that match criteria where.

  where: {username}, //query users table where username matches variable username.
  
  });

  //if user does not exist return 401(unauthorized) 
  // and a message of authentification failed.
  if(!user)
  {
    return res.status(401).json({message: 'Authentication failed'});
  }

  //checks if passward is valid by ussing bcrypt by comparing password entered
  // with the stored user password in a database.
  





  






};

const router = Router();

// POST /login - Login a user
router.post('/login', login);

export default router;
