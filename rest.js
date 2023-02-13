// let[a,b, ...rest]=[1,2,3,4,5.6];
// console.log(a);
// console.log(rest);

let{fname, ...rest}={
    fname:'sumith',
    lname:'reddy',
    age:25,
    city:'hyderabad'
}
console.log(fname);
console.log(rest);

let aname='sumith';
console.log(`Hello ${aname}!!!`);
