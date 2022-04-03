import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
import { showSpecificationsController } from "../modules/cars/useCases/showSpecifications";

const specificationsRouters = Router();

specificationsRouters.post("/", (request, response) => {
    return createSpecificationController.handle(request, response)
});

specificationsRouters.get("/", (request, response) => {
    return showSpecificationsController.handle(request, response);
});

export { specificationsRouters };