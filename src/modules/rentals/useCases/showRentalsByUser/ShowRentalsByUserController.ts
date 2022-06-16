import { Request, Response } from "express";
import { container } from "tsyringe";
import { ShowRentalsByUserUseCase } from "./ShowRentalsByUserUseCase";

class ShowRentalsByUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id: user_id } = await request.user;

        const showRentalsByUserUseCase = container.resolve(ShowRentalsByUserUseCase);

        const rentals = await showRentalsByUserUseCase.execute(user_id);
        
        return response.json(rentals);
    }
}

export { ShowRentalsByUserController }