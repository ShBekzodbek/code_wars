function digPow(n, p) {
    let sum = [];
    if (n > 0) {
        while (n !== 0) {
            let i = 0;
            sum.push(n % 10);
            n = Math.floor(n/10) ;
            i++;
        }
    }

    let limit = sum.length;
    let result = 0;
    for (let a = 0; a <limit; p--, a++) {
        result += Number(sum[a]) ** p;
    }

     if (result>n &&Math.floor(result/n)===0){
        return result/sum;
    }
     if (result<n&&Math.floor(n%result)===0) {
         return n / result;
     }
    else{
        return -1;
    }

}

console.log(digPow(89,1));


