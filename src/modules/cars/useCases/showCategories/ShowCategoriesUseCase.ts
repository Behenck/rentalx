import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class ShowCategoriesUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) { }

    execute(): Promise<Category[]> {
        const categories = this.categoriesRepository.show();

        return categories;
    }
}

export { ShowCategoriesUseCase }