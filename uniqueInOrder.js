function uniqueInOrder(string1){
 let splited=  string1.split('');
 let empty=[];
for (let key of splited){
  if (splited.includes(key)){
      splited.slice(splited.indexOf(key),1);
  }
}
return splited;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))