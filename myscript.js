const myArr = [1,2,3,4,5,6];
const newArr = myArr.flatmap((x)=>  x*2);
document.getElementById("demo").innerHTML = newArr;