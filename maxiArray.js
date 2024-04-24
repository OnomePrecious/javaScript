const numbers = [1, -5] 
function maxiArray(numbers) {
    let maximumNumber = 0;
    if(numbers.length == 2) {
        return numbers[0] * numbers[1];
    }
    for ( i = 0; i < numbers.length - 1; i++) {
        for (j = i + 1; j < numbers.length; j++) {

            if (numbers[i] * numbers[j] > maximumNumber) {
                maximumNumber = numbers[i] * numbers[j];
            }
        }
    }
}

    module.exports = maxiArray;





