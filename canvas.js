		//Create Canvases
		var c = document.getElementById("map");
		var r = document.getElementById("rightBar");
		var l = document.getElementById("leftBar");
		var ctx = c.getContext("2d");
		var rtx = r.getContext("2d");
		var ltx = l.getContext("2d");
		//Scaling for high dpi canvas
		const devZoom = window.devicePixelRatio;
		const scale = Math.round(10 * (screen.width * devZoom/1920) * (screen.height * devZoom/1080))/10;
		const pScale = Math.round(100*(screen.width/1920))/100;
		r.width *= pScale;
		r.height *= pScale;
		l.width *= pScale;	
		l.height *= pScale;
		c.width *= pScale;
		c.height *= pScale;
		c.style.height = "" + c.height + "px";
		c.style.width = "" + c.width + "px";
		r.style.height = "" + r.height + "px";
		r.style.width = "" + r.width + "px";
		l.style.height = "" + l.height + "px";
		l.style.width = "" + l.width + "px";
		r.width *= scale;
		r.height *= scale;
		l.width *= scale;
		l.height *= scale;
		c.width *= scale;
		c.height *= scale;
		rtx.scale(scale, scale);
		ctx.scale(scale, scale);	
		ltx.scale(scale, scale);
		c.style.left = 10 + l.offsetLeft + l.width/scale + "px";
		r.style.left = 10 + c.offsetLeft + c.width/scale + "px";
		//Create Map
		function setMapDSize(w, h)
		{
			c.style.width = "" + w +"px";
			c.style.height = "" + h +"px";
			
			c.width = w;
			c.height = h;
			ctx.scale(scale, scale);
		}
		