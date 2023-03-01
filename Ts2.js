//2. Написать модуль, который способен выполнять операции с числами любой длины.
function bigNumberOperations(num1, num2, operator) {
  // Создаём массив для хранения чисел
  let num1Arr = num1.split('').map(Number);
  let num2Arr = num2.split('').map(Number);
  let resultArr = [];
  let result;
  
  //  Наибольшее число - в отдельный массив
  let longerNum;
  let shorterNum;
  if (num1Arr.length > num2Arr.length) {
    longerNum = num1Arr;
    shorterNum = num2Arr;
  } else {
    longerNum = num2Arr;
    shorterNum = num1Arr;
  }
  
  // Создаём наш оператор
  switch (operator) {
    case "+":
      // Циклом проходимся по наибольшему числу
      for (let i = 0; i < longerNum.length; i++) {
        // Добавляем числа
        let sum = longerNum[i] + (shorterNum[i] || 0);}}}