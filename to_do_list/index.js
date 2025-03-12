const items  = document.querySelectorAll(".check-circle");
const createButton = document.querySelector(".to-do-create .circle-button");
const insertFormPosition = document.querySelector(".insert-form-position");

items.forEach(item => {
    item.addEventListener('click' , (e) => {
        if (e.target.classList.contains('done')) {
            e.preventDefault();
            item.classList.remove('done');
        } else {
            item.classList.add('done');
        }
    })
});

createButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('open')) {
        createButton.classList.remove('open');
        insertFormPosition.classList.remove('open');
    } else {
        createButton.classList.add('open');
        insertFormPosition.classList.add('open');
    }
});


