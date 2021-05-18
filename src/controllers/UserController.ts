import { Request, Response } from "express"
import { UserService } from "../services/UsersService";

class UsersControllers {
    async create(request:Request, response:Response): Promise<Response>{
        const {email} = request.body;
        
        const usersServices = new UserService

        const user = await usersServices.create(email);

        return response.json(user);
    }
}

export {UsersControllers}