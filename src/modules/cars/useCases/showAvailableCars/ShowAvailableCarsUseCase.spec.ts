import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { ShowAvailableCarsUseCase } from "./ShowAvailableCarsUseCase"

let showAvailableCarsUseCase: ShowAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Show Cars", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        showAvailableCarsUseCase = new ShowAvailableCarsUseCase(carsRepositoryInMemory);
    })

    it("should be able to list all available cars", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Name Car 3",
            description: "Description Car",
            daily_rate: 100,
            license_plate: "BCD-1124",
            fine_amount: 60,
            brand: "Brand",
            category_id: "category_id"
        });

        const cars = await showAvailableCarsUseCase.execute({});

        expect(cars).toEqual([car]);
    });

    it("should de able to list all available cars by brand", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Name Car 4",
            description: "Description Car",
            daily_rate: 100,
            license_plate: "BCD-1124",
            fine_amount: 60,
            brand: "Car_brand_test",
            category_id: "category_id"
        });

        const cars = await showAvailableCarsUseCase.execute({
            brand: "Car_brand_test"
        });

        expect(cars).toEqual([car]);
    });

    it("should de able to list all available cars by name", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Name Car 4",
            description: "Description Car",
            daily_rate: 100,
            license_plate: "BCD-1124",
            fine_amount: 60,
            brand: "Car_brand_test",
            category_id: "category_id"
        });

        const cars = await showAvailableCarsUseCase.execute({
            name: "Name Car 4"
        });

        expect(cars).toEqual([car]);
    });

    it("should de able to list all available cars by category", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Name Car 4",
            description: "Description Car",
            daily_rate: 100,
            license_plate: "BCD-1124",
            fine_amount: 60,
            brand: "Car_brand_test",
            category_id: "category_id"
        });

        const cars = await showAvailableCarsUseCase.execute({
            category_id: "category_id"
        });

        expect(cars).toEqual([car]);
    });
})