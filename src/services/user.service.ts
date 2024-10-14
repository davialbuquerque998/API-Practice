import { IUser, User } from "../models/User";

interface UserInput extends Omit<IUser, "_id"> {}

const createService = (body: UserInput): Promise<IUser> => {
  return User.create(body);
};

const findAllService = () => {
  return User.find();
};

const findByIdService = (id: string) => {
  return User.findById(id);
};

const updateService = (
  id: string,
  name: string,
  email: string,
  username: string,
  avatar: string,
  password: string,
  background: string
) => {
  return User.findOneAndUpdate(
    { _id: id },
    { name, email, username, avatar, password, background }
  );
};

export { createService, findAllService, findByIdService, updateService };
