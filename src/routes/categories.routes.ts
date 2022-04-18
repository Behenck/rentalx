import { Router } from "express";
import multer from 'multer';

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { showCategoriesController } from "../modules/cars/useCases/showCategories";

const categoriesRouters = Router();

const upload = multer({
    dest: "./tmp"
});

const createCategoryController = new CreateCategoryController();

categoriesRouters.post("/", createCategoryController.handle);

categoriesRouters.get("/", (request, response) => {
    return showCategoriesController.handle(request, response);
});

categoriesRouters.post("/import", upload.single("file"), (request, response) => {
    return importCategoryController.handle(request, response);
})

export { categoriesRouters };