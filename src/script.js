/* 
  When clicks the button
  if all the inputs are empty
    show the message of error 
  if the input are filled by text
    show the message of error
  else 
    get the values of the inputs
    use a function to calculate the BMI
    open the modal
    show the BMI in the screen
    clean the inputs
*/
// Variables
const errorBarElement = document.querySelector('#error-bar');
const buttonSend = document.querySelector('#calculateBMI');
const buttonCloseModal = document.querySelector('.close');

// Functions
const preventReload = function (event) {
  event.preventDefault();
};

const checkIfExistsErrors = () => {
  const errorType = checkTheInputs();
  if (errorType == 'haveEmptyInput') {
    showError('The input values cannot be empty');
  } else if (errorType == 'haveInputDifferentThanNumber') {
    showError('Only numbers are allowed');
  } else {
    return 'itIsAllClean';
  }
};

const checkTheInputs = function () {
  const inputs = document.querySelectorAll('input');

  let typeOfError;

  inputs.forEach((input) => {
    input = Number(input.value);
    const inputIsEmpty = input == 0;
    const inputIsNotNumber = isNaN(input);

    if (inputIsEmpty) {
      typeOfError = 'haveEmptyInput';
    } else if (inputIsNotNumber) {
      typeOfError = 'haveInputDifferentThanNumber';
    }
  });
  typeOfError = typeOfError == undefined ? 'noError' : typeOfError;
  return typeOfError;
};

const showError = (messageOfError) => {
  const errorBarElement = document.querySelector('#error-bar');
  const messageElement = document.querySelector('#error-message');
  errorBarElement.classList.add('active');
  messageElement.textContent = messageOfError;

  setTimeout(() => {
    errorBarElement.classList.remove('active');
  }, 3000);
};

function toggleModal() {
  const root = document.querySelector('body');

  root.classList.toggle('modal-open');
}

function showTheBMI(bmi) {
  const bmiMessage = document.querySelector('#bmi-message');

  bmiMessage.textContent = `Your BMI is ${bmi}`;

  toggleModal();
}

const showTheModalWithTheBMI = () => {
  const weight = document.querySelector('#weight');
  const height = document.querySelector('#height');

  const bmi = calculateBMI(weight.value, height.value);

  showTheBMI(bmi);
};

const calculateBMI = function (weight, height) {
  const heightCentimetersToMeters = height / 100;

  const calculateBMI = weight / heightCentimetersToMeters ** 2;

  return calculateBMI.toFixed(2);
};

// Events
buttonSend.addEventListener('click', () => {
  if (checkIfExistsErrors() == 'itIsAllClean') {
    showTheModalWithTheBMI();
  }
});

document.querySelector('form').addEventListener('submit', preventReload);

buttonCloseModal.addEventListener('click', toggleModal);

document.addEventListener('keydown', (event) => {
  const body = document.body;
  if (event.key == 'Escape') {
    if (body.classList.contains('modal-open')) {
      toggleModal();
    }
  }
});
