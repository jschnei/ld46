

define([], function() {
	var Tetris = Class.extend({

		init: function(cols, rows) {

			this.cols = cols;
			this.rows = rows;

			this.blockControl = [];

			this.reset();
		},

		reset: function() {

			this.frames = 1;

			// this.blockControl = [];
			// for (var i = 0; i < this.cols; i++) {
			// 	this.blockControl[i] = [];
			// 	for (var j = 0; j < this.rows; j++) {
			// 		this.blockControl[i][j] = new Block(Block.NONE);
			// 	}
			// }

			// this.setNextTetramino();
		},

		update: function(inpt) {
			// this.currentTetramino.setTo(this.blockControl, Block.NONE);

			// if (inpt.pressed("up")) {
			// 	this.moveRotate();
			// }
			// if (inpt.pressed("down")) {
			// 	this.moveDown();
			// }
			// if (inpt.pressed("left")) {
			// 	this.moveLeft();
			// }
			// if (inpt.pressed("right")) {
			// 	this.moveRight();
			// }
			// if (inpt.pressed("space")) {
			// 	this.hardDrop();
			// }

			// if (this.frames++ % 20 === 0) {
			// 	this.moveDown();
			// }

			// this.currentTetramino.setTo(this.blockControl);
		},

		draw: function(ctx) {
			ctx.beginPath();
			ctx.lineWidth = "4";
			ctx.strokeStyle = "green";
			ctx.rect(30, 30, 50, 50);
			ctx.stroke();

			// this.gameBoard.draw(ctx, this.stat);

			// for (var i = 0; i < this.cols; i++) {
			// 	for (var j = 0; j < this.rows; j++) {
			// 		var b = this.blockControl[i][j];
			// 		if (b.solid) {
			// 			this.gameBoard.drawBlock(ctx, b, i, j);
			// 		}
			// 	}
			// }
		}
	});


	return Tetris;

});