const pattern = /^\d{6}-?\d{5}$/;
const firstCheckDigitMultipliers = [3, 7, 6, 1, 8, 9, 4, 5, 2, 1];
const secondCheckDigitMultipliers = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2, 1];

const hasCorrectPattern = input => pattern.test(input);

const hasCorrectChecksum = (input, multipliers) => {
  const multiplicands = input.split('').map(Number);

  const sum = multipliers
    .map((x, i) => x * multiplicands[i])
    .reduce((x, y) => x + y);

  return sum % 11 === 0;
}

const hasValidDate = input => {
  let [_, day, month, year] = /^(\d{2})(\d{2})(\d{2})/.exec(input);

  year = Number(year);
  month = Number(month) - 1;
  day = Number(day);

  const date = new Date(year, month, day);

  return date.getYear() === year && date.getMonth() === month && date.getDate() === day;
}

const isValidNorwegianBirthNumber = input => {
  const cleaned = input.replace(/\D/g, '');

  return (
    hasCorrectPattern(input) &&
    hasCorrectChecksum(cleaned, firstCheckDigitMultipliers) &&
    hasCorrectChecksum(cleaned, secondCheckDigitMultipliers) &&
    hasValidDate(cleaned)
  );
}

module.exports = isValidNorwegianBirthNumber;
