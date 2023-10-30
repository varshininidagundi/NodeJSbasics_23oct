//asyn / await -----special syntax that work with promises
//any function can be made asyn and await the promise inside this fun
// return in promise


/*async function example(){

let bangaloreweather = new Promise((resolve, reject)=>
{
    setTimeout(()=>{resolve('26 deg')},1000);
})
let delhiweather = new Promise((resolve, reject)=>
{
    setTimeout(()=>{resolve('26 deg')},4000);
})

let p11= awiat bangaloreweather

}
console.log('welcome to async')
example();*/

async function async() {

    let promise = new Promise((resolve, reject) => {
        console.log('pending');
        setTimeout(() => resolve("part1 executed successfully!"), 7000)
        });
  
    let result = await promise; // wait until the promise resolves (*)
    let promise2 = new Promise((resolve, reject) => {
        console.log('pending');
        setTimeout(() => resolve("part2 executed successfully!"), 2000)
        });
  
    let result2 = await promise;
    console.log(result); // "done!"
    console.log(result); // "done!"
  }
  
  async();
