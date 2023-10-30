class Player {
	constructor() {
		this.height = 6;
		this.width = 3;
		this.positionX = 50;
		this.positionY = 70;
		this.playerElement = document.getElementById('player');
		this.playerElement.style.width = this.width + 'vw';
		this.playerElement.style.height = this.height + 'vh';
		this.playerElement.style.bottom = this.positionY + 'vh';
		this.playerElement.style.left = this.positionX + 'vw';
		//couldn't figured it out perfect
	}
	moveLeft() {
		if (this.positionX > 0) {
			this.positionX -= 1;
			this.playerElement.style.left = this.positionX + 'vw';
		}
	}

	moveRight() {
		if (this.positionX < 97) {
			// Why 97? Try to find a way to make it more interactive
			this.positionX += 1;
			this.playerElement.style.left = this.positionX + 'vw';
		}
	}

	moveUp() {
		if (this.positionY < 94) {
			// Why 94? Try to find a way to make it more interactive
			this.positionY += 1;
			this.playerElement.style.bottom = this.positionY + 'vh';
		}
	}

	moveDown() {
		if (this.positionY > 0) {
			this.positionY -= 1;
			this.playerElement.style.bottom = this.positionY + 'vh';
		}
	}
}
