type UserType = {
  _id?: string;
  email: string;
  password: string;
  username: string;

  generateToken: () => void;
  comparePasswords: (enteredPassword: string) => Promise<Boolean>;
};

export default UserType;
