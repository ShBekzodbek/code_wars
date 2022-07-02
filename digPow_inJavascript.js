function digPow(n,p){
    let sum= n.toString().split('').map(e=>Number(e));
    let result=0;
    for (let i=0; i<sum.length;i++,p++){
        result+=Math.pow(sum[i],p);
    }
  if (result%n===0){
      return result/n;
  }
  else return -1;
}

console.log(digPow(694,2));