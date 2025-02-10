/* 1.Создайте класс Figure, обладающий двумя приватными свойствами x и
y, задающими центр фигуры. А также метод square, возвращающий
площадь фигуры – undefuned. */

class Figure {
  #x;
  #y;

  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }

  square() {
    return undefined;
  }
}

/* 2.Добавьте класс Circle, наследующий класс Figure, с тремя параметрами
в конструкторе – x, y и r. Переопределите метод расчёта площади
круга. */

class Circle extends Figure {
  constructor(x, y, r) {
    super(x, y);
    this.r = r;
  }

  square() {
    return Math.PI * this.r ** 2;
  }
}

/* 3. Добавьте класс Rectangle, наследующий класс Figure, с четырьмя
параметрами в конструкторе – x, y, h и w. Переопределите метод
расчёта площади прямоугольника.*/

class Rectangle extends Figure{
  constructor(x,y,h,w){
    super(x, y);
    this.h = h;
    this.w = w;
  }

  square(){
    return this.h * this.w;
  }
}

// Пример работы
const circle = new Circle(0, 0, 5);
alert(`Площадь круга = ${circle.square().toFixed(3)}`);
const rectangle = new Rectangle(0, 0, 3, 4);
alert(`Площадь прямоугольника = ${rectangle.square()}`);