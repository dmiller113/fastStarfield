window.onload = function() {
	var starList = [];
	var canvas = document.getElementById("cvs");
	var ctx = canvas.getContext("2d");
	var starD = 8;

	var newStar = function(x, y, ratio) {
		ret = { x: x, y: y, ratio: ratio };
		ret.draw = function() {
			ctx.fillStyle = "white";
			sD = starD * this.ratio;
			sX = this.translate(this.x);
			sY = this.translate(this.y);
			ctx.fillRect(sX, sY, sD, sD);
		}

		ret.update = function() {
			this.ratio += 0.01;
			// if (this.ratio > 1.0) this.ratio = 0.1;
			sX = this.translate(this.x);
			sY = this.translate(this.y);

			if (sX > canvas.width || sX < 0) this.ratio = 0.1;
			if (sY > canvas.height || sY < 0) this.ratio = 0.1;
			if (this.ratio > 2.0) this.ratio = 0.1;
		}

		ret.translate = function(value) {
			return ((value - canvas.width / 2) *
				this.ratio + canvas.width / 2);
		}

		return ret;
	}

	for (var x = 0; x < 300; x++ ) {
		var nX = Math.floor(Math.random() * canvas.width);
		var nY = Math.floor(Math.random() * canvas.height);
		var nr = Math.random();

		starList.push(newStar(nX, nY, nr));
	}

        var interval = window.setInterval(function() {
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
			
		for (var i = 0; i < starList.length; i++ ) {
			starList[i].update();
			starList[i].draw();
		}
	}, 1000 / 30);
};
