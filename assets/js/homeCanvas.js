'use strict'
const canvas = document.querySelector(".home-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const Particles_array =[];
let hue = 0;


			//make canvas responsive
window.addEventListener('resize', ()=>{
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;	
})
// -----------------------------------

const mouse = { x: undefined, y: undefined};

document.addEventListener("mousemove", (event)=>{
	mouse.x = event.x;
	mouse.y = event.y;

	for(let i = 0; i<5; i++) Particles_array.push(new Particle());
})
document.addEventListener("touchmove", (event)=>{
	mouse.x = event.x;
	mouse.y = event.y;

	for(let i = 0; i<5; i++) Particles_array.push(new Particle());
})
// document.ontouchmove = document.ontouchstart = e => document.onmousemove(e.touches[0])


class Particle {
	constructor(){
		this.x= mouse.x;
		this.y= mouse.y;
		this.size = Math.random() * 15+1;
		this.speedX = Math.random() * 3 -1.5; //random btw 1.5 and -1.5
		this.speedY = Math.random() * 3 -1.5;
		this.color = `hsl(${hue}, 100%, 50%)`;
	}
	
				// Methods
	update(){
		this.x += this.speedX;	
		this.y += this.speedY;
		if(this.size > .2) this.size-=.1;
	}
	draw(){
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2 );
		ctx.fill()
		ctx.closePath();
	}
}

animate();




function handleParticles(){
	for(let i=0; i<Particles_array.length; i++){
		Particles_array[i].update();
		Particles_array[i].draw();

		if(Particles_array[i].size<=.3){
			Particles_array.splice(i,1);
			i--;
		}		
	}
}

function animate(){
	// ctx.clearRect(0,0, canvas.width, canvas.height);
	ctx.fillStyle= 'rgba(0,0,0,.1)';
	ctx.fillRect(0,0, canvas.width, canvas.height);
	handleParticles();
	hue = hue+5;
	requestAnimationFrame(animate);
}




