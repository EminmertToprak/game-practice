class Truck {
	constructor(positionX, positionY, side) {
		this.spawnSide = side; // -1 from left 1 from right
		this.height = 8;
		this.width = 24;
		this.positionX = positionX; // 0 - this.width;
		this.positionY = positionY; // Math.floor(Math.random() * (11 - 1) + 1);
		this.newTruck = undefined;
		this.createDomElement();
	}
	updateScaleX(num) {
		this.newTruck.style.transform = `scaleX(${num})`;
	}
	createDomElement() {
		this.newTruck = document.createElement('div');
		this.newTruck.classList.add('Truck');
		this.newTruck.style.width = this.width + 'vw';
		this.newTruck.style.height = this.height + 'vh';
		this.newTruck.style.left = this.positionX + 'vw';
		this.newTruck.style.bottom = this.positionY + 'vh';
		this.updateScaleX();

		const parentElm = document.getElementById('road');
		parentElm.appendChild(this.newTruck);
	}
	moveRight() {
		this.positionX++;
		this.newTruck.style.left = this.positionX + 'vw';
	}
	moveLeft() {
		this.positionX--;
		this.newTruck.style.left = this.positionX + 'vw';
	}
}

class Car {
	constructor(positionX, positionY, side) {
		this.spawnSide = side;
		this.height = 6.2;
		this.width = 13;
		this.positionX = positionX; //100;
		this.positionY = positionY; //Math.floor(Math.random() * (46 - 35) + 35);
		this.newCar = undefined;
		this.createDomElement();
	}
	updateScaleX(num) {
		this.newCar.style.transform = `scaleX(${num})`;
	}
	createDomElement() {
		this.newCar = document.createElement('div');
		this.newCar.classList.add('Car');
		this.newCar.style.width = this.width + 'vw';
		this.newCar.style.height = this.height + 'vh';
		this.newCar.style.left = this.positionX + 'vw';
		this.newCar.style.bottom = this.positionY + 'vh';
		this.updateScaleX();

		const parentElm = document.getElementById('road');
		parentElm.appendChild(this.newCar);
	}
	moveRight() {
		this.positionX++;
		this.newCar.style.left = this.positionX + 'vw';
	}
	moveLeft() {
		this.positionX--;
		this.newCar.style.left = this.positionX + 'vw';
	}
}
