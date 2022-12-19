import { Modal } from './modal.js';
import { ErrorBar, showTheErrorMessage } from './errorBar.js';
import { isNotANumber, calculateBMI } from './utils.js';
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
const form = document.querySelector('form');
const buttonSend = document.querySelector('#calculateBMI');
const buttonCloseModal = document.querySelector('.close');

const weightElement = document.querySelector('#weight');
const heightElement = document.querySelector('#height');

function handleUpdatedInput() {
  ErrorBar.close();
}

function handleCalculateIsClicked() {
  const weight = Number(document.querySelector('#weight').value);
  const height = Number(document.querySelector('#height').value);

  const weightOrHeightIsNotANumber =
    isNotANumber(weight) || isNotANumber(height);

  if (weightOrHeightIsNotANumber) {
    showTheErrorMessage();
    return;
  }

  ErrorBar.close();

  const bmi = calculateBMI(weight, height);

  showTheBMI(bmi);
}

form.onsubmit = function (event) {
  event.preventDefault();
};

function showTheBMI(bmi) {
  const bmiMessage = document.querySelector('#bmi-message');

  bmiMessage.textContent = `Your BMI is ${bmi}`;

  Modal.open();
}

// Events
weightElement.addEventListener('input', handleUpdatedInput);
heightElement.addEventListener('input', handleUpdatedInput);

buttonSend.addEventListener('click', handleCalculateIsClicked);

buttonCloseModal.addEventListener('click', () => Modal.close());

document.addEventListener('keydown', (event) => {
  if (event.key == 'Escape') {
    Modal.close();
  }
});
