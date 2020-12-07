const amount = document.getElementById('amount')
const duration = document.getElementById('duration')
let formAmount = document.getElementById('formAmount')
let formTax = document.getElementById('formTax')
let formMonthly = document.getElementById('formMonthly')


addEventListener('change',e=()=>{
    formAmount.value = amount.value
    formTax.value = (amount.value*duration.value*0.19).toFixed(2)
    formMonthly.value = (((amount.value*duration.value)*formTax.value)/duration.value).toFixed(2)
})
const sendMail = ()=>{

}
