function processData(myArray) {
  myArray.sort(function(a, b){return a-b});
    var len = myArray.length;
    if(myArray[len-2]==myArray[len-1])
        console.log(myArray[len-3]);
    else console.log(myArray[len-2]);
}


// tail starts here
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input.split('\n')[1].split(' ').map(Number));
});

