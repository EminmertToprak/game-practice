const player = new Player();
const TruckArray = [];
const CarArray = [];
const streamFromLeftArray = [];
const streamFromRightArray = [];
const pointArray = [];
const goldenPointArray = [];
let bonusPoints = 0;

createVehicle();
createTruck();
createStreamsFromLeft();
createStreamsFromRight();

//create Streams

function createStreamsFromLeft() {
	let x = 465;
	// const newStreamFromLeft = new StreamFromLeft(x);
	const newStreamFromLeft2 = new StreamFromLeft(x + 80);
	const newStreamFromLeft3 = new StreamFromLeft(x + 160);
	const newStreamFromLeft4 = new StreamFromLeft(x + 240);
	streamFromLeftArray.push(
		// newStreamFromLeft,
		newStreamFromLeft2,
		newStreamFromLeft3,
		newStreamFromLeft4
	);
}

function createStreamsFromRight() {
	let x = 505;
	const newStreamFromRight = new StreamFromRight(x + 80);
	const newStreamFromRight2 = new StreamFromRight(x + 160);
	const newStreamFromRight3 = new StreamFromRight(x + 240);
	// const newStreamFromRight4 = new StreamFromRight(x + 27.5);
	streamFromRightArray.push(
		newStreamFromRight,
		newStreamFromRight2,
		newStreamFromRight3
		// newStreamFromRight4
	);
}

setInterval(createStreamsFromLeft, 500);
setInterval(createStreamsFromRight, 400);

//movement + disappearance of Streams + frog stucks to streams
setInterval(() => {
	streamFromLeftArray.forEach((streamFromLeftInstance, i) => {
		streamFromLeftInstance.moveRight();
		if (streamFromLeftInstance.positionX > 1000) {
			streamFromLeftInstance.newStreamFromLeft.remove();
			streamFromLeftArray.splice(i, 1);
		}
		if (
			player.positionX <
				streamFromLeftInstance.positionX +
					streamFromLeftInstance.width -
					player.width &&
			player.positionX + player.width >
				streamFromLeftInstance.positionX + player.width / 2 &&
			player.positionY + player.height / 1.5 <
				streamFromLeftInstance.positionY + streamFromLeftInstance.height &&
			player.positionY + player.height / 1.5 > streamFromLeftInstance.positionY
		) {
			player.moveRightOnStream();
		}
	});
}, 4);
setInterval(() => {
	streamFromRightArray.forEach((streamFromRightInstance, i) => {
		streamFromRightInstance.moveLeft();
		if (streamFromRightInstance.positionX < -120) {
			streamFromRightInstance.newStreamFromRight.remove();
			streamFromRightArray.splice(i, 1);
		}
		if (
			player.positionX <
				streamFromRightInstance.positionX +
					streamFromRightInstance.width -
					player.width &&
			player.positionX + player.width >
				streamFromRightInstance.positionX + player.width / 2 &&
			player.positionY + player.height / 1.5 <
				streamFromRightInstance.positionY + streamFromRightInstance.height &&
			player.positionY + player.height / 1.5 > streamFromRightInstance.positionY
		) {
			player.moveLeftOnStream();
		}
	});
}, 4);

//create Cars
function createVehicle() {
	const newTruck = new Truck(-240, 45, -1);
	const newTruck2 = new Truck(800, 420, 1);
	const newCar = new Car(800, 300, 1);
	const newCar2 = new Car(-130, 170, -1);
	TruckArray.push(newTruck, newTruck2);
	CarArray.push(newCar, newCar2);
}

setInterval(createVehicle, 3000);
//movement + disappearance of Trucks + game over
function createTruck() {
	TruckArray.forEach((TruckInstance, i) => {
		if (TruckInstance.spawnSide === -1) {
			TruckInstance.moveRight();
		} else if (TruckInstance.spawnSide === 1) {
			TruckInstance.updateScaleX(-1);
			TruckInstance.moveLeft();
		}

		// remove Trucks
		if (TruckInstance.positionX === 800 || TruckInstance.positionX === -260) {
			TruckInstance.newElement.remove();
			TruckArray.splice(i, 1);
		}

		// collusion player + truck
		if (
			player.positionX < TruckInstance.positionX + TruckInstance.width &&
			player.positionX + player.width > TruckInstance.positionX &&
			player.positionY < TruckInstance.positionY + TruckInstance.height &&
			player.positionY + player.height > TruckInstance.positionY
		) {
			location.href = './game-over-page.html';
		}
	});
}

function createCar() {
	CarArray.forEach((CarInstance, i) => {
		if (CarInstance.spawnSide === -1) {
			CarInstance.updateScaleX(-1);
			CarInstance.moveRight();
		} else if (CarInstance.spawnSide === 1) {
			CarInstance.moveLeft();
		}

		// remove Cars Left
		if (CarInstance.positionX === 800 || CarInstance.positionX === -240) {
			CarInstance.newElement.remove();
			CarArray.splice(i, 1);
		}

		// collusion player + car
		if (
			player.positionX < CarInstance.positionX + CarInstance.width &&
			player.positionX + player.width > CarInstance.positionX &&
			player.positionY < CarInstance.positionY + CarInstance.height &&
			player.positionY + player.height > CarInstance.positionY
		) {
			location.href = './game-over-page.html';
		}
	});
}

setInterval(createTruck, 1);
setInterval(createCar, 1);

//create points
setInterval(() => {
	const newPoint = new Point();
	pointArray.push(newPoint);
}, 3000);

//appearance + disappearance of points + win condition
setInterval(() => {
	pointArray.forEach((pointInstance, i) => {
		pointInstance.moveRandom();
		if (
			pointInstance.positionX < 0 - pointInstance.width ||
			pointInstance.positionX > 800 + pointInstance.width ||
			pointInstance.positionY < 0 - pointInstance.height ||
			pointInstance.positionY > 800 + pointInstance.height
		) {
			pointInstance.newPoint.remove();
			pointArray.splice(i, 1);
		}
		if (
			player.positionX < pointInstance.positionX + pointInstance.width &&
			player.positionX + player.width > pointInstance.positionX &&
			player.positionY < pointInstance.positionY + pointInstance.height &&
			player.positionY + player.height > pointInstance.positionY
		) {
			pointInstance.newPoint.remove();
			pointArray.splice(i, 1);
			bonusPoints += 1;
			const pointArea = document.getElementById('point-area');
			pointArea.innerText = `Points: ${bonusPoints}`;
		}
	});
}, 100);

setInterval(() => {
	if (bonusPoints > 9) {
		location.href = './win-page.html';
	}
}, 100);

// character movement
document.addEventListener('keydown', (e) => {
	switch (e.code) {
		case 'ArrowLeft':
		case 'KeyA':
			player.jumpEffect(`url('./images/frog_jump_W.png')`, 'W');
			player.moveLeft();
			player.playerElement.style.backgroundImage = `url('./images/frog_W.png')`;
			break;
		case 'KeyD':
		case 'ArrowRight':
			player.jumpEffect(`url('./images/frog_jump_E.png')`, 'E');
			player.moveRight();
			player.playerElement.style.backgroundImage = `url('./images/frog_E.png')`;
			break;
		case 'KeyW':
		case 'ArrowUp':
			player.jumpEffect(`url('./images/frog_jump.png')`);
			player.moveUp();
			player.updateScaleY(1);

			break;
		case 'KeyS':
		case 'ArrowDown':
			player.jumpEffect(`url('./images/frog_jump.png')`);
			player.moveDown();
			player.updateScaleY(-1);
			break;
		case 'KeyP':
			location.href = './win-page.html';
			break;
		default:
			break;
	}
});

//goldenpoint
setInterval(() => {
	let positionArray = [35, 205, 380, 555, 725];
	let position =
		positionArray[Math.floor(Math.random() * positionArray.length)];

	const newGoldenPoint = new GoldenPoint(position);
	goldenPointArray.push(newGoldenPoint);
	goldenPointArray.forEach((goldenPointInstance) => {
		if (goldenPointArray.length >= 2) {
			goldenPointInstance.newGoldenPoint.remove();
			goldenPointArray.shift();
		}
	});
}, 10000);

//river left + right deadly rule
setInterval(() => {
	if ((player.positionX < 0) & (player.positionY > 530)) {
		location.href = './game-over-page.html';
	} else if ((player.positionY > 530) & (player.positionX > 785)) {
		location.href = './game-over-page.html';
	}
	goldenPointArray.forEach((goldenPointInstance, i) => {
		if (
			player.positionX <
				goldenPointInstance.positionX + goldenPointInstance.width &&
			player.positionX + player.width > goldenPointInstance.positionX &&
			player.positionY <
				goldenPointInstance.positionY + goldenPointInstance.height &&
			player.positionY + player.height > goldenPointInstance.positionY
		) {
			bonusPoints += 3;
			const pointArea = document.getElementById('point-area');
			pointArea.innerText = `Points: ${bonusPoints}`;
			goldenPointInstance.newGoldenPoint.remove();
			goldenPointArray.splice(i, 1);
		}
	});
}, 100);

//Loading Screen

setTimeout(function () {
	document.getElementById('loading').classList.add('hidden');
}, 3000);
