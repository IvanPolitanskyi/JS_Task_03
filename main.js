//Дан массив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
//1. Найти сумму и количество положительных элементов.
//2. Найти минимальный элемент массива и его порядковый номер.
//3. Найти максимальный элемент массива и его порядковый номер.
//4. Определить количество отрицательных элементов.
//5. Найти количество нечетных положительных элементов.
//6. Найти количество четных положительных элементов.
//7. Найти сумму четных положительных элементов.
//8. Найти сумму нечетных положительных элементов.
//9. Найти произведение положительных элементов.
//10. Найти определить количество элементов, равных 4.
//11. Найти наибольший среди элементов массива, остальные обнулить.
//Взять еще один массив [46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47,16,-37,54,-4,72,-56,47,4,-16,25,-37]
//13. Вычислить разность соответствующих элементов массивов и записать в новый массив [-30, -41, 105...].

let arr1 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]

let sumOfPositive = 0;
let quantOfPositive =0;
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] >= 0) {
        sumOfPositive = sumOfPositive + arr1[i];
        quantOfPositive++;
    }
}
console.log('task 1 sum: ', sumOfPositive);
console.log('       quantity: ', quantOfPositive);

let minElement=arr1[0];;
let indexOfMin=0;
for (let i = 1; i < arr1.length; i++) {
    if (minElement > arr1[i]) {
        minElement = arr1[i];
        indexOfMin = i;
    }

}
console.log('task 2 min: ', minElement);
console.log('       index: ', indexOfMin);

let maxElement = arr1[0];
let indexOfMax = 0;
for (let i = 1; i < arr1.length; i++) {
    if (maxElement < arr1[i]) {
        maxElement = arr1[i];
        indexOfMax = i;
    }

}
console.log('task 3 max: ', maxElement);
console.log('       index: ', indexOfMax);

let quantOfNegative = 0;
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] < 0) {
        quantOfNegative++;
    }
}
console.log('task 4 quantity of negative: ',quantOfNegative);

let quantOfOddPositiv = 0;
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] >= 0 && arr1[i] % 2 != 0) {
        quantOfOddPositiv++;
    }
}
console.log('task 5 the quantity of odd positive elements: ', quantOfOddPositiv);

let quantOfEvenPositive = 0;
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] >= 0 && arr1[i] % 2 === 0) {
        quantOfEvenPositive++;
    }
}
console.log('task 6 the quantity of even positive elements: ', quantOfEvenPositive);

let sumOfEvenPositive = 0;
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] >= 0 && arr1[i] % 2 == 0) {
        sumOfEvenPositive = sumOfEvenPositive + arr1[i];
    }
}
console.log('task 7 sum of even positive elements: ', sumOfEvenPositive);

let sumOfOddPositive = 0;
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] >= 0 && arr1[i] % 2 != 0) {
        sumOfOddPositive = sumOfOddPositive + arr1[i];
    }
}
console.log('task 8 sum of odd positive elements: ', sumOfOddPositive);

let productOfPositive = 1;
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] >= 0) {
        productOfPositive = productOfPositive * arr1[i];
    }
}
console.log('task 9 product of positive elements: ', productOfPositive);

let quantOfElement = 0;
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] == 4) {
        quantOfElement++;
    }
}
console.log('task 10 quantity of elements equal to 4: ', quantOfElement);

let arrTask11 = arr1.slice(0);
for (let i = 0; i < arrTask11.length; i++) {
    if (arrTask11[i] != maxElement) {
        arrTask11[i] = 0
    }
}

console.log('task 11 max: ', maxElement);
console.log('reset to zero: ', arrTask11);

let arr2 = [46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47, 16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37]
let arrTask13 = [];
for (let i = 0; i < arr1.length; i++) {
    arrTask13[i] = arr1[i] - arr2[i];
}
console.log('task 12 difference of the corresponding array elements in the new array: ', arrTask13);
