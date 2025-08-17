import { prisma } from 'config/client';
import getConnection from '../config/db';

const handleCreateUser = async (
  name: string,
  email: string,
  address: string
) => {
  await prisma.user.create({
    data: {
      name: name,
      email: email,
      address: address,
    },
  });
};
const getAllUsers = async () => {
  // use prisma
  const users = await prisma.user.findMany();
  return users;
  // use sql query
  //const connection = await getConnection();

  // try {
  //   const [results, fields] = await connection.query('SELECT * FROM `user`');

  //   return results;
  // } catch (err) {
  //   console.log(err);
  //   return [];
  // }
};

export { handleCreateUser, getAllUsers };
