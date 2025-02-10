/* 1. Реализуйте функцию для поиска в двух заданных массивах элементов,
которые присутствуют в обоих массивах. Используйте Set. */

function elemenSearch(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const resArray = [...set1].filter((element) => set2.has(element));
  return resArray;
}

// Пример
alert(elemenSearch([1, 2, 3, 4, 5], [4, 5, 6, 7]));

/* 2. Реализуйте функцию, которая подсчитывает количество вхождений
каждого элемента в массиве. Используйте Map.*/
function countInputElements(arr) {
  const map1 = new Map();
  arr.forEach((element) => {
    const count = map1.get(element) || 0;
    map1.set(element, count + 1);
  });
  return map1;
}

// Пример
const result = countInputElements(["a", "b", "d", "a", "c", "c"]);
result.forEach((count, element) => {
  alert(`Элемент ${element} встречается ${count} раз(а).`);
});

/* 3. В массиве студентов подсчитать число обучающихся в самой большой
группе. Номер группы – свойство класса Student типа string.*/

class Student {
  constructor(nameS, group) {
    this.nameS = nameS;
    this.group = group;
  }
}

function countFromGroup(arr) {
  const groupCount = new Map();
  arr.forEach((element) => {
    groupCount.set(element.group, (groupCount.get(element.group) || 0) + 1);
  });
  return Math.max(...groupCount.values());
}

// Пример
const students = [
  new Student('Rico', 'A'),
  new Student('Mico', 'A'),
  new Student('Marco', 'A'),
  new Student('Zolo', 'V'),
  new Student('Kira', 'B'),
  new Student('Vera', 'A'),
  new Student('Max', 'B'),
  new Student('Kolya', 'B'),
  new Student('Den', 'B'),
]
alert(`В самой большой группе ${countFromGroup(students)} учащихся.`);