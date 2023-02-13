let arr1=[1,2,3];
let arr2=[0,...arr1,4,5,6];
console.log(arr2);
let arr3=[...arr2];
console.log(arr3);

// spread operator with objects

let person={
    fname:'sumith',
    lname:'reddy',
    dob:'15/09/1998'
}
let personDetails={
    ...person,
    city:'Hyderabad',
    State:'Telangana',
    Phone:'9898787I89'
}
console.log(personDetails);


// Spread Operator with Function Calls
let x=function(a,b,c){
    sum=a+b+c;
    return sum;
}
let number=[1,2,3];

console.log(x(...number));
