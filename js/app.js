console.log("Hello world!");
let x = 10;
x = "hello";
let y= 20;
console.log(y+100);//120
console.log(y+x);// 20hello
console.log(x+y);// hello20
let z = `value of y = ${y} Finish.`;
console.log(z);
let t = true;
let n = null;

if(y > 10){

}else{

}

switch(y){
    case 10: console.log("A"); break;
    case 20: console.log("B"); break;
    case 30: console.log("C"); break;
}

function tinhTong(a,b){
    return a+b;
}
var z1 = tinhTong(5,10);
var k = tinhTong("hello",20);//hello20

setTimeout(function(){
    console.log(z1);
},1000);
var i=0;
setInterval(function(){ // ham callback
    console.log("hello "+i);
    i++;
},3000);// chạy vĩnh viễn
let arr = [];
arr[0] = 9393;
arr[1] = 28;
arr.push(1212);
arr.push("hello");
arr.push([1,2,3]);

let obj = {
    name: "Nguyen Trung Kien",
    age:17,
    address: "Hoang Mai,HN",
    family: {
        father: {
            name:" .  ",
            age: 40
        },
        mother: {
            name: "..",
            age: 40
        }
    },
    friends: [
        {
            name:"..",
            age:17
        }
    ]
};
console.log(obj.name);
console.log(obj.family.father.name);
console.log(obj.friends[0].name);