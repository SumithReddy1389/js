const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        let isReady = [true, false][Math.floor(Math.random() * 2)]
        isReady ? resolve("This is reslved") : reject("This is rejcted")
    }, 2000)
});
console.log(pr.then(success => console.log({ success }))
    .catch(error => console.log({ error })));

    const getPr= async () =>{
        try{
            const p1= await pr
            console.log('p1:',p1)
        } catch (error){
            console.log('P1',error)
        }
    }
     getPr()
/*
pr.then((success=> myDisplayer(success)))
.catch(error => myDisplayer(error))
*/

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}


const getDog = async () => {
    const url = "https://dog.ceo/api/breeds/image/random"
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.message)
}
myDisplayer(getDog())


const id = document.getElementById("demo")
const dog = async () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(json => {
            id.innerHTML = `<img src='${json.message}' height=300 width=300/>`
        })
}
dog();