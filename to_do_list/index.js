const items  = document.querySelectorAll(".check-circle");

items.forEach(item => {
    item.addEventListener('click' , (e) => {
        if (e.target.classList.contains('done')){
            e.preventDefault();
            item.classList.remove('done');
        } else {
            item.classList.add('done');
        }
    })
});
