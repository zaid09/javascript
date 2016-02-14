function processData(input) {
    //Enter your code here
      var rows = input.split('\n');
    var cash = rows[0].split(' ').map(Number)[1];
    var arr = rows[1].split(' ').map(Number);
    arr = arr.sort(function(a, b){return a-b}); 
    var numofToys = 0;
    while(cash>=0) {
        cash -= arr[numofToys];
        numofToys++;
    }
    
    console.log(numofToys-1);
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
