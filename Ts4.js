// 4. Создать класс данных "Товар" ...
class Product {
  // создаём метод конструктор, наполняем его объектами вида
  constructor(title, price, quantity, description) {
    this.title = title;
    this.price = price;
    this.quantity = quantity;
    this.description = description;
  }
}
// наполняем массив объектами вида как в задании
const products = [
  new Product('Сумка', 10, 5, 'Синяя сумка'),
  new Product('Футболка', 15, 2, 'Красная футболка'),
  new Product('Шапка', 20, 7, 'Меховая шапка'),
  new Product('Стол', 50, 1, 'Деревянный стол'),
  new Product('Стул', 30, 4, 'Белый стул'),
];

// создаём функицю, которая позвляет определить товар по искомым признакам
function filterProducts(str) {
  const filterRules = str.split('&');
  const filteredProducts = [];
  for (let i = 0; i < products.length; i++) {
    let valid = true;
    for (let j = 0; j < filterRules.length; j++) {
      const [property, operator, value] = filterRules[j].split('-');
      const productValue = products[i][property];
      switch (operator) {}}}}