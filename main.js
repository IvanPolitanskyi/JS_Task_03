let arr1 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]
let task1 = [0, 0]
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] >= 0) {
        task1[0] = task1[0] + arr1[i];
        task1[1]++;
    }
}
console.log('task 1 sum: ', task1[0]);
console.log('       quantity: ', task1[1]);

let task2 = [0, 0];
task2[0] = arr1[0];
for (let i = 1; i < arr1.length; i++) {
    if (task2[0] > arr1[i]) {
        task2[0] = arr1[i];
        task2[1] = i;
    }

}
console.log('task 2 min: ', task2[0]);
console.log('       number: ', task2[1]);

let task3 = [0, 0];
task3[0] = arr1[0];
for (let i = 1; i < arr1.length; i++) {
    if (task3[0] < arr1[i]) {
        task3[0] = arr1[i];
        task3[1] = i;
    }

}
console.log('task 3 max: ', task3[0]);
console.log('       number: ', task3[1]);

let task4 = 0;
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] < 0) {
        task4++;
    }
}
console.log('task 4 number of negative: ', task4);

let task5 = 0;
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] >= 0 && arr1[i] % 2 != 0) {
        task5++;
    }
}
console.log('task 5 the number of odd positive elements: ', task5);

let task6 = 0;
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] >= 0 && arr1[i] % 2 === 0) {
        task6++;
    }
}
console.log('task 6 the number of even positive elements: ', task6);