class Truck {
	constructor() {
		this.height = 8;
		this.width = 24;
		this.positionX = 0 - this.width;
		this.positionY = Math.floor(Math.random() * (10 - 1) + 1);
		this.newTruck = undefined;

		this.createDomElement();
	}
	createDomElement() {
		this.newTruck = document.createElement('div');
		this.newTruck.classList.add('Truck');
		this.newTruck.style.width = this.width + 'vw';
		this.newTruck.style.height = this.height + 'vh';
		this.newTruck.style.left = this.positionX + 'vw';
		this.newTruck.style.bottom = this.positionY + 'vh';

		const parentElm = document.getElementById('road1');
		parentElm.appendChild(this.newTruck);
	}
	moveRight() {
		this.positionX++;
		this.newTruck.style.left = this.positionX + 'vw';
	}
}

class Car {
	constructor() {
		this.height = 6.2;
		this.width = 13;
		this.positionX = 100;
		this.positionY = Math.floor(Math.random() * (44 - 35) + 35);
		this.newTruck = undefined;

		this.createDomElement();
	}
	createDomElement() {
		this.newCar = document.createElement('div');
		this.newCar.classList.add('Car');
		this.newCar.style.width = this.width + 'vw';
		this.newCar.style.height = this.height + 'vh';
		this.newCar.style.left = this.positionX + 'vw';
		this.newCar.style.bottom = this.positionY + 'vh';

		const parentElm = document.getElementById('road2');
		parentElm.appendChild(this.newCar);
	}
	moveLeft() {
		this.positionX--;
		this.newCar.style.left = this.positionX + 'vw';
	}
}
