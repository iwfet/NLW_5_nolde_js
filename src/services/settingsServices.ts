import { getCustomRepository} from "typeorm"
import {SettingsRepository} from "../log/SettingsRepository"

interface ISettingsCreate {
    chat: boolean;
    username: string;
}

class SettingsServices {

    async create({chat, username}: ISettingsCreate){
    const settingsRepository = getCustomRepository(SettingsRepository);

    const userAlreadyExistente = await settingsRepository.findOne({
        username
    });

    if(userAlreadyExistente){
        throw new Error("user alerdey  existente!");
    }

    const settings = settingsRepository.create({
        chat,
        username
    })

    await settingsRepository.save(settings);

    }


}

export {SettingsServices};