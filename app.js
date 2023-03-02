let openBtn = document.querySelector("#openModalBtn")
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector (".closeBtn")
let cancel = document.querySelector (".cancel")


// Открывание модального окна
openBtn.addEventListener('click', function () {
    modal.style.display = "block"
})

// Закрытие окна при клике по х
closeBtn.addEventListener('click', function () {
    modal.style.display = "none"
})

// Закрытие окна при клике по "Отмена"
cancel.addEventListener('click', function () {
    modal.style.display = "none"
})

// Закрытие окна при клике вне модального окна
// Обработка события по клику вне окна
window.addEventListener('click', function (event) {
    if(event.target == modal) {
        modal.style.display = "none"
    }
})
