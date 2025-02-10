// 1. JSON-объект с информацией о студенте
const studentJSON = `{
  "lastName": "Акимов",
  "firstName": "Роман",
  "marks": [
    { "subject": "Математика", "mark": 5 },
    { "subject": "Физика", "mark": 4 },
    { "subject": "Информатика", "mark": 5 }
  ]
}`;

// Функция для вывода информации о студенте
function showStudentInfo(jsonString) {
  const student = JSON.parse(jsonString);
  alert(`Студент: ${student.lastName} ${student.firstName}\nОценки: ${student.marks.map(mark => `${mark.subject}: ${mark.mark}`).join(', ')}`);
}
showStudentInfo(studentJSON);

// 2. Классы Student и Mark
class Mark {
  constructor(subject, mark) {
    this.subject = subject;
    this.mark = mark;
  }
}

class Student {
  constructor(lastName, firstName, marks = []) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.marks = marks;
  }

  // 3. Метод для вычисления средней оценки
  getAverageMark() {
    const total = this.marks.reduce((sum, mark) => sum + mark.mark, 0);
    return (this.marks.length ? total / this.marks.length : 0).toFixed(2);
  }

  // 4. Метод для получения всех оценок по предмету
  getMarksBySubject(subject) {
    return this.marks.filter(mark => mark.subject === subject).map(mark => mark.mark);
  }

  // 5. Метод для добавления оценки по предмету
  addMark(subject, mark) {
    this.marks.push(new Mark(subject, mark));
  }

  // 6. Метод для удаления всех оценок по предмету
  removeMarksBySubject(subject) {
    this.marks = this.marks.filter(mark => mark.subject !== subject);
  }
}

// Пример использования
const student = new Student("Петров", "Сергей", [
  new Mark("Математика", 5),
  new Mark("Физика", 4)
]);

alert(`Студент: ${student.lastName} ${student.firstName}\nСредняя оценка: ${student.getAverageMark()}`);

student.addMark("Химия", 5);
alert(`Добавлена оценка по 'Химия':\n${student.getMarksBySubject("Химия").join(', ')}`);

student.removeMarksBySubject("Физика");
alert(`Оценки после удаления по 'Физика':\n${student.marks.map(mark => `${mark.subject}: ${mark.mark}`).join('\n')}`);
