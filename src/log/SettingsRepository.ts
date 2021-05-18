import { Repository, EntityRepository } from "typeorm";
import { Setting } from "../class/setting";



@EntityRepository(Setting)
class SettingsRepository extends Repository <Setting> {

}

export { SettingsRepository }