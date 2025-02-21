# js_array
Основные методы массивов

1. Создание массивов

let arr1 = []; // Пустой массив
let arr2 = [1, 2, 3, 4, 5]; // Массив с числами
let arr3 = new Array(5); // Массив с 5 пустыми элементами

2. Добавление и удаление элементов

let numbers = [1, 2, 3];

numbers.push(4); // Добавляет 4 в конец массива
numbers.pop(); // Удаляет последний элемент

numbers.unshift(0); // Добавляет 0 в начало
numbers.shift(); // Удаляет первый элемент



3. Поиск элементов

let numbers = [10, 20, 30, 40];

console.log(numbers.includes(20)); // true
console.log(numbers.indexOf(30)); // 2

4. Объединение массивов

let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4]