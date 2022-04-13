import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ShowCategoriesUseCase } from "./ShowCategoriesUseCase";
import { ShowCategoriesController } from "./ShowCategoriesController";

const categoriesRepository = null
const showCategoriesUseCase = new ShowCategoriesUseCase(categoriesRepository);
const showCategoriesController = new ShowCategoriesController(showCategoriesUseCase);

export { showCategoriesController }