import { Specification } from "../models/Specification";

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepositoriy {
    findByName(name: string): Specification;
    show(): Specification[];
    create({ name, description }: ICreateSpecificationDTO): void;
}

export { ISpecificationsRepositoriy, ICreateSpecificationDTO }