/*let a1=[1,2,3,4,5,6,7,8,9,0];
let a2=new Array(11,22,33,44,55,66,77,88,99,100);

console.log(a1);
console.log(a2);

console.log(a1[2]);
console.log(a2[5]);

for(var i=0;i<a1.length;i++){
    console.log(a1[[i]]+" and "+ a2[i]);
}

a1.push(111,222,333,444);
console.log(a1);

for(var i=0;i<a1.length;i++){
    console.log(a1[[i]]+" and "+ a2[i]);
}

a2.unshift(1,2,3,4,5);

for(var i=0;i<a1.length;i++){
    console.log(a1[[i]]+" and "+ a2[i]);
}

a1.splice(4,2,'aaa','bbbb');
console.log(a1);

a1.splice(0,15);
console.log(a1);

a2.splice(0,15);
console.log(a2); 

*/


//Selecting an random eement from an array
let randEle=(array1)=>{
    let i= Math.floor(Math.random()*array1.length-1);
    console.log(i);
    console.log("Random element form array:",array1[i]);
 }
 randEle([1,4,22,3,6,8,9,47,79]);


//every()
let a1=[11,30,46,10,25,100,101]
console.log("Finding the element:",a1.find((ele) => ele>11));
let r1=a1.every((ele)=> ele <100);
console.log("Result of every:",r1);

//some()
let r2=a1.some((ele) => ele>100);
console.log("Result of some:", r2);

//filter()
let r3=a1.filter((ele)=> ele  >30);
console.log("Result of filter:",r3);

//map()

let r4=a1.map((ele)=> ele*10);
console.log("Result of Map:", r4);

//sort
let r5=[1,6,5,4,8,2].sort();
console.log("Result of Sort1:",r5);

//reduce
let r0=[9,5,3,1,4,5,6]
let re=r0.reduce((a,b)=>{
    return a*b;
})
console.log("Result of reduce1:" ,re);

let r6=[1,2];
let r7=[3,4,5];
console.log("The concatted array:",r7=r6.concat(r7));

console.log("The Reversed array:" ,r7.reverse());
// Every methods for object:
const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names

/* let temp1=[];
for(let j=0;j<characters.length;j++){
temp1.push(characters[j].name);
}
console.log("Names array:",temp1); */
console.log("Result of map for objects q1:", characters.map((ele)=>ele.name));
//2. Get array of all heights
console.log("Result of map for objects q2:", characters.map((ele)=>ele.height));
//3. Get array of objects with just name and height properties
console.log("Result of map for objects q3:", characters.map((ele)=>({Namef: ele.name, heightf:ele.height })));
//4. Get array of all first names
console.log("Result of map for objects q4:", characters.map((ele)=>ele.name));

//***REDUCE***
//1. Get total mass of all characters
console.log("Result of REDUCE for objects q1:", characters.reduce((c,d)=> c+d.mass,0));
//2. Get total height of all characters
console.log("Result of REDUCE for objects q2:", characters.reduce((c,d)=>c+d.height,0));
//3. Get total number of characters by eye color
console.log("Result of REDUCE for objects q3:", characters.map((ele)=>ele.name));
//4. Get total number of characters in all the character names
console.log("Result of REDUCE for objects q4:", characters.map((ele)=>ele.name));


//***FILTER***
//1. Get characters with mass greater than 100
console.log("Result of filter for objects q1:", characters.filter((ele)=>ele.mass>100));
//2. Get characters with height less than 200
console.log("Result of filter for objects q2:", characters.filter((ele)=>ele.height<200));
//3. Get all male characters
console.log("Result of filter for objects q3:", characters.filter((ele)=>ele.gender==='male'));
//4. Get all female characters
console.log("Result of filter for objects q4:", characters.filter((ele)=>ele.gender==='female'));


//***SORT***
//1. Sort by mass
// let sr1= characters.sort((a,b)=>{ return a.height-b.height})
console.log("Result of Sort for objects q1:",characters.sort((a,b)=>{ return a.mass-b.mass}));
//2. Sort by height
console.log("Result of Sort for objects q2:",characters.sort((a,b)=>{ return a.height-b.height}));
//3. Sort by name
console.log("Result of Sort for objects q3:",characters.sort((a,b)=>{
    if(a.name<b.name) return -1;
    return 1;
}));
//4. Sort by gender
console.log("Result of Sort for objects q4:",characters.sort((a,b)=>{
    if(a.gender==='female') return -1;
    return 1;}));


//***EVERY***
//1. Does every character have blue eyes?
let re1=characters.every((ele)=> ele.eye_color==='blue');
console.log(re1);
//2. Does every character have mass more than 40?
let re2=characters.every((ele)=> ele.mass>40);
console.log(re2);
//3. Is every character shorter than 200?
let re3 = characters.every((ele)=> ele.height<200);
console.log(re3);
//4. Is every character male?
let re4=characters.every((ele)=> ele.gender==='male');
console.log(re4);


//***SOME***
//1. Is there at least one male character?
console.log('Result of Some for Objects q1:',characters.some((ele)=> ele.gender==='male'));
//2. Is there at least one character with blue eyes?
console.log("Result of some for objects q2:", characters.some((ele)=>ele.eye_color==='blue'));
//3. Is there at least one character taller than 210?
console.log("Result of some for objects q3:", characters.some((ele)=>ele.height>210));
//4. Is there at least one character that has mass less than 50?
console.log("Result of some for objects q4:", characters.some((ele)=>ele.mass<50));


