import { UUID } from "sequelize";
import { Returnresponce } from "../Models/ResponceModel";
import { AddStock, DbStock } from "../Models/stockModel";
import { plainToClass } from 'class-transformer';
import {v4 as uuidv4} from 'uuid';


export async function createStock(stock:AddStock):Promise<Returnresponce>{
               
        console.log("hello in service");
        const _dbStock=plainToClass(DbStock,stock);
        _dbStock.id=uuidv4();
        return new Returnresponce(200,_dbStock);  
}