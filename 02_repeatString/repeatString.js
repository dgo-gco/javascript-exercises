function repeatString(text, number) {
    if (number > 0) {
        return text.repeat(number);
    } else if (number < 0) {
        return "ERROR";
    } return "";
};

const number = Math.floor(Math.random() * 1000);

repeatString('hey', number).match(/((hey))/g).length;


// Do not edit below this line
module.exports = repeatString;
