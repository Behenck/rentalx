import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { ShowSpecificationsUseCase } from "./ShowSpecificationsUseCase";
import { ShowSpecificationsController } from "./ShowSpecificationsController";

const specificationsRepository = SpecificationsRepository.getInstance();
const showSpecificationsUseCase = new ShowSpecificationsUseCase(specificationsRepository);
const showSpecificationsController = new ShowSpecificationsController(showSpecificationsUseCase);

export { showSpecificationsController }