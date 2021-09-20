// 51. JSON формат передачи данных, глубокое клонирование

'use strict';

const persone = {
	name: 'Alex',
	tel: '+8066543210',
	parents: {
		mom: 'mom',
		dad: 'Father'
	}
};

const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'Ann'
console.log(persone);
console.log(clone);


// 52. AJAX и общение с сервером

const inputUAH = document.querySelector('#uah'),
			inputUSD = document.querySelector('#usd')

inputUAH.addEventListener('input',  () => {
	const request = new XMLHttpRequest();

	request.open('GET', '/current1.json');
	request.setRequestHeader('Content-type', 'application/json: charset=utf-8');
	request.send();
	
	request.addEventListener('load', () => {
		if (request.status === 200 ) {
			const data = JSON.parse(request.response)
			inputUSD.value = (+inputUAH.value / data.current.usd).toFixed(2);
		} else {
			inputUSD.value = "что-то пошло не так..."
		}
	})
	// status
	// StatusText
	// response
	// readyState
})

