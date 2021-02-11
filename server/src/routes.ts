import express from "express";

const routes = express.Router();

import AirplanesController from "./controllers/AirplanesController";

const airplanesController = new AirplanesController();

routes.get("/aeronaves/find", airplanesController.find);

routes.get("/aeronaves", airplanesController.get);

routes.get("/aeronaves/:id", airplanesController.getById);

routes.put("/aeronaves/:id", airplanesController.update)

routes.post("/aeronaves", airplanesController.create);

routes.delete("/aeronaves/:id", airplanesController.delete);

export default routes;
