import { request, response, Router} from "express"
import { SettingsControlles } from "./controllers/settingsControllers";
import { UsersControllers } from "./controllers/userController";



const routes = Router();

const SettingsController = new SettingsControlles();
const usersController = new UsersControllers();

routes.post("/settings", SettingsController.create);
routes.post("/users", usersController.create);


export { routes};

/**
 * Tipos de Parametros
 * 
 * Routes params = PAramnetros de rotas
 * https:localhost:3333;settings/1
 * 
 * Query Params = filtros e buscas
 * https:localhost:3333;settings/1?search=algumacoisa
 * 
 * body Params ={
 * 
 * }
 */