import { Category } from "../models/Category";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepositoriy {
    findByName(name: string): Category;
    show(): Category[];
    create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoriesRepositoriy, ICreateCategoryDTO }