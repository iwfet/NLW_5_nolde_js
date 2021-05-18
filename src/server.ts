import express, { request, response } from "express";
import "./database/index"
import { routes} from "./routes";

const app = express();
const port = "3333"

app.use(express.json());


app.use(routes);

app.listen(port, () => console.log("server in rungir",{port}))


/**
 * Get = Buscar
 * POST = CRIACAO 
 * PUT = ALTERACAO
 * DELETE = DELETAR
 * PPATCH = ENCONTRAR ALGO ESPESIFICO
 
app.get("/", (request, response) => {
    return response.json({
        message: "ola mundo"
    })
})
app.post("/", (request, response) => {
    return response.json({
        message: "ola mundo post"
    })
})
*/
