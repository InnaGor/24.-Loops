

// 1. Подсчитать сумму всех чисел в заданном пользователем диапазоне.
// let a = 0
// for (let i = 1; i <= 10; i++) {
//     a += i;
//     console.log(a);
// }
//2. Запросить 2 числа и найти только наибольший общий делитель.

// let a = parseInt(prompt("A?"));
// let b = parseInt(prompt("B?"));
// let c = Math.min(a, b);
// for (; c >= 1; c--) {
//     if (a % c == 0 && b % c == 0) {
//         console.log("C = ", c);
//         break;
//     }
// }
// alert(`"Наибольший общий делитель: ${c}"`);

// 3. Запросить у пользователя число и вывести все делители этого числа.
// let num = parseInt(prompt("введите число"));
// let divisor = 0;
// for (i = num - 1; i > 1; i--) {
//     let divisor = i;
//     if (num % divisor == 0) {

//         console.log(divisor);
//     }
// }

// 4. Определить количество цифр в введенном числе.
// 
// option 1
// let num1 = prompt("введите число");
// alert(`количество чисел - ${num1.length}`);

// option 2(through loop)

// let num1 = parseInt(prompt("введите число"));
// for (let i = 0; num1 > 1; i++) {
//     num1 /= 10;
// }
// console.log(i);

// console.log(`количество чисел ${i}`); почему так нельзя?

// 5. Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. 
// При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран.
//  Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.



let zero = 0;
let positive = 0;
let negative = 0;
let even = 0;
let odd = 0;
let query = parseInt(prompt("введите 10 чисел", ""));
for (let i = 0; i < 10; i++) {
    // if (isNaN(query)) {
    //     alert("Please, type numbers.")
    // } else 
    if (query == 0) {
        zero++;
    } else if (query > 0) {
        positive++;
    } else if (query < 0) {
        negative++
    } else if (query % 2 == 0) {
        even++
    } else if (query % 2 !== 0) {
        odd++
    }
}
console.log(`positive ${positive}`);
console.log(negative);
console.log(zero);
console.log(even);
console.log(odd);

