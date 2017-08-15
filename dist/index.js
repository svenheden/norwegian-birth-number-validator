'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var pattern = /^\d{6}-\d{5}$/;
var firstCheckDigitMultipliers = [3, 7, 6, 1, 8, 9, 4, 5, 2, 1];
var secondCheckDigitMultipliers = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2, 1];

var hasCorrectPattern = function hasCorrectPattern(input) {
  return pattern.test(input);
};

var hasCorrectChecksum = function hasCorrectChecksum(input, multipliers) {
  var multiplicands = input.split('').map(Number);

  var sum = multipliers.map(function (x, i) {
    return x * multiplicands[i];
  }).reduce(function (x, y) {
    return x + y;
  });

  return sum % 11 === 0;
};

var hasValidDate = function hasValidDate(input) {
  var _$exec = /^(\d{2})(\d{2})(\d{2})/.exec(input),
      _$exec2 = _slicedToArray(_$exec, 4),
      _ = _$exec2[0],
      day = _$exec2[1],
      month = _$exec2[2],
      year = _$exec2[3];

  year = Number(year);
  month = Number(month) - 1;
  day = Number(day);

  var date = new Date(year, month, day);

  return date.getYear() === year && date.getMonth() === month && date.getDate() === day;
};

var isValidNorwegianBirthNumber = function isValidNorwegianBirthNumber(input) {
  var cleaned = input.replace(/\D/g, '');

  return hasCorrectPattern(input) && hasCorrectChecksum(cleaned, firstCheckDigitMultipliers) && hasCorrectChecksum(cleaned, secondCheckDigitMultipliers) && hasValidDate(cleaned);
};

module.exports = isValidNorwegianBirthNumber;