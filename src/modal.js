const body = document.body;

export const Modal = {
  open() {
    body.classList.add('modal-open');
  },
  close() {
    body.classList.remove('modal-open');
  },
};
