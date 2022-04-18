import { Specification } from "../../entities/Specification";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class ShowSpecificationsUseCase {
    constructor(private specificationsRepository: ISpecificationsRepository) { }

    execute(): Specification[] {
        const specifications = this.specificationsRepository.show();

        return specifications;
    }
}

export { ShowSpecificationsUseCase }