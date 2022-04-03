import { ISpecificationsRepositoriy } from "../../repositories/ISpecificationsRepositoriy";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private specificationsRepository: ISpecificationsRepositoriy) { }

    execute({ name, description }: IRequest): void {
        const specificationAlreadyExists = this.specificationsRepository.findByName(name);
        if (specificationAlreadyExists) {
            throw new Error("Specification already exists!")
        }

        this.specificationsRepository.create({ name, description });
    }
}

export { CreateSpecificationUseCase }