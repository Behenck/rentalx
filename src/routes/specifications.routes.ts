import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ShowSpecificationsController } from "../modules/cars/useCases/showSpecifications/ShowSpecificationsController";

const specificationsRouters = Router();

const createSpecificationController = new CreateSpecificationController();
const showSpecificationsController = new ShowSpecificationsController();

specificationsRouters.post("/", createSpecificationController.handle);
specificationsRouters.get("/", showSpecificationsController.handle);

export { specificationsRouters };