const pinGenerator = document.getElementById('pin-generator');
const randomInput = document.getElementById('random-input');
const typedInput = document.getElementById('typed-input');

pinGenerator.addEventListener('click', function getPin(){
    let randomNumber = Math.round(Math.random() * 10000);
    randomNumber = randomNumber + '';
    // console.log(typeof randomNumber);
    if(randomNumber.length == 4){
        randomInput.value = randomNumber;
        // console.log(randomInput.value)
    }
    else{
        return getPin();
        // console.log(randomNumber);
    }
    
})

document.getElementById('all-btn').addEventListener('click', function (event) {
    const number = event.target.innerText;
    
    if (isNaN(number)) {
        if (number == 'C') {
            typedInput.value = typedInput.value.slice(0, -1);
        }
        else if(number == 'DEL'){
            typedInput.value = '';
        }
    }
    else {
        const previousNumber = typedInput.value;
        typedInput.value = previousNumber + number;
    }
});
const submitButton = document.getElementById('submit-btn');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');
const emptyMessage = document.getElementById('empty-message');
submitButton.addEventListener('click', function(){
    if (typedInput.value == ''){
        errorMessage.style.display = 'none';
        successMessage.style.display = 'none';
        emptyMessage.style.display = 'block';
        emptyMessage.style.backgroundColor = 'orange';
        emptyMessage.style.color = 'black';
    }

    else if(randomInput.value == typedInput.value){
        // console.log('jj');
       successMessage.style.display = 'block';
       errorMessage.style.display = 'none';
       emptyMessage.style.display = 'none';
       successMessage.style.backgroundColor = 'green';
       
    }
    
    else {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
        emptyMessage.style.display = 'none';
        errorMessage.style.backgroundColor = 'red';
    }
})


