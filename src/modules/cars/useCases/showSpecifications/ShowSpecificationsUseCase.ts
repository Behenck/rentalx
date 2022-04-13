import { Specification } from "../../entities/Specification";
import { ISpecificationsRepositoriy } from "../../repositories/ISpecificationsRepositoriy";

interface IRequest {
    name: string;
    description: string;
}

class ShowSpecificationsUseCase {
    constructor(private specificationsRepository: ISpecificationsRepositoriy) { }

    execute(): Specification[] {
        const specifications = this.specificationsRepository.show();

        return specifications;
    }
}

export { ShowSpecificationsUseCase }