const express=require('express');
import * as stockController from '../Controllers/stockController';
import bodyParser  from 'body-parser';
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));


router.post("/api/v1/stock",stockController.createStock);

export default router;