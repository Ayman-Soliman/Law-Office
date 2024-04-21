
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