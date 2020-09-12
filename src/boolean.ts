export {};
// ↑がないとグローバル変数とのコンフリクトが起こり、変数を定義できなくなる。それを回避するためのおまじない

let isFinished: boolean = true;
isFinished = false;
isFinished = 1;
console.log({ isFinished });
