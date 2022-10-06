// 함수 선언식
function hello(name) {
    console.log(`안녕 ${name}`);
}

//함수 표현식
const sum = (num1, num2) => {
    const result = num1 + num2;
    console.log(result);
    //return result;
    //변수 선언 안 하고 return num1+num2 라고 하는 것도 가능
}
//위 함수를 이렇게 간단하게도 선언 가능함.
//const sum = (num1, num2) => num1+num2;

hello("baek");
sum(2, 5);

const test = "hello";
console.log(typeof(test));