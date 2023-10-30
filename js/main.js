const player = new Player();
const hostileRArray = [];
const hostileLArray = [];
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
}, 4000);

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

		if (logFromRightInstance.positionX < 0 - logFromRightArray.width) {
			logFromRightInstance.newLogFromRight.remove();
			logFromRightArray.shift();
		}
	});
}, 100);

//create Hostiles
setInterval(() => {
	const newhostileR = new hostileR();
	const newhostileL = new hostileL();
	hostileRArray.push(newhostileR);
	hostileLArray.push(newhostileL);
}, 1000);
//movement + disappearance of Hostiles + game over
setInterval(() => {
	hostileRArray.forEach((hostileRInstance) => {
		hostileRInstance.moveRight();
		//remove hostile Right
		if (hostileRInstance.positionX > 100) {
			hostileRInstance.newhostileR.remove();
			hostileRArray.shift();
		}
		if (
			player.positionX < hostileRInstance.positionX + hostileRInstance.width &&
			player.positionX + player.width > hostileRInstance.positionX &&
			player.positionY < hostileRInstance.positionY + hostileRInstance.height &&
			player.positionY + player.height > hostileRInstance.positionY
		) {
			location.href = './game-over-page.html';
		}
	});
	hostileLArray.forEach((hostileLInstance) => {
		hostileLInstance.moveLeft();
		//remove hostile Left
		if (hostileLInstance.positionX < 0 - hostileLInstance.width) {
			hostileLInstance.newhostileL.remove();
			hostileLArray.shift();
		}
		if (
			player.positionX < hostileLInstance.positionX + hostileLInstance.width &&
			player.positionX + player.width > hostileLInstance.positionX &&
			player.positionY < hostileLInstance.positionY + hostileLInstance.height &&
			player.positionY + player.height > hostileLInstance.positionY
		) {
			location.href = './game-over-page.html';
		}
		if (player.positionY === 94) {
			location.href = './win-page.html';
		}
	});
}, 25);

//create points
setInterval(() => {
	const newPoint = new Point();
	pointArray.push(newPoint);
}, 5000);

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
