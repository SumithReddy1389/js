// const arr = [10, 9, 8, 7, 6];

// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
// }

// function sum(a,b){
//   return a+b;
// }
// // console.log();
// function ss(){
//    console.log(sum(1,2));
// }
// ss();
// for(;;) { 
//    console.log('This is an endless loop') 
// }


/*const letterCounter =()=>{
   const a ='asdfgh artyui dfgokvc r7okvcd';
   let sum=0;
   for (let l in a){
      console.log(`value at ${l} is ${a[l]}`);
      sum++;
   }
   for (let i of a){
      console.log(i);
   }
   console.log(sum);
   return {result:sum};
}
// console.log(letterCounter());
// letterCounter();

const max=(numbers)=>{
   let result=numbers[0];
   for(const n of numbers){
      if(n>result){
         result=n;
      }
   }
   return result;
}
// console.log(max([9,5,3,6,7,8,22]))

//frequency

const letterfrequency=(phrase)=>{
   // console.log(phrase)
   let frequency={}
   for(let le of phrase){
      //checking if letter exist in frequcnecy
      if(le in frequency){
         frequency[le]+=1
      } 
      //otherwise set the value to 1
      else {
         frequency[le]=1;
      }
   }
   return frequency;
}

// console.log(letterfrequency('haha'));

// Word Frequency
const wordFrequency =(pharse1)=>{
   let frequency={}
   //spliting the sentence
   let arr=pharse1.split(" ");
   for(let w of arr){
      if(w in frequency){
         frequency[w]+=1;
      }  
      else{
         frequency[w]=1;
      }
   }
   // return letterfrequency(arr);

   return frequency;
}

console.log(wordFrequency('sum of sum is ten sum is sum of'));
*/

// let randEle=(array1)=>{
//    let i= Math.floor(Math.random()*array1.length-1);
//    console.log(i);
//    console.log("Random element form array:",array1[i]);
// }
// randEle([1,4,22,3,6,8,9,47,79]);

import fetch from "node-fetch";
let access;
function getToken(){
   fetch("https://amica-stg-carrier.sureify.com/api/v2/titan/auth", {
      method:'GET',
      headers: {
         'Connection': 'Keep-alive',
         'Accept': "application/json",
         'Content-Type': "application/json",
         'User-Agent': 'PostmanRuntime/7.30.0',
         'organization_id': 'bf10d9acef16a378c744d4b258ef47bd',
         'organization_access_token': '5a03c2423c3b874874f90e05fd94c9a3',
         'Authorization': 'Basic YWRtaW46NyVkUkdyZVQ=',
      }
   })

   .then(response => response.json())
   // .then(response => console.log(response))
   .then(json => {
      console.log(json);
      console.log(json.access_token);
      console.log(`this is the expiration ${json.expires_on} `);
   })
   // .then(json=>{
   //    console.log(`this is the expiration ${json.expires_on} `);
   // })
   // .then(response => console.log(response.access_token))
   .catch(err => console.error(err));
   

}

getToken();