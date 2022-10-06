/* 
도전 과제 조건
1. Member, Dinner interface 만들고 타입 지정하기
2. organize 내부 로직 채우기
*/

interface Member {
    name: string;
    group: string;
}

interface Dinner {
    member: Member[];
    menu: string[];
    shuffle(array: any[]): any[];
    organize(array: Member[]): void;
}

const dinner: Dinner = {
    member: [
      {
        name: "권세훈",
        group: "ob",
      },{
        name: "백혜윤",
        group: "ob"
      },{
        name: "정정빈",
        group: "ob"
      },{
        name: "이용택",
        group: "yb"
      },{
        name: "장한빛",
        group: "yb"
      }
    ],

    menu : ["게살죽", "전복죽", "소고기 야채죽", "단호박죽", "김치낙지죽", "굶기"],

    shuffle(array) {
      array.sort(() => Math.random() - 0.5);
      return array;
    },

    organize(array) {
        this.shuffle(array);
        this.shuffle(this.menu);

        console.log(`결과 발표합니다!! ${array[0].name}, ${array[1].name} 두 분 ${this.menu[0]} 당첨입니다~`);
    },
  };
  
  dinner.organize(dinner.member);


