const player = new Player();
const TruckArray = [];
const CarArray = [];
const logFromLeftArray = [];
const logFromRightArray = [];
const pointArray = [];
let bonusPoints = 0;

//create Logs

setInterval(() => {
	let x = 67;
	const newLogFromLeft = new LogFromLeft(x);
	const newLogFromRight = new LogFromRight(x + 4);
	const newLogFromLeft2 = new LogFromLeft(x + 8);
	const newLogFromRight2 = new LogFromRight(x + 12);
	const newLogFromLeft3 = new LogFromLeft(x + 16);
	logFromLeftArray.push(newLogFromLeft, newLogFromLeft2, newLogFromLeft3);
	logFromRightArray.push(newLogFromRight, newLogFromRight2);
}, 4000);

//movement + disappearance of Logs + frog stucks to logs
setInterval(() => {
	logFromLeftArray.forEach((logFromLeftInstance) => {
		logFromLeftInstance.moveRight();
		if (logFromLeftInstance.positionX > 100) {
			logFromLeftInstance.newLogFromLeft.remove();
			logFromLeftArray.shift();
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
	logFromRightArray.forEach((logFromRightInstance) => {
		logFromRightInstance.moveLeft();

		if (logFromRightInstance.positionX < 0 - logFromRightInstance.width) {
			logFromRightInstance.newLogFromRight.remove();
			logFromRightArray.shift();
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
	// if (
	// 	player.positionY > 63 &&
	// 	player.positionX >
	// 		logFromRightInstance.positionX +
	// 			logFromRightInstance.width -
	// 			player.width &&
	// 	player.positionX + player.width <
	// 		logFromRightInstance.positionX + player.width / 2 &&
	// 	player.positionY + player.height / 1.5 >
	// 		logFromRightInstance.positionY + logFromRightInstance.height &&
	// 	player.positionY + player.height / 1.5 < logFromRightInstance.positionY &&
	// 	player.positionX >
	// 		logFromLeftInstance.positionX +
	// 			logFromLeftInstance.width -
	// 			player.width &&
	// 	player.positionX + player.width <
	// 		logFromLeftInstance.positionX + player.width / 2 &&
	// 	player.positionY + player.height / 1.5 >
	// 		logFromLeftInstance.positionY + logFromLeftInstance.height &&
	// 	player.positionY + player.height / 1.5 < logFromLeftInstance.positionY
	// ) {
	// 	location.href = './game-over-page.html';
	// }
}, 100);

//create Hostiles
setInterval(() => {
	const newTruck = new Truck();
	const newCar = new Car();
	TruckArray.push(newTruck);
	CarArray.push(newCar);
}, 4000);
//movement + disappearance of Hostiles + game over
setInterval(() => {
	TruckArray.forEach((TruckInstance) => {
		TruckInstance.moveRight();
		//remove hostile Right
		if (TruckInstance.positionX > 100) {
			TruckInstance.newTruck.remove();
			TruckArray.shift();
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
	CarArray.forEach((CarInstance) => {
		CarInstance.moveLeft();
		//remove hostile Left
		if (CarInstance.positionX < 0 - CarInstance.width) {
			CarInstance.newCar.remove();
			CarArray.shift();
		}
		if (
			player.positionX < CarInstance.positionX + CarInstance.width &&
			player.positionX + player.width > CarInstance.positionX &&
			player.positionY < CarInstance.positionY + CarInstance.height &&
			player.positionY + player.height > CarInstance.positionY
		) {
			location.href = './game-over-page.html';
		}
		if (player.positionY === 94) {
			location.href = './win-page.html';
		}
		if (
			(player.positionX === 0) & (player.positionY > 63) ||
			(player.positionX === 97) & (player.positionY > 63)
		) {
			location.href = './game-over-page.html';
		}
	});
}, 50);

//create points
setInterval(() => {
	const newPoint = new Point();
	pointArray.push(newPoint);
}, 5_000);

//appearance + disappearance of points
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

document.addEventListener('keydown', (e) => {
	switch (e.code) {
		case 'ArrowLeft':
		case 'KeyA':
			player.moveLeft();
			break;
		case 'KeyD':
		case 'ArrowRight':
			player.moveRight();
			break;
		case 'KeyW':
		case 'ArrowUp':
			player.moveUp();
			break;
		case 'KeyS':
		case 'ArrowDown':
			player.moveDown();
			break;
		default:
			break;
	}
});
