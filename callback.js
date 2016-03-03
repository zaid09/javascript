function myFilter(my_array, callback){
    //Enter your code here
    var arr = []; 
    for(var index in my_array)
    { 
        if(my_array[index] %2 == 0) 
            arr.push(callback(my_array[index])); 
    } 
    return arr; 
}
    function processData(inputArray) { 
        console.log(myFilter(inputArray, (x) => ((x%2==0) ? x : -1) )); 
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input.split(' ').map(num => Number(num)));
});

