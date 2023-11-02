class Point {
	constructor() {
		this.width = 2;
		this.height = 2;
		this.positionX = Math.floor(Math.random() * 100 - this.width);
		this.positionY = Math.floor(Math.random() * 100 - this.height);
		this.newPoint = undefined;
		this.newPoint = document.createElement('div');
		this.newPoint.classList.add('point');
		this.newPoint.style.width = this.width + 'vw';
		this.newPoint.style.height = this.height + 'vh';
		this.newPoint.style.left = this.positionX + 'vw';
		this.newPoint.style.bottom = this.positionY + 'vh';

		const parentElm = document.getElementById('board');
		parentElm.appendChild(this.newPoint);
	}
	moveRandom() {
		let randomer = Math.round(Math.random() * 3);
		if (randomer === 0) {
			this.positionX += Math.round(Math.random() + 1);
			this.positionY += Math.round(Math.random() + 1);
			this.newPoint.style.left = this.positionX + 'vw';
			this.newPoint.style.bottom = this.positionY + 'vh';
		} else if (randomer === 1) {
			this.positionX -= Math.round(Math.random() + 1);
			this.positionY -= Math.round(Math.random() + 1);
			this.newPoint.style.left = this.positionX + 'vw';
			this.newPoint.style.bottom = this.positionY + 'vh';
		} else if (randomer === 2) {
			this.positionX += Math.round(Math.random() + 1);
			this.positionY -= Math.round(Math.random() + 1);
			this.newPoint.style.left = this.positionX + 'vw';
			this.newPoint.style.bottom = this.positionY + 'vh';
		} else if (randomer === 3) {
			this.positionX -= Math.round(Math.random() + 1);
			this.positionY += Math.round(Math.random() + 1);
			this.newPoint.style.left = this.positionX + 'vw';
			this.newPoint.style.bottom = this.positionY + 'vh';
		}
	}
}

class GoldenPoint {
	constructor(positionX) {
		this.width = 4;
		this.height = 3;
		this.positionX = positionX;
		this.positionY = 91;
		this.newGoldenPoint = undefined;
		this.newGoldenPoint = document.createElement('div');
		this.newGoldenPoint.classList.add('golden_point');
		this.newGoldenPoint.style.width = this.width + 'vw';
		this.newGoldenPoint.style.height = this.height + 'vh';
		this.newGoldenPoint.style.left = this.positionX + 'vw';
		this.newGoldenPoint.style.bottom = this.positionY + 'vh';

		const parentElm = document.getElementById('board');
		parentElm.appendChild(this.newGoldenPoint);
	}
}
