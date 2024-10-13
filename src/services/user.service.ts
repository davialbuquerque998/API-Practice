import { IUser , User} from "../models/User";

interface UserInput extends Omit<IUser, '_id'> {}

const createService = (body: UserInput): Promise<IUser> => {
   return User.create(body);
}

const findAllService = ()=> {
    return User.find();
}

const findByIdService = (id:string) => {
    return User.findById(id);
}

export { 
    createService,
    findAllService,
    findByIdService
};