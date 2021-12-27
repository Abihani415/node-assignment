import express from 'express';
import fetchEmployee from './controller/employee';
import calculateSalesTax from './controller/salesTax';

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded());

app.get('/fetch-employee/:id', fetchEmployee);
app.post('/calculate-sales-tax', calculateSalesTax);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening at http://localhost:${port}`);
});
