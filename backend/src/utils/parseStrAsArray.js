module.exports = function parseStrAsArray(arr) {
    return arr.split(',').map(el => el.trim());
}