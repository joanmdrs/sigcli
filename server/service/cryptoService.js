import bcrypt from 'bcryptjs';

export const hashPassword = (value) => {
  return bcrypt.hashSync(value, 0);

};

export const comparePassword = (value, hash) => {
  return bcrypt.compare(value, hash);
}

