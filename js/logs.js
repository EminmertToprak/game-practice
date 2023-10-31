class LogFromLeft {
	constructor(positionY) {
		this.height = 4;
		this.width = 20;
		this.positionX = 0 - this.width;
		this.positionY = positionY;
		this.newLogFromLeft = undefined;
		this.createDomElement();
	}
	createDomElement() {
		this.newLogFromLeft = document.createElement('div');
		this.newLogFromLeft.classList.add('logFromLeft');
		this.newLogFromLeft.style.width = this.width + 'vw';
		this.newLogFromLeft.style.height = this.height + 'vh';
		this.newLogFromLeft.style.left = this.positionX + 'vw';
		this.newLogFromLeft.style.bottom = this.positionY + 'vh';

		const parentElm = document.getElementById('river');
		parentElm.appendChild(this.newLogFromLeft);
	}
	moveRight() {
		this.positionX++;
		this.newLogFromLeft.style.left = this.positionX + 'vw';
	}
}

class LogFromRight {
	constructor(positionY) {
		this.height = 4;
		this.width = 20;
		this.positionX = 100 + this.width;
		this.positionY = positionY;
		this.newLogFromRight = undefined;
		this.createDomElement();
	}
	createDomElement() {
		this.newLogFromRight = document.createElement('div');
		this.newLogFromRight.classList.add('logFromRight');
		this.newLogFromRight.style.width = this.width + 'vw';
		this.newLogFromRight.style.height = this.height + 'vh';
		this.newLogFromRight.style.left = this.positionX + 'vw';
		this.newLogFromRight.style.bottom = this.positionY + 'vh';

		const parentElm = document.getElementById('river');
		parentElm.appendChild(this.newLogFromRight);
	}
	moveLeft() {
		this.positionX--;
		this.newLogFromRight.style.left = this.positionX + 'vw';
	}
}
