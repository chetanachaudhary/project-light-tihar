document.addEventListener('mousemove', function (e) {
    let body = document.querySelector('body');
    let dot = document.createElement('span');
    let x = e.offsetX;
    let y = e.offsetY;

    dot.style.top = y + 'px';
    dot.style.left = x + 'px';

    dot.innerText = 'Happy-Tihar';
    dot.style.color='#dfec1f';

    let sizeofDot = Math.random() * 30;
    dot.style.fontSize = sizeofDot + 12 + 'px';
    body.appendChild(dot);

    setTimeout(function () {
        dot.remove();
    }, 5000);
})