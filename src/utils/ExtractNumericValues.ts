const extractNumericValues = (str: string) => {
  const values = str.split(" - ").map((value) => parseInt(value, 10));
  const hasNumericValues = values.every((value) => !isNaN(value));
  return hasNumericValues ? values : [];
};

export default extractNumericValues;
