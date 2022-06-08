import dayjs from "dayjs";

import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
    user_id: string;
    car_id: string;
    expected_return_date: string;
}

class CreateRentalUseCase {
    constructor(
        private rentalsRepository: IRentalsRepository
    ) {}

    async execute({ user_id, car_id, expected_return_date }): Promise<Rental> {
        const carUnavailable = await this.rentalsRepository.findOpenRentalByCar(car_id);

        if (carUnavailable) {
            throw new AppError("Car is unavailable");
        }

        const rentalOpenToUser = await this.rentalsRepository.findOpenRentalByUser(user_id);

        if (rentalOpenToUser) {
            throw new AppError("There's a rental in progress for user!");
        }

        const compare = dayjs(expected_return_date).diff(dayjs(), "hours");

        console.log(compare)

        const rental = await this.rentalsRepository.create({
            user_id,
            car_id,
            expected_return_date
        });

        return rental;
    }
}

export { CreateRentalUseCase };
