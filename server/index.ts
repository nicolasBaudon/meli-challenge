import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { badEndpoint, errorHandler } from "./shared/middlewares/error-middleware";
import * as itemsController from "./controllers/items";

const api = express();

const PORT = 5000;
const basePath = "/api/items";

api.use(cors());
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }));

api.get(`${basePath}`, (req: express.Request, res: express.Response) =>
  itemsController.getItemsResult(req, res)
);

api.get(`${basePath}/:id`, (req: express.Request, res: express.Response) =>
  itemsController.getItemDetail(req, res)
);

api.use(badEndpoint);
api.use(errorHandler);

api.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
