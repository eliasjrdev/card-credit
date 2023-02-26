// Elements of face card
const card = document.querySelector('#mainContainer')
const valueName = document.querySelector('#valueName')
const valueNumber = document.querySelector('#valueNumber')
const vDate = document.querySelector('#vDate')
const cvvValueCard = document.querySelector('#cvvValueCard')

//Elements of inputs
const numberCard = document.querySelector("#numberCard")
const nameCard = document.querySelector("#nameCard")
const cvv = document.querySelector('#cvvInputCard')
const validityDate = document.querySelector('#validityDate')
const butSubmit = document.querySelector('#butsubmit')


//----------------------------------------------------//

numberCard.addEventListener('input', updateNumberCard);
nameCard.addEventListener('input', updateNameCard);
cvv.addEventListener('input', updateCvv);
validityDate.addEventListener('input', updateValidityDate);


function updateNumberCard(){
    valueNumber.textContent = numberCard.value;
}

function updateNameCard(){
    valueName.textContent = nameCard.value;
}

function updateCvv(){
    cvvValueCard.textContent = cvv.value;
}

function updateValidityDate(){
    vDate.textContent = validityDate.value
}

cvv.addEventListener('focus', ()=>{
    card.classList.toggle('flip')
})




/*
butSubmit.addEventListener("click", ()=>{
    valueNumber.innerHTML = numberCard.value
    valueName.innerHTML = nameCard.value
    vDate.innerHTML = validityDate.value
    cvvValueCard.innerHTML = cvv.value
})*/




