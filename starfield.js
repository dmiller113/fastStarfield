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
			sX = ((this.x - canvas.width / 2) * 
				this.ratio + canvas.width / 2);
			sY = ((this.y - canvas.height / 2) * 
				this.ratio + canvas.height / 2);
			ctx.fillRect(sX, sY, sD, sD);
		}

		ret.update = function() {
			this.ratio += 0.01;
			if (this.ratio > 1.0) this.ratio = 0.1;
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
