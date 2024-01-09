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
		this.newElement.style.width = this.width + 'px';
		this.newElement.style.height = this.height + 'px';
		this.newElement.style.left = this.positionX + 'px';
		this.newElement.style.bottom = this.positionY + 'px';
		this.updateScaleX();

		const parentElm = document.getElementById('road');
		parentElm.appendChild(this.newElement);
	}

	moveRight() {
		this.positionX = this.positionX + 2;
		this.newElement.style.left = this.positionX + 'px';
	}

	moveLeft() {
		this.positionX = this.positionX - 2;
		this.newElement.style.left = this.positionX + 'px';
	}
}

class Truck extends Vehicle {
	constructor(positionX, positionY, side) {
		super(positionX, positionY, side, 240, 80, 'Truck');
	}
}

class Car extends Vehicle {
	constructor(positionX, positionY, side) {
		super(positionX, positionY, side, 130, 62, 'Car');
	}
}
