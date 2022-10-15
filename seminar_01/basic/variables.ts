//Typescript에서 변수 선언 _ 타입!!!!
const test1: string = 'hello'
console.log(typeof test1, test1)

const test2: number = 3
console.log(typeof test2, test2)

const test3: boolean = true
console.log(typeof test3, test3)

const test4: number = 5
//const test5: number = 'hello' -> error


//배열
let aaa: number[] = [1, 2, 3]   //타이핑이 적어서 이게 더 조음
//let bbb: number[] = [1, 2, 'hi'] -> error. 형식 일치 x
const arr3: Array<string> = ['h', 'a', 'd'] //-> 배열을 나타내는 또다른 방법


//Object & object
//Object: js의 객체랑 같은 개념
const foo1 = (a: Object) => {
    console.log(a)
}

//object: 원시타입이 아닌 타입만 할당 가능
const foo2 = (a: object) => {
    console.log(a)
}

foo1('hello')
//foo2('hello') // ->error. 'string' is not assignable to 'object'


//함수는 반환 타입!! 명시
const hello2 = (name: string): void => {
    console.log(`${name}아 안녕`)
}

const sum2 = (a: number, b: number): number => {
    return a + b;
}


//타입 단언
const test11: any = '이종현'
const nameLength = (test11 as string).length
console.log(nameLength)

const test12: any = '백혜윤'
const nameLength2 = (<string>test12).length
console.log(nameLength2)
//근데 any 남발하지마. 그럴거면 뭐하러 typescript 쓰냐.