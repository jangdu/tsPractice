// ts
let count = 0;
count += 1;

var massage: string = "hello world";

const done: boolean = true;

const numbers: number[] = [1, 2, 3];
const messages: string[] = ['hello', 'world'];

// massage.push(1); 바로 오류

// string일수도 undefined일수도
let mightBeUndefined: string | undefined = undefined;
// number일수도 null일수도
let nullableNumber: number | null = null;
// red, orange, yellow 중 하나
let color: 'red' | 'orange' | 'yellow' = 'red'

// * typescript는 변수, 상수의 타입 지정가능

console.log(massage);