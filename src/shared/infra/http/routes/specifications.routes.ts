import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureAdmin } from "../middlewares/ensureAdmin";

import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ShowSpecificationsController } from "@modules/cars/useCases/showSpecifications/ShowSpecificationsController";

const specificationsRouters = Router();

const createSpecificationController = new CreateSpecificationController();
const showSpecificationsController = new ShowSpecificationsController();

specificationsRouters.post("/", ensureAuthenticated, ensureAdmin, createSpecificationController.handle);
specificationsRouters.get("/", showSpecificationsController.handle);

export { specificationsRouters };