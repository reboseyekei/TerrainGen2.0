//Classes: -----------------
		function Building(){
			this.name;
			this.type;
			this.effect;
			this.cost;
			this.description;
		}
	var buildings = [[], [], [], []];
	var bNames = [["Road","Farm","Shop","Granary","Warehouse","Market","Workshop","Bank"],["Housing","Plaza","Guild Hall","University","Temple","Tavern","Manor","Merchant Hall"],["Palisade","Low Wall","High Wall","Gatehouse","Moat","Guard Tower","Small Keep","Castle"],["Training Ground","Barracks","Military Academy","Blacksmith","Archery Yard","Cavalry Yard","Mercenary Yard","Siege Workshop"]];
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
	buildings[0][0].effect = function(m){ map[tileSelected[0]][tileSelected[1]].pass += 2*(1-(2*m)); Roads(); scanRoads();}
	buildings[0][1].cost = [3,0,0,3];
	buildings[0][1].description = "Farm";
	buildings[0][1].effect = function(m){ }
	buildings[0][2].cost = [3,0,0,3];
	buildings[0][2].description = "Shop";
	buildings[0][2].effect = function(m){ p.dom.development += (1-(2*m))*10;}	
	buildings[0][3].cost = [10,0,0,10]
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
	buildings[1][0].effect = function(m){ p.dom.housing += (1-(2*m))*10; p.dom.income.population += .1; p.dom.income.manpower += .1;}
	buildings[1][1].cost = [3,0,0,5];
	buildings[1][1].description = "Plaza";
	buildings[1][1].effect = function(m){ p.dom.housing += (1-(2*m))*10;}
	buildings[1][2].cost = [3,0,100,5];
	buildings[1][2].description = "Guild";
	buildings[1][2].effect = function(m){ p.dom.housing += (1-(2*m))*10;}
	buildings[1][3].cost = [10, 10, 100, 0];
	buildings[1][3].description = "university. 10w 10s 1g";
	buildings[1][3].effect = function(m){ p.dom.housing += (1-(2*m))*10;}
	buildings[1][4].cost = [10, 10, 0, 10];
	buildings[1][4].description = "temple";
	buildings[1][4].effect = function(m){ p.dom.housing += (1-(2*m))*10;}
	buildings[1][5].cost = [5, 15, 0, 15];
	buildings[1][5].description = "tavern";
	buildings[1][5].effect = function(m){ p.dom.housing += (1-(2*m))*10;}
	buildings[1][6].cost = [0, 0, 200, 5];
	buildings[1][6].description = "noble estate. 200g 5m";
	buildings[1][6].effect = function(m){ p.dom.housing += (1-(2*m))*10;}
	buildings[1][7].cost = [0, 0, 200, 10];
	buildings[1][7].description = "merchant estate. 200g 10m";
	buildings[1][7].effect = function(m){ p.dom.housing += (1-(2*m))*10;}
	
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
	buildings[3][0].effect = function(m){ p.dom.housing += (1-(2*m))*10;}
	buildings[3][1].cost = [6,0,0,5];
	buildings[3][1].description = "Barracks";
	buildings[3][1].effect = function(m){ p.dom.housing += (1-(2*m))*10;}
	buildings[3][2].cost = [6,4,0,5];
	buildings[3][2].description = "Blacksmith";
	buildings[3][2].effect = function(m){ p.dom.housing += (1-(2*m))*10;}
	buildings[3][3].cost = [10,0,0,10]
	buildings[3][3].description = "archer creation. 10w, 10m";
	buildings[3][3].effect = function(m){ p.dom.housing += (1-(2*m))*10;}
	buildings[3][4].cost = [10,0,0,10]
	buildings[3][4].description = "cavalry creation. 10w, 10m";
	buildings[3][4].effect = function(m){ p.dom.housing += (1-(2*m))*10;}
	buildings[3][5].cost = [10,0,100,10]
	buildings[3][5].description = "commander recruitment. 10w, 1g, 10m";
	buildings[3][5].effect = function(m){ p.dom.housing += (1-(2*m))*10;}
	buildings[3][6].cost = [3,3,1,15]
	buildings[3][6].description = "mercenary units. 3w, 3s, 1g, 15m";
	buildings[3][6].effect = function(m){ p.dom.housing += (1-(2*m))*10;}
	buildings[3][7].cost = [15, 5, 0, 10];
	buildings[3][7].description = "siege creation. 15w 5s 10m";
	buildings[3][7].effect = function(m){ p.dom.housing += (1-(2*m))*10;}
	
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
		}
		function Noble()
		{
			this.name = "";
			this.skill = 0;
		}
		function Society(){
			this.levels = [];
		}
		function Resources(){
			this.dirt = 0; this.sand = 0; this.ore = 0;
			this.wood = 0; this.stone = 0;
			this.gold = 0; this.food = 0;
			this.population = 0;
			this.manpower = 0;
			this.sailors = 0;
		}
		function Domain(){
			this.name = "";
			this.territory = [];
			this.size = 0;
			this.development = 0;
			this.income = new Resources();
			this.housing = 50;
		}
		function Player(){
			this.resources = new Resources();
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
		function addIncome(){
			p.resources.wood += p.dom.income.wood;
			p.resources.food += p.dom.income.food;
			p.resources.stone += p.dom.income.stone;
			p.resources.gold += p.dom.income.gold;
			p.resources.manpower += p.dom.income.manpower;
			p.resources.population += p.dom.income.population;
		}
		function rIncome(){
			for(i = 0; i < p.zones.length; i++){
				for(j = 0; j < p.zones[i].length; j++){
					
				}
			]
		}
		function scanRoads(){
			for(i = 0; i < p.zones.length; i++){
				for(j = 0; j < p.zones[i].territory.length; j++){
					map[p.zones[i].territory[j][0]][p.zones[i].territory[j][1]].zone = -1;
				}
			}
			var zStack = [];
			for(i = 0; i < p.roads.length; i++){
				zStack[i] = new Domain();
				for(j = 0; j < p.roads[i].length; j++){
					var y = p.roads[i][j][0];
					var x = p.roads[i][j][1];
					for(a = -2; a < 3; a++){
						for(b = -2; b < 3; b++){
							if(map[safeC(a+y)][safeC(b+x)].owner == p.turn && map[safeC(a+y)][safeC(b+x)].zone == -1){
								map[safeC(a+y)][safeC(b+x)].zone = i;
								zStack[i].territory.push([a+y, b+x]);
								zStack[i].size++;
								switch(map[safeC(a+y)][safeC(b+x)].type){
									case 'f': zStack[i].income.wood+=.1;
									case 'w':
									case 'r': zStack[i].income.food+=1; break;
									case 'g' zStack[i].income.food+=.1; break;
								}
								if(map[safeC(a+y)][safeC(b+x)].building[0] != -1){
									zStack[i].development++;
									if(map[safeC(a+y)][safeC(b+x)].building[0] == 0 && map[safeC(a+y)][safeC(b+x)].building[1] == 1){
										zStack[i].income.food += 5;
										zStack[i].income.manpower += .2;
									}
									else if(map[safeC(a+y)][safeC(b+x)].building[0] == 1 && map[safeC(a+y)][safeC(b+x)].building[1] == 0){
										zStack[i].housing += 10;
									}
								}
							}
						}
					}
				}
			}
			p.zones = zStack;
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
					map[rStack[i][j][0]][rStack[i][j][1]].road = -1;
				}
			}
			p.roads = rStack;
		}