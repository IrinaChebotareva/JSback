
// Функции

// ### Разделение цифр и букв
// Напишите функцию, которая принимает на вход слово, а в ответ выдает два массива - массив букв, и массив цифр, которые встречаются в этом слове

// const massLetters = [];
// const massDigits  = [];
// function arrLettersOrDigits(arrayMy) {
//
//     for (const item of arrayMy) {
//         if (typeof item == 'number') {
//             massDigits.push(item);
//             } else if (typeof item == 'string') {
//             massLetters.push(item)
//         }
//     }
//     return(massLetters, massDigits)
// }
// arrLettersOrDigits(['a', 5, 8, 's', 98, '879'])
// console.log('Массив чисел: ', massDigits);
// console.log('Массив букв: ', massLetters)

// ### Только короткие строки
//
// Напишите функцию, которая на вход принимает два параметра - массив строк и число. И в ответ выдает отфильтрованный массив, в котором только те
// строки из первоначального массива, у которых длина короче, чем переданное число

// const arrNew = ['strange', 'new', 'array', 'once', 'one']
// const arrNew1 = []
// function arrOfStrings (arrMy, n) {
//     for (let i = 0; i < arrMy.length; i++) {
//         if (arrMy[i].length < n) {
//             arrNew1.push(arrMy[i])
//         }
//     }
//     return arrNew1
//
// }
// const abc = arrOfStrings(arrNew, 4)
// console.log(abc)

// - Адаптируйте функцию, чтобы она динамически определяла критерий сравнения - больше/меньше. То есть имела третий параметр,
// в зависимости от значения которого работало сравнение на “больше” или “меньше”

// const arrNew = ['strange', 'new', 'array', 'once', 'one']
// const arrNew1 = []
// function greatOrNot(n, lengthOfArr) {
//     return n > lengthOfArr
// }
//
// function arrOfStrings (arrMy, n) {
//     for (let i = 0; i < arrMy.length; i++) {
//         if (greatOrNot(n, arrMy[i].length)) {
//             arrNew1.push(arrMy[i])
//         }
//     }
//
//     return arrNew1
//
// }
// const abc = arrOfStrings(arrNew, 4)
// console.log(abc)


// - Адаптируйте функцию из предыдущего пункта, чтобы параметр был опциональным и по умолчанию работало сравнение “меньше”

// const arrNew = ['strange', 'new', 'array', 'once', 'one']
// const arrNew1 = []
// function greatOrNot(n?: digit, lengthOfArr) {
//     const xN = n ?? 4;
//     return xN < lengthOfArr
// }
//
// function arrOfStrings (arrMy, n) {
//     for (let i = 0; i < arrMy.length; i++) {
//         if (greatOrNot(n, arrMy[i].length)) {
//             arrNew1.push(arrMy[i])
//         }
//     }
//
//     return arrNew1
//
// }
// const abc = arrOfStrings(arrNew, 4)
// console.log(abc)



// ### Наибольший делитель
//
// Напишите функцию, которая на вход принимает массив чисел, и выводит в консоль наибольший делитель для каждого числа.
//
//     💡 Наибольшим делителем для числа A называется наибольшее число, на которое A делится без остатка, но при этом не само число A. Например для числа 18 наибольшим делителем является число 9
//
// ### Сумма значений объекта
//
// Напишите функцию, которая на вход получает объект и выдает сумму значений его полей. Гарантируется, что в объекте будут содержаться только числа.
// const newItem = {
//     item1: 12,
//     item2: 3,
//     item3: 8
// };
// let newMass = [];
// let summ = 0;
// function sumArr (massive) {
//     let newMass = Object.values(massive);
//     for (const eachItem of newMass) {
//         summ += eachItem;
//     }
// return summ
// }
// console.log(sumArr(newItem));
//
//   Адаптируйте функцию. Теперь не гарантируется что у объекта будут только числовые свойства. Теперь они могут быть ещё и
//   null, undefined, string, boolean. В таком случае нужно вывести сумму только числовых свойств

// const newItem = {
//     item1: 12,
//     item2: 3,
//     item3: 8,
//     item4: 'Ivan',
//     item5: 10
// };
// let newMass = [];
// let summ = 0;
// function sumArr (massive) {
//     let newMass = Object.values(massive);
//     for (const eachItem of newMass) {
//         if (typeof eachItem == 'number') {
//             summ += eachItem;
//         }
//     }
// return summ
// }
// console.log(sumArr(newItem));


// ### Возраст Стаса
//
// Напишите функцию, которая принимает на вход массив объектов. Ищет объект, у которого значение поля `name` равно `Stas` и возвращает значение поля `age`  у этого объекта. Если такого объекта нет, необходимо вернуть “Объект не найден", если объект найден, но поле `age` содержит значения `null` или `undefined`, необходимо вернуть “Возраста нет”.
//


// const elenaBer = {
//     name: 'Elena',
//     age: 36
// };
//
// const stasIvanov = {
//     name: 'Stas',
//     age: 28
// };
//
// const arrName = [elenaBer, stasIvanov];
// let stasAge = 0;
// function arrNames(arr) {
//     let newMass = Object.values(arr);
//     for (const eachItem of newMass) {
//         if (eachItem.name == 'Stas') {
//              stasAge = eachItem.age;
//         }
//     }
//     return stasAge
// }
// console.log(arrNames(arrName))

// ### Колбэк
//
// Напишите любую осмысленную функцию, которая на вход принимает два любых осмысленных колбэка.
// Внутри с помощью Math.random рандомит результат “успех/неуспех”, и в зависимости от этого вызывает один или другой колбэк.
//
// function funcSuccess() {
//     console.log('Успех!')
// };
// function funcFail() {
//     console.log('Неудача!')
// }
// function failOrSuccess(funcSuccess, funcFail) {
//     const succesOrFail = Math.random();
//
//     if (succesOrFail >= 0.5) {
//         funcSuccess();
//         console.log(succesOrFail)
//     } else {
//         funcFail();
//         console.log(succesOrFail)
//     }
// }
// console.log(failOrSuccess(funcSuccess,funcFail))
// // ### Билдер сообщений
//
// Напишите функцию, возвращающую другую функцию, чтобы этот код заработал
//
//
// const sayHi = sayBuilder('Hi');
// const sayBye = sayBuilder('Bye');
//
// console.log(sayHi('Ruslan')); // Hi, Ruslan!
// console.log(sayHi('Maxim')); // Hi, Maxim!
//
// console.log(sayBye('Ruslan')); // Bye, Ruslan!
// console.log(sayBye('Maxim')); // Bye, Maxim!
//
//!!!!не знаю
// function sayHiBuilder(name) {
//     const s = 'Hi'
//     return s
// };
// function sayByeBuilder() {
//     const s = 'Bye'
//     return s
// }
//
// function sayBuilder (hiOrBye) {
//     if (hiOrBye == 'Bye') {
//          sayByeBuilder()
//     } else if (hiOrBye == 'Hi') {
//          sayHiBuilder()
//     }
// }
//
// const sayHi = sayBuilder('Hi');
// const sayBye = sayBuilder('Bye');
//
// console.log(sayHi('Ruslan')); // Hi, Ruslan!
// console.log(sayHi('Maxim')); // Hi, Maxim!
//
// console.log(sayBye('Ruslan')); // Bye, Ruslan!
// console.log(sayBye('Maxim')); // Bye, Maxim!

//
// ### Фиббоначи
//
// Ряд фиббоначи - числовой ряд, который начинается с двух единиц, и далее каждое следующее число равно сумме двух предыдущих:
//
// 1, 1, 2, 3, 5, 8, 13, 21, 34
//
// То есть:
//
//     - 2 = 1 + 1
//     - 3 = 2 + 1
//     - 5 = 3 + 2
//     - 8 = 5 + 3
//     - 13 = 8 + 5
//         - и так далее
//
// Напишите рекурсивную функцию, которая будет возвращать определенное число в этой поседовательности, опираясь на полученный номер
//
// fib(1); // 1
// fib(2); // 1
// fib(3); // 2
// fib(4); // 3
// fib(5); // 5
// fib(6); // 8
// fib(7); // 13
// fib(8); // 21
// fib(9); // 34

// let first = 0;
// function fibonacci(digit) {
//     if (digit == 1) {
//         return digit;
//     } else if (digit == 0) {
//         return digit;
//     } else {
//         return (fibonacci(digit-2) + fibonacci(digit-1));
//     }
//
// };
//
// console.log(fibonacci(1));
// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(4));
// console.log(fibonacci(5));
// console.log(fibonacci(6));
// console.log(fibonacci(7));
// console.log(fibonacci(8));
// console.log(fibonacci(9));

//
// ### Самопроверка
//
// Напишите функцию, которая выполняет абсолютно любое действие (сложное или несложное - неважно). Создайте матрицу (массив, который состоит из других массивов),
// в которой будут хранится аргументы для вызова функции и ожидаемые результата её выполнения.
//     Например, эта матрица может выглядеть вот так, как ниже. На первых двух позициях в каждом массиве лежат аргументы для вызова функции `multiply`, которая перемножает аргументы. На третьей позиции в массиве лежит ожидаемый результат выполнения функции, если вызвать её с такими аргументами.
//     Напишите код, который прогонит вызов функции с каждым значением и проверить что каждый результат выполнение совпадет с ожидаемым результатом.
//
// const array = [
// 	[1, 9, 9],
// 	[2, 3, 6],
// 	[5, 5, 25],
// 	[8, 3, 24],
// 	[0, 0, 0]
// ];
//
// const multiply = (a: number, b: number) => a * b;
//
//!!! не знаю
// function summ(b, c) {
//     let a = b + c;
//     return a
// }
// const array = [
//     [1, 9, 10],
//     [2, 3, 5],
//     [5, 5, 10],
//     [8, 3, 11],
//     [0, 0, 0]
// ];
// function arrSum(array) {
//     for (let i = 0; i < array[i].length; i++) {
//         for (const it of array[i]) {
//             if (summ(array[0], array[1]) == array[0] + array[1]) {
//                 return console.log(summ(array[0], array[1]), ' ok')
//             } else {
//                 return console.log(summ(array[0], array[1]), ' not ok')
//             }
//         }
//     }
// }
// console.log(arrSum(array))

// - Адаптируйте код (если получится), создайте другую функцию, которая на вход получает как аргумент другую функцию (колбек), и массив для вызова этой функции и для сравнения полученного результата с ожидаемым
//
// ### Шифр
//
// Фраза
//
// the quick brown fox jumps over the lazy dog
//
// содержит все буквы английского алфавита.
//
//     Я создал свой алфавит, который замещает одни английские буквы другими. Вот та же самая фраза, но записанная с помощью нового алфавита:
//
// sgd pthbj aqnvm enw itlor nudq sgd kzyx cnf
//
// В данном примере буква `t` была изменена на `s`, буква `h` на `g` и так далее.
//
//     Создайте словарь, в котором будут сопоставлены буквы обычного алфавита и буквы моего алфавита.
//
//     Используя словарь, расшифруйте фразу
//
// xnt gzud lzjhmf fqdzs oqnfqdrr hm kdzqmhmf izuzrbqhos
//!!! не знаю
// const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
// let newArr = [];
// for (const i in arr) {
//     newArr
// }
// let newString = 'xnt gzud lzjhmf fqdzs oqnfqdrr hm kdzqmhmf izuzrbqhos'



//
// ## ⚠️SMS⛔️
//
// ### Предисловие
//
// Задача является необязательной.
//
//     Предупреждаю, что эта задача является более сложной, чем может показаться на первый взгляд. Её решение заняло у меня около получаса, и потом ещё столько же потребовалось чтобы причесать код и сделать его читаемым.
//
//     Конечно же, в процессе решения вам может повезти и вы можете сразу выбрать верный путь и решить задачу без проблем, но лично у меня получилось найти правильное решение только с 3го раза)
//
// Так что не расстраивайтесь, если что-то не получается.
//
// ### Условие
//
// Представим, что мы разрабатываем панель для управления СМС рассылками.
//
//     Пользователь в личном кабинете может вписать в специальном окошке текст своего смс сообщения.
//
//     При этом максимальный размер одного смс сообщения - 70 символов, если сообщение пользователя превышает этот лимит, то его сообщение будет разделено на несколько сообщений, и чтобы связать их вместе, будут использоваться 3 служебных символа, поэтому, при отправке нескольких сообщений, максимальное количество символов в одном сообщение - 67.
//
// Вот пример макета.
//
// ![mhMULUz6U4U.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/589f56be-77b3-4a75-aec7-379cc5ea8a11/ecf23c98-0a89-45c7-8330-87db69b12f10/mhMULUz6U4U.jpg)
//
// В этом окошке нужно показывать пользователю, какое количество сообщений будет отправлено и какое количество символов у него остаётся в текущем сообщении (обратите внимание на заполнение красной полосы, она как раз это показывает).
//
// ### Задача
//
// Напишите функцию, которая принимает на вход количество символов, а возвращает количество символов в последнем сообщении и количество сообщений. Напомню, в одном сообщении максимум может быть 70 символов, но при большем количестве символов, необходимо отправлять несколько сообщений, у которых максимум 67 символов может быть, так как 3 символа будут служебными для связи нескольких сообщений в одно.
//
//     Примеры:
//
// | Вход | Выход: Кол-во сообщений | Выход: Кол-во символов в последнем сообщении |
// | --- | --- | --- |
// | 0 | 1 | 0 |
// | 55 | 1 | 55 |
// | 70 | 1 | 70 |
// | 71 | 2 | 4 (первое 67/67, второе 4/67) |
// | 130 | 2 | 63 (первое 67/67, второе 63/67) |
// | 134 | 2 | 67 (первое 67/67, второе 67/67) |
// | 135 | 2 | 1 (67/67, 67/67, 1/67) |
// | 670 | 10 | 67 (десять “полных” сообщений 67/67) |
//
// ### Усложнение
//
// Если вы читали макет, то могли увидеть, что ограничения по кол-ву символов определяются языком, поэтому попробуйте дорабать вашу функцию для работы с двумя языками, язык можно принимать как boolean параметр, то есть “кириллица” - “да” или “нет”.

//Код ревью
//!!! не могу точно проверить, потому что в Intellij Idea не работает типизация TS
// type Program = {
//     name: string;
// };
//
// type Person = {
//     age?: number;
//     name?: string;
//     nicknames: string[]; //нет такого типа
//     programs: Program[]; //тип Program - объект, а не массив
// };
//
// const logProgramName = (object: Program): string => {
//     console.log(object.name);
// };
//
// const logPersonName = (object: Person): string => {
//     return object.name;
// };
//
// const p1: Program = { name: 'programmator' };
// const p2: Person = {
//     nicknames: [],
//     programs: [p1],
// };
//
// console.log(logProgramName(p1));
// console.log(logPersonName(p2));
//
// console.log(logProgramName(p1));
// console.log(logPersonName(p2));



//
// ### Поиск в массиве
//
// Дан массив объектов, используя find, найдите объект, у которого в поле `age` лежит значение более 10
//
// const arr = [
//     { name: 'aaa', age: 20 },
//     { name: 'bbb', age: 15 },
//     { name: 'ccc', age: 80 },
//     { name: 'ddd', age: 5 }
// ]
// const moreThan10 = arr.find((c) => c.age > 10);
// console.log(moreThan10)


// ### Умный поиск в массиве
//
// Доработайте функцию умного поиска, чтобы она работала как ожидается. Типы `any` замените на нормальные.
//
//не знаю
// const storage = [
//   { age: 10, name: 'first' },
//   { age: 20, name: 'second' },
//   { age: 30, name: 'third' },
//   { age: 40, name: 'fourth' },
// ];
//
//  // const smartSearch = (arr: storage[], property: string, value: number | string) => {
//  const smartSearch = (arr, property, value) => {
//     const a = arr.filter(function (item) {
//          return (item.name === property, item.age === value);
//      })
// };


// const person1 = smartSearch(storage, 'age', 30);
// // { age: 30, name: 'third' }
// console.log(person1)
// const person2 = smartSearch(storage, 'age', 10);
// // { age: 10, name: 'first' }
// console.log(person2)
//
// const person3 = smartSearch(storage, 'name', 'second');
// // { age: 20, name: 'second' }
// console.log(person3)

//
// ### Рандомный фильтр
//
// Создай любой массив и с помощью filter возьмите из него случайные элементы (используйте Math.random())
//
//не знаю
// const numbers = [-1, -5, 1, 2];
// let a = 0;
// const randomDigit = numbers.filter(function (randomDigit) {
//     for (let i = 0; i < numbers.length; i++) {
//         a = Math.round((Math.random() * 10));
//         if (i == a) {
//             return (randomDigit, a)
//         } else {
//             console.log('Нет такого элемента');
//             return  a
//         }
//     }
// })
// console.log(randomDigit, a)

// ### Что выведет программа
//
// Что выведет программа ниже?
// выведет массив булеан, но непоянтно, почему - ведь map заменяет значения согласно условию
// const storage = [
//   { age: 10, name: 'first' },
//   { age: 20, name: 'second' },
//   { age: 30, name: 'third' },
//   { age: 40, name: 'fourth' },
// ];
//
// const smalls = storage.map((s) => s.age > 10);
//
// console.log(smalls);

//
// ### Обогатите список
//
// Дорабойта код, используя метод `map` , чтобы он работал как ожидается:
//
// const storage = [
//   { age: 10, name: 'first' },
//   { age: 20, name: 'second' },
//   { age: 30, name: 'third' },
//   { age: 40, name: 'fourth' },
// ];
//
// const storage2 = storage.map((person) => {
//   return {
//     age: person.name,
//     name: person.age,
//     reversed: true,
//   };
// });
//
// console.log(storage2);
/* Ожидаемый вывод:
[
  { age: 'first', name: 10, reversed: true },
  { age: 'second', name: 20, reversed: true },
  { age: 'third', name: 30, reversed: true },
  { age: 'fourth', name: 40, reversed: true }
]
*/

//
// ### Последовательность
//
// Напишите свою функцию `indexOf`, которая будет находить индекс подстроки в строке,
// не используя при этом методы строк (include, indexOf и так далее - запрещены). Циклом проходите по всей строке и сопоставляйте пройденные буквы с искомым словом.
//
//     Если есть несколько вхождений, вывести только индекс первого.
//
//     Если вхождений нет, вывести -1
//
// const text = 'my example text';
//
// const word1 = indexOf('my', text); // 0
// const word2 = indexOf('mpl', text); // 6
// const word3 = indexOf('t', text); // 11
// const word4 = indexOf(' t', text); // 10
// const word5 = indexOf('my example text', text); // 0
// const word6 = indexOf('e ', text); // 9
// const word7 = indexOf('a ', text); // -1
// ```
// ### reduce
//
// Используя reduce, напишите функцию, которая:
//
// - Фильтрует только положительные числа
// - Фильтрует только строки
// - Создаёт массив только с уникальными значениями
// - Создает обратный массив (у которого обратная последовательность элемента)
// - Превращает массив в объект:
//
//     ```tsx
//     const values = [10, 'just_name', true];
//     const myObject = values.reduce...
//     console.log(myObject);
//     // { 'key-1': 10, 'key-2': 'just_name', 'key-3': true }
//     ```
//
//     - Превращает массив в объект. Считает количество упоминаний первого числа и сумму значений для этого числа
//
//     ```tsx
// const values =
//     [[1, 100], [2, 200], [3, 300], [1, 2], [3, 400], [4, 500], [1, 99]];
//
// const result = values.reduce...
// /*
// {
//   '1': { count: 3, sum: 201 },
//   '2': { count: 1, sum: 200 },
//   '3': { count: 2, sum: 700 },
//   '4': { count: 1, sum: 500 }
// }
// Означает, что:
// число 1 встретилось 3 раза - [1, 100], [1, 2] и [1, 99] и сумма значений = 201 (100+2+99)
// число 2 встретилось 1 раз - [2, 200] и сумма значений 200
// число 3 встретилось 2 раза - [3, 300] и [3, 400] и сумма значений 700
// число 4 встретилось 1 раз - [4, 500] и сумма значений 500
//  */
//
// ```