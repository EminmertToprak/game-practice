class Point {
	constructor() {
		this.width = 2;
		this.height = 2;
		this.positionX = Math.floor(Math.random() * 100 - this.width);
		this.positionY = Math.floor(Math.random() * 100 - this.height * 1);
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
