import { Specification } from "../../infra/typeorm/entities/Specification";
import { inject, injectable } from "tsyringe";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class ShowSpecificationsUseCase {
    constructor(
        @inject("SpecificationsRepository")
        private specificationsRepository: ISpecificationsRepository
    ) { }

    async execute(): Promise<Specification[]> {
        const specifications = await this.specificationsRepository.show();

        return specifications;
    }
}

export { ShowSpecificationsUseCase }