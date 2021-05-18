import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../log/UsersRepository"


class UserService {
    async create(email: string){
        const userRepository = getCustomRepository(UsersRepository);

        const userExists = await userRepository.findOne({
            email
        })
        if(userExists){
            return userExists;
        }

        const user = userRepository.create({
            email
        });

        await userRepository.save(user);

        return user;
    }
}

export { UserService}