let paymentButton = document.getElementById('payment-button')

paymentButton.href = `https://www.paypal.me/projecfolded/${localStorage.getItem('price')}`

document.getElementById('name').innerHTML = `${localStorage.getItem('name')}, `
document.getElementById('price').innerHTML = `$${parseFloat(localStorage.getItem('price')).toFixed(2)}`
document.getElementById('recipient').innerHTML = localStorage.getItem('recipient')
document.getElementById('address').innerHTML = `${localStorage.getItem('mailing')}, ${localStorage.getItem('location')}, ${localStorage.getItem('postal')}`
document.getElementById('text').innerHTML = localStorage.getItem('message')
