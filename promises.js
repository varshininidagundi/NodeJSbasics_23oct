let promise = new Promise(function(resolve, reject){
    //alert("hii")
    resolve(78)
})

console.log("hello 1");
setTimeout(function (){
    console.log("hello 2");
},2000)
console.log("hello 3");
console.log(promise)
//resolve -- when job is done successfully 
//reject -- if job is fails
// a promise is a promise of code execution , the code either fails or execute it will notified.
/*syntax for promise
let object_name = new Promise (function(resolve, reject){
    //execution
})
*/