// Author: Lwin Moe Aung
Array.prototype.even = function () {
    return this.filter(n => n % 2 === 0);
}
Array.prototype.odd = function () {
    return this.filter(n => n % 2 === 1);
};

console.log('start');
process.nextTick(() => { console.log([1, 2, 3, 4, 5, 6, 7, 8].even()); });
process.nextTick(() => { console.log([1, 2, 3, 4, 5, 6, 7, 8].odd()); });
console.log('end');