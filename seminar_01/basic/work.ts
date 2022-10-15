// //1. 서버 파트원 2-3명 소개하는 객체 만들기
// //2. 파트원 소개  배열에 타입으로 지정할 인터페이스 생성 및 타입 지정
// //3. 출력

const members : Introduce[] = [
    {
        name: '임채영',
        age: 21,
        home: '이대역',
        favoriteFood: '초밥'
    },
    {
        name: '백혜윤',
        age: 23,
        home: '광교중앙역',
        favoriteFood: '파스타'
    }
]

interface Introduce {
    name: string;
    age: number;
    home: string;
    favoriteFood: string;
}

const printInfo = members.map(members => members['name'] + '은' 
        + members['age'] + '살이고' + members['home'] + '근처에 살고'
        + members['favoriteFood'] + '을(를) 좋아합니다.');

console.log(printInfo)
// -> 이렇게 하면, 배열 안에 임채영/백혜윤에 대한 두 문장이 들어가고, 그 배열이 통으로 출력된다.

//================================= 아래부터는 팟장님 코드
// const members : Server[] = [
//     {
//         name: "이종현",
//         age: 19
//     }, {
//         name: "현세빈",
//         age: 19
//     }, {
//         name: "남지윤",
//         age: 3
//     }
// ]

// interface Server {
//     name : string;
//     age : number;
// }

// members.map((member) => console.log(`${member.name} 님은 ${member.age}살 입니다.`))