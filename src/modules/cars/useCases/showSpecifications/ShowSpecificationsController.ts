import { Request, Response } from "express";
import { ShowSpecificationsUseCase } from "./ShowSpecificationsUseCase";

class ShowSpecificationsController {
    constructor(private showSpecificationsUseCase: ShowSpecificationsUseCase) { }
    handle(request: Request, response: Response): Response {
        const specifications = this.showSpecificationsUseCase.execute();

        return response.json(specifications)
    }
}

export { ShowSpecificationsController }