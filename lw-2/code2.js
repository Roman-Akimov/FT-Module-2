// 1. Функция для нахождения произведения двух максимальных из трёх чисел
function productOfTwoMax(a, b, c) {
  const nums = [a, b, c];
  nums.sort((x, y) => y - x); // Сортировка по убыванию
  return nums[0] * nums[1];
}

const a = Number(prompt('Введите первое число:'));
const b = Number(prompt('Введите второе число:'));
const c = Number(prompt('Введите третье число:'));
const productResult = productOfTwoMax(a, b, c);
document.body.innerHTML += `<p>Произведение двух максимальных чисел: ${productResult}</p>`;

// 2. Функция с параметром по умолчанию
function greet(name, rank = "рядовой") {
  return `Здравствуйте, ${rank} ${name}`;
}

// Вызовы функции
const name1 = prompt('Введите имя:');
document.body.innerHTML += `<p>${greet(name1)}</p>`;
const name2 = prompt('Введите имя:');
const rank = prompt('Введите звание (по умолчанию рядовой):') || 'рядовой';
document.body.innerHTML += `<p>${greet(name2, rank)}</p>`;

// 3. Функция вызова переданного функционального выражения
function executeFunction(func, ...args) {
  return func(...args);
}

const sum = (a, b) => a + b;
const num1 = Number(prompt('Введите первое число для суммы:'));
const num2 = Number(prompt('Введите второе число для суммы:'));
const sumResult = executeFunction(sum, num1, num2);
document.body.innerHTML += `<p>Результат суммы: ${sumResult}</p>`;

// 4. Функция для возврата стрелочных выражений
function getArrowFunction(number) {
  return number % 2 === 0
    ? (n => n ** 2)
    : (n => n ** 3);
}

const number1 = Number(prompt('Введите число для проверки четности:'));
const evenOrOddFunction = getArrowFunction(number1);
const calculationResult = evenOrOddFunction(number1);
document.body.innerHTML += `<p>Результат вычисления: ${calculationResult}</p>`;

// 5. Рекурсивная функция для вычисления факториала
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

const factorialInput = Number(prompt('Введите число для вычисления факториала:'));
const factorialResult = factorial(factorialInput);
document.body.innerHTML += `<p>Факториал числа ${factorialInput}: ${factorialResult}</p>`;
