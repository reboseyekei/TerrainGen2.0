var cHeight = c.height/scale;
var cWidth = c.width/scale;
function drawWetness(){
	//setMapDSize(MAPSIZE, MAPSIZE);
	ctx.clearRect(0, 0, MAPSIZE, MAPSIZE);
	var lastElev = -1;
	var rgbGrass;
	var rgbBeach;
	for(i = 0; i < MAPSIZE; i++){
		for(j = 0; j < MAPSIZE; j++){
			if(map[i][j].wetness <= 0){
				ctx.fillStyle = "white";
			}
			else if(map[i][j].wetness <= .05){
				ctx.fillStyle = "tan";
			}
			else if(map[i][j].wetness <= .1){
				ctx.fillStyle = "olive";
			}
			else if(map[i][j].wetness <= .5){
				ctx.fillStyle = "lightgreen";
			}
			else if(map[i][j].wetness <= 1){
				ctx.fillStyle = "green";
			}
			else if(map[i][j].wetness <= 5){
				ctx.fillStyle = "purple";
			}
			else{
				ctx.fillStyle = "blue";
			}
			ctx.fillRect(j*1, i*1, 1, 1);
		}
	}
}
function drawCurrents(){
	//setMapDSize(2*MAPSIZE, 2*MAPSIZE);
	ctx.clearRect(0, 0, 2*MAPSIZE, 2*MAPSIZE);
	var lastElev = -1;
	var rgbGrass;
	var rgbBeach;
	for(i = 0; i < MAPSIZE; i++){
		for(j = 0; j < MAPSIZE; j++){
			if(map[i][j].type == 'w'){
				ctx.fillStyle = "grey";
			}
			else{
				if(map[i][j].curred == 0){
					ctx.fillStyle = "white";
				}
				else if(map[i][j].curred <= .1){
					ctx.fillStyle = "tan";
				}
				else if(map[i][j].curred <= .5){
					ctx.fillStyle = "olive";
				}
				else if(map[i][j].curred <= 1){
					ctx.fillStyle = "lightgreen";
				}
				else if(map[i][j].curred <= 4){
					ctx.fillStyle = "green";
				}
				else if(map[i][j].curred <= 8){
					ctx.fillStyle = "purple";
				}
				else{
					ctx.fillStyle = "blue";
				}
			}
			ctx.fillRect(j*2, i*2, 2, 2);
		}
	}
}
function drawHeat(){
	ctx.clearRect(0, 0, cHeight, cWidth);
	cWidth = MAPSIZE;
	cHeight = MAPSIZE;
	var lastElev = -1;
	var rgbGrass;
	var rgbBeach;
	for(i = 0; i < MAPSIZE; i++){
		for(j = 0; j < MAPSIZE; j++){
			if(map[i][j].heat <= 0.5){
				ctx.fillStyle = "white";
			}
			else if(map[i][j].heat <= .75){
				ctx.fillStyle = "tan";
			}
			else if(map[i][j].heat <= 1){
				ctx.fillStyle = "olive";
			}
			else if(map[i][j].heat <= 1.5){
				ctx.fillStyle = "yellow";
			}
			else if(map[i][j].heat <= 2){
				ctx.fillStyle = "orange";
			}
			else if(map[i][j].heat <= 3){
				ctx.fillStyle = "red";
			}
			else{
				ctx.fillStyle = "blue";
			}
			ctx.fillRect(j*1, i*1, 1, 1);
		}
	}
}
function drawElevationMap(){
	ctx.clearRect(0, 0, cHeight, cWidth);
	//setMapDSize(MAPSIZE, MAPSIZE);
	var lastElev = -1;
	var rgbGrass;
	var rgbBeach;
	for(i = 0; i < MAPSIZE; i++){
		for(j = 0; j < MAPSIZE; j++){
			if(map[i][j].elevation != lastElev){
				rgbGrass = (Math.floor((map[i][j].elevation * 200)));
				rgbBeach = 200 - (Math.floor((map[i][j].elevation * 100)));
				if(map[i][j].elevation <= 0){
					ctx.fillStyle = "blue";
				}
				else if(map[i][j].elevation < .05){
					ctx.fillStyle = "tan";
				}
				else if(map[i][j].elevation <= .1){
					ctx.fillStyle = "lightgreen";
				}
				else if(map[i][j].elevation <= .25){
					ctx.fillStyle = "green";
				}
				else if(map[i][j].elevation <= 0.4){
					ctx.fillStyle = "darkgreen";
				}	
				else if(map[i][j].elevation <= 0.6){
					ctx.fillStyle = "olive";
				}
				else if(map[i][j].elevation <= .8){
					ctx.fillStyle = "black";
				}
				else if(map[i][j].elevation <= 0.9){
					ctx.fillStyle = "grey";
				}
				else{
					ctx.fillStyle = "rgb(255, 255, 255)";
				}
				lastElev = map[i][j].elevation;
			}
			ctx.fillRect(j*1, i*1, 1, 1);
		}
	}
}
function drawEntireMap(){
	//setMapDSize(MAPSIZE, MAPSIZE);
	ctx.clearRect(0, 0, MAPSIZE, MAPSIZE);
	for(i = 0; i < MAPSIZE; i++){
		for(j = 0; j < MAPSIZE; j++){
			switch(map[i][j].type){
				case 'w': ctx.fillStyle = "blue"; break;
				case 'r': ctx.fillStyle = "rgb(0, 106, 220)"; break;
				case 'g': ctx.fillStyle = "mediumseagreen"; break;
				case 's': ctx.fillStyle = "lightgreen"; break;
				case 'd': ctx.fillStyle = "tan"; break;
				case 'h': ctx.fillStyle = "olivedrab"; break;
				case 'm': ctx.fillStyle = "#B4B4B4"; break;
				case 'i': ctx.fillStyle = "#36a165"; break;
				case 'c': if(drawCoasts){ ctx.fillStyle = "tan";} else { ctx.fillStyle = "mediumseagreen";}  break;
				case 'f': ctx.fillStyle = "rgb(0, 80, 0)"; break;
				case 'l': ctx.fillStyle = "grey"; break;
				case 'p': ctx.fillStyle = "black"; break; //pit
				case 'e': ctx.fillStyle = "white"; break; //ice
				case 'n': ctx.fillStyle = "#EFFCFF"; break; //snow
				default:  ctx.fillStyle = "red"; break;
			}
			ctx.fillRect(j*1, i*1, 1, 1);
		}
	}
}
function drawZones(){
	ctx.clearRect(0, 0, cWidth, cHeight);
	//setMapDSize(cWidth, cHeight);
	for(i = 0; i < Math.ceil(cHeight/p.zoom); i++){
		for(j = 0; j < Math.ceil(cWidth/p.zoom); j++){
			var yLook = safeC(p.yView + i);
			var xLook = safeC(p.xView + j);
			switch(map[yLook][xLook].zone){
				case -1: if(map[yLook][xLook].elevation == 0){ ctx.fillStyle = "white";} else { ctx.fillStyle = "#B4B4B4" }; break;
				case 0:ctx.fillStyle = "#ABFF96"; break;
				case 1:ctx.fillStyle = "#BFFFAA"; break;
				case 2:ctx.fillStyle = "#D3FFBE"; break;
				case 3:ctx.fillStyle = "#E7FFD2"; break;
				default: ctx.fillStyle = "green"; break;
			}
			ctx.fillRect(Math.floor(j * p.zoom), Math.floor(i * p.zoom), p.zoom, p.zoom);
			if(map[yLook][xLook].owner == p.turn){
				ctx.fillStyle = p.color;
			}
			if(map[safeC(yLook + 1)][xLook].owner != map[yLook][xLook].owner){
				ctx.fillRect((j) * (p.zoom), (i+(5/6)) * (p.zoom), (p.zoom), (p.zoom)/6);
			}
			if(map[safeC(yLook - 1)][xLook].owner != map[yLook][xLook].owner){
				ctx.fillRect(j * (p.zoom), i * (p.zoom), (p.zoom), (p.zoom)/6);
			}
			if(map[yLook][safeC(xLook + 1)].owner != map[yLook][xLook].owner){
				ctx.fillRect((j+(5/6)) * (p.zoom), (i) * (p.zoom), (p.zoom)/6, (p.zoom));
			}
			if(map[yLook][safeC(xLook - 1)].owner != map[yLook][xLook].owner){
				ctx.fillRect(Math.floor(j * (p.zoom)), Math.floor(i * (p.zoom)), (p.zoom)/6, (p.zoom));
			}
		}
	}
}
function drawMap(){
	ctx.clearRect(0, 0, cWidth, cHeight);
	//setMapDSize(cWidth, cHeight);
	for(i = 0; i < Math.ceil(cHeight/p.zoom); i++){
		for(j = 0; j < Math.ceil(cWidth/p.zoom); j++){
			drawTile(p.yView + i, p.xView + j);
		}
	}
}
function drawTile(y1, x1){
	var y = safeC(y1);
	var x = safeC(x1);
	var dY = safeC(y1 - p.yView);
	var dX = safeC(x1 - p.xView);
	switch(map[y][x].type){
		case 'w': ctx.fillStyle = "blue"; break;
		case 'r': ctx.fillStyle = "rgb(0, 106, 220)"; break;
		case 'g': ctx.fillStyle = "mediumseagreen"; break;
		case 's': ctx.fillStyle = "lightgreen"; break;
		case 'd': ctx.fillStyle = "tan"; break;
		case 'h': ctx.fillStyle = "olivedrab"; break;
		case 'm': ctx.fillStyle = "#B4B4B4"; break;
		case 'i': ctx.fillStyle = "#36a165"; break;
		case 'c': if(drawCoasts){ ctx.fillStyle = "tan";} else { ctx.fillStyle = "mediumseagreen";}  break;
		case 'f': ctx.fillStyle = "rgb(0, 80, 0)"; break;
		case 'l': ctx.fillStyle = "grey"; break;
		case 'p': ctx.fillStyle = "black"; break; //pit
		case 'e': ctx.fillStyle = "white"; break; //ice
		case 'n': ctx.fillStyle = "#EFFCFF"; break; //snow
		default:  ctx.fillStyle = "red"; break;
	}
	if(map[y][x].travelQ > 0 && map[y][x].city == -1){
		ctx.fillStyle = "tan";
	}
	ctx.fillRect(Math.floor(dX * p.zoom), Math.floor(dY * p.zoom), p.zoom, p.zoom);
	if(map[y][x].owner == p.turn){
		ctx.fillStyle = p.color;
	}
	if(map[safeC(y + 1)][x].owner != map[y][x].owner){
		ctx.fillRect((dX) * (p.zoom), (dY+(5/6)) * (p.zoom), (p.zoom), (p.zoom)/6);
	}
	if(map[safeC(y - 1)][x].owner != map[y][x].owner){
		ctx.fillRect(dX * (p.zoom), dY * (p.zoom), (p.zoom), (p.zoom)/6);
	}
	if(map[y][safeC(x + 1)].owner != map[y][x].owner){
		ctx.fillRect((dX+(5/6)) * (p.zoom), (dY) * (p.zoom), (p.zoom)/6, (p.zoom));
	}
	if(map[y][safeC(x - 1)].owner != map[y][x].owner){
		ctx.fillRect(Math.floor(dX * (p.zoom)), Math.floor(dY * (p.zoom)), (p.zoom)/6, (p.zoom));
	}
	if(map[y][x].building[0] != -1){
		var girth = .4;
		if((map[y][x].building[0] == 0 || map[y][x].building[0] == 2) && map[y][x].building[1] <= 2*map[y][x].building[0]){
			var none = true;
			for(h = -1; h < 2; h+=2){
				var b0 = map[y][x].building[0];
				var b1 = map[y][x].building[1];
				var h0 = map[y][safeC(h+x)].building[0];
				var h1 = map[y][safeC(h+x)].building[1];
				if(h0 != -1 || (b0 == 2 && map[y][safeC(h+x)].elevation == 0)){
					if((h0 == b0  && h1 <= 1.5*b0 && b1 != 4) || (b0 == 2 && map[y][safeC(h+x)].elevation == 0) || (b0==0 && b1==0 && h0==2 && h1==3) || (b0==2 && ((b1==3 && h0==0 & h1==0) || (b1 == 4 && h0 == 2 && h1 == 4)))){ // l or r
						if(map[y][x].building[0] == 0){ ctx.fillStyle = "tan"; girth = .4; }
						else {
							switch(map[y][x].building[1]){
								case 0: ctx.fillStyle = "brown"; girth = .3; break;
								case 1: ctx.fillStyle = "DarkGray"; girth = .4;break;
								case 2: ctx.fillStyle = "Gray"; girth = .5; break;
								case 3: ctx.fillStyle = "Brown"; girth = .4; break;
								case 4: ctx.fillStyle = ctx.fillStyle = "rgb(0, 106, 220)"; girth = .3; break;
							}
						}
						none = false;
						ctx.fillRect((.5*(Math.ceil(h/2)) + dX) * p.zoom, (dY + (1-girth)/2)*p.zoom, p.zoom*.5, p.zoom*girth);
					}
				}
				var h0 = map[safeC(y+h)][x].building[0];
				var h1 = map[safeC(y+h)][x].building[1];
				if(h0 != -1 || (b0 == 2 && map[safeC(y+h)][x].elevation == 0)){
					if((h0 == b0  && h1 <= 1.5*b0 && b1 != 4) || (b0 == 2 && map[safeC(y+h)][x].elevation == 0) || (b0==0 && b1==0 && h0==2 && h1==3) || (b0==2 && ((b1==3 && h0==0 & h1==0) || (b1 == 4 && h0 == 2 && h1 == 4)))){ // u or d
						if(map[y][x].building[0] == 0){ ctx.fillStyle = "tan"; girth = .4; }
						else {
							switch(map[y][x].building[1]){
								case 0: ctx.fillStyle = "brown"; girth = .3; break;
								case 1: ctx.fillStyle = "DarkGray"; girth = .4;break;
								case 2: ctx.fillStyle = "Gray"; girth = .5; break;
								case 3: ctx.fillStyle = "Brown"; girth = .4; break;
								case 4: ctx.fillStyle = ctx.fillStyle = "rgb(0, 106, 220)"; girth = .3; break;
							}
						}
						none = false;
						ctx.fillRect((dX + (1-girth)/2)*p.zoom, (.5*(Math.ceil(h/2)) + dY) * p.zoom, p.zoom*girth, p.zoom*.5);
					}
				}
			}
			if(none){
				if(map[y][x].building[0] == 0){ ctx.fillStyle = "tan"; girth = .4;}
				else {
					switch(map[y][x].building[1]){
						case 0: ctx.fillStyle = "brown"; girth = .3; break;
						case 1: ctx.fillStyle = "DarkGray"; girth = .4;break;
						case 2: ctx.fillStyle = "Gray"; girth = .5; break;
						case 3: ctx.fillStyle = "Brown"; girth = .4; break;
						case 4: ctx.fillStyle = ctx.fillStyle = "rgb(0, 106, 220)"; girth = .3; break;
					}
				}
				ctx.fillRect((dX + (1-girth)/2)*p.zoom, ((1-girth)/2 + dY) * p.zoom, p.zoom*girth, p.zoom*girth);
			}
		}
		else {
			girth = .7;
			if(map[y][x].building[0] == 0){
				girth = .8;
				switch(map[y][x].building[1]){
					case 1:ctx.fillStyle = "#767600"; girth = .7; break; //farm
					case 2:ctx.fillStyle = "#64561E"; girth = .6; break; //Lumber mill
					case 3:ctx.fillStyle = "#767600"; girth = .4; break; //Granary
					case 4:ctx.fillStyle = "#64561E"; girth = .8; break; //Warehouse
				}
			}
			else if(map[y][x].building[0] == 1){ 
				switch(map[y][x].building[1]){
					case 0:ctx.fillStyle = "#463800"; girth = .4; break; //house
				} 
			}
			ctx.fillRect((dX + (1-girth)/2)*p.zoom, ((1-girth)/2 + dY) * p.zoom, p.zoom*girth, p.zoom*girth);
		}
	}
	if(y == tileSelected[0] && x == tileSelected[1]){ ctx.strokeStyle = "gold"; ctx.strokeRect(Math.floor(dX * p.zoom)+1, Math.floor(dY * p.zoom)+1, p.zoom-2, p.zoom-2); }
	ctx.strokeStyle = "black";
}
function drawMenus(t){
	var rect = r.getBoundingClientRect();
	rtx.fillStyle = "rgb(63, 75, 78)";
	rtx.fillRect(0, 0, rect.width, 60);
	rtx.fillRect(0, rect.height - 60, rect.width, 60);
	rtx.fillStyle = "black";
	rtx.font = "16px Courier";
	rtx.fillStyle = "rgb(213, 216, 239)";
	rtx.fillText("Buildings", 2, 40);
	rtx.fillText("Provinces", 98, 40);
	rtx.fillText("Estates", 203, 40);
	rtx.fillText("Court", 289, 40);
	rtx.fillText("Cities", 360, 40);
	rtx.fillText("Character", 2, rect.height - 20);
	rtx.fillText("Military", 100, rect.height - 20);
	rtx.fillText("Selected", 185, rect.height - 20);
	rtx.fillText("Summary", 275, rect.height - 20);
}
function drawTextBox(x, y, str, can, fontSize){
	var strLen = str.length;
	can.font = ""+fontSize+"px Arial";
	can.strokeStyle = "black";
	can.strokeRect(x, y, .5*fontSize*strLen, 1.2*fontSize);
	can.fillText(str, x+1, y+fontSize);
}
function drawRightBar(e){ //Handles Right Menus. Menu interfacing is handled by p.menView[]. p.menView[0] -> what tab to view; other spots store subdata for the tab
	var rect = r.getBoundingClientRect();
	rtx.clearRect(0, 0, rect.width, rect.height);
	drawMenus(p.menView[0]);
	if(e!=0 && e.type == 'mousedown'){
		var y = e.clientY;
		var x = e.clientX - rect.left;
	}
	rtx.strokeRect(0, 0, rect.width, 60);
	if(y < 60){
		tab = Math.floor(5*x/rect.width);
	}
	else if(y > rect.height-60){
		tab = 5+Math.floor(5*x/rect.width);
	}
	rtx.clearRect(0, 60, rect.width, rect.height - 120);
	switch(p.menView[0]){
		case 0: //Buildings
			if(tileSelected.length == 2){
				var yS = tileSelected[0];
				var xS = tileSelected[1];
				if(map[yS][xS].building[0] == -1 && map[yS][xS].owner == p.turn && map[yS][xS].elevation > 0 && (map[yS][xS].type == 'g' || map[yS][xS].type == 'i' || map[yS][xS].type == 'c')){
					if(e != 0){
						if(x > 15 && x< rect.width && y > 90 && y < rect.height/7 * 4 + 90){
							p.menView[1][1] = Math.floor((x - 15)/45);
							p.menView[1][0] = Math.floor((y - 90)/(rect.height/7));
						}
						else if(p.menView[1][0] > -1 && p.menView[1][1] > -1 && x > 10 && y > 215+4*rect.height/7 && x < 70 && y <= 245+4*rect.height/7){ 
							if(canBuy(yS, xS)){
								map[yS][xS].building = [p.menView[1][0], p.menView[1][1]];
								if(buildings[p.menView[1][0]][p.menView[1][1]].cost[0] > 0){
									p.zones[map[yS][xS].zone].res.wood -= buildings[p.menView[1][0]][p.menView[1][1]].cost[0];
								}
								p.manpower -= buildings[p.menView[1][0]][p.menView[1][1]].cost[3];
								buildings[p.menView[1][0]][p.menView[1][1]].effect(0);
								drawTile(yS, xS);
								if(yS > 0){
									drawTile(yS-1, xS);
								}
								if(xS > 0){
									drawTile(yS, xS-1);
								}
								if(xS-p.xView < Math.floor(cWidth/p.zoom)	){
									drawTile(yS, xS+1);
								}
								if(yS-p.yView < Math.floor(cHeight/p.zoom)){
									drawTile(yS+1, xS);
								}
								delta = true;
								if(e.shiftKey){ p.action = "building";}
							}
						}
					}
					rtx.font = "12px Bookman";
					rtx.fillStyle = "#BAEFC8"; //Economic
					rtx.fillRect(0, 60, rect.width, rect.height/7);							
					rtx.fillStyle = "#E5EFBA"; //Social
					rtx.fillRect(0, 60+rect.height/7, rect.width, rect.height/7);
					rtx.fillStyle = "#BAEAEF"; //Defensive
					rtx.fillRect(0, 60 + 2*rect.height/7, rect.width, rect.height/7);
					rtx.fillStyle = "#EFD4BA"; // Offensive
					rtx.fillRect(0, 60 + 3*rect.height/7, rect.width, rect.height/7);
					rtx.fillStyle = "black";
					rtx.fillText("Economic", 5, 80);
					rtx.fillText("Social", 5, 80 + rect.height/7);
					rtx.fillText("Defense", 5, 80 + 2*rect.height/7 );
					rtx.fillText("Offense", 5, 80 + 3*rect.height/7);
					//Draw Available Buildings
					var spots = [0, 0, 0, 0];
					for(var i = 0; i < buildings.length; i++){
						for(var j = 0; j < buildings[i].length; j++){
							rtx.lineWidth = 2;
							rtx.strokeStyle = "black";
							rtx.strokeRect(15 + spots[buildings[i][j].type] * 45, rect.height/7 * buildings[i][j].type + 90 + Math.floor(spots[buildings[i][j].type] * 45/rect.width) * 45, 30, 30);
							rtx.fillStyle = "saddlebrown";
							rtx.fillRect(15 + spots[buildings[i][j].type] * 45, rect.height/7 * buildings[i][j].type +90 + Math.floor(spots[buildings[i][j].type] * 45/rect.width) * 45, 30, 30);
							spots[buildings[i][j].type]++;
						}
					}
					//Draw Selected Building
					rtx.fillStyle = "rgb(82, 97, 101)";
					rtx.fillRect(0, 60+4*rect.height/7, rect.width, (rect.height-60) -(60+4*rect.height/7));
					rtx.fillStyle = "black";
					rtx.font = "18px Bookman";
					if(p.menView[1][0] == -1){
						rtx.fillText("No building selected", 15, 60+4*rect.height/7 + 40);
					}
					else if(p.menView[1][1] > -1){
						var trig = 0;
						var a = buildings[p.menView[1][0]][p.menView[1][1]].cost;
						var b = map[yS][xS].zone;
						rtx.fillText(buildings[p.menView[1][0]][p.menView[1][1]].name, 15, 60+4*rect.height/7 + 20);
						rtx.fillText(buildings[p.menView[1][0]][p.menView[1][1]].description, 15, 60+4*rect.height/7 + 115);
						if(b > -1 && a[0] > p.zones[b].res.wood){ rtx.fillStyle = "red"; trig++; } else { rtx.fillStyle = "green" }
						rtx.fillText("W Cost:  " + a[0], 15, 60+4*rect.height/7 + 50);
						if(b > -1 && a[1] > p.zones[b].res.stone){ rtx.fillStyle = "red"; trig++; } else { rtx.fillStyle = "green" }
						rtx.fillText("S Cost:  " + a[1], 15 + rect.width/2, 60+4*rect.height/7 + 55);
						if(a[3] > p.manpower){ rtx.fillStyle = "red"; trig++; } else { rtx.fillStyle = "green" }
						rtx.fillText("M Cost:  " + a[3], 15, 60+4*rect.height/7 + 80);
						if(b > -1 && a[2] > p.zones[b].res.gold){ rtx.fillStyle = "red"; trig++; } else { rtx.fillStyle = "green" }
						rtx.fillText("G Cost:  " + a[2], 15 + rect.width/2, 60+4*rect.height/7 + 80);
						if(trig == 0){ rtx.fillStyle = "green"; } else { rtx.fillStyle = "red"; }
							rtx.strokeRect(10, 4*rect.height/7 + 200, 60, 30);
							rtx.fillText("Build!", 15, 60+4*rect.height/7 + 160);
					}
				}
				else {
					rtx.font = "20px Bookman";
					rtx.fillText("You can't build here.", 15, 430);
				}
			}
			break;
		case 1: //Cities
			rtx.font = "20px Arial";
			rtx.fillStyle = "black";
			if(!establishing){
				rtx.fillText("Establish Settlement", 20, 120);
				rtx.strokeRect(18, 95, 200, 30);
				rtx.strokeRect(15, 150, rect.width - 30, rect.height - 300);
				rtx.strokeRect(15, 150, rect.width - 30, 30);
				for(j = 0; j < Math.min(8, p.cities.length); j++){
					rtx.font = "19px Courier";
					rtx.strokeStyle = "black";
					rtx.strokeRect(15, 180 + (75 * j), r.width-30, 75);
					rtx.strokeStyle = "black"
					rtx.fillStyle = "black";
					rtx.font = "20px Calibri";
					rtx.fillText(p.cities[j].name, 80, 220 + (j * 75));
				}
			}
			if(e!=0){
				if(e.type == 'mousedown'){
					if(!establishing && y > 95 && y < 125 && x > 18 && x < 218){
						establishing = true;
						p.citInd = p.cities.length;
						p.cities[p.citInd] = new City();
						p.action = "managing";
						document.addEventListener('keydown', drawRightBar);
					}
					else if(y > 500 && x > 0 && x < rect.width){
						if(establishing){
							document.removeEventListener('keydown', drawRightBar);
							establishing = false;
							p.citInd = -1;
						}
					}
				}
				else if(establishing && e.type == 'keydown'){
					if(e.keyCode >= 65 && e.keyCode <= 90){
						p.cities[p.citInd].name += e.key;
					}
					else if(e.keyCode == 8){
						p.cities[p.citInd].name = p.cities[p.citInd].name.substring(0,p.cities[p.citInd].name.length-1);
					}
					else if(e.keyCode == 13){
						document.removeEventListener('keydown', drawRightBar);
					}
				}
			}
			if(establishing){
				rtx.clearRect(0, 60, rect.width, rect.height - 120);
				rtx.fillStyle = "rgb(213, 216, 239)";
				rtx.fillText("City Name: ", 10, 120);
				rtx.fillText(p.cities[p.citInd].name, 120, 120);
				rtx.fillText("City Size: " + p.cities[p.citInd].size, 10, 180);
				rtx.fillText("Finish", 10, 500);
			}
			break;
		default:
			rtx.fillStyle = "rgb(213, 216, 239)";
			rtx.fillText("Tab is Incomplete: " + tab, 50, 300); break;
	}
}
function drawLeftBar(){
	ltx.fillStyle = "rgb(213, 216, 239)";
	ltx.clearRect(0, 0, l.width, l.height);
	ltx.font = "16px Arial";
	ltx.fillText("Manpower: " + Math.floor(p.manpower), 5, 120);
	if(tileSelected.length > 0 && map[tileSelected[0]][tileSelected[1]].zone > -1){
		var a = p.zones[map[tileSelected[0]][tileSelected[1]].zone];
		ltx.fillText("Food: " + Math.floor(10*a.res.food)/10 + " / " + a.rMax.food, 5, 480);
		ltx.fillText("Wood: " + Math.floor(10*a.res.wood)/10 + " / " + a.rMax.wood, 5, 460);
		ltx.fillText("Population: " + Math.floor(10*a.res.population)/10 + " / " + Math.floor(10*a.rMax.population)/10, 5, 500);
		ltx.fillText("Incomes", 5, 540);
		ltx.fillText("Wood Income: " + Math.floor(10*a.income.wood)/10 + " / " + Math.floor(10*a.max.wood)/10, 5, 560);
		ltx.fillText("Food Income: " + Math.floor(10*a.income.food)/10 + " / " + Math.floor(10*a.max.food)/10, 5, 580);
		ltx.fillText("Manpower Income: " + Math.floor(10*a.income.manpower)/10+ " / " + Math.floor(10*a.max.manpower)/10, 5, 600);
	}
}