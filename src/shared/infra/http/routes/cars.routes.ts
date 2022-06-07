import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureAdmin } from "../middlewares/ensureAdmin";

import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { ShowAvailableCarsController } from "@modules/cars/useCases/showAvailableCars/ShowAvailableCarsController";

const carsRoutes = Router();

const createCarController = new CreateCarController();
const showAvailableCarsController = new ShowAvailableCarsController();

carsRoutes.post("/", ensureAuthenticated, ensureAdmin, createCarController.handle);
carsRoutes.get("/available", showAvailableCarsController.handle);

export { carsRoutes }