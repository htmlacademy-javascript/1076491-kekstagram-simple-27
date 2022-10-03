//Функция, возвращающая случайное целое число из переданного диапазона включительно.
function getRandomIntInclusive(min, max) {
  if (min < 0 || max < 0) {
    return NaN;
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Функция для проверки максимальной длины строки
function checkLengthStr(str, length) {
  return str.length <= length;
}
