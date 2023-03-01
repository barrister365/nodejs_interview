// делаем модуль
const Firstmodule = (() => {
    // 1.1. Преобразование строки к нижнему регистру, но первая буква большая. "Abscd"
    function convert_1(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
      }
    /* 1.2. Преобразование строки с целью правильно расстановки пробелов. 
    "Вот пример строки,в которой     используются знаки препинания.
    После знаков должны стоять пробелы , а перед знаками их быть не должно .    
    Если есть лишние подряд идущие пробелы, они должны быть устранены." =>
    "Вот пример строки,в которой используются знаки препинания. 
    После знаков должны стоять пробелы, а перед знаками их быть не должно. 
    Если есть лишние подряд идущие пробелы, они должны быть устранены."*/

    function convert_2(str) {
        let result = str.replace(/([,.])(\S)/g, '$1 $2').replace(/\s{2,}/g, ' ');
        return result;
      }
    
    // 1.3. Посдчитывающие кол-во слов в строке.
    function count(str) {
        return str.split(" ").length;
      } 

    /* Подсчитывающий, уникальные слова. 
    "Текст, в котором слово текст несколько 
    раз встречается и слово тоже" - в ответе, 
    что "слово - 2 раза, текст - 2 раза, в - 1 раз, 
    несколько - 1 раз". Самостоятельно придумать 
    наиболее удачную структуру данных для ответа.*/
    function uniqewords(str) {
        const map = new Map();
        let string = "A text in which the word text occurs several times and the word too";
        const words = string.split(' ');

        for (let i = 0; i < words.length; i++) {
            if (!map.has(words[i])) {
                map.set(words[i], 1);
            } else {
              const count = map.get(words[i]);
              map.set(words[i], count + 1);
            }
          }
        }   
    
})()
