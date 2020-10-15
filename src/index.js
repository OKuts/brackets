module.exports = function check(str, bracketsConfig) {
    let arr = bracketsConfig.map(el => el.join(''));
    let flag = true;
    while (flag) {
        flag = false;
        arr.forEach((el, i) => {
            if (str.indexOf(el) !== -1) {
                str = str.replace(el, '');
                flag = true;
            }
        })
    }
    return !str;
}
