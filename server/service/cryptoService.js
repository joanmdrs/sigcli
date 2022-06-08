import bcrypt from 'bcryptjs';

export const hashPassword = (value) => {
  return bcrypt.hashSync(value, 0);

};

