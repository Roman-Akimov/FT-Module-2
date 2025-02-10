/* 1. Напишите функцию, производящую сортировку в массиве студентов
по средней оценке. Метод должен реализовывать сортировку Шелла. */

class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }
  // Метод для нахождения средней оценки
  getAverageGrade() {
    return this.marks.reduce((sum, mark) => sum + mark, 0) / this.marks.length;
  }
}

// Функция сортировки Шелла
function sortShell(arr) {
  let n = arr.length;
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i++) {
      let temp = arr[i];
      let j;
      for (j = i; j >= gap && arr[j - gap].getAverageGrade() > temp.getAverageGrade(); j -= gap)
        arr[j] = arr[j - gap];
      arr[j] = temp;
    }
  }
  return arr;
}

// Пусть будет 10 бальная шкала оценивания
const students = [
  new Student("Rico", [7, 9, 3]),
  new Student("Mico", [4, 5, 1]),
  new Student("Marco", [5, 7, 9]),
  new Student("Zolo", [1, 2, 1]),
  new Student("Kira", [7, 8, 9]),
  new Student("Vera", [5, 3, 8]),
  new Student("Max", [3, 5, 7]),
  new Student("Kolya", [7, 9, 10]),
  new Student("Den", [4, 5, 9]),
];

const result = sortShell(students);
result.forEach(student => {
  alert(`Студент ${student.name}. Средняя оценка: ${student. getAverageGrade().toFixed(2)}`);
});