const modalBtn = document.querySelector('.header-contact__btn')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.modal-close')

modalBtn.addEventListener('click', () => {
  modal.classList.add('modal-active')
})

closeBtn.addEventListener('click', () => {
  modal.classList.remove('modal-active')
})
