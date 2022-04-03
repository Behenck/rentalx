import { Category } from "../../models/Category";
import { ICategoriesRepositoriy, ICreateCategoryDTO } from "../ICategoriesRepositoriy";

class CategoriesRepository implements ICategoriesRepositoriy {
    private categories: Category[];

    private static INSTANCE: CategoriesRepository;

    private constructor() {
        this.categories = []
    }

    public static getInstance(): CategoriesRepository { //para conseguir chamar a função de listar
        if (!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        }

        return CategoriesRepository.INSTANCE;
    }

    create({ name, description }: ICreateCategoryDTO): void {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date()
        });

        this.categories.push(category);
    }

    show(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category {
        const category = this.categories.find((category) => category.name === name);
        return category;
    }
}

export { CategoriesRepository }