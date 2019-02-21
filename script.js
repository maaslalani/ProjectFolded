const continueForm = document.querySelector('continue-form')
const continueOrder = document.getElementById('continue-order')
const order = document.getElementById('order')
const BASE_PRICE = 5

function populateForm() {
  continueOrder.remove()
  continueForm.style.display = 'block'
}

function submitForm() {
  let message = document.getElementById('message').value
  let mailing = [...document.getElementsByTagName('input')].map(input => input.value)
  let origami = selectedType.querySelector('h4').textContent

  let price = BASE_PRICE + selectedType.querySelector('h5').textContent
  console.log(selectedType)
  console.log(message)
  console.log(mailing)
  console.log(price)
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
