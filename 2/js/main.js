//Функция, возвращающая случайное целое число из переданного диапазона включительно.
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min < 0 || max < 0) {
    return NaN;
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Функция для проверки максимальной длины строки
function maxlengthStr(str, minlength, maxlength) {
  minlength = 4;
  maxlength = 7;

  if (str.length < minlength || str.length > maxlength) {
    return false;
    // alert(
    //   "Длина комментария должна быть не меньше 20 символов и не больше 140 символов"
    // );
  } else {
    return str;
  }
}
