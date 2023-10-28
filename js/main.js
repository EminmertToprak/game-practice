console.log('JS Loaded');

const player = new Player();
const hostileRArray = [];
const hostileLArray = [];

//create Hostiles
setInterval(() => {
	const newhostileR = new hostileR();
	const newhostileL = new hostileL();
	hostileRArray.push(newhostileR);
	hostileLArray.push(newhostileL);
}, 5000);

//appearance of Hostiles
setInterval(() => {
	hostileRArray.forEach((hostileRInstance) => {
		hostileRInstance.moveRight();
		//remove hostile Right
		if (hostileRInstance.positionX > 2000) {
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
		if (hostileLInstance.positionX < 0 - hostileLInstance.height) {
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
