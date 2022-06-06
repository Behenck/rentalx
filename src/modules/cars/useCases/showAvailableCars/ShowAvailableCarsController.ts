import { container } from 'tsyringe';
import { Request, Response } from "express";
import { ShowAvailableCarsUseCase } from "./ShowAvailableCarsUseCase";


class ShowAvailableCarsController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { brand, name, category_id } = request.query;

        const showAvailableCarsUseCase = container.resolve(ShowAvailableCarsUseCase);

        const cars = await showAvailableCarsUseCase.execute({
            brand: brand as string,
            name: name as string,
            category_id: category_id  as string
        });

        return response.json(cars);
    }
}

export { ShowAvailableCarsController }