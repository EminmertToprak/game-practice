class StreamFromLeft {
	constructor(positionY) {
		this.height = 40;
		this.width = 1500;
		this.positionX = -100;
		this.positionY = positionY;
		this.newStreamFromLeft = undefined;
		this.createDomElement();
	}
	createDomElement() {
		this.newStreamFromLeft = document.createElement('div');
		this.newStreamFromLeft.classList.add('streamFromLeft');
		this.newStreamFromLeft.style.width = this.width + 'px';
		this.newStreamFromLeft.style.height = this.height + 'px';
		this.newStreamFromLeft.style.left = this.positionX + 'px';
		this.newStreamFromLeft.style.bottom = this.positionY + 'px';

		const parentElm = document.getElementById('river');
		parentElm.appendChild(this.newStreamFromLeft);
	}
	moveRight() {
		this.positionX++;
		this.newStreamFromLeft.style.left = this.positionX + 'px';
	}
}

class StreamFromRight {
	constructor(positionY) {
		this.height = 40;
		this.width = 1500;
		this.positionX = 100;
		this.positionY = positionY;
		this.newStreamFromRight = undefined;
		this.createDomElement();
	}
	createDomElement() {
		this.newStreamFromRight = document.createElement('div');
		this.newStreamFromRight.classList.add('streamFromRight');
		this.newStreamFromRight.style.width = this.width + 'px';
		this.newStreamFromRight.style.height = this.height + 'px';
		this.newStreamFromRight.style.left = this.positionX + 'px';
		this.newStreamFromRight.style.bottom = this.positionY + 'px';

		const parentElm = document.getElementById('river');
		parentElm.appendChild(this.newStreamFromRight);
	}
	moveLeft() {
		this.positionX--;
		this.newStreamFromRight.style.left = this.positionX + 'px';
	}
}
