import { Request, Response } from "express";
import { ShowCategoriesUseCase } from "./ShowCategoriesUseCase";

class ShowCategoriesController {
    constructor(private showCategoriesUseCase: ShowCategoriesUseCase) { }
    handle(request: Request, response: Response): Response {
        const categories = this.showCategoriesUseCase.execute();

        return response.json(categories)
    }
}

export { ShowCategoriesController }