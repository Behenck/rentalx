import { Router } from "express";
import multer from 'multer';

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { showCategoriesController } from "../modules/cars/useCases/showCategories";

const categoriesRouters = Router();

const upload = multer({
    dest: "./tmp"
})

categoriesRouters.post("/", (request, response) => {
    return createCategoryController.handle(request, response)
});

categoriesRouters.get("/", (request, response) => {
    return showCategoriesController.handle(request, response);
});

categoriesRouters.post("/import", upload.single("file"), (request, response) => {
    return importCategoryController.handle(request, response);
})

export { categoriesRouters };