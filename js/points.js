class Point {
	constructor() {
		this.width = 30;
		this.height = 20;
		this.positionX = Math.floor(Math.random() * 800 - this.width);
		this.positionY = Math.floor(Math.random() * 800 - this.height);
		this.newPoint = undefined;
		this.newPoint = document.createElement('div');
		this.newPoint.classList.add('point');
		this.newPoint.style.width = this.width + 'px';
		this.newPoint.style.height = this.height + 'px';
		this.newPoint.style.left = this.positionX + 'px';
		this.newPoint.style.bottom = this.positionY + 'px';

		const parentElm = document.getElementById('board');
		parentElm.appendChild(this.newPoint);
	}
	moveRandom() {
		let randomer = Math.round(Math.random() * 3);
		if (randomer === 0) {
			this.positionX += Math.round(Math.random() + 10);
			this.positionY += Math.round(Math.random() + 10);
			this.newPoint.style.left = this.positionX + 'px';
			this.newPoint.style.bottom = this.positionY + 'px';
		} else if (randomer === 1) {
			this.positionX -= Math.round(Math.random() + 10);
			this.positionY -= Math.round(Math.random() + 10);
			this.newPoint.style.left = this.positionX + 'px';
			this.newPoint.style.bottom = this.positionY + 'px';
		} else if (randomer === 2) {
			this.positionX += Math.round(Math.random() + 10);
			this.positionY -= Math.round(Math.random() + 10);
			this.newPoint.style.left = this.positionX + 'px';
			this.newPoint.style.bottom = this.positionY + 'px';
		} else if (randomer === 3) {
			this.positionX -= Math.round(Math.random() + 10);
			this.positionY += Math.round(Math.random() + 10);
			this.newPoint.style.left = this.positionX + 'px';
			this.newPoint.style.bottom = this.positionY + 'px';
		}
	}
}

class GoldenPoint {
	constructor(positionX) {
		this.width = 40;
		this.height = 30;
		this.positionX = positionX;
		this.positionY = 735;
		this.newGoldenPoint = undefined;
		this.newGoldenPoint = document.createElement('div');
		this.newGoldenPoint.classList.add('golden_point');
		this.newGoldenPoint.style.width = this.width + 'px';
		this.newGoldenPoint.style.height = this.height + 'px';
		this.newGoldenPoint.style.left = this.positionX + 'px';
		this.newGoldenPoint.style.bottom = this.positionY + 'px';

		const parentElm = document.getElementById('board');
		parentElm.appendChild(this.newGoldenPoint);
	}
}
