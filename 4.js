let hide = true;

function sayHello() {
    let i = 0;
    let div = document.getElementById('content');
    while (i <10) {
        let img = document.createElement('img');
        img.src = '1.jpg'
        div.appendChild(img)
        i += 1;
    }
}