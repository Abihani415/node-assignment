import express from 'express';
import fetchEmployee from './controller/employee';
import calculateSalesTax from './controller/salesTax';
import {
  osModule,
  pathModule,
  fsModule,
  dateModule,
} from './controller/common_modules';

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded());

app.get('/fetch-employee/:id', fetchEmployee);
app.post('/calculate-sales-tax', calculateSalesTax);
app.get('/os', osModule);
app.get('/fs', fsModule);
app.get('/path', pathModule);
app.get('/date', dateModule);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening at http://localhost:${port}`);
});
