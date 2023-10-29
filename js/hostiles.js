class hostileR {
	constructor() {
		this.height = 5;
		this.width = 6;
		this.positionX = 0 - this.width;
		this.positionY = Math.floor(Math.random() * 50 - this.height);
		this.newhostileR = undefined;

		this.createDomElement();
	}
	createDomElement() {
		this.newhostileR = document.createElement('div');
		this.newhostileR.classList.add('hostileR');
		this.newhostileR.style.width = this.width + 'vw';
		this.newhostileR.style.height = this.height + 'vh';
		this.newhostileR.style.left = this.positionX + 'vw';
		this.newhostileR.style.bottom = this.positionY + 'vh';

		const parentElm = document.getElementById('road1');
		parentElm.appendChild(this.newhostileR);
	}
	moveRight() {
		this.positionX++;
		this.newhostileR.style.left = this.positionX + 'vw';
	}
}

class hostileL {
	constructor() {
		this.height = 3;
		this.width = 4;
		this.positionX = 100;
		this.positionY = Math.floor(Math.random() * (100 - 50 + 1) + 50);
		this.newhostileR = undefined;

		this.createDomElement();
	}
	createDomElement() {
		this.newhostileL = document.createElement('div');
		this.newhostileL.classList.add('hostileL');
		this.newhostileL.style.width = this.width + 'vw';
		this.newhostileL.style.height = this.height + 'vh';
		this.newhostileL.style.left = this.positionX + 'vw';
		this.newhostileL.style.bottom = this.positionY + 'vh';

		const parentElm = document.getElementById('road2');
		parentElm.appendChild(this.newhostileL);
	}
	moveLeft() {
		this.positionX--;
		this.newhostileL.style.left = this.positionX + 'vw';
	}
}
