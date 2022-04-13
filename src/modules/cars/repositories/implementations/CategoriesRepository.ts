import { Category } from "../../entities/Category";
import { ICategoriesRepositoriy, ICreateCategoryDTO } from "../ICategoriesRepositoriy";
import { getRepository, Repository } from "typeorm";
class CategoriesRepository implements ICategoriesRepositoriy {
    private repository: Repository<Category>;

    // private static INSTANCE: CategoriesRepository;

    constructor() {
        this.repository = getRepository(Category);
    }

    // public static getInstance(): CategoriesRepository { //para conseguir chamar a função de listar
    //     if (!CategoriesRepository.INSTANCE) {
    //         CategoriesRepository.INSTANCE = new CategoriesRepository();
    //     }

    //     return CategoriesRepository.INSTANCE;
    // }

    async create({ name, description }: ICreateCategoryDTO): Promise<void> {

        const category = this.repository.create({
            description,
            name
        });

        await this.repository.save(category);
    }

    async show(): Promise<Category[]> {
        const categories = await this.repository.find();

        return categories;
    }

    async findByName(name: string): Promise<Category> {
        const category = await this.repository.findOne({ name });
        return category;
    }
}

export { CategoriesRepository }