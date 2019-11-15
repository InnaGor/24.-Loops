

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
// let j;
// let num1 = parseInt(prompt("введите число"));
// for (j = 0; num1 > 1; j++) {
//     num1 /= 10;
// }
// console.log(`количество чисел ${j}`);


// 5. Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. 
// При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран.
//  Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
// ?????? почему не выводит парные? как сделать, чтобы выводило отрицательные?

// let stats = {
//     zero: 0,
//     positive: 0,
//     negative: 0,
//     even: 0,
//     odd: 0,
//   };
//   let numbers = [];
//   for (let i = 0; i < 10; i++) {
//     let num = parseInt(prompt(`N${i+1}:`));

//     if (num == 0) {
//       stats.zero++;
//     } else if (num > 0) {
//       stats.positive++;
//     } else {
//       stats.negative++;
//     }

//     if (num % 2 == 0) {
//       stats.even++;
//     } else {
//       stats.odd++;
//     }

//     numbers.push(num);
//   }

//   console.log(numbers);
//   console.log(stats);


// 6. Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, 
// хочет ли он решить еще один пример.  И так до тех пор, пока пользователь не откажется.

// while (true) {
//     let num_1 = parseInt(prompt("введите число №1"));
//     let num_2 = parseInt(prompt("введите число №2"));
//     let oper = prompt("введите действие");
//     result = eval(`${num_1} ${oper} ${num_2}`);
//     alert(result);
//     let c = confirm("хотите еще?");
//     if (c == false) {
//         break;
//     } continue;
// }

// 7.Запросить у пользователя число и на сколько цифр его сдвинуть.
//  Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).

/*let num7 = prompt("введите число");
let num7_1 = prompt("на сколько цифер сдвинуть?");
let arr_num7 = num7.split('');
console.log(arr_num7);
let newArr;
for (let i = 0; i < num7_1; i++) {
    let l = arr_num7.shift();
    newArr = arr_num7.push(l);
}
console.log(arr_num7);*/
// // console.log(newArr);

// 8. Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.

/*let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let question = confirm(`День недели: ${week[0]}. Хотите увидеть следующий день?`);
let i = 0;
while (question == true && i < week.length - 1) {
    // alert(week[i]);
    question = confirm(`День недели: ${week[i + 1]}. Хотите увидеть следующий день?`);
    i++;
}*/

// 9. Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10

/*for (i = 2; i < 10; i++) {
    for (j = 1; j < 11; j++) {
        let answer = i * j;
        console.log(`${i}*${j}=${answer}`);
    }
}*/

// 10. Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: 
// каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». 
// В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. 
// Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. 
// И так до тех пор, пока пользователь не выберет == N.

let un = parseInt(prompt("загадай число от 0 до 100"));
let mid_num = 50;
let max = 100;
let min = 0;

while (un !== mid_num) {
    if (isNaN(un)) {
        break
    } else {
        let answer = prompt(`is your number > or < or = to ${mid_num}?`);
        if (answer == NaN) {
            break
        } else if (answer == ">") {
            min = mid_num;
            mid_num = Math.ceil((max - min) / 2 + min);
        } else if (answer == "<") {
            max = mid_num
            mid_num = Math.ceil((max - min) / 2 + min);
        } else {

            break;

        }
    }
}

console.log(`${mid_num} is your number`);
