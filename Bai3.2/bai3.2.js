// Write a program that asks users enter a number and then calculates factorial of n: (1 * 2 * 3 *... *n)
var n=prompt("Nhap vao mot so ban thích =)):");// nhập số
var p=1;// tích 
for(var i=1;i<=n;i++){
    p=p*i;
}
console.log(p);