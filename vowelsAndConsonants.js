//print the vowels followed by the consonats from a given string
function vowelsAndConsonants(s) {
     var vowel_list = 'aeiouAEIOU';   
    for(var x = 0; x < s.length ; x++)  
    {  
    if (vowel_list.indexOf(s[x]) !== -1)  
    {  
      console.log(s[x]);
    }  
    
  }  
    var consonant_list = ' bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
    for(var x = 0; x <s.length ; x++)
    {
    if (consonant_list.indexOf(s[x]) !== -1)
    {
        console.log(s[x]);
    }
 
 }
}


process.stdin.resume();
process.stdin.setEncoding("ascii");

var input = "";

process.stdin.on("data", function (line) {
    input += line;
});

process.stdin.on("end", function () {
     vowelsAndConsonants(input);
});
