const form = document.querySelector('.modal-form')
const formInputs = document.querySelectorAll('.modal-form__input')
const inputPhone = document.querySelector('[name="phone"]')

const send = () => {
  const modal = document.querySelector('.modal')
  const modalWrap = document.querySelector('.modal-wrapper')
  const modalThanks = document.querySelector('.modal-thanks')

  modalWrap.classList.add('modal-wrapper__done')
  modalThanks.classList.add('thanks-active')

  setTimeout(function () {
    modal.classList.remove('modal-active')
    modalWrap.classList.remove('modal-wrapper__done')
    modalThanks.classList.remove('thanks-active')
  }, 2000)
}

formInputs.forEach((input) => {
  input.addEventListener('focus', function () {
    this.classList.remove('not-validate')
  })
})

inputPhone.addEventListener('input', function () {
  this.value = this.value.replace(/[^\d]/g, '')
})

function validatePhone() {
  const phone = inputPhone.value
  if (phone.length < 12) {
    inputPhone.classList.add('not-validate')
  } else {
    inputPhone.classList.remove('not-validate')
  }
  return /^\+?\d{10,13}$/.test(phone) && phone.length === 13
}

form.onsubmit = function (event) {
  event.preventDefault()

  const hasEmptyInputs = Array.from(formInputs).some(
    (input) => input.value.trim() === ''
  )

  formInputs.forEach(function (input) {
    if (input.value.trim() === '') {
      input.classList.add('not-validate')
    } else {
      input.classList.remove('not-validate')
    }
  })

  const isPhoneValid = validatePhone()

  if (hasEmptyInputs || !isPhoneValid) {
    return false
  }

  send()
  formInputs.forEach((input) => {
    input.value = ''
  })
}
