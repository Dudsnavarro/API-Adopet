import { DataSource } from "typeorm";
import PetEntity from "../intitys/PetEntitys";

export const appDataSource = new DataSource({
    type:"sqlite",
    database:"./src/config/database.sqlite",
    entities:[PetEntity],
    synchronize: true
})