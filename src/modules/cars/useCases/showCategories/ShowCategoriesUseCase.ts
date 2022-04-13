import { Category } from "../../entities/Category";
import { ICategoriesRepositoriy } from "../../repositories/ICategoriesRepositoriy";

interface IRequest {
    name: string;
    description: string;
}

class ShowCategoriesUseCase {
    constructor(private categoriesRepository: ICategoriesRepositoriy) { }

    execute(): Category[] {
        const categories = this.categoriesRepository.show();

        return categories;
    }
}

export { ShowCategoriesUseCase }