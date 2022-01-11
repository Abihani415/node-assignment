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

// route to return total processing timeout
const startProcessingTimer = async (req, res, next) => {
  req.requestTime = Date.now();
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(2000);
  next();
};
app.get('/ping', startProcessingTimer, (req, res) => {
  const now = Date.now();
  res.json({
    message: 'total precessing time',
    total_request_time: now - req.requestTime,
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening at http://localhost:${port}`);
});
