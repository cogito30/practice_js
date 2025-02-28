const count = document.getElementById("cnt");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

increase.onclick = () => {
    const number = parseInt(count.innerText, 10);
    count.innerText = number + 1;
}

decrease.onclick = () => {
    const number = parseInt(count.innerText, 10);
    count.innerText = number - 1;
}