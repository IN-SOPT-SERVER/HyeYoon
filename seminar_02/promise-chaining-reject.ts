// promise-chaining-reject.ts

Promise.resolve(true)
  .then((response) => {
    throw new Error("비동기 처리 중 에러 발생!");   // 에러를 던져줘
  })
  .then((response) => {
    console.log(response);
    return Promise.resolve(true);
  })
  .catch((error) => {   // 그럼 일단 실패한 놈이니까 여기로 오겠지
    console.log(error.message);
  });