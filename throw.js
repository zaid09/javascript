function processData(my_height) {
    //Enter your code here
    var h = my_height;
    try {
    if(h < 4){
    throw new Error("tinyHeightError");
    }
    else if (h > 10){
    throw new Error("hugeHeightError");
    }
    else if (isNaN(h)){
    throw new Error("notANumberError");
    }
    console.log(h);
    } catch (err) { console.log(err.message); }
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

