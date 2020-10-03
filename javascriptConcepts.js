// //higher order function.. it is a function that return a fucntion or accept a function....

// const ask = (name) =>
// {
//       if("ayush"=== ( name))
//       {
//         return function (password)
//         {
//             console.log(`${name} is similar & ${password} is this`);
//         };
//       }
// };

// ask("ayush")("gfduja456$457@");
// // or 
// const temp =ask("ayush");
// temp("njjnj");

// const persons = [
//     { name: 'Peter', age: 16 },
//     { name: 'Mark', age: 18 },
//     { name: 'John', age: 27 },
//     { name: 'Jane', age: 14 },
//     { name: 'Tony', age: 24},
//   ];

//   let l_name,l_age=0,obj;
//   const p = persons.filter(person => 
//     {
//        if (person.age > l_age) 
//         {
//             l_age=person.age;
//             l_name=person.name;
//             obj=person;
//         }
//     });
//   console.log(l_name +" " +l_age    );


// //Immediately Invoked Function Expressions (IIFE)

// (function()
//     {
//             let x=10;
//             console.log(x);
//     })();

// //rest operator

// function numbers(a,b, ...c)
// {
//     console.log(a,b,...c);
// }
// numbers(1,2,3,4,5,6,7,8,9);

// //spread operator

// let arr1= [1,2,3,4,4,55,5,6,6,5,5,55,3453,34,34,34,34,343,5354,45,45,46,4];
// let arr2=[0,0,0,0];

// arr2=[...arr1, ...arr2];
// console.log(arr2);


// //destructring in array

// let arr=["ayush","Mishra"];
// let [firstname, Lastname] = arr;
// console.log(firstname + " "+ Lastname  );


// //destructing in object

// let car=
// {
//     Model: 'SUV',
//     color : 'Black',
//     Name : 'BMW',
//     Engine: 'Automatic',
//     functionality : function()
//     {
//         console.log("Quite good");
//     }
// }


// let {Model,color,Name,Engine}=car;

// console.log(Model +" is " +Engine);


// //promise 

// function delay(timeout)
// {
//     let promise= new Promise ((resolve,reject) =>
//     {       
//             setTimeout(() => {
//                resolve( console.log("Jai Baba ki"));
//             }, timeout);
//     });

//		promise.then(a => {
//             console.log("ayush");
//     }).catch(err =>
//         console.log(err)
//         );
// }
// delay(3000);




// let intervalValue = setInterval(currentStatus, 1000);
// let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
// 	"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// function currentStatus() {

// 	let d = new Date();
//     document.writeln(`${d.getFullYear()}-${monthNames[d.getMonth()]}-${d.getDate()} ${d.toLocaleTimeString()}<br>`);
//     console.log(`${d.getFullYear()}-${monthNames[d.getMonth()]}-${d.getDate()} ${d.toLocaleTimeString()}`);
// }

// (function () {
// 	setTimeout(() => clearInterval(intervalValue), 5000);
// })();

// let arr = [1,2,3,4,5,6,7,8,9,10];

// function one(arr)
// {
// 	return arr.filter((e) => e % 2!=0 ).map(e=> ({[e] : e*3}));
// }
// console.log(one(arr));

// let a = ["1,2,5,6,7", "2,5,7,8,15"];
// let i = 0,
// 	j = 0;
// let str = "";

// function checker(a) {

// 	let str1 = a[0].split(",");
// 	let str2 = a[1].split(",");
// 	while (i != str1.length) {
// 		if (str1[i] < str2[j]) {
// 			i++;
// 		} else if (str1[i] > str2[j]) {
// 			j++;
// 		} else {
// 			str += str1[i];
// 			str += ",";
// 			i++;
// 			j++;
// 		}
// 		if (i == str1.length || j == str2.length) {
// 			str = str.substring(0, str.length - 1);
// 			return str;
// 		}
// 	}
// }
// console.log(checker(a));

 