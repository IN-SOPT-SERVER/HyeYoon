if(true){
    var x = "var";
}
console.log("x: ", x);

if(true){
    let y = "let";
    console.log("y: ", y);
}
//console.log("y: ", y); //-> error. y is not defined

//* var가 function scope 를 벗어났을 때!
function func() {
    if (true) {
      var test = "var";
      console.log("test: ", test);
    }
    console.log("test: ", test);
  }
  
  func();
  console.log("test: ", test);
  // -> error. test is not defined