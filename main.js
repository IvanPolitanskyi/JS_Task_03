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

let task7 = 0;
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] >= 0 && arr1[i] % 2 == 0) {
        task7 = task7 + arr1[i];
    }
}
console.log('task 7 sum of even positive elements: ', task7);

let task8 = 0;
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] >= 0 && arr1[i] % 2 != 0) {
        task8 = task8 + arr1[i];
    }
}
console.log('task 8 sum of odd positive elements: ', task8);

let task9 = 1;
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] >= 0) {
        task9 = task9 * arr1[i];
    }
}
console.log('task 9 product of positive elements: ', task9);

let task10 = 0;
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] == 4) {
        task10++;
    }
}
console.log('task 10 number of elements equal to 4: ', task10);

let task11 = 0;
let arrTask11=arr1.slice(0);
task11=arrTask11[0];
for (let i=1; i < arrTask11.length; i++) {
    if (task11<arrTask11[i]){
        task11 = arrTask11[i];
    }
}
for (let i=0; i < arrTask11.length; i++) { 
    if(arrTask11[i]!=task11){
        arrTask11[i]=0
    }
}

console.log ('task 11 max: ', task11);
console.log ('reset to zero: ', arrTask11);

let arr2 = [46,4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47, 16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37]
let arrTask2=[];
for (let i=0; i < arr1.length; i++) {
    arrTask2[i]=arr1[i]-arr2[i];
}
console.log('task 12 difference of the corresponding array elements in the new array: ', arrTask2);
