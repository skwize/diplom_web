let modal_block_first = document.getElementById("modal-wrapper_first");
let modal_block_sec = document.getElementById("modal-wrapper_sec");

const close_modal = () => {
    modal_block_first.style.display = "none";
    modal_block_sec.style.display = "none";
}

const show_modal_f = () => {
    modal_block_first.style.display = "block";
}

const show_modal_sec = () => {
    modal_block_sec.style.display = "block";
}