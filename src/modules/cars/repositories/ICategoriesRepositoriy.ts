import { Category } from "../entities/Category";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepositoriy {
    findByName(name: string): Promise<Category>;
    show(): Promise<Category[]>;
    create({ name, description }: ICreateCategoryDTO): Promise<void>;
}

export { ICategoriesRepositoriy, ICreateCategoryDTO }