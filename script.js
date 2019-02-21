const continueForm = document.querySelector('continue-form')
const continueOrder = document.getElementById('continue-order')
const order = document.getElementById('order')
const BASE_PRICE = 5

function populateForm() {
  continueOrder.remove()
  continueForm.style.display = 'block'
}

function submitForm(e) {
  let message = document.getElementById('message').value
  let mailing = [...document.getElementsByTagName('input')].map(input => input.value)
  let origami = selectedType.querySelector('h4').textContent
  let price = BASE_PRICE + parseInt(selectedType.querySelector('h5').textContent.substring(2))

  let unfilled = false
  mailing.forEach(element => {if (!element) { unfilled = true }})
  if (unfilled) {
    alert('There are some blanks left in your form. Please fill it out fully.')
    e.preventDefault()
  }

  localStorage.setItem('message', message)
  localStorage.setItem('name', mailing[0])
  localStorage.setItem('recipient', mailing[1])
  localStorage.setItem('mailing', mailing[2])
  localStorage.setItem('postal', mailing[3])
  localStorage.setItem('location', mailing[4])
  localStorage.setItem('origami', origami)
  localStorage.setItem('price', price)
}

continueForm.style.display = 'none'
continueOrder.addEventListener('click', populateForm) 

const origamiTypes = document.querySelectorAll('origami-type')
let selectedType = origamiTypes[0]

for (let type of origamiTypes) {
  type.addEventListener('click', () => {
    selectedType.classList.remove('selected')
    selectedType = type
    type.classList.add('selected')
  })
}

let submitOrder = document.querySelector('#submit-order')
submitOrder.addEventListener('click', submitForm)
