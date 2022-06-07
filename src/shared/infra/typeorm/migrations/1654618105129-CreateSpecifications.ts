import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateSpecifications1654618105129 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "specifications_cars",
                columns: [
                    {
                        name: "car_id",
                        type: "uuid"
                    },
                    {
                        name: "specification_id",
                        type: "uuid"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        );

        await queryRunner.createForeignKey(
            "specifications_cars",
            new TableForeignKey({
                name: "FKSpecificatonCar",
                referencedTableName: "specifications",
                referencedColumnNames: ["id"],
                columnNames: ["specification_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL"
            })
        );

        await queryRunner.createForeignKey(
            "specifications_cars",
            new TableForeignKey({
                name: "FKCarSpecificaton",
                referencedTableName: "cars",
                referencedColumnNames: ["id"],
                columnNames: ["car_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL"
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            "specifications_cars",
            "FKSpecificatonCar"
        );

        await queryRunner.dropForeignKey(
            "specifications_cars",
            "FKCarSpecificaton"
        );

        await queryRunner.dropTable("specifications_cars")
    }

}
