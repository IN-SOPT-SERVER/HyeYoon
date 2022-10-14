// 아침에 힘겹게 일어나는 여러분을 표현한 함수
const me = (callback: () => void, time: number) => {
    setTimeout(callback, time);
};

//* 기상
const wakeUp = (): Promise<string> => { // 함수의 타입 지정 promise
    return new Promise((resolve, reject) => {
      me(() => {    // 콜백 함수
        console.log("[현재] 일어남");
        resolve("일어남"); 
      }, 1000);
    });
  };
  
  //* 화장실 감
  const goBathRoom = (now: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      me(() => {
        console.log("[현재] 화장실로 이동함");
        resolve(`${now} -> 화장실로 이동함`);   //now: 이전에 한 행동
      }, 1000);
    });
  };
  
  //* 칫솔과 치약을 준비함
  const ready = (now: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      me(() => {
        console.log("[현재] 칫솔과 치약을 준비함");
        resolve(`${now} -> 칫솔과 치약을 준비함`);
      }, 1000);
    });
  };
  
  //* 양치함
  const startChikaChika = (now: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      me(() => {
        console.log("[현재] 양치함");
        resolve(`${now} -> 양치함`);
      }, 1000);
    });
  };
  
  //* 나 자신에게 칭찬함
  const goodJob = (now: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      me(() => {
        console.log("[현재] 나 자신에게 칭찬중");
        resolve(`${now} -> 칭찬중`);
      }, 1000);
    });
  };
  
  // 체이닝
  wakeUp()  //resolve가 뱉는 string을 now라는 이름으로 받아옴.
    .then((now) => goBathRoom(now))
    .then((now) => ready(now))
    .then((now) => startChikaChika(now))
    .then((now) => goodJob(now))
    .then((now) => console.log(`\n${now}`));
    // now로 받고 받고 받아서 쌓여. 
    // resolve된 데이터들이 then으로 쭉쭉 넘어간 거 중요!!