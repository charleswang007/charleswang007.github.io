function calc(price, tax) {
    return Math.floor(price * (1.0 + tax));
}
function doClick() {
    var text1 = document.querySelector('#text1');
    var msg = document.querySelector('#msg');
    msg.innerHTML = calc(Number(text1.value), 0.05) + '元';
}
