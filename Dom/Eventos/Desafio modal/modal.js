  
const buttonOpenModal = document.getElementById('openModal')

const modalwrapper = document.querySelector('modal-wrapper')


buttonOpenModal.onclick = function (){
  modalwrapper.classList.remove('invisible')
}

document.addEventListener('keydown', function(event) {
  const isEscKey = event.key === 'Escape'

  if(isEscKey){
    modalwrapper.classList.add('invisible')
  }

})