const errorBar = document.querySelector('#error-bar');

const ErrorBar = {
  open() {
    errorBar.classList.add('active');
    errorBar.classList.remove('inactive');
  },
  close() {
    errorBar.classList.remove('active');
    errorBar.classList.add('inactive');
  },
};

function showTheErrorMessage() {
  ErrorBar.open();

  setTimeout(() => ErrorBar.close(), 3000);
}

export { ErrorBar, showTheErrorMessage };
