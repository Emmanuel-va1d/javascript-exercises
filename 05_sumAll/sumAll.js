const sumAll = function(x, y) {
    let total = 0;
    if (x > y) {
        y = x;
        x = 1;
    } else if (x < 0 || y < 0 || typeof x != "number" || typeof y != "number")
        return "ERROR";
    for (let i = x; i <= y; i++)
        total += i;
    return total;
};

// Do not edit below this line
module.exports = sumAll;
