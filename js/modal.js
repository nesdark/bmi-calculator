// Variables
const body = document.body;

const Modal = {
  open() {
    body.classList.add('modal-open');
  },
  close() {
    body.classList.remove('modal-open');
  },
};

export { Modal };
