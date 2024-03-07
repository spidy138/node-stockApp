import { Request, Response} from 'express';
import {AddStock,DbStock} from '../Models/stockModel';
import { plainToClass } from 'class-transformer';
import { create } from 'lodash';
import * as _stockService from '../Services/stockService' ;
import { Returnresponce } from '../Models/ResponceModel';


export async function createStock(req: AddStock, res: Response){
  
  const _response=await _stockService.createStock(req);
  res.status(201).send(_response);
}

