class StreamFromLeft {
	constructor(positionY) {
		this.height = 4;
		this.width = 100;
		this.positionX = -5;
		this.positionY = positionY;
		this.newStreamFromLeft = undefined;
		this.createDomElement();
	}
	createDomElement() {
		this.newStreamFromLeft = document.createElement('div');
		this.newStreamFromLeft.classList.add('streamFromLeft');
		this.newStreamFromLeft.style.width = this.width + 'vw';
		this.newStreamFromLeft.style.height = this.height + 'vh';
		this.newStreamFromLeft.style.left = this.positionX + 'vw';
		this.newStreamFromLeft.style.bottom = this.positionY + 'vh';

		const parentElm = document.getElementById('river');
		parentElm.appendChild(this.newStreamFromLeft);
	}
	moveRight() {
		this.positionX++;
		this.newStreamFromLeft.style.left = this.positionX + 'vw';
	}
}

class StreamFromRight {
	constructor(positionY) {
		this.height = 4;
		this.width = 80;
		this.positionX = 30;
		this.positionY = positionY;
		this.newStreamFromRight = undefined;
		this.createDomElement();
	}
	createDomElement() {
		this.newStreamFromRight = document.createElement('div');
		this.newStreamFromRight.classList.add('streamFromRight');
		this.newStreamFromRight.style.width = this.width + 'vw';
		this.newStreamFromRight.style.height = this.height + 'vh';
		this.newStreamFromRight.style.left = this.positionX + 'vw';
		this.newStreamFromRight.style.bottom = this.positionY + 'vh';

		const parentElm = document.getElementById('river');
		parentElm.appendChild(this.newStreamFromRight);
	}
	moveLeft() {
		this.positionX--;
		this.newStreamFromRight.style.left = this.positionX + 'vw';
	}
}
