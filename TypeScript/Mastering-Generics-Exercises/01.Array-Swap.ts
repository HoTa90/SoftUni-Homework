function swap<T>(a: T[], aindex: number, b: T[], bindex: number):void{
    let temp = a[aindex]
    a[aindex] = b[bindex]
    b[bindex] = temp;
}

// let a = ['test', '123'];
// let b = ['a', 'b', 'c'];
// swap<string>(a, 0, b, 2);
// console.log(a)
// console.log(b)

let a = [20, 30 , 40];
let b = [1, 2, 3, 4, 5];
swap<number>(a, 0, b, 2);
console.log(a)
console.log(b)

