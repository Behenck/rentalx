import { Request, Response } from "express";
import { container } from "tsyringe";
import { ShowSpecificationsUseCase } from "./ShowSpecificationsUseCase";

class ShowSpecificationsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const showSpecificationsUseCase = container.resolve(ShowSpecificationsUseCase);

        const specifications = await showSpecificationsUseCase.execute();

        return response.json(specifications)
    }
}

export { ShowSpecificationsController }