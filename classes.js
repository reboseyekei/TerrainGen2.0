	//Classes: -----------------
	function Building(){
		this.name;
		this.type;
		this.effect;
		this.cost;
		this.description;
	}
	var buildings = [[], [], [], []];
	var bNames = [["Road","Farm","Lumber Mill","Granary","Warehouse","Market","Workshop","Bank"],["Housing","Plaza","Guild Hall","University","Temple","Tavern","Manor","Merchant Hall"],["Palisade","Low Wall","High Wall","Gatehouse","Moat","Guard Tower","Small Keep","Castle"],["Training Ground","Barracks","Military Academy","Blacksmith","Archery Yard","Cavalry Yard","Mercenary Yard","Siege Workshop"]];
	for(i = 0; i < bNames.length; i++){
		for(j = 0; j < bNames[i].length; j++){
			buildings[i][j] = new Building();
			buildings[i][j].name = bNames[i][j];
			buildings[i][j].type = i;
		}
	}
	//ECONOMIC
	buildings[0][0].cost = [0,0,0,2];
	buildings[0][0].description = "Road";
	buildings[0][0].effect = function(m){ map[tileSelected[0]][tileSelected[1]].zone = -1; Roads(); scanRoads(tileSelected[0], tileSelected[1]);}
	buildings[0][1].cost = [2,0,0,1];
	buildings[0][1].descript2on = "Farm";
	buildings[0][1].effect = function(m){ }
	buildings[0][2].cost = [6,0,0,3];
	buildings[0][2].description = "Lumber Mill";
	buildings[0][2].effect = function(m){ p.dom.development += (1-(2*m))*10;}	
	buildings[0][3].cost = [6,0,0,6]
	buildings[0][3].description = "Granary";
	buildings[0][3].effect = function(m){ p.dom.development += (1-(2*m))*10;}
	buildings[0][4].cost = [15,2,0,10]
	buildings[0][4].description = "Warehouse";
	buildings[0][4].effect = function(m){ p.dom.development += (1-(2*m))*10;}
	buildings[0][5].cost = [10,5,0,10]
	buildings[0][5].description = "Market, +10 dev. 10w, 5s, 10m"
	buildings[0][5].effect = function(m){ p.dom.development += (1-(2*m))*10;}
	buildings[0][6].cost = [5,10,0,10]
	buildings[0][6].description = "Workshop";
	buildings[0][6].effect = function(m){ p.dom.development += (1-(2*m))*10;}
	buildings[0][7].cost = [15,10,0,10]
	buildings[0][7].description = "bank. +15 dev. 15w, 10s, 10m"
	buildings[0][7].effect = function(m){ p.dom.development += (1-(2*m))*10;}

	//SOCIAL
	buildings[1][0].cost = [2,0,0,1];
	buildings[1][0].description = "Housing";
	buildings[1][0].effect = function(m){ p.dom.rMax.population += (1-(2*m))*10; p.dom.income.population += .1; p.dom.income.manpower += .1;}
	buildings[1][1].cost = [3,0,0,5];
	buildings[1][1].description = "Plaza";
	buildings[1][1].effect = function(m){ p.dom.rMax.population += (1-(2*m))*10;}
	buildings[1][2].cost = [3,0,100,5];
	buildings[1][2].description = "Guild";
	buildings[1][2].effect = function(m){ p.dom.rMax.population += (1-(2*m))*10;}
	buildings[1][3].cost = [10, 10, 100, 0];
	buildings[1][3].description = "university. 10w 10s 1g";
	buildings[1][3].effect = function(m){ p.dom.rMax.population += (1-(2*m))*10;}
	buildings[1][4].cost = [10, 10, 0, 10];
	buildings[1][4].description = "temple";
	buildings[1][4].effect = function(m){ p.dom.rMax.population += (1-(2*m))*10;}
	buildings[1][5].cost = [5, 15, 0, 15];
	buildings[1][5].description = "tavern";
	buildings[1][5].effect = function(m){ p.dom.rMax.population += (1-(2*m))*10;}
	buildings[1][6].cost = [0, 0, 200, 5];
	buildings[1][6].description = "noble estate. 200g 5m";
	buildings[1][6].effect = function(m){ p.dom.rMax.population += (1-(2*m))*10;}
	buildings[1][7].cost = [0, 0, 200, 10];
	buildings[1][7].description = "merchant estate. 200g 10m";
	buildings[1][7].effect = function(m){ p.dom.rMax.population += (1-(2*m))*10;}

	buildings[2][0].cost = [2,0,0,2];
	buildings[2][0].description = "Palisade";
	buildings[2][0].effect = function(m){ map[tileSelected[0]][tileSelected[1]].defense += 1*(1-(2*m)); map[tileSelected[0]][tileSelected[1]].pass = m-1;}
	buildings[2][1].cost = [4,0,0,4];
	buildings[2][1].description = "Low Wall";
	buildings[2][1].effect = function(m){ map[tileSelected[0]][tileSelected[1]].defense += 2*(1-(2*m)); map[tileSelected[0]][tileSelected[1]].pass = m-1;}
	buildings[2][2].cost = [4,2,0,4];
	buildings[2][2].description = "High Wall";
	buildings[2][2].effect = function(m){ map[tileSelected[0]][tileSelected[1]].defense += 3*(1-(2*m)); map[tileSelected[0]][tileSelected[1]].pass = m-1;}
	buildings[2][3].cost = [4, 4, 0, 4];
	buildings[2][3].description = "Gate House";
	buildings[2][3].effect = function(m){ map[tileSelected[0]][tileSelected[1]].defense += 2.5*(1-(2*m)); map[tileSelected[0]][tileSelected[1]].pass = 1-m;}
	buildings[2][4].cost = [4, 4, 0, 4];
	buildings[2][4].description = "moat";
	buildings[2][4].effect = function(m){ map[tileSelected[0]][tileSelected[1]].defense += 6*(1-(2*m));}
	buildings[2][5].cost = [5, 5, 0, 10];
	buildings[2][5].description = "Guard Tower";
	buildings[2][5].effect = function(m){ map[tileSelected[0]][tileSelected[1]].defense += 7*(1-(2*m));}
	buildings[2][6].cost = [5, 10, 0, 15];
	buildings[2][6].description = "Small Keep";
	buildings[2][6].effect = function(m){ map[tileSelected[0]][tileSelected[1]].defense += 10*(1-(2*m));}
	buildings[2][7].cost = [15, 15, 0, 15];
	buildings[2][7].description = "castle";
	buildings[1][7].effect = function(m){ map[tileSelected[0]][tileSelected[1]].defense += 20*(1-(2*m));}
	//Offense
	buildings[3][0].cost = [4,0,0,5];
	buildings[3][0].description = "Training Ground";
	buildings[3][0].effect = function(m){ p.dom.rMax.population += (1-(2*m))*10;}
	buildings[3][1].cost = [6,0,0,5];
	buildings[3][1].description = "Barracks";
	buildings[3][1].effect = function(m){ p.dom.rMax.population += (1-(2*m))*10;}
	buildings[3][2].cost = [6,4,0,5];
	buildings[3][2].description = "Blacksmith";
	buildings[3][2].effect = function(m){ p.dom.rMax.population += (1-(2*m))*10;}
	buildings[3][3].cost = [10,0,0,10]
	buildings[3][3].description = "archer creation. 10w, 10m";
	buildings[3][3].effect = function(m){ p.dom.rMax.population += (1-(2*m))*10;}
	buildings[3][4].cost = [10,0,0,10]
	buildings[3][4].description = "cavalry creation. 10w, 10m";
	buildings[3][4].effect = function(m){ p.dom.rMax.population += (1-(2*m))*10;}
	buildings[3][5].cost = [10,0,100,10]
	buildings[3][5].description = "commander recruitment. 10w, 1g, 10m";
	buildings[3][5].effect = function(m){ p.dom.rMax.population += (1-(2*m))*10;}
	buildings[3][6].cost = [3,3,1,15]
	buildings[3][6].description = "mercenary units. 3w, 3s, 1g, 15m";
	buildings[3][6].effect = function(m){ p.dom.rMax.population += (1-(2*m))*10;}
	buildings[3][7].cost = [15, 5, 0, 10];
	buildings[3][7].description = "siege creation. 15w 5s 10m";
	buildings[3][7].effect = function(m){ p.dom.rMax.population += (1-(2*m))*10;}

	//Defense







	function Tile()
	{
		this.curred = 0;
		this.owner = -1;
		this.travelQ = 0;
		this.heat = 1;
		this.elevation = .1;
		this.wetness = 0;
		this.defense = 0;
		this.pass = 0;
		this.type = 'g';
		this.id = -1;
		this.checked = -1;
		this.building = [-1, -1];
		this.road = -1;
		this.zone = -1;
		this.zStrength = 0;
	}
	function Noble()
	{
		this.name = "";
		this.skill = 0;
	}
	function Society(){
		this.levels = [];
	}
	function Resources(w1, s1, g1, f1, m1, p1){
	var w = w1 || 0; var s = s1 || 0; var g = g1 || 0; var f = f1 || 0; var m = m1 || 0; var p = p1 || 0;
		this.ore = 0;
		this.wood = w; this.stone = s;
		this.gold = g; this.food = f;
		this.population = p;
		this.manpower = m;
		this.sailors = 0;
	}
	function Domain(){
		this.name = "";
		this.territory = [];
		this.size = 0;
		this.development = 0;
		this.income = new Resources();
		this.max = new Resources(3, 10, 4, 50, 2, Infinity);
		this.res = new Resources();
		this.rMax = new Resources(15, 15, 3, 200, 5, 5);
	}
	function Player(){
		this.manpower = 100;
		this.zones = [];
		this.dom = new Domain();
		this.territory = [];
		this.roads = [];
		this.menView = [0, [-1, -1]];
		this.citInd = -1;
		this.character;
		this.action = "claiming";
		this.turn = 0;
		this.size = 0;
		this.color = "red";
		this.tileSelected
		this.yView = 0;
		this.xView = 0;
		this.zoom = 10;
	}
	function rIncome(){
		for(i = 0; i < p.zones.length; i++){
			if(p.zones[i].res.population > p.zones[i].rMax.population){ //overpopulated
				p.zones[i].income.population -= 2 + (.075 * p.zones[i].res.population);
				p.zones[i].income.food -= (p.zones[i].res.population-p.zones[i].rMax.population);
				p.zones[i].income.manpower++;
			}
			p.zones[i].income.food = Math.min(p.zones[i].income.food, p.zones[i].res.population/.5);
			p.zones[i].res.food += p.zones[i].income.food - p.zones[i].res.population;
			if(p.zones[i].res.food < 0){ //famine
				p.zones[i].income.manpower *= .5;
				p.zones[i].income.population -= (4 + (.1 * p.zones[i].res.population));
			}
			p.zones[i].income.manpower = Math.min(p.zones[i].income.manpower, p.zones[i].max.manpower);
			p.manpower += p.zones[i].income.manpower;
			p.zones[i].res.population *= .95;
			p.zones[i].res.population += p.zones[i].income.population;
			p.zones[i].income.wood = Math.min(p.zones[i].income.wood, p.zones[i].res.population/10);
			p.zones[i].res.wood += p.zones[i].income.wood;
			if(p.zones[i].res.wood > p.zones[i].rMax.wood){
				p.zones[i].res.wood = p.zones[i].rMax.wood;
			}
			if(p.zones[i].res.food > p.zones[i].rMax.food){
				p.zones[i].res.food = p.zones[i].rMax.food;
			}
		}
	}
	function scanRoads(y1, x1){ //res needs to pass on/merge
		var yS1 = y1 || -1;
		var xS1 = x1 || -1;
		var chosen = -1;
		var merge = [];
		if(yS1 && xS1 && p.roads.length < p.zones.length){
			if(map[safeC(yS1+1)][safeC(xS1)].building[0] == 0 && map[safeC(yS1+1)][safeC(xS1)].building[1] == 0 && map[safeC(yS1+1)][safeC(xS1)].zone > -1){ merge.push(map[safeC(yS1+1)][safeC(xS1)].zone); }
			if(map[safeC(yS1-1)][safeC(xS1)].building[0] == 0 && map[safeC(yS1-1)][safeC(xS1)].building[1] == 0 && map[safeC(yS1-1)][safeC(xS1)].zone > -1){ merge.push(map[safeC(yS1-1)][safeC(xS1)].zone); }
			if(map[safeC(yS1)][safeC(xS1+1)].building[0] == 0 && map[safeC(yS1)][safeC(xS1+1)].building[1] == 0 && map[safeC(yS1)][safeC(xS1+1)].zone > -1){ merge.push(map[safeC(yS1)][safeC(xS1+1)].zone); }
			if(map[safeC(yS1)][safeC(xS1-1)].building[0] == 0 && map[safeC(yS1)][safeC(xS1-1)].building[1] == 0 && map[safeC(yS1)][safeC(xS1-1)].zone > -1){ merge.push(map[safeC(yS1)][safeC(xS1-1)].zone); }
		}
		for(i = 0; i < p.zones.length; i++){
			for(j = 0; j < p.zones[i].territory.length; j++){
				map[safeC(p.zones[i].territory[j][0])][safeC(p.zones[i].territory[j][1])].zone = -1;
			}
		}
		var zStack = [];
		for(i = 0; i < p.roads.length; i++){
			zStack[i] = new Domain();
			for(j = 0; j < p.roads[i].length; j++){
				var y = p.roads[i][j][0];
				var x = p.roads[i][j][1];
				if(y == yS1 && x == xS1){ chosen = i; }
				for(a = -2; a < 3; a++){
					for(b = -2; b < 3; b++){
						if(map[safeC(a+y)][safeC(b+x)].owner != p.turn && map[safeC(a+y)][safeC(b+x)].zone == -1){ //potential
							map[safeC(a+y)][safeC(b+x)].zone = i;
							map[safeC(a+y)][safeC(b+x)].zStrength = Math.sqrt(a*a + b*b);
							zStack[i].territory.push([a+y, b+x]);
						}
						else if(Math.sqrt(a*a + b*b) < map[safeC(a+y)][safeC(b+x)].zStrength){
							map[safeC(a+y)][safeC(b+x)].zone = i;
							map[safeC(a+y)][safeC(b+x)].zStrength = Math.sqrt(a*a + b*b);
							zStack[i].territory.push([a+y, b+x]);
						}
						else if(map[safeC(a+y)][safeC(b+x)].zone == -1){
							map[safeC(a+y)][safeC(b+x)].zone = i;
							map[safeC(a+y)][safeC(b+x)].zStrength = Math.sqrt(a*a + b*b);
							zStack[i].territory.push([a+y, b+x]);
							zStack[i].size++;
							zStack[i].rMax.population += .2;
							switch(map[safeC(a+y)][safeC(b+x)].type){
								case 'f': zStack[i].income.wood+=.08;
								case 'w':
								case 'r': zStack[i].income.food+=.5; break;
								case 'c':
								case 'i':
								case 'g': zStack[i].income.population+=.01; break;
							}
							if(map[safeC(a+y)][safeC(b+x)].building[0] != -1){
								zStack[i].development++;
								if(map[safeC(a+y)][safeC(b+x)].building[0] == 0){
									switch(map[safeC(a+y)][safeC(b+x)].building[1]){
										case 0:zStack[i].income.population+=.05; zStack[i].income.manpower += .01;break; //Road
										case 1:zStack[i].income.food += 5; zStack[i].income.manpower += .1;zStack[i].income.population += .1;break; //Farm
										case 2:zStack[i].max.wood += 4; zStack[i].income.wood += .25; break; //Lumber Mill
										case 3:zStack[i].rMax.food += 50; zStack[i].max.food += 50; zStack[i].income.food += 10; break; //Granary
										case 4:zStack[i].rMax.wood += 15; zStack[i].rMax.population += 10; break; //Warehouse
									}
								}
								else if(map[safeC(a+y)][safeC(b+x)].building[0] == 1 && map[safeC(a+y)][safeC(b+x)].building[1] == 0){ //House
									zStack[i].rMax.population += 10;
									zStack[i].income.population+=.5;
									zStack[i].income.manpower += .1;
									zStack[i].max.manpower++;
								}
							}
						}
					}
				}
			}
			zStack[i].income.manpower += zStack[i].res.population/100;
			if(zStack[i].income.wood > zStack[i].max.wood){
				zStack[i].income.wood = zStack[i].max.wood;
			}
			if(zStack[i].income.food > zStack[i].max.food){
				zStack[i].income.food = zStack[i].max.food;
			}
			if(zStack[i].income.manpower > zStack[i].max.manpower){
				zStack[i].income.manpower = zStack[i].max.manpower;
			}
		}
		if(merge.length > 1){
		for(z = 0; z < merge.length; z++){
				zStack[chosen].res.wood += p.zones[merge[z]].res.wood;
				zStack[chosen].res.food += p.zones[merge[z]].res.food;
				zStack[chosen].res.population += p.zones[merge[z]].res.population;
			}
		}
		for(var y = 0; y < Math.min(zStack.length, p.zones.length); y++){
			if(merge.indexOf(y) == -1){
				zStack[y].res.wood += p.zones[y].res.wood;
				zStack[y].res.food += p.zones[y].res.food;
				zStack[y].res.population += p.zones[y].res.population;
			}
		}
		p.zones = zStack;
	}
	function canBuy(y, x, b0, b1){
		var z = map[y][x].zone;
		var a0 = p.menView[1][0];
		var a1 = p.menView[1][1];
		if(z == -1 || (a0 == 0 && a1 == 0)){
			return p.manpower >= buildings[0][0].cost[3];
		}
		else if(z > -1){
			return(p.manpower >= buildings[a0][a1].cost[3] && map[y][x].zone > -1 && p.zones[map[y][x].zone].res.wood >= buildings[a0][a1].cost[0]);
		}
	}
	function genName(male){
		var name = "";
		var mBegs = ["Le", "Ke", "Je", "Be", "Me", "Ko", "Ye", "E", "Cy", "Ce", "Ci", "A"];
		var mMids = ["k", "r", "ke", "re", "vin", "t", "s"];
		var mEnds = ["os", "ih", "o", "it", "en", "in", "de", "des", "re", "ro", "ov", "us", "on", "ic"];
		
		var fBegs = [["A", "E", "O", "Ke","Ti", "Di", "De", "Li", "Ki", "Ve", "Ma", "Ni", "Ari", "So", "Ky"], ["Al", "Ev", "Ky"]];
		var fMids = [["or", "ex", "an"], ["r", "n", "c", "s", "r", "ret", "ken", "y"]];
		var fEnds = ["a", "i", "ei", "is", "ia", "a", "iev", "ana", "in"];
		if(male){
			
			return "" + mBegs[Math.floor(Math.random() * mBegs.length)] + "" + mMids[Math.floor(Math.random() * mMids.length)] + "" + mEnds[Math.floor(Math.random() * mEnds.length)];
		}
		else{
			var lon = Math.random();
			if(lon > fBegs[0].length/(fBegs[0].length + fBegs[1].length)){ lon = 1; } else { lon = 0; }
			name += fBegs[lon][Math.floor(Math.random() * fBegs[lon].length)];
			lon = (lon+1) % 2;
			name += fMids[lon][Math.floor(Math.random()* fMids[lon].length)];
			lon = 0;
			name += fEnds[lon][Math.floor(Math.random()* fEnds[lon].length)];
			return name;
		}
	}
	function safeC(a)
	{
		if(a >= MAPSIZE){
			return a%MAPSIZE;
		}
		else if(a < 0){
			return safeC(a+MAPSIZE);
		}
		return a;
	}
	function Roads(){
		var index = p.roads.length;
		var rStack = [];
		function runInner(y0, x0){
			var stack = [[y0, x0]];
			while(stack.length > 0){
				spot = stack.pop();
				rStack[rStack.length-1].push(spot);
				y = safeC(spot[0]);
				x = safeC(spot[1]);
				map[y][x].road = index;
				if(map[safeC(y-1)][x].building[0] == 0 && map[safeC(y-1)][x].building[1] == 0 && map[safeC(y-1)][x].road != index){
					stack.push([y-1,x]);
				}
				if(map[safeC(y+1)][x].building[0] == 0 && map[safeC(y+1)][x].building[1] == 0 && map[safeC(y+1)][x].road != index){
					stack.push([y+1,x]);
				}
				if(map[y][safeC(x-1)].building[0] == 0 && map[y][safeC(x-1)].building[1] == 0 && map[y][safeC(x-1)].road != index){
					stack.push([y,x-1]);
				}
				if(map[y][safeC(x+1)].building[0] == 0 && map[y][safeC(x+1)].building[1] == 0 && map[y][safeC(x+1)].road != index){
					stack.push([y,x+1]);
				}
			}
		}
		for(a = 0; a < p.territory.length; a++){
			var aY = p.territory[a][0];
			var aX = p.territory[a][1];
			if(map[aY][aX].building[0] == 0 && map[aY][aX].building[1] == 0 && map[aY][aX].road == -1){
				rStack.push([]);
				runInner(aY, aX);
				index++;
			}
		}
		for(i = 0; i < rStack.length; i++){
			for(j = 0; j < rStack[i].length; j++){
				map[safeC(rStack[i][j][0])][safeC(rStack[i][j][1])].road = -1;
			}
		}
		p.roads = rStack;
	}