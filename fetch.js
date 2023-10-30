//fetch google home page
//fetch pictures from server
//run rest of the script

let p1= new Promise((resolve, reject)=>{
    console.log("pending");
    setTimeout(()=>{
        console.log('this a promise, and it is successfull');
        resolve(true)
    },5000)
})
//console.log('hello')
let p2= new Promise((resolve, reject)=>{
    console.log("pending");
    setTimeout(()=>{
        console.log('i am promise and I am rejected:(');
        reject(new Error("error message"))
    },5000)
})
//to get value we use this
p1.then((value)=>{
    console.log(value)
})
//to catch the error.
p2.catch((error)=>{
    console.log("some error has occured in p2")
})