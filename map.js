
		function genWorld()
		{
			console.log(MODI);
			var t0 = performance.now();
			var wN = genOceans(4000000 * MODI, Math.ceil(MODI * 2));
			console.log(wN);
			var t1 = performance.now();
			//console.log(t1-t0 + " genOceans");
			t0 = performance.now();
			lands = slap(30000 * MODI * MODI, 'g', 'w', -1, 0);
			t1 = performance.now();
			//console.log(t1-t0+ " slap Islands");
			t0 = performance.now();
			mountain(5000 * MODI, Math.round(125 * MODI));
			mountain(500 * MODI, Math.round(300 * MODI));
			t1 = performance.now();
			//console.log(t1-t0+ " mountains");
			
			t0 = performance.now();
			elevSpread();
			t1 = performance.now();
			//console.log(t1-t0+ " elevSpread");
			t0 = performance.now();
			currents();
			t1 = performance.now();
			//console.log(t1-t0+ " currents");
			t0 = performance.now();
			rivers();
			t1 = performance.now();
			//console.log(t1-t0+ " rivers");
			t0 = performance.now();
			forest(850 * MODI, Math.round(10* MODI));
			forest(350, Math.round(150* MODI));
			forest(200, Math.round(1000* MODI));
			forest(100, Math.round(500* MODI));
			forest(35, Math.round(5000* MODI));
			forest(20, Math.round(4000* MODI));
			cleanForests();
			t1 = performance.now();
			//console.log(t1-t0+ " forests");
			t0 = performance.now();
			for(i=0; i < MAPSIZE; i++){
				for(j = 0; j < MAPSIZE; j++){
					if(map[i][j].elevation > 0){
						if(map[i][j].type == 'g' && map[i][j].elevation < .6 && map[i][j].wetness <= .01 && map[i][j].heat > (.75+Math.random())){
							map[i][j].type = 'd';
						}
						else if(map[i][j].wetness < .1){
							map[i][j].type = 's';
						}
						if(map[i][j].elevation > .9){
							map[i][j].type = 'm';
							map[i][j].travelQ = -3;
						}
						else if(map[i][j].elevation >= .8){
							map[i][j].type = 'l';
						}
						else if(map[i][j].elevation >= .6){
							map[i][j].type = 'h';
						}
						if(map[i][j].elevation < .05){
							map[i][j].type = 'c';
							if(map[i][j].wetness == 0){
								map[i][j].wetness += Math.random()/10;
							}
						}
						if(map[i][j].type == 'g' && map[i][j].elevation > .135){
							map[i][j].type = 'i';
						}
						var chance = .05;
						var dNum = 0;
						if(map[i][j].type == 'd' || map[i][j].type == 'm'){ chance = 0; }
						for(a = -1; a < 2; a++){
							for(b = -1; b < 2; b++){
								if(map[safeC(i+a)][safeC(j+b)].type == 'd'){
									dNum++;
								}
								if(map[i][j].type == 'g' || map[i][j].type == 'i' || (map[i][j].type == 'h' && map[i][j].wetness > .1)){
									if(map[safeC(i+a)][safeC(j+b)].type == 'r'){
										chance += .1;
									}
								}
							}
						}
						chance += (-.175) + map[i][j].wetness/6;
						chance += map[i][j].heat/12;
						if(chance > Math.random() && map[i][j].elevation < .7 && map[i][j].elevation > 0)
						{
							map[i][j].type = 'f';
						}
						if(dNum >= 4 && (map[i][j].type == 's' || map[i][j].type == 'f')){
							map[i][j].heat += .1;
							map[i][j].type = 'd';
						}
					}
					else{ map[i][j].elevation = 0; }
					if(map[i][j].type == 'f' && map[i][j].elevation == 0){ map[i][j].type = 'w'; }
				}
			}
			t1 = performance.now();
			//console.log(t1-t0 + " everything else");
			slap(50, 's', 'g', 2, 3);
			
		}
		function forest(treeCount, forestsNumber){
			var arbs = treeCount;
			var forestsC = forestsNumber;
			var ranX = Math.floor(Math.random() * MAPSIZE);
			var ranY = Math.floor(Math.random() * MAPSIZE);
			var dir = Math.floor(Math.random() * 4);
			while(arbs > 0 && forestsC > 0){		
				dir = Math.floor(Math.random() * 4);
					if(dir == 0){
						ranY--;
						ranX--;
					}
					else if(dir == 1){
						ranX--;
						ranY++;
					}
					else if(dir == 2){
						ranY++;
						ranX++;
					}
					else if(dir == 3){
						ranX++;
						ranY--;
					}
					ranY = safeC(ranY);
					ranX = safeC(ranX);
				while(forestsC > 0 && (map[ranY][ranX].elevation < .05 || map[ranY][ranX].elevation > .6 || map[ranY][ranX].wetness < .1  ||  arbs == 1)){
					ranX = Math.floor(Math.random() * MAPSIZE);
					ranY = Math.floor(Math.random() * MAPSIZE);
					arbs = treeCount;
					forestsC--;
				}
				var chance = Math.round(Math.random() * 10);
				if(chance < 8){
					map[ranY][ranX].type = 'f';
					map[ranY][ranX].travelQ = -1;
				}
				arbs--;
			}
		}
		function cleanForests(){
			var arbC = 0;
			var considerations = [];
			for(h = 0; h < 2; h++){
				var i = h*(MAPSIZE-1);
				while(i < MAPSIZE && i >= 0){
					var j = h*(MAPSIZE-1);
					while(j < MAPSIZE && j >= 0){
						if(map[i][j].type != 'd' && map[i][j].elevation > 0){
							arbC = 0;
							for(a = -1; a < 2; a++){
								for(b = -1; b < 2 ; b++){
									if(map[safeC(a+i)][safeC(b+j)].type == 'f')
									{
										arbC++;
									}
								}
							}
							if(arbC > 2){
								considerations.push([i, j]);
							}
						}
						if(h == 0){ j++; } else { j--; }
					}
					if(h == 0){ i++; } else { i--; }
				}
				for(i = 0; i < considerations.length; i++){
					map[considerations[i][0]][considerations[i][1]].type = 'f'; 
				}
			}
		}
		function mountain(rSize, rNum){
			var yC = Math.floor(Math.random() * MAPSIZE);
			var xC = Math.floor(Math.random() * MAPSIZE);
			var rS = 0;
			var rN = 0;
			var dir = 0;
			var lastDir = -1;
			while(rN < rNum)
			{
				if(rS == rSize)
				{
					rS = 0;
					rN++;
					yC = Math.floor(Math.random() * MAPSIZE);
					xC = Math.floor(Math.random() * MAPSIZE);
				}
					do{
						dir = Math.floor(Math.random()*8);
					}while(dir == lastDir);
					switch(dir){
						case 0: yC--; xC--; break;
						case 1: yC--; break;
						case 2: yC--; xC++; break;
						case 3: xC++; break;
						case 4: yC++; xC++; break;
						case 5: yC++; break;
						case 6: yC++; xC--; break;
						case 7: xC--; break;
					}
					yC = safeC(yC);
					xC = safeC(xC);
					if(map[yC][xC].type != 'w'){
						if(rS == 0){
							map[yC][xC].elevation = 1;
							map[yC][xC].type = 'm';
						}
						else {
							var max = 0;
							for(a = -1; a < 2; a++){
								for(b = -1; b < 2; b++){
									if(map[safeC(yC+a)][safeC(xC+b)].elevation > max){
										max = map[safeC(yC+a)][safeC(xC+b)].elevation;
									}
								}
							}
							var add = max + .005 - Math.random()*.01;
							if(add > 1){ add = 1; }
							map[yC][xC].elevation = add;
							map[yC][xC].type = 'm';
							if(dir < 4){
								lastDir = dir + 4;
							}
							else{
								lastDir = dir - 4;
							}
						}
					}
					else { rS = rSize-1; }
				rS++;
			}
		}
		function elevSpread(){
			for(m = 0; m < 4; m++){
				for(h = 0; h < 2; h++){
					var i = h*(MAPSIZE-1);
					while(i < MAPSIZE && i >= 0){
						var j = h*(MAPSIZE-1);
						while(j < MAPSIZE && j >= 0){
							var add = 0;
							var max = 0;
							if(map[i][j].elevation > 0){
								for(a = -1; a < 2; a++){
									for(b = -1; b < 2; b++){
										if(map[safeC(i+a)][safeC(j+b)].elevation > max){ max = map[safeC(i+a)][safeC(j+b)].elevation; }
										add += map[safeC(i+a)][safeC(j+b)].elevation/8;
									}
									if(add <= 0){ map[i][j].elevation/=2; }
									else if(map[i][j].elevation < max || map[i][j].elevation < .6){
										if(max > .9){
											map[i][j].elevation = max * (.65 + .3*Math.random());
										}
										else if(max > .8){
											map[i][j].elevation = max * (.92 + Math.random()/20);
										}
										else if(max > .7){
											map[i][j].elevation = max * (.7 + Math.random()/10);
										}
										else if(max > .6){
											map[i][j].elevation = max * (.9 + Math.random()/10);
										}
										else if(max > .4){
											map[i][j].elevation = max * (.5 + Math.round(Math.random()*20)/40);
										}
										else if(max > .25){
											map[i][j].elevation = max * (.5 + Math.round(Math.random()*20)/36);
										}
										else if(max >= .1){
											map[i][j].elevation = max * (.51 + Math.round(Math.random()*20)/36);
										}
										else {
											map[i][j].elevation = max;
										}
									}
								}
							}
							if(h==0){j++;} else {j--;}
						}
						if(h==0){i++;} else {i--;}
					}
				}
			}
		}
		function currents(){
			function makeCurrent(yC, xC, l){
				var lastDir = -1;
				var bannedDir = Math.floor(Math.random()*4);
				var dir = -1;
				var water = 90;
				var y = safeC(yC);
				var x = safeC(xC);
				var cS = 0;
				var limit = 20;
				while(cS < limit && water > 0){
					y = safeC(y);
					x = safeC(x);
					if(map[y][x].type == 'w'){
						water+=60*MODI;
						cS++;
					}
					else{
						if(l){
							for(z=-4; z < 0; z++){
								if(lastDir == 1 || lastDir == 3){
									x1= safeC(x+z);
									y1 = y;
								} else{
									y1 = safeC(y+z);
									x1 = x;
								}
								map[y1][x1].wetness += Math.max(.03 - map[y1][x1].wetness, .005);
								map[y1][x1].wetness += map[y][x].elevation/64;
								map[y1][x1].heat += .01;
								map[y1][x1].curred += .1;
							}
							if(map[y][x].elevation > .8){
								water -= (20/MODI) * map[y][x].elevation;
							}
						}
						water -= map[y][x].heat;
						map[y][x].curred += .1;
						map[y][x].wetness += .001;
					}
					do{
						dir = Math.floor(Math.random()*4);
					}while(dir == lastDir || dir == bannedDir);
					if(dir == 0){ y--; lastDir = 2;}
					else if(dir == 1){ x++; lastDir = 3;}
					else if(dir == 2){ y++; lastDir = 0;}
					else if(dir == 3){ x--;  lastDir = 1;}
				}
			}
			var low = true;
			for(var i = 0; i < MAPSIZE; i++){
				for(var j = 0; j < MAPSIZE; j++){
					if(map[i][j].type == 'w'){
						makeCurrent(i, j, low);
					}
				}
			}
		}
		function rivers(){
			var id = 0;
			function makeRiver(yC, xC){
				var spot = new Array(2);
				var interval = Math.ceil(Math.random() * 100 * MODI);
				var dirToSea = -1;
				var stack = [];
				var stop = false;
				stack.push([yC, xC]);
				var lastDir = -1;
				var bannedDir = -1;
				var rS = 0;
				while(stack.length > 0 && !stop){
					spot = stack.pop();
					var y = safeC(spot[0]);
					var x = safeC(spot[1]);
					if(map[y][x].type != 'w'){
						var min = map[y][x].elevation + .2;
						if(rS > 0){
							map[y][x].type = 'r';
							map[y][x].id = id;
							map[y][x].elevation = -.1;
							for(a = -1; a < 2; a++){
								for(b = -1; b < 2; b++){
									map[safeC(y+a)][safeC(x+b)].wetness += .25;
								}
							}
						}
						var minDir = -1;
						if(map[safeC(y - 1)][x].elevation < min && lastDir != 0 && bannedDir != 0 && map[safeC(y - 1)][x].id != id){
							min = map[safeC(y - 1)][x].elevation;
							minDir = 0;
						}
						if(map[y][safeC(1+x)].elevation < min && lastDir != 1 && bannedDir != 1 && map[y][safeC(1+x)].id != id){
							min = map[y][safeC(1+x)].elevation;
							minDir = 1;
						}
						if(map[safeC(y + 1)][x].elevation < min && lastDir != 2 && bannedDir != 2 && map[safeC(y + 1)][x].id != id){
							min = map[safeC(y + 1)][x].elevation;
							minDir = 2;
						}
						if(map[y][safeC(x-1)].elevation < min && lastDir != 3 && bannedDir != 3 && map[y][safeC(x-1)].id != id){
							min = map[y][safeC(x-1)].elevation;
							minDir = 3;
						}
						if(min > 0){
							if(minDir == 0){ stack.push([y-1, x]); }
							else if(minDir == 1){ stack.push([y, x+1]); }
							else if(minDir == 2){ stack.push([y+1, x]); }
							else if(minDir == 3){ stack.push([y, x-1]); }
							else{ stop = true; }
							if(minDir < 2){ lastDir = minDir+2;} else { lastDir = minDir -2; }
							if(rS%interval == 0){
								var counting = 0;
								while(dirToSea == -1 && counting < MAPSIZE/2){
									if(map[safeC(y-counting)][x].type == 'w')
										dirToSea = 0;
									else if(map[y][safeC(x+counting)].type == 'w')
										dirToSea = 1;
									else if(map[safeC(y+counting)][x].type == 'w')
										dirToSea = 2;
									else if(map[y][safeC(x-counting)].type == 'w')
										dirToSea = 3;
									counting++;
								}
								if(counting == MAPSIZE){
									stop = true;
								}
								else{
									if(dirToSea < 2){ bannedDir = dirToSea + 2; }
									else { bannedDir = dirToSea - 2; }
								}
							}
						}
						else { stop = true; }
					}
					else { stop = true; }
					rS++;
				}
			}
			for(var i = 0; i < MAPSIZE; i++){
				for(var j = 0; j < MAPSIZE; j++){
					if(map[i][j].wetness > .3 && map[i][j].elevation < .6 && (map[i][j].wetness >= 2.75 || Math.random() > .998)){
						makeRiver(i, j);
						id++;
					}
				}
			}
		}
		
		function genOceans(oceanSize, numOceans)
		{
			var waterNum = 0;
			var oS = oceanSize;
			var nO = numOceans;
			var dir = 0;
			var lastDir = 0;
			var yCoord = Math.floor(Math.random() * MAPSIZE);
			var xCoord = Math.floor(Math.random() * MAPSIZE);
			while(oS > 0 && nO > 0)
			{
				if(oS == 1)
				{
					oS = oceanSize; //Ocean size is too small, go to new location to begin making ocean
					yCoord = Math.floor(Math.random() * MAPSIZE);
					xCoord = Math.floor(Math.random() * MAPSIZE);
					nO--;
				}
				else
				{
					yCoord = safeC(yCoord);
					xCoord = safeC(xCoord);
					map[yCoord][xCoord].type = 'w';
					map[yCoord][xCoord].wetness = 0;
					map[yCoord][xCoord].elevation = -1;
					waterNum++;
					do{
						dir = Math.floor(Math.random()*4);
					}while(dir == lastDir);
					if(dir == 0){ yCoord++; }
					else if(dir == 1){ xCoord++; }
					else if(dir == 2){ yCoord--; }
					else { xCoord--; }
					if(lastDir < 2){ lastDir = dir + 2} else { lastDir = dir - 2; } //Asign Last Dir
					oS--;
				}
			}
			return waterNum;
		}
		function slap(size, typeDetect, typeMake, elevChange, nind){
			var ind = 0;
			var counter = 0;
			var stack = [];
			var continents = [];
			function checkValidity(y, x, checking){
				var a = map[safeC(y)][safeC(x)];
				return (a.checked != nind || !checking) && a.type == typeDetect;
			}
			function slapInner(yC, xC, checking){
				var spot = new Array(2);
				stack.push([yC, xC]);
				while(stack.length > 0){
					counter++;
					spot = stack.pop();
					y = safeC(spot[0]);
					x = safeC(spot[1]);
					if(checking){ map[y][x].checked = nind; }
					else { 
						map[y][x].type = typeMake; 
						if(elevChange != 2){
							map[y][x].elevation = elevChange;
						}
					}	
					if(checkValidity(y+1, x, checking)){
						stack.push([y+1, x]);
					}
					if(checkValidity(y, x+1, checking)){
						stack.push([y, x+1]);
					}
					if(checkValidity(y-1, x, checking)){
						stack.push([y-1, x]);
					}
					if(checkValidity(y, x-1, checking)){
						stack.push([y, x-1]);
					}
				}
			}
			for(i = 0; i < MAPSIZE; i++){
				for(j = 0; j < MAPSIZE; j++){
					if(checkValidity(i, j, true)){
						counter = 0;
						slapInner(i, j, true);
						ind++;
						if(counter < size){
							ind--;
							slapInner(i, j, false);
						}
						else{
							continents[ind] = counter;
						}
					}
				}
			}
			return continents;
		}