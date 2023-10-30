const player = new Player();
const TruckArray = [];
const CarArray = [];
const logFromLeftArray = [];
const logFromRightArray = [];
const pointArray = [];
let bonusPoints = 0;

//create Logs
setInterval(() => {
	const newLogFromLeft = new LogFromLeft();
	const newLogFromRight = new LogFromRight();
	logFromLeftArray.push(newLogFromLeft);
	logFromRightArray.push(newLogFromRight);
}, 5000);

//movement + disappearance of Logs
setInterval(() => {
	logFromLeftArray.forEach((logFromLeftInstance) => {
		logFromLeftInstance.moveRight();
		if (logFromLeftInstance.positionX > 100) {
			logFromLeftInstance.newLogFromLeft.remove();
			logFromLeftArray.shift();
		}
	});
	logFromRightArray.forEach((logFromRightInstance) => {
		logFromRightInstance.moveLeft();

		if (logFromRightInstance.positionX < 0 - logFromRightInstance.width) {
			logFromRightInstance.newLogFromRight.remove();
			logFromRightArray.shift();
		}
	});
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
	});
}, 50);

//create points
setInterval(() => {
	const newPoint = new Point();
	pointArray.push(newPoint);
}, 4000);

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
			pointArray.shift();
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
