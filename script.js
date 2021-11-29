do {
    var a = +prompt('Введите число')
} while (isNaN(a) || !a)

do {
    var b = +prompt('Введите степень')
} while (isNaN(b) || !b)

console.log(a**b);

alert(a**b)