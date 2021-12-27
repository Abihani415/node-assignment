/* eslint-disable no-console */
const add = () => {
  const args = process.argv.slice(1);
  const sum = args.reduce((prevValue, currentValue) => (
    parseFloat(prevValue) + parseFloat(currentValue)
  ));
  console.log(args, sum);
};

const mul = () => {
  const args = process.argv.slice(1);
  const multiply = args.reduce((prevValue, currentValue) => (
    parseFloat(prevValue) * parseFloat(currentValue)
  ));
  console.log(args, multiply);
};

const div = () => {
  const args = process.argv.slice(1);
  const division = parseFloat(args[0]) / parseFloat(args[1]);
  console.log(args, division);
};

const sub = () => {
  const args = process.argv.slice(1);
  const subtract = parseFloat(args[0]) - parseFloat(args[1]);
  console.log(args, subtract);
};

export {
  add,
  mul,
  div,
  sub,
};
