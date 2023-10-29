class Point {
	constructor() {
		this.width = 3;
		this.height = 5;
		this.positionX = Math.floor(Math.random() * 100 - this.width);
		this.positionY = Math.floor(Math.random() * 100 - this.height * 2);
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
}
