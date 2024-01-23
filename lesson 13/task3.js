// "HeLLo WorlD" -> "hEllO wORLd"

function asciiOnlyToLowerCase(input) {
    var result = '';
    for (var i = 0; i < input.length; ++i) {
        var charCode = input.charCodeAt(i);
        if (charCode < 65 || charCode > 90) {
            result += input.substr(i, 1);
        } else if (charCode < 97 || charCode > 122) {
            result += input.substr(i, 1);
        } else {
            result += String.fromCharCode(charCode + 32);
        }
    }
    return result;
}

console.log(asciiOnlyToLowerCase("hello"));