class Player {
	constructor(height, width) {
		this.height = 30;
		this.width = 30;
		this.positionX = 385;
		this.positionY = 0;
		this.playerElement = document.getElementById('player');
		this.playerElement.style.width = this.width + 'px';
		this.playerElement.style.height = this.height + 'px';
		this.playerElement.style.left = this.positionX + 'px';
		this.playerElement.style.bottom = this.positionY + 'px';
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
		this.playerElement.style.backgroundImage = imageUrl;
		this.standingEffect(direction);
	}

	standingEffect(direction) {
		setTimeout(() => {
			if (direction === 'W') {
				this.playerElement.style.backgroundImage = `url('./images/frog_W.png')`;
				return;
			}
			if (direction === 'E') {
				this.playerElement.style.backgroundImage = `url('./images/frog_E.png')`;
				return;
			}
			this.playerElement.style.backgroundImage = `url('./images/frog_N.png')`;
		}, 1000);
	}

	moveLeft() {
		if (this.positionX > 0) {
			this.positionX -= 20;
			this.playerElement.style.left = this.positionX + 'px';
		}
	}

	moveRight() {
		if (this.positionX < 800) {
			this.positionX += 20;
			this.playerElement.style.left = this.positionX + 'px';
		}
	}

	moveUp() {
		if (this.positionY < 800) {
			this.positionY += 20;
			this.playerElement.style.bottom = this.positionY + 'px';
		}
	}

	moveDown() {
		if (this.positionY > 0) {
			this.positionY -= 20;
			this.playerElement.style.bottom = this.positionY + 'px';
		}
	}

	moveLeftOnStream() {
		if (this.positionX > 0) {
			this.positionX -= 0.3;
			this.playerElement.style.left = this.positionX + 'px';
		}
	}

	moveRightOnStream() {
		if (this.positionX < 800) {
			this.positionX += 0.3;
			this.playerElement.style.left = this.positionX + 'px';
		}
	}
}
