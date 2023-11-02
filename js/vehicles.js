class Vehicle {
	constructor(positionX, positionY, side, width, height, className) {
		this.spawnSide = side;
		this.height = height;
		this.width = width;
		this.positionX = positionX;
		this.positionY = positionY;
		this.newElement = undefined;
		this.className = className;
		this.createDomElement();
	}

	updateScaleX(num) {
		this.newElement.style.transform = `scaleX(${num})`;
	}

	createDomElement() {
		this.newElement = document.createElement('div');
		this.newElement.classList.add(this.className);
		this.newElement.style.width = this.width + 'vw';
		this.newElement.style.height = this.height + 'vh';
		this.newElement.style.left = this.positionX + 'vw';
		this.newElement.style.bottom = this.positionY + 'vh';
		this.updateScaleX();

		const parentElm = document.getElementById('road');
		parentElm.appendChild(this.newElement);
	}

	moveRight() {
		this.positionX++;
		this.newElement.style.left = this.positionX + 'vw';
	}

	moveLeft() {
		this.positionX--;
		this.newElement.style.left = this.positionX + 'vw';
	}
}

class Truck extends Vehicle {
	constructor(positionX, positionY, side) {
		super(positionX, positionY, side, 24, 8, 'Truck');
	}
}

class Car extends Vehicle {
	constructor(positionX, positionY, side) {
		super(positionX, positionY, side, 13, 6.2, 'Car');
	}
}
