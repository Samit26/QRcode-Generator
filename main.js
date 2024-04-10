// main.js

const button = document.getElementById('button');
const image = document.getElementById('img');

const handleClick = () => {
    const text = document.getElementById('textbox').value;
    console.log(text)
    image.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(text)}">`;
}

button.addEventListener('click', handleClick);
