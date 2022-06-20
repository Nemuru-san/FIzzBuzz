const reloadBtn = document.getElementById("reloadFizzBuz");

reloadBtn.addEventListener('click', reload);

function reload() {
    location.reload();
}

function fizBuzz() {
    var fizzbuzzInput = document.getElementById("inputFizzBuzz").value;
    var number = parseInt(fizzbuzzInput);
    var output = document.getElementById("resultFizzBuzz").getElementsByTagName("tbody")[0];

    for (let i = 1; i <= number; i++) {


        if (i % 3 === 0 && i % 5 === 0) {

            output.insertRow().insertCell().innerHTML = 'FizzBuzz'

        } else if (i % 3 === 0) {

            output.insertRow().insertCell().innerHTML = 'Fizz'

        } else if (i % 5 === 0) {

            output.insertRow().insertCell().innerHTML = 'Buzz'

        } else {

            output.insertRow().insertCell().innerHTML = i
        }

    }

    // no looping

    // if (number % 3 === 0 && number % 5 === 0) {

    //     output.insertRow().insertCell().innerHTML = 'FizzBuzz'

    // } else if (number % 3 === 0) {

    //     output.insertRow().insertCell().innerHTML = 'Fizz'

    // } else if (number % 5 === 0) {

    //     output.insertRow().insertCell().innerHTML = 'Buzz'

    // } else {

    //     output.insertRow().insertCell().innerHTML = i
    // }

}