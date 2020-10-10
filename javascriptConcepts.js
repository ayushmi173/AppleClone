//https://www.developintelligence.com/blog/2020/01/15-blogs-every-javascript-developer-follow/

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
// 	setTimeout(() => clearInterval(intervalValue), 10000);
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


// var obj = {
// 	name: "Ayush"
// };

// let fun = function (a)  { 
// 	return this.name + a;
// };

// console.log(fun.apply(obj, [" mishra"]));
//console.log(fun.apply(obj, " mishra"));
// let bound = fun.bind(obj);
// console.log(bound(" Mishra"));

// const arr = [1, 2, 3, 4, 5, 6];
// 	const arr2= arr.slice(3,5);
// 	console.log(arr2);

// let s="dgfgwshjkhguwghjwf";
// console.log(s.slice(-3,-1));

// 	function sum(a,b,c,d,e,f){return a+b+c+d+e+f;}

// 	console.log(sum.apply(null,arr));

// const mypro = new Promise((resolve, reject) =>
// 	setTimeout(() => {
// 		return resolve("Ayush returned");
// 	}, 3000));
// const mysecond = new Promise((resolve, reject) =>
// 	setTimeout(() => {
// 		return resolve("second returned");
// 	}, 1000));


// (async function myfun()
// {
// 				let first= await mypro;
// 				let second	=await mysecond;
// 				 console.log(first +" " + second);

// })();



// let student = {
// 	name : "David Rayy",
// 	sclass : "VI",
// 	rollno : 12 };

// 	//let clone = Object.assign({}, student);
// 	let clone={};

// 	for(let i in student)
// 	{
// 			let z= student[i];
// 			clone.z=i;
// 	}
// 	console.log(clone);

// let arr= [5789,1,1,1,1,1,2,2,2,3,4,5,5,60,6,7,7,88,8,86756,4,45,45,45,45,46,57,6,7,86];
// arr.forEach((element,index)=> console.log(element + " "+ index));

// function convert(a) {
// 	a = a.toString();
// 	return [...a].map(i => parseInt(i));

// }
// console.log(convert(1234));

// console.log([...arr]);

// const arr= [[1,2,3,4,5,[6,7,[8,9,10,[11,2,3345,45],[4,[5,[76]]]]]]];
// const a= arr.flat(Infinity);
// 	console.log(a);

// const t= 343.43;
// console.log(Math.trunc(t));


// const set=new Set(a);
// const arrayt= Array.from(set);
// console.log(arrayt);

// const str= "ayush";
// const s= [...str];
// console.log(s);

// const map = new Map([[1, 2], [2, 4], [4, 8]]);
// console.log(map);
// let arr2= Array.from(map.values());
// let arr2= Array.from(map.keys());
// console.log(arr2);

//converts in array
// let str= {"1,2,440": "efg"};
// console.log(Array.of(str));

// let a= [1,2,3,4,5,6];

// console.log(a.slice(2,4));
// 	console.log(a.splice(-3,1));
// 	console.log(a);

//find a's length in str
// let str="gdfgagkjakkha";
// let length=0;
// function checker(e)
// {
// 		if (e==='a')
// 		{
// 			length++;
// 		}
// }
// 	let len = Array.from(str).map(checker);
// 	console.log(length);

// function checker(x)
// {

// 		console.log(x.toString().split("").reverse().join(""));
// }
// checker(3113);

//sort in alphabeticla order
// function checker(str){
// 	return str.split("").sort().join("");
// }
// console.log(checker('webmaster'));


// function checker(str) {
// 	let new_String="";
// 	let str2 = str.split("\\s+");
// 	str2.forEach(element => {
// 		let temp = element.substring(0,1).toUpperCase();
// 			let my_str= temp +element.substring(1)+" ";
// 			new_String+=my_str;
// 		});
// 	console.log(new_String.trim());
// }

// checker('the quick brown fox');

//check vowwl in string
// function vowelChecker(str)
// {
// 	let length=-0;
// 	let arr=['a','e','i','o','u'];
// 	for (let i=0;i<str.length;i++)
// 	{
// 		if (arr.includes(str.charAt(i)))
// 		{
// 			length++;
// 		}
// 	}
// 	console.log(length);
// }
// vowelChecker('The quick brown fox');


// let arr=[1,2,45,23,0,65,35455,3,4,5];
// // arr.sort((a, b) => a - b);

// // console.log(arr[1] +" "+ arr[arr.length-2]);
// console.log(arr.find(e=> e>64));


//get the first element which is single occurance
// const funChecker = function checker(str) {
// 	let map = new Map();
// 	let Key = "";
// 	let i = 0;

// 	//putting values inside d Map
// 	while (i != str.length) {
// 		if (!map.has(str.charAt(i))) {
// 			map.set(str.charAt(i), 1);
// 		} else {
// 			map.set(str.charAt(i), map.get(str.charAt(i)) + 1);
// 		}
// 		i++;
// 	}
// 	//grabbing the first unique value with this
// 	let length = 0;
// 	map.forEach((value, key) => {
// 		if (value == 1 && length == 0) {
// 			Key = key;
// 			length = 1;
// 		}
// 	});
// 	return Key;
// }

// console.log(funChecker('abacddbemc'));

//string into array
// let str= "ayushmishra";
// console.log(Object.assign([],str));

// function print(string){
//     setTimeout(
//       () => {
//         console.log(string)
//       }, 
//       Math.floor(Math.random() * 100) + 1
//     )
//   }

// function printAll()
// {
//     print("A" ,()=> 
//     {
//         print("B" , ()=>{
//             print("c",() =>{
//                 return "z";
//             })
//         })
//     })
// }

// printAll();

// function greeting(name,n="AYUSH") {
//     console.log(`Hello ${name}  ${n}, welcome to Scotch!`);
//   }
//   greeting("fhjfgj");


function checker()
{
return "My name is not ";
}
function myfun(name, xomo)
{
   
    console.log( xomo()+" "+name);
}
myfun("ayush", checker);