// 1. Функция для нахождения произведения двух максимальных из трёх чисел
alert(
  "Задание 1. Напишите функцию, которая принимает три числовых параметра и возвращает произведение двух максимальных из них."
);
const a = Number(prompt("Введите 1 число:"));
const b = Number(prompt("Введите 2 число:"));
const c = Number(prompt("Введите 3 число:"));

let result = getMaxValue(a, b, c);

function getMaxValue(a, b, c) {
  const arr = [a, b, c];
  arr.sort((x, y) => y - x);
  return arr[0] * arr[1];
}

alert("Произведение двух максимальных чисел: " + result);

/* 2. Объявите функцию, которая принимает на вход два параметра: имя и
звание. Значение звания по умолчанию «рядовой».
Продемонстрируйте вариант использования функции с передачей 1 и 2
параметров. */

alert(
  "Задание 2. Объявите функцию, которая принимает на вход два параметра: имя и звание. Значение звания по умолчанию «рядовой». Продемонстрируйте вариант использования функции с передачей 1 и 2 параметров."
);

function ranks(name, rank = "рядовой") {
  return `Здравия желаю, ${rank} ${name}!`;
}

const nameP = prompt("Введите свое имя: ");
const rankP =
  prompt('Введите свое звание (по умолчанию "рядовой"): ') || "рядовой";

alert(ranks(nameP, rankP));

/* 3. Объявите функцию, которая принимает на вход функциональное
выражение и набор параметров для его вызова, а возвращает результат
вызова переданного функционального выражения. 
*/

alert(
  "Задание 3. Объявите функцию, которая принимает на вход функциональное выражение и набор параметров для его вызова, а возвращает результат вызова переданного функционального выражения."
);
const n1 = Number(+prompt("Введите 1е число:"));
const n2 = Number(+prompt("Введите 2е число:"));

function funSum(fun, ...args) {
  return fun(...args);
}
const Sum = (a, b) => a + b;
alert(`Сумма введенных чисел: ${funSum(Sum, n1, n2)}`);

/* 4. Объявите функцию, которая принимает на вход целые числа. Для
чётных значений функция возвращает стрелочное выражение
возведения числа в квадрат, а для нечётных – стрелочное выражение
возведения в куб. */

alert(
  "Задание 4. Объявите функцию, которая принимает на вход целые числа. Для чётных значений функция возвращает стрелочное выражение возведения числа в квадрат, а для нечётных – стрелочное выражение возведения в куб."
);
const num = Number(prompt("Введите целое число:"));

function getNumber(num) {
  if (num % 2 === 0) {
    return (n) => n ** 2;
  } else {
    return (n) => n ** 3;
  }
}
const resultNumUn = getNumber(num);
const resultNum = resultNumUn(num);
alert(`Результат ${resultNum}`);

// 5. Напишите рекурсивную функцию для расчёта факториала числа n.
alert(
  "Задание 5. Напишите рекурсивную функцию для расчёта факториала числа n."
);
const factorial = Number(prompt("Введите число для нахождения факториала:"));

function getFactorial(fac) {
  if (fac === 1) {
    return 1;
  } else {
    return fac * getFactorial(fac - 1);
  }
}
const resFac = getFactorial(factorial);
alert(`Факториал ${factorial} = ${resFac}.`);
