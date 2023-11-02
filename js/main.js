const player = new Player();
const TruckArray = [];
const CarArray = [];
const logFromLeftArray = [];
const logFromRightArray = [];
const pointArray = [];
const goldenPointArray = [];
let bonusPoints = 0;

createVehicle();
createTruck();
createLogsFromLeft();
createLogsFromRight();

//create Logs

function createLogsFromLeft() {
	let x = 67;
	const newLogFromLeft = new LogFromLeft(x);
	const newLogFromLeft2 = new LogFromLeft(x + 8);
	const newLogFromLeft3 = new LogFromLeft(x + 16);
	const newLogFromLeft4 = new LogFromLeft(x + 24);
	logFromLeftArray.push(
		newLogFromLeft,
		newLogFromLeft2,
		newLogFromLeft3,
		newLogFromLeft4
	);
}

function createLogsFromRight() {
	let x = 67;
	const newLogFromRight = new LogFromRight(x + 4);
	const newLogFromRight2 = new LogFromRight(x + 12);
	const newLogFromRight3 = new LogFromRight(x + 20);
	logFromRightArray.push(newLogFromRight, newLogFromRight2, newLogFromRight3);
}

setInterval(createLogsFromLeft, 400);
setInterval(createLogsFromRight, 300);

//movement + disappearance of Logs + frog stucks to logs
setInterval(() => {
	logFromLeftArray.forEach((logFromLeftInstance, i) => {
		logFromLeftInstance.moveRight();
		if (logFromLeftInstance.positionX > 100) {
			logFromLeftInstance.newLogFromLeft.remove();
			logFromLeftArray.splice(i, 1);
		}
		if (
			player.positionX <
				logFromLeftInstance.positionX +
					logFromLeftInstance.width -
					player.width &&
			player.positionX + player.width >
				logFromLeftInstance.positionX + player.width / 2 &&
			player.positionY + player.height / 1.5 <
				logFromLeftInstance.positionY + logFromLeftInstance.height &&
			player.positionY + player.height / 1.5 > logFromLeftInstance.positionY
		) {
			player.moveRightOnLog();
		}
	});
}, 70);
setInterval(() => {
	logFromRightArray.forEach((logFromRightInstance, i) => {
		logFromRightInstance.moveLeft();
		if (logFromRightInstance.positionX < -30) {
			logFromRightInstance.newLogFromRight.remove();
			logFromRightArray.splice(i, 1);
		}
		if (
			player.positionX <
				logFromRightInstance.positionX +
					logFromRightInstance.width -
					player.width &&
			player.positionX + player.width >
				logFromRightInstance.positionX + player.width / 2 &&
			player.positionY + player.height / 1.5 <
				logFromRightInstance.positionY + logFromRightInstance.height &&
			player.positionY + player.height / 1.5 > logFromRightInstance.positionY
		) {
			player.moveLeftOnLog();
		}
	});
}, 40);

//create Cars
function createVehicle() {
	let newTruckRandomer = Math.floor(Math.random() * (11 - 1) + 1);
	let newTruckRandomer2 = Math.floor(Math.random() * (59 - 47) + 47);
	let newCarRandomer = Math.floor(Math.random() * (46 - 35) + 35);
	let newCarRandomer2 = Math.floor(Math.random() * (33 - 12) + 12);
	const newTruck = new Truck(-24, 5, -1);
	const newTruck2 = new Truck(124, 54, 1);
	const newCar = new Car(100, 37, 1);
	const newCar2 = new Car(-15, 20, -1);
	TruckArray.push(newTruck, newTruck2);
	CarArray.push(newCar, newCar2);
}

setInterval(createVehicle, 2000);
//movement + disappearance of Trucks + game over
function createTruck() {
	TruckArray.forEach((TruckInstance, i) => {
		if (TruckInstance.spawnSide === -1) {
			TruckInstance.moveRight();
		} else if (TruckInstance.spawnSide === 1) {
			TruckInstance.updateScaleX(-1);
			TruckInstance.moveLeft();
		}
		//remove Trucks
		if (TruckInstance.positionX === 140 || TruckInstance.positionX === -140) {
			TruckInstance.newElement.remove();
			TruckArray.splice(i, 1);
		}
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

setInterval(createTruck, 15);

function createCar() {
	CarArray.forEach((CarInstance, i) => {
		if (CarInstance.spawnSide === -1) {
			CarInstance.updateScaleX(-1);
			CarInstance.moveRight();
		} else if (CarInstance.spawnSide === 1) {
			CarInstance.moveLeft();
		}
		//remove Cars Left
		if (CarInstance.positionX === 140 || CarInstance.positionX === -140) {
			CarInstance.newElement.remove();
			CarArray.splice(i, 1);
		}
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

setInterval(createCar, 10);

//create points
setInterval(() => {
	const newPoint = new Point();
	pointArray.push(newPoint);
}, 3_100);

//appearance + disappearance of points + win condition
setInterval(() => {
	pointArray.forEach((pointInstance, i) => {
		pointInstance.moveRandom();
		if (
			pointInstance.positionX < 0 - pointInstance.width ||
			pointInstance.positionX > 100 + pointInstance.width ||
			pointInstance.positionY < 0 - pointInstance.height ||
			pointInstance.positionY > 100 + pointInstance.height
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

document.addEventListener('keydown', (e) => {
	switch (e.code) {
		case 'ArrowLeft':
		case 'KeyA':
			player.jumpEffect(`url('../images/frog_jump_W.png')`, 'W');
			player.moveLeft();
			player.playerElement.style.backgroundImage = `url('../images/frog_W.png')`;
			break;
		case 'KeyD':
		case 'ArrowRight':
			player.jumpEffect(`url('../images/frog_jump_E.png')`, 'E');
			player.moveRight();
			player.playerElement.style.backgroundImage = `url('../images/frog_E.png')`;
			break;
		case 'KeyW':
		case 'ArrowUp':
			player.jumpEffect(`url('../images/frog_jump.png')`);
			player.moveUp();
			player.updateScaleY(1);

			break;
		case 'KeyS':
		case 'ArrowDown':
			player.jumpEffect(`url('../images/frog_jump.png')`);
			player.moveDown();
			player.updateScaleY(-1);
			break;
		default:
			break;
	}
});

//goldenpoint
setInterval(() => {
	let positionArray = [6.5, 27.5, 48, 68.7, 89.4];
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
}, 3100);
setInterval(() => {
	if ((player.positionX < 1) & (player.positionY > 63)) {
		location.href = './game-over-page.html';
	} else if ((player.positionX > 96) & (player.positionY > 63)) {
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
