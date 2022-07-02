function warnTheSheep(queue) {
    queue.reverse();
     const index = queue.indexOf(('wolf'));
     return queue[0]==='wolf'?'Pls go away and stop eating my sheep':`Oi! Sheep number ${index}! You are about to be eaten by a wolf!`
}
let ferma=["sheep", "sheep", "sheep", "wolf", "sheep"];
console.log(warnTheSheep(ferma));
