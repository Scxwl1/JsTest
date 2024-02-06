//Функция, которая принимает массив строк и возвращает самую длинную строку в массиве

function findLongestWord(arr) {
    let longestWord = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestWord.length) {
            longestWord = arr[i];
        }
    }
    return longestWord;
}

console.log(findLongestWord(["Java", "Python", "JavaScript"])); // "JavaScript"
console.log(findLongestWord(["football", "basketball", "tennis"])); // "basketball"
console.log(findLongestWord(["sun", "moon", "stars"])); // "stars"


//Функция, которая принимает массив чисел и возвращает сумму всех уникальных чисел в массиве 

function sumUniqueNumbers(numbers) {
    const uniqueNumbers = numbers.filter((num, index) => numbers.indexOf(num) === index);
    return uniqueNumbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumUniqueNumbers([1, 2, 3, 2, 4, 3, 5])); // 15
console.log(sumUniqueNumbers([10, 20, 10, 20, 30])); // 60
console.log(sumUniqueNumbers([0, -1, -2, -1, -3])); // -6


//Функция, которая принимает произвольное количество массивов чисел и возвращает новый массив, содержащий все элементы переданных массивов, но без дубликатов

function mergeArrays(...arrays) {
    const mergedArray = [].concat(...arrays);
    return [...new Set(mergedArray)];
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6], [7, 8, 9], [2, 3, 4])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(mergeArrays([1, 3, 5], [2, 4, 6], [3, 5, 7])); // [1, 3, 5, 2, 4, 6, 7]


// Функция, которая принимает объект и строку в качестве аргументов и возвращает true, если объект содержит свойство с данным именем, иначе false

function hasProperty(obj, property) {
    return property in obj;
}
    
console.log(hasProperty({name: "Alice", age: 25}, "age")); // true
console.log(hasProperty({name: "Bob", country: "France"}, "gender")); // false
console.log(hasProperty({type: "fruit", color: "red"}, "color")); // true
