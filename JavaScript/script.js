document.write("<p><b><big>課題</big></b></p>");

document.write(
  "<p>1.変数の中にtrueまたは、falseが代入された時の処理を作ってください。</p>"
);

let num = 10 > 0 ? "true" : "false";

console.log(num);

document.write(
  "<p>2.代入された変数の中が5より大きい時にtrueの処理と、5より小さい時にfalseの処理を作ってください。</p>"
);

let numA = 10;

let resultA = numA > 5 ? "true" : "false";

console.log(resultA);

document.write(
  "<p>3.代入された変数の中が5より小さい時にtrueの処理と、5より大きい時にfalseの処理を作ってください。</p>"
);
let numB = 13;

let resultB = numB < 5 ? "true" : "false";

console.log(resultB);

document.write(
  "<p>4.代入された変数の中が10以上の時にtrueの処理と、10以下の時にfalseの処理を作ってください。</p>"
);
let numC = 20;

let resultC = numC >= 10 ? "true" : "false";

console.log(resultC);

document.write(
  "<p>5.代入された変数の中に値が存在する場合はtrue、存在しない場合はfalseの処理にしてください。</p>"
);

let n = null;

let result = n ? "true" : "false";

console.log(result);


