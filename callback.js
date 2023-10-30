function summ1(){
    let a=10;
    let b=20;
    sum =a+b;
    return sum;
}

function number(n1, n2, callback){
    let c =30;
    let sum = callback();
    total_sum=sum+c;
    console.log(total_sum);
}
add(5,7, summ1);