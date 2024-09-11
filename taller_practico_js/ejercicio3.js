let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filtrarYMultiplicarPares(arr) {
    
    let num2 = arr.filter(function(num) {
        return num % 2 === 0;
    });

    let numpar = num2.map(function(nume) {
        return nume * 2;
    });

    
    return numpar;
}

console.log(filtrarYMultiplicarPares(numbers));
