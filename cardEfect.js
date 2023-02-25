const card = document.querySelector("#mainContainer")
const numberCard = document.querySelector("#numberCard")
const nameCard = document.querySelector("#nameCard")
const cvv = document.querySelector('#cvvInputCard')
const butSubmit = document.querySelector('#butsubmit')
const valueNumber = document.querySelector('#valueNumber')
const valueName = document.querySelector('#valueName')
const validityDate = document.querySelector('#validityDate')
const vDate = document.querySelector('#vDate')
const cvvValueCard = document.querySelector('#cvvValueCard')

cvv.addEventListener("focus", ()=>{
    card.classList.toggle("flip")
})

butSubmit.addEventListener("click", ()=>{
    valueNumber.innerHTML = numberCard.value
    valueName.innerHTML = nameCard.value
    vDate.innerHTML = validityDate.value
    cvvValueCard.innerHTML = cvv.value
})




