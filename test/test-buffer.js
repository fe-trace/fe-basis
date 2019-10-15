var intArray = new Int8Array(10);

for(var i=0,len=intArray.length; i<len; i++) {
    intArray[i] = Math.random(1) * 10;
}

console.log(intArray);
var res = intArray.slice(1, 4);

console.log(res);
console.log(intArray);


var buffer = Buffer.from(intArray);

buffer[0] = 11;

console.log(buffer);
console.log(intArray);

var data = Buffer.from(intArray.buffer);

data[0] = 9;
console.log(data);
console.log(intArray);