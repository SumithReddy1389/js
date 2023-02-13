/*// program to shuffle the deck of cards

// declare card elements
const suits = ["Spades", "Diamonds", "Club", "Heart"];
const values = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];

// empty array to contain cards
let deck = [];
// create a deck of cards
for(let i=0;i<suits.length;i++){
    for(let x=0;x<values.length;x++){
        let card={Value:values[x], Suit:suits[i]};
        deck.push(card);
    }
}
console.log(`Size of Deck ${deck.length} cards`);
console.log(deck);
// shuffle the cards
for(let i=deck.length-1;i>0;i--){
    let j=Math.floor(Math.random() * i);
    let temp=deck[i];
    deck[i]=deck[j];
    deck[j]=temp;
}

console.log('The first five cards are:');
console.log('Shufled deck is',deck);

// display 5 results
for (let i = 0; i < 5; i++) {
    console.log(`${deck[i].Value} of ${deck[i].Suit}`)
}*/

/*// program to check if the string is palindrome or not

function checkPalindrome(string) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// take input


// call the function
const value = checkPalindrome("hello");

console.log(value);

let f={
    'n':'s'
}
let a;
f['a']='u';
console.log(f);

const fr=(p)=>{
let f={}
    for(let  i of p){
        if(i in f){
            f[i]=+1;
        } else{
            f[i]=1;
        }
    }
    return f;
}

console.log(fr('sumithsumithsumith'))
*/

let a1=[1,2,3,4,5]
let a2=[];
let r4=a1.map((ele)=> {
    if(ele > 3){
        ele+99;
        console.log(ele);
        a2.push(ele);
    } else{
        ele=ele*5;
        console.log(ele);
        a2.push(ele);

    }
});
console.log("Result of Map:", r4);
console.log(a2);