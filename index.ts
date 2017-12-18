const pattern = /^\d{6}-?\d{5}$/;
const firstCheckDigitMultipliers = [3, 7, 6, 1, 8, 9, 4, 5, 2, 1];
const secondCheckDigitMultipliers = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2, 1];

const hasCorrectPattern = (input: string) => pattern.test(input);

const hasCorrectChecksum = (input: string, multipliers: number[]) => {
  const multiplicands = input.split('').map(Number);

  const sum = multipliers
    .map((x, i) => x * multiplicands[i])
    .reduce((x, y) => x + y);

  return sum % 11 === 0;
}

const hasValidDate = (input: string) => {
  let [_, dayStr, monthStr, yearStr] = /^(\d{2})(\d{2})(\d{2})/.exec(input);

  const year = Number(yearStr);
  const month = Number(monthStr) - 1;
  const day = Number(dayStr);
  const date = new Date(year, month, day);

  const yearIsValid = String(date.getFullYear()).substr(-2) === yearStr;
  const monthIsValid = date.getMonth() === month;
  const dayIsValid = date.getDate() === day;

  return yearIsValid && monthIsValid && dayIsValid;
}

export const isValid = (input: string) => {
  const cleaned = input.replace(/\D/g, '');

  return (
    hasCorrectPattern(input) &&
    hasCorrectChecksum(cleaned, firstCheckDigitMultipliers) &&
    hasCorrectChecksum(cleaned, secondCheckDigitMultipliers) &&
    hasValidDate(cleaned)
  );
}
