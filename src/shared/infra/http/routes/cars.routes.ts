import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureAdmin } from "../middlewares/ensureAdmin";

import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { ShowAvailableCarsController } from "@modules/cars/useCases/showAvailableCars/ShowAvailableCarsController";
import { CreateCarSpecificationController } from "@modules/cars/useCases/createCarSpecification/CreateCarSpecificationControlle";

const carsRoutes = Router();

const createCarController = new CreateCarController();
const showAvailableCarsController = new ShowAvailableCarsController();
const createCarSpecificationController = new CreateCarSpecificationController();

carsRoutes.post(
    "/",
    ensureAuthenticated,
    ensureAdmin,
    createCarController.handle
);
carsRoutes.get("/available", showAvailableCarsController.handle);
carsRoutes.post(
    "/specification/:id",
    ensureAuthenticated,
    ensureAdmin,
    createCarSpecificationController.handle
);

export { carsRoutes };
