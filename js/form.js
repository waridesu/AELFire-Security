const amount = document.getElementById('amount')
const duration = document.getElementById('duration')
let formAmount = document.getElementById('formAmount')
let formTax = document.getElementById('formTax')
let formMonthly = document.getElementById('formMonthly')


addEventListener('change',e=(amountTax)=>{
    amountTax=Array.from({length: duration.value}). reduce((curr) => curr * 1.19, amount.value)
    formAmount.value = amount.value
    formTax.value = (amountTax-amount.value).toFixed(2)
    formMonthly.value = (amountTax/(duration.value*12)).toFixed(2)
})
