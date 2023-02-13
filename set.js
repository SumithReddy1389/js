
// var set1 = new Set(["sumit","sumit","amit","anil","anish"]);
 
// var set2 = new Set("fooooooood");
 
// var set3 = new Set([10, 20, 30, 30, 40, 40]);
 
var s4 = new Set();

s4.add(12);
s4.add("sumith");
s4.add(true);
s4.add(1);
console.log("set 4 is:",s4);
s4.delete(1);
console.log("set 4 is:",s4);
console.log("The size of the set is:",s4.size);
//s4.clear()-- clears the entire set
// entries() – It returns an iterator object which contains an array having the entries of the set, in the insertion order. 
console.log(s4.entries());
console.log("checking for a element:",s4.has(12));
// values() – It returns all the values from the Set in the same insertion order. 
console.log(s4.values());
// keys() – It also returns all the values from the Set in the insertion order. 
console.log(s4.keys());

let fora=s4.forEach(()=>{
    
})