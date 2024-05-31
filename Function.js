// function showMessage(){
//   return("hello")
// }

// console.log("showMassage");

// above Wrong code ================================================>>

// function sqaure(number){
//   return number * number;
// }
// console.log(sqaure(4))

// =============================================>>

// let multiply = 8 * 8;

// console.log(multiply)

// ===========================================>>>

// function add() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }
// console.log(add(1,2,))
// console.log(add(2,3))

// ===========================================>>

// showMe();

// function showMe(){
//   console.log("hoting fun")
// };

// ============================================>>

// function showMe(){

//   console.log('hosting fun')
// }

// showMe();

// =========================================>>

// Type OF Function

// 1. Name function
// 2. anonymous function
// 3. arrow function
// 4. immidiately invoked function (iife)
// 5. higher order function
// 6. constructor function 

// ======================================>>
// 1. Name function

// function myFunction(){
//   console.log("codebust")
// }

// myFunction()

// ======================================>>
// 2. anonymous function

// let greet = function(name){
//   console.log(`hello ${name}`)
// };

// greet('sadaf');

// ====================================>>
// 3. Arrowfun

// let greeting = () => {
//   console.log('hello')
// }

// greeting();

// ======================================>>
// 4.iife

// (function (){
//   let str = "good Morning";
//   console.log(str)
// }  )

// ()
// =======================================>>
// 5. higher order function

// let arr=[10,20,30,40]

// let newArr = arr.map((el)=> el + 10);

// console.log(newArr)

// ==========================================>>
// 6. constructor function 

// function Person (name, place){
//   this.name = name;
//   this.place = place;
// }

// let user1  = new Person('code bust', 'india');

// console.log(`hello boss ${user1.name}, and i am from ${user1.place}`)

// ===========================================>>


// function addTwoNumber(num1, num2){
//   console.log(num1 * num2)
// }
// addTwoNumber(4,4)


// ===========================================>>


// function  logInUser(user){
//   return `${user} is login`
// }
// console.log(logInUser('Sandesh'))

//  // ===========================================>>

// function user(param){ //declear function with parametre
//   console.log(param)
// } 

// user("sadik")  // passing argument 

// ===========================================>>

// const printMe = function(){
//   console.log('print')
// }
// const printMeAgain = function(){
//   console.log('print')
// }
// printMe()
// printMeAgain()
// ===========================================>>

 // function declaration
// function add1(a,b){

//   console.log(a+b)
// }

// add1(2,3)

// ====================================>>

// function expression
// const add2 = function(a,b){

//   console.log(a+b)
// }

// add2(4,5)

// ====================================>>

// arrow Function

// let add3 = (a , b) =>  a + b;

//     console.log(add(3,4))


// let add4 = (b, c) => b + c;

// console.log(add(5,5))

// ======================================>>

// const greeter = (a, b) => {
//   if(a = b)
//   return "a is greter";
// else 
//   return "b is greter";
// }

// console.log(greeter(3, 4))

// ===================================>>


// (spread orearator)


// let colors = ['red','yellow'];

// let colors2 = [...colors,'green','orange','blue']

// console.log(colors2)

// ========================================>>


// let colors3 = ['white', 'black']

// let newColor = [...colors3];

// console.log(newColor)

// ===================================>>

// var show = value =>{
//  return value /2
// }
// console.log( show(100));

// =================================>>

// let numbers =[2,4,6,8,10]

// const haveVal = numbers.map(x => x/2)

// console.log(haveVal)

// ====================================>>

// const words = ['spary','limit','world', 'distance', 'veryusefull']

// const longWord =  words.filter(word => word.length > 6)

// console.log(longWord)

// ==========================================>>

// let product = [
//   {name: 'iphone', price: 900},
//   {name: 'sasung', price: 600},
//   {name: 'sony', price: 750}
// ];

// console.log('soretd by name:');
// // product.sort(compareBy('name'));
// console.table(product);

// ======================================>>


// let show = () => console.log('anonymous fun');

// let add = (a , b) => a + b;

// console.log(add(3, 4))
// ============================================>>

// recursive Function

// function countDown (fromNumber){
//   console.log(fromNumber)
  
//   let nextNum = fromNumber -1;

//   if(nextNum > 0){
//     countDown(nextNum);
//   }
// }

// countDown(4);

// =========================================>>


// class bike extends car {

// }
// let newBike = new Bike("Black", 2023);
// console.log(newBike)

// ===================================>>

// let Car = function(color , model){
//   this.color= color;
//   this.model= model; 

// }

// let instanceOfCar = new Car("blue", 3200);
// let instance = new Car("yellow", 2000);
// console.log(instanceOfCar, instance)
// ===================================>>

//  const numbers =[1,1,2,2,3,4];

//  const doubleNumbers = numbers.map(function(number){
//   return number *2;
//  })

//  console.log(doubleNumbers)

// =====================================>>

// const numbers2 = [1,2,3,4,5,6];

// const sqaureNumbers = numbers2.map((number => number **2));

// console.log(sqaureNumbers)

// ======================================>>

// function declaration

// function greet(name){
//   console.log(`hello, ${name}!`)
// }

// greet("kaka power")

// ======================================>>
// named fucntion

// const greet = function sayHello(name){
//   console.log(`hello, ${name}`)
// }

// greet("allis")

// ======================================>>


// const person = {
//   address : {
//     coords : {
//       lat: 24.464646,
//       lgn: -23.68863,
//     },
//   },
// },

// x = person.address.coords.lat.lgn

// console.log(x)

// ====================================>>

// const obj1 = {a:1, b:2}
// const obj2 = {c:3, d:4}

// const obj3 = {...obj1, ...obj2}

// console.log(obj3)

// ======================================>>


// // rest parameter

// function collecthings(x, ...y){
//     console.log(x)
//     console.log(y)
// }

// collecthings(1,2,3,4,5,6,67,8,99)

// ======================================>>

//// arrow Fucntion

// const add = (a,b) => {
//   return a + b ;
// }
// console.log(add(2,4))


// =========================================>>

// // clouser

// function outer(){
//   console.log('outer')
//     function inner(){
//       console.log('inner')
//     }
//     inner()
// }
// outer()
// =====================================>>

    // function doSome(){
    //   x =10;
    //   y= 20;
    //   z= 30;

    //   // console.log(x,y,z)
    // }

    // // doSome()
    // console.log(x,y,z)
    // doSome()

    // ====================================>>

      //  // function Scope
    // let x= 10;
    // const y= 20;
    // var z= 30;

    // function doSome(){
    // console.log(x,y,z)
    // }

    // doSome()

    // =========================================>>

    // what is clouser 
  // the outer fun cannot access any variable inside inner fun however inner fun can access any varibale and the argumnet of outer function. this is called clouser


// ======================================>>
//  callback fun
// callback function passed as an argument to another function
// callback function can run after another function has finished 

  // function Sumcalculator(a, b, callback){
  //   let sum = a + b;
  //   callback(sum);
  // }

  // Sumcalculator(3,4, (sum) => {
  //   console.log(sum);         //ans
  // }) 

  // ========================================>>

  // function greet(){
  //   console.log('hello great stack')
  // }
  // greet();

  // =====================================>>
  // parameter agruments

  // function greet(fristname,lastname){
  //   console.log("hello "+ fristname + " "+ lastname)
  // }

  // greet("prasad", "gade")

  // =========================================>>
  
  // default PARAMETRER
  // function sum(x,y) { 
  //     console.log(x+y)
  // }

  // sum(10,20)
  // sum(10) 
  // sum (10,20,3)

  // ===========================================>>

  // return function

//   function add(a ,b) {
//       return a+b;
//   }
// let res = add(5,10)

// console.log(res)

// ==========================================>>

// function fn1(x){
//     function fn2(y){
//         return  x * y;
//   }
//   return fn2
// }
// let res = fn1(3)

// console.log(res)

// console.log(res(2))

// ============================================>>

// callback function

// function display(result){
//   console.log(result)
// }

// function add(num1, num2,mycallback){
//   let sum = num1 + num2;
//   mycallback(sum)
// }

// add(3,4,display)

// =======================================>>
// anonymous function

// let sum = function (x, y) {
//   return x + y;
// }
// sum (10,20)
// console.log(sum(10,20))

// ===========================================>>

// IFFEE function

// (
// function () {
//     console.log('welcome greatstack')
// }
// )();

// ==========================================>>
// setTimeout

// setTimeout (
//   function(){
//     console.log('hello greatstack')
// },2000)

// ==========================================>>

// recursive function

// function myFunction(){
//   if(condition){
//     myFunction()
//   }
//   else{
//     //stop calling
//   }
// }
// myFunction();

// ==========================================>>
    // recursive function

// function countDown(num1) {
//   console.log(num1)
//   num1--;
//   if(num1 >= 0){
//     countDown(num1)
//   }
// }
// countDown(10)

// =========================================>>

// object 

// const Object_name ={
//   key1: value,
//   key2: value,
// }

// ============================================>>

// Object letaral

// const person ={
//   fname : 'elon',
//   lname: 'musk',
//   age: 35,
//   address:{
//     street: "main road",
//     city: "NYK",
//     state: "MNC",
//     country: "USA",
//     pin: 412109
// }
// }
// person.fname= 'mr. elon'
// person.company = 'tesla'
// delete person.age;

// console.log(person.address);

// console.log("age" in person)
// for(let prop in person){
//   console.log(prop +":" +person[prop])
// }
// ==============================================>>

// new keyword

// const person = new Object();

// person.fname = 'elon';
// person.lname = 'musk';
// person.age = 35;

// const person = new Object({
//     fname : 'elon',
//     lname : 'musk',
//     age : 35,
// });

// console.log(person);

// =========================================>

    // const person = {
    //   fname : 'elon',
    //   lname: 'musk',
    //   getFullname: function(){
    //     return this.fname+ " " + this.lname
    //   }
    // }
  
    // console.log(person.getFullname())

    //   greet : function(){
    //     console.log('hello world')
    //   }
    // }
    // person.greet();

    // ======================================>>

  // js constrctutor function

//   function Person () {
//     this.fname = 'elon',
//     this.lname= 'musk'
//   }

// const per1 = new Person();
// const per2 = new Person();

// console.log(per1)
// console.log(per2)

// ================================>>

// callback function

// function display (res){
//   console.log('res')
// }

// function add(num1, num2,mycallback){
//   let sum = num1 + num2;
//   mycallback(sum)
// }

// add(1,4,display)

// ================================>>

// function fetchData(callback){
//   setTimeout(function(){
//     const data = 'some data';
//     callback(data)
//   },2000);
// }

// function processData(data){
//   console.log('processing data:',data)
// }

// fetchData(processData);
// console.log('after calling fetchData')

// ================================>>

// function add(a ,b){
//   return a + b;
// }
// let sum = add;

// function average (a, b, fn){
//   return fn(a, b) /2;
// }

// let result = average(10, 20, sum)

// console.log(result);

// ================================>>

// function compareBy(propertyName) {
//   return function (a, b) {
//     let x = a[propertyName],
//       y = b[propertyName];

//     if (x > y) {
//       return 1;
//     } else if (x < y) {
//       return -1;
//     } else {
//       return 0;
//     }
//   };
// }

// console.log()

// ================================>>

// natsed function
// function outside(x){
//   function inside(y){
//     return x + y;
//   }

//   return inside;
// }

// const fnInside = outside(2)

// console.log(fnInside(4)) //6

// ==============================>>

// function addSquare(a, b){
//   function square(x){
//     return x * x;
//     }

//     return square(a) + square(b);
// }

// console.log(addSquare(2, 4)) //4 + 16 = //20

// ==============================>>