class Player {
	constructor(height, width) {
		this.height = 3;
		this.width = 3;
		this.positionX = 50;
		this.positionY = 0;
		this.playerElement = document.getElementById('player');
		this.playerElement.style.width = this.width + 'vw';
		this.playerElement.style.height = this.height + 'vh';
		this.playerElement.style.bottom = this.positionY + 'vh';
		this.playerElement.style.left = this.positionX + 'vw';
		this.updateScaleX();
		this.updateScaleY();
		this.standingEffect();
	}
	updateScaleX(num) {
		this.playerElement.style.transform = `scaleX(${num})`;
	}

	updateScaleY(num) {
		this.playerElement.style.transform = `scaleY(${num})`;
	}

	jumpEffect(imageUrl, direction) {
		// this.width = 3;
		// this.height = 5;
		// this.playerElement.style.width = this.width;
		// this.playerElement.style.height = this.height;
		this.playerElement.style.backgroundImage = imageUrl;
		//  setInterval(() => {
		// }, 600);
		// clearInterval()
		this.standingEffect(direction);
	}

	standingEffect(direction) {
		// this.width = 3;
		// this.height = 3;
		// this.playerElement.style.width = this.width;
		// this.playerElement.style.height = this.height;
		setTimeout(() => {
			if (direction === 'W') {
				this.playerElement.style.backgroundImage = `url('../images/frog_W.png')`;
				return;
			}
			if (direction === 'E') {
				this.playerElement.style.backgroundImage = `url('../images/frog_E.png')`;
				return;
			}
			this.playerElement.style.backgroundImage = `url('../images/frog_N.png')`;
		}, 1000);
	}

	moveLeft() {
		if (this.positionX > 0) {
			this.positionX -= 1;
			this.playerElement.style.left = this.positionX + 'vw';
			// this.playerElement.style.backgroundImage = `url('../images/frog_W.png')`;
		}
	}

	moveRight() {
		if (this.positionX < 97) {
			this.positionX += 1;
			this.playerElement.style.left = this.positionX + 'vw';
			// this.playerElement.style.backgroundImage = `url('../images/frog_E.png')`;
		}
	}

	moveUp() {
		if (this.positionY < 94) {
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

	moveLeftOnLog() {
		if (this.positionX < 97) {
			this.positionX -= 0.2;
			this.playerElement.style.left = this.positionX + 'vw';
		}
	}

	moveRightOnLog() {
		if (this.positionX < 97) {
			this.positionX += 0.2;
			this.playerElement.style.left = this.positionX + 'vw';
		}
	}
}
