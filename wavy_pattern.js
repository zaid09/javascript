function processData(input) {
    //Enter your code here
    console.log(Array(15).join(Array(8).join("\u2571\u2572")+'\n'));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
