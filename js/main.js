const player = new Player();
// const randomer = Math.floor(Math.random() * 100);
// const goldenPoint = new GoldenPoint(randomer);
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
	const newLogFromRight3 = new LogFromRight(x + 20);
	logFromLeftArray.push(newLogFromLeft, newLogFromLeft2, newLogFromLeft3);
	logFromRightArray.push(newLogFromRight, newLogFromRight2, newLogFromRight3);
}, 4000);

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
			player.positionY + player.height / 1.5 < logFromLeftInstance + height &&
			player.positionY + player.height / 1.5 > logFromLeftInstance.positionY
		) {
			player.moveLeftOnLog();
		}
	});
}, 50);

//create Cars
setInterval(() => {
	let newTruckRandomer = Math.floor(Math.random() * (11 - 1) + 1);
	let newTruckRandomer2 = Math.floor(Math.random() * (59 - 47) + 47);
	let newCarRandomer = Math.floor(Math.random() * (46 - 35) + 35);
	let newCarRandomer2 = Math.floor(Math.random() * (33 - 12) + 12);
	const newTruck = new Truck(-24, 8, -1);
	const newTruck2 = new Truck(124, 54, 1);
	const newCar = new Car(100, 37, 1);
	const newCar2 = new Car(-13, 18, -1);
	TruckArray.push(newTruck, newTruck2);
	CarArray.push(newCar, newCar2);
}, 4000);
//movement + disappearance of Trucks + game over
setInterval(() => {
	TruckArray.forEach((TruckInstance, i) => {
		if (TruckInstance.spawnSide === -1) {
			TruckInstance.moveRight();
		} else if (TruckInstance.spawnSide === 1) {
			TruckInstance.updateScaleX(-1);
			TruckInstance.moveLeft();
		}
		//remove Trucks
		if (TruckInstance.positionX === 140 || TruckInstance.positionX === -140) {
			TruckInstance.newTruck.remove();
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
	CarArray.forEach((CarInstance, i) => {
		if (CarInstance.spawnSide === -1) {
			CarInstance.updateScaleX(-1);
			CarInstance.moveRight();
		} else if (CarInstance.spawnSide === 1) {
			CarInstance.moveLeft();
		}
		//remove Cars Left
		if (CarInstance.positionX === 140 || CarInstance.positionX === -140) {
			CarInstance.newCar.remove();
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
		if (
			(player.positionX === 0) & (player.positionY > 63) ||
			(player.positionX === 97) & (player.positionY > 63)
		) {
			location.href = './game-over-page.html';
		}
	});
}, 30);

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
			player.jumpEffect();
			player.moveLeft();
			break;
		case 'KeyD':
		case 'ArrowRight':
			player.jumpEffect();
			player.moveRight();
			this.playerElement.style.backgroundImage = `url('../images/frog_W.png')`;
			break;
		case 'KeyW':
		case 'ArrowUp':
			player.jumpEffect();
			player.moveUp();
			player.updateScaleY(1);

			break;
		case 'KeyS':
		case 'ArrowDown':
			player.jumpEffect();
			player.moveDown();
			player.updateScaleY(-1);
			break;
		default:
			break;
	}
});

if (
	player.positionX < goldenPoint.positionX + goldenPoint.width &&
	player.positionX + player.width > goldenPoint.positionX &&
	player.positionY < goldenPoint.positionY + goldenPoint.height &&
	player.positionY + player.height > goldenPoint.positionY
) {
	location.href = './win-page.html';
}
