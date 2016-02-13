function processData(input) {
    var parse_fun = function (s) {
        return parseInt(s, 10);
    };

    var lines = input.split('\n');
    var T = parse_fun(lines.shift());

    var data = lines.splice(0, T).map(parse_fun);
    for (var i = 0; i < data.length; i++) {
        var value = 1;
        for (var j = 0; j < data[i]; j++) {
            if (j % 2 == 0)
                value *= 2;
            else value += 1;
        }
        process.stdout.write(value + '\n');
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});
process.stdin.on("end", function () {
    processData(_input);
});
