// console.time();
// console.log("Hello World Once again");
// console.log(5+6+78);
// console.log(5*8);
// console.log(16/8);
// console.log(2-2);
// console.log('Hello');
// console.log(2%2);`hello`
// console.log(`hello.....`);
// console.log(2%5);
// console.warn("error");
// const arr = [1,2,3,4];
// console.table(arr);
// console.timeEnd();

// var a = 10;
// a = 28;   // override;
// console.log(a);
// let b = 20;
// console.log(b);
// const c = 4;
// console.log(c);

// console.log('Sarvottam Kumar');
// let fname = "Sarvottam";
// let lname = "kumar";
// console.log(`${fname} ${lname}`);


//typeof
// let a = ' ';
// console.log(typeof a);

//operators: =
// const a = 2;
// const b = 3;
// console.log(a + b);
// const c = a + b;
// console.log(c);

// console.log( a - b);
// console.log( a * b);
// console.log( a / b);
// console.log( a % b);


// let a = NaN;
// console.log(typeof a);

// let a = '4';
// let b = '5';
// console.log(a+b);


//Conditions : --

//if
// const x = 3;

// if( x == 2 ){
//     console.log("true");
// }
// else{
//     console.log("false");
// }

//even number or odd

// let num = 345;
// if(num % 2 == 0) {
//     console.log(`${num} is an even Number.`);
// }
// else {
//     console.log(`${num} is an odd Number.`);
// }

//age calulator

// let age = 19;

// if(age < 18 ){
//     console.log("not allowed"); 
// }else{
//     console.log("allowed");
// }

// Grade Calculator 

// let mark =80;
// let Name = "Harsh";

// if(mark >= 90 && mark <= 100){
//     console.log(`${Name} Scored Grade A+` ); 
// }
// else if(mark >= 80 && mark < 90){
//     console.log(`${Name} Scored Grade A` ); 
// }
// else if(mark >= 70 && mark < 80){
//     console.log(`${Name} Scored Grade B+` ); 
// }
// else if(mark >= 60 && mark < 70){
//     console.log(`${Name} Scored Grade B` ); 
// }
// else{
//     console.log(`${Name} failed` ); 
// }

// // leap year

// let year = 1700;

// if(year % 4 == 0){
//     if(year % 100 != 0) {
//         console.log(`${year} is a leap year`);
//     }
//     else{
//         if(year % 400 == 0){
//             console.log(`${year} is a leap year`);
//         }
//         else{
//             console.log(`${year} is not a leap year`);
//         }
//     }
// }
// else{
//     console.log(`${year} is not a leap year`);
// }

//type coersion ------------------------------------------------------------
// == / ===

// const x = 1;
// const y = '1';

//==
// if( x == y){
    //     console.log( "hello"); 
    // }
    // else{
        //     console.log("hii")
        // }
        
        //===
        // if( x === y){
            //     console.log( "hello"); 
            // }
            // else{
                //     console.log("hii")
                // }
                
                // const x = "0";
                // const y = false;
                // if(x == y) console.log("equal");
                // else console.log("Not equal");


                // console.log( [] == []); empty array is not equal to empty arr;
                // this will convert left sided things int string then in binary so binary compare with leftside so thats why its give false;
                // this called wired behaviour of js

    //             console.log([] == []);
    //             console.log("" == "");
                
                
    // const x = 10;
    // const y = 12; 
    // const z = 14;
    
    // if(x == 10 && y == 12 && z == 14){
    //     console.log("Hello");
    // }

//type coersion ----------------------------------------------------------
                
     //----
    //  arr
    
    // let fruits = ["Mango","Apple", "Orange","Grapes"];
    // console.log(fruits);
    // console.table(fruits);
    // console.log(typeof (fruits[2]));
    // let arr = ["Sarvottam" , 3 , true , null , NaN,Symbol, undefined];
    // console.log(arr);

    //question

    // const arr1 = [1,4,9,16,25,36,49,64];
    // for(let i = 0 ; i<arr1.length; i++){
    //     console.log(Math.sqrt(arr1[i]));
    //     // console.log(arr1[i]*arr1[i]);

    // }

    //otp

    // let otp = Math.floor(Math.random() * 1000000) //4 zero for 6 digit opt
    // console.log(otp);

    

    // var arr = ["Apple" ,"Ball" , "cat","Dog"];

    // for(let i = 0 ; i<arr.length; i++){
        // console.log(arr[i]);
        
    // }
    // for(let i =arr.length-1; i>=0; i--){
    //     console.log(arr[i]);
        
    // }

    //traditional for loop
    // let arr1 = [10,20,30,40,50,60,70,80,90,100];

    // for(let i = 0; i<arr1.length; i++){
        
    //     console.log(arr1[i]/5);
        
    // }

    //for in loop - gives index
    // for(let i in arr1){
    //     console.log(arr1[i]); 
    // }
    //for of loop - gives values direct
    
    // for(let i of arr1){
    //     console.log(i); 
    // }

    // let arr = [2,4,7,9,1,7,8];

    // for(let i = 0; i<arr.length; i++){
        
    //     console.log(`${i} : ${arr[i]}`);
    // }
// let obj = {id: 1, name : "Sarvottam" , age : 24};
// for(let i in obj){
//     console.log(obj[i]);
    
// }
    

// let arr = [3,2,1,5,7,5,78,5];
// arr.forEach( (a , i) => {
//     console.log(typeof (i) ,":" , typeof a);  
// })
    

//how to take input
// let a = Number(prompt('Enter a Number: '));
// let b = Number(prompt('Enter 2nd Number :'));
// console.log(a+b);


// console.log(true + true);  // output is 2

//----------------------------------
// const a = [1,2,3];
// const b = [1,2,3];
// if(a===b){
//     console.log("True");
// }else{
//     console.log("False");
// }
//answer is false;
// why -- because every Array & Object compare with its memory Allocation and we know that every memory allocation addres is diffrent

//------------------------

// const  str = "Bhopal";

// for(let i = 0 ; i<str.length; i++){
//     console.log(str.charAt(i));
    
// }
// for(let i of str){
//     console.log(i);
    
// }
// for(let i in str){
//     console.log(str.charAt(i));
    
// }

// str.array.forEach(element => {
//     console.log(element);
    
// });

// const str1 ="Bhopal";
// const str2 = "Bhopal"

// if(str1 != str2){
//     console.log(" ");   
// }else{
//     console.log("Equal");
    
// }


// String --------------

// let str = 'Sarvottam';

// console.log(str.at(0));

// console.log(str.toUpperCase());


//using for each loop

// let arr =[1,2,3,5,7,32,2];

// arr.forEach((a,i) =>{
//     console.log(i,":",a);
// })

// let a ="Bhopal";
// for(let i = 0; i<a.length; i++){
//     console.log(a[i]); 
// }

// let num = 45678;
// let res = num.toString();
// console.log(typeof res);
// console.log(typeof num);

// for(let i = 0; i<res.length; i++){
//     console.log(res[i]);  
// }
// for(let i = res.length-1; i>=0; i--){
//     console.log(res[i]);  
// }

// let a = true;

// if(!a == false){
//     console.log("hello");
    
// }else{
//     console.log("Bye");
// }

// let num = 234567;
// let num1 = num.toString();


// const data = Number('1234567');
// console.log(data);  //data type is number

// const data1 = String(45678);
// console.log(data1);  // data type is String

// const data2 = Number('456d78');
// console.log(data2);  // data type is number but value is NaN;

//-------------------------------
//Math method
// let otp = Math.floor(Math.random()*1000000);
// console.log(otp);


// let a = 5;
// let b= 5 ;
// let c = a+b;
// console.log(c);

// let d = 5;
// let e = 4;
// let f = d+e;
// console.log(f);

// let g = 8;
// let h = 7;
// let 