		function drawWetness(){
			setMapDSize(MAPSIZE, MAPSIZE);
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
			setMapDSize(2*MAPSIZE, 2*MAPSIZE);
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
			ctx.clearRect(0, 0, c.height, c.width);
			c.width = MAPSIZE;
			c.height = MAPSIZE;
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
		function drawElevationMap()
		{
			ctx.clearRect(0, 0, c.height, c.width);
			setMapDSize(MAPSIZE, MAPSIZE);
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
		function drawEntireMap()
		{
			setMapDSize(MAPSIZE, MAPSIZE);
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
			ctx.clearRect(0, 0, c.width, c.height);
			setMapDSize(c.width, c.height);
			for(i = 0; i < Math.floor(c.height/p.zoom); i++){
				for(j = 0; j < Math.floor(c.width/p.zoom); j++){
					var yLook = safeC(p.yView + i);
					var xLook = safeC(p.xView + j);
					switch(map[yLook][xLook].zone){
						case -1: if(map[yLook][xLook].elevation == 0){ ctx.fillStyle = "white";} else { ctx.fillStyle = "#B4B4B4" }; break;
						case 0:ctx.fillStyle = "#ABFF96"; break;
						case 1:ctx.fillStyle = "#B5FFA0"; break;
						case 2:ctx.fillStyle = "#BFFFAA"; break;
						case 3:ctx.fillStyle = "#C9FFB4"; break;
						case 4:ctx.fillStyle = "#D3FFBE"; break;
						case 5:ctx.fillStyle = "#DDFFC8"; break;
						case 6:ctx.fillStyle = "#E7FFD2"; break;
						default: ctx.fillStyle = "green"; break;
					}
					ctx.fillRect(Math.floor(j * p.zoom), Math.floor(i * p.zoom), p.zoom, p.zoom);
				}
			}
		}
		function drawMap()
		{
			ctx.clearRect(0, 0, c.width, c.height);
			setMapDSize(c.width, c.height);
			for(i = 0; i < Math.floor(c.height/p.zoom); i++){
				for(j = 0; j < Math.floor(c.width/p.zoom); j++){
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
					if(map[y][x].building[0] == 0 && map[y][x].building[1] == 1){
						girth = .8;
						ctx.fillStyle = "olive";
					}
					else { ctx.fillStyle = "brown"; }
					ctx.fillRect((dX + (1-girth)/2)*p.zoom, ((1-girth)/2 + dY) * p.zoom, p.zoom*girth, p.zoom*girth);
				}
			}
			if(y == tileSelected[0] && x == tileSelected[1]){ ctx.strokeStyle = "gold"; ctx.strokeRect(Math.floor(dX * p.zoom)+1, Math.floor(dY * p.zoom)+1, p.zoom-2, p.zoom-2); }
			ctx.strokeStyle = "black";
		}
		function drawMenus(t){
			var rect = r.getBoundingClientRect();
			rtx.fillStyle = "#F2F4F4";
			rtx.fillRect(0, 0, rect.width, 60);
			rtx.fillRect(0, rect.height - 60, rect.width, 60);
			rtx.fillStyle = "black";
			rtx.font = "16px Courier";
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
		//drawMenus();
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
								if(x > 15 && x< rect.width && y > 90 && y < 660){
									p.menView[1][1] = Math.floor((x - 15)/45);
									p.menView[1][0] = Math.floor((y - 90)/150);
								}
								else if(p.menView[1][0] > -1 && p.menView[1][1] > -1 && x > 10 && y > 795 && x < 70 && y <= 835){
									if((buildings[p.menView[1][0]][p.menView[1][1]].cost[0] <= p.resources.wood) && (buildings[p.menView[1][0]][p.menView[1][1]].cost[1] <= p.resources.stone) && 
										(buildings[p.menView[1][0]][p.menView[1][1]].cost[3] <= p.resources.manpower) && (buildings[p.menView[1][0]][p.menView[1][1]].cost[2] <= p.resources.gold)){
										map[yS][xS].building = [p.menView[1][0], p.menView[1][1]];
										p.resources.wood -= buildings[p.menView[1][0]][p.menView[1][1]].cost[0]
										p.resources.stone -= buildings[p.menView[1][0]][p.menView[1][1]].cost[1]
										p.resources.gold -= buildings[p.menView[1][0]][p.menView[1][1]].cost[2]
										p.resources.manpower -= buildings[p.menView[1][0]][p.menView[1][1]].cost[3]
										buildings[p.menView[1][0]][p.menView[1][1]].effect(0);
										drawTile(yS, xS);
										if(yS > 0){
											drawTile(yS-1, xS);
										}
										if(xS > 0){
											drawTile(yS, xS-1);
										}
										if(xS-p.xView < Math.floor(c.width/p.zoom)	){
											drawTile(yS, xS+1);
										}
										if(yS-p.yView < Math.floor(c.height/p.zoom)){
											drawTile(yS+1, xS);
										}
										delta = true;
									}
								}
							}
							rtx.font = "12px Bookman";
							
							rtx.fillStyle = "#BAEFC8"; //Economic
							rtx.fillRect(0, 60, rect.width, 150);
														
							rtx.fillStyle = "#E5EFBA"; //Social
							rtx.fillRect(0, 210, rect.width, 150);
							
							rtx.fillStyle = "#BAEAEF"; //Defensive
							rtx.fillRect(0, 360, rect.width, 150);
							
							rtx.fillStyle = "#EFD4BA"; // Offensive
							rtx.fillRect(0, 510, rect.width, 150);
							
							rtx.fillStyle = "black";
							rtx.fillText("Offense", 5, 530);
							rtx.fillText("Defense", 5, 380);
							rtx.fillText("Economic", 5, 80);
							rtx.fillText("Social", 5, 230);
							
							//Draw Available Buildings
							var spots = [0, 0, 0, 0];
							for(var i = 0; i < buildings.length; i++){
								for(var j = 0; j < buildings[i].length; j++){
									rtx.lineWidth = 2;
									 rtx.strokeStyle = "black";
									rtx.strokeRect(15 + spots[buildings[i][j].type] * 45, 150 * buildings[i][j].type + 90 + Math.floor(spots[buildings[i][j].type] * 45/rect.width) * 45, 30, 30);
									rtx.fillStyle = "saddlebrown";
									rtx.fillRect(15 + spots[buildings[i][j].type] * 45, 150 * buildings[i][j].type +90 + Math.floor(spots[buildings[i][j].type] * 45/rect.width) * 45, 30, 30);
									spots[buildings[i][j].type]++;
								}
							}
							//Draw Selected Building
							rtx.fillStyle = "white";
							rtx.fillRect(0, 660, rect.width, rect.height-720);
							rtx.fillStyle = "black";
							rtx.font = "18px Bookman";
							if(p.menView[1][0] == -1){
								rtx.fillText("No building selected", 15, 720);
							}
							else if(p.menView[1][1] > -1){
								var trig = 0;
								rtx.fillText(buildings[p.menView[1][0]][p.menView[1][1]].name, 15, 690);
								rtx.fillText(buildings[p.menView[1][0]][p.menView[1][1]].description, 15, 785);
								if(buildings[p.menView[1][0]][p.menView[1][1]].cost[0] > p.resources.wood){ rtx.fillStyle = "red"; trig++; } else { rtx.fillStyle = "green" }
								rtx.fillText("W Cost:  " + buildings[p.menView[1][0]][p.menView[1][1]].cost[0], 15, 720);
								if(buildings[p.menView[1][0]][p.menView[1][1]].cost[1] > p.resources.stone){ rtx.fillStyle = "red"; trig++; } else { rtx.fillStyle = "green" }
								rtx.fillText("S Cost:  " + buildings[p.menView[1][0]][p.menView[1][1]].cost[1], 15 + rect.width/2, 720);
								if(buildings[p.menView[1][0]][p.menView[1][1]].cost[3] > p.resources.manpower){ rtx.fillStyle = "red"; trig++; } else { rtx.fillStyle = "green" }
								rtx.fillText("M Cost:  " + buildings[p.menView[1][0]][p.menView[1][1]].cost[3], 15, 750);
								if(buildings[p.menView[1][0]][p.menView[1][1]].cost[2] > p.resources.gold){ rtx.fillStyle = "red"; trig++; } else { rtx.fillStyle = "green" }
								rtx.fillText("G Cost:  " + buildings[p.menView[1][0]][p.menView[1][1]].cost[2], 15 + rect.width/2, 750);
								if(trig == 0){ rtx.fillStyle = "green"; } else { rtx.fillStyle = "red"; }
									rtx.strokeRect(10, 795, 60, 30);
									rtx.fillText("Build!", 15, 815);
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
						rtx.fillText("City Name: ", 10, 120);
						rtx.fillText(p.cities[p.citInd].name, 120, 120);
						rtx.fillText("City Size: " + p.cities[p.citInd].size, 10, 180);
						rtx.fillText("Finish", 10, 500);
					}
					break;
				default:
					rtx.fillText("Tab is Incomplete: " + tab, 50, 300); break;
			}
		}
		function drawLeftBar(){
			ltx.clearRect(0, 0, l.width, l.height);
			ltx.font = "16px Arial";
			ltx.fillText("Gold: " + Math.floor(p.resources.gold), 5, 320);
			ltx.fillText("Wood: " + Math.floor(p.resources.wood), 5, 340);
			ltx.fillText("Stone: " + Math.floor(p.resources.stone),5 , 360);
			ltx.fillText("Manpower: " + Math.floor(p.resources.manpower), 5, 520);
			ltx.fillText("Population: " + Math.floor(p.resources.population), 5, 540);
			ltx.fillText("Food: " + Math.floor(p.resources.food), 5, 380);
		}