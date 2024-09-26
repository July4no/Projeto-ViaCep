function State() {
  this.container = null;
  this.buttonClose = null;
}

const state = new State();

export function init() {
  state.container = document.querySelector("#modal-contact");
  state.buttonClose = document.querySelector("#modal-contact-close");

  state.buttonClose.addEventListener ('click', handleButtonCloseClick);
  state.container.addEventListener('click', handleContainerClick);
}

export function showModal() {
  state.container.classList.add("active");
}

export function closeModal() {
  state.container.classList.remove("active");
}


function handleButtonCloseClick (event) {
    event.preventDefault ();
    closeModal ();
}

function handleContainerClick (event) {

    event.preventDefault ();

    if (event.target === this) {
        closeModal ();
    }
    
}