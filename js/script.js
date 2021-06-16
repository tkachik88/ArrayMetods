// Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let concated = arr1.concat(arr2);
console.log(concated);

// Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
let arr3 = [1, 2, 3];
let reversed = arr1.reverse();
console.log(reversed);

// Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
let arr4 = [1, 2, 3];
let pushed = arr4.push(4,5,6);
console.log(arr4);

// Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
let arr5 = [1, 2, 3];
let unshifted = arr5.unshift(4,5,6);
console.log(arr5);

// Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
let arr6 = ['js', 'css', 'jq'];
let shifted = arr6.shift();
console.log(shifted);

// Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
let arr7 = ['js', 'css', 'jq'];
let poped = arr7.pop();
console.log(poped);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [1, 2, 3].
let arr8 = [1, 2, 3, 4, 5];
let sliced = arr8.slice(0,3);
console.log(sliced);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [4, 5].
let arr9 = [1, 2, 3, 4, 5];
let sliced2 = arr9.slice(3);
console.log(sliced2);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода преобразуйте массив в [1, 4, 5].
let arr10 = [1, 2, 3, 4, 5];
arr10.splice(1,2);
arr10.slice(-1,2)
console.log(arr10);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [2, 3, 4].
let arr11 = [1, 2, 3, 4, 5];
let spliced3 = arr11.splice(1,3);
console.log(spliced3);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
let arr12 = [1, 2, 3, 4, 5];
let spliced4 = arr12.splice(3, 0, 'a','b','c');
console.log(arr12);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
let arr13 = [1, 2, 3, 4, 5];
arr13.splice(1, 0, 'a','b');
arr13.splice(6, 0, 'c');
arr13.splice(8, 0, 'e');
console.log(arr13);

// Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
let arr14 = [3, 4, 1, 2, 7];
let sorted = arr14.sort();
console.log(arr14);

// Дан массив с числами [5, 6, 7, 8, 9]. Найдите сумму этих чисел.
let arr15 = [5, 6, 7, 8, 9];
let sum = 0;
arr15.forEach(function(elem){
sum += elem;
});
console.log(sum);

// Дан массив с числами [5, 6, 7, 8, 9]. Сделайте из него массив, состоящий из квадратов этих чисел.
let arr16 = [5, 6, 7, 8, 9];
let newArr = arr16.map(function(elem){
    return elem * elem
});
console.log(newArr);

// Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только отрицательные числа.
let arr17 = [1,-3, 5, 6,-7, 8, 9,-11];
function func(elem){
    return elem < 0
};
let newArr2 = arr17.filter(func);
console.log(newArr2);

// Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только четные числа.
let arr18 = [1,-3, 5, 6,-7, 8, 9,-11];
function func2(elem){
    return elem % 2 === 0
};
let newArr3 = arr18.filter(func2);
console.log(newArr3);
 
// Дан массив со строками ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az']. Оставьте в нем только те строки, длина которых больше 5-ти символов.
let arr19 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
function func3(elem){
    return elem.length > 5
};
let newArr4 = arr19.filter(func3);
console.log(newArr4);  

// Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы.
let arr20 = [1, 2, [3, 4], 5, [6, 7]];
function func4(elem){
    return Array.isArray(elem)};
let newArr5 = arr20.filter(func4);
console.log(newArr5);  

// Дан массив с числами [5,-3, 6,-5, 0,-7, 8, 9]. Посчитайте количество отрицательных чисел в этом массиве.
let arr21 = [5,-3, 6,-5, 0,-7, 8, 9];
function func5(elem){
    return elem < 0
};
let newArr6 = arr21.filter(func5);
console.log(newArr6.length);
