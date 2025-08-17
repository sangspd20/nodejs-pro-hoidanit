import { Request, Response } from 'express';
import { getAllUsers, handleCreateUser } from 'services/user.service';
// import { getAllUsers, handleCreateUser } from '../services/user.service';

const getHomePage = async (req: Request, res: Response) => {
  // get users
  const users = await getAllUsers();

  res.status(200).json(users);

  // return res.render('home', {
  //   name: users,
  // });
};

const getCreateUserPage = (req: Request, res: Response) => {
  return res.render('create-user');
};

const postCreateUser = (req: Request, res: Response) => {
  const { name, email, address } = req.body;

  // handle create user
  handleCreateUser(name, email, address);
  return res.redirect('/');
};

export { getHomePage, getCreateUserPage, postCreateUser };
