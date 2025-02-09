alert(
  "Лабораторная работа 1. Вариант 2. Задание: Напишите исходный код программы, которая выводит в консоль все автоморфные числа на заданном пользователем отрезке [a, b]. Натуральное число называется автоморфным, если десятичная запись его квадрата оканчивается на десятичную запись этого числа."
);

// Получим границы
let leftBorder = Number(prompt("Введите левую границу: "));
let rightBorder = Number(prompt("Введите правую границу: "));

if (isNaN(leftBorder) || isNaN(rightBorder)) {
  alert("Ошибка! Пожалуйста, введите корректные числа.");
} 

else {
  function Authomorphic(num) {
    let square = num * num;
    return square.toString().endsWith(num.toString());
  }

  let Authomorphic_Num = [];

  for (let i = leftBorder; i <= rightBorder; i++) {
    if (Authomorphic(i)) {
      Authomorphic_Num.push(i);
    }
  }

  if (Authomorphic_Num.length > 0) {
    alert("Автоморфные числа: " + Authomorphic_Num.join(", "));
  } else {
    alert("Нет автоморфных чисел в этом интервале.");
  }
}
