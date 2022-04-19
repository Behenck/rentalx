import { Router } from "express";
import multer from 'multer';

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../modules/cars/useCases/importCategory/ImportCategoryController";
import { ShowCategoriesController } from "../modules/cars/useCases/showCategories/ShowCategoriesController";

const categoriesRouters = Router();

const upload = multer({
    dest: "./tmp"
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const showCategoriesController = new ShowCategoriesController();

categoriesRouters.post("/", createCategoryController.handle);

categoriesRouters.get("/", showCategoriesController.handle);

categoriesRouters.post("/import", upload.single("file"), (request, response) => {
    return importCategoryController.handle(request, response);
})

export { categoriesRouters };