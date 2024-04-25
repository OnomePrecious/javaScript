function addOneToLastIndex(numbers) {
    if (numbers.length === 0) {
        return [1];
    } else {
        const result = numbers.slice();
        result[result.length - 1]++;
        return result;
    }
}
module.exports = addOneToLastIndex;
