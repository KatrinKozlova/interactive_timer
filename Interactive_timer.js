window.addEventListener('DOMContentLoaded', function() {

	'use strict';

    let deadline = '2020-06-19';

//time interval between the present and the deadline
	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor((t/1000) % 60),
			minutes = Math.floor((t/1000/60) % 60),
			hours = Math.floor((t/(1000*60*60)));
			//hours left (t/1000/60/60)%24
			//amount of days t/(1000*60*60*24)

		return {
			'total' : t,
			'hours' : hours,
			'minutes' : minutes,
			'seconds' : seconds
		};
    }
    
//turns a static layout into a dynamic one, sets and starts the clock
	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds'),
			timeInterval = setInterval(updateClock, 1000);

		function addZero(num) {
			if (num <= 9) {
				return '0' + num;
			} else {
				return num;
			}
		}

		//update and run every second
		function updateClock() {
			let t = getTimeRemaining(endtime);
			hours.textContent = addZero(t.hours);
			minutes.textContent = addZero(t.minutes);
			seconds.textContent = addZero(t.seconds);

		//when the timer stops
		if (t.total <= 0) {
			clearInterval(timeInterval);
			hours.textContent = '00';
			minutes.textContent = '00';
			seconds.textContent = '00';
		}

		}
	}

	setClock('timer',deadline);
});