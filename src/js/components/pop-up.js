const popUp = document.querySelector('.pop-up')
const closePopUp = document.querySelector('.pop-up-btn')

closePopUp.addEventListener('click', () => {
  popUp.classList.remove('pop-up-active')
})

const openPopUp = () => {
  setTimeout(function () {
    popUp.classList.add('pop-up-active')
  }, 4000)
}

openPopUp()
