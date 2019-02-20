let continueForm = document.querySelector('continue-form')
let continueOrder = document.getElementById('continue-order')
let order = document.getElementById('order')

continueForm.style.display = 'none'

function populateForm() {
  continueOrder.remove()
  continueForm.style.display = 'block'
}

continueOrder.addEventListener('click', populateForm) 
