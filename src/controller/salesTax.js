const roundOfFunc = (number) => {
  let num = number;
  const factor = 0.05;
  num = parseFloat((Math.ceil(num / factor) * factor).toFixed(2));
  return num;
};

const calculateSalesTax = (req, res) => {
  const salesTax = 10 / 100;
  const importedTax = 5 / 100;
  const exemptedCategories = ['book', 'food', 'medical'];
  const { items } = req.body;
  let total = 0;
  let totalSalesTax = 0;
  const taxedItems = items.map((item) => {
    let tax = 0;
    const price = item.quantity * item.price;
    if (item.imported) {
      tax = roundOfFunc(tax + (price * importedTax));
    }
    if (!exemptedCategories.includes(item.category)) {
      tax = roundOfFunc(tax + (price * salesTax));
    }
    const priceWithTax = price + tax;
    totalSalesTax += tax;
    total += priceWithTax;
    const prod = item;
    prod.price = priceWithTax.toFixed(2);
    return prod;
  });
  totalSalesTax = totalSalesTax.toFixed(2);
  total = total.toFixed(2);
  res.send({ taxedItems, totalSalesTax, total });
};

export default calculateSalesTax;
