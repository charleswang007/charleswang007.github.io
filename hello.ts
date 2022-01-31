function calc(price:number, tax:number):number {
	return Math.floor(price * (1.0 + tax));
}

function doClick():void {
	let text1:HTMLInputElement = document.querySelector('#text1');
	let msg:Element = document.querySelector('#msg');
	msg.innerHTML = calc(Number(text1.value), 0.05) + '元';
}
