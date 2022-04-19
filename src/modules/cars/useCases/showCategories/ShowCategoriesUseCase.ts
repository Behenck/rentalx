import { Category } from "../../entities/Category";
import { inject, injectable } from "tsyringe";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class ShowCategoriesUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository
    ) { }

    async execute(): Promise<Category[]> {
        const categories = await this.categoriesRepository.show();

        return categories;
    }
}

export { ShowCategoriesUseCase }