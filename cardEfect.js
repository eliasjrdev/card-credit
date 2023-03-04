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
// add an input event for each data input and create a function to update this data on the face of the card dynamically//
numberCard.addEventListener('input', updateNumberCard);
nameCard.addEventListener('input', updateNameCard);
cvv.addEventListener('input', updateCvv);
validityDate.addEventListener('input', updateValidityDate);

function updateNumberCard() {
    const cardNumber = numberCard.value.replace(/\s/g, '').trim();
    let displayNumber = '';
    for (let i = 0; i < cardNumber.length; i++) {
      if (i < 4 || i > 11) {
        // mostra o primeiro e último 4 dígitos do cartão e oculta o restante com *
        displayNumber += i < cardNumber.length ? cardNumber.charAt(i) : '*';
      } else {
        displayNumber += '•'; // oculta os dígitos do meio com um ponto
      }
      if ((i + 1) % 4 === 0 && i < 15) {
        displayNumber += ' '; // adiciona um espaço a cada grupo de 4 caracteres
      }
    }
    valueNumber.textContent = displayNumber;
}

function updateNameCard(){
    valueName.textContent = nameCard.value;
}

function updateCvv(){
    cvvValueCard.textContent = cvv.value;
}

function updateValidityDate(){
    const monthAndYear = validityDate.value;
    const year = monthAndYear.slice(2, 4);
    const month = monthAndYear.slice(5, 7);
    const formattedDate = `${month}/${year}`;
    vDate.textContent = formattedDate;
}

cvv.addEventListener('focus', ()=>{
    card.classList.toggle('flip')
})

butSubmit.addEventListener('focus', ()=>{
    card.classList.toggle('flip')
})





