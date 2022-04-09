import { Specification } from "../../models/Specification";
import { ISpecificationsRepositoriy, ICreateSpecificationDTO } from "../ISpecificationsRepositoriy";

class SpecificationsRepository implements ISpecificationsRepositoriy {
    private specifications: Specification[];

    private static INSTANCE: SpecificationsRepository;

    private constructor() {
        this.specifications = []
    }

    public static getInstance(): SpecificationsRepository { //para conseguir chamar a função de listar
        if (!SpecificationsRepository.INSTANCE) {
            SpecificationsRepository.INSTANCE = new SpecificationsRepository();
        }
        return SpecificationsRepository.INSTANCE;
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date()
        });

        this.specifications.push(specification);
    }

    show(): Specification[] {
        return this.specifications;
    }

    findByName(name: string): Specification {
        const specification = this.specifications.find((specification) => specification.name === name);
        return specification;
    }
}

export { SpecificationsRepository }