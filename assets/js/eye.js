
// const eye = {};
// const n_eye = document.querySelector(".eye");
// const n_iris = n_eye.querySelector(".iris");
// const size = n_eye.clientWidth;
// const container = document.querySelector('.eye-container');

// (window.onresize = () => {
// 	eye.x = n_eye.offsetLeft + size / 2;
// 	eye.y = n_eye.offsetTop + size / 2;
// })();

// window.onmouseout = window.onmouseleave = () => {
// 	n_iris.setAttribute("class", "iris anim");
// }

// window.ontouchend = e => {
// 	if (e.touches.length == 0) window.onmouseout();
// }

// window.onmousemove = e => {
// 	n_iris.setAttribute("class", "iris");
// 	const m = {
// 		x: e.clientX - eye.x,
// 		y: e.clientY - eye.y
// 	};
// 	const dist = Math.min(60, Math.max(-60, Math.sqrt(m.x**2 + m.y**2) / 6));
// 	const dir = Math.atan2(m.x, m.y);
// 	m.rx = dist * -Math.cos(dir);
// 	m.ry = dist * Math.sin(dir);
// 	n_iris.style.transform = `rotateX(${m.rx}deg) rotateY(${m.ry}deg) translateZ(68px) scale(0.6)`;
// }

// window.ontouchmove = window.ontouchstart = e => window.onmousemove(e.touches[0])










const eye = {};
const eyeContainer = document.querySelector('.eye-container');
const n_eye = document.querySelector(".eye");
const n_iris = n_eye.querySelector(".iris");
const size = n_eye.clientWidth;

(eyeContainer.onresize = () => {
	eye.x = n_eye.offsetLeft + size / 2;
	eye.y = n_eye.offsetTop + size / 2;
})();

eyeContainer.onmouseout = eyeContainer.onmouseleave = () => {
	n_iris.setAttribute("class", "iris anim");
}

eyeContainer.ontouchend = e => {
	if (e.touches.length == 0) eyeContainer.onmouseout();
}

eyeContainer.onmousemove = e => {
	n_iris.setAttribute("class", "iris");
	const m = {
		x: e.clientX - eye.x,
		y: e.clientY - eye.y
	};
	console.log(m)
	const dist = Math.min(60, Math.max(-60, Math.sqrt(m.x**2 + m.y**2) / 6));
	const dir = Math.atan2(m.x, m.y);
	m.rx = dist * -Math.cos(dir);
	m.ry = dist * Math.sin(dir);
	n_iris.style.transform = `rotateX(${m.rx}deg) rotateY(${m.ry}deg) translateZ(68px) scale(0.6)`;
}

eyeContainer.ontouchmove = eyeContainer.ontouchstart = e => eyeContainer.onmousemove(e.touches[0])
