import { IUser , User} from "../models/User";

interface UserInput extends Omit<IUser, '_id'> {}

const createUser = (body: UserInput): Promise<IUser> => {
   return User.create(body);
}

export { 
    createUser
};