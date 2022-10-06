interface SOPT {
    name: string;
    age: number;
    isSOPT: boolean;
    //favoriteFood: string;
    //favoriteFood?: string; ==> optional하다는 뜻!
}

// const introduces: SOPT = {
//     name: '권세훈',
//     age: 18,
//     isSOPT: true,
//     //favoriteFood: '회'
// }

const arr: SOPT[] = [
    {
    name: '권세훈',
    age: 20,
    isSOPT: true
    }, {
    name: '최승빈',
    age: 67, 
    isSOPT: false
    }, {
    name: '남지윤',
    age: 2,
    isSOPT: false
    }
]
