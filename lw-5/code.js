// Общий Вариант 2.

// Одномерные массивы
/* 2. Напишите функцию, принимающую на вход массив вещественных
чисел и возвращающую сумму модулей элементов массива,
расположенных после первого элемента равного нулю. */

function oneDFun(arr) {
  const zeroIn = arr.indexOf(0);
  if (zeroIn === -1 || zeroIn === arr.length - 1) return 0;

  return arr.slice(zeroIn + 1).reduce((sum, num) => sum + Math.abs(num), 0);
}

// Пример

alert("Результат: " + oneDFun([3.2, 5, 0, 12, 3.3]));

/* 2. Напишите функцию, принимающую на вход вещественную
прямоугольную матрицу и возвращающую минимум среди сумм
элементов диагоналей, параллельных главной диагонали матрицы. */

function minDiagonalSum(matrix) {
  const rows = matrix.length; // Количество строк
  const cols = matrix[0].length; // Количество столбцов
  let minSum = Infinity; // Минимальная сумма диагонали

  // Проходим диагонали ниже и включая главную
  for (let startRow = 0; startRow < rows; startRow++) {
    let sum = 0;
    let i = startRow,
      j = 0;

    // Идем по диагонали, начиная с позиции (startRow, 0)
    while (i < rows && j < cols) {
      sum += matrix[i][j];
      i++;
      j++;
    }

    minSum = Math.min(minSum, sum);
  }

  // Проходим диагонали выше главной
  for (let startCol = 1; startCol < cols; startCol++) {
    let sum = 0;
    let i = 0,
      j = startCol;

    // Идем по диагонали, начиная с позиции (0, startCol)
    while (i < rows && j < cols) {
      sum += matrix[i][j];
      i++;
      j++;
    }

    minSum = Math.min(minSum, sum);
  }

  return minSum;
}

// Пример
const matrix = [
  [2, 3, 1],
  [5, 4, 6],
  [1, 8, 9],
];

alert(`Минимальная сумма диагоналей: ${minDiagonalSum(matrix)}`);
