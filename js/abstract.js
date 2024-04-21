//#region first canvas
const Stage = canvas => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	const ctx = canvas.getContext('2d');
	let tickCount = 0;

	return {
		set reset(func) {
			this._reset = func;
		},
		get reset() {
			return this._reset;
		},
		set tick(func) {
			this._tick = func;
		},
		get tick() {
			return this._tick;
		},
		get ctx() {
			return ctx;
		},
		get width() {
			return canvas.width;
		},
		get height() {
			return canvas.height;
		},
		get tickCount() {
			return tickCount;
		},
		get horizontalMove() {
			return tickCount % this.width;
		},
		get verticalMove() {
			return tickCount % this.height;
		},
		get verticalMid() {
			return Math.ceil(this.height / 2);
		},
		get horizontalMid() {
			return Math.ceil(this.width / 2);
		},
		widthLoop(func, step = 1) {
			for(let widthPoint = 0; widthPoint < stage.width; widthPoint += step) {
				func({x: widthPoint});
			}
		},
		render() {
			requestAnimationFrame(() => {
				this.reset.call(undefined, stage);
				this.tick.call(undefined, this)
				this.render();
			});
			tickCount++;
		}
	};
};

const stage = Stage(document.querySelector('canvas.first-canvas'));

stage.reset = stage => {
	stage.ctx.clearRect(0, 0, stage.width, stage.height);
	stage.ctx.fillStyle = '#00000000';
	stage.ctx.fillRect(0, 0, stage.width, stage.height);
};

stage.tick = stage => {
	stage.ctx.fillStyle = 'white';
	stage.widthLoop(({x}) => {
		const slowDown = 100;

		// stage.ctx.fillStyle = `hsl(${stage.tickCount % 254}, 60%, 60%)`;
		stage.ctx.fillStyle = `rgb(20%, 20%, 40%)`;
		for (let separator = 50; separator < 200; separator += 50) {
			stage.ctx.fillRect(x, stage.verticalMid + Math.sin(x * .01 + (stage.tickCount / slowDown + separator) % 255) * (Math.sin(stage.tickCount / slowDown % 125) * separator), 1, 1);
		}
	}, 1);
};

stage.render();
//#endregion first canvas




//#region second canvas
const Stage1 = canvas => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	const ctx = canvas.getContext('2d');
	let tickCount = 0;

	return {
		set reset(func) {
			this._reset = func;
		},
		get reset() {
			return this._reset;
		},
		set tick(func) {
			this._tick = func;
		},
		get tick() {
			return this._tick;
		},
		get ctx() {
			return ctx;
		},
		get width() {
			return canvas.width;
		},
		get height() {
			return canvas.height;
		},
		get tickCount() {
			return tickCount;
		},
		get horizontalMove() {
			return tickCount % this.width;
		},
		get verticalMove() {
			return tickCount % this.height;
		},
		get verticalMid() {
			return Math.ceil(this.height / 2);
		},
		get horizontalMid() {
			return Math.ceil(this.width / 2);
		},
		widthLoop(func, step = 1) {
			for(let widthPoint = 0; widthPoint < stage1.width; widthPoint += step) {
				func({x: widthPoint});
			}
		},
		render() {
			requestAnimationFrame(() => {
				this.reset.call(undefined, stage1);
				this.tick.call(undefined, this)
				this.render();
			});
			tickCount++;
		}
	};
};

const stage1 = Stage1(document.querySelector('canvas.second-canvas'));

stage1.reset = stage1 => {
	stage1.ctx.clearRect(0, 0, stage1.width, stage1.height);
	stage1.ctx.fillStyle = '#00000000';
	stage1.ctx.fillRect(0, 0, stage1.width, stage1.height);
};

stage1.tick = stage1 => {
	stage1.ctx.fillStyle = 'white';
	stage1.widthLoop(({x}) => {
		const slowDown = 100;

		// stage1.ctx.fillStyle = `hsl(${stage1.tickCount % 254}, 60%, 60%)`;
		stage1.ctx.fillStyle = `rgb(20%, 20%, 40%)`;
		for (let separator = 50; separator < 200; separator += 50) {
			stage1.ctx.fillRect(x, stage1.verticalMid + Math.sin(x * .01 + (stage1.tickCount / slowDown + separator) % 255) * (Math.sin(stage1.tickCount / slowDown % 125) * separator), 1, 1);
		}
	}, 1);
};

stage1.render();
//#endregion second canvas


//#region third canvas
const Stage2 = canvas => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	const ctx = canvas.getContext('2d');
	let tickCount = 0;

	return {
		set reset(func) {
			this._reset = func;
		},
		get reset() {
			return this._reset;
		},
		set tick(func) {
			this._tick = func;
		},
		get tick() {
			return this._tick;
		},
		get ctx() {
			return ctx;
		},
		get width() {
			return canvas.width;
		},
		get height() {
			return canvas.height;
		},
		get tickCount() {
			return tickCount;
		},
		get horizontalMove() {
			return tickCount % this.width;
		},
		get verticalMove() {
			return tickCount % this.height;
		},
		get verticalMid() {
			return Math.ceil(this.height / 2);
		},
		get horizontalMid() {
			return Math.ceil(this.width / 2);
		},
		widthLoop(func, step = 1) {
			for(let widthPoint = 0; widthPoint < stage2.width; widthPoint += step) {
				func({x: widthPoint});
			}
		},
		render() {
			requestAnimationFrame(() => {
				this.reset.call(undefined, stage2);
				this.tick.call(undefined, this)
				this.render();
			});
			tickCount++;
		}
	};
};

const stage2 = Stage2(document.querySelector('canvas.third-canvas'));

stage2.reset = stage2 => {
	stage2.ctx.clearRect(0, 0, stage2.width, stage2.height);
	stage2.ctx.fillStyle = '#00000000';
	stage2.ctx.fillRect(0, 0, stage2.width, stage2.height);
};

stage2.tick = stage2 => {
	stage2.ctx.fillStyle = 'white';
	stage2.widthLoop(({x}) => {
		const slowDown = 100;

		// stage2.ctx.fillStyle = `hsl(${stage2.tickCount % 254}, 60%, 60%)`;
		stage2.ctx.fillStyle = `rgb(20%, 20%, 40%)`;
		for (let separator = 50; separator < 200; separator += 50) {
			stage2.ctx.fillRect(x, stage2.verticalMid + Math.sin(x * .01 + (stage2.tickCount / slowDown + separator) % 255) * (Math.sin(stage2.tickCount / slowDown % 125) * separator), 1, 1);
		}
	}, 1);
};

stage2.render();
//#endregion third canvas

//#region fourth canvas
const Stage3 = canvas => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	const ctx = canvas.getContext('2d');
	let tickCount = 0;

	return {
		set reset(func) {
			this._reset = func;
		},
		get reset() {
			return this._reset;
		},
		set tick(func) {
			this._tick = func;
		},
		get tick() {
			return this._tick;
		},
		get ctx() {
			return ctx;
		},
		get width() {
			return canvas.width;
		},
		get height() {
			return canvas.height;
		},
		get tickCount() {
			return tickCount;
		},
		get horizontalMove() {
			return tickCount % this.width;
		},
		get verticalMove() {
			return tickCount % this.height;
		},
		get verticalMid() {
			return Math.ceil(this.height / 2);
		},
		get horizontalMid() {
			return Math.ceil(this.width / 2);
		},
		widthLoop(func, step = 1) {
			for(let widthPoint = 0; widthPoint < stage3.width; widthPoint += step) {
				func({x: widthPoint});
			}
		},
		render() {
			requestAnimationFrame(() => {
				this.reset.call(undefined, stage3);
				this.tick.call(undefined, this)
				this.render();
			});
			tickCount++;
		}
	};
};

const stage3 = Stage3(document.querySelector('canvas.fourth-canvas'));

stage3.reset = stage3 => {
	stage3.ctx.clearRect(0, 0, stage3.width, stage3.height);
	stage3.ctx.fillStyle = '#00000000';
	stage3.ctx.fillRect(0, 0, stage3.width, stage3.height);
};

stage3.tick = stage3 => {
	stage3.ctx.fillStyle = 'white';
	stage3.widthLoop(({x}) => {
		const slowDown = 100;

		// stage3.ctx.fillStyle = `hsl(${stage3.tickCount % 254}, 60%, 60%)`;
		stage3.ctx.fillStyle = `rgb(20%, 20%, 40%)`;
		for (let separator = 50; separator < 200; separator += 50) {
			stage3.ctx.fillRect(x, stage3.verticalMid + Math.sin(x * .01 + (stage3.tickCount / slowDown + separator) % 255) * (Math.sin(stage3.tickCount / slowDown % 125) * separator), 1, 1);
		}
	}, 1);
};

stage3.render();
//#endregion fourth canvas

//#region fifth canvas
const Stage4 = canvas => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	const ctx = canvas.getContext('2d');
	let tickCount = 0;

	return {
		set reset(func) {
			this._reset = func;
		},
		get reset() {
			return this._reset;
		},
		set tick(func) {
			this._tick = func;
		},
		get tick() {
			return this._tick;
		},
		get ctx() {
			return ctx;
		},
		get width() {
			return canvas.width;
		},
		get height() {
			return canvas.height;
		},
		get tickCount() {
			return tickCount;
		},
		get horizontalMove() {
			return tickCount % this.width;
		},
		get verticalMove() {
			return tickCount % this.height;
		},
		get verticalMid() {
			return Math.ceil(this.height / 2);
		},
		get horizontalMid() {
			return Math.ceil(this.width / 2);
		},
		widthLoop(func, step = 1) {
			for(let widthPoint = 0; widthPoint < stage4.width; widthPoint += step) {
				func({x: widthPoint});
			}
		},
		render() {
			requestAnimationFrame(() => {
				this.reset.call(undefined, stage4);
				this.tick.call(undefined, this)
				this.render();
			});
			tickCount++;
		}
	};
};

const stage4 = Stage4(document.querySelector('canvas.fifth-canvas'));

stage4.reset = stage4 => {
	stage4.ctx.clearRect(0, 0, stage4.width, stage4.height);
	stage4.ctx.fillStyle = '#00000000';
	stage4.ctx.fillRect(0, 0, stage4.width, stage4.height);
};

stage4.tick = stage4 => {
	stage4.ctx.fillStyle = 'white';
	stage4.widthLoop(({x}) => {
		const slowDown = 100;

		// stage4.ctx.fillStyle = `hsl(${stage4.tickCount % 254}, 60%, 60%)`;
		stage4.ctx.fillStyle = `rgb(20%, 20%, 40%)`;
		for (let separator = 50; separator < 200; separator += 50) {
			stage4.ctx.fillRect(x, stage4.verticalMid + Math.sin(x * .01 + (stage4.tickCount / slowDown + separator) % 255) * (Math.sin(stage4.tickCount / slowDown % 125) * separator), 1, 1);
		}
	}, 1);
};

stage4.render();
//#endregion fifth canvas