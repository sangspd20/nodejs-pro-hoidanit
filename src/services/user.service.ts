import { assert } from 'console';
import getConnection from '../config/db';

const handleCreateUser = (name: string, email: string, address: string) => {};
const getAllUsers = async () => {
  const connection = await getConnection();

  try {
    const [results, fields] = await connection.query('SELECT * FROM `users`');

    return results;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export { handleCreateUser, getAllUsers };
