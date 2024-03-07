const express =require('express');
const bodyParser =require('body-parser');
import sequelize from './config';
import stockRoutes from './src/Routes/stockRoutes';
const swaggerOutPut =require('./swagger.json');
const swaggerUi =require('swagger-ui-express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerOutPut));
app.use(bodyParser.json());

app.use('/stockmanagement', stockRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});