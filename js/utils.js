const isNotANumber = (value) => {
  return value === 0 || isNaN(value);
};

const calculateBMI = function (weight, height) {
  const calculateBMI = weight / (height / 100) ** 2;

  return calculateBMI.toFixed(2);
};

export { isNotANumber, calculateBMI };
