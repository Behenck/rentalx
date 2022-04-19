import { Request, Response } from "express";
import { container } from "tsyringe";
import { ShowCategoriesUseCase } from "./ShowCategoriesUseCase";

class ShowCategoriesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const showCategoriesUseCase = container.resolve(ShowCategoriesUseCase);

        const categories = await showCategoriesUseCase.execute();

        return response.json(categories)
    }
}

export { ShowCategoriesController }