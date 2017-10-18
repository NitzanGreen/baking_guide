(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 1000,
	height: 700,
	fps: 24,
	color: "#D4C5BE",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/המדריך לאופה החובב_atlas_P_.png", id:"המדריך לאופה החובב_atlas_P_"}
	]
};



lib.ssMetadata = [
		{name:"המדריך לאופה החובב_atlas_P_", frames: [[1490,2487,1384,1055],[3592,5161,477,74],[3307,2398,317,21],[3969,1406,114,69],[3369,4499,616,376],[3033,5209,205,165],[2826,4877,559,330],[3913,1576,72,72],[3913,889,143,110],[2357,4872,467,425],[3913,231,153,178],[2876,2487,1046,1314],[3913,1533,141,41],[3307,2249,417,147],[2826,5209,205,165],[0,2042,1488,1503],[1270,5130,208,225],[1490,2042,616,376],[3726,2249,295,180],[2587,3544,210,238],[2587,3803,962,694],[3592,5237,225,150],[1164,4657,215,89],[2587,4499,780,371],[3387,5161,203,180],[3913,551,55,336],[3987,1576,64,67],[1490,3544,1095,1211],[3970,551,77,224],[3913,1334,54,197],[712,4917,372,353],[2121,0,1184,2485],[3969,1334,120,70],[681,5272,197,121],[1055,3902,372,353],[3819,5237,225,150],[0,0,2119,2040],[3913,411,174,138],[3913,1001,124,123],[1055,3547,372,353],[3551,3803,543,647],[3913,1230,130,102],[3913,1126,130,102],[1889,5256,225,150],[3387,4877,652,282],[1480,5130,208,225],[2116,5256,225,150],[3970,777,88,103],[0,5253,225,150],[360,5011,290,249],[3307,0,604,2247],[1164,4257,200,398],[0,4291,710,718],[0,3547,1053,742],[3913,0,166,229],[712,4291,450,624],[454,5262,225,150],[1164,4757,742,371],[1908,4757,447,497],[227,5262,225,150],[0,5011,358,240],[1690,5130,197,196],[1086,5130,182,282],[3913,1675,93,28],[4039,1031,53,28],[3987,1645,96,28],[4039,1001,55,28],[4049,674,30,30],[3969,1477,108,29],[4049,582,38,29],[4049,643,35,29],[4049,613,38,28],[4049,551,40,29]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.alimHQ = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bannerHQ = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bar = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.beginner = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.benmarie105 = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bhushot01 = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bhushot3 = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.check = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.croissant = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.croissant2 = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.cupcake01 = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.cupcake = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.gas = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.gas_03 = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.gvina01 = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.gvina = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hafrada01 = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.haktsafa05 = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.iveret05 = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.kipul = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.kitchen = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.kosot01 = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.lehem = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.lehem202 = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.lisha020505 = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.maaroh = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Macaroon = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.macaroonHQ = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.marit = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.matrefa = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.matrefa105 = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.meabed = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.medium = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.mesanenet = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.mesanenet205 = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.metuganim01 = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.metuganim = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.mida2 = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.mishkal = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.mishkal105 = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.mixerHQ = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.ozenpil = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.ozenpil_1 = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.parich = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.parichHQpngcopy = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.Patissier01 = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.preline01 = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.pro = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.ravuch01 = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.ridud = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.sakitpngcopy = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.sakit105 = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.stand = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.stand1 = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.tanur = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.tanur104 = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.tart2 = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.tartHQ = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.timer101 = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.tiramisu01 = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.tiramisuHQ02 = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.zantar = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.ziluf = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.אפייהעיוורת = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.בןמארי = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.הפרדתביצים = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.הקצפה = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.זילוף = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.טמפרורשוקולד = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.קרמול = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.קיפול = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.רידוד = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.לישה = function() {
	this.spriteSheet = ss["המדריך לאופה החובב_atlas_P_"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.zantarglow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.zantar();
	this.instance.parent = this;
	this.instance.setTransform(-98.5,-98);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.5,-98,197,196);


(lib.stoveglow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tanur();
	this.instance.parent = this;
	this.instance.setTransform(-83,-114.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83,-114.5,166,229);


(lib.sakitglow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sakitpngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-34.3,-127.7,0.114,0.114);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.3,-127.7,68.7,255.6);


(lib.mixerglow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mixerHQ();
	this.instance.parent = this;
	this.instance.setTransform(-189.1,-225.4,0.697,0.697);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-189.1,-225.4,378.3,450.8);


(lib.mishkalglow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mishkal();
	this.instance.parent = this;
	this.instance.setTransform(-62,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62,-61.5,124,123);


(lib.midaglow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mida2();
	this.instance.parent = this;
	this.instance.setTransform(-87,-69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87,-69,174,138);


(lib.mesanenetglow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mesanenet();
	this.instance.parent = this;
	this.instance.setTransform(-98.5,-60.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.5,-60.5,197,121);


(lib.meabedglow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.meabed();
	this.instance.parent = this;
	this.instance.setTransform(-247.6,-519.7,0.418,0.418);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-247.6,-519.7,495.2,1039.4);


(lib.matrefaglow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.matrefa();
	this.instance.parent = this;
	this.instance.setTransform(-27,-98.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-98.5,54,197);


(lib.maritglow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.marit();
	this.instance.parent = this;
	this.instance.setTransform(-38.5,-112);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-112,77,224);


(lib.maarohglow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.maaroh();
	this.instance.parent = this;
	this.instance.setTransform(-27.5,-168);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.5,-168,55,336);


(lib.gasglow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gas();
	this.instance.parent = this;
	this.instance.setTransform(-70.5,-20,1,0.976);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.5,-20,141,40);


(lib.ziluf_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.זילוף();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.21,scaleY:1.21,x:-18,y:-18},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.temprur = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.טמפרורשוקולד();
	this.instance.parent = this;
	this.instance.setTransform(-58,-16,1.077,1.077);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.18,scaleY:1.18,x:-64,y:-18},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-16,116.3,31.3);


(lib.ridud_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.רידוד();
	this.instance.parent = this;
	this.instance.setTransform(-19,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.26,scaleY:1.26,x:-24,y:-18},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-14,38,28);


(lib.lisha = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.לישה();
	this.instance.parent = this;
	this.instance.setTransform(-20,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.29,scaleY:1.29,x:-26,y:-19},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-14.5,40,29);


(lib.kirmul = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.קרמול();
	this.instance.parent = this;
	this.instance.setTransform(-19,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.22,scaleY:1.22,x:-23,y:-18},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-14.5,38,29);


(lib.kipul_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.קיפול();
	this.instance.parent = this;
	this.instance.setTransform(-17.5,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.23,scaleY:1.23,x:-22,y:-18},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.5,-14.5,35,29);


(lib.iveret = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.אפייהעיוורת();
	this.instance.parent = this;
	this.instance.setTransform(-46.5,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.16,scaleY:1.16,x:-55,y:-17},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,-14,93,28);


(lib.haktsafa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.הקצפה();
	this.instance.parent = this;
	this.instance.setTransform(-27.5,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.21,scaleY:1.21,x:-33,y:-17},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.5,-14,55,28);


(lib.hafrada = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.הפרדתביצים();
	this.instance.parent = this;
	this.instance.setTransform(-48,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.16,scaleY:1.16,x:-58,y:-16},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48,-14,96,28);


(lib.check_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.check();
	this.instance.parent = this;
	this.instance.setTransform(-6.4,-6.4,0.179,0.179);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-6.4,12.9,12.9);


(lib.benmarie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.בןמארי();
	this.instance.parent = this;
	this.instance.setTransform(-26.5,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.24,scaleY:1.24,x:-36,y:-17},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-14,53,28);


(lib.pan_for_kirmul = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9933").s().p("ACHCXQgDgygMAAQgDAAgsAjQgpAigIgHQgKgIgBgZQgCgYgHgGQgMgKgeASQghAVgRAnQgJAUgLgaQgLgbALgLQAfgdgagIQgWgGg6AJQgXAEAEgQQADgJATgcQApg4gggCQgegBgwAbQgQAJgGAAQgIgBAAgRQAAhQBNg5QBNg5BrAAQBqAABNA5QAbAUAQAxQARA0AQAQQAYAXALAuQAMAzgWAXQgFAFg4AVQg6AWgFAEIgBAAQgEAAgCgsg");
	this.shape.setTransform(-252.9,50.5,0.318,0.208,30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9933").s().p("ACHCXQgDgygMAAQgDAAgsAjQgpAigIgHQgKgIgBgZQgCgYgHgGQgMgKgeASQghAVgRAnQgJAUgLgaQgLgbALgLQAfgdgagIQgWgGg6AJQgXAEAEgQQADgJATgcQApg4gggCQgegBgwAbQgQAJgGAAQgIgBAAgRQAAhQBNg5QBNg5BrAAQBqAABNA5QAbAUAQAxQARA0AQAQQAYAXALAuQAMAzgWAXQgFAFg4AVQg6AWgFAEIgBAAQgEAAgCgsg");
	this.shape_1.setTransform(-263.9,68.5,0.318,0.541,135);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9933").s().p("ACHCXQgDgygMAAQgDAAgsAjQgpAigIgHQgKgIgBgZQgCgYgHgGQgMgKgeASQghAVgRAnQgJAUgLgaQgLgbALgLQAfgdgagIQgWgGg6AJQgXAEAEgQQADgJATgcQApg4gggCQgegBgwAbQgQAJgGAAQgIgBAAgRQAAhQBNg5QBNg5BrAAQBqAABNA5QAbAUAQAxQARA0AQAQQAYAXALAuQAMAzgWAXQgFAFg4AVQg6AWgFAEIgBAAQgEAAgCgsg");
	this.shape_2.setTransform(-296.4,59.4,0.517,0.291,-120);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C6783B").s().p("ACHCXQgDgygMAAQgDAAgsAjQgpAigIgHQgKgIgBgZQgCgYgHgGQgMgKgeASQghAVgRAnQgJAUgLgaQgLgbALgLQAfgdgagIQgWgGg6AJQgXAEAEgQQADgJATgcQApg4gggCQgegBgwAbQgQAJgGAAQgIgBAAgRQAAhQBNg5QBNg5BrAAQBqAABNA5QAbAUAQAxQARA0AQAQQAYAXALAuQAMAzgWAXQgFAFg4AVQg6AWgFAEIgBAAQgEAAgCgsg");
	this.shape_3.setTransform(-260.1,64.5,0.802,1.068,108.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9933").s().p("ACHCXQgDgygMAAQgDAAgsAjQgpAigIgHQgKgIgBgZQgCgYgHgGQgMgKgeASQghAVgRAnQgJAUgLgaQgLgbALgLQAfgdgagIQgWgGg6AJQgXAEAEgQQADgJATgcQApg4gggCQgegBgwAbQgQAJgGAAQgIgBAAgRQAAhQBNg5QBNg5BrAAQBqAABNA5QAbAUAQAxQARA0AQAQQAYAXALAuQAMAzgWAXQgFAFg4AVQg6AWgFAEIgBAAQgEAAgCgsg");
	this.shape_4.setTransform(-265.9,24,0.722,0.722,-15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C6783B").s().p("ACHCXQgDgygMAAQgDAAgsAjQgpAigIgHQgKgIgBgZQgCgYgHgGQgMgKgeASQghAVgRAnQgJAUgLgaQgLgbALgLQAfgdgagIQgWgGg6AJQgXAEAEgQQADgJATgcQApg4gggCQgegBgwAbQgQAJgGAAQgIgBAAgRQAAhQBNg5QBNg5BrAAQBqAABNA5QAbAUAQAxQARA0AQAQQAYAXALAuQAMAzgWAXQgFAFg4AVQg6AWgFAEIgBAAQgEAAgCgsg");
	this.shape_5.setTransform(-266.8,32.7,1.185,1.389,-15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C6783B").s().p("ACHCXQgDgygMAAQgDAAgsAjQgpAigIgHQgKgIgBgZQgCgYgHgGQgMgKgeASQghAVgRAnQgJAUgLgaQgLgbALgLQAfgdgagIQgWgGg6AJQgXAEAEgQQADgJATgcQApg4gggCQgegBgwAbQgQAJgGAAQgIgBAAgRQAAhQBNg5QBNg5BrAAQBqAABNA5QAbAUAQAxQARA0AQAQQAYAXALAuQAMAzgWAXQgFAFg4AVQg6AWgFAEIgBAAQgEAAgCgsg");
	this.shape_6.setTransform(-289.6,55.1,0.802,1.068,-161.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D7783B").s().p("AhsDiIhgguQhUgfAAiVQAAgzAagmQAYglAtgTQAWgKBGg4QA1gqAtAAQB0AABUBKQAuAqAbA0QAfA6gVAbQgYAhgVA1QghBSgFAMQgRAkhAAUQg3AThAgBQgvAAg6gcg");
	this.shape_7.setTransform(-271.2,42.9,1.6,1.843);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#494949").ss(1,1,1).p("AGAAAQAACfhxBwQhxBxieAAQidAAhxhxQhwhwAAifQAAieBwhwQBxhxCdAAQCeAABxBxQBxBwAACeg");
	this.shape_8.setTransform(-272.1,44,1.413,1.413);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AkOEPQhwhxgBieQABidBwhxQBwhwCegBQCfABBwBwQBxBxgBCdQABCehxBxQhwBxifAAQieAAhwhxg");
	this.shape_9.setTransform(-272.1,44,1.413,1.413);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#494949").ss(1,1,1).p("AHeAAQAADGiMCMQiMCMjGAAQjEAAiNiMQiMiMAAjGQAAjFCMiMQCNiMDEAAQDGAACMCMQCMCMAADFg");
	this.shape_10.setTransform(-272,44,1.207,1.207);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AlRFSQiLiMAAjGQAAjECLiMQCMiMDFgBQDFABCMCMQCNCMAADEQAADGiNCMQiMCLjFABQjFgBiMiLg");
	this.shape_11.setTransform(-272,44,1.207,1.207);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#494949").ss(1,1,1).p("AB+AAQAAAUglAOQglAOg0AAQgzAAgmgOQgkgOAAgUQAAgTAkgPQAmgNAzAAQA0AAAlANQAlAPAAATg");
	this.shape_12.setTransform(-114.1,44.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AhZAiQglgOAAgUQAAgTAlgOQAmgPAzAAQA0AAAlAPQAlAOAAATQAAAUglAOQglAOg0AAQgzAAgmgOg");
	this.shape_13.setTransform(-114.1,44.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#494949").ss(1,1,1).p("AoghbIRBATIAACVIxBAPg");
	this.shape_14.setTransform(-153.4,44.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#010101").s().p("AoghaIRBASIAACVIxBAOg");
	this.shape_15.setTransform(-153.4,44.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#D8D8D8").ss(1,1,1).p("AKIAAQAAEMi+C+Qi+C+kMAAQkLAAi+i+Qi+i+AAkMQAAkLC+i+QC+i+ELAAQEMAAC+C+QC+C+AAELg");
	this.shape_16.setTransform(-272,44);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#010101").s().p("AnJHKQi+i+ABkMQgBkLC+i+QC+i+ELABQEMgBC+C+QC+C+AAELQAAEMi+C+Qi+C+kMAAQkLAAi+i+g");
	this.shape_17.setTransform(-272,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-337.8,-21.8,240,131.6);


(lib.chocolate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("chocolate", "29px 'Bauhaus 93'", "#CCCC00");
	this.text.textAlign = "right";
	this.text.lineHeight = 34;
	this.text.lineWidth = 145;
	this.text.parent = this;
	this.text.setTransform(119.2,24.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AzBpTQJWgLJegEQS7gIAsAgQA2AoBDDbQBEDggMByQAFCXgtC7Qg1DihUAWQhPAWysgJQpYgEpHgJIDrmeIlvjMIFBiUImJivg");
	this.shape.setTransform(40.2,37.5,0.783,0.987);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AghJiQpYgEpHgJIDrmeIlvjMIFBiUImJivIDLj7QJWgLJegEQS7gIAsAgQA2AoBDDbQBEDggMByQAFCXgtC7Qg1DihUAWQg5APp3ABQj6AAlRgDg");
	this.shape_1.setTransform(40.2,37.5,0.783,0.987);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(1,1,1).p("AzBpTQJWgLJegEQS7gIAsAgQA2AoBDDbQBEDggMByQAFCXgtC7Qg1DihUAWQhPAWysgJQpYgEpHgJIDrmeIlvjMIFBiUImJivg");
	this.shape_2.setTransform(30.6,39.9,0.783,0.935);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AghJiQpYgEpHgJIDrmeIlvjMIFBiUImJivIDLj7QJWgLJegEQS7gIAsAgQA2AoBDDbQBEDggMByQAFCXgtC7Qg1DihUAWQg5APp3ABQj6AAlRgDg");
	this.shape_3.setTransform(30.6,39.9,0.783,0.935);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#732A36").s().p("AizDnIAAnMIFnAAIAAHMg");
	this.shape_4.setTransform(-65.2,66.7,1.026,1.061);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#310E12").s().p("AgwgwIBhAAIgvAvIgyAyg");
	this.shape_5.setTransform(-86.1,93.4,0.55,0.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#310E12").s().p("AgwgwIBhAAIgvAvIgyAyg");
	this.shape_6.setTransform(-44.8,40,0.55,0.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#310E12").s().p("AjPELIAAoUIGeAAIAAIUg");
	this.shape_7.setTransform(-68,64);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#99584E").s().p("AjPELIAAoUIGeAAIAAIUg");
	this.shape_8.setTransform(-65.5,66.7,1.13,1.105);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#732A36").s().p("AizDnIAAnMIFnAAIAAHMg");
	this.shape_9.setTransform(-65.2,9.1,1.026,1.061);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#310E12").s().p("AgwgwIBhAAIgvAvIgyAyg");
	this.shape_10.setTransform(-86.1,35.8,0.55,0.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#310E12").s().p("AgwgwIBhAAIgvAvIgyAyg");
	this.shape_11.setTransform(-44.8,-17.6,0.55,0.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#310E12").s().p("AjPELIAAoUIGeAAIAAIUg");
	this.shape_12.setTransform(-68,6.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#99584E").s().p("AjPELIAAoUIGeAAIAAIUg");
	this.shape_13.setTransform(-65.5,9.1,1.13,1.105);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#732A36").s().p("AizDnIAAnMIFnAAIAAHMg");
	this.shape_14.setTransform(-111.6,66.7,1.026,1.061);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#310E12").s().p("AgwgwIBhAAIgvAvIgyAyg");
	this.shape_15.setTransform(-132.5,93.4,0.55,0.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#310E12").s().p("AgwgwIBhAAIgvAvIgyAyg");
	this.shape_16.setTransform(-91.1,40,0.55,0.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#310E12").s().p("AjPELIAAoUIGeAAIAAIUg");
	this.shape_17.setTransform(-114.4,64);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#99584E").s().p("AjPELIAAoUIGeAAIAAIUg");
	this.shape_18.setTransform(-111.8,66.7,1.13,1.105);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#732A36").s().p("AizDnIAAnMIFnAAIAAHMg");
	this.shape_19.setTransform(-111.6,9.1,1.026,1.061);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#310E12").s().p("AgwgwIBhAAIgvAvIgyAyg");
	this.shape_20.setTransform(-132.5,35.8,0.55,0.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#310E12").s().p("AgwgwIBhAAIgvAvIgyAyg");
	this.shape_21.setTransform(-91.1,-17.6,0.55,0.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#310E12").s().p("AjPELIAAoUIGeAAIAAIUg");
	this.shape_22.setTransform(-114.4,6.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#99584E").s().p("AjPELIAAoUIGeAAIAAIUg");
	this.shape_23.setTransform(-111.8,9.1,1.13,1.105);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.3,-24,287.9,123);


(lib.timer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("איפוס", "bold 11px 'Gisha'");
	this.text.textAlign = "center";
	this.text.lineHeight = 15;
	this.text.lineWidth = 58;
	this.text.parent = this;
	this.text.setTransform(-1.2,25.1);

	this.instance = new lib.timer101();
	this.instance.parent = this;
	this.instance.setTransform(-30,-35,0.13,0.13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.4,-35,62.5,75);


(lib.stand1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.stand();
	this.instance.parent = this;
	this.instance.setTransform(-120.3,-104.4,0.339,0.291);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.3,-104.4,240.7,208.9);


(lib.pro_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("מתקדם", "bold 15px 'Gisha'");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 114;
	this.text.parent = this;
	this.text.setTransform(0.5,62);

	this.instance = new lib.pro();
	this.instance.parent = this;
	this.instance.setTransform(-44,-43);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.3,-43,117.6,126.9);


(lib.medium_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Isolation Mode
	this.text = new cjs.Text("בינוני", "bold 15px 'Gisha'");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 114;
	this.text.parent = this;
	this.text.setTransform(1.2,37);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer 1
	this.instance = new lib.medium();
	this.instance.parent = this;
	this.instance.setTransform(-60,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-35,120,93.9);


(lib.beginner_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("מתחיל", "bold 15px 'Gisha'");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 114;
	this.text.parent = this;
	this.text.setTransform(0.2,36.5);

	this.instance = new lib.beginner();
	this.instance.parent = this;
	this.instance.setTransform(-57,-34.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.6,-34.5,117.6,92.9);


(lib.timerback = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("חזור", "bold 28px 'Gisha'");
	this.text.textAlign = "center";
	this.text.lineHeight = 35;
	this.text.lineWidth = 93;
	this.text.parent = this;
	this.text.setTransform(3.3,78.9);

	this.instance = new lib.timer101();
	this.instance.parent = this;
	this.instance.setTransform(-79,-87,0.352,0.352);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CECBC9").s().p("ArBPpIAA/RIWDAAIAAfRg");
	this.shape.setTransform(3.9,27.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79,-87,157.4,214.3);


(lib.notebooktechnew = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("ים", "bold 26px 'Gisha'", "#FFFFFF");
	this.text.textAlign = "right";
	this.text.lineHeight = 32;
	this.text.lineWidth = 102;
	this.text.parent = this;
	this.text.setTransform(-394.2,-13.3);

	this.text_1 = new cjs.Text("טכניקות", "bold 26px 'Gisha'", "#FFFFFF");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 32;
	this.text_1.lineWidth = 102;
	this.text_1.parent = this;
	this.text_1.setTransform(-348.4,169.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4DC480").s().p("AmYDxQhVAAAAiJIAAjPQAAiJBVAAIMxAAQBVAAAACJIAADPQAACJhVAAg");
	this.shape.setTransform(-395.9,187.7);

	this.text_2 = new cjs.Text("ים", "bold 26px 'Gisha'", "#FFFFFF");
	this.text_2.textAlign = "right";
	this.text_2.lineHeight = 32;
	this.text_2.lineWidth = 102;
	this.text_2.parent = this;
	this.text_2.setTransform(-395.8,-197.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B71A1A").s().p("AifDxQgjAAABiJIAAjPQgBiJAjAAIFAAAQAiAAgBCJIAADPQAACJghAAg");
	this.shape_1.setTransform(-409.8,-180.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B59C1").s().p("AifDxQgjAAABiJIAAjPQgBiJAjAAIFAAAQAiAAgBCJIAADPQAACJghAAg");
	this.shape_2.setTransform(-408.7,5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#B7A56D").ss(2.4,1,1).p("EhAhAnxMCBDAAAEhAhAggMCBDAAAEhAhAZRMCBDAAAEhAhASDMCBDAAAEhAhAK0MCBDAAAEhAhADmMCBDAAAEhAhgnwMCBDAAAEhAhgSEMCBDAAAEhAhgZTMCBDAAAEhAhgK2MCBDAAAEhAhgDnMCBDAAAEhAhgghMCBDAAA");
	this.shape_3.setTransform(26.9,5.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(3,1,1).p("AfDCmQglgFgfgUQgPgKgNgNQgBgBgDgCQgKgMgIgMQgKgPgHgQQgKgcAAggQAAgPADgQQABgDAAgCQAKgtAjgjQAxgxBFAAQBDAAAwAuQACACABABQAWAWAMAaAYFCmQglgFgfgUQgOgKgNgNQgCgBgCgCQgLgMgIgMQgKgPgGgQQgKgcAAggQAAgPADgQQAAgDABgCQAKgtAjgjQAxgxBFAAQBCAAAwAuQACACACABQAWAWAMAaEAs9ACmQgkgFgfgUQgPgKgNgNQgBgBgCgCQgMgMgHgMQgbgoAAgzQAAgPADgQQABgDAAgCQAKgtAjgjQAxgxBFAAQBDAAAwAuQACACABABQAWAWAMAaEAmAACmQglgFgfgUQgPgKgMgNQgCgBgCgCQgLgMgIgMQgagoAAgzQAAgPADgQQAAgDABgCQAKgtAjgjQAxgxBEAAQBDAAAwAuQACACABABQAXAWAMAaAKKCmQglgFgfgUQgOgKgNgNQgCgBgCgCQgLgMgIgMQgKgPgGgQQgLgcAAggQAAgPADgQQABgDABgCQAKgtAjgjQAwgxBGAAQBCAAAwAuQACACACABQAWAWAMAaADMCmQglgFgfgUQgOgKgNgNQgCgBgCgCQgLgMgIgMQgKgPgGgQQgKgcAAggQAAgPADgQQAAgDABgCQAKgtAjgjQAxgxBFAAQBCAAAwAuQACACACABQAWAWAMAaAjvCmQglgFgfgUQgPgKgNgNQgBgBgCgCQgLgMgIgMQgKgPgGgQQgLgcAAggQAAgPADgQQABgDAAgCQAHgeASgaQAJgNALgLQAxgxBFAAQBDAAAwAuQACACABABQAWAWAMAaARICmQglgFgggUQgOgKgNgNQgCgBgCgCQgKgMgIgMQgKgPgHgQQgKgcAAggQAAgPADgQQABgDAAgCQAKgtAjgjQAxgxBFAAQBDAAAvAuQADACABABQAWAWAMAaEA6+ACmQg2gHgpgpQgCgBgCgCQgLgMgIgMQgagoAAgzQAAgPACgQQABgDABgCQAKgtAjgjQAwgxBGAAQBCAAAwAuQACACACABQAWAWAMAaEAz7ACmQg2gHgqgpQgBgBgCgCQgLgMgIgMQgagoAAgzQAAgPADgQQAAgDAAgCQAKgtAjgjQAygxBFAAQBCAAAwAuQACACACABQAWAWALAaEg7bACmQglgFgfgUQgPgKgNgNQgBgBgCgCQgLgMgIgMQgKgPgGgQQgBgDgBgEQgJgZAAgcQAAgPADgQQABgDAAgCQAIgeARgaQAJgNALgLQAxgxBFAAQBDAAAwAuQACACABABQAWAWAMAaAxqCmQglgFgfgUQgPgKgNgNQgBgBgCgCQgLgMgIgMQgKgPgGgQQgBgDgBgEQgJgZAAgcQAAgPADgQQABgDAAgCQAHgeASgaQAJgNALgLQAxgxBFAAQBDAAAwAuQACACABABQAWAWAMAaA4oCmQglgFgfgUQgOgKgNgNQgCgBgCgCQgLgMgIgMQgKgPgGgQQgBgDgBgEQgIgZAAgcQAAgPADgQQAAgDABgCQAHgeASgaQAJgNALgLQAxgxBFAAQBCAAAwAuQACACACABQAWAWAMAaA/lCmQglgFgfgUQgPgKgNgNQgBgBgCgCQgLgMgIgMQgKgPgGgQQgBgDgBgEQgJgZAAgcQAAgPADgQQABgDAAgCQAHgeASgaQAJgNALgLQAxgxBFAAQBDAAAwAuQACACABABQAWAWAMAaAqtCmQglgFgfgUQgOgKgNgNQgCgBgCgCQgLgMgIgMQgKgPgGgQQgKgcAAggQAAgPADgQQAAgDABgCQAHgeASgaQAJgNALgLQAxgxBFAAQBCAAAwAuQACACACABQAWAWAMAaEgtgACmQglgFgfgUQgPgKgNgNQgBgBgCgCQgLgMgIgMQgKgPgGgQQgBgDgBgEQgIgZAAgcQAAgPACgQQABgDAAgCQAHgeASgaQAJgNALgLQAxgxBFAAQBDAAAwAuQACACABABQAWAWAMAaEg0eACmQglgFgfgUQgOgKgNgNQgCgBgBgCQgMgMgIgMQgKgPgFgQQgCgDgBgEQgIgZAAgcQAAgPADgQQAAgDABgCQAHgeASgaQAJgNALgLQAxgxBFAAQBCAAAwAuQACACACABQAWAWAMAaEgmjACmQglgFgfgUQgOgKgNgNQgCgBgCgCQgLgMgIgMQgKgPgGgQQgBgDgBgEQgIgZAAgcQAAgPADgQQAAgDABgCQAHgeASgaQAJgNALgLQAxgxBFAAQBCAAAwAuQACACACABQAWAWAMAa");
	this.shape_4.setTransform(26.7,-284.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E3DCBD").s().p("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");
	this.shape_5.setTransform(23,-267.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2E6A7").s().p("EhBOgt7IDlAAIG9AAIG+AAIG9AAIG+AAIG9AAIG+AAIG9AAIG+AAIG7AAIG+AAIG9AAIG+AAQgEAQAAARQAAAhALAbQAGAQAKAPQgKgPgGgQQgLgbAAghQAAgRAEgQIG9AAQgDAQAAARQAAAhAKAbQAGAQALAPQgLgPgGgQQgKgbAAghQAAgRADgQIG+AAIG9AAIG+AAIHDAAIIfAAIAAFaIAAAZMgAFBV8MiCYAAIgEBAiAnoMiBCAAAgEBAiAgWMiBCAAAgEBAiAZIMiBCAAAgEBAiAR5MiBCAAAgEBAiAKrMiBCAAAgEBAiADdMiBCAAAgEBAigDwMiBCAAAgEBAigK+MiBCAAAgEBAigSNMiBCAAAgEBAigZcMiBCAAAgEBAiggqMiBCAAAgEBAign5MiBCAAAgEA4sgqzQABAzAjAjQAaAZAgAJQANACAQAAQAyABAlglQAfgfAEgqIABgNQgBgzgjgkQglgkgyAAQgyAAglAkIgJALQgbgoAAgzQABgRADgQQgDAQgBARQAAAzAbAoQgbAgAAAsgEAyNgsKIgJALQgbAgAAAsQABAzAjAjQAlAlAygBQAyABAlglQAjgjABgzQgBgzgjgkQglgkgyAAQgyAAglAkgEArQgsKIgJALQgTAWgGAdQgCAMAAANQAAAzAkAjQAkAlAygBQAzABAkglQAkgjAAgzQAAgzgkgkQgkgkgzAAQgyAAgkAkgEAkSgsKIgJALQgbAgAAAsQABAzAjAjQAlAlAygBQAyABAlglQAjgjABgzQgBgzgjgkQglgkgyAAQgyAAglAkgEAdwgseQgOAIgNAMIgJALQgbAgAAAsQAAAzAkAjQAkAlAygBQAzABAkglQAkgjAAgzQAAgzgkgkQgkgkgzAAQggAAgbAQgEAWXgsKIgJALQgbAgAAAsQABAzAjAjQAlAlAygBQAyABAlglQAjgjABgzQgBgzgjgkQglgkgyAAQgyAAglAkgEAP1gseQgOAIgNAMIgJALQgbAgAAAsQAAAzAkAjQAkAlAygBQAzABAkglQAkgjAAgzQAAgzgkgkQgkgkgzAAQggAAgbAQgEAIcgsKIgJALQgbAgAAAsQABAzAjAjQAlAlAygBQAyABAlglQAjgjABgzQgBgzgjgkQglgkgyAAQgyAAglAkgEABfgsKIgJALQgbAgAAAsQAAAzAkAjQAkAlAygBQAzABAkglQAkgjAAgzQAAgzgkgkQgkgkgzAAQgyAAgkAkgEgFdgsKIgJALQgSAWgGAdQgDAMAAANQABAzAjAjQAlAlAygBQAyABAlglQAjgjABgzQgBgzgjgkQglgkgyAAQgyAAglAkgEgMagsKIgJALQgbAgAAAsQAAAzAkAjQAkAlAygBQAzABAkglQAkgjAAgzQAAgzgkgkQgkgkgzAAQgyAAgkAkgEgSvgslQgWAKgTARIgJALQgbAgAAAsQABAzAjAjQAlAlAygBQAyABAlglQAjgjABgzQgBgzgjgkQglgkgyAAQgZAAgVAJgEgaVgsKIgJALQgbAgAAAsQAAAzAkAjQAkAlAygBQAzABAkglQAkgjAAgzQAAgzgkgkQgkgkgzAAQgyAAgkAkgEghTgsKIgJALQgbAgAAAsQABAzAjAjQAlAlAygBQAyABAlglQAjgjABgzQgBgzgjgkQglgkgyAAQgyAAglAkgEgoQgsKIgJALQgbAgAAAsQAAAzAkAjQAkAlAygBQAzABAkglQAkgjAAgzQAAgzgkgkQgkgkgzAAQgyAAgkAkgEgvOgsKIgJALQgbAgAAAsQABAzAjAjQAlAlAygBQAyABAlglQAjgjABgzQgBgzgjgkQglgkgyAAQgyAAglAkgEg2LgsKIgJALQgTAWgGAdQgCAMAAANQAAAzAkAjQAkAlAygBQAzABAkglQAkgjAAgzQAAgzgkgkQgkgkgzAAQgyAAgkAkgEg9JgsKIgJALQgbAgAAAsQABAzAjAjQAlAlAygBQAyABAlglQAjgjABgzQgBgzgjgkQglgkgyAAQgyAAglAkgEAxpgtaQAAAzAbAoQgbgoAAgzQAAgRAEgQQgEAQAAARIAAAAgEAqsgtaQAAAzAbAoQgbgoAAgzQAAgRADgQQgDAQAAARIAAAAgEAjugtaQAAAzAbAoQgbgoAAgzQAAgRAEgQQgEAQAAARIAAAAgEAO2gtaQAAAhAKAbQAGAQALAPQgLgPgGgQQgKgbAAghQAAgRADgQQgDAQAAARIAAAAgEAH4gtaQAAAhALAbQAGAQAKAPQgKgPgGgQQgLgbAAghQAAgRAEgQQgEAQAAARIAAAAgEAA7gtaQAAAhALAbQAFAQALAPQgLgPgFgQQgLgbAAghQAAgRADgQQgDAQAAARIAAAAgEgGBgtaQAAAhALAbQAGAQAKAPQgKgPgGgQQgLgbAAghQAAgRAEgQQgEAQAAARIAAAAgEgM+gtaQAAAhAKAbQAGAQALAPQgLgPgGgQQgKgbAAghQAAgRADgQQgDAQAAARIAAAAgEgT8gtaQAAAcAJAZIACAHQAGAQAKAPQgKgPgGgQIgCgHQgJgZAAgcQAAgRAEgQQgEAQAAARIAAAAgEga5gtaQAAAcAJAZIABAHQAGAQALAPQgLgPgGgQIgBgHQgJgZAAgcQAAgRADgQQgDAQAAARIAAAAgEgh3gtaQAAAcAJAZIACAHQAGAQAKAPQgKgPgGgQIgCgHQgJgZAAgcQAAgRAEgQQgEAQAAARIAAAAgEgo0gtaQAAAcAJAZIABAHQAGAQALAPQgLgPgGgQIgBgHQgJgZAAgcQAAgRADgQQgDAQAAARIAAAAgEgvygtaQAAAcAJAZIACAHQAGAQAKAPQgKgPgGgQIgCgHQgJgZAAgcQAAgRAEgQQgEAQAAARIAAAAgEg2vgtaQAAAcAJAZIABAHQAGAQALAPQgLgPgGgQIgBgHQgJgZAAgcQAAgRADgQQgDAQAAARIAAAAgEg9tgtaQAAAcAJAZIACAHQAGAQAKAPQgKgPgGgQIgCgHQgJgZAAgcQAAgRAEgQQgEAQAAARIAAAAgEA5Hgr/IAAAAgEAV3gt7g");
	this.shape_6.setTransform(26.8,6.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.text_2},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-499.8,-302.5,944.1,603);


(lib.notebook_tool = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 2
	this.text = new cjs.Text("ים", "bold 26px 'Gisha'", "#FFFFFF");
	this.text.textAlign = "right";
	this.text.lineHeight = 32;
	this.text.lineWidth = 102;
	this.text.parent = this;
	this.text.setTransform(-395.8,-201.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B71A1A").s().p("AifDxQgjAAABiJIAAjPQgBiJAjAAIFAAAQAiAAgBCJIAADPQAACJghAAg");
	this.shape.setTransform(-409.8,-184.5);

	this.text_1 = new cjs.Text("כלים", "bold 26px 'Gisha'", "#FFFFFF");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 32;
	this.text_1.lineWidth = 102;
	this.text_1.parent = this;
	this.text_1.setTransform(-353.7,-18.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B59C1").s().p("AmYDxQhVAAAAiJIAAjPQAAiJBVAAIMxAAQBVAAAACJIAADPQAACJhVAAg");
	this.shape_1.setTransform(-394.2,0.7);

	this.text_2 = new cjs.Text("ות", "bold 26px 'Gisha'", "#FFFFFF");
	this.text_2.textAlign = "right";
	this.text_2.lineHeight = 32;
	this.text_2.lineWidth = 102;
	this.text_2.parent = this;
	this.text_2.setTransform(-394.3,170.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4DC480").s().p("AifDxQgjAAABiJIAAjPQgBiJAjAAIFAAAQAiAAgBCJIAADPQAACJghAAg");
	this.shape_2.setTransform(-410.2,186.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#B7A56D").ss(2.4,1,1).p("EhAhgghMCBDAAAEhAhgDnMCBDAAAEhAhgK2MCBDAAAEhAhgZTMCBDAAAEhAhgSEMCBDAAAEhAhgnwMCBDAAAEhAhADmMCBDAAAEhAhAK0MCBDAAAEhAhASDMCBDAAAEhAhAZRMCBDAAAEhAhAggMCBDAAAEhAhAnxMCBDAAA");
	this.shape_3.setTransform(26.9,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(3,1,1).p("AfDCmQglgFgfgUQgPgKgNgNQgBgBgDgCQgKgMgIgMQgKgPgHgQQgKgcAAggQAAgPADgQQABgDAAgCQAKgtAjgjQAxgxBFAAQBDAAAwAuQACACABABQAWAWAMAaAYFCmQglgFgfgUQgOgKgNgNQgCgBgCgCQgLgMgIgMQgKgPgGgQQgKgcAAggQAAgPADgQQAAgDABgCQAKgtAjgjQAxgxBFAAQBCAAAwAuQACACACABQAWAWAMAaEAs9ACmQgkgFgfgUQgPgKgNgNQgBgBgCgCQgMgMgHgMQgbgoAAgzQAAgPADgQQABgDAAgCQAKgtAjgjQAxgxBFAAQBDAAAwAuQACACABABQAWAWAMAaEAmAACmQglgFgfgUQgPgKgMgNQgCgBgCgCQgLgMgIgMQgagoAAgzQAAgPADgQQAAgDABgCQAKgtAjgjQAxgxBEAAQBDAAAwAuQACACABABQAXAWAMAaAKKCmQglgFgfgUQgOgKgNgNQgCgBgCgCQgLgMgIgMQgKgPgGgQQgLgcAAggQAAgPADgQQABgDABgCQAKgtAjgjQAwgxBGAAQBCAAAwAuQACACACABQAWAWAMAaADMCmQglgFgfgUQgOgKgNgNQgCgBgCgCQgLgMgIgMQgKgPgGgQQgKgcAAggQAAgPADgQQAAgDABgCQAKgtAjgjQAxgxBFAAQBCAAAwAuQACACACABQAWAWAMAaAjvCmQglgFgfgUQgPgKgNgNQgBgBgCgCQgLgMgIgMQgKgPgGgQQgLgcAAggQAAgPADgQQABgDAAgCQAHgeASgaQAJgNALgLQAxgxBFAAQBDAAAwAuQACACABABQAWAWAMAaARICmQglgFgggUQgOgKgNgNQgCgBgCgCQgKgMgIgMQgKgPgHgQQgKgcAAggQAAgPADgQQABgDAAgCQAKgtAjgjQAxgxBFAAQBDAAAvAuQADACABABQAWAWAMAaEA6+ACmQg2gHgpgpQgCgBgCgCQgLgMgIgMQgagoAAgzQAAgPACgQQABgDABgCQAKgtAjgjQAwgxBGAAQBCAAAwAuQACACACABQAWAWAMAaEAz7ACmQg2gHgqgpQgBgBgCgCQgLgMgIgMQgagoAAgzQAAgPADgQQAAgDAAgCQAKgtAjgjQAygxBFAAQBCAAAwAuQACACACABQAWAWALAaEg7bACmQglgFgfgUQgPgKgNgNQgBgBgCgCQgLgMgIgMQgKgPgGgQQgBgDgBgEQgJgZAAgcQAAgPADgQQABgDAAgCQAIgeARgaQAJgNALgLQAxgxBFAAQBDAAAwAuQACACABABQAWAWAMAaAxqCmQglgFgfgUQgPgKgNgNQgBgBgCgCQgLgMgIgMQgKgPgGgQQgBgDgBgEQgJgZAAgcQAAgPADgQQABgDAAgCQAHgeASgaQAJgNALgLQAxgxBFAAQBDAAAwAuQACACABABQAWAWAMAaA4oCmQglgFgfgUQgOgKgNgNQgCgBgCgCQgLgMgIgMQgKgPgGgQQgBgDgBgEQgIgZAAgcQAAgPADgQQAAgDABgCQAHgeASgaQAJgNALgLQAxgxBFAAQBCAAAwAuQACACACABQAWAWAMAaA/lCmQglgFgfgUQgPgKgNgNQgBgBgCgCQgLgMgIgMQgKgPgGgQQgBgDgBgEQgJgZAAgcQAAgPADgQQABgDAAgCQAHgeASgaQAJgNALgLQAxgxBFAAQBDAAAwAuQACACABABQAWAWAMAaAqtCmQglgFgfgUQgOgKgNgNQgCgBgCgCQgLgMgIgMQgKgPgGgQQgKgcAAggQAAgPADgQQAAgDABgCQAHgeASgaQAJgNALgLQAxgxBFAAQBCAAAwAuQACACACABQAWAWAMAaEgtgACmQglgFgfgUQgPgKgNgNQgBgBgCgCQgLgMgIgMQgKgPgGgQQgBgDgBgEQgIgZAAgcQAAgPACgQQABgDAAgCQAHgeASgaQAJgNALgLQAxgxBFAAQBDAAAwAuQACACABABQAWAWAMAaEg0eACmQglgFgfgUQgOgKgNgNQgCgBgBgCQgMgMgIgMQgKgPgFgQQgCgDgBgEQgIgZAAgcQAAgPADgQQAAgDABgCQAHgeASgaQAJgNALgLQAxgxBFAAQBCAAAwAuQACACACABQAWAWAMAaEgmjACmQglgFgfgUQgOgKgNgNQgCgBgCgCQgLgMgIgMQgKgPgGgQQgBgDgBgEQgIgZAAgcQAAgPADgQQAAgDABgCQAHgeASgaQAJgNALgLQAxgxBFAAQBCAAAwAuQACACACABQAWAWAMAa");
	this.shape_4.setTransform(26.7,-288.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E3DCBD").s().p("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");
	this.shape_5.setTransform(23,-271.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2E6A7").s().p("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QAFAQALAPQgLgPgFgQQgLgbAAghQAAgRADgQQgDAQAAARIAAAAgEgM+gtaQAAAhAKAbQAGAQALAPQgLgPgGgQQgKgbAAghQAAgRADgQQgDAQAAARIAAAAgEgT8gtaQAAAcAJAZIACAHQAGAQAKAPQgKgPgGgQIgCgHQgJgZAAgcQAAgRAEgQQgEAQAAARIAAAAgEga5gtaQAAAcAJAZIABAHQAGAQALAPQgLgPgGgQIgBgHQgJgZAAgcQAAgRADgQQgDAQAAARIAAAAgEgh3gtaQAAAcAJAZIACAHQAGAQAKAPQgKgPgGgQIgCgHQgJgZAAgcQAAgRAEgQQgEAQAAARIAAAAgEgo0gtaQAAAcAJAZIABAHQAGAQALAPQgLgPgGgQIgBgHQgJgZAAgcQAAgRADgQQgDAQAAARIAAAAgEgvygtaQAAAcAJAZIACAHQAGAQAKAPQgKgPgGgQIgCgHQgJgZAAgcQAAgRAEgQQgEAQAAARIAAAAgEg2vgtaQAAAcAJAZIABAHQAGAQALAPQgLgPgGgQIgBgHQgJgZAAgcQAAgRADgQQgDAQAAARIAAAAgEg9tgtaQAAAcAJAZIACAHQAGAQAKAPQgKgPgGgQIgCgHQgJgZAAgcQAAgRAEgQQgEAQAAARIAAAAgEA5Hgr/IAAAAgEgFmgr/IAAAAgEAV3gt7g");
	this.shape_6.setTransform(26.8,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.text_2},{t:this.shape_1},{t:this.text_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-499.8,-306.5,944.1,603);


(lib.notebook_food = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// NEW
	this.text = new cjs.Text("ים", "bold 26px 'Gisha'", "#FFFFFF");
	this.text.textAlign = "right";
	this.text.lineHeight = 32;
	this.text.lineWidth = 102;
	this.text.parent = this;
	this.text.setTransform(-396.5,-17.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B59C1").s().p("AifDxQgjAAABiJIAAjPQgBiJAjAAIFAAAQAiAAgBCJIAADPQAACJghAAg");
	this.shape.setTransform(-414,-0.1);

	this.text_1 = new cjs.Text("ות", "bold 26px 'Gisha'", "#FFFFFF");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 32;
	this.text_1.lineWidth = 102;
	this.text_1.parent = this;
	this.text_1.setTransform(-396.5,170.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4DC480").s().p("AifDxQgjAAABiJIAAjPQgBiJAjAAIFAAAQAiAAgBCJIAADPQAACJghAAg");
	this.shape_1.setTransform(-412.4,186.2);

	this.text_2 = new cjs.Text("מאפים", "bold 26px 'Gisha'", "#FFFFFF");
	this.text_2.textAlign = "right";
	this.text_2.lineHeight = 32;
	this.text_2.lineWidth = 102;
	this.text_2.parent = this;
	this.text_2.setTransform(-355.3,-201.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B71A1A").s().p("AmYDxQhVAAAAiJIAAjPQAAiJBVAAIMxAAQBVAAAACJIAADPQAACJhVAAg");
	this.shape_2.setTransform(-397.3,-185.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#B7A56D").ss(2.4,1,1).p("EhAhgghMCBDAAAEhAhgDnMCBDAAAEhAhgK2MCBDAAAEhAhgZTMCBDAAAEhAhgSEMCBDAAAEhAhgnwMCBDAAAEhAhADlMCBDAAAEhAhAK0MCBDAAAEhAhASCMCBDAAAEhAhAZRMCBDAAAEhAhAggMCBDAAAEhAhAnxMCBDAAA");
	this.shape_3.setTransform(24.7,1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(3,1,1).p("EAmAACmQglgFgfgUQgOgKgNgNQgCgCgCgCQgLgLgIgNQgagoAAgyQAAgQADgQQAAgCABgCQAKgtAjgjQAxgxBFAAQBCAAAwAtQACACACACQAWAWAMAaEAs+ACmQglgFgfgUQgPgKgNgNQgBgCgCgCQgLgLgIgNQgbgoAAgyQAAgQADgQQABgCAAgCQAKgtAjgjQAxgxBFAAQBDAAAwAtQACACABACQAWAWAMAaAYFCmQglgFgfgUQgOgKgNgNQgCgCgCgCQgLgLgIgNQgKgPgGgQQgKgbAAggQAAgQADgQQAAgCABgCQAKgtAjgjQAxgxBFAAQBCAAAwAtQACACACACQAWAWAMAaAfDCmQglgFgfgUQgPgKgNgNQgBgCgCgCQgLgLgIgNQgKgPgGgQQgLgbAAggQAAgQADgQQABgCAAgCQAKgtAjgjQAxgxBFAAQBDAAAwAtQACACABACQAWAWAMAaAKKCmQglgFgfgUQgOgKgNgNQgCgCgCgCQgLgLgIgNQgKgPgGgQQgLgbAAggQAAgQAEgQQAAgCABgCQAKgtAjgjQAxgxBFAAQBCAAAwAtQACACACACQAWAWAMAaARICmQglgFgfgUQgPgKgNgNQgBgCgCgCQgLgLgIgNQgKgPgGgQQgLgbAAggQAAgQADgQQABgCAAgCQAKgtAjgjQAxgxBFAAQBDAAAwAtQACACABACQAWAWAMAaAjvCmQglgFgfgUQgPgKgNgNQgBgCgCgCQgLgLgIgNQgKgPgGgQQgLgbAAggQAAgQADgQQABgCAAgCQAHgfASgaQAJgMALgLQAxgxBFAAQBDAAAwAtQACACABACQAWAWAMAaADNCmQgmgFgegUQgPgKgNgNQgCgCgBgCQgLgLgIgNQgKgPgGgQQgLgbAAggQAAgQADgQQAAgCABgCQAKgtAjgjQAxgxBFAAQBDAAAwAtQACACABACQAWAWAMAaEA6+ACmQg2gHgpgpQgCgCgCgCQgLgLgIgNQgagoAAgyQAAgQADgQQAAgCABgCQAKgtAjgjQAxgxBFAAQBCAAAwAtQACACACACQAWAWAMAaEAz7ACmQg2gHgpgpQgCgCgCgCQgLgLgIgNQgagoAAgyQAAgQADgQQAAgCABgCQAKgtAjgjQAxgxBFAAQBCAAAwAtQACACACACQAWAWAMAaEg7bACmQglgFgfgUQgPgKgNgNQgBgCgCgCQgLgLgIgNQgKgPgGgQQgBgDgBgDQgJgZAAgcQAAgQADgQQABgCAAgCQAHgfASgaQAJgMALgLQAxgxBFAAQBDAAAwAtQACACABACQAWAWAMAaEg0eACmQglgFgfgUQgOgKgNgNQgCgCgCgCQgLgLgIgNQgKgPgGgQQgBgDgBgDQgIgZAAgcQAAgQADgQQAAgCABgCQAHgfASgaQAJgMALgLQAxgxBFAAQBCAAAwAtQACACACACQAWAWAMAaAxqCmQglgFgfgUQgPgKgNgNQgBgCgCgCQgLgLgIgNQgKgPgGgQQgBgDgBgDQgJgZAAgcQAAgQADgQQABgCAAgCQAHgfASgaQAJgMALgLQAxgxBFAAQBDAAAwAtQACACABACQAWAWAMAaAqtCmQglgFgfgUQgOgKgNgNQgCgCgCgCQgLgLgIgNQgKgPgGgQQgKgbAAggQAAgQADgQQAAgCABgCQAHgfASgaQAJgMALgLQAxgxBFAAQBCAAAwAtQACACACACQAWAWAMAaA4oCmQglgFgfgUQgOgKgNgNQgCgCgCgCQgLgLgIgNQgKgPgGgQQgBgDgBgDQgIgZAAgcQAAgQADgQQAAgCABgCQAHgfASgaQAJgMALgLQAxgxBFAAQBCAAAwAtQACACACACQAWAWAMAaEgmjACmQglgFgfgUQgOgKgNgNQgCgCgCgCQgLgLgIgNQgKgPgGgQQgBgDgBgDQgIgZAAgcQAAgQADgQQAAgCABgCQAHgfASgaQAJgMALgLQAxgxBFAAQBCAAAwAtQACACACACQAWAWAMAaA/lCmQglgFgfgUQgPgKgNgNQgBgCgCgCQgLgLgIgNQgKgPgGgQQgBgDgBgDQgJgZAAgcQAAgQADgQQABgCAAgCQAHgfASgaQAJgMALgLQAxgxBFAAQBDAAAwAtQACACABACQAWAWAMAaEgtgACmQglgFgfgUQgPgKgNgNQgBgCgCgCQgLgLgIgNQgKgPgGgQQgBgDgBgDQgJgZAAgcQAAgQADgQQABgCAAgCQAHgfASgaQAJgMALgLQAxgxBFAAQBDAAAwAtQACACABACQAWAWAMAa");
	this.shape_4.setTransform(24.5,-288.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E3DCBD").s().p("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");
	this.shape_5.setTransform(20.8,-272.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2E6A7").s().p("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QAGAQAKAPQgKgPgGgQQgLgbAAggQABgSADgQQgDAQgBASIAAAAgEgM+gtZQAAAgAKAbQAHAQAKAPQgKgPgHgQQgKgbAAggQAAgSADgQQgDAQAAASIAAAAgEgT8gtZQAAAcAJAZIACAGQAGAQAKAPQgKgPgGgQIgCgGQgJgZAAgcQABgSADgQQgDAQgBASIAAAAgEga5gtZQAAAcAJAZIABAGQAHAQAKAPQgKgPgHgQIgBgGQgJgZAAgcQAAgSADgQQgDAQAAASIAAAAgEgh3gtZQAAAcAJAZIACAGQAGAQAKAPQgKgPgGgQIgCgGQgJgZAAgcQABgSADgQQgDAQgBASIAAAAgEgo0gtZQAAAcAJAZIABAGQAHAQAKAPQgKgPgHgQIgBgGQgJgZAAgcQAAgSADgQQgDAQAAASIAAAAgEgvygtZQAAAcAJAZIACAGQAGAQAKAPQgKgPgGgQIgCgGQgJgZAAgcQABgSADgQQgDAQgBASIAAAAgEg2vgtZQAAAcAJAZIABAGQAHAQAKAPQgKgPgHgQIgBgGQgJgZAAgcQAAgSADgQQgDAQAAASIAAAAgEg9tgtZQAAAcAJAZIACAGQAGAQAKAPQgKgPgGgQIgCgGQgJgZAAgcQABgSADgQQgDAQgBASIAAAAgEAV3gt7g");
	this.shape_6.setTransform(24.6,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.text_2},{t:this.shape_1},{t:this.text_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-500.5,-306.9,942.7,603);


(lib.fade_screen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0.749)").s().p("EhOHA2sMAAAhtXMCcPAAAMAAABtXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-500,-350,1000,700);


(lib.tiramisuglow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tiramisu01();
	this.instance.parent = this;
	this.instance.setTransform(-112.5,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.5,-75,225,150);


(lib.tartglow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tart2();
	this.instance.parent = this;
	this.instance.setTransform(-112.5,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.5,-75,225,150);


(lib.prelineglow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.preline01();
	this.instance.parent = this;
	this.instance.setTransform(-112.5,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.5,-75,225,150);


(lib.patissiereglow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Patissier01();
	this.instance.parent = this;
	this.instance.setTransform(-104,-112.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104,-112.5,208,225);


(lib.parichglow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.parich();
	this.instance.parent = this;
	this.instance.setTransform(-112.5,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.5,-75,225,150);


(lib.ozenpillglow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ozenpil();
	this.instance.parent = this;
	this.instance.setTransform(-65,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65,-51,130,102);


(lib.macaroonglow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Macaroon();
	this.instance.parent = this;
	this.instance.setTransform(-32,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-33.5,64,67);


(lib.kosotglow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.kosot01();
	this.instance.parent = this;
	this.instance.setTransform(-112.5,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.5,-75,225,150);


(lib.gvinaglow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gvina01();
	this.instance.parent = this;
	this.instance.setTransform(-102.5,-82.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.5,-82.5,205,165);


(lib.eclairglow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ravuch01();
	this.instance.parent = this;
	this.instance.setTransform(-112.5,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.5,-75,225,150);


(lib.donutglow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.metuganim01();
	this.instance.parent = this;
	this.instance.setTransform(-112.5,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.5,-75,225,150);


(lib.cupcakeglow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cupcake01();
	this.instance.parent = this;
	this.instance.setTransform(-76.5,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.5,-89,153,178);


(lib.croissantglow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.croissant();
	this.instance.parent = this;
	this.instance.setTransform(-71.5,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.5,-55,143,110);


(lib.breadglow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lehem();
	this.instance.parent = this;
	this.instance.setTransform(-107.5,-44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.5,-44.5,215,89);


(lib.bhushotglow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bhushot01();
	this.instance.parent = this;
	this.instance.setTransform(-102.5,-82.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.5,-82.5,205,165);


(lib.pin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("לחץ על הכובע לקיבוע התצוגה", "bold 15px 'Gisha'");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 210;
	this.text.parent = this;
	this.text.setTransform(-11,-10.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.9,-12.8,214,21.9);


(lib.or_click = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.or_click_command = new cjs.Text("או לחץ על אחד הפריטים כדי לקבל הסבר עליו", "bold 15px 'Gisha'");
	this.or_click_command.name = "or_click_command";
	this.or_click_command.textAlign = "center";
	this.or_click_command.lineHeight = 20;
	this.or_click_command.lineWidth = 356;
	this.or_click_command.parent = this;
	this.or_click_command.setTransform(0,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.or_click_command).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-179.9,-11.5,359.9,23.1);


(lib.click_for_expl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.click_for_expl = new cjs.Text("לחץ על כל מאפה, כלי או טכניקה כדי לקבל הסבר", "bold 15px 'Gisha'");
	this.click_for_expl.name = "click_for_expl";
	this.click_for_expl.textAlign = "center";
	this.click_for_expl.lineHeight = 20;
	this.click_for_expl.lineWidth = 356;
	this.click_for_expl.parent = this;
	this.click_for_expl.setTransform(0,-8.7);

	this.timeline.addTween(cjs.Tween.get(this.click_for_expl).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-179.9,-10.7,359.9,21.6);


(lib.zantar_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.zantar();
	this.instance.parent = this;
	this.instance.setTransform(-98.5,-98);

	this.instance_1 = new lib.zantarglow();
	this.instance_1.parent = this;
	this.instance_1.shadow = new cjs.Shadow("#0066FF",0,0,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.5,-98,197,196);


(lib.tanur_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tanur();
	this.instance.parent = this;
	this.instance.setTransform(-83,-114.5);

	this.instance_1 = new lib.stoveglow();
	this.instance_1.parent = this;
	this.instance_1.shadow = new cjs.Shadow("#0066FF",0,0,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83,-114.5,166,229);


(lib.sakit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sakitpngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-30,-120,0.114,0.114);

	this.instance_1 = new lib.sakitglow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4.4,7.8);
	this.instance_1.shadow = new cjs.Shadow("#0066FF",0,0,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-120,68.7,255.6);


(lib.mixer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mixerHQ();
	this.instance.parent = this;
	this.instance.setTransform(-186,-229,0.697,0.697);

	this.instance_1 = new lib.mixerglow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.2,-3.6);
	this.instance_1.shadow = new cjs.Shadow("#0066FF",0,0,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186,-229,378.3,450.8);


(lib.mishkal_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mishkal();
	this.instance.parent = this;
	this.instance.setTransform(-62,-61.5);

	this.instance_1 = new lib.mishkalglow();
	this.instance_1.parent = this;
	this.instance_1.shadow = new cjs.Shadow("#0066FF",0,0,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62,-61.5,124,123);


(lib.mida = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mida2();
	this.instance.parent = this;
	this.instance.setTransform(-134,-185);

	this.instance_1 = new lib.midaglow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-47,-116);
	this.instance_1.shadow = new cjs.Shadow("#0066FF",0,0,19);
	this.instance_1.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 0, -23))];
	this.instance_1.cache(-89,-71,178,142);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134,-185,174,138);


(lib.mesanenet_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mesanenet();
	this.instance.parent = this;
	this.instance.setTransform(-98.5,-60.5);

	this.instance_1 = new lib.mesanenetglow();
	this.instance_1.parent = this;
	this.instance_1.shadow = new cjs.Shadow("#0066FF",0,0,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:-98.5,y:-60.5}}]}).to({state:[{t:this.instance_1},{t:this.instance,p:{x:-99,y:-60}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.5,-60.5,197,121);


(lib.meabed_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.meabed();
	this.instance.parent = this;
	this.instance.setTransform(-263,-522,0.418,0.418);

	this.instance_1 = new lib.meabedglow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-15.4,-2.3);
	this.instance_1.shadow = new cjs.Shadow("#0066FF",0,0,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-263,-522,495.2,1039.4);


(lib.matrefa_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.matrefa();
	this.instance.parent = this;
	this.instance.setTransform(-27,-98.5);

	this.instance_1 = new lib.matrefaglow();
	this.instance_1.parent = this;
	this.instance_1.shadow = new cjs.Shadow("#0066FF",0,0,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-98.5,54,197);


(lib.marit_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.marit();
	this.instance.parent = this;
	this.instance.setTransform(-38.5,-112);

	this.instance_1 = new lib.maritglow();
	this.instance_1.parent = this;
	this.instance_1.shadow = new cjs.Shadow("#0066FF",0,0,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-112,77,224);


(lib.maaroh_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.maaroh();
	this.instance.parent = this;
	this.instance.setTransform(-27.5,-168);

	this.instance_1 = new lib.maarohglow();
	this.instance_1.parent = this;
	this.instance_1.shadow = new cjs.Shadow("#0066FF",0,0,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.5,-168,55,336);


(lib.gas_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gas();
	this.instance.parent = this;
	this.instance.setTransform(-71,-20,1,0.976);

	this.instance_1 = new lib.gasglow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.5,0);
	this.instance_1.shadow = new cjs.Shadow("#0066FF",0,0,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-20,141,40);


(lib.ZANTAR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.zantar();
	this.instance.parent = this;
	this.instance.setTransform(-347,-74,1.112,1.112);

	this.instance_1 = new lib.Patissier01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-105,140,0.348,0.348);

	this.instance_2 = new lib.tiramisu01();
	this.instance_2.parent = this;
	this.instance_2.setTransform(61,159,0.339,0.339);

	this.instance_3 = new lib.ravuch01();
	this.instance_3.parent = this;
	this.instance_3.setTransform(159.2,186.7,0.215,0.215,-15);

	this.instance_4 = new lib.Macaroon();
	this.instance_4.parent = this;
	this.instance_4.setTransform(9,183,0.322,0.322);

	this.instance_5 = new lib.cupcake01();
	this.instance_5.parent = this;
	this.instance_5.setTransform(313,152,0.347,0.347);

	this.instance_6 = new lib.preline01();
	this.instance_6.parent = this;
	this.instance_6.setTransform(251,179,0.199,0.199);

	this.macaroon_text = new cjs.Text("קאפקייק,   פרלינים,   בצק רבוך,   טירמיסו,   מקרונים,   קרם פטיסייר", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text.name = "macaroon_text";
	this.macaroon_text.textAlign = "right";
	this.macaroon_text.lineHeight = 24;
	this.macaroon_text.lineWidth = 757;
	this.macaroon_text.parent = this;
	this.macaroon_text.setTransform(383.5,219.8);

	this.instance_7 = new lib.medium_1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(210,-22.5,0.748,0.748,0,0,0,0,12);
	this.instance_7.alpha = 0.199;

	this.instance_8 = new lib.pro_1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(94.7,-31.7,0.715,0.715,0,0,0,0.1,21.9);

	this.instance_9 = new lib.beginner_1("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(338.5,-21.3,0.731,0.731,0,0,0,0.4,12.1);
	this.instance_9.alpha = 0.199;

	this.macaroon_text_1 = new cjs.Text(":ובעזרתו אפשר להכין את המאפים", "bold 19px 'Gisha'", "#2B42BE");
	this.macaroon_text_1.name = "macaroon_text_1";
	this.macaroon_text_1.textAlign = "right";
	this.macaroon_text_1.lineHeight = 24;
	this.macaroon_text_1.lineWidth = 371;
	this.macaroon_text_1.parent = this;
	this.macaroon_text_1.setTransform(382.3,123.6);

	this.macaroon_text_2 = new cjs.Text("זילוף", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text_2.name = "macaroon_text_2";
	this.macaroon_text_2.textAlign = "right";
	this.macaroon_text_2.lineHeight = 24;
	this.macaroon_text_2.lineWidth = 444;
	this.macaroon_text_2.parent = this;
	this.macaroon_text_2.setTransform(383.5,76);

	this.macaroon_text_3 = new cjs.Text(":כלי זה נחוץ לביצוע הטכניקות", "bold 19px 'Gisha'", "#2B42BE");
	this.macaroon_text_3.name = "macaroon_text_3";
	this.macaroon_text_3.textAlign = "right";
	this.macaroon_text_3.lineHeight = 24;
	this.macaroon_text_3.lineWidth = 444;
	this.macaroon_text_3.parent = this;
	this.macaroon_text_3.setTransform(383.5,38.7);

	this.macaroon_text_4 = new cjs.Text(":כלי זה נחוץ לאופה ברמה", "bold 19px 'Gisha'", "#2B42BE");
	this.macaroon_text_4.name = "macaroon_text_4";
	this.macaroon_text_4.textAlign = "right";
	this.macaroon_text_4.lineHeight = 24;
	this.macaroon_text_4.lineWidth = 287;
	this.macaroon_text_4.parent = this;
	this.macaroon_text_4.setTransform(383.5,-106.2);

	this.macaroon_title = new cjs.Text("צנתר", "bold 37px 'Gisha'", "#2B42BE");
	this.macaroon_title.name = "macaroon_title";
	this.macaroon_title.textAlign = "right";
	this.macaroon_title.lineHeight = 45;
	this.macaroon_title.lineWidth = 321;
	this.macaroon_title.parent = this;
	this.macaroon_title.setTransform(383.5,-264);

	this.macaroon_text_5 = new cjs.Text("גליל מתכת קטן שאותו מלבישים על שקית זילוף המכילה קרם או ציפוי, ואשר משמש לזילוף קרם באופן קישוטי על גבי קינוח כמו קאפקייקס, קינוחי כוסות או טירמיסו; או לשם הזרקת קרם לתוך מאכל, כמו קרם פטיסייר לתוך פחזניות או איקלרים. קצוות הצנתר מעוצבים במספר צורות וגדלים להשגת עיצובים .שונים בעזרת הקרם", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text_5.name = "macaroon_text_5";
	this.macaroon_text_5.textAlign = "right";
	this.macaroon_text_5.lineHeight = 24;
	this.macaroon_text_5.lineWidth = 767;
	this.macaroon_text_5.parent = this;
	this.macaroon_text_5.setTransform(382.2,-213.3);

	this.instance_10 = new lib.notebook_tool();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-38.9,-7.9,1,1,0,0,0,2.1,-2.6);

	this.fade_screen = new lib.fade_screen();
	this.fade_screen.parent = this;
	this.fade_screen.setTransform(4.7,-1.3,1,0.997,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fade_screen},{t:this.instance_10},{t:this.macaroon_text_5},{t:this.macaroon_title},{t:this.macaroon_text_4},{t:this.macaroon_text_3},{t:this.macaroon_text_2},{t:this.macaroon_text_1},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.macaroon_text},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-540.8,-349.5,1045.6,698);


(lib.SAKIT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sakit105();
	this.instance.parent = this;
	this.instance.setTransform(-240,-178,1,1,22.5);

	this.instance_1 = new lib.Patissier01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-105,140,0.348,0.348);

	this.instance_2 = new lib.tiramisu01();
	this.instance_2.parent = this;
	this.instance_2.setTransform(61,159,0.339,0.339);

	this.instance_3 = new lib.ravuch01();
	this.instance_3.parent = this;
	this.instance_3.setTransform(159.2,186.7,0.215,0.215,-15);

	this.instance_4 = new lib.Macaroon();
	this.instance_4.parent = this;
	this.instance_4.setTransform(9,183,0.322,0.322);

	this.instance_5 = new lib.cupcake01();
	this.instance_5.parent = this;
	this.instance_5.setTransform(313,152,0.347,0.347);

	this.instance_6 = new lib.preline01();
	this.instance_6.parent = this;
	this.instance_6.setTransform(251,179,0.199,0.199);

	this.macaroon_text = new cjs.Text("קאפקייק,   פרלינים,   בצק רבוך,   טירמיסו,   מקרונים,   קרם פטיסייר", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text.name = "macaroon_text";
	this.macaroon_text.textAlign = "right";
	this.macaroon_text.lineHeight = 24;
	this.macaroon_text.lineWidth = 757;
	this.macaroon_text.parent = this;
	this.macaroon_text.setTransform(383.5,219.8);

	this.instance_7 = new lib.medium_1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(210,-22.5,0.748,0.748,0,0,0,0,12);
	this.instance_7.alpha = 0.199;

	this.instance_8 = new lib.pro_1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(94.7,-31.7,0.715,0.715,0,0,0,0.1,21.9);

	this.instance_9 = new lib.beginner_1("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(338.5,-21.3,0.731,0.731,0,0,0,0.4,12.1);
	this.instance_9.alpha = 0.199;

	this.macaroon_text_1 = new cjs.Text(":ובעזרתו אפשר להכין את המאפים", "bold 19px 'Gisha'", "#2B42BE");
	this.macaroon_text_1.name = "macaroon_text_1";
	this.macaroon_text_1.textAlign = "right";
	this.macaroon_text_1.lineHeight = 24;
	this.macaroon_text_1.lineWidth = 371;
	this.macaroon_text_1.parent = this;
	this.macaroon_text_1.setTransform(382.3,123.6);

	this.macaroon_text_2 = new cjs.Text("זילוף", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text_2.name = "macaroon_text_2";
	this.macaroon_text_2.textAlign = "right";
	this.macaroon_text_2.lineHeight = 24;
	this.macaroon_text_2.lineWidth = 444;
	this.macaroon_text_2.parent = this;
	this.macaroon_text_2.setTransform(383.5,76);

	this.macaroon_text_3 = new cjs.Text(":כלי זה נחוץ לביצוע הטכניקות", "bold 19px 'Gisha'", "#2B42BE");
	this.macaroon_text_3.name = "macaroon_text_3";
	this.macaroon_text_3.textAlign = "right";
	this.macaroon_text_3.lineHeight = 24;
	this.macaroon_text_3.lineWidth = 444;
	this.macaroon_text_3.parent = this;
	this.macaroon_text_3.setTransform(383.5,38.7);

	this.macaroon_text_4 = new cjs.Text(":כלי זה נחוץ לאופה ברמה", "bold 19px 'Gisha'", "#2B42BE");
	this.macaroon_text_4.name = "macaroon_text_4";
	this.macaroon_text_4.textAlign = "right";
	this.macaroon_text_4.lineHeight = 24;
	this.macaroon_text_4.lineWidth = 287;
	this.macaroon_text_4.parent = this;
	this.macaroon_text_4.setTransform(383.5,-106.2);

	this.macaroon_title = new cjs.Text("שקית זילוף", "bold 37px 'Gisha'", "#2B42BE");
	this.macaroon_title.name = "macaroon_title";
	this.macaroon_title.textAlign = "right";
	this.macaroon_title.lineHeight = 45;
	this.macaroon_title.lineWidth = 321;
	this.macaroon_title.parent = this;
	this.macaroon_title.setTransform(383.5,-264);

	this.macaroon_text_5 = new cjs.Text("שקית עשויה בד, פלסטיק או סיליקון שמשמשת לזילוף קרמים או ציפויים על קינוחים, או למילוי מאפים .בקרם. השקית היא בעלת צורה משולשת, ובקצה אחד שלה מולבש צנתר שקובע את צורת הזילוף", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text_5.name = "macaroon_text_5";
	this.macaroon_text_5.textAlign = "right";
	this.macaroon_text_5.lineHeight = 24;
	this.macaroon_text_5.lineWidth = 790;
	this.macaroon_text_5.parent = this;
	this.macaroon_text_5.setTransform(382.2,-213.3);

	this.instance_10 = new lib.notebook_tool();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-38.9,-7.9,1,1,0,0,0,2.1,-2.6);

	this.fade_screen = new lib.fade_screen();
	this.fade_screen.parent = this;
	this.fade_screen.setTransform(4.7,-1.3,1,0.997,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fade_screen},{t:this.instance_10},{t:this.macaroon_text_5},{t:this.macaroon_title},{t:this.macaroon_text_4},{t:this.macaroon_text_3},{t:this.macaroon_text_2},{t:this.macaroon_text_1},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.macaroon_text},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-540.8,-349.5,1045.6,698);


(lib.GAS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gas_03();
	this.instance.parent = this;
	this.instance.setTransform(-343.5,0,0.756,0.756,0,-1.6,0);

	this.instance_1 = new lib.Patissier01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(100,147,0.333,0.333);

	this.instance_2 = new lib.preline01();
	this.instance_2.parent = this;
	this.instance_2.setTransform(319,179,0.199,0.199);

	this.instance_3 = new lib.kosot01();
	this.instance_3.parent = this;
	this.instance_3.setTransform(215,167,0.291,0.291);

	this.macaroon_text = new cjs.Text("פרלינים,   קינוחי כוסות,   קרם פטיסייר", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text.name = "macaroon_text";
	this.macaroon_text.textAlign = "right";
	this.macaroon_text.lineHeight = 24;
	this.macaroon_text.lineWidth = 757;
	this.macaroon_text.parent = this;
	this.macaroon_text.setTransform(383.5,219.8);

	this.instance_4 = new lib.medium_1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(210,-22.5,0.748,0.748,0,0,0,0,12);
	this.instance_4.alpha = 0.199;

	this.instance_5 = new lib.pro_1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(94.7,-31.7,0.715,0.715,0,0,0,0.1,21.9);

	this.instance_6 = new lib.beginner_1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(338.5,-21.3,0.731,0.731,0,0,0,0.4,12.1);
	this.instance_6.alpha = 0.199;

	this.macaroon_text_1 = new cjs.Text(":ובעזרתו אפשר להכין את המאפים", "bold 19px 'Gisha'", "#2B42BE");
	this.macaroon_text_1.name = "macaroon_text_1";
	this.macaroon_text_1.textAlign = "right";
	this.macaroon_text_1.lineHeight = 24;
	this.macaroon_text_1.lineWidth = 371;
	this.macaroon_text_1.parent = this;
	this.macaroon_text_1.setTransform(382.3,123.6);

	this.macaroon_text_2 = new cjs.Text("בן מארי, קרמול, טמפרור שוקולד", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text_2.name = "macaroon_text_2";
	this.macaroon_text_2.textAlign = "right";
	this.macaroon_text_2.lineHeight = 24;
	this.macaroon_text_2.lineWidth = 444;
	this.macaroon_text_2.parent = this;
	this.macaroon_text_2.setTransform(383.5,76);

	this.macaroon_text_3 = new cjs.Text(":כלי זה נחוץ לביצוע הטכניקות", "bold 19px 'Gisha'", "#2B42BE");
	this.macaroon_text_3.name = "macaroon_text_3";
	this.macaroon_text_3.textAlign = "right";
	this.macaroon_text_3.lineHeight = 24;
	this.macaroon_text_3.lineWidth = 444;
	this.macaroon_text_3.parent = this;
	this.macaroon_text_3.setTransform(383.5,38.7);

	this.macaroon_text_4 = new cjs.Text(":כלי זה נחוץ לאופה ברמה", "bold 19px 'Gisha'", "#2B42BE");
	this.macaroon_text_4.name = "macaroon_text_4";
	this.macaroon_text_4.textAlign = "right";
	this.macaroon_text_4.lineHeight = 24;
	this.macaroon_text_4.lineWidth = 287;
	this.macaroon_text_4.parent = this;
	this.macaroon_text_4.setTransform(383.5,-106.2);

	this.macaroon_title = new cjs.Text("כיריים", "bold 37px 'Gisha'", "#2B42BE");
	this.macaroon_title.name = "macaroon_title";
	this.macaroon_title.textAlign = "right";
	this.macaroon_title.lineHeight = 45;
	this.macaroon_title.lineWidth = 321;
	this.macaroon_title.parent = this;
	this.macaroon_title.setTransform(383.5,-264);

	this.macaroon_text_5 = new cjs.Text("מכשיר לבישול הפועל על גז בישול, עץ או חשמל. הכיריים עשויות ממשטח לוהט או כוללות מבערי אש גלויה, שעל גבם מונחים כלי הבישול. בעבר היה מקובל לבשל באמצעות שריפת עץ, אך כיום השימוש .בשריפת עץ פחת, וגז הבישול וכיריים חשמליות או אינדוקציה תפסו את מקום כירת העץ", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text_5.name = "macaroon_text_5";
	this.macaroon_text_5.textAlign = "right";
	this.macaroon_text_5.lineHeight = 24;
	this.macaroon_text_5.lineWidth = 790;
	this.macaroon_text_5.parent = this;
	this.macaroon_text_5.setTransform(382.2,-213.3);

	this.instance_7 = new lib.notebook_tool();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-38.9,-7.9,1,1,0,0,0,2.1,-2.6);

	this.fade_screen = new lib.fade_screen();
	this.fade_screen.parent = this;
	this.fade_screen.setTransform(4.7,-1.3,1,0.997,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fade_screen},{t:this.instance_7},{t:this.macaroon_text_5},{t:this.macaroon_title},{t:this.macaroon_text_4},{t:this.macaroon_text_3},{t:this.macaroon_text_2},{t:this.macaroon_text_1},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.macaroon_text},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-540.8,-349.5,1045.6,698);


(lib.ZILUF = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sakit();
	this.instance.parent = this;
	this.instance.setTransform(358.8,90,0.241,0.241,30);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.zantar();
	this.instance_1.parent = this;
	this.instance_1.setTransform(250,77,0.19,0.19);

	this.macaroon_text = new cjs.Text("שקית זילוף,    צנתר", "19px 'Gisha'", "#006600");
	this.macaroon_text.name = "macaroon_text";
	this.macaroon_text.textAlign = "right";
	this.macaroon_text.lineHeight = 24;
	this.macaroon_text.lineWidth = 219;
	this.macaroon_text.parent = this;
	this.macaroon_text.setTransform(383.5,124.9);

	this.instance_2 = new lib.ziluf();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-112.1,-140,1.214,1.214,0,0,180);

	this.instance_3 = new lib.preline01();
	this.instance_3.parent = this;
	this.instance_3.setTransform(244,221,0.169,0.169);

	this.macaroon_text_1 = new cjs.Text("קאפקייק,    פרלינים,   בצק רבוך,    טירמיסו,    מקרונים,    קרם פיטסייר", "19px 'Gisha'", "#006600");
	this.macaroon_text_1.name = "macaroon_text_1";
	this.macaroon_text_1.textAlign = "right";
	this.macaroon_text_1.lineHeight = 24;
	this.macaroon_text_1.lineWidth = 795;
	this.macaroon_text_1.parent = this;
	this.macaroon_text_1.setTransform(383.5,260.9);

	this.instance_4 = new lib.Patissier01();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-128,206,0.224,0.224);

	this.instance_5 = new lib.tiramisu01();
	this.instance_5.parent = this;
	this.instance_5.setTransform(61,221,0.209,0.209);

	this.instance_6 = new lib.ravuch01();
	this.instance_6.parent = this;
	this.instance_6.setTransform(151.3,229.5,0.185,0.185,-15);

	this.instance_7 = new lib.Macaroon();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-4,228,0.278,0.278);

	this.instance_8 = new lib.cupcake01();
	this.instance_8.parent = this;
	this.instance_8.setTransform(329,211,0.229,0.229);

	this.instance_9 = new lib.medium_1("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(210,-22.5,0.748,0.748,0,0,0,0,12);
	this.instance_9.alpha = 0.199;

	this.instance_10 = new lib.pro_1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(94.7,-31.7,0.715,0.715,0,0,0,0.1,21.9);

	this.instance_11 = new lib.beginner_1("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(338.5,-21.3,0.731,0.731,0,0,0,0.4,12.1);
	this.instance_11.alpha = 0.199;

	this.macaroon_text_2 = new cjs.Text(":ובעזרתה אפשר להכין את המאפים", "bold 19px 'Gisha'", "#006600");
	this.macaroon_text_2.name = "macaroon_text_2";
	this.macaroon_text_2.textAlign = "right";
	this.macaroon_text_2.lineHeight = 24;
	this.macaroon_text_2.lineWidth = 371;
	this.macaroon_text_2.parent = this;
	this.macaroon_text_2.setTransform(382.2,174.1);

	this.macaroon_text_3 = new cjs.Text(":לביצוע טכניקה זו נחוצים הכלים", "bold 19px 'Gisha'", "#006600");
	this.macaroon_text_3.name = "macaroon_text_3";
	this.macaroon_text_3.textAlign = "right";
	this.macaroon_text_3.lineHeight = 24;
	this.macaroon_text_3.lineWidth = 444;
	this.macaroon_text_3.parent = this;
	this.macaroon_text_3.setTransform(383.5,38.7);

	this.macaroon_text_4 = new cjs.Text(":טכניקה זה נחוצה לאופה ברמה", "bold 19px 'Gisha'", "#006600");
	this.macaroon_text_4.name = "macaroon_text_4";
	this.macaroon_text_4.textAlign = "right";
	this.macaroon_text_4.lineHeight = 24;
	this.macaroon_text_4.lineWidth = 287;
	this.macaroon_text_4.parent = this;
	this.macaroon_text_4.setTransform(383.5,-106.2);

	this.macaroon_title = new cjs.Text("זילוף", "bold 37px 'Gisha'", "#006600");
	this.macaroon_title.name = "macaroon_title";
	this.macaroon_title.textAlign = "right";
	this.macaroon_title.lineHeight = 45;
	this.macaroon_title.lineWidth = 321;
	this.macaroon_title.parent = this;
	this.macaroon_title.setTransform(383.5,-257);

	this.macaroon_text_5 = new cjs.Text(",לחיצת קרם או ממרח דרך שקית בד שאליה מחברים צנתר בקוטרים וצורות שונים, או דרך מזרק .לשם קישוט או מילוי מאפים", "19px 'Gisha'", "#006600");
	this.macaroon_text_5.name = "macaroon_text_5";
	this.macaroon_text_5.textAlign = "right";
	this.macaroon_text_5.lineHeight = 24;
	this.macaroon_text_5.lineWidth = 744;
	this.macaroon_text_5.parent = this;
	this.macaroon_text_5.setTransform(382.2,-207.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.macaroon_text_5},{t:this.macaroon_title},{t:this.macaroon_text_4},{t:this.macaroon_text_3},{t:this.macaroon_text_2},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.macaroon_text_1},{t:this.instance_3},{t:this.instance_2},{t:this.macaroon_text},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 3
	this.instance_12 = new lib.notebooktechnew();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-68.5,-6.3,1,1,0,0,0,-27.8,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Layer 2
	this.fade_screen = new lib.fade_screen();
	this.fade_screen.parent = this;
	this.fade_screen.setTransform(4.5,-0.3,1,0.997,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.fade_screen).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-540.5,-348.5,1045.1,698);


(lib.TEMPRUR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.chocolate("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-192.3,36.4,1.114,1.114,0,0,0,8.3,36.9);

	this.instance_1 = new lib.kosot01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(232,208,0.275,0.275);

	this.instance_2 = new lib.gas();
	this.instance_2.parent = this;
	this.instance_2.setTransform(309,87,0.442,0.442);

	this.macaroon_text = new cjs.Text("כיריים", "19px 'Gisha'", "#006600");
	this.macaroon_text.name = "macaroon_text";
	this.macaroon_text.textAlign = "right";
	this.macaroon_text.lineHeight = 24;
	this.macaroon_text.lineWidth = 193;
	this.macaroon_text.parent = this;
	this.macaroon_text.setTransform(363.4,126.2);

	this.instance_3 = new lib.preline01();
	this.instance_3.parent = this;
	this.instance_3.setTransform(328,221,0.169,0.169);

	this.macaroon_text_1 = new cjs.Text("פרלינים,   קינוחי כוסות", "19px 'Gisha'", "#006600");
	this.macaroon_text_1.name = "macaroon_text_1";
	this.macaroon_text_1.textAlign = "right";
	this.macaroon_text_1.lineHeight = 24;
	this.macaroon_text_1.lineWidth = 795;
	this.macaroon_text_1.parent = this;
	this.macaroon_text_1.setTransform(383.5,260.9);

	this.instance_4 = new lib.medium_1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(212.8,6.8,0.748,0.748,0,0,0,0,12);
	this.instance_4.alpha = 0.199;

	this.instance_5 = new lib.pro_1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(97.6,-2.4,0.715,0.715,0,0,0,0.1,21.9);

	this.instance_6 = new lib.beginner_1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(341.4,8.1,0.731,0.731,0,0,0,0.4,12.1);
	this.instance_6.alpha = 0.199;

	this.macaroon_text_2 = new cjs.Text(":ובעזרתה אפשר להכין את המאפים", "bold 19px 'Gisha'", "#006600");
	this.macaroon_text_2.name = "macaroon_text_2";
	this.macaroon_text_2.textAlign = "right";
	this.macaroon_text_2.lineHeight = 24;
	this.macaroon_text_2.lineWidth = 371;
	this.macaroon_text_2.parent = this;
	this.macaroon_text_2.setTransform(382.2,174.1);

	this.macaroon_text_3 = new cjs.Text(":לביצוע טכניקה זו נחוצים הכלים", "bold 19px 'Gisha'", "#006600");
	this.macaroon_text_3.name = "macaroon_text_3";
	this.macaroon_text_3.textAlign = "right";
	this.macaroon_text_3.lineHeight = 24;
	this.macaroon_text_3.lineWidth = 444;
	this.macaroon_text_3.parent = this;
	this.macaroon_text_3.setTransform(377.5,43.9);

	this.macaroon_text_4 = new cjs.Text(":טכניקה זה נחוצה לאופה ברמה", "bold 19px 'Gisha'", "#006600");
	this.macaroon_text_4.name = "macaroon_text_4";
	this.macaroon_text_4.textAlign = "right";
	this.macaroon_text_4.lineHeight = 24;
	this.macaroon_text_4.lineWidth = 287;
	this.macaroon_text_4.parent = this;
	this.macaroon_text_4.setTransform(383.5,-69.8);

	this.macaroon_title = new cjs.Text("טמפרור שוקולד", "bold 37px 'Gisha'", "#006600");
	this.macaroon_title.name = "macaroon_title";
	this.macaroon_title.textAlign = "right";
	this.macaroon_title.lineHeight = 45;
	this.macaroon_title.lineWidth = 321;
	this.macaroon_title.parent = this;
	this.macaroon_title.setTransform(383.5,-261);

	this.macaroon_text_5 = new cjs.Text("תהליך עיבוד שמבטיח שהשוקולד יתייצב ויהיה מבריק ועמיד לאורך זמן. מטרת התהליך היא לגרום .להיווצרות כמות קטנה של גבישים מסוג 6, כך שכל חמאת הקקאו שבשוקולד תתגבש באותה צורה וכתוצאה מכך השוקולד יהפוך מבריק ובעל חיי-מדף ארוכים מהרגיל. קיימות מספר דרכים לטמפרר שוקולד, אך כולן כוללות את אותם שלושה אלמנטים קריטיים, שהקפדה עליהם תבטיח את הצלחת .התהליך: טמפרטורה, תנועה (כלומר בחישה), ותזמון", "19px 'Gisha'", "#006600");
	this.macaroon_text_5.name = "macaroon_text_5";
	this.macaroon_text_5.textAlign = "right";
	this.macaroon_text_5.lineHeight = 24;
	this.macaroon_text_5.lineWidth = 784;
	this.macaroon_text_5.parent = this;
	this.macaroon_text_5.setTransform(380.6,-208.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.macaroon_text_5},{t:this.macaroon_title},{t:this.macaroon_text_4},{t:this.macaroon_text_3},{t:this.macaroon_text_2},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.macaroon_text_1},{t:this.instance_3},{t:this.macaroon_text},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 3
	this.instance_7 = new lib.notebooktechnew();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-67.5,-5.3,1,1,0,0,0,-27.8,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Layer 2
	this.fade_screen = new lib.fade_screen();
	this.fade_screen.parent = this;
	this.fade_screen.setTransform(5.5,-0.3,1,0.997,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.fade_screen).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-539.5,-348.5,1045.1,698);


(lib.KIRMUL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pan_for_kirmul("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-236.7,36,1.328,1.328,-150.7,0,0,-217.8,44);

	this.instance_1 = new lib.preline01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(322,222,0.169,0.169);

	this.instance_2 = new lib.kosot01();
	this.instance_2.parent = this;
	this.instance_2.setTransform(204,215,0.251,0.251);

	this.instance_3 = new lib.marit();
	this.instance_3.parent = this;
	this.instance_3.setTransform(272.8,74.2,0.245,0.245,30);

	this.instance_4 = new lib.gas();
	this.instance_4.parent = this;
	this.instance_4.setTransform(311,86,0.5,0.5);

	this.macaroon_text = new cjs.Text("פרלינים,    קינוחי כוסות", "19px 'Gisha'", "#006600");
	this.macaroon_text.name = "macaroon_text";
	this.macaroon_text.textAlign = "right";
	this.macaroon_text.lineHeight = 24;
	this.macaroon_text.lineWidth = 757;
	this.macaroon_text.parent = this;
	this.macaroon_text.setTransform(383.5,263.6);

	this.instance_5 = new lib.medium_1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(210,-22.5,0.748,0.748,0,0,0,0,12);
	this.instance_5.alpha = 0.199;

	this.instance_6 = new lib.pro_1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(94.7,-31.7,0.715,0.715,0,0,0,0.1,21.9);

	this.instance_7 = new lib.beginner_1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(338.5,-21.3,0.731,0.731,0,0,0,0.4,12.1);
	this.instance_7.alpha = 0.199;

	this.macaroon_text_1 = new cjs.Text(":ובעזרתה אפשר להכין את המאפים", "bold 19px 'Gisha'", "#006600");
	this.macaroon_text_1.name = "macaroon_text_1";
	this.macaroon_text_1.textAlign = "right";
	this.macaroon_text_1.lineHeight = 24;
	this.macaroon_text_1.lineWidth = 371;
	this.macaroon_text_1.parent = this;
	this.macaroon_text_1.setTransform(382.2,174.1);

	this.macaroon_text_2 = new cjs.Text("כיריים,       מרית", "19px 'Gisha'", "#006600");
	this.macaroon_text_2.name = "macaroon_text_2";
	this.macaroon_text_2.textAlign = "right";
	this.macaroon_text_2.lineHeight = 24;
	this.macaroon_text_2.lineWidth = 435;
	this.macaroon_text_2.parent = this;
	this.macaroon_text_2.setTransform(374,138.9);

	this.macaroon_text_3 = new cjs.Text(":לביצוע טכניקה זו נחוצים הכלים", "bold 19px 'Gisha'", "#006600");
	this.macaroon_text_3.name = "macaroon_text_3";
	this.macaroon_text_3.textAlign = "right";
	this.macaroon_text_3.lineHeight = 24;
	this.macaroon_text_3.lineWidth = 444;
	this.macaroon_text_3.parent = this;
	this.macaroon_text_3.setTransform(383.5,38.7);

	this.macaroon_text_4 = new cjs.Text(":טכניקה זה נחוצה לאופה ברמה", "bold 19px 'Gisha'", "#006600");
	this.macaroon_text_4.name = "macaroon_text_4";
	this.macaroon_text_4.textAlign = "right";
	this.macaroon_text_4.lineHeight = 24;
	this.macaroon_text_4.lineWidth = 287;
	this.macaroon_text_4.parent = this;
	this.macaroon_text_4.setTransform(383.5,-106.2);

	this.macaroon_title = new cjs.Text("קרמול", "bold 37px 'Gisha'", "#006600");
	this.macaroon_title.name = "macaroon_title";
	this.macaroon_title.textAlign = "right";
	this.macaroon_title.lineHeight = 45;
	this.macaroon_title.lineWidth = 321;
	this.macaroon_title.parent = this;
	this.macaroon_title.setTransform(383.5,-264);

	this.macaroon_text_5 = new cjs.Text("תהליך הפיכת סוכר לבן גרגירי לנוזל חום ענברי. כל סוגי הקרמל מתחילים בהמסה וחימום של סוכר פשוט. כשהסוכר מתחמם הוא הופך לסירופ, וככל שהטמפרטורה עולה, הסירופ מסמיך ומצטמצם, וצבעו משחים בהדרגה. כשהוא עובר מצהוב בהיר לחום כהה, טעמו הופך עמוק יותר כתוצאה מתהליכים .כימיים המתרחשים במולקולות המתחממות של הסוכר", "19px 'Gisha'", "#006600");
	this.macaroon_text_5.name = "macaroon_text_5";
	this.macaroon_text_5.textAlign = "right";
	this.macaroon_text_5.lineHeight = 24;
	this.macaroon_text_5.lineWidth = 769;
	this.macaroon_text_5.parent = this;
	this.macaroon_text_5.setTransform(382.2,-213.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.macaroon_text_5},{t:this.macaroon_title},{t:this.macaroon_text_4},{t:this.macaroon_text_3},{t:this.macaroon_text_2},{t:this.macaroon_text_1},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.macaroon_text},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 4
	this.instance_8 = new lib.notebooktechnew();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-67.5,-9.3,1,1,0,0,0,-27.8,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Layer 3
	this.fade_screen = new lib.fade_screen();
	this.fade_screen.parent = this;
	this.fade_screen.setTransform(3.5,-0.3,1,0.997,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.fade_screen).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-539.5,-348.5,1043.1,698);


(lib.tiramisu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tiramisu01();
	this.instance.parent = this;
	this.instance.setTransform(-112.5,-75);

	this.instance_1 = new lib.tiramisuglow();
	this.instance_1.parent = this;
	this.instance_1.shadow = new cjs.Shadow("#FF0000",0,0,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.5,-75,225,150);


(lib.tart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tart2();
	this.instance.parent = this;
	this.instance.setTransform(-112.5,-75);

	this.instance_1 = new lib.tartglow();
	this.instance_1.parent = this;
	this.instance_1.shadow = new cjs.Shadow("#FF0000",0,0,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.5,-75,225,150);


(lib.ravuch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ravuch01();
	this.instance.parent = this;
	this.instance.setTransform(-112.5,-75);

	this.instance_1 = new lib.eclairglow();
	this.instance_1.parent = this;
	this.instance_1.shadow = new cjs.Shadow("#FF0000",0,0,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.5,-75,225,150);


(lib.Preline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.preline01();
	this.instance.parent = this;
	this.instance.setTransform(-112.5,-75);

	this.instance_1 = new lib.prelineglow();
	this.instance_1.parent = this;
	this.instance_1.shadow = new cjs.Shadow("#FF0000",0,0,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.5,-75,225,150);


(lib.patissier = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Patissier01();
	this.instance.parent = this;
	this.instance.setTransform(-104,-112.5);

	this.instance_1 = new lib.patissiereglow();
	this.instance_1.parent = this;
	this.instance_1.shadow = new cjs.Shadow("#FF0000",0,0,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104,-112.5,208,225);


(lib.parich_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.parich();
	this.instance.parent = this;
	this.instance.setTransform(-112.5,-75);

	this.instance_1 = new lib.parichglow();
	this.instance_1.parent = this;
	this.instance_1.shadow = new cjs.Shadow("#FF0000",0,0,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.5,-75,225,150);


(lib.metuganim_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.metuganim01();
	this.instance.parent = this;
	this.instance.setTransform(-112.5,-75);

	this.instance_1 = new lib.donutglow();
	this.instance_1.parent = this;
	this.instance_1.shadow = new cjs.Shadow("#FF0000",0,0,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.5,-75,225,150);


(lib.macaroon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Macaroon();
	this.instance.parent = this;
	this.instance.setTransform(-32,-33.5);

	this.instance_1 = new lib.macaroonglow();
	this.instance_1.parent = this;
	this.instance_1.shadow = new cjs.Shadow("#FF0000",0,0,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-33.5,64,67);


(lib.lehem_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lehem();
	this.instance.parent = this;
	this.instance.setTransform(-107.5,-44.5);

	this.instance_1 = new lib.breadglow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.1,-0.1);
	this.instance_1.shadow = new cjs.Shadow("#FF0000",0,0,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.5,-44.5,215,89);


(lib.kosot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.kosot01();
	this.instance.parent = this;
	this.instance.setTransform(-112.5,-75);

	this.instance_1 = new lib.kosotglow();
	this.instance_1.parent = this;
	this.instance_1.shadow = new cjs.Shadow("#FF0000",0,0,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.5,-75,225,150);


(lib.gvina_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gvina01();
	this.instance.parent = this;
	this.instance.setTransform(-102.5,-82.5);

	this.instance_1 = new lib.gvinaglow();
	this.instance_1.parent = this;
	this.instance_1.shadow = new cjs.Shadow("#FF0000",0,0,18);
	this.instance_1.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 20, 0, 13))];
	this.instance_1.cache(-104,-84,209,169);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.5,-82.5,205,165);


(lib.cupcake_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cupcake01();
	this.instance.parent = this;
	this.instance.setTransform(-76.5,-89);

	this.instance_1 = new lib.cupcakeglow();
	this.instance_1.parent = this;
	this.instance_1.shadow = new cjs.Shadow("#FF0000",0,0,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.5,-89,153,178);


(lib.croissant_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.croissant();
	this.instance.parent = this;
	this.instance.setTransform(-71.5,-55);

	this.instance_1 = new lib.croissantglow();
	this.instance_1.parent = this;
	this.instance_1.shadow = new cjs.Shadow("#FF0000",0,0,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.5,-55,143,110);


(lib.bhushot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bhushot01();
	this.instance.parent = this;
	this.instance.setTransform(-102.5,-82.5);

	this.instance_1 = new lib.bhushotglow();
	this.instance_1.parent = this;
	this.instance_1.shadow = new cjs.Shadow("#FF0000",0,0,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.5,-82.5,205,165);


(lib.alim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ozenpil_1();
	this.instance.parent = this;
	this.instance.setTransform(-65,-51);

	this.instance_1 = new lib.ozenpillglow();
	this.instance_1.parent = this;
	this.instance_1.shadow = new cjs.Shadow("#FF0000",0,0,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65,-51,130,102);


(lib.TIRAMISU = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tiramisuHQ02();
	this.instance.parent = this;
	this.instance.setTransform(-407,-82);

	this.instance_1 = new lib.medium_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(199.8,31.3,0.748,0.748,0,0,0,0,12);

	this.instance_2 = new lib.pro_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(84.5,22.1,0.715,0.715,0,0,0,0.1,21.9);

	this.instance_3 = new lib.beginner_1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(328.3,32.6,0.731,0.731,0,0,0,0.4,12.1);
	this.instance_3.alpha = 0.199;

	this.macaroon_text = new cjs.Text(":וצריך את הכלים", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text.name = "macaroon_text";
	this.macaroon_text.textAlign = "right";
	this.macaroon_text.lineHeight = 24;
	this.macaroon_text.lineWidth = 265;
	this.macaroon_text.parent = this;
	this.macaroon_text.setTransform(372.1,173.7);

	this.macaroon_text_1 = new cjs.Text("קיפול, הקצפה, זילוף, הפרדת ביצים", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_1.name = "macaroon_text_1";
	this.macaroon_text_1.textAlign = "right";
	this.macaroon_text_1.lineHeight = 24;
	this.macaroon_text_1.lineWidth = 444;
	this.macaroon_text_1.parent = this;
	this.macaroon_text_1.setTransform(373.3,126.1);

	this.instance_4 = new lib.matrefa();
	this.instance_4.parent = this;
	this.instance_4.setTransform(77.9,202.9,0.322,0.322,45);

	this.instance_5 = new lib.mida2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-109,221,0.234,0.234);

	this.instance_6 = new lib.marit();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-19.9,252.9,0.211,0.211,-135);

	this.instance_7 = new lib.sakit();
	this.instance_7.parent = this;
	this.instance_7.setTransform(145.4,228,0.241,0.241,30);
	new cjs.ButtonHelper(this.instance_7, 0, 1, 1);

	this.instance_8 = new lib.zantar();
	this.instance_8.parent = this;
	this.instance_8.setTransform(196,215,0.19,0.19);

	this.instance_9 = new lib.mishkal();
	this.instance_9.parent = this;
	this.instance_9.setTransform(254,210,0.35,0.35);

	this.instance_10 = new lib.mixer("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(350.6,226.2,0.134,0.134);

	this.macaroon_text_2 = new cjs.Text(":להכנת מאפה זה, צריך לדעת את הטכניקות", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text_2.name = "macaroon_text_2";
	this.macaroon_text_2.textAlign = "right";
	this.macaroon_text_2.lineHeight = 24;
	this.macaroon_text_2.lineWidth = 444;
	this.macaroon_text_2.parent = this;
	this.macaroon_text_2.setTransform(373.3,88.8);

	this.macaroon_text_3 = new cjs.Text(":מאפה זה מתאים לאופה ברמה", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text_3.name = "macaroon_text_3";
	this.macaroon_text_3.textAlign = "right";
	this.macaroon_text_3.lineHeight = 24;
	this.macaroon_text_3.lineWidth = 287;
	this.macaroon_text_3.parent = this;
	this.macaroon_text_3.setTransform(373.3,-52.3);

	this.macaroon_title = new cjs.Text("טירמיסו", "bold 37px 'Gisha'", "#B71A1A");
	this.macaroon_title.name = "macaroon_title";
	this.macaroon_title.textAlign = "right";
	this.macaroon_title.lineHeight = 45;
	this.macaroon_title.lineWidth = 272;
	this.macaroon_title.parent = this;
	this.macaroon_title.setTransform(373.3,-257.6);

	this.macaroon_text_4 = new cjs.Text(".הרם אותי\" באיטלקית, עוגת גבינה איטלקית קלאסית\"\nטירמיסו היא עוגת שכבות המורכבת מבישקוטים, אספרסו, גבינת מסקרפונה, קצף ביצים, סוכר ויין מרסלה או ליקר אמרטו. נהוג להרכיב את העוגה לסירוגין מן הבישקוטים הטבולים בליקר ובקפה ומן .הקרם העשוי מהביצים ומהגבינה. לאחר מכן נהוג לפזר קקאו מעל העוגה", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_4.name = "macaroon_text_4";
	this.macaroon_text_4.textAlign = "right";
	this.macaroon_text_4.lineHeight = 24;
	this.macaroon_text_4.lineWidth = 734;
	this.macaroon_text_4.parent = this;
	this.macaroon_text_4.setTransform(371.9,-206);

	this.macaroon_text_5 = new cjs.Text("מיקסר,   משקל,   צנתר,   שקית זילוף,   מטרפה,   מרית,   כלי מידה", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_5.name = "macaroon_text_5";
	this.macaroon_text_5.textAlign = "right";
	this.macaroon_text_5.lineHeight = 24;
	this.macaroon_text_5.lineWidth = 757;
	this.macaroon_text_5.parent = this;
	this.macaroon_text_5.setTransform(373.3,263);

	this.notebook_food = new lib.notebook_food();
	this.notebook_food.parent = this;
	this.notebook_food.setTransform(-49.1,-1.5);

	this.fade_screen = new lib.fade_screen();
	this.fade_screen.parent = this;
	this.fade_screen.setTransform(-9.7,6.1,1,0.997,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fade_screen},{t:this.notebook_food},{t:this.macaroon_text_5},{t:this.macaroon_text_4},{t:this.macaroon_title},{t:this.macaroon_text_3},{t:this.macaroon_text_2},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.macaroon_text_1},{t:this.macaroon_text},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-549.6,-342.1,1039.9,698);


(lib.TART = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tartHQ();
	this.instance.parent = this;
	this.instance.setTransform(-400,-61,0.515,0.515);

	this.instance_1 = new lib.meabed();
	this.instance_1.parent = this;
	this.instance_1.setTransform(265,196,0.022,0.022);

	this.instance_2 = new lib.maaroh();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-35.1,198.8,0.164,0.164,30);

	this.instance_3 = new lib.mesanenet();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-149,209,0.322,0.322);

	this.instance_4 = new lib.mishkal();
	this.instance_4.parent = this;
	this.instance_4.setTransform(124,206,0.35,0.35);

	this.instance_5 = new lib.tanur_1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(206.2,223.4,0.215,0.215);

	this.instance_6 = new lib.mixer("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(356.6,220.9,0.134,0.134);

	this.instance_7 = new lib.medium_1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(210,25,0.748,0.748,0,0,0,0,12);

	this.instance_8 = new lib.pro_1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(94.7,15.8,0.715,0.715,0,0,0,0.1,21.9);

	this.instance_9 = new lib.beginner_1("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(338.5,26.2,0.731,0.731,0,0,0,0.4,12.1);
	this.instance_9.alpha = 0.199;

	this.macaroon_text = new cjs.Text(":וצריך את הכלים", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text.name = "macaroon_text";
	this.macaroon_text.textAlign = "right";
	this.macaroon_text.lineHeight = 24;
	this.macaroon_text.lineWidth = 265;
	this.macaroon_text.parent = this;
	this.macaroon_text.setTransform(382.3,167.3);

	this.macaroon_text_1 = new cjs.Text("רידוד, לישה, אפייה עיוורת, הפרדת ביצים", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_1.name = "macaroon_text_1";
	this.macaroon_text_1.textAlign = "right";
	this.macaroon_text_1.lineHeight = 24;
	this.macaroon_text_1.lineWidth = 444;
	this.macaroon_text_1.parent = this;
	this.macaroon_text_1.setTransform(383.5,119.7);

	this.instance_10 = new lib.matrefa();
	this.instance_10.parent = this;
	this.instance_10.setTransform(100.9,194.8,0.322,0.322,45);

	this.instance_11 = new lib.marit();
	this.instance_11.parent = this;
	this.instance_11.setTransform(9.3,249.6,0.211,0.211,-150);

	this.macaroon_text_2 = new cjs.Text(":להכנת מאפה זה, צריך לדעת את הטכניקות", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text_2.name = "macaroon_text_2";
	this.macaroon_text_2.textAlign = "right";
	this.macaroon_text_2.lineHeight = 24;
	this.macaroon_text_2.lineWidth = 444;
	this.macaroon_text_2.parent = this;
	this.macaroon_text_2.setTransform(383.5,82.5);

	this.macaroon_text_3 = new cjs.Text(":מאפה זה מתאים לאופה ברמה", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text_3.name = "macaroon_text_3";
	this.macaroon_text_3.textAlign = "right";
	this.macaroon_text_3.lineHeight = 24;
	this.macaroon_text_3.lineWidth = 287;
	this.macaroon_text_3.parent = this;
	this.macaroon_text_3.setTransform(383.5,-58.7);

	this.macaroon_title = new cjs.Text("טארט", "bold 37px 'Gisha'", "#B71A1A");
	this.macaroon_title.name = "macaroon_title";
	this.macaroon_title.textAlign = "right";
	this.macaroon_title.lineHeight = 45;
	this.macaroon_title.lineWidth = 157;
	this.macaroon_title.parent = this;
	this.macaroon_title.setTransform(383.5,-264);

	this.macaroon_text_4 = new cjs.Text(".מאפה מתוק או מלוח שדומה לפאי, אבל שונה ממנו בכך שהחלק העליון פתוח ולא מכוסה בבצק בסיס הטארט יכול להיות מבצק פריך או מבצק עלים. טארטים קטנים המוגשים כעוגות אישיות .\"נקראים \"טארטלטים\n.כמה דוגמאות לטארטים קלאסיים: טארט תפוחים, טארט פרות יער, טארט פרות אפויים או טריים .טארט אחד מעניין במיוחד הוא \"טארט טאטן\", שהוא טארט הפוך: התפוחים בתחתית ומעליו הבצק", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_4.name = "macaroon_text_4";
	this.macaroon_text_4.textAlign = "right";
	this.macaroon_text_4.lineHeight = 24;
	this.macaroon_text_4.lineWidth = 734;
	this.macaroon_text_4.parent = this;
	this.macaroon_text_4.setTransform(382.2,-212.4);

	this.macaroon_text_5 = new cjs.Text("מיקסר,   מעבד מזון,   תנור,   משקל,   מטרפה,   מרית,   מערוך,   מסננת", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_5.name = "macaroon_text_5";
	this.macaroon_text_5.textAlign = "right";
	this.macaroon_text_5.lineHeight = 24;
	this.macaroon_text_5.lineWidth = 757;
	this.macaroon_text_5.parent = this;
	this.macaroon_text_5.setTransform(383.5,256.6);

	this.notebook_food = new lib.notebook_food();
	this.notebook_food.parent = this;
	this.notebook_food.setTransform(-38.9,-7.8);

	this.fade_screen = new lib.fade_screen();
	this.fade_screen.parent = this;
	this.fade_screen.setTransform(0.5,-0.3,1,0.997,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fade_screen},{t:this.notebook_food},{t:this.macaroon_text_5},{t:this.macaroon_text_4},{t:this.macaroon_title},{t:this.macaroon_text_3},{t:this.macaroon_text_2},{t:this.instance_11},{t:this.instance_10},{t:this.macaroon_text_1},{t:this.macaroon_text},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-539.4,-348.5,1039.9,698);


(lib.RAVUCH = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ravuch01();
	this.instance.parent = this;
	this.instance.setTransform(-400,-71.1,1.6,1.6,-10);

	this.instance_1 = new lib.medium_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(210,25,0.748,0.748,0,0,0,0,12);

	this.instance_2 = new lib.pro_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(94.7,15.8,0.715,0.715,0,0,0,0.1,21.9);

	this.instance_3 = new lib.beginner_1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(338.5,26.2,0.731,0.731,0,0,0,0.4,12.1);
	this.instance_3.alpha = 0.199;

	this.instance_4 = new lib.gas();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-239,230,0.411,0.411);

	this.macaroon_text = new cjs.Text(":וצריך את הכלים", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text.name = "macaroon_text";
	this.macaroon_text.textAlign = "right";
	this.macaroon_text.lineHeight = 24;
	this.macaroon_text.lineWidth = 265;
	this.macaroon_text.parent = this;
	this.macaroon_text.setTransform(382.3,167.3);

	this.macaroon_text_1 = new cjs.Text("הקצפה, הפרדת ביצים", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_1.name = "macaroon_text_1";
	this.macaroon_text_1.textAlign = "right";
	this.macaroon_text_1.lineHeight = 24;
	this.macaroon_text_1.lineWidth = 444;
	this.macaroon_text_1.parent = this;
	this.macaroon_text_1.setTransform(383.5,119.7);

	this.instance_5 = new lib.matrefa();
	this.instance_5.parent = this;
	this.instance_5.setTransform(33.7,197.5,0.322,0.322,45);

	this.instance_6 = new lib.mida2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-156,215,0.234,0.234);

	this.instance_7 = new lib.marit();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-64.1,247.5,0.211,0.211,-135);

	this.instance_8 = new lib.sakit();
	this.instance_8.parent = this;
	this.instance_8.setTransform(104,223.1,0.241,0.241,30);
	new cjs.ButtonHelper(this.instance_8, 0, 1, 1);

	this.instance_9 = new lib.zantar();
	this.instance_9.parent = this;
	this.instance_9.setTransform(158,208,0.19,0.19);

	this.instance_10 = new lib.mishkal();
	this.instance_10.parent = this;
	this.instance_10.setTransform(220,205,0.35,0.35);

	this.instance_11 = new lib.tanur_1("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(298.5,222.6,0.215,0.215);

	this.instance_12 = new lib.mixer("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(360.8,219.9,0.134,0.134);

	this.macaroon_text_2 = new cjs.Text(":להכנת מאפה זה, צריך לדעת את הטכניקות", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text_2.name = "macaroon_text_2";
	this.macaroon_text_2.textAlign = "right";
	this.macaroon_text_2.lineHeight = 24;
	this.macaroon_text_2.lineWidth = 444;
	this.macaroon_text_2.parent = this;
	this.macaroon_text_2.setTransform(383.5,82.5);

	this.macaroon_text_3 = new cjs.Text(":מאפה זה מתאים לאופה ברמה", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text_3.name = "macaroon_text_3";
	this.macaroon_text_3.textAlign = "right";
	this.macaroon_text_3.lineHeight = 24;
	this.macaroon_text_3.lineWidth = 287;
	this.macaroon_text_3.parent = this;
	this.macaroon_text_3.setTransform(383.5,-58.7);

	this.macaroon_title = new cjs.Text("בצק רבוך", "bold 37px 'Gisha'", "#B71A1A");
	this.macaroon_title.name = "macaroon_title";
	this.macaroon_title.textAlign = "right";
	this.macaroon_title.lineHeight = 45;
	this.macaroon_title.lineWidth = 268;
	this.macaroon_title.parent = this;
	this.macaroon_title.setTransform(383.5,-264);

	this.macaroon_text_4 = new cjs.Text("מאפים כמו פחזניות ואיקלרים מכינים מבצק רבוך, שנקרא גם בצק מבושל או בצק קדירה. זהו בצק ,בעל מרקם מיוחד, שניתן לעבדו רק על ידי זילוף. הכנת בצק רבוך מצריכה שימוש במים, שמן, סוכר מלח וקמח (אותו מוסיפים אחרי רתיחת הנוזלים וכיבוי האש), וערבובם המהיר תוך הוספת ביצים .בהדרגה, עד שכדור הבצק מתנתק מדפנות הסיר", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_4.name = "macaroon_text_4";
	this.macaroon_text_4.textAlign = "right";
	this.macaroon_text_4.lineHeight = 24;
	this.macaroon_text_4.lineWidth = 734;
	this.macaroon_text_4.parent = this;
	this.macaroon_text_4.setTransform(382.2,-212.4);

	this.macaroon_text_5 = new cjs.Text("מיקסר,   תנור,   משקל,   צנתר,   שקית זילוף,   מטרפה,   מרית,   כלי מידה,   כיריים", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_5.name = "macaroon_text_5";
	this.macaroon_text_5.textAlign = "right";
	this.macaroon_text_5.lineHeight = 24;
	this.macaroon_text_5.lineWidth = 757;
	this.macaroon_text_5.parent = this;
	this.macaroon_text_5.setTransform(383.5,256.6);

	this.notebook_food = new lib.notebook_food();
	this.notebook_food.parent = this;
	this.notebook_food.setTransform(-38.9,-7.8);

	this.fade_screen = new lib.fade_screen();
	this.fade_screen.parent = this;
	this.fade_screen.setTransform(0.5,-0.3,1,0.997,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fade_screen},{t:this.notebook_food},{t:this.macaroon_text_5},{t:this.macaroon_text_4},{t:this.macaroon_title},{t:this.macaroon_text_3},{t:this.macaroon_text_2},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.macaroon_text_1},{t:this.macaroon_text},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-539.4,-348.5,1039.9,698);


(lib.PRELINE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.medium_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(486.5,18,0.748,0.748,0,0,0,0,12);
	this.instance.alpha = 0.199;

	this.instance_1 = new lib.pro_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(371.2,8.8,0.715,0.715,0,0,0,0.1,21.9);

	this.instance_2 = new lib.beginner_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(615,19.2,0.731,0.731,0,0,0,0.4,12.1);
	this.instance_2.alpha = 0.199;

	this.macaroon_text = new cjs.Text(":וצריך את הכלים", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text.name = "macaroon_text";
	this.macaroon_text.textAlign = "right";
	this.macaroon_text.lineHeight = 24;
	this.macaroon_text.lineWidth = 265;
	this.macaroon_text.parent = this;
	this.macaroon_text.setTransform(654.6,153.4);

	this.macaroon_text_1 = new cjs.Text(":להכנת מאפה זה, צריך לדעת את הטכניקות", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text_1.name = "macaroon_text_1";
	this.macaroon_text_1.textAlign = "right";
	this.macaroon_text_1.lineHeight = 24;
	this.macaroon_text_1.lineWidth = 444;
	this.macaroon_text_1.parent = this;
	this.macaroon_text_1.setTransform(655.8,68.5);

	this.macaroon_text_2 = new cjs.Text(":מאפה זה מתאים לאופה ברמה", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text_2.name = "macaroon_text_2";
	this.macaroon_text_2.textAlign = "right";
	this.macaroon_text_2.lineHeight = 24;
	this.macaroon_text_2.lineWidth = 287;
	this.macaroon_text_2.parent = this;
	this.macaroon_text_2.setTransform(655.8,-72.6);

	this.instance_3 = new lib.preline01();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-91,-74,1.179,1.179);

	this.instance_4 = new lib.gas();
	this.instance_4.parent = this;
	this.instance_4.setTransform(72,215,0.411,0.411);

	this.instance_5 = new lib.mida2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(165,201,0.234,0.234);

	this.instance_6 = new lib.marit();
	this.instance_6.parent = this;
	this.instance_6.setTransform(265.3,233.5,0.211,0.211,-135);

	this.instance_7 = new lib.sakit();
	this.instance_7.parent = this;
	this.instance_7.setTransform(363.3,209,0.241,0.241,30);
	new cjs.ButtonHelper(this.instance_7, 0, 1, 1);

	this.instance_8 = new lib.zantar();
	this.instance_8.parent = this;
	this.instance_8.setTransform(413,195,0.19,0.19);

	this.instance_9 = new lib.mishkal();
	this.instance_9.parent = this;
	this.instance_9.setTransform(479,190,0.35,0.35);

	this.instance_10 = new lib.tanur_1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(568.6,208.5,0.215,0.215);

	this.instance_11 = new lib.mixer("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(633.1,205.8,0.134,0.134);

	this.macaroon_text_3 = new cjs.Text("קיפול, טמפרור שוקולד, זילוף, קרמול, הקצפה, בן מארי", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_3.name = "macaroon_text_3";
	this.macaroon_text_3.textAlign = "right";
	this.macaroon_text_3.lineHeight = 24;
	this.macaroon_text_3.lineWidth = 444;
	this.macaroon_text_3.parent = this;
	this.macaroon_text_3.setTransform(655.8,108.8);

	this.macaroon_title = new cjs.Text("פרלין", "bold 37px 'Gisha'", "#B71A1A");
	this.macaroon_title.name = "macaroon_title";
	this.macaroon_title.textAlign = "right";
	this.macaroon_title.lineHeight = 45;
	this.macaroon_title.lineWidth = 157;
	this.macaroon_title.parent = this;
	this.macaroon_title.setTransform(655.8,-277.7);

	this.macaroon_text_4 = new cjs.Text("פְרָלִין הוא שקד מצופה בקרמל; משמעות המילה עברה מספר שינויים מאז המצאתה במאה ה-18 ובשפה העברית היא משמשת כיום ככינוי כולל לממתקי שוקולד ממולאים בכל טוב. בשפות אחרות\n.(pralines belges) הם ידועים גם כפרלינים בלגים ", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_4.name = "macaroon_text_4";
	this.macaroon_text_4.textAlign = "right";
	this.macaroon_text_4.lineHeight = 24;
	this.macaroon_text_4.lineWidth = 745;
	this.macaroon_text_4.parent = this;
	this.macaroon_text_4.setTransform(654.5,-226.6);

	this.macaroon_text_5 = new cjs.Text("מיקסר,    תנור,    משקל,    צנתר,    שקית זילוף,    מרית,    כלי מידה,    כיריים", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_5.name = "macaroon_text_5";
	this.macaroon_text_5.textAlign = "right";
	this.macaroon_text_5.lineHeight = 24;
	this.macaroon_text_5.lineWidth = 757;
	this.macaroon_text_5.parent = this;
	this.macaroon_text_5.setTransform(655.8,243);

	this.notebook_food = new lib.notebook_food();
	this.notebook_food.parent = this;
	this.notebook_food.setTransform(233.4,-21.6);

	this.fade_screen = new lib.fade_screen();
	this.fade_screen.parent = this;
	this.fade_screen.setTransform(272.8,-14,1,0.997,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fade_screen},{t:this.notebook_food},{t:this.macaroon_text_5},{t:this.macaroon_text_4},{t:this.macaroon_title},{t:this.macaroon_text_3},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.macaroon_text_2},{t:this.macaroon_text_1},{t:this.macaroon_text},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-267.1,-362.2,1039.9,698);


(lib.PATISSIERE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Patissier01();
	this.instance.parent = this;
	this.instance.setTransform(-393,-193,1.613,1.613);

	this.instance_1 = new lib.medium_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(210,25,0.748,0.748,0,0,0,0,12);
	this.instance_1.alpha = 0.199;

	this.instance_2 = new lib.pro_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(94.7,15.8,0.715,0.715,0,0,0,0.1,21.9);

	this.instance_3 = new lib.beginner_1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(338.5,26.2,0.731,0.731,0,0,0,0.4,12.1);
	this.instance_3.alpha = 0.199;

	this.macaroon_text = new cjs.Text(":וצריך את הכלים", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text.name = "macaroon_text";
	this.macaroon_text.textAlign = "right";
	this.macaroon_text.lineHeight = 24;
	this.macaroon_text.lineWidth = 265;
	this.macaroon_text.parent = this;
	this.macaroon_text.setTransform(382.3,167.3);

	this.macaroon_text_1 = new cjs.Text("קיפול, הקצפה, זילוף, הפרדת ביצים, בן מארי", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_1.name = "macaroon_text_1";
	this.macaroon_text_1.textAlign = "right";
	this.macaroon_text_1.lineHeight = 24;
	this.macaroon_text_1.lineWidth = 444;
	this.macaroon_text_1.parent = this;
	this.macaroon_text_1.setTransform(383.5,119.7);

	this.instance_4 = new lib.matrefa();
	this.instance_4.parent = this;
	this.instance_4.setTransform(93.7,196.1,0.322,0.322,45);

	this.instance_5 = new lib.mesanenet();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-94,207,0.322,0.322);

	this.instance_6 = new lib.mida2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-157,214,0.234,0.234);

	this.instance_7 = new lib.marit();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-4.1,246.1,0.211,0.211,-135);

	this.instance_8 = new lib.sakit();
	this.instance_8.parent = this;
	this.instance_8.setTransform(151.2,221.7,0.241,0.241,30);
	new cjs.ButtonHelper(this.instance_8, 0, 1, 1);

	this.instance_9 = new lib.zantar();
	this.instance_9.parent = this;
	this.instance_9.setTransform(205,207,0.19,0.19);

	this.instance_10 = new lib.mishkal();
	this.instance_10.parent = this;
	this.instance_10.setTransform(267,204,0.35,0.35);

	this.instance_11 = new lib.mixer("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(360.8,219.9,0.134,0.134);

	this.macaroon_text_2 = new cjs.Text(":להכנת מאפה זה, צריך לדעת את הטכניקות", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text_2.name = "macaroon_text_2";
	this.macaroon_text_2.textAlign = "right";
	this.macaroon_text_2.lineHeight = 24;
	this.macaroon_text_2.lineWidth = 444;
	this.macaroon_text_2.parent = this;
	this.macaroon_text_2.setTransform(383.5,82.5);

	this.macaroon_text_3 = new cjs.Text(":מאפה זה מתאים לאופה ברמה", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text_3.name = "macaroon_text_3";
	this.macaroon_text_3.textAlign = "right";
	this.macaroon_text_3.lineHeight = 24;
	this.macaroon_text_3.lineWidth = 287;
	this.macaroon_text_3.parent = this;
	this.macaroon_text_3.setTransform(383.5,-58.7);

	this.macaroon_title = new cjs.Text("קרם פטיסייר", "bold 37px 'Gisha'", "#B71A1A");
	this.macaroon_title.name = "macaroon_title";
	this.macaroon_title.textAlign = "right";
	this.macaroon_title.lineHeight = 45;
	this.macaroon_title.lineWidth = 268;
	this.macaroon_title.parent = this;
	this.macaroon_title.setTransform(383.5,-264);

	this.macaroon_text_4 = new cjs.Text("קרם או חביצה עשירה אשר עשויה מביצים, מוסמכת בעזרת קורנפלור או קמח, ולרוב מתובלת בווניל. מקור הקרם במטבח הצרפתי והוא מהווה בסיס או מילוי לקינוחים רבים כמו פחזניות וקרם-.שניט", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_4.name = "macaroon_text_4";
	this.macaroon_text_4.textAlign = "right";
	this.macaroon_text_4.lineHeight = 24;
	this.macaroon_text_4.lineWidth = 734;
	this.macaroon_text_4.parent = this;
	this.macaroon_text_4.setTransform(382.2,-212.4);

	this.macaroon_text_5 = new cjs.Text("מיקסר,   משקל,   צנתר,   שקית זילוף,   מטרפה,   מרית,   מסננת,   כלי מידה", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_5.name = "macaroon_text_5";
	this.macaroon_text_5.textAlign = "right";
	this.macaroon_text_5.lineHeight = 24;
	this.macaroon_text_5.lineWidth = 757;
	this.macaroon_text_5.parent = this;
	this.macaroon_text_5.setTransform(383.5,256.6);

	this.notebook_food = new lib.notebook_food();
	this.notebook_food.parent = this;
	this.notebook_food.setTransform(-38.9,-7.8);

	this.fade_screen = new lib.fade_screen();
	this.fade_screen.parent = this;
	this.fade_screen.setTransform(0.5,-0.3,1,0.997,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fade_screen},{t:this.notebook_food},{t:this.macaroon_text_5},{t:this.macaroon_text_4},{t:this.macaroon_title},{t:this.macaroon_text_3},{t:this.macaroon_text_2},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.macaroon_text_1},{t:this.macaroon_text},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-539.4,-348.5,1039.9,698);


(lib.PARICH = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.parichHQpngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-405,-52,0.548,0.548);

	this.instance_1 = new lib.meabed();
	this.instance_1.parent = this;
	this.instance_1.setTransform(265,196,0.022,0.022);

	this.instance_2 = new lib.maaroh();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-35.1,198.8,0.164,0.164,30);

	this.instance_3 = new lib.mesanenet();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-149,209,0.322,0.322);

	this.instance_4 = new lib.mishkal();
	this.instance_4.parent = this;
	this.instance_4.setTransform(124,206,0.35,0.35);

	this.instance_5 = new lib.tanur_1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(206.2,223.4,0.215,0.215);

	this.instance_6 = new lib.mixer("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(356.6,220.9,0.134,0.134);

	this.instance_7 = new lib.matrefa();
	this.instance_7.parent = this;
	this.instance_7.setTransform(100.9,194.8,0.322,0.322,45);

	this.instance_8 = new lib.marit();
	this.instance_8.parent = this;
	this.instance_8.setTransform(9.3,249.6,0.211,0.211,-150);

	this.macaroon_text = new cjs.Text("מיקסר,   מעבד מזון,   תנור,   משקל,   מטרפה,   מרית,   מערוך,   מסננת", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text.name = "macaroon_text";
	this.macaroon_text.textAlign = "right";
	this.macaroon_text.lineHeight = 24;
	this.macaroon_text.lineWidth = 757;
	this.macaroon_text.parent = this;
	this.macaroon_text.setTransform(383.5,256.6);

	this.instance_9 = new lib.medium_1("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(210,25,0.748,0.748,0,0,0,0,12);

	this.instance_10 = new lib.pro_1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(94.7,15.8,0.715,0.715,0,0,0,0.1,21.9);

	this.instance_11 = new lib.beginner_1("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(338.5,26.2,0.731,0.731,0,0,0,0.4,12.1);

	this.macaroon_text_1 = new cjs.Text(":וצריך את הכלים", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text_1.name = "macaroon_text_1";
	this.macaroon_text_1.textAlign = "right";
	this.macaroon_text_1.lineHeight = 24;
	this.macaroon_text_1.lineWidth = 265;
	this.macaroon_text_1.parent = this;
	this.macaroon_text_1.setTransform(378.1,168.4);

	this.macaroon_text_2 = new cjs.Text("רידוד, לישה, אפייה עיוורת, הפרדת ביצים", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_2.name = "macaroon_text_2";
	this.macaroon_text_2.textAlign = "right";
	this.macaroon_text_2.lineHeight = 24;
	this.macaroon_text_2.lineWidth = 444;
	this.macaroon_text_2.parent = this;
	this.macaroon_text_2.setTransform(379.3,120.8);

	this.macaroon_text_3 = new cjs.Text(":להכנת מאפה זה, צריך לדעת את הטכניקות", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text_3.name = "macaroon_text_3";
	this.macaroon_text_3.textAlign = "right";
	this.macaroon_text_3.lineHeight = 24;
	this.macaroon_text_3.lineWidth = 444;
	this.macaroon_text_3.parent = this;
	this.macaroon_text_3.setTransform(379.3,83.5);

	this.macaroon_text_4 = new cjs.Text(":מאפה זה מתאים לאופה ברמה", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text_4.name = "macaroon_text_4";
	this.macaroon_text_4.textAlign = "right";
	this.macaroon_text_4.lineHeight = 24;
	this.macaroon_text_4.lineWidth = 287;
	this.macaroon_text_4.parent = this;
	this.macaroon_text_4.setTransform(379.3,-57.6);

	this.macaroon_title = new cjs.Text("בצק פריך", "bold 37px 'Gisha'", "#B71A1A");
	this.macaroon_title.name = "macaroon_title";
	this.macaroon_title.textAlign = "right";
	this.macaroon_title.lineHeight = 45;
	this.macaroon_title.lineWidth = 220;
	this.macaroon_title.parent = this;
	this.macaroon_title.setTransform(379.3,-262.9);

	this.macaroon_text_5 = new cjs.Text("בצק פריך הוא בצק שמכיל על כל כמות של סוכר (או אבקת סוכר) כמות כפולה של שומן \nחמאה או מרגרינה) וכמות משולשת של קמח לבן. מיחסי הכמויות האלה נובע כינוי נוסף לבצק) ,מסוג זה, \"בצק 1:2:3\". לשלושת המרכיבים הבסיסיים יכולים להתווסף ביצים או חלמוני ביצים שמנת, חלב, מים ומלח לשיפור הטעם וכן משפרי טעם כמו וניל, קליפה מגוררת של לימון או תפוז .ועוד. בצק פריך משמש להכנת עוגיות מתוקות או מלוחות, לבסיסים של טארט או פאי, או לפשטידה", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_5.name = "macaroon_text_5";
	this.macaroon_text_5.textAlign = "right";
	this.macaroon_text_5.lineHeight = 24;
	this.macaroon_text_5.lineWidth = 741;
	this.macaroon_text_5.parent = this;
	this.macaroon_text_5.setTransform(378,-213.8);

	this.notebook_food = new lib.notebook_food();
	this.notebook_food.parent = this;
	this.notebook_food.setTransform(-43.1,-6.8);

	this.fade_screen = new lib.fade_screen();
	this.fade_screen.parent = this;
	this.fade_screen.setTransform(0.5,-0.3,1,0.997,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fade_screen},{t:this.notebook_food},{t:this.macaroon_text_5},{t:this.macaroon_title},{t:this.macaroon_text_4},{t:this.macaroon_text_3},{t:this.macaroon_text_2},{t:this.macaroon_text_1},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.macaroon_text},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-543.6,-348.5,1044.1,698);


(lib.METUGAN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.medium_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(210,25,0.748,0.748,0,0,0,0,12);

	this.instance_1 = new lib.pro_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(94.7,15.8,0.715,0.715,0,0,0,0.1,21.9);

	this.instance_2 = new lib.beginner_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(338.5,26.2,0.731,0.731,0,0,0,0.4,12.1);

	this.instance_3 = new lib.meabed();
	this.instance_3.parent = this;
	this.instance_3.setTransform(265,195,0.022,0.022);

	this.instance_4 = new lib.maaroh();
	this.instance_4.parent = this;
	this.instance_4.setTransform(82.2,196.9,0.164,0.164,30);

	this.instance_5 = new lib.gas();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-114,228,0.411,0.411);

	this.instance_6 = new lib.mida2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-28,213,0.234,0.234);

	this.instance_7 = new lib.metuganim();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-357,-41,0.094,0.094);

	this.instance_8 = new lib.marit();
	this.instance_8.parent = this;
	this.instance_8.setTransform(129.7,249.4,0.211,0.211,-150);

	this.instance_9 = new lib.mishkal();
	this.instance_9.parent = this;
	this.instance_9.setTransform(169,205,0.35,0.35);

	this.instance_10 = new lib.mixer("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(360.8,219.9,0.134,0.134);

	this.macaroon_text = new cjs.Text(":וצריך את הכלים", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text.name = "macaroon_text";
	this.macaroon_text.textAlign = "right";
	this.macaroon_text.lineHeight = 24;
	this.macaroon_text.lineWidth = 265;
	this.macaroon_text.parent = this;
	this.macaroon_text.setTransform(378.1,168.4);

	this.macaroon_text_1 = new cjs.Text("לישה, הקצפה, רידוד", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_1.name = "macaroon_text_1";
	this.macaroon_text_1.textAlign = "right";
	this.macaroon_text_1.lineHeight = 24;
	this.macaroon_text_1.lineWidth = 444;
	this.macaroon_text_1.parent = this;
	this.macaroon_text_1.setTransform(379.3,120.8);

	this.macaroon_text_2 = new cjs.Text(":להכנת מאפה זה, צריך לדעת את הטכניקות", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text_2.name = "macaroon_text_2";
	this.macaroon_text_2.textAlign = "right";
	this.macaroon_text_2.lineHeight = 24;
	this.macaroon_text_2.lineWidth = 444;
	this.macaroon_text_2.parent = this;
	this.macaroon_text_2.setTransform(379.3,83.5);

	this.macaroon_text_3 = new cjs.Text(":מאפה זה מתאים לאופה ברמה", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text_3.name = "macaroon_text_3";
	this.macaroon_text_3.textAlign = "right";
	this.macaroon_text_3.lineHeight = 24;
	this.macaroon_text_3.lineWidth = 287;
	this.macaroon_text_3.parent = this;
	this.macaroon_text_3.setTransform(379.3,-57.6);

	this.macaroon_title = new cjs.Text("מטוגנים", "bold 37px 'Gisha'", "#B71A1A");
	this.macaroon_title.name = "macaroon_title";
	this.macaroon_title.textAlign = "right";
	this.macaroon_title.lineHeight = 45;
	this.macaroon_title.lineWidth = 220;
	this.macaroon_title.parent = this;
	this.macaroon_title.setTransform(379.3,-262.9);

	this.macaroon_text_4 = new cjs.Text("במאפים כמו סופגניות ודונאטס, מבשלים את המזון בסיר המכיל כמות גדולה של שמן צמחי המכסה :את המזון המבושל מכל צדדיו. מספר דגשים לטיגון עמוק\n(יש להקפיד על טמפרטורת טיגון לא גבוהה מדי ולא נמוכה מדי (מומלץ על טמפרטורה בין 150 ל-180\nטמפרטורת טיגון גבוהה מדי תתבטא במזון זהוב ופריך מבחוץ אבל חי מבפנים, ואילו טמפרטורת טיגון .נמוכה מדי תגרום למזון לספוג הרבה שמן\n.\"כשמכניסים מזון לשמן חם רצוי שיהיה יבש, שכן מים גורמים לשמן \"לקפוץ", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_4.name = "macaroon_text_4";
	this.macaroon_text_4.textAlign = "right";
	this.macaroon_text_4.lineHeight = 24;
	this.macaroon_text_4.lineWidth = 750;
	this.macaroon_text_4.parent = this;
	this.macaroon_text_4.setTransform(378,-213.8);

	this.macaroon_text_5 = new cjs.Text("מיקסר,   מעבד מזון,   משקל,   מרית,   מערוך,   כלי מידה,   כיריים", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_5.name = "macaroon_text_5";
	this.macaroon_text_5.textAlign = "right";
	this.macaroon_text_5.lineHeight = 24;
	this.macaroon_text_5.lineWidth = 757;
	this.macaroon_text_5.parent = this;
	this.macaroon_text_5.setTransform(379.3,257.7);

	this.notebook_food = new lib.notebook_food();
	this.notebook_food.parent = this;
	this.notebook_food.setTransform(-43.1,-6.8);

	this.fade_screen = new lib.fade_screen();
	this.fade_screen.parent = this;
	this.fade_screen.setTransform(0.5,-0.3,1,0.997,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fade_screen},{t:this.notebook_food},{t:this.macaroon_text_5},{t:this.macaroon_text_4},{t:this.macaroon_title},{t:this.macaroon_text_3},{t:this.macaroon_text_2},{t:this.macaroon_text_1},{t:this.macaroon_text},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-543.6,-348.5,1044.1,698);


(lib.MACAROONS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.medium_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(210,25,0.748,0.748,0,0,0,0,12);

	this.instance_1 = new lib.pro_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(94.7,15.8,0.715,0.715,0,0,0,0.1,21.9);

	this.instance_2 = new lib.beginner_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(338.5,26.2,0.731,0.731,0,0,0,0.4,12.1);
	this.instance_2.alpha = 0.199;

	this.instance_3 = new lib.macaroonHQ();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-389.2,55,0.168,0.104,-15);

	this.instance_4 = new lib.macaroonHQ();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-274.2,3.2,0.149,0.102,-15);

	this.macaroon_text = new cjs.Text(":וצריך את הכלים", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text.name = "macaroon_text";
	this.macaroon_text.textAlign = "right";
	this.macaroon_text.lineHeight = 24;
	this.macaroon_text.lineWidth = 265;
	this.macaroon_text.parent = this;
	this.macaroon_text.setTransform(382.3,167.3);

	this.macaroon_text_1 = new cjs.Text("קיפול, הקצפה, זילוף, הפרדת ביצים, בן מארי", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_1.name = "macaroon_text_1";
	this.macaroon_text_1.textAlign = "right";
	this.macaroon_text_1.lineHeight = 24;
	this.macaroon_text_1.lineWidth = 444;
	this.macaroon_text_1.parent = this;
	this.macaroon_text_1.setTransform(383.5,119.7);

	this.instance_5 = new lib.matrefa();
	this.instance_5.parent = this;
	this.instance_5.setTransform(33.7,197.5,0.322,0.322,45);

	this.instance_6 = new lib.mesanenet();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-156,208,0.322,0.322);

	this.instance_7 = new lib.macaroonHQ();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-356,-52.4,0.168,0.1,15);

	this.instance_8 = new lib.mida2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-219,215,0.234,0.234);

	this.instance_9 = new lib.marit();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-64.1,247.5,0.211,0.211,-135);

	this.instance_10 = new lib.sakit();
	this.instance_10.parent = this;
	this.instance_10.setTransform(104,223.1,0.241,0.241,30);
	new cjs.ButtonHelper(this.instance_10, 0, 1, 1);

	this.instance_11 = new lib.zantar();
	this.instance_11.parent = this;
	this.instance_11.setTransform(158,208,0.19,0.19);

	this.instance_12 = new lib.mishkal();
	this.instance_12.parent = this;
	this.instance_12.setTransform(220,205,0.35,0.35);

	this.instance_13 = new lib.tanur_1("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(298.5,222.6,0.215,0.215);

	this.instance_14 = new lib.mixer("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(360.8,219.9,0.134,0.134);

	this.macaroon_text_2 = new cjs.Text(":להכנת מאפה זה, צריך לדעת את הטכניקות", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text_2.name = "macaroon_text_2";
	this.macaroon_text_2.textAlign = "right";
	this.macaroon_text_2.lineHeight = 24;
	this.macaroon_text_2.lineWidth = 444;
	this.macaroon_text_2.parent = this;
	this.macaroon_text_2.setTransform(383.5,82.5);

	this.macaroon_text_3 = new cjs.Text(":מאפה זה מתאים לאופה ברמה", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text_3.name = "macaroon_text_3";
	this.macaroon_text_3.textAlign = "right";
	this.macaroon_text_3.lineHeight = 24;
	this.macaroon_text_3.lineWidth = 287;
	this.macaroon_text_3.parent = this;
	this.macaroon_text_3.setTransform(383.5,-58.7);

	this.macaroon_title = new cjs.Text("מקרון", "bold 37px 'Gisha'", "#B71A1A");
	this.macaroon_title.name = "macaroon_title";
	this.macaroon_title.textAlign = "right";
	this.macaroon_title.lineHeight = 45;
	this.macaroon_title.lineWidth = 157;
	this.macaroon_title.parent = this;
	this.macaroon_title.setTransform(383.5,-264);

	this.macaroon_text_4 = new cjs.Text("מָקָרוּן הוא שם כללי למגוון עוגיות אפויות קלות - ללא קמח, חמאה, מרגרינה או שמן. הבסיס לעוגיית מקרון הוא חלבוני ביצה מוקצפים, סוכר ואגוזים, זרעים או מיני קטניות טחונים, ובמיוחד שקדים או קוקוס. וריאציה נפוצה שניתן לראות בה סוג שונה של עוגייה היא המָקָרוֹן הצרפתי \n.המבוססת על שתי שכבות דקות של בצק מקרון צבעוני שביניהן שכבת קרם (macaron) ", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_4.name = "macaroon_text_4";
	this.macaroon_text_4.textAlign = "right";
	this.macaroon_text_4.lineHeight = 24;
	this.macaroon_text_4.lineWidth = 734;
	this.macaroon_text_4.parent = this;
	this.macaroon_text_4.setTransform(382.2,-212.4);

	this.macaroon_text_5 = new cjs.Text("מיקסר,   תנור,   משקל,   צנתר,   שקית זילוף,   מטרפה,   מרית,   מסננת,   כלי מידה", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_5.name = "macaroon_text_5";
	this.macaroon_text_5.textAlign = "right";
	this.macaroon_text_5.lineHeight = 24;
	this.macaroon_text_5.lineWidth = 757;
	this.macaroon_text_5.parent = this;
	this.macaroon_text_5.setTransform(383.5,256.6);

	this.notebook_food = new lib.notebook_food();
	this.notebook_food.parent = this;
	this.notebook_food.setTransform(-38.9,-7.8);

	this.fade_screen = new lib.fade_screen();
	this.fade_screen.parent = this;
	this.fade_screen.setTransform(0.5,-0.3,1,0.997,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fade_screen},{t:this.notebook_food},{t:this.macaroon_text_5},{t:this.macaroon_text_4},{t:this.macaroon_title},{t:this.macaroon_text_3},{t:this.macaroon_text_2},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.macaroon_text_1},{t:this.macaroon_text},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-539.4,-348.5,1039.9,698);


(lib.LEHEM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lehem202();
	this.instance.parent = this;
	this.instance.setTransform(-450.3,-34.5,0.561,0.561,-6.5);

	this.instance_1 = new lib.mida2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(23,215,0.234,0.234);

	this.instance_2 = new lib.medium_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(210,25,0.748,0.748,0,0,0,0,12);

	this.instance_3 = new lib.pro_1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(94.7,15.8,0.715,0.715,0,0,0,0.1,21.9);

	this.instance_4 = new lib.beginner_1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(338.5,26.2,0.731,0.731,0,0,0,0.4,12.1);
	this.instance_4.alpha = 0.199;

	this.instance_5 = new lib.maaroh();
	this.instance_5.parent = this;
	this.instance_5.setTransform(129.2,198.5,0.164,0.164,30);

	this.instance_6 = new lib.marit();
	this.instance_6.parent = this;
	this.instance_6.setTransform(169.2,248.2,0.211,0.211,-150);

	this.instance_7 = new lib.mishkal();
	this.instance_7.parent = this;
	this.instance_7.setTransform(209,205,0.35,0.35);

	this.instance_8 = new lib.tanur_1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(289.8,223.1,0.215,0.215);

	this.instance_9 = new lib.mixer("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(359.1,219.9,0.134,0.134);

	this.macaroon_text = new cjs.Text(":וצריך את הכלים", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text.name = "macaroon_text";
	this.macaroon_text.textAlign = "right";
	this.macaroon_text.lineHeight = 24;
	this.macaroon_text.lineWidth = 265;
	this.macaroon_text.parent = this;
	this.macaroon_text.setTransform(378.1,168.4);

	this.macaroon_text_1 = new cjs.Text("לישה", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_1.name = "macaroon_text_1";
	this.macaroon_text_1.textAlign = "right";
	this.macaroon_text_1.lineHeight = 24;
	this.macaroon_text_1.lineWidth = 444;
	this.macaroon_text_1.parent = this;
	this.macaroon_text_1.setTransform(379.3,120.8);

	this.macaroon_text_2 = new cjs.Text(":להכנת מאפה זה, צריך לדעת את הטכניקות", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text_2.name = "macaroon_text_2";
	this.macaroon_text_2.textAlign = "right";
	this.macaroon_text_2.lineHeight = 24;
	this.macaroon_text_2.lineWidth = 444;
	this.macaroon_text_2.parent = this;
	this.macaroon_text_2.setTransform(379.3,83.5);

	this.macaroon_text_3 = new cjs.Text(":מאפה זה מתאים לאופה ברמה", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text_3.name = "macaroon_text_3";
	this.macaroon_text_3.textAlign = "right";
	this.macaroon_text_3.lineHeight = 24;
	this.macaroon_text_3.lineWidth = 287;
	this.macaroon_text_3.parent = this;
	this.macaroon_text_3.setTransform(379.3,-57.6);

	this.macaroon_title = new cjs.Text("לחם", "bold 37px 'Gisha'", "#B71A1A");
	this.macaroon_title.name = "macaroon_title";
	this.macaroon_title.textAlign = "right";
	this.macaroon_title.lineHeight = 45;
	this.macaroon_title.lineWidth = 281;
	this.macaroon_title.parent = this;
	this.macaroon_title.setTransform(379.3,-262.9);

	this.macaroon_text_4 = new cjs.Text("מאפה רך המתקבל מאפייה, בישול או טיגון של בצק שהותפח, ברוב המקרים, על ידי שמרים. מרכיביו .העיקריים של הלחם הם קמח (חיטה, שעורה, שיפון, כוסמין, תירס ועוד), מים, שמרים ומלח\n.לבצק הלחם ניתן להוסיף מרכיבים רבים כמו דגנים שונים, אגוזים, פרות מיובשים, בצל, זיתים ועוד .ניתן לעצב את הבצק לכיכר גדול בצורה עגולה או מאורכת, או לחלק את הבצק ללחמניות רבות", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_4.name = "macaroon_text_4";
	this.macaroon_text_4.textAlign = "right";
	this.macaroon_text_4.lineHeight = 24;
	this.macaroon_text_4.lineWidth = 746;
	this.macaroon_text_4.parent = this;
	this.macaroon_text_4.setTransform(378,-213.8);

	this.macaroon_text_5 = new cjs.Text("מיקסר,   תנור,   משקל,   מרית,   מערוך,   כלי מידה", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_5.name = "macaroon_text_5";
	this.macaroon_text_5.textAlign = "right";
	this.macaroon_text_5.lineHeight = 24;
	this.macaroon_text_5.lineWidth = 757;
	this.macaroon_text_5.parent = this;
	this.macaroon_text_5.setTransform(378,255.7);

	this.notebook_food = new lib.notebook_food();
	this.notebook_food.parent = this;
	this.notebook_food.setTransform(-43.1,-6.8);

	this.fade_screen = new lib.fade_screen();
	this.fade_screen.parent = this;
	this.fade_screen.setTransform(0.5,-0.3,1,0.997,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fade_screen},{t:this.notebook_food},{t:this.macaroon_text_5},{t:this.macaroon_text_4},{t:this.macaroon_title},{t:this.macaroon_text_3},{t:this.macaroon_text_2},{t:this.macaroon_text_1},{t:this.macaroon_text},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-543.6,-348.5,1044.1,698);


(lib.KOSOT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.medium_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(210,25,0.748,0.748,0,0,0,0,12);
	this.instance.alpha = 0.199;

	this.instance_1 = new lib.pro_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(94.7,15.8,0.715,0.715,0,0,0,0.1,21.9);

	this.instance_2 = new lib.beginner_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(338.5,26.2,0.731,0.731,0,0,0,0.4,12.1);
	this.instance_2.alpha = 0.199;

	this.instance_3 = new lib.mesanenet();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-334,209,0.322,0.322);

	this.instance_4 = new lib.gas();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-408,230,0.411,0.411);

	this.instance_5 = new lib.meabed();
	this.instance_5.parent = this;
	this.instance_5.setTransform(262,194,0.022,0.022);

	this.instance_6 = new lib.mida2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-116,215,0.234,0.234);

	this.instance_7 = new lib.kosot01();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-444,-122,1.571,1.571);

	this.instance_8 = new lib.matrefa();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-142.2,198,0.322,0.322,45);

	this.instance_9 = new lib.marit();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-240,247.9,0.211,0.211,-135);

	this.instance_10 = new lib.sakit();
	this.instance_10.parent = this;
	this.instance_10.setTransform(7.3,223.1,0.241,0.241,30);
	new cjs.ButtonHelper(this.instance_10, 0, 1, 1);

	this.instance_11 = new lib.zantar();
	this.instance_11.parent = this;
	this.instance_11.setTransform(58,208,0.19,0.19);

	this.instance_12 = new lib.mishkal();
	this.instance_12.parent = this;
	this.instance_12.setTransform(120,205,0.35,0.35);

	this.instance_13 = new lib.tanur_1("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(200.6,222.6,0.215,0.215);

	this.instance_14 = new lib.mixer("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(360.8,219.9,0.134,0.134);

	this.macaroon_text = new cjs.Text(":וצריך את הכלים", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text.name = "macaroon_text";
	this.macaroon_text.textAlign = "right";
	this.macaroon_text.lineHeight = 24;
	this.macaroon_text.lineWidth = 265;
	this.macaroon_text.parent = this;
	this.macaroon_text.setTransform(378.1,168.4);

	this.macaroon_text_1 = new cjs.Text("קיפול, הקצפה, אפייה עיוורת, טמפרור, זילוף, הפרדת ביצים, קרמול, בן מארי", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_1.name = "macaroon_text_1";
	this.macaroon_text_1.textAlign = "right";
	this.macaroon_text_1.lineHeight = 24;
	this.macaroon_text_1.lineWidth = 772;
	this.macaroon_text_1.parent = this;
	this.macaroon_text_1.setTransform(379.3,120.8);

	this.macaroon_text_2 = new cjs.Text(":להכנת מאפה זה, צריך לדעת את הטכניקות", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text_2.name = "macaroon_text_2";
	this.macaroon_text_2.textAlign = "right";
	this.macaroon_text_2.lineHeight = 24;
	this.macaroon_text_2.lineWidth = 444;
	this.macaroon_text_2.parent = this;
	this.macaroon_text_2.setTransform(379.3,83.5);

	this.macaroon_text_3 = new cjs.Text(":מאפה זה מתאים לאופה ברמה", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text_3.name = "macaroon_text_3";
	this.macaroon_text_3.textAlign = "right";
	this.macaroon_text_3.lineHeight = 24;
	this.macaroon_text_3.lineWidth = 287;
	this.macaroon_text_3.parent = this;
	this.macaroon_text_3.setTransform(379.3,-57.6);

	this.macaroon_title = new cjs.Text("קינוחי כוסות", "bold 37px 'Gisha'", "#B71A1A");
	this.macaroon_title.name = "macaroon_title";
	this.macaroon_title.textAlign = "right";
	this.macaroon_title.lineHeight = 45;
	this.macaroon_title.lineWidth = 279;
	this.macaroon_title.parent = this;
	this.macaroon_title.setTransform(379.3,-262.9);

	this.macaroon_text_4 = new cjs.Text(".סגנון הגשה הנפוץ בשנים האחרונות. בסגנון זה מגישים את הקינוחים בכוסות אישיות\n,סוגי הקינוחים המוגשים בכוסות יכול להשתנות - החל מעוגות גבינה בכוס אישית, דרך טרמיסו .פבלובה, עוגות גלידה ואפילו סוגי מוסים שונים\nעיקר היופי, והרבה מהעבודה המעורבת בקינוח זה, נובע מאופן ההגשה בכוס או בכלי קטן אחר .כלשהו: כך כל אורח מקבל מנה אישית משלו", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_4.name = "macaroon_text_4";
	this.macaroon_text_4.textAlign = "right";
	this.macaroon_text_4.lineHeight = 24;
	this.macaroon_text_4.lineWidth = 726;
	this.macaroon_text_4.parent = this;
	this.macaroon_text_4.setTransform(378,-213.8);

	this.macaroon_text_5 = new cjs.Text("מיקסר,   מעבד מזון,   תנור,   משקל,   צנתר,   שקית זילוף,   כלי מידה,   מטרפה,   מרית,   מסננת,   כיריים", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_5.name = "macaroon_text_5";
	this.macaroon_text_5.textAlign = "right";
	this.macaroon_text_5.lineHeight = 24;
	this.macaroon_text_5.lineWidth = 796;
	this.macaroon_text_5.parent = this;
	this.macaroon_text_5.setTransform(379.3,257.7);

	this.notebook_food = new lib.notebook_food();
	this.notebook_food.parent = this;
	this.notebook_food.setTransform(-43.1,-6.8);

	this.fade_screen = new lib.fade_screen();
	this.fade_screen.parent = this;
	this.fade_screen.setTransform(0.5,-0.3,1,0.997,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fade_screen},{t:this.notebook_food},{t:this.macaroon_text_5},{t:this.macaroon_text_4},{t:this.macaroon_title},{t:this.macaroon_text_3},{t:this.macaroon_text_2},{t:this.macaroon_text_1},{t:this.macaroon_text},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-543.6,-348.5,1044.1,698);


(lib.GVINA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.medium_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(210,25,0.748,0.748,0,0,0,0,12);

	this.instance_1 = new lib.pro_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(94.7,15.8,0.715,0.715,0,0,0,0.1,21.9);

	this.instance_2 = new lib.beginner_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(338.5,26.2,0.731,0.731,0,0,0,0.4,12.1);

	this.instance_3 = new lib.maaroh();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-33.8,196.2,0.164,0.164,30);

	this.instance_4 = new lib.mesanenet();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-149,209,0.322,0.322);

	this.instance_5 = new lib.meabed();
	this.instance_5.parent = this;
	this.instance_5.setTransform(258,194,0.022,0.022);

	this.instance_6 = new lib.gvina();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-374,-84,0.157,0.157);

	this.instance_7 = new lib.matrefa();
	this.instance_7.parent = this;
	this.instance_7.setTransform(85.1,195.5,0.322,0.322,30);

	this.instance_8 = new lib.marit();
	this.instance_8.parent = this;
	this.instance_8.setTransform(7.3,250,0.211,0.211,-150);

	this.instance_9 = new lib.mishkal();
	this.instance_9.parent = this;
	this.instance_9.setTransform(117,205,0.35,0.35);

	this.instance_10 = new lib.tanur_1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(203.1,223.3,0.215,0.215);

	this.instance_11 = new lib.mixer("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(360.8,219.9,0.134,0.134);

	this.macaroon_text = new cjs.Text(":וצריך את הכלים", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text.name = "macaroon_text";
	this.macaroon_text.textAlign = "right";
	this.macaroon_text.lineHeight = 24;
	this.macaroon_text.lineWidth = 265;
	this.macaroon_text.parent = this;
	this.macaroon_text.setTransform(378.1,168.4);

	this.macaroon_text_1 = new cjs.Text("קיפול, הקצפה, הפרדת ביצים, בן מארי", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_1.name = "macaroon_text_1";
	this.macaroon_text_1.textAlign = "right";
	this.macaroon_text_1.lineHeight = 24;
	this.macaroon_text_1.lineWidth = 444;
	this.macaroon_text_1.parent = this;
	this.macaroon_text_1.setTransform(379.3,120.8);

	this.macaroon_text_2 = new cjs.Text(":להכנת מאפה זה, צריך לדעת את הטכניקות", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text_2.name = "macaroon_text_2";
	this.macaroon_text_2.textAlign = "right";
	this.macaroon_text_2.lineHeight = 24;
	this.macaroon_text_2.lineWidth = 444;
	this.macaroon_text_2.parent = this;
	this.macaroon_text_2.setTransform(379.3,83.5);

	this.macaroon_text_3 = new cjs.Text(":מאפה זה מתאים לאופה ברמה", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text_3.name = "macaroon_text_3";
	this.macaroon_text_3.textAlign = "right";
	this.macaroon_text_3.lineHeight = 24;
	this.macaroon_text_3.lineWidth = 287;
	this.macaroon_text_3.parent = this;
	this.macaroon_text_3.setTransform(379.3,-57.6);

	this.macaroon_title = new cjs.Text("עוגות גבינה", "bold 37px 'Gisha'", "#B71A1A");
	this.macaroon_title.name = "macaroon_title";
	this.macaroon_title.textAlign = "right";
	this.macaroon_title.lineHeight = 45;
	this.macaroon_title.lineWidth = 281;
	this.macaroon_title.parent = this;
	this.macaroon_title.setTransform(379.3,-262.9);

	this.macaroon_text_4 = new cjs.Text("עוגת גבינה היא עוגה מתוקה על בסיס גבינה. עוגת גבינה נחשבת לאחד מהקינוחים הנפוצים ביותר בעולם וככל הנראה לאחד מהוותיקים ביותר המכילים מוצר חלב שאינו חלב. ברחבי העולם סוגים רבים של עוגות גבינה שונות, לעיתים בתוספת טעמים כמו שוקולד או פירות, וחלקן אפילו ללא אפייה (\"עוגת גבינה קרה\"). עוגות גבינה פופולריות מאוד בישראל, ובמיוחד בתקופת חג .השבועות", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_4.name = "macaroon_text_4";
	this.macaroon_text_4.textAlign = "right";
	this.macaroon_text_4.lineHeight = 24;
	this.macaroon_text_4.lineWidth = 726;
	this.macaroon_text_4.parent = this;
	this.macaroon_text_4.setTransform(378,-213.8);

	this.macaroon_text_5 = new cjs.Text("מיקסר,   מעבד מזון,   תנור,   משקל,   מטרפה,   מרית,   מערוך,   מסננת", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_5.name = "macaroon_text_5";
	this.macaroon_text_5.textAlign = "right";
	this.macaroon_text_5.lineHeight = 24;
	this.macaroon_text_5.lineWidth = 757;
	this.macaroon_text_5.parent = this;
	this.macaroon_text_5.setTransform(378,255.7);

	this.notebook_food = new lib.notebook_food();
	this.notebook_food.parent = this;
	this.notebook_food.setTransform(-43.1,-6.8);

	this.fade_screen = new lib.fade_screen();
	this.fade_screen.parent = this;
	this.fade_screen.setTransform(0.5,-0.3,1,0.997,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fade_screen},{t:this.notebook_food},{t:this.macaroon_text_5},{t:this.macaroon_text_4},{t:this.macaroon_title},{t:this.macaroon_text_3},{t:this.macaroon_text_2},{t:this.macaroon_text_1},{t:this.macaroon_text},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-543.6,-348.5,1044.1,698);


(lib.CUPCAKE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.medium_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(210,25,0.748,0.748,0,0,0,0,12);

	this.instance_1 = new lib.pro_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(94.7,15.8,0.715,0.715,0,0,0,0.1,21.9);

	this.instance_2 = new lib.beginner_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(338.5,26.2,0.731,0.731,0,0,0,0.4,12.1);

	this.instance_3 = new lib.cupcake();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-370,-103,0.24,0.24);

	this.instance_4 = new lib.matrefa();
	this.instance_4.parent = this;
	this.instance_4.setTransform(36.7,197.5,0.322,0.322,45);

	this.instance_5 = new lib.marit();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-62.1,247.5,0.211,0.211,-135);

	this.instance_6 = new lib.sakit();
	this.instance_6.parent = this;
	this.instance_6.setTransform(104,223.1,0.241,0.241,30);
	new cjs.ButtonHelper(this.instance_6, 0, 1, 1);

	this.instance_7 = new lib.zantar();
	this.instance_7.parent = this;
	this.instance_7.setTransform(158,208,0.19,0.19);

	this.instance_8 = new lib.mishkal();
	this.instance_8.parent = this;
	this.instance_8.setTransform(217,205,0.35,0.35);

	this.instance_9 = new lib.tanur_1("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(298.5,222.6,0.215,0.215);

	this.instance_10 = new lib.mixer("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(360.8,219.9,0.134,0.134);

	this.macaroon_text = new cjs.Text(":וצריך את הכלים", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text.name = "macaroon_text";
	this.macaroon_text.textAlign = "right";
	this.macaroon_text.lineHeight = 24;
	this.macaroon_text.lineWidth = 265;
	this.macaroon_text.parent = this;
	this.macaroon_text.setTransform(378.1,168.4);

	this.macaroon_text_1 = new cjs.Text("זילוף, הפרדת ביצים, בן מארי", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_1.name = "macaroon_text_1";
	this.macaroon_text_1.textAlign = "right";
	this.macaroon_text_1.lineHeight = 24;
	this.macaroon_text_1.lineWidth = 444;
	this.macaroon_text_1.parent = this;
	this.macaroon_text_1.setTransform(379.3,120.8);

	this.macaroon_text_2 = new cjs.Text(":להכנת מאפה זה, צריך לדעת את הטכניקות", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text_2.name = "macaroon_text_2";
	this.macaroon_text_2.textAlign = "right";
	this.macaroon_text_2.lineHeight = 24;
	this.macaroon_text_2.lineWidth = 444;
	this.macaroon_text_2.parent = this;
	this.macaroon_text_2.setTransform(379.3,83.5);

	this.macaroon_text_3 = new cjs.Text(":מאפה זה מתאים לאופה ברמה", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text_3.name = "macaroon_text_3";
	this.macaroon_text_3.textAlign = "right";
	this.macaroon_text_3.lineHeight = 24;
	this.macaroon_text_3.lineWidth = 287;
	this.macaroon_text_3.parent = this;
	this.macaroon_text_3.setTransform(379.3,-57.6);

	this.macaroon_title = new cjs.Text("קאפקייקס", "bold 37px 'Gisha'", "#B71A1A");
	this.macaroon_title.name = "macaroon_title";
	this.macaroon_title.textAlign = "right";
	this.macaroon_title.lineHeight = 45;
	this.macaroon_title.lineWidth = 220;
	this.macaroon_title.parent = this;
	this.macaroon_title.setTransform(379.3,-262.9);

	this.macaroon_text_4 = new cjs.Text("קאפקייק (לפי האקדמיה ללשון העברית: עוּגוֹנִית) היא וריאציה של המאפין המתאפיינת בבלילה של עוגה בחושה ללא תוספות, לעומת המאפין הרגיל שעשוי מבצק הקרוב יותר ללחם ומכיל תוספות. כמו כן, הקאפקייק לרוב מזוגג ומקושט, מוגש בגביע נייר יפה, ולרוב קטן יותר בגודלו .ממאפין", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_4.name = "macaroon_text_4";
	this.macaroon_text_4.textAlign = "right";
	this.macaroon_text_4.lineHeight = 24;
	this.macaroon_text_4.lineWidth = 726;
	this.macaroon_text_4.parent = this;
	this.macaroon_text_4.setTransform(378,-213.8);

	this.macaroon_text_5 = new cjs.Text("מיקסר,   תנור,   משקל,   צנתר,   שקית זילוף,   מטרפה,   מרית", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_5.name = "macaroon_text_5";
	this.macaroon_text_5.textAlign = "right";
	this.macaroon_text_5.lineHeight = 24;
	this.macaroon_text_5.lineWidth = 757;
	this.macaroon_text_5.parent = this;
	this.macaroon_text_5.setTransform(379.3,257.7);

	this.notebook_food = new lib.notebook_food();
	this.notebook_food.parent = this;
	this.notebook_food.setTransform(-43.1,-6.8);

	this.fade_screen = new lib.fade_screen();
	this.fade_screen.parent = this;
	this.fade_screen.setTransform(0.5,-0.3,1,0.997,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fade_screen},{t:this.notebook_food},{t:this.macaroon_text_5},{t:this.macaroon_text_4},{t:this.macaroon_title},{t:this.macaroon_text_3},{t:this.macaroon_text_2},{t:this.macaroon_text_1},{t:this.macaroon_text},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-543.6,-348.5,1044.1,698);


(lib.CROISSANT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.medium_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(210,25,0.748,0.748,0,0,0,0,12);
	this.instance.alpha = 0.199;

	this.instance_1 = new lib.pro_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(94.7,15.8,0.715,0.715,0,0,0,0.1,21.9);

	this.instance_2 = new lib.beginner_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(338.5,26.2,0.731,0.731,0,0,0,0.4,12.1);
	this.instance_2.alpha = 0.199;

	this.instance_3 = new lib.croissant2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-380,-49,0.624,0.624);

	this.instance_4 = new lib.meabed();
	this.instance_4.parent = this;
	this.instance_4.setTransform(261,196,0.022,0.022);

	this.instance_5 = new lib.maaroh();
	this.instance_5.parent = this;
	this.instance_5.setTransform(90.4,198.8,0.164,0.164,30);

	this.macaroon_text = new cjs.Text(":וצריך את הכלים", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text.name = "macaroon_text";
	this.macaroon_text.textAlign = "right";
	this.macaroon_text.lineHeight = 24;
	this.macaroon_text.lineWidth = 265;
	this.macaroon_text.parent = this;
	this.macaroon_text.setTransform(378.1,168.4);

	this.macaroon_text_1 = new cjs.Text("רידוד, לישה", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_1.name = "macaroon_text_1";
	this.macaroon_text_1.textAlign = "right";
	this.macaroon_text_1.lineHeight = 24;
	this.macaroon_text_1.lineWidth = 444;
	this.macaroon_text_1.parent = this;
	this.macaroon_text_1.setTransform(379.3,120.8);

	this.instance_6 = new lib.mesanenet();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-108,209,0.322,0.322);

	this.instance_7 = new lib.mida2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-20,216,0.234,0.234);

	this.instance_8 = new lib.mishkal();
	this.instance_8.parent = this;
	this.instance_8.setTransform(114,206,0.35,0.35);

	this.instance_9 = new lib.tanur_1("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(199,223.4,0.215,0.215);

	this.instance_10 = new lib.mixer("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(356.6,220.9,0.134,0.134);

	this.macaroon_text_2 = new cjs.Text(":להכנת מאפה זה, צריך לדעת את הטכניקות", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text_2.name = "macaroon_text_2";
	this.macaroon_text_2.textAlign = "right";
	this.macaroon_text_2.lineHeight = 24;
	this.macaroon_text_2.lineWidth = 444;
	this.macaroon_text_2.parent = this;
	this.macaroon_text_2.setTransform(379.3,83.5);

	this.macaroon_text_3 = new cjs.Text(":מאפה זה מתאים לאופה ברמה", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text_3.name = "macaroon_text_3";
	this.macaroon_text_3.textAlign = "right";
	this.macaroon_text_3.lineHeight = 24;
	this.macaroon_text_3.lineWidth = 287;
	this.macaroon_text_3.parent = this;
	this.macaroon_text_3.setTransform(379.3,-57.6);

	this.macaroon_title = new cjs.Text("קרואסונים", "bold 37px 'Gisha'", "#B71A1A");
	this.macaroon_title.name = "macaroon_title";
	this.macaroon_title.textAlign = "right";
	this.macaroon_title.lineHeight = 45;
	this.macaroon_title.lineWidth = 220;
	this.macaroon_title.parent = this;
	this.macaroon_title.setTransform(379.3,-262.9);

	this.macaroon_text_4 = new cjs.Text("הקרואסון עשוי מגרסה של בצק שמרים יסודי, שאותו מכינים באותה הטכניקה כמו בצק עלים. לאחר הכנת בצק השמרים מוכנסת לתוך הבצק חמאה ממקור חיצוני. החמאה מרודדת לתוך הבצק מספר פעמים, מה שתורם למראה והמרקם המעולעל של הקרואסון. בתהליך היצור מקפידים מאוד על .טמפרטורת עבודה נמוכה בחדר היצור, ועל דיוק במהלך \"הקיפולים\". הבצק מקופל שלוש פעמים לאחר מנוחה בקירור, הבצק מרודד ואז נחתך למשולשים מוארכים המגולגלים סביב עצמם, כשהגלגול .האחרון מלווה במתיחת הבצק", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_4.name = "macaroon_text_4";
	this.macaroon_text_4.textAlign = "right";
	this.macaroon_text_4.lineHeight = 24;
	this.macaroon_text_4.lineWidth = 756;
	this.macaroon_text_4.parent = this;
	this.macaroon_text_4.setTransform(378,-213.8);

	this.macaroon_text_5 = new cjs.Text("מיקסר,   מעבד מזון,   תנור,   משקל,   מערוך,   כלי מידה,   מסננת", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_5.name = "macaroon_text_5";
	this.macaroon_text_5.textAlign = "right";
	this.macaroon_text_5.lineHeight = 24;
	this.macaroon_text_5.lineWidth = 757;
	this.macaroon_text_5.parent = this;
	this.macaroon_text_5.setTransform(379.3,257.7);

	this.notebook_food = new lib.notebook_food();
	this.notebook_food.parent = this;
	this.notebook_food.setTransform(-43.1,-6.8);

	this.fade_screen = new lib.fade_screen();
	this.fade_screen.parent = this;
	this.fade_screen.setTransform(0.5,-0.3,1,0.997,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fade_screen},{t:this.notebook_food},{t:this.macaroon_text_5},{t:this.macaroon_text_4},{t:this.macaroon_title},{t:this.macaroon_text_3},{t:this.macaroon_text_2},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.macaroon_text_1},{t:this.macaroon_text},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-543.6,-348.5,1044.1,698);


(lib.BHUSHA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bhushot3();
	this.instance.parent = this;
	this.instance.setTransform(-392,-62,0.605,0.605);

	this.instance_1 = new lib.medium_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(210,25,0.748,0.748,0,0,0,0,12);

	this.instance_2 = new lib.pro_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(94.7,15.8,0.715,0.715,0,0,0,0.1,21.9);

	this.instance_3 = new lib.beginner_1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(338.5,26.2,0.731,0.731,0,0,0,0.4,12.1);

	this.instance_4 = new lib.maaroh();
	this.instance_4.parent = this;
	this.instance_4.setTransform(61.3,195.2,0.164,0.164,30);

	this.instance_5 = new lib.mesanenet();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-54,208,0.322,0.322);

	this.instance_6 = new lib.matrefa();
	this.instance_6.parent = this;
	this.instance_6.setTransform(180.2,194.4,0.322,0.322,30);

	this.instance_7 = new lib.marit();
	this.instance_7.parent = this;
	this.instance_7.setTransform(102.5,248.9,0.211,0.211,-150);

	this.instance_8 = new lib.mishkal();
	this.instance_8.parent = this;
	this.instance_8.setTransform(212,204,0.35,0.35);

	this.instance_9 = new lib.tanur_1("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(298.2,222.2,0.215,0.215);

	this.instance_10 = new lib.mixer("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(360.8,219.9,0.134,0.134);

	this.macaroon_text = new cjs.Text(":וצריך את הכלים", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text.name = "macaroon_text";
	this.macaroon_text.textAlign = "right";
	this.macaroon_text.lineHeight = 24;
	this.macaroon_text.lineWidth = 265;
	this.macaroon_text.parent = this;
	this.macaroon_text.setTransform(378.1,168.4);

	this.macaroon_text_1 = new cjs.Text("קיפול, הקצפה, הפרדת ביצים", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_1.name = "macaroon_text_1";
	this.macaroon_text_1.textAlign = "right";
	this.macaroon_text_1.lineHeight = 24;
	this.macaroon_text_1.lineWidth = 444;
	this.macaroon_text_1.parent = this;
	this.macaroon_text_1.setTransform(379.3,120.8);

	this.macaroon_text_2 = new cjs.Text(":להכנת מאפה זה, צריך לדעת את הטכניקות", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text_2.name = "macaroon_text_2";
	this.macaroon_text_2.textAlign = "right";
	this.macaroon_text_2.lineHeight = 24;
	this.macaroon_text_2.lineWidth = 444;
	this.macaroon_text_2.parent = this;
	this.macaroon_text_2.setTransform(379.3,83.5);

	this.macaroon_text_3 = new cjs.Text(":מאפה זה מתאים לאופה ברמה", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text_3.name = "macaroon_text_3";
	this.macaroon_text_3.textAlign = "right";
	this.macaroon_text_3.lineHeight = 24;
	this.macaroon_text_3.lineWidth = 287;
	this.macaroon_text_3.parent = this;
	this.macaroon_text_3.setTransform(379.3,-57.6);

	this.macaroon_title = new cjs.Text("עוגה בחושה", "bold 37px 'Gisha'", "#B71A1A");
	this.macaroon_title.name = "macaroon_title";
	this.macaroon_title.textAlign = "right";
	this.macaroon_title.lineHeight = 45;
	this.macaroon_title.lineWidth = 281;
	this.macaroon_title.parent = this;
	this.macaroon_title.setTransform(379.3,-262.9);

	this.macaroon_text_4 = new cjs.Text("עוגה העשויה לרוב קמח, סוכר, ביצים וחמאה, ונאפית בתנור בתבנית גדולה. העוגה יכולה להיות כבדה דחוסה ולחה, או אוורירית וקלה בהתאם למינון החומרים. קל מאוד להתאים מתכון של עוגה .בחושה בסיסית לכל טעם: שוקולד, וניל, דבש, וכמעט כל פרי אפשרי\nכמה עוגות בחושות קלאסיות: עוגת אינגלישקייק (המונח מתייחס בעיקר לתבנית המאורכת), עוגת .שיש המתאפיינת בבלילה בשני צבעים", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_4.name = "macaroon_text_4";
	this.macaroon_text_4.textAlign = "right";
	this.macaroon_text_4.lineHeight = 24;
	this.macaroon_text_4.lineWidth = 726;
	this.macaroon_text_4.parent = this;
	this.macaroon_text_4.setTransform(378,-213.8);

	this.macaroon_text_5 = new cjs.Text("מיקסר,   תנור,   משקל,   מטרפה,   מרית,   מערוך,   מסננת", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_5.name = "macaroon_text_5";
	this.macaroon_text_5.textAlign = "right";
	this.macaroon_text_5.lineHeight = 24;
	this.macaroon_text_5.lineWidth = 757;
	this.macaroon_text_5.parent = this;
	this.macaroon_text_5.setTransform(378,255.7);

	this.notebook_food = new lib.notebook_food();
	this.notebook_food.parent = this;
	this.notebook_food.setTransform(-43.1,-6.8);

	this.fade_screen = new lib.fade_screen();
	this.fade_screen.parent = this;
	this.fade_screen.setTransform(0.5,-0.3,1,0.997,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fade_screen},{t:this.notebook_food},{t:this.macaroon_text_5},{t:this.macaroon_text_4},{t:this.macaroon_title},{t:this.macaroon_text_3},{t:this.macaroon_text_2},{t:this.macaroon_text_1},{t:this.macaroon_text},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-543.6,-348.5,1044.1,698);


(lib.ALIM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.medium_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(210,25,0.748,0.748,0,0,0,0,12);
	this.instance.alpha = 0.199;

	this.instance_1 = new lib.pro_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(94.7,15.8,0.715,0.715,0,0,0,0.1,21.9);

	this.instance_2 = new lib.beginner_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(338.5,26.2,0.731,0.731,0,0,0,0.4,12.1);
	this.instance_2.alpha = 0.199;

	this.instance_3 = new lib.meabed();
	this.instance_3.parent = this;
	this.instance_3.setTransform(265,195,0.022,0.022);

	this.instance_4 = new lib.maaroh();
	this.instance_4.parent = this;
	this.instance_4.setTransform(94.6,197.8,0.164,0.164,30);

	this.instance_5 = new lib.alimHQ();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-330,20,0.179,0.179);

	this.instance_6 = new lib.alimHQ();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-329,-60.7,0.179,0.179,30);

	this.macaroon_text = new cjs.Text(":וצריך את הכלים", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text.name = "macaroon_text";
	this.macaroon_text.textAlign = "right";
	this.macaroon_text.lineHeight = 24;
	this.macaroon_text.lineWidth = 265;
	this.macaroon_text.parent = this;
	this.macaroon_text.setTransform(382.3,167.3);

	this.macaroon_text_1 = new cjs.Text("רידוד, לישה, אפייה עיוורת, הפרדת ביצים", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_1.name = "macaroon_text_1";
	this.macaroon_text_1.textAlign = "right";
	this.macaroon_text_1.lineHeight = 24;
	this.macaroon_text_1.lineWidth = 444;
	this.macaroon_text_1.parent = this;
	this.macaroon_text_1.setTransform(383.5,119.7);

	this.instance_7 = new lib.mesanenet();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-18,208,0.322,0.322);

	this.instance_8 = new lib.mida2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-82,215,0.234,0.234);

	this.instance_9 = new lib.mishkal();
	this.instance_9.parent = this;
	this.instance_9.setTransform(118,205,0.35,0.35);

	this.instance_10 = new lib.tanur_1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(203.2,222.4,0.215,0.215);

	this.instance_11 = new lib.mixer("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(360.8,219.9,0.134,0.134);

	this.macaroon_text_2 = new cjs.Text(":להכנת מאפה זה, צריך לדעת את הטכניקות", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text_2.name = "macaroon_text_2";
	this.macaroon_text_2.textAlign = "right";
	this.macaroon_text_2.lineHeight = 24;
	this.macaroon_text_2.lineWidth = 444;
	this.macaroon_text_2.parent = this;
	this.macaroon_text_2.setTransform(383.5,82.5);

	this.macaroon_text_3 = new cjs.Text(":מאפה זה מתאים לאופה ברמה", "bold 19px 'Gisha'", "#B71A1A");
	this.macaroon_text_3.name = "macaroon_text_3";
	this.macaroon_text_3.textAlign = "right";
	this.macaroon_text_3.lineHeight = 24;
	this.macaroon_text_3.lineWidth = 287;
	this.macaroon_text_3.parent = this;
	this.macaroon_text_3.setTransform(383.5,-58.7);

	this.macaroon_title = new cjs.Text("בצק עלים", "bold 37px 'Gisha'", "#B71A1A");
	this.macaroon_title.name = "macaroon_title";
	this.macaroon_title.textAlign = "right";
	this.macaroon_title.lineHeight = 45;
	this.macaroon_title.lineWidth = 220;
	this.macaroon_title.parent = this;
	this.macaroon_title.setTransform(383.5,-264);

	this.macaroon_text_4 = new cjs.Text("בצק המשמש למאפים שונים, ובפרט מאפים ממולאים. הכנת בצק עלים כוללת מריחה של שכבת שומן (חמאה או מרגרינה) על שכבת בצק דקה, קיפול הבצק ושוב רידודו, וכך מספר פעמים עד שהבצק עשוי .ממספר רב של שכבות (או: עלים) שביניהן מפריד שומן\n.בדרך כלל מוצרי בצק העלים מקוררים היטב לפני אפייתם. אפיית בצק העלים נעשית בחום גבוה בחלק ממוצרי בצק העלים מומלץ לפתוח את מצערת התנור, או לפתוח בדלת התנור הביתי חריץ .בעזרת כף עץ; בחלק האחרון של האפייה פעולה זו מסייעת בפתיחת שכבותיו הרבות של הבצק וייבושו", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_4.name = "macaroon_text_4";
	this.macaroon_text_4.textAlign = "right";
	this.macaroon_text_4.lineHeight = 24;
	this.macaroon_text_4.lineWidth = 756;
	this.macaroon_text_4.parent = this;
	this.macaroon_text_4.setTransform(382.2,-214.9);

	this.macaroon_text_5 = new cjs.Text("מיקסר,   מעבד מזון,   תנור,   משקל,   מערוך,   מסננת,   כלי מידה", "19px 'Gisha'", "#B71A1A");
	this.macaroon_text_5.name = "macaroon_text_5";
	this.macaroon_text_5.textAlign = "right";
	this.macaroon_text_5.lineHeight = 24;
	this.macaroon_text_5.lineWidth = 757;
	this.macaroon_text_5.parent = this;
	this.macaroon_text_5.setTransform(383.5,256.6);

	this.notebook_food = new lib.notebook_food();
	this.notebook_food.parent = this;
	this.notebook_food.setTransform(-38.9,-7.8);

	this.fade_screen = new lib.fade_screen();
	this.fade_screen.parent = this;
	this.fade_screen.setTransform(4.7,-1.3,1,0.997,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fade_screen},{t:this.notebook_food},{t:this.macaroon_text_5},{t:this.macaroon_text_4},{t:this.macaroon_title},{t:this.macaroon_text_3},{t:this.macaroon_text_2},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.macaroon_text_1},{t:this.macaroon_text},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-539.4,-349.5,1044.1,698);


(lib.TANUR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tanur104();
	this.instance.parent = this;
	this.instance.setTransform(-343,-88,0.472,0.472);

	this.instance_1 = new lib.ravuch01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(241.4,230.1,0.185,0.185,-15);

	this.instance_2 = new lib.Macaroon();
	this.instance_2.parent = this;
	this.instance_2.setTransform(26,233,0.278,0.278);

	this.instance_3 = new lib.lehem();
	this.instance_3.parent = this;
	this.instance_3.setTransform(135.7,235.6,0.381,0.381,-15);

	this.instance_4 = new lib.croissant();
	this.instance_4.parent = this;
	this.instance_4.setTransform(90,222,0.265,0.265);

	this.instance_5 = new lib.bhushot01();
	this.instance_5.parent = this;
	this.instance_5.setTransform(144,156,0.208,0.208);

	this.instance_6 = new lib.cupcake01();
	this.instance_6.parent = this;
	this.instance_6.setTransform(329,153,0.201,0.201);

	this.instance_7 = new lib.parich();
	this.instance_7.parent = this;
	this.instance_7.setTransform(229,154,0.249,0.249);

	this.instance_8 = new lib.tart2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(53,158,0.215,0.215);

	this.instance_9 = new lib.gvina_1("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(2,172.7,0.263,0.263,0,0,0,0.2,0);
	this.instance_9.filters = [new cjs.ColorFilter(0.75, 0.75, 0.75, 1, 63.75, 38.25, 12.75, 0)];
	this.instance_9.cache(-104,-84,209,169);

	this.instance_10 = new lib.alim("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(345.6,238.1,0.255,0.255,0,0,0,0,-0.2);

	this.macaroon_text = new cjs.Text("קאפקייק,  בצק פריך,  עוגות בחושות,  טארט,  עוגות גבינה", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text.name = "macaroon_text";
	this.macaroon_text.textAlign = "right";
	this.macaroon_text.lineHeight = 24;
	this.macaroon_text.lineWidth = 757;
	this.macaroon_text.parent = this;
	this.macaroon_text.setTransform(383.5,186.6);

	this.instance_11 = new lib.medium_1("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(210,-22.5,0.748,0.748,0,0,0,0,12);

	this.instance_12 = new lib.pro_1("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(94.7,-31.7,0.715,0.715,0,0,0,0.1,21.9);

	this.instance_13 = new lib.beginner_1("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(338.5,-21.3,0.731,0.731,0,0,0,0.4,12.1);

	this.macaroon_text_1 = new cjs.Text(":ובעזרתו אפשר להכין את המאפים", "bold 19px 'Gisha'", "#2B42BE");
	this.macaroon_text_1.name = "macaroon_text_1";
	this.macaroon_text_1.textAlign = "right";
	this.macaroon_text_1.lineHeight = 24;
	this.macaroon_text_1.lineWidth = 371;
	this.macaroon_text_1.parent = this;
	this.macaroon_text_1.setTransform(382.3,123.6);

	this.macaroon_text_2 = new cjs.Text("אפייה עיוורת", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text_2.name = "macaroon_text_2";
	this.macaroon_text_2.textAlign = "right";
	this.macaroon_text_2.lineHeight = 24;
	this.macaroon_text_2.lineWidth = 444;
	this.macaroon_text_2.parent = this;
	this.macaroon_text_2.setTransform(383.5,76);

	this.macaroon_text_3 = new cjs.Text(":כלי זה נחוץ לביצוע הטכניקות", "bold 19px 'Gisha'", "#2B42BE");
	this.macaroon_text_3.name = "macaroon_text_3";
	this.macaroon_text_3.textAlign = "right";
	this.macaroon_text_3.lineHeight = 24;
	this.macaroon_text_3.lineWidth = 444;
	this.macaroon_text_3.parent = this;
	this.macaroon_text_3.setTransform(383.5,38.7);

	this.macaroon_text_4 = new cjs.Text(":כלי זה נחוץ לאופה ברמה", "bold 19px 'Gisha'", "#2B42BE");
	this.macaroon_text_4.name = "macaroon_text_4";
	this.macaroon_text_4.textAlign = "right";
	this.macaroon_text_4.lineHeight = 24;
	this.macaroon_text_4.lineWidth = 287;
	this.macaroon_text_4.parent = this;
	this.macaroon_text_4.setTransform(383.5,-106.2);

	this.macaroon_title = new cjs.Text("תנור", "bold 37px 'Gisha'", "#2B42BE");
	this.macaroon_title.name = "macaroon_title";
	this.macaroon_title.textAlign = "right";
	this.macaroon_title.lineHeight = 45;
	this.macaroon_title.lineWidth = 220;
	this.macaroon_title.parent = this;
	this.macaroon_title.setTransform(383.5,-264);

	this.macaroon_text_5 = new cjs.Text("מכשיר חשמלי ביתי או תעשייתי המשמש לאפיית מזון. תנור אפייה ביתי מגיע בשני סוגים עיקריים: \"בילט אין\" - תנור גומחה הנמצא בתוך הקיר ומשמש לאפייה או לגריל בלבד, ו\"תנור משולב\" העומד על הקרקע .ומשלב יכולת אפייה או גריל וכיריים בחלקו העליון", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text_5.name = "macaroon_text_5";
	this.macaroon_text_5.textAlign = "right";
	this.macaroon_text_5.lineHeight = 24;
	this.macaroon_text_5.lineWidth = 790;
	this.macaroon_text_5.parent = this;
	this.macaroon_text_5.setTransform(382.2,-214.9);

	this.macaroon_text_6 = new cjs.Text("בצק עלים,   בצק רבוך,  לחם,  קרואסונים,  מקרונים", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text_6.name = "macaroon_text_6";
	this.macaroon_text_6.textAlign = "right";
	this.macaroon_text_6.lineHeight = 24;
	this.macaroon_text_6.lineWidth = 757;
	this.macaroon_text_6.parent = this;
	this.macaroon_text_6.setTransform(383.5,261.6);

	this.instance_14 = new lib.notebook_tool();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-38.9,-7.9,1,1,0,0,0,2.1,-2.6);

	this.fade_screen = new lib.fade_screen();
	this.fade_screen.parent = this;
	this.fade_screen.setTransform(4.7,-1.3,1,0.997,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fade_screen},{t:this.instance_14},{t:this.macaroon_text_6},{t:this.macaroon_text_5},{t:this.macaroon_title},{t:this.macaroon_text_4},{t:this.macaroon_text_3},{t:this.macaroon_text_2},{t:this.macaroon_text_1},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.macaroon_text},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-540.8,-349.5,1045.6,698);


(lib.MIXER = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Patissier01();
	this.instance.parent = this;
	this.instance.setTransform(-333,205,0.224,0.224);

	this.instance_1 = new lib.tiramisu01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-161,220,0.209,0.209);

	this.instance_2 = new lib.preline01();
	this.instance_2.parent = this;
	this.instance_2.setTransform(122,226,0.141,0.141);

	this.instance_3 = new lib.ravuch01();
	this.instance_3.parent = this;
	this.instance_3.setTransform(254.8,229.5,0.185,0.185,-15);

	this.instance_4 = new lib.metuganim01();
	this.instance_4.parent = this;
	this.instance_4.setTransform(323,223,0.191,0.191);

	this.instance_5 = new lib.Macaroon();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-220,229,0.278,0.278);

	this.instance_6 = new lib.lehem();
	this.instance_6.parent = this;
	this.instance_6.setTransform(151.1,235,0.381,0.381,-15);

	this.instance_7 = new lib.croissant();
	this.instance_7.parent = this;
	this.instance_7.setTransform(44,221,0.265,0.265);

	this.instance_8 = new lib.kosot01();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-66,219,0.214,0.214);

	this.instance_9 = new lib.bhushot01();
	this.instance_9.parent = this;
	this.instance_9.setTransform(144,156,0.208,0.208);

	this.instance_10 = new lib.cupcake01();
	this.instance_10.parent = this;
	this.instance_10.setTransform(329,153,0.201,0.201);

	this.instance_11 = new lib.parich();
	this.instance_11.parent = this;
	this.instance_11.setTransform(229,154,0.249,0.249);

	this.instance_12 = new lib.tart2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(53,158,0.215,0.215);

	this.instance_13 = new lib.gvina_1("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(2,172.7,0.263,0.263,0,0,0,0.2,0);
	this.instance_13.filters = [new cjs.ColorFilter(0.75, 0.75, 0.75, 1, 63.75, 38.25, 12.75, 0)];
	this.instance_13.cache(-104,-84,209,169);

	this.instance_14 = new lib.alim("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(-90.1,172.6,0.255,0.255,0,0,0,0,-0.2);

	this.macaroon_text = new cjs.Text("קאפקייק,  בצק פריך,  עוגות בחושות,  טארט,  עוגות גבינה,  בצק עלים", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text.name = "macaroon_text";
	this.macaroon_text.textAlign = "right";
	this.macaroon_text.lineHeight = 24;
	this.macaroon_text.lineWidth = 757;
	this.macaroon_text.parent = this;
	this.macaroon_text.setTransform(383.5,186.6);

	this.instance_15 = new lib.medium_1("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(210,-22.5,0.748,0.748,0,0,0,0,12);

	this.instance_16 = new lib.pro_1("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(94.7,-31.7,0.715,0.715,0,0,0,0.1,21.9);

	this.instance_17 = new lib.beginner_1("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(338.5,-21.3,0.731,0.731,0,0,0,0.4,12.1);
	this.instance_17.alpha = 0.199;

	this.macaroon_text_1 = new cjs.Text(":ובעזרתו אפשר להכין את המאפים", "bold 19px 'Gisha'", "#2B42BE");
	this.macaroon_text_1.name = "macaroon_text_1";
	this.macaroon_text_1.textAlign = "right";
	this.macaroon_text_1.lineHeight = 24;
	this.macaroon_text_1.lineWidth = 371;
	this.macaroon_text_1.parent = this;
	this.macaroon_text_1.setTransform(382.3,123.6);

	this.macaroon_text_2 = new cjs.Text("לישה, הקצפה", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text_2.name = "macaroon_text_2";
	this.macaroon_text_2.textAlign = "right";
	this.macaroon_text_2.lineHeight = 24;
	this.macaroon_text_2.lineWidth = 444;
	this.macaroon_text_2.parent = this;
	this.macaroon_text_2.setTransform(383.5,76);

	this.instance_18 = new lib.mixer("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(-266.3,53,0.494,0.494,0,0,180,0.1,0.3);

	this.macaroon_text_3 = new cjs.Text(":כלי זה נחוץ לביצוע הטכניקות", "bold 19px 'Gisha'", "#2B42BE");
	this.macaroon_text_3.name = "macaroon_text_3";
	this.macaroon_text_3.textAlign = "right";
	this.macaroon_text_3.lineHeight = 24;
	this.macaroon_text_3.lineWidth = 444;
	this.macaroon_text_3.parent = this;
	this.macaroon_text_3.setTransform(383.5,38.7);

	this.macaroon_text_4 = new cjs.Text(":כלי זה נחוץ לאופה ברמה", "bold 19px 'Gisha'", "#2B42BE");
	this.macaroon_text_4.name = "macaroon_text_4";
	this.macaroon_text_4.textAlign = "right";
	this.macaroon_text_4.lineHeight = 24;
	this.macaroon_text_4.lineWidth = 287;
	this.macaroon_text_4.parent = this;
	this.macaroon_text_4.setTransform(383.5,-106.2);

	this.macaroon_title = new cjs.Text("מיקסר", "bold 37px 'Gisha'", "#2B42BE");
	this.macaroon_title.name = "macaroon_title";
	this.macaroon_title.textAlign = "right";
	this.macaroon_title.lineHeight = 45;
	this.macaroon_title.lineWidth = 220;
	this.macaroon_title.parent = this;
	this.macaroon_title.setTransform(383.5,-264);

	this.macaroon_text_5 = new cjs.Text(".אביזר חשמלי המשמש להקצפה וערבול דברי מזון. קיימים שני סוגים של מערבלים: נייח וידני\nמיקסר עושה שימוש בסוגים שונים של מטרפים למטרות שונות: מטרף קלאסי בצורת מטרפה להקצפת ביצים או שמנת, וו ערבול (נקרא בסלנג \"וו גיטרה\") לערבוב חומרים כבדים ושומניים יותר, ו-וו לישה .המיועד לבצקים ובעיקר כאלה הדורשים לישה מרובה כמו בצק שמרים או בצק פסטה", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text_5.name = "macaroon_text_5";
	this.macaroon_text_5.textAlign = "right";
	this.macaroon_text_5.lineHeight = 24;
	this.macaroon_text_5.lineWidth = 751;
	this.macaroon_text_5.parent = this;
	this.macaroon_text_5.setTransform(382.2,-214.9);

	this.macaroon_text_6 = new cjs.Text("מטוגנים,  בצק רבוך,  לחם,  פרלינים,  קרואסונים,  קינוחי כוסות,  טירמיסו,  מקרונים,  קרם פיטסייר", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text_6.name = "macaroon_text_6";
	this.macaroon_text_6.textAlign = "right";
	this.macaroon_text_6.lineHeight = 24;
	this.macaroon_text_6.lineWidth = 757;
	this.macaroon_text_6.parent = this;
	this.macaroon_text_6.setTransform(383.5,261.6);

	this.instance_19 = new lib.notebook_tool();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-38.9,-7.9,1,1,0,0,0,2.1,-2.6);

	this.fade_screen = new lib.fade_screen();
	this.fade_screen.parent = this;
	this.fade_screen.setTransform(4.7,-1.3,1,0.997,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fade_screen},{t:this.instance_19},{t:this.macaroon_text_6},{t:this.macaroon_text_5},{t:this.macaroon_title},{t:this.macaroon_text_4},{t:this.macaroon_text_3},{t:this.instance_18},{t:this.macaroon_text_2},{t:this.macaroon_text_1},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.macaroon_text},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-540.8,-349.5,1045.6,698);


(lib.MISHKAL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mishkal105();
	this.instance.parent = this;
	this.instance.setTransform(-391,-162,0.722,0.722);

	this.instance_1 = new lib.Patissier01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-215,141,0.224,0.224);

	this.instance_2 = new lib.tiramisu01();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-161,220,0.209,0.209);

	this.instance_3 = new lib.preline01();
	this.instance_3.parent = this;
	this.instance_3.setTransform(122,226,0.141,0.141);

	this.instance_4 = new lib.ravuch01();
	this.instance_4.parent = this;
	this.instance_4.setTransform(254.8,229.5,0.185,0.185,-15);

	this.instance_5 = new lib.metuganim01();
	this.instance_5.parent = this;
	this.instance_5.setTransform(323,223,0.191,0.191);

	this.instance_6 = new lib.Macaroon();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-220,229,0.278,0.278);

	this.instance_7 = new lib.lehem();
	this.instance_7.parent = this;
	this.instance_7.setTransform(151.1,235,0.381,0.381,-15);

	this.instance_8 = new lib.croissant();
	this.instance_8.parent = this;
	this.instance_8.setTransform(44,221,0.265,0.265);

	this.instance_9 = new lib.kosot01();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-66,219,0.214,0.214);

	this.instance_10 = new lib.bhushot01();
	this.instance_10.parent = this;
	this.instance_10.setTransform(144,156,0.208,0.208);

	this.instance_11 = new lib.cupcake01();
	this.instance_11.parent = this;
	this.instance_11.setTransform(329,153,0.201,0.201);

	this.instance_12 = new lib.parich();
	this.instance_12.parent = this;
	this.instance_12.setTransform(229,154,0.249,0.249);

	this.instance_13 = new lib.tart2();
	this.instance_13.parent = this;
	this.instance_13.setTransform(53,158,0.215,0.215);

	this.instance_14 = new lib.gvina_1("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(2,172.7,0.263,0.263,0,0,0,0.2,0);
	this.instance_14.filters = [new cjs.ColorFilter(0.75, 0.75, 0.75, 1, 63.75, 38.25, 12.75, 0)];
	this.instance_14.cache(-104,-84,209,169);

	this.instance_15 = new lib.alim("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(-90.1,172.6,0.255,0.255,0,0,0,0,-0.2);

	this.macaroon_text = new cjs.Text("קאפקייק,  בצק פריך,  עוגות בחושות,  טארט,  עוגות גבינה,  בצק עלים,   קרם פטיסייר", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text.name = "macaroon_text";
	this.macaroon_text.textAlign = "right";
	this.macaroon_text.lineHeight = 24;
	this.macaroon_text.lineWidth = 757;
	this.macaroon_text.parent = this;
	this.macaroon_text.setTransform(383.5,186.6);

	this.instance_16 = new lib.medium_1("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(210,-22.5,0.748,0.748,0,0,0,0,12);

	this.instance_17 = new lib.pro_1("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(94.7,-31.7,0.715,0.715,0,0,0,0.1,21.9);

	this.instance_18 = new lib.beginner_1("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(338.5,-21.3,0.731,0.731,0,0,0,0.4,12.1);

	this.macaroon_text_1 = new cjs.Text(":ובעזרתו אפשר להכין את המאפים", "bold 19px 'Gisha'", "#2B42BE");
	this.macaroon_text_1.name = "macaroon_text_1";
	this.macaroon_text_1.textAlign = "right";
	this.macaroon_text_1.lineHeight = 24;
	this.macaroon_text_1.lineWidth = 371;
	this.macaroon_text_1.parent = this;
	this.macaroon_text_1.setTransform(382.3,123.6);

	this.macaroon_text_2 = new cjs.Text("המשקל הוא כלי חשוב לכל תהליך אפייה ולא מקושר לטכניקה ספציפית", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text_2.name = "macaroon_text_2";
	this.macaroon_text_2.textAlign = "right";
	this.macaroon_text_2.lineHeight = 24;
	this.macaroon_text_2.lineWidth = 571;
	this.macaroon_text_2.parent = this;
	this.macaroon_text_2.setTransform(383.5,76);

	this.macaroon_text_3 = new cjs.Text(":כלי זה נחוץ לביצוע הטכניקות", "bold 19px 'Gisha'", "#2B42BE");
	this.macaroon_text_3.name = "macaroon_text_3";
	this.macaroon_text_3.textAlign = "right";
	this.macaroon_text_3.lineHeight = 24;
	this.macaroon_text_3.lineWidth = 444;
	this.macaroon_text_3.parent = this;
	this.macaroon_text_3.setTransform(383.5,38.7);

	this.macaroon_text_4 = new cjs.Text(":כלי זה נחוץ לאופה ברמה", "bold 19px 'Gisha'", "#2B42BE");
	this.macaroon_text_4.name = "macaroon_text_4";
	this.macaroon_text_4.textAlign = "right";
	this.macaroon_text_4.lineHeight = 24;
	this.macaroon_text_4.lineWidth = 287;
	this.macaroon_text_4.parent = this;
	this.macaroon_text_4.setTransform(383.5,-106.2);

	this.macaroon_title = new cjs.Text("משקל", "bold 37px 'Gisha'", "#2B42BE");
	this.macaroon_title.name = "macaroon_title";
	this.macaroon_title.textAlign = "right";
	this.macaroon_title.lineHeight = 45;
	this.macaroon_title.lineWidth = 220;
	this.macaroon_title.parent = this;
	this.macaroon_title.setTransform(383.5,-264);

	this.macaroon_text_5 = new cjs.Text("כלי מטבח המשמש לשקילת המוצרים. כלי זה הוא בעל חשיבות גבוהה אצל חובבי בישול ואפייה, שכן .עולם הקונדיטוריה והאפייה הביתית הוא מדע מדויק ויש להקפיד על דיוק בכמויות החומרים\n.למשקל יכול להיות צג דיגיטאלי או מחוג המציג את המשקל על סקאלה", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text_5.name = "macaroon_text_5";
	this.macaroon_text_5.textAlign = "right";
	this.macaroon_text_5.lineHeight = 24;
	this.macaroon_text_5.lineWidth = 758;
	this.macaroon_text_5.parent = this;
	this.macaroon_text_5.setTransform(382.2,-214.9);

	this.macaroon_text_6 = new cjs.Text("מטוגנים,   בצק רבוך,  לחם,  פרלינים,  קרואסונים,  קינוחי כוסות,  טירמיסו,  מקרונים", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text_6.name = "macaroon_text_6";
	this.macaroon_text_6.textAlign = "right";
	this.macaroon_text_6.lineHeight = 24;
	this.macaroon_text_6.lineWidth = 757;
	this.macaroon_text_6.parent = this;
	this.macaroon_text_6.setTransform(383.5,261.6);

	this.instance_19 = new lib.notebook_tool();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-38.9,-7.9,1,1,0,0,0,2.1,-2.6);

	this.fade_screen = new lib.fade_screen();
	this.fade_screen.parent = this;
	this.fade_screen.setTransform(4.7,-1.3,1,0.997,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fade_screen},{t:this.instance_19},{t:this.macaroon_text_6},{t:this.macaroon_text_5},{t:this.macaroon_title},{t:this.macaroon_text_4},{t:this.macaroon_text_3},{t:this.macaroon_text_2},{t:this.macaroon_text_1},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.macaroon_text},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-540.8,-349.5,1045.6,698);


(lib.MIDA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mida2();
	this.instance.parent = this;
	this.instance.setTransform(-347,-114,1.195,1.195);

	this.instance_1 = new lib.Patissier01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-215,141,0.224,0.224);

	this.instance_2 = new lib.tiramisu01();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-161,220,0.209,0.209);

	this.instance_3 = new lib.preline01();
	this.instance_3.parent = this;
	this.instance_3.setTransform(122,226,0.141,0.141);

	this.instance_4 = new lib.ravuch01();
	this.instance_4.parent = this;
	this.instance_4.setTransform(254.8,229.5,0.185,0.185,-15);

	this.instance_5 = new lib.metuganim01();
	this.instance_5.parent = this;
	this.instance_5.setTransform(323,223,0.191,0.191);

	this.instance_6 = new lib.Macaroon();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-220,229,0.278,0.278);

	this.instance_7 = new lib.lehem();
	this.instance_7.parent = this;
	this.instance_7.setTransform(151.1,235,0.381,0.381,-15);

	this.instance_8 = new lib.croissant();
	this.instance_8.parent = this;
	this.instance_8.setTransform(44,221,0.265,0.265);

	this.instance_9 = new lib.kosot01();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-66,219,0.214,0.214);

	this.instance_10 = new lib.bhushot01();
	this.instance_10.parent = this;
	this.instance_10.setTransform(144,156,0.208,0.208);

	this.instance_11 = new lib.cupcake01();
	this.instance_11.parent = this;
	this.instance_11.setTransform(329,153,0.201,0.201);

	this.instance_12 = new lib.parich();
	this.instance_12.parent = this;
	this.instance_12.setTransform(229,154,0.249,0.249);

	this.instance_13 = new lib.tart2();
	this.instance_13.parent = this;
	this.instance_13.setTransform(53,158,0.215,0.215);

	this.instance_14 = new lib.gvina_1("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(2,172.7,0.263,0.263,0,0,0,0.2,0);
	this.instance_14.filters = [new cjs.ColorFilter(0.75, 0.75, 0.75, 1, 63.75, 38.25, 12.75, 0)];
	this.instance_14.cache(-104,-84,209,169);

	this.instance_15 = new lib.alim("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(-90.1,172.6,0.255,0.255,0,0,0,0,-0.2);

	this.macaroon_text = new cjs.Text("קאפקייק,  בצק פריך,  עוגות בחושות,  טארט,  עוגות גבינה,  בצק עלים,   קרם פטיסייר", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text.name = "macaroon_text";
	this.macaroon_text.textAlign = "right";
	this.macaroon_text.lineHeight = 24;
	this.macaroon_text.lineWidth = 757;
	this.macaroon_text.parent = this;
	this.macaroon_text.setTransform(383.5,186.6);

	this.instance_16 = new lib.medium_1("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(210,-22.5,0.748,0.748,0,0,0,0,12);

	this.instance_17 = new lib.pro_1("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(94.7,-31.7,0.715,0.715,0,0,0,0.1,21.9);

	this.instance_18 = new lib.beginner_1("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(338.5,-21.3,0.731,0.731,0,0,0,0.4,12.1);

	this.macaroon_text_1 = new cjs.Text(":ובעזרתו אפשר להכין את המאפים", "bold 19px 'Gisha'", "#2B42BE");
	this.macaroon_text_1.name = "macaroon_text_1";
	this.macaroon_text_1.textAlign = "right";
	this.macaroon_text_1.lineHeight = 24;
	this.macaroon_text_1.lineWidth = 371;
	this.macaroon_text_1.parent = this;
	this.macaroon_text_1.setTransform(382.3,123.6);

	this.macaroon_text_2 = new cjs.Text("כלי מידה הם כלים חשובים לכל תהליך אפייה ולא מקושרים לטכניקה ספציפית", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text_2.name = "macaroon_text_2";
	this.macaroon_text_2.textAlign = "right";
	this.macaroon_text_2.lineHeight = 24;
	this.macaroon_text_2.lineWidth = 620;
	this.macaroon_text_2.parent = this;
	this.macaroon_text_2.setTransform(383.5,76);

	this.macaroon_text_3 = new cjs.Text(":כלי זה נחוץ לביצוע הטכניקות", "bold 19px 'Gisha'", "#2B42BE");
	this.macaroon_text_3.name = "macaroon_text_3";
	this.macaroon_text_3.textAlign = "right";
	this.macaroon_text_3.lineHeight = 24;
	this.macaroon_text_3.lineWidth = 444;
	this.macaroon_text_3.parent = this;
	this.macaroon_text_3.setTransform(383.5,38.7);

	this.macaroon_text_4 = new cjs.Text(":כלי זה נחוץ לאופה ברמה", "bold 19px 'Gisha'", "#2B42BE");
	this.macaroon_text_4.name = "macaroon_text_4";
	this.macaroon_text_4.textAlign = "right";
	this.macaroon_text_4.lineHeight = 24;
	this.macaroon_text_4.lineWidth = 287;
	this.macaroon_text_4.parent = this;
	this.macaroon_text_4.setTransform(383.5,-106.2);

	this.macaroon_title = new cjs.Text("כלי מידה", "bold 37px 'Gisha'", "#2B42BE");
	this.macaroon_title.name = "macaroon_title";
	this.macaroon_title.textAlign = "right";
	this.macaroon_title.lineHeight = 45;
	this.macaroon_title.lineWidth = 220;
	this.macaroon_title.parent = this;
	this.macaroon_title.setTransform(383.5,-264);

	this.macaroon_text_5 = new cjs.Text("כלי המיועד למדידת כמות מוגדרת של חומר גלם, נוזלי או מוצק. על המיכל, אשר רובו שקוף, מופיעות שנתות בהתאם לגודל ולנפח המיכל וליעודו. כלי מידה יכולים להיות כוסות או כפיות ומגיעים בדרך כלל .'בגדלים מוגדרים מראש: ליטר, חצי ליטר, כוס, חצי כוס, רבע כוס, כף, כפית וכו", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text_5.name = "macaroon_text_5";
	this.macaroon_text_5.textAlign = "right";
	this.macaroon_text_5.lineHeight = 24;
	this.macaroon_text_5.lineWidth = 790;
	this.macaroon_text_5.parent = this;
	this.macaroon_text_5.setTransform(382.2,-214.9);

	this.macaroon_text_6 = new cjs.Text("מטוגנים,   בצק רבוך,  לחם,  פרלינים,  קרואסונים,  קינוחי כוסות,  טירמיסו,  מקרונים", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text_6.name = "macaroon_text_6";
	this.macaroon_text_6.textAlign = "right";
	this.macaroon_text_6.lineHeight = 24;
	this.macaroon_text_6.lineWidth = 757;
	this.macaroon_text_6.parent = this;
	this.macaroon_text_6.setTransform(383.5,261.6);

	this.instance_19 = new lib.notebook_tool();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-38.9,-7.9,1,1,0,0,0,2.1,-2.6);

	this.fade_screen = new lib.fade_screen();
	this.fade_screen.parent = this;
	this.fade_screen.setTransform(4.7,-1.3,1,0.997,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fade_screen},{t:this.instance_19},{t:this.macaroon_text_6},{t:this.macaroon_text_5},{t:this.macaroon_title},{t:this.macaroon_text_4},{t:this.macaroon_text_3},{t:this.macaroon_text_2},{t:this.macaroon_text_1},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.macaroon_text},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-540.8,-349.5,1045.6,698);


(lib.MESANENET = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mesanenet205();
	this.instance.parent = this;
	this.instance.setTransform(-374,-103,0.797,0.797);

	this.instance_1 = new lib.Macaroon();
	this.instance_1.parent = this;
	this.instance_1.setTransform(84,233,0.278,0.278);

	this.instance_2 = new lib.lehem();
	this.instance_2.parent = this;
	this.instance_2.setTransform(221.2,235.4,0.381,0.381,-15);

	this.instance_3 = new lib.croissant();
	this.instance_3.parent = this;
	this.instance_3.setTransform(156,222,0.265,0.265);

	this.instance_4 = new lib.bhushot01();
	this.instance_4.parent = this;
	this.instance_4.setTransform(224,160,0.208,0.208);

	this.instance_5 = new lib.parich();
	this.instance_5.parent = this;
	this.instance_5.setTransform(309,158,0.249,0.249);

	this.instance_6 = new lib.tart2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(133,162,0.215,0.215);

	this.instance_7 = new lib.gvina_1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(82,176.5,0.263,0.263,0,0,0,0.2,0);
	this.instance_7.filters = [new cjs.ColorFilter(0.75, 0.75, 0.75, 1, 63.75, 38.25, 12.75, 0)];
	this.instance_7.cache(-104,-84,209,169);

	this.instance_8 = new lib.alim("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(348.5,235,0.255,0.255,0,0,0,0,-0.2);

	this.macaroon_text = new cjs.Text("בצק פריך,  עוגות בחושות,  טארט,  עוגות גבינה", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text.name = "macaroon_text";
	this.macaroon_text.textAlign = "right";
	this.macaroon_text.lineHeight = 24;
	this.macaroon_text.lineWidth = 757;
	this.macaroon_text.parent = this;
	this.macaroon_text.setTransform(383.5,186.6);

	this.instance_9 = new lib.medium_1("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(210,-22.5,0.748,0.748,0,0,0,0,12);

	this.instance_10 = new lib.pro_1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(94.7,-31.7,0.715,0.715,0,0,0,0.1,21.9);

	this.instance_11 = new lib.beginner_1("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(338.5,-21.3,0.731,0.731,0,0,0,0.4,12.1);
	this.instance_11.alpha = 0.199;

	this.macaroon_text_1 = new cjs.Text(":ובעזרתו אפשר להכין את המאפים", "bold 19px 'Gisha'", "#2B42BE");
	this.macaroon_text_1.name = "macaroon_text_1";
	this.macaroon_text_1.textAlign = "right";
	this.macaroon_text_1.lineHeight = 24;
	this.macaroon_text_1.lineWidth = 371;
	this.macaroon_text_1.parent = this;
	this.macaroon_text_1.setTransform(382.3,123.6);

	this.macaroon_text_2 = new cjs.Text("מסננת היא כלי חשוב לכל תהליך אפייה ולא מקושרת לטכניקה ספציפית", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text_2.name = "macaroon_text_2";
	this.macaroon_text_2.textAlign = "right";
	this.macaroon_text_2.lineHeight = 24;
	this.macaroon_text_2.lineWidth = 563;
	this.macaroon_text_2.parent = this;
	this.macaroon_text_2.setTransform(383.5,76);

	this.macaroon_text_3 = new cjs.Text(":כלי זה נחוץ לביצוע הטכניקות", "bold 19px 'Gisha'", "#2B42BE");
	this.macaroon_text_3.name = "macaroon_text_3";
	this.macaroon_text_3.textAlign = "right";
	this.macaroon_text_3.lineHeight = 24;
	this.macaroon_text_3.lineWidth = 444;
	this.macaroon_text_3.parent = this;
	this.macaroon_text_3.setTransform(383.5,38.7);

	this.macaroon_text_4 = new cjs.Text(":כלי זה נחוץ לאופה ברמה", "bold 19px 'Gisha'", "#2B42BE");
	this.macaroon_text_4.name = "macaroon_text_4";
	this.macaroon_text_4.textAlign = "right";
	this.macaroon_text_4.lineHeight = 24;
	this.macaroon_text_4.lineWidth = 287;
	this.macaroon_text_4.parent = this;
	this.macaroon_text_4.setTransform(383.5,-106.2);

	this.macaroon_title = new cjs.Text("מסננת", "bold 37px 'Gisha'", "#2B42BE");
	this.macaroon_title.name = "macaroon_title";
	this.macaroon_title.textAlign = "right";
	this.macaroon_title.lineHeight = 45;
	this.macaroon_title.lineWidth = 220;
	this.macaroon_title.parent = this;
	this.macaroon_title.setTransform(383.5,-264);

	this.macaroon_text_5 = new cjs.Text("כלי קעור המשמש לסינון מוצרי מזון. מסננות עשויות בדרך כלל מתכת דקה או פלסטיק. ישנן מסננות בצורת .קערה עם ידית ארוכה, לפעמים עם \"אוזניים\" לאיזונן על דפנות כיור, סיר או קערה, כך שיטפטפו מטה אחרות הן מעין קערה עם שתי ידיות אחיזה עגולות משני צידיהן ובסיס המאפשר הצבת המסננת, למשל .בתוך כיור, כדי לאפשר לנוזלים לזרום ממנה. ישנן מסננות בגדלים שונים, וגם גודל החרירים משתנה", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text_5.name = "macaroon_text_5";
	this.macaroon_text_5.textAlign = "right";
	this.macaroon_text_5.lineHeight = 24;
	this.macaroon_text_5.lineWidth = 790;
	this.macaroon_text_5.parent = this;
	this.macaroon_text_5.setTransform(382.2,-214.9);

	this.macaroon_text_6 = new cjs.Text("בצק עלים,   לחם,  קרואסונים,    מקרונים", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text_6.name = "macaroon_text_6";
	this.macaroon_text_6.textAlign = "right";
	this.macaroon_text_6.lineHeight = 24;
	this.macaroon_text_6.lineWidth = 757;
	this.macaroon_text_6.parent = this;
	this.macaroon_text_6.setTransform(383.5,261.6);

	this.instance_12 = new lib.notebook_tool();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-38.9,-7.9,1,1,0,0,0,2.1,-2.6);

	this.fade_screen = new lib.fade_screen();
	this.fade_screen.parent = this;
	this.fade_screen.setTransform(4.7,-1.3,1,0.997,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fade_screen},{t:this.instance_12},{t:this.macaroon_text_6},{t:this.macaroon_text_5},{t:this.macaroon_title},{t:this.macaroon_text_4},{t:this.macaroon_text_3},{t:this.macaroon_text_2},{t:this.macaroon_text_1},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.macaroon_text},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-540.8,-349.5,1045.6,698);


(lib.MEABED = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.meabed();
	this.instance.parent = this;
	this.instance.setTransform(-320,-108,0.146,0.146);

	this.instance_1 = new lib.metuganim01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(323,223,0.191,0.191);

	this.instance_2 = new lib.croissant();
	this.instance_2.parent = this;
	this.instance_2.setTransform(230,222,0.265,0.265);

	this.instance_3 = new lib.kosot01();
	this.instance_3.parent = this;
	this.instance_3.setTransform(137,220,0.214,0.214);

	this.instance_4 = new lib.parich();
	this.instance_4.parent = this;
	this.instance_4.setTransform(310,155,0.249,0.249);

	this.instance_5 = new lib.tart2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(230,156,0.215,0.215);

	this.instance_6 = new lib.gvina_1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(178.6,170.8,0.263,0.263,0,0,0,0.2,0);
	this.instance_6.filters = [new cjs.ColorFilter(0.75, 0.75, 0.75, 1, 63.75, 38.25, 12.75, 0)];
	this.instance_6.cache(-104,-84,209,169);

	this.instance_7 = new lib.alim("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(86.5,170.7,0.255,0.255,0,0,0,0,-0.2);

	this.macaroon_text = new cjs.Text("בצק פריך,  טארט,  עוגות גבינה,  בצק עלים", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text.name = "macaroon_text";
	this.macaroon_text.textAlign = "right";
	this.macaroon_text.lineHeight = 24;
	this.macaroon_text.lineWidth = 757;
	this.macaroon_text.parent = this;
	this.macaroon_text.setTransform(383.5,186.6);

	this.instance_8 = new lib.medium_1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(210,-22.5,0.748,0.748,0,0,0,0,12);

	this.instance_9 = new lib.pro_1("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(94.7,-31.7,0.715,0.715,0,0,0,0.1,21.9);

	this.instance_10 = new lib.beginner_1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(338.5,-21.3,0.731,0.731,0,0,0,0.4,12.1);
	this.instance_10.alpha = 0.199;

	this.macaroon_text_1 = new cjs.Text(":ובעזרתו אפשר להכין את המאפים", "bold 19px 'Gisha'", "#2B42BE");
	this.macaroon_text_1.name = "macaroon_text_1";
	this.macaroon_text_1.textAlign = "right";
	this.macaroon_text_1.lineHeight = 24;
	this.macaroon_text_1.lineWidth = 371;
	this.macaroon_text_1.parent = this;
	this.macaroon_text_1.setTransform(382.3,123.6);

	this.macaroon_text_2 = new cjs.Text("לישה", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text_2.name = "macaroon_text_2";
	this.macaroon_text_2.textAlign = "right";
	this.macaroon_text_2.lineHeight = 24;
	this.macaroon_text_2.lineWidth = 444;
	this.macaroon_text_2.parent = this;
	this.macaroon_text_2.setTransform(383.5,76);

	this.macaroon_text_3 = new cjs.Text(":כלי זה נחוץ לביצוע הטכניקות", "bold 19px 'Gisha'", "#2B42BE");
	this.macaroon_text_3.name = "macaroon_text_3";
	this.macaroon_text_3.textAlign = "right";
	this.macaroon_text_3.lineHeight = 24;
	this.macaroon_text_3.lineWidth = 444;
	this.macaroon_text_3.parent = this;
	this.macaroon_text_3.setTransform(383.5,38.7);

	this.macaroon_text_4 = new cjs.Text(":כלי זה נחוץ לאופה ברמה", "bold 19px 'Gisha'", "#2B42BE");
	this.macaroon_text_4.name = "macaroon_text_4";
	this.macaroon_text_4.textAlign = "right";
	this.macaroon_text_4.lineHeight = 24;
	this.macaroon_text_4.lineWidth = 287;
	this.macaroon_text_4.parent = this;
	this.macaroon_text_4.setTransform(383.5,-106.2);

	this.macaroon_title = new cjs.Text("מעבד מזון", "bold 37px 'Gisha'", "#2B42BE");
	this.macaroon_title.name = "macaroon_title";
	this.macaroon_title.textAlign = "right";
	this.macaroon_title.lineHeight = 45;
	this.macaroon_title.lineWidth = 321;
	this.macaroon_title.parent = this;
	this.macaroon_title.setTransform(383.5,-264);

	this.macaroon_text_5 = new cjs.Text("מכשיר המשמש לפעולות חוזרות ונישנות בתהליך הכנת המזון בעזרת להב קבוע או סכינים ודיסקים ,הניתנים להחלפה. מעבד מזון משמש לחיתוך וקיצוץ ירקות או פירות, לטחינת מזונות כמו אגוזים, תבלינים .בשר או פירות יבשים, גירור גבינה או ירקות, הכנת מחיות ומילויים למאפים, ולהכנה ולישה של בצקים", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text_5.name = "macaroon_text_5";
	this.macaroon_text_5.textAlign = "right";
	this.macaroon_text_5.lineHeight = 24;
	this.macaroon_text_5.lineWidth = 790;
	this.macaroon_text_5.parent = this;
	this.macaroon_text_5.setTransform(382.2,-213.3);

	this.macaroon_text_6 = new cjs.Text("מטוגנים,   קרואסונים,  קינוחי כוסות", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text_6.name = "macaroon_text_6";
	this.macaroon_text_6.textAlign = "right";
	this.macaroon_text_6.lineHeight = 24;
	this.macaroon_text_6.lineWidth = 757;
	this.macaroon_text_6.parent = this;
	this.macaroon_text_6.setTransform(383.5,261.6);

	this.instance_11 = new lib.notebook_tool();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-38.9,-7.9,1,1,0,0,0,2.1,-2.6);

	this.fade_screen = new lib.fade_screen();
	this.fade_screen.parent = this;
	this.fade_screen.setTransform(4.7,-1.3,1,0.997,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fade_screen},{t:this.instance_11},{t:this.macaroon_text_6},{t:this.macaroon_text_5},{t:this.macaroon_title},{t:this.macaroon_text_4},{t:this.macaroon_text_3},{t:this.macaroon_text_2},{t:this.macaroon_text_1},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.macaroon_text},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-540.8,-349.5,1045.6,698);


(lib.MATREFA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.matrefa105();
	this.instance.parent = this;
	this.instance.setTransform(-385.2,-107.7,0.964,1.076,-5);

	this.instance_1 = new lib.Patissier01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-37,206,0.224,0.224);

	this.instance_2 = new lib.tiramisu01();
	this.instance_2.parent = this;
	this.instance_2.setTransform(130,221,0.209,0.209);

	this.instance_3 = new lib.ravuch01();
	this.instance_3.parent = this;
	this.instance_3.setTransform(323.8,229.8,0.185,0.185,-15);

	this.instance_4 = new lib.Macaroon();
	this.instance_4.parent = this;
	this.instance_4.setTransform(71,230,0.278,0.278);

	this.instance_5 = new lib.kosot01();
	this.instance_5.parent = this;
	this.instance_5.setTransform(225,220,0.214,0.214);

	this.instance_6 = new lib.bhushot01();
	this.instance_6.parent = this;
	this.instance_6.setTransform(144,156,0.208,0.208);

	this.instance_7 = new lib.cupcake01();
	this.instance_7.parent = this;
	this.instance_7.setTransform(329,153,0.201,0.201);

	this.instance_8 = new lib.parich();
	this.instance_8.parent = this;
	this.instance_8.setTransform(229,154,0.249,0.249);

	this.instance_9 = new lib.tart2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(53,158,0.215,0.215);

	this.instance_10 = new lib.gvina_1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(2,172.7,0.263,0.263,0,0,0,0.2,0);
	this.instance_10.filters = [new cjs.ColorFilter(0.75, 0.75, 0.75, 1, 63.75, 38.25, 12.75, 0)];
	this.instance_10.cache(-104,-84,209,169);

	this.macaroon_text = new cjs.Text("קאפקייק,  בצק פריך,  עוגות בחושות,  טארט,  עוגות גבינה", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text.name = "macaroon_text";
	this.macaroon_text.textAlign = "right";
	this.macaroon_text.lineHeight = 24;
	this.macaroon_text.lineWidth = 757;
	this.macaroon_text.parent = this;
	this.macaroon_text.setTransform(383.5,186.6);

	this.instance_11 = new lib.medium_1("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(210,-22.5,0.748,0.748,0,0,0,0,12);

	this.instance_12 = new lib.pro_1("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(94.7,-31.7,0.715,0.715,0,0,0,0.1,21.9);

	this.instance_13 = new lib.beginner_1("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(338.5,-21.3,0.731,0.731,0,0,0,0.4,12.1);

	this.macaroon_text_1 = new cjs.Text(":ובעזרתו אפשר להכין את המאפים", "bold 19px 'Gisha'", "#2B42BE");
	this.macaroon_text_1.name = "macaroon_text_1";
	this.macaroon_text_1.textAlign = "right";
	this.macaroon_text_1.lineHeight = 24;
	this.macaroon_text_1.lineWidth = 371;
	this.macaroon_text_1.parent = this;
	this.macaroon_text_1.setTransform(382.3,123.6);

	this.macaroon_text_2 = new cjs.Text("הקצפה", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text_2.name = "macaroon_text_2";
	this.macaroon_text_2.textAlign = "right";
	this.macaroon_text_2.lineHeight = 24;
	this.macaroon_text_2.lineWidth = 444;
	this.macaroon_text_2.parent = this;
	this.macaroon_text_2.setTransform(383.5,76);

	this.macaroon_text_3 = new cjs.Text(":כלי זה נחוץ לביצוע הטכניקות", "bold 19px 'Gisha'", "#2B42BE");
	this.macaroon_text_3.name = "macaroon_text_3";
	this.macaroon_text_3.textAlign = "right";
	this.macaroon_text_3.lineHeight = 24;
	this.macaroon_text_3.lineWidth = 444;
	this.macaroon_text_3.parent = this;
	this.macaroon_text_3.setTransform(383.5,38.7);

	this.macaroon_text_4 = new cjs.Text(":כלי זה נחוץ לאופה ברמה", "bold 19px 'Gisha'", "#2B42BE");
	this.macaroon_text_4.name = "macaroon_text_4";
	this.macaroon_text_4.textAlign = "right";
	this.macaroon_text_4.lineHeight = 24;
	this.macaroon_text_4.lineWidth = 287;
	this.macaroon_text_4.parent = this;
	this.macaroon_text_4.setTransform(383.5,-106.2);

	this.macaroon_title = new cjs.Text("מטרפה", "bold 37px 'Gisha'", "#2B42BE");
	this.macaroon_title.name = "macaroon_title";
	this.macaroon_title.textAlign = "right";
	this.macaroon_title.lineHeight = 45;
	this.macaroon_title.lineWidth = 220;
	this.macaroon_title.parent = this;
	this.macaroon_title.setTransform(383.5,-264);

	this.macaroon_text_5 = new cjs.Text("כלי מטבח ידני שנועד לערבוב מהיר ולהקצפה (החדרת בועות אוויר באופן מבוקר) של נוזלים שונים כמו .ביצים, חלמונים, חלבונים ושמנת. המטרפה לרוב עשויה מתכת ובעלת צורת טיפה המחוברת לידית אחיזה", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text_5.name = "macaroon_text_5";
	this.macaroon_text_5.textAlign = "right";
	this.macaroon_text_5.lineHeight = 24;
	this.macaroon_text_5.lineWidth = 790;
	this.macaroon_text_5.parent = this;
	this.macaroon_text_5.setTransform(382.2,-214.9);

	this.macaroon_text_6 = new cjs.Text("בצק רבוך,  קינוחי כוסות,  טירמיסו,  מקרונים,  קרם פיטסייר", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text_6.name = "macaroon_text_6";
	this.macaroon_text_6.textAlign = "right";
	this.macaroon_text_6.lineHeight = 24;
	this.macaroon_text_6.lineWidth = 757;
	this.macaroon_text_6.parent = this;
	this.macaroon_text_6.setTransform(383.5,261.6);

	this.instance_14 = new lib.notebook_tool();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-38.9,-7.9,1,1,0,0,0,2.1,-2.6);

	this.fade_screen = new lib.fade_screen();
	this.fade_screen.parent = this;
	this.fade_screen.setTransform(4.7,-1.3,1,0.997,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fade_screen},{t:this.instance_14},{t:this.macaroon_text_6},{t:this.macaroon_text_5},{t:this.macaroon_title},{t:this.macaroon_text_4},{t:this.macaroon_text_3},{t:this.macaroon_text_2},{t:this.macaroon_text_1},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.macaroon_text},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-540.8,-349.5,1045.6,698);


(lib.MARiT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.marit_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-248.2,46.3,1.15,1.175,15,0,0,-0.1,0.3);

	this.instance_1 = new lib.Patissier01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-127,141,0.224,0.224);

	this.instance_2 = new lib.tiramisu01();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-63,220,0.209,0.209);

	this.instance_3 = new lib.preline01();
	this.instance_3.parent = this;
	this.instance_3.setTransform(122,226,0.141,0.141);

	this.instance_4 = new lib.ravuch01();
	this.instance_4.parent = this;
	this.instance_4.setTransform(254.8,229.5,0.185,0.185,-15);

	this.instance_5 = new lib.metuganim01();
	this.instance_5.parent = this;
	this.instance_5.setTransform(323,223,0.191,0.191);

	this.instance_6 = new lib.Macaroon();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-122,229,0.278,0.278);

	this.instance_7 = new lib.lehem();
	this.instance_7.parent = this;
	this.instance_7.setTransform(151.1,235,0.381,0.381,-15);

	this.instance_8 = new lib.kosot01();
	this.instance_8.parent = this;
	this.instance_8.setTransform(24,219,0.214,0.214);

	this.instance_9 = new lib.bhushot01();
	this.instance_9.parent = this;
	this.instance_9.setTransform(144,156,0.208,0.208);

	this.instance_10 = new lib.cupcake01();
	this.instance_10.parent = this;
	this.instance_10.setTransform(329,153,0.201,0.201);

	this.instance_11 = new lib.parich();
	this.instance_11.parent = this;
	this.instance_11.setTransform(229,154,0.249,0.249);

	this.instance_12 = new lib.tart2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(53,158,0.215,0.215);

	this.instance_13 = new lib.gvina_1("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(2,172.7,0.263,0.263,0,0,0,0.2,0);
	this.instance_13.filters = [new cjs.ColorFilter(0.75, 0.75, 0.75, 1, 63.75, 38.25, 12.75, 0)];
	this.instance_13.cache(-104,-84,209,169);

	this.macaroon_text = new cjs.Text("קאפקייק,  בצק פריך,  עוגות בחושות,  טארט,  עוגות גבינה,  קרם פיטסייר", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text.name = "macaroon_text";
	this.macaroon_text.textAlign = "right";
	this.macaroon_text.lineHeight = 24;
	this.macaroon_text.lineWidth = 757;
	this.macaroon_text.parent = this;
	this.macaroon_text.setTransform(383.5,186.6);

	this.instance_14 = new lib.medium_1("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(210,-22.5,0.748,0.748,0,0,0,0,12);

	this.instance_15 = new lib.pro_1("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(94.7,-31.7,0.715,0.715,0,0,0,0.1,21.9);

	this.instance_16 = new lib.beginner_1("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(338.5,-21.3,0.731,0.731,0,0,0,0.4,12.1);

	this.macaroon_text_1 = new cjs.Text(":ובעזרתו אפשר להכין את המאפים", "bold 19px 'Gisha'", "#2B42BE");
	this.macaroon_text_1.name = "macaroon_text_1";
	this.macaroon_text_1.textAlign = "right";
	this.macaroon_text_1.lineHeight = 24;
	this.macaroon_text_1.lineWidth = 371;
	this.macaroon_text_1.parent = this;
	this.macaroon_text_1.setTransform(382.3,123.6);

	this.macaroon_text_2 = new cjs.Text("קיפול, בן מארי, טמפרור שוקולד", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text_2.name = "macaroon_text_2";
	this.macaroon_text_2.textAlign = "right";
	this.macaroon_text_2.lineHeight = 24;
	this.macaroon_text_2.lineWidth = 444;
	this.macaroon_text_2.parent = this;
	this.macaroon_text_2.setTransform(383.5,76);

	this.macaroon_text_3 = new cjs.Text(":כלי זה נחוץ לביצוע הטכניקות", "bold 19px 'Gisha'", "#2B42BE");
	this.macaroon_text_3.name = "macaroon_text_3";
	this.macaroon_text_3.textAlign = "right";
	this.macaroon_text_3.lineHeight = 24;
	this.macaroon_text_3.lineWidth = 444;
	this.macaroon_text_3.parent = this;
	this.macaroon_text_3.setTransform(383.5,38.7);

	this.macaroon_text_4 = new cjs.Text(":כלי זה נחוץ לאופה ברמה", "bold 19px 'Gisha'", "#2B42BE");
	this.macaroon_text_4.name = "macaroon_text_4";
	this.macaroon_text_4.textAlign = "right";
	this.macaroon_text_4.lineHeight = 24;
	this.macaroon_text_4.lineWidth = 287;
	this.macaroon_text_4.parent = this;
	this.macaroon_text_4.setTransform(383.5,-106.2);

	this.macaroon_title = new cjs.Text("מרית", "bold 37px 'Gisha'", "#2B42BE");
	this.macaroon_title.name = "macaroon_title";
	this.macaroon_title.textAlign = "right";
	this.macaroon_title.lineHeight = 45;
	this.macaroon_title.lineWidth = 220;
	this.macaroon_title.parent = this;
	this.macaroon_title.setTransform(383.5,-264);

	this.macaroon_text_5 = new cjs.Text(",נקראת בסלנג גם \"לקקן\". כלי לניקוי משטחי העבודה, לגריפה והוצאת תכולה מקערות ותבניות\n.או להחלקה של קרמים - למשל בציפוי עוגה\n.מרית יכולה להיות עשויה מחומר קשיח כמו פלסטיק, או מחומר גמיש כמו סיליקון או גומי", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text_5.name = "macaroon_text_5";
	this.macaroon_text_5.textAlign = "right";
	this.macaroon_text_5.lineHeight = 24;
	this.macaroon_text_5.lineWidth = 718;
	this.macaroon_text_5.parent = this;
	this.macaroon_text_5.setTransform(382.2,-214.9);

	this.macaroon_text_6 = new cjs.Text("מטוגנים,  בצק רבוך,  לחם,  פרלינים,  קינוחי כוסות,  טירמיסו,  מקרונים", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text_6.name = "macaroon_text_6";
	this.macaroon_text_6.textAlign = "right";
	this.macaroon_text_6.lineHeight = 24;
	this.macaroon_text_6.lineWidth = 757;
	this.macaroon_text_6.parent = this;
	this.macaroon_text_6.setTransform(383.5,261.6);

	this.instance_17 = new lib.notebook_tool();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-38.9,-7.9,1,1,0,0,0,2.1,-2.6);

	this.fade_screen = new lib.fade_screen();
	this.fade_screen.parent = this;
	this.fade_screen.setTransform(4.7,-1.3,1,0.997,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fade_screen},{t:this.instance_17},{t:this.macaroon_text_6},{t:this.macaroon_text_5},{t:this.macaroon_title},{t:this.macaroon_text_4},{t:this.macaroon_text_3},{t:this.macaroon_text_2},{t:this.macaroon_text_1},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.macaroon_text},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-540.8,-349.5,1045.6,698);


(lib.MAAROH = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.metuganim01();
	this.instance.parent = this;
	this.instance.setTransform(157,174,0.234,0.234);

	this.instance_1 = new lib.lehem();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-142.1,195,0.467,0.467,-15);

	this.instance_2 = new lib.croissant();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-189,178,0.325,0.325);

	this.instance_3 = new lib.parich();
	this.instance_3.parent = this;
	this.instance_3.setTransform(311,169,0.306,0.306);

	this.instance_4 = new lib.tart2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(221,163,0.349,0.349);

	this.instance_5 = new lib.gvina_1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(92.9,192.3,0.322,0.322,0,0,0,0.3,0.1);
	this.instance_5.filters = [new cjs.ColorFilter(0.75, 0.75, 0.75, 1, 63.75, 38.25, 12.75, 0)];
	this.instance_5.cache(-104,-84,209,169);

	this.instance_6 = new lib.alim("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,188.7,0.313,0.313);

	this.instance_7 = new lib.maaroh();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-157.8,-95.4,1,1,37.5);

	this.macaroon_text = new cjs.Text("בצק פריך,    טארט,   מטוגנים,   עוגות גבינה,   בצק עלים,   לחם,    קרואסונים", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text.name = "macaroon_text";
	this.macaroon_text.textAlign = "right";
	this.macaroon_text.lineHeight = 24;
	this.macaroon_text.lineWidth = 757;
	this.macaroon_text.parent = this;
	this.macaroon_text.setTransform(383.5,219.8);

	this.instance_8 = new lib.medium_1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(210,-22.5,0.748,0.748,0,0,0,0,12);

	this.instance_9 = new lib.pro_1("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(94.7,-31.7,0.715,0.715,0,0,0,0.1,21.9);

	this.instance_10 = new lib.beginner_1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(338.5,-21.3,0.731,0.731,0,0,0,0.4,12.1);
	this.instance_10.alpha = 0.199;

	this.macaroon_text_1 = new cjs.Text(":ובעזרתו אפשר להכין את המאפים", "bold 19px 'Gisha'", "#2B42BE");
	this.macaroon_text_1.name = "macaroon_text_1";
	this.macaroon_text_1.textAlign = "right";
	this.macaroon_text_1.lineHeight = 24;
	this.macaroon_text_1.lineWidth = 371;
	this.macaroon_text_1.parent = this;
	this.macaroon_text_1.setTransform(382.3,123.6);

	this.macaroon_text_2 = new cjs.Text("רידוד", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text_2.name = "macaroon_text_2";
	this.macaroon_text_2.textAlign = "right";
	this.macaroon_text_2.lineHeight = 24;
	this.macaroon_text_2.lineWidth = 444;
	this.macaroon_text_2.parent = this;
	this.macaroon_text_2.setTransform(383.5,76);

	this.macaroon_text_3 = new cjs.Text(":כלי זה נחוץ לביצוע הטכניקות", "bold 19px 'Gisha'", "#2B42BE");
	this.macaroon_text_3.name = "macaroon_text_3";
	this.macaroon_text_3.textAlign = "right";
	this.macaroon_text_3.lineHeight = 24;
	this.macaroon_text_3.lineWidth = 444;
	this.macaroon_text_3.parent = this;
	this.macaroon_text_3.setTransform(383.5,38.7);

	this.macaroon_text_4 = new cjs.Text(":כלי זה נחוץ לאופה ברמה", "bold 19px 'Gisha'", "#2B42BE");
	this.macaroon_text_4.name = "macaroon_text_4";
	this.macaroon_text_4.textAlign = "right";
	this.macaroon_text_4.lineHeight = 24;
	this.macaroon_text_4.lineWidth = 287;
	this.macaroon_text_4.parent = this;
	this.macaroon_text_4.setTransform(383.5,-106.2);

	this.macaroon_title = new cjs.Text("מערוך", "bold 37px 'Gisha'", "#2B42BE");
	this.macaroon_title.name = "macaroon_title";
	this.macaroon_title.textAlign = "right";
	this.macaroon_title.lineHeight = 45;
	this.macaroon_title.lineWidth = 321;
	this.macaroon_title.parent = this;
	this.macaroon_title.setTransform(383.5,-264);

	this.macaroon_text_5 = new cjs.Text("כלי גלילי המשמש לרידוד בצק. המערוך הוא מוט בעל צורה גלילית מוארכת, עוביו לרוב 10-7 ס\"מ ובשני קצותיו ידיות להחזקתו. המערוכים עשויים לרוב מעץ אך יכולים גם להיות עשויים פלסטיק או אפילו שיש. ישנם מערוכים חלולים, כשאל החלל במרכזם מכניסים מים חמים או קרים על מנת להקל .על רידוד סוגי מזון שונים", "19px 'Gisha'", "#2B42BE");
	this.macaroon_text_5.name = "macaroon_text_5";
	this.macaroon_text_5.textAlign = "right";
	this.macaroon_text_5.lineHeight = 24;
	this.macaroon_text_5.lineWidth = 754;
	this.macaroon_text_5.parent = this;
	this.macaroon_text_5.setTransform(382.2,-213.3);

	this.instance_11 = new lib.notebook_tool();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-38.9,-7.9,1,1,0,0,0,2.1,-2.6);

	this.fade_screen = new lib.fade_screen();
	this.fade_screen.parent = this;
	this.fade_screen.setTransform(4.7,-1.3,1,0.997,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fade_screen},{t:this.instance_11},{t:this.macaroon_text_5},{t:this.macaroon_title},{t:this.macaroon_text_4},{t:this.macaroon_text_3},{t:this.macaroon_text_2},{t:this.macaroon_text_1},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.macaroon_text},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-540.8,-349.5,1045.6,698);


(lib.RIDUD = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ridud();
	this.instance.parent = this;
	this.instance.setTransform(-356,178,1,1,-90);

	this.instance_1 = new lib.metuganim01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(159,222,0.234,0.234);

	this.instance_2 = new lib.lehem();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-142.1,238.8,0.467,0.467,-15);

	this.instance_3 = new lib.croissant();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-189,222,0.325,0.325);

	this.instance_4 = new lib.parich();
	this.instance_4.parent = this;
	this.instance_4.setTransform(311,213,0.306,0.306);

	this.instance_5 = new lib.tart2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(215,205,0.349,0.349);

	this.instance_6 = new lib.gvina_1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(98.9,231.1,0.322,0.322,0,0,0,0.3,0.1);
	this.instance_6.filters = [new cjs.ColorFilter(0.75, 0.75, 0.75, 1, 63.75, 38.25, 12.75, 0)];
	this.instance_6.cache(-104,-84,209,169);

	this.instance_7 = new lib.alim("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,232.5,0.313,0.313);

	this.macaroon_text = new cjs.Text("בצק פריך,    טארט,   מטוגנים,   עוגות גבינה,   בצק עלים,   לחם,    קרואסונים,", "19px 'Gisha'", "#006600");
	this.macaroon_text.name = "macaroon_text";
	this.macaroon_text.textAlign = "right";
	this.macaroon_text.lineHeight = 24;
	this.macaroon_text.lineWidth = 757;
	this.macaroon_text.parent = this;
	this.macaroon_text.setTransform(383.5,263.6);

	this.instance_8 = new lib.maaroh();
	this.instance_8.parent = this;
	this.instance_8.setTransform(361.2,70.2,0.209,0.209,30);

	this.instance_9 = new lib.medium_1("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(210,-22.5,0.748,0.748,0,0,0,0,12);

	this.instance_10 = new lib.pro_1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(94.7,-31.7,0.715,0.715,0,0,0,0.1,21.9);

	this.instance_11 = new lib.beginner_1("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(338.5,-21.3,0.731,0.731,0,0,0,0.4,12.1);
	this.instance_11.alpha = 0.199;

	this.macaroon_text_1 = new cjs.Text(":ובעזרתה אפשר להכין את המאפים", "bold 19px 'Gisha'", "#006600");
	this.macaroon_text_1.name = "macaroon_text_1";
	this.macaroon_text_1.textAlign = "right";
	this.macaroon_text_1.lineHeight = 24;
	this.macaroon_text_1.lineWidth = 371;
	this.macaroon_text_1.parent = this;
	this.macaroon_text_1.setTransform(382.2,174.1);

	this.macaroon_text_2 = new cjs.Text("מערוך", "19px 'Gisha'", "#006600");
	this.macaroon_text_2.name = "macaroon_text_2";
	this.macaroon_text_2.textAlign = "right";
	this.macaroon_text_2.lineHeight = 24;
	this.macaroon_text_2.lineWidth = 435;
	this.macaroon_text_2.parent = this;
	this.macaroon_text_2.setTransform(374,138.9);

	this.macaroon_text_3 = new cjs.Text(":לביצוע טכניקה זו נחוצים הכלים", "bold 19px 'Gisha'", "#006600");
	this.macaroon_text_3.name = "macaroon_text_3";
	this.macaroon_text_3.textAlign = "right";
	this.macaroon_text_3.lineHeight = 24;
	this.macaroon_text_3.lineWidth = 444;
	this.macaroon_text_3.parent = this;
	this.macaroon_text_3.setTransform(383.5,38.7);

	this.macaroon_text_4 = new cjs.Text(":טכניקה זה נחוצה לאופה ברמה", "bold 19px 'Gisha'", "#006600");
	this.macaroon_text_4.name = "macaroon_text_4";
	this.macaroon_text_4.textAlign = "right";
	this.macaroon_text_4.lineHeight = 24;
	this.macaroon_text_4.lineWidth = 287;
	this.macaroon_text_4.parent = this;
	this.macaroon_text_4.setTransform(383.5,-106.2);

	this.macaroon_title = new cjs.Text("רידוד", "bold 37px 'Gisha'", "#006600");
	this.macaroon_title.name = "macaroon_title";
	this.macaroon_title.textAlign = "right";
	this.macaroon_title.lineHeight = 45;
	this.macaroon_title.lineWidth = 321;
	this.macaroon_title.parent = this;
	this.macaroon_title.setTransform(383.5,-260);

	this.macaroon_text_5 = new cjs.Text(".שיטוח בצק בעזרת מערוך. אם אין בהישג יד מערוך – ניתן להשתמש בבקבוק יין מזכוכית כתחליף\nבזמן הרידוד מומלץ לקמח את משטח העבודה, את הבצק ואת המערוך עצמו על-מנת שהבצק לא יידבק .לאחד מהם", "19px 'Gisha'", "#006600");
	this.macaroon_text_5.name = "macaroon_text_5";
	this.macaroon_text_5.textAlign = "right";
	this.macaroon_text_5.lineHeight = 24;
	this.macaroon_text_5.lineWidth = 769;
	this.macaroon_text_5.parent = this;
	this.macaroon_text_5.setTransform(382.2,-209.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.macaroon_text_5},{t:this.macaroon_title},{t:this.macaroon_text_4},{t:this.macaroon_text_3},{t:this.macaroon_text_2},{t:this.macaroon_text_1},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.macaroon_text},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 3
	this.instance_12 = new lib.notebooktechnew();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-69.5,-5.3,1,1,0,0,0,-27.8,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Layer 2
	this.fade_screen = new lib.fade_screen();
	this.fade_screen.parent = this;
	this.fade_screen.setTransform(4.5,-0.3,1,0.997,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.fade_screen).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-541.5,-348.5,1046.1,698);


(lib.LISHA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lisha020505();
	this.instance.parent = this;
	this.instance.setTransform(-348,-128,1.63,1.63);

	this.instance_1 = new lib.mixerHQ();
	this.instance_1.parent = this;
	this.instance_1.setTransform(324,69,0.1,0.1);

	this.instance_2 = new lib.meabed();
	this.instance_2.parent = this;
	this.instance_2.setTransform(257,69,0.027,0.027);

	this.instance_3 = new lib.metuganim01();
	this.instance_3.parent = this;
	this.instance_3.setTransform(329,221,0.234,0.234);

	this.instance_4 = new lib.lehem();
	this.instance_4.parent = this;
	this.instance_4.setTransform(137,237.9,0.467,0.467,-15);

	this.instance_5 = new lib.croissant();
	this.instance_5.parent = this;
	this.instance_5.setTransform(80,221,0.325,0.325);

	this.instance_6 = new lib.alim("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(277.4,237.5,0.313,0.313);

	this.macaroon_text = new cjs.Text("מטוגנים,   בצק עלים,   לחם,    קרואסונים,", "19px 'Gisha'", "#006600");
	this.macaroon_text.name = "macaroon_text";
	this.macaroon_text.textAlign = "right";
	this.macaroon_text.lineHeight = 24;
	this.macaroon_text.lineWidth = 757;
	this.macaroon_text.parent = this;
	this.macaroon_text.setTransform(383.5,262.6);

	this.instance_7 = new lib.medium_1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(210,-22.5,0.748,0.748,0,0,0,0,12);

	this.instance_8 = new lib.pro_1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(94.7,-31.7,0.715,0.715,0,0,0,0.1,21.9);

	this.instance_9 = new lib.beginner_1("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(338.5,-21.3,0.731,0.731,0,0,0,0.4,12.1);

	this.macaroon_text_1 = new cjs.Text(":ובעזרתה אפשר להכין את המאפים", "bold 19px 'Gisha'", "#006600");
	this.macaroon_text_1.name = "macaroon_text_1";
	this.macaroon_text_1.textAlign = "right";
	this.macaroon_text_1.lineHeight = 24;
	this.macaroon_text_1.lineWidth = 371;
	this.macaroon_text_1.parent = this;
	this.macaroon_text_1.setTransform(382.2,174.1);

	this.macaroon_text_2 = new cjs.Text("מיקסר,  מעבד מזון", "19px 'Gisha'", "#006600");
	this.macaroon_text_2.name = "macaroon_text_2";
	this.macaroon_text_2.textAlign = "right";
	this.macaroon_text_2.lineHeight = 24;
	this.macaroon_text_2.lineWidth = 444;
	this.macaroon_text_2.parent = this;
	this.macaroon_text_2.setTransform(383.5,138.9);

	this.macaroon_text_3 = new cjs.Text(":לביצוע טכניקה זו נחוצים הכלים", "bold 19px 'Gisha'", "#006600");
	this.macaroon_text_3.name = "macaroon_text_3";
	this.macaroon_text_3.textAlign = "right";
	this.macaroon_text_3.lineHeight = 24;
	this.macaroon_text_3.lineWidth = 444;
	this.macaroon_text_3.parent = this;
	this.macaroon_text_3.setTransform(383.5,38.7);

	this.macaroon_text_4 = new cjs.Text(":טכניקה זה נחוצה לאופה ברמה", "bold 19px 'Gisha'", "#006600");
	this.macaroon_text_4.name = "macaroon_text_4";
	this.macaroon_text_4.textAlign = "right";
	this.macaroon_text_4.lineHeight = 24;
	this.macaroon_text_4.lineWidth = 287;
	this.macaroon_text_4.parent = this;
	this.macaroon_text_4.setTransform(383.5,-106.2);

	this.macaroon_title = new cjs.Text("לישה", "bold 37px 'Gisha'", "#006600");
	this.macaroon_title.name = "macaroon_title";
	this.macaroon_title.textAlign = "right";
	this.macaroon_title.lineHeight = 45;
	this.macaroon_title.lineWidth = 321;
	this.macaroon_title.parent = this;
	this.macaroon_title.setTransform(383.5,-259);

	this.macaroon_text_5 = new cjs.Text("עיבוד בצק באמצעות מתיחה וקיפול, עד להגעה לגמישות ולחוזק הרצויים. הלישה מכניסה אוויר לבצק ובכך יוצרת בו גלוטן, שדרוש להתפחתו. את פעולת הלישה עושים בדרך כלל ביד, אולם ניתן גם לבצע .אותה בעזרת מיקסר עם וו לישה או במעבד מזון", "19px 'Gisha'", "#006600");
	this.macaroon_text_5.name = "macaroon_text_5";
	this.macaroon_text_5.textAlign = "right";
	this.macaroon_text_5.lineHeight = 24;
	this.macaroon_text_5.lineWidth = 769;
	this.macaroon_text_5.parent = this;
	this.macaroon_text_5.setTransform(382.2,-210.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.macaroon_text_5},{t:this.macaroon_title},{t:this.macaroon_text_4},{t:this.macaroon_text_3},{t:this.macaroon_text_2},{t:this.macaroon_text_1},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.macaroon_text},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 3
	this.instance_10 = new lib.notebooktechnew();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-68.5,-6.1,1,1,0,0,0,-27.8,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Layer 2
	this.fade_screen = new lib.fade_screen();
	this.fade_screen.parent = this;
	this.fade_screen.setTransform(4.5,-0.3,1,0.997,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.fade_screen).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-540.5,-348.5,1045.1,698);


(lib.KIPUL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.marit();
	this.instance.parent = this;
	this.instance.setTransform(361.1,70.5,0.304,0.304,30);

	this.instance_1 = new lib.kipul();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-359,-118,1.143,1.143);

	this.instance_2 = new lib.preline01();
	this.instance_2.parent = this;
	this.instance_2.setTransform(137,228,0.185,0.185);

	this.instance_3 = new lib.kosot01();
	this.instance_3.parent = this;
	this.instance_3.setTransform(9,212,0.275,0.275);

	this.instance_4 = new lib.Patissier01();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-291,206,0.256,0.256);

	this.instance_5 = new lib.tiramisu01();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-82,221,0.239,0.239);

	this.instance_6 = new lib.Macaroon();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-168,231,0.318,0.318);

	this.instance_7 = new lib.bhushot01();
	this.instance_7.parent = this;
	this.instance_7.setTransform(301,217,0.238,0.238);

	this.instance_8 = new lib.gvina_1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(234.1,235.8,0.3,0.3,0,0,0,0.4,0);
	this.instance_8.filters = [new cjs.ColorFilter(0.75, 0.75, 0.75, 1, 63.75, 38.25, 12.75, 0)];
	this.instance_8.cache(-104,-84,209,169);

	this.macaroon_text = new cjs.Text("עוגות בחושות,   עוגות גבינה,    פרלינים,    קינוחי כוסות,   טירמיסו,    מקרונים,    קרם פטיסייר", "19px 'Gisha'", "#006600");
	this.macaroon_text.name = "macaroon_text";
	this.macaroon_text.textAlign = "right";
	this.macaroon_text.lineHeight = 24;
	this.macaroon_text.lineWidth = 757;
	this.macaroon_text.parent = this;
	this.macaroon_text.setTransform(383.5,262.6);

	this.instance_9 = new lib.medium_1("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(210,-22.5,0.748,0.748,0,0,0,0,12);

	this.instance_10 = new lib.pro_1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(94.7,-31.7,0.715,0.715,0,0,0,0.1,21.9);

	this.instance_11 = new lib.beginner_1("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(338.5,-21.3,0.731,0.731,0,0,0,0.4,12.1);
	this.instance_11.alpha = 0.199;

	this.macaroon_text_1 = new cjs.Text(":ובעזרתה אפשר להכין את המאפים", "bold 19px 'Gisha'", "#006600");
	this.macaroon_text_1.name = "macaroon_text_1";
	this.macaroon_text_1.textAlign = "right";
	this.macaroon_text_1.lineHeight = 24;
	this.macaroon_text_1.lineWidth = 371;
	this.macaroon_text_1.parent = this;
	this.macaroon_text_1.setTransform(382.2,174.1);

	this.macaroon_text_2 = new cjs.Text("מרית", "19px 'Gisha'", "#006600");
	this.macaroon_text_2.name = "macaroon_text_2";
	this.macaroon_text_2.textAlign = "right";
	this.macaroon_text_2.lineHeight = 24;
	this.macaroon_text_2.lineWidth = 444;
	this.macaroon_text_2.parent = this;
	this.macaroon_text_2.setTransform(365.1,138.9,0.917,1);

	this.macaroon_text_3 = new cjs.Text(":לביצוע טכניקה זו נחוצים הכלים", "bold 19px 'Gisha'", "#006600");
	this.macaroon_text_3.name = "macaroon_text_3";
	this.macaroon_text_3.textAlign = "right";
	this.macaroon_text_3.lineHeight = 24;
	this.macaroon_text_3.lineWidth = 444;
	this.macaroon_text_3.parent = this;
	this.macaroon_text_3.setTransform(383.5,38.7);

	this.macaroon_text_4 = new cjs.Text(":טכניקה זה נחוצה לאופה ברמה", "bold 19px 'Gisha'", "#006600");
	this.macaroon_text_4.name = "macaroon_text_4";
	this.macaroon_text_4.textAlign = "right";
	this.macaroon_text_4.lineHeight = 24;
	this.macaroon_text_4.lineWidth = 287;
	this.macaroon_text_4.parent = this;
	this.macaroon_text_4.setTransform(383.5,-106.2);

	this.macaroon_title = new cjs.Text("קיפול", "bold 37px 'Gisha'", "#006600");
	this.macaroon_title.name = "macaroon_title";
	this.macaroon_title.textAlign = "right";
	this.macaroon_title.lineHeight = 45;
	this.macaroon_title.lineWidth = 321;
	this.macaroon_title.parent = this;
	this.macaroon_title.setTransform(383.5,-264);

	this.macaroon_text_5 = new cjs.Text("תהליך שנועד לערבב רכיב קל ורגיש, כמו קציפת ביצים, עם רכיב כבד יותר כמו שוקולד נמס, מבלי לפגוע בנפח הרכיב הקל. עושים זאת באמצעות הרמת התערובת הכבדה יותר מבסיס הכלי והעלמת הרכיב .הקל בתוכה בעזרת כף או מרית", "19px 'Gisha'", "#006600");
	this.macaroon_text_5.name = "macaroon_text_5";
	this.macaroon_text_5.textAlign = "right";
	this.macaroon_text_5.lineHeight = 24;
	this.macaroon_text_5.lineWidth = 769;
	this.macaroon_text_5.parent = this;
	this.macaroon_text_5.setTransform(382.2,-213.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.macaroon_text_5},{t:this.macaroon_title},{t:this.macaroon_text_4},{t:this.macaroon_text_3},{t:this.macaroon_text_2},{t:this.macaroon_text_1},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.macaroon_text},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 4
	this.instance_12 = new lib.notebooktechnew();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-67.5,-10.3,1,1,0,0,0,-27.8,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Layer 3
	this.fade_screen = new lib.fade_screen();
	this.fade_screen.parent = this;
	this.fade_screen.setTransform(7.5,-0.3,1,0.997,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.fade_screen).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-539.5,-348.5,1047.1,698);


(lib.IVERET = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.iveret05();
	this.instance.parent = this;
	this.instance.setTransform(-363,-49,1.215,1.215);

	this.instance_1 = new lib.tanur();
	this.instance_1.parent = this;
	this.instance_1.setTransform(328,79,0.209,0.209);

	this.instance_2 = new lib.parich();
	this.instance_2.parent = this;
	this.instance_2.setTransform(311,219,0.306,0.306);

	this.instance_3 = new lib.tart2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(214,211,0.349,0.349);

	this.instance_4 = new lib.alim("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(162.2,243.2,0.313,0.313);

	this.instance_5 = new lib.maaroh();
	this.instance_5.parent = this;
	this.instance_5.setTransform(297.4,68.7,0.209,0.209,30);

	this.macaroon_text = new cjs.Text("בצק פריך,      טארט,      בצק עלים", "19px 'Gisha'", "#006600");
	this.macaroon_text.name = "macaroon_text";
	this.macaroon_text.textAlign = "right";
	this.macaroon_text.lineHeight = 24;
	this.macaroon_text.lineWidth = 757;
	this.macaroon_text.parent = this;
	this.macaroon_text.setTransform(383.5,261.1);

	this.instance_6 = new lib.medium_1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(210,0,0.748,0.748,0,0,0,0,12);

	this.instance_7 = new lib.pro_1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(94.7,-9.2,0.715,0.715,0,0,0,0.1,21.9);

	this.instance_8 = new lib.beginner_1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(338.5,1.3,0.731,0.731,0,0,0,0.4,12.1);
	this.instance_8.alpha = 0.199;

	this.macaroon_text_1 = new cjs.Text(":ובעזרתה אפשר להכין את המאפים", "bold 19px 'Gisha'", "#006600");
	this.macaroon_text_1.name = "macaroon_text_1";
	this.macaroon_text_1.textAlign = "right";
	this.macaroon_text_1.lineHeight = 24;
	this.macaroon_text_1.lineWidth = 371;
	this.macaroon_text_1.parent = this;
	this.macaroon_text_1.setTransform(382.2,179.6);

	this.macaroon_text_2 = new cjs.Text("תנור,   מערוך", "19px 'Gisha'", "#006600");
	this.macaroon_text_2.name = "macaroon_text_2";
	this.macaroon_text_2.textAlign = "right";
	this.macaroon_text_2.lineHeight = 24;
	this.macaroon_text_2.lineWidth = 424;
	this.macaroon_text_2.parent = this;
	this.macaroon_text_2.setTransform(362.9,136.6);

	this.macaroon_text_3 = new cjs.Text(":לביצוע טכניקה זו נחוצים הכלים", "bold 19px 'Gisha'", "#006600");
	this.macaroon_text_3.name = "macaroon_text_3";
	this.macaroon_text_3.textAlign = "right";
	this.macaroon_text_3.lineHeight = 24;
	this.macaroon_text_3.lineWidth = 444;
	this.macaroon_text_3.parent = this;
	this.macaroon_text_3.setTransform(383.5,44.3);

	this.macaroon_text_4 = new cjs.Text(":טכניקה זה נחוצה לאופה ברמה", "bold 19px 'Gisha'", "#006600");
	this.macaroon_text_4.name = "macaroon_text_4";
	this.macaroon_text_4.textAlign = "right";
	this.macaroon_text_4.lineHeight = 24;
	this.macaroon_text_4.lineWidth = 287;
	this.macaroon_text_4.parent = this;
	this.macaroon_text_4.setTransform(383.5,-73.6);

	this.macaroon_title = new cjs.Text("אפייה עיוורת", "bold 37px 'Gisha'", "#006600");
	this.macaroon_title.name = "macaroon_title";
	this.macaroon_title.textAlign = "right";
	this.macaroon_title.lineHeight = 45;
	this.macaroon_title.lineWidth = 321;
	this.macaroon_title.parent = this;
	this.macaroon_title.setTransform(383.5,-264);

	this.macaroon_text_5 = new cjs.Text("אפיה של הבצק לבדו לפני המילוי שלו. מטרת התהליך היא לתת לבצק זמן להיאפות ולהפוך לפריך לפני ששופכים לתוכו את הבלילה הנוזלית שעלולה להפוך אותו לרך ומתפרק, דבר שיפגע במרקם הבצק. ראשית מחוררים את הבצק בעזרת מזלג, אח\"כ מניחים על הבצק שתי רצועות של ניילון נצמד בצורת איקס, ועליהן שופכים קטניות בתור משקולת לבצק. סוגרים את קצוות הניילון הנצמד ומכניסים את התבנית למקפיא ל-10 .דק'. מוציאים את התבנית מהמקפיא, מסירים את הניילון, ואופים את הבצק עם הקטניות", "19px 'Gisha'", "#006600");
	this.macaroon_text_5.name = "macaroon_text_5";
	this.macaroon_text_5.textAlign = "right";
	this.macaroon_text_5.lineHeight = 24;
	this.macaroon_text_5.lineWidth = 801;
	this.macaroon_text_5.parent = this;
	this.macaroon_text_5.setTransform(382.2,-213.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.macaroon_text_5},{t:this.macaroon_title},{t:this.macaroon_text_4},{t:this.macaroon_text_3},{t:this.macaroon_text_2},{t:this.macaroon_text_1},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.macaroon_text},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 7
	this.instance_9 = new lib.notebooktechnew();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-67.5,-10.3,1,1,0,0,0,-27.8,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Layer 6
	this.fade_screen = new lib.fade_screen();
	this.fade_screen.parent = this;
	this.fade_screen.setTransform(4.5,-0.3,1,0.997,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.fade_screen).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-539.5,-348.5,1044.1,698);


(lib.HAKTSAFA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.haktsafa05();
	this.instance.parent = this;
	this.instance.setTransform(-419,-101,0.715,0.715);

	this.instance_1 = new lib.matrefa();
	this.instance_1.parent = this;
	this.instance_1.setTransform(343.7,136.9,0.322,0.322,-150);

	this.instance_2 = new lib.ravuch01();
	this.instance_2.parent = this;
	this.instance_2.setTransform(90.9,229,0.208,0.208,-15);

	this.instance_3 = new lib.mixerHQ();
	this.instance_3.parent = this;
	this.instance_3.setTransform(255,71,0.1,0.1);

	this.instance_4 = new lib.kosot01();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-23,212,0.275,0.275);

	this.instance_5 = new lib.Patissier01();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-297,206,0.256,0.256);

	this.instance_6 = new lib.tiramisu01();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-116,221,0.239,0.239);

	this.instance_7 = new lib.Macaroon();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-187,231,0.318,0.318);

	this.instance_8 = new lib.bhushot01();
	this.instance_8.parent = this;
	this.instance_8.setTransform(301,217,0.238,0.238);

	this.instance_9 = new lib.gvina_1("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(226.1,235.8,0.3,0.3,0,0,0,0.4,0);
	this.instance_9.filters = [new cjs.ColorFilter(0.75, 0.75, 0.75, 1, 63.75, 38.25, 12.75, 0)];
	this.instance_9.cache(-104,-84,209,169);

	this.macaroon_text = new cjs.Text("עוגות בחושות,   עוגות גבינה,    בצק רבוך,    קינוחי כוסות,   טירמיסו,    מקרונים,    קרם פטיסייר", "19px 'Gisha'", "#006600");
	this.macaroon_text.name = "macaroon_text";
	this.macaroon_text.textAlign = "right";
	this.macaroon_text.lineHeight = 24;
	this.macaroon_text.lineWidth = 757;
	this.macaroon_text.parent = this;
	this.macaroon_text.setTransform(383.5,262.6);

	this.instance_10 = new lib.medium_1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(210,-22.5,0.748,0.748,0,0,0,0,12);

	this.instance_11 = new lib.pro_1("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(94.7,-31.7,0.715,0.715,0,0,0,0.1,21.9);

	this.instance_12 = new lib.beginner_1("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(338.5,-21.3,0.731,0.731,0,0,0,0.4,12.1);
	this.instance_12.alpha = 0.199;

	this.macaroon_text_1 = new cjs.Text(":ובעזרתה אפשר להכין את המאפים", "bold 19px 'Gisha'", "#006600");
	this.macaroon_text_1.name = "macaroon_text_1";
	this.macaroon_text_1.textAlign = "right";
	this.macaroon_text_1.lineHeight = 24;
	this.macaroon_text_1.lineWidth = 371;
	this.macaroon_text_1.parent = this;
	this.macaroon_text_1.setTransform(382.2,174.1);

	this.macaroon_text_2 = new cjs.Text("מטרפה,    מיקסר", "19px 'Gisha'", "#006600");
	this.macaroon_text_2.name = "macaroon_text_2";
	this.macaroon_text_2.textAlign = "right";
	this.macaroon_text_2.lineHeight = 24;
	this.macaroon_text_2.lineWidth = 453;
	this.macaroon_text_2.parent = this;
	this.macaroon_text_2.setTransform(373.5,138.9,0.917,1);

	this.macaroon_text_3 = new cjs.Text(":לביצוע טכניקה זו נחוצים הכלים", "bold 19px 'Gisha'", "#006600");
	this.macaroon_text_3.name = "macaroon_text_3";
	this.macaroon_text_3.textAlign = "right";
	this.macaroon_text_3.lineHeight = 24;
	this.macaroon_text_3.lineWidth = 444;
	this.macaroon_text_3.parent = this;
	this.macaroon_text_3.setTransform(383.5,38.7);

	this.macaroon_text_4 = new cjs.Text(":טכניקה זה נחוצה לאופה ברמה", "bold 19px 'Gisha'", "#006600");
	this.macaroon_text_4.name = "macaroon_text_4";
	this.macaroon_text_4.textAlign = "right";
	this.macaroon_text_4.lineHeight = 24;
	this.macaroon_text_4.lineWidth = 287;
	this.macaroon_text_4.parent = this;
	this.macaroon_text_4.setTransform(383.5,-106.2);

	this.macaroon_title = new cjs.Text("הקצפה", "bold 37px 'Gisha'", "#006600");
	this.macaroon_title.name = "macaroon_title";
	this.macaroon_title.textAlign = "right";
	this.macaroon_title.lineHeight = 45;
	this.macaroon_title.lineWidth = 321;
	this.macaroon_title.parent = this;
	this.macaroon_title.setTransform(383.5,-264);

	this.macaroon_text_5 = new cjs.Text("טריפה נמרצת במקצף חשמלי או במטרפה ידנית, שמטרתה להכניס בועות אוויר לבלילה, ותוצאותיה משתנות בהתאם להרכב הבלילה. במקרה של הקצפת חלבוני ביצים או שמנת מתוקה, הכנסת האוויר ממש משנה את המרקם – מנוזל לקציפה אוורירית ונוקשה או קצפת. במקרה של הקצפת בלילה העשויה .מחמאה וסוכר, יתקבל קרם אוורירי וחלק", "19px 'Gisha'", "#006600");
	this.macaroon_text_5.name = "macaroon_text_5";
	this.macaroon_text_5.textAlign = "right";
	this.macaroon_text_5.lineHeight = 24;
	this.macaroon_text_5.lineWidth = 769;
	this.macaroon_text_5.parent = this;
	this.macaroon_text_5.setTransform(382.2,-213.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.macaroon_text_5},{t:this.macaroon_title},{t:this.macaroon_text_4},{t:this.macaroon_text_3},{t:this.macaroon_text_2},{t:this.macaroon_text_1},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.macaroon_text},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 3
	this.instance_13 = new lib.notebooktechnew();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-68.5,-8.3,1,1,0,0,0,-27.8,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Layer 2
	this.fade_screen = new lib.fade_screen();
	this.fade_screen.parent = this;
	this.fade_screen.setTransform(4.7,-0.8,1,0.997,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.fade_screen).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-540.5,-349,1045.3,698);


(lib.HAFRADA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("ים", "bold 26px 'Gisha'", "#FFFFFF");
	this.text.textAlign = "right";
	this.text.lineHeight = 32;
	this.text.lineWidth = 102;
	this.text.parent = this;
	this.text.setTransform(-435.2,-20.3);

	this.text_1 = new cjs.Text("טכניקות", "bold 26px 'Gisha'", "#FFFFFF");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 32;
	this.text_1.lineWidth = 102;
	this.text_1.parent = this;
	this.text_1.setTransform(-389.4,162.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4DC480").s().p("AmYDxQhVAAAAiJIAAjPQAAiJBVAAIMxAAQBVAAAACJIAADPQAACJhVAAg");
	this.shape.setTransform(-436.9,180.7);

	this.text_2 = new cjs.Text("ים", "bold 26px 'Gisha'", "#FFFFFF");
	this.text_2.textAlign = "right";
	this.text_2.lineHeight = 32;
	this.text_2.lineWidth = 102;
	this.text_2.parent = this;
	this.text_2.setTransform(-436.8,-204.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B71A1A").s().p("AifDxQgjAAABiJIAAjPQgBiJAjAAIFAAAQAiAAgBCJIAADPQAACJghAAg");
	this.shape_1.setTransform(-450.8,-187.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B59C1").s().p("AifDxQgjAAABiJIAAjPQgBiJAjAAIFAAAQAiAAgBCJIAADPQAACJghAAg");
	this.shape_2.setTransform(-449.7,-1.4);

	this.macaroon_text = new cjs.Text("קאפקייק,  בצק פריך,  עוגות בחושות,  טארט,  עוגות גבינה,   בצק רבוך,  טירמיסו,  מקרונים,  קרם פיטסייר", "19px 'Gisha'", "#006600");
	this.macaroon_text.name = "macaroon_text";
	this.macaroon_text.textAlign = "right";
	this.macaroon_text.lineHeight = 24;
	this.macaroon_text.lineWidth = 795;
	this.macaroon_text.parent = this;
	this.macaroon_text.setTransform(383,259.9);

	this.instance = new lib.Patissier01();
	this.instance.parent = this;
	this.instance.setTransform(-371,204,0.224,0.224);

	this.instance_1 = new lib.tiramisu01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-208,219,0.209,0.209);

	this.instance_2 = new lib.ravuch01();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-110.2,227.6,0.185,0.185,-15);

	this.instance_3 = new lib.Macaroon();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-265,232,0.278,0.278);

	this.instance_4 = new lib.bhushot01();
	this.instance_4.parent = this;
	this.instance_4.setTransform(144,219,0.208,0.208);

	this.instance_5 = new lib.cupcake01();
	this.instance_5.parent = this;
	this.instance_5.setTransform(329,216,0.201,0.201);

	this.instance_6 = new lib.parich();
	this.instance_6.parent = this;
	this.instance_6.setTransform(233,217,0.249,0.249);

	this.instance_7 = new lib.tart2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(53,221,0.215,0.215);

	this.instance_8 = new lib.gvina_1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(2,236.3,0.263,0.263,0,0,0,0.2,0);
	this.instance_8.filters = [new cjs.ColorFilter(0.75, 0.75, 0.75, 1, 63.75, 38.25, 12.75, 0)];
	this.instance_8.cache(-104,-84,209,169);

	this.instance_9 = new lib.hafrada01();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-358,-162);

	this.instance_10 = new lib.medium_1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(210,-22.5,0.748,0.748,0,0,0,0,12);

	this.instance_11 = new lib.pro_1("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(94.7,-31.7,0.715,0.715,0,0,0,0.1,21.9);

	this.instance_12 = new lib.beginner_1("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(338.5,-21.3,0.731,0.731,0,0,0,0.4,12.1);

	this.macaroon_text_1 = new cjs.Text(":ובעזרתה אפשר להכין את המאפים", "bold 19px 'Gisha'", "#006600");
	this.macaroon_text_1.name = "macaroon_text_1";
	this.macaroon_text_1.textAlign = "right";
	this.macaroon_text_1.lineHeight = 24;
	this.macaroon_text_1.lineWidth = 371;
	this.macaroon_text_1.parent = this;
	this.macaroon_text_1.setTransform(382.2,174.1);

	this.macaroon_text_2 = new cjs.Text("ניתן להפריד ביצים במספר שיטות: ע\"י העברת הביצה מחצי קליפה אחד לשני\nתוך הקפדה שרק החלמון יישאר בקליפה והחלבון יטפטף מטה; ע\"י שאיבת החלמון בעזרת בקבוק פלסטיק; או בעזרת כלים מיוחדים להפרדת ביצים", "19px 'Gisha'", "#006600");
	this.macaroon_text_2.name = "macaroon_text_2";
	this.macaroon_text_2.textAlign = "right";
	this.macaroon_text_2.lineHeight = 24;
	this.macaroon_text_2.lineWidth = 607;
	this.macaroon_text_2.parent = this;
	this.macaroon_text_2.setTransform(383,67.2);

	this.macaroon_text_3 = new cjs.Text(":לביצוע טכניקה זו נחוצים הכלים", "bold 19px 'Gisha'", "#006600");
	this.macaroon_text_3.name = "macaroon_text_3";
	this.macaroon_text_3.textAlign = "right";
	this.macaroon_text_3.lineHeight = 24;
	this.macaroon_text_3.lineWidth = 444;
	this.macaroon_text_3.parent = this;
	this.macaroon_text_3.setTransform(383.5,38.7);

	this.macaroon_text_4 = new cjs.Text(":טכניקה זה נחוצה לאופה ברמה", "bold 19px 'Gisha'", "#006600");
	this.macaroon_text_4.name = "macaroon_text_4";
	this.macaroon_text_4.textAlign = "right";
	this.macaroon_text_4.lineHeight = 24;
	this.macaroon_text_4.lineWidth = 287;
	this.macaroon_text_4.parent = this;
	this.macaroon_text_4.setTransform(383.5,-106.2);

	this.macaroon_title = new cjs.Text("הפרדת ביצים", "bold 37px 'Gisha'", "#006600");
	this.macaroon_title.name = "macaroon_title";
	this.macaroon_title.textAlign = "right";
	this.macaroon_title.lineHeight = 45;
	this.macaroon_title.lineWidth = 321;
	this.macaroon_title.parent = this;
	this.macaroon_title.setTransform(383.5,-264);

	this.macaroon_text_5 = new cjs.Text("טכניקה שימושית להכנת תבשילים ודברי מאפה הדורשים שימוש בחלמון לבדו, בחלבון לבדו או שימוש בהם בשלבי הכנה שונים. על מנת להימנע מ\"שבירת\" החלמון השתמשו בביצים בטמפרטורת החדר, שכן .החלמון שבביצים קרות מן המקרר רגיש יותר ועשוי להפגע", "19px 'Gisha'", "#006600");
	this.macaroon_text_5.name = "macaroon_text_5";
	this.macaroon_text_5.textAlign = "right";
	this.macaroon_text_5.lineHeight = 24;
	this.macaroon_text_5.lineWidth = 769;
	this.macaroon_text_5.parent = this;
	this.macaroon_text_5.setTransform(382.2,-213.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#B7A56D").ss(2.4,1,1).p("EhAhgZTMCBDAAAEhAhgghMCBDAAAEhAhgnwMCBDAAAEhAhAnxMCBDAAAEhAhAggMCBDAAAEhAhAZRMCBDAAAEhAhASDMCBDAAAEhAhAK0MCBDAAAEhAhADmMCBDAAAEhAhgDnMCBDAAAEhAhgK2MCBDAAAEhAhgSEMCBDAAA");
	this.shape_3.setTransform(-14.1,-1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(3,1,1).p("EAs9ACmQgkgFgfgUQgPgKgNgNQgBgBgCgCQgMgMgHgMQgbgoAAgzQAAgPADgQQABgDAAgCQAKgtAjgjQAxgxBFAAQBDAAAwAuQACACABABQAWAWAMAaEAz7ACmQg2gHgqgpQgBgBgCgCQgLgMgIgMQgagoAAgzQAAgPADgQQAAgDAAgCQAKgtAjgjQAygxBFAAQBCAAAwAuQACACACABQAWAWALAaAfDCmQglgFgfgUQgPgKgNgNQgBgBgDgCQgKgMgIgMQgKgPgHgQQgKgcAAggQAAgPADgQQABgDAAgCQAKgtAjgjQAxgxBFAAQBDAAAwAuQACACABABQAWAWAMAaEAmAACmQglgFgfgUQgOgKgNgNQgCgBgCgCQgLgMgIgMQgagoAAgzQAAgPADgQQAAgDABgCQAKgtAjgjQAxgxBFAAQBCAAAwAuQACACABABQAXAWAMAaARICmQglgFgfgUQgPgKgNgNQgCgBgCgCQgKgMgIgMQgKgPgHgQQgKgcAAggQAAgPADgQQABgDAAgCQAKgtAjgjQAxgxBFAAQBDAAAwAuQACACABABQAWAWAMAaAYFCmQglgFgfgUQgOgKgNgNQgCgBgCgCQgLgMgIgMQgKgPgGgQQgKgcAAggQAAgPADgQQAAgDABgCQAKgtAjgjQAxgxBFAAQBCAAAwAuQACACACABQAWAWAMAaADMCmQglgFgfgUQgOgKgNgNQgCgBgCgCQgLgMgIgMQgKgPgGgQQgKgcAAggQAAgPADgQQAAgDABgCQAKgtAjgjQAxgxBFAAQBCAAAwAuQACACACABQAWAWAMAaAKKCmQglgFgfgUQgOgKgOgNQgBgBgCgCQgLgMgIgMQgKgPgGgQQgLgcAAggQAAgPADgQQABgDAAgCQAKgtAjgjQAxgxBGAAQBCAAAwAuQACACACABQAWAWAMAaEA6+ACmQg2gHgpgpQgCgBgCgCQgLgMgIgMQgagoAAgzQAAgPACgQQABgDABgCQAKgtAjgjQAwgxBGAAQBCAAAwAuQACACACABQAWAWAMAaEg7bACmQglgFgfgUQgPgKgNgNQgBgBgCgCQgLgMgIgMQgKgPgGgQQgBgDgBgEQgJgZAAgcQAAgPADgQQABgDAAgCQAIgeARgaQAJgNALgLQAxgxBFAAQBDAAAwAuQACACABABQAWAWAMAaEg0eACmQglgFgfgUQgOgKgNgNQgCgBgBgCQgMgMgIgMQgKgPgFgQQgCgDgBgEQgIgZAAgcQAAgPADgQQAAgDABgCQAHgeASgaQAJgNALgLQAxgxBFAAQBCAAAwAuQACACACABQAWAWAMAaAjvCmQglgFgfgUQgPgKgNgNQgBgBgCgCQgLgMgIgMQgKgPgGgQQgLgcAAggQAAgPADgQQABgDAAgCQAHgeASgaQAJgNALgLQAxgxBFAAQBDAAAwAuQACACABABQAWAWAMAaAqtCmQglgFgfgUQgOgKgNgNQgCgBgCgCQgLgMgIgMQgKgPgGgQQgKgcAAggQAAgPADgQQAAgDABgCQAHgeASgaQAJgNALgLQAxgxBFAAQBCAAAwAuQACACACABQAWAWAMAaA4oCmQglgFgfgUQgOgKgNgNQgCgBgCgCQgLgMgIgMQgKgPgGgQQgBgDgBgEQgIgZAAgcQAAgPADgQQAAgDABgCQAHgeASgaQAJgNALgLQAxgxBFAAQBCAAAwAuQACACACABQAWAWAMAaAxqCmQglgFgfgUQgPgKgNgNQgBgBgCgCQgLgMgIgMQgKgPgGgQQgBgDgBgEQgJgZAAgcQAAgPADgQQABgDAAgCQAHgeASgaQAJgNALgLQAxgxBFAAQBDAAAwAuQACACABABQAWAWAMAaA/lCmQglgFgfgUQgPgKgNgNQgBgBgCgCQgLgMgIgMQgKgPgGgQQgBgDgBgEQgJgZAAgcQAAgPADgQQABgDAAgCQAHgeASgaQAJgNALgLQAxgxBFAAQBDAAAwAuQACACABABQAWAWAMAaEgtgACmQglgFgfgUQgPgKgNgNQgBgBgCgCQgLgMgIgMQgKgPgGgQQgBgDgBgEQgIgZAAgcQAAgPACgQQABgDAAgCQAHgeASgaQAJgNALgLQAxgxBFAAQBDAAAwAuQACACACABQAVAWAMAaEgmjACmQglgFgfgUQgOgKgNgNQgCgBgCgCQgKgMgJgMQgKgPgGgQQAAgDgCgEQgIgZAAgcQAAgPADgQQAAgDABgCQAHgeASgaQAJgNALgLQAxgxBFAAQBCAAAwAuQACACACABQAWAWAMAa");
	this.shape_4.setTransform(-14.3,-291.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E3DCBD").s().p("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");
	this.shape_5.setTransform(-18,-274.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2E6A7").s().p("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QAGAQAKAPQgKgPgGgQQgKgbAAghQAAgRACgQQgCAQAAARIAAAAgEgM+gtaQAAAhAKAbQAGAQAKAPQgKgPgGgQQgKgbAAghQAAgRADgQQgDAQAAARIAAAAgEgT7gtaQAAAcAIAZIACAHQAGAQAKAPQgKgPgGgQIgCgHQgIgZAAgcQAAgRACgQQgCAQAAARIAAAAgEga5gtaQAAAcAIAZIACAHQAGAQAKAPQgKgPgGgQIgCgHQgIgZAAgcQAAgRADgQQgDAQAAARIAAAAgEgh2gtaQAAAcAIAZIACAHQAGAQAKAPQgKgPgGgQIgCgHQgIgZAAgcQAAgRACgQQgCAQAAARIAAAAgEgo0gtaQAAAcAIAZIACAHQAGAQAKAPQgKgPgGgQIgCgHQgIgZAAgcQAAgRADgQQgDAQAAARIAAAAgEgvxgtaQAAAcAIAZIACAHQAGAQAKAPQgKgPgGgQIgCgHQgIgZAAgcQAAgRACgQQgCAQAAARIAAAAgEg2vgtaQAAAcAIAZIACAHQAGAQAKAPQgKgPgGgQIgCgHQgIgZAAgcQAAgRADgQQgDAQAAARIAAAAgEg9sgtaQAAAcAIAZIACAHQAGAQAKAPQgKgPgGgQIgCgHQgIgZAAgcQAAgRACgQQgCAQAAARIAAAAgEAc0gt7g");
	this.shape_6.setTransform(-14.2,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.macaroon_text_5},{t:this.macaroon_title},{t:this.macaroon_text_4},{t:this.macaroon_text_3},{t:this.macaroon_text_2},{t:this.macaroon_text_1},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.macaroon_text},{t:this.shape_2},{t:this.shape_1},{t:this.text_2},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

	// Layer 3
	this.fade_screen = new lib.fade_screen();
	this.fade_screen.parent = this;
	this.fade_screen.setTransform(6.5,-0.3,1,0.997,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.fade_screen).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-540.8,-348.5,1047.3,698);


(lib.BENMARIE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.benmarie105();
	this.instance.parent = this;
	this.instance.setTransform(-363,-146,0.688,0.763);

	this.instance_1 = new lib.Patissier01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-179,205,0.251,0.251);

	this.instance_2 = new lib.preline01();
	this.instance_2.parent = this;
	this.instance_2.setTransform(147,225,0.162,0.162);

	this.instance_3 = new lib.Macaroon();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-67,229,0.312,0.312);

	this.instance_4 = new lib.kosot01();
	this.instance_4.parent = this;
	this.instance_4.setTransform(15,215,0.24,0.24);

	this.instance_5 = new lib.cupcake01();
	this.instance_5.parent = this;
	this.instance_5.setTransform(323,203,0.305,0.305);

	this.instance_6 = new lib.marit();
	this.instance_6.parent = this;
	this.instance_6.setTransform(272.8,74.2,0.245,0.245,30);

	this.instance_7 = new lib.gas();
	this.instance_7.parent = this;
	this.instance_7.setTransform(311,86,0.5,0.5);

	this.instance_8 = new lib.gvina_1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(262.5,231.3,0.322,0.322,0,0,0,0.3,0.1);
	this.instance_8.filters = [new cjs.ColorFilter(0.75, 0.75, 0.75, 1, 63.75, 38.25, 12.75, 0)];
	this.instance_8.cache(-104,-84,209,169);

	this.macaroon_text = new cjs.Text("קאפקייק,    עוגות גבינה,   פרלינים,    קינוחי כוסות,     מקרונים,    קרם פטיסייר", "19px 'Gisha'", "#006600");
	this.macaroon_text.name = "macaroon_text";
	this.macaroon_text.textAlign = "right";
	this.macaroon_text.lineHeight = 24;
	this.macaroon_text.lineWidth = 757;
	this.macaroon_text.parent = this;
	this.macaroon_text.setTransform(383.5,263.6);

	this.instance_9 = new lib.medium_1("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(210,-22.5,0.748,0.748,0,0,0,0,12);

	this.instance_10 = new lib.pro_1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(94.7,-31.7,0.715,0.715,0,0,0,0.1,21.9);

	this.instance_11 = new lib.beginner_1("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(338.5,-21.3,0.731,0.731,0,0,0,0.4,12.1);
	this.instance_11.alpha = 0.199;

	this.macaroon_text_1 = new cjs.Text(":ובעזרתה אפשר להכין את המאפים", "bold 19px 'Gisha'", "#006600");
	this.macaroon_text_1.name = "macaroon_text_1";
	this.macaroon_text_1.textAlign = "right";
	this.macaroon_text_1.lineHeight = 24;
	this.macaroon_text_1.lineWidth = 371;
	this.macaroon_text_1.parent = this;
	this.macaroon_text_1.setTransform(382.2,174.1);

	this.macaroon_text_2 = new cjs.Text("כיריים,       מרית", "19px 'Gisha'", "#006600");
	this.macaroon_text_2.name = "macaroon_text_2";
	this.macaroon_text_2.textAlign = "right";
	this.macaroon_text_2.lineHeight = 24;
	this.macaroon_text_2.lineWidth = 435;
	this.macaroon_text_2.parent = this;
	this.macaroon_text_2.setTransform(374,138.9);

	this.macaroon_text_3 = new cjs.Text(":לביצוע טכניקה זו נחוצים הכלים", "bold 19px 'Gisha'", "#006600");
	this.macaroon_text_3.name = "macaroon_text_3";
	this.macaroon_text_3.textAlign = "right";
	this.macaroon_text_3.lineHeight = 24;
	this.macaroon_text_3.lineWidth = 444;
	this.macaroon_text_3.parent = this;
	this.macaroon_text_3.setTransform(383.5,38.7);

	this.macaroon_text_4 = new cjs.Text(":טכניקה זה נחוצה לאופה ברמה", "bold 19px 'Gisha'", "#006600");
	this.macaroon_text_4.name = "macaroon_text_4";
	this.macaroon_text_4.textAlign = "right";
	this.macaroon_text_4.lineHeight = 24;
	this.macaroon_text_4.lineWidth = 287;
	this.macaroon_text_4.parent = this;
	this.macaroon_text_4.setTransform(383.5,-106.2);

	this.macaroon_title = new cjs.Text("בן מארי", "bold 37px 'Gisha'", "#006600");
	this.macaroon_title.name = "macaroon_title";
	this.macaroon_title.textAlign = "right";
	this.macaroon_title.lineHeight = 45;
	this.macaroon_title.lineWidth = 321;
	this.macaroon_title.parent = this;
	this.macaroon_title.setTransform(383.5,-264);

	this.macaroon_text_5 = new cjs.Text("טכניקה שכוללת הנחת קערה מנירוסטה או סיר קטן, מעל סיר גדול ובו מים רותחים, לרוב מבלי לבוא במגע ישירות עם המים, ומשמשת להתכה של מרכיבים. בשיטת התכה זו משתמשים להכנת רטבים והתכת שוקולד וחמאה. היתרון שבהתכת חומרים בסיר בן מארי הוא שחום המים מתיך את החומרים .מבלי לבוא אתם במגע ישיר", "19px 'Gisha'", "#006600");
	this.macaroon_text_5.name = "macaroon_text_5";
	this.macaroon_text_5.textAlign = "right";
	this.macaroon_text_5.lineHeight = 24;
	this.macaroon_text_5.lineWidth = 769;
	this.macaroon_text_5.parent = this;
	this.macaroon_text_5.setTransform(382.2,-213.3);

	this.instance_12 = new lib.notebooktechnew();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-69.6,-9.8,1,1,0,0,0,-27.8,-1.1);

	this.fade_screen = new lib.fade_screen();
	this.fade_screen.parent = this;
	this.fade_screen.setTransform(4.7,-1.3,1,0.997,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fade_screen},{t:this.instance_12},{t:this.macaroon_text_5},{t:this.macaroon_title},{t:this.macaroon_text_4},{t:this.macaroon_text_3},{t:this.macaroon_text_2},{t:this.macaroon_text_1},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.macaroon_text},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-541.6,-349.5,1046.3,698);


// stage content:
(lib.המדריךלאופההחובב = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var wasClicked = 0;
		var beginnerClicked = 0;
		var mediumClicked = 0;
		var proClicked = 0;
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		//initial state = all HOVERS + commands 
		this.click_for_expl.visible = false;
		this.pin.visible = false;
		
		//HIDE V for all techniques 
		this.lisha_H.visible = false;
		this.hafrada_H.visible = false;
		this.benmarie_H.visible = false;
		this.kipul_H.visible = false;
		this.haktsafa_H.visible = false;
		this.ridud_H.visible = false;
		this.iveret_H.visible = false;
		this.ziluf_H.visible = false;
		this.temprur_H.visible = false;
		this.kirmul_H.visible = false;
		
		//HIDE all POP-UPS
		//FOODS
		this.MACAROONS.visible = false;
		this.macaroon_back_btn.visible = false;
		this.preline_back_btn.visible = false;
		this.PRELINE.visible = false;
		this.alim_back_btn.visible = false;
		this.ALIM.visible = false;
		this.cupcake_back_btn.visible = false;
		this.CUPCAKE.visible = false;
		this.kosot_back_btn.visible = false;
		this.KOSOT.visible = false;
		this.metugan_back_btn.visible = false;
		this.METUGAN.visible = false;
		this.ravuch_back_btn.visible = false;
		this.RAVUCH.visible = false;
		this.gvina_back_btn.visible = false;
		this.GVINA.visible = false;
		this.croissant_back_btn.visible = false;
		this.CROISSANT.visible = false;
		this.tart_back_btn.visible = false;
		this.TART.visible = false;
		this.tiramisu_back_btn.visible = false;
		this.TIRAMISU.visible = false;
		this.parich_back_btn.visible = false;
		this.PARICH.visible = false;
		this.lehem_back_btn.visible = false;
		this.LEHEM.visible = false;
		this.bhusha_back_btn.visible = false;
		this.BHUSHA.visible = false;
		this.patissier_back_btn.visible = false;
		this.PATISSIERE.visible = false;
		//TOOLS
		this.MIXER.visible = false;
		this.mixer_back_btn.visible = false;
		this.meabed_back_btn.visible = false;
		this.MEABED.visible = false;
		this.gas_back_btn.visible = false;
		this.GAS.visible = false;
		this.tanur_back_btn.visible = false;
		this.TANUR.visible = false;
		this.zantar_back_btn.visible = false;
		this.ZANTAR.visible = false;
		this.sakit_back_btn.visible = false;
		this.SAKIT.visible = false;
		this.mishkal_back_btn.visible = false;
		this.MISHKAL.visible = false;
		this.mesanenet_back_btn.visible = false;
		this.MESANENET.visible = false;
		this.mida_back_btn.visible = false;
		this.MIDA.visible = false;
		this.matrefa_back_btn.visible = false;
		this.MATREFA.visible = false;
		this.marit_back_btn.visible = false;
		this.MARIT.visible = false;
		this.maaroh_back_btn.visible = false
		this.MAAROH.visible = false;
		this.lisha_back_btn.visible = false
		this.LISHA.visible = false;
		this.ridud_back_btn.visible = false
		this.RIDUD.visible = false;
		this.hafrada_back_btn.visible = false
		this.HAFRADA.visible = false;
		this.benmarie_back_btn.visible = false
		this.BENMARIE.visible = false;
		this.kipul_back_btn.visible = false
		this.KIPUL.visible = false;
		this.iveret_back_btn.visible = false
		this.IVERET.visible = false;
		this.haktsafa_back_btn.visible = false
		this.HAKTSAFA.visible = false;
		this.kirmul_back_btn.visible = false
		this.KIRMUL.visible = false;
		this.ziluf_back_btn.visible = false
		this.ZILUF.visible = false;
		this.temprur_back_btn.visible = false;
		this.TEMPRUR.visible = false;
		
		
		
		//clicking IPUS (timer) - shows all objects, available even after clicking a hat
		this.ipus.addEventListener("click", IPUS.bind(this));
		function IPUS() {
			enableAll.bind(this)();
			wasClicked = 0;
			beginnerClicked = 0;
			mediumClicked = 0;
			proClicked = 0;
			//SHOW all hats
			this.beginner.alpha = 1;
			this.medium.alpha = 1;
			this.pro.alpha = 1;
			//ENABLE all hats
			this.beginner.mouseEnabled = true;
			this.medium.mouseEnabled = true;
			this.pro.mouseEnabled = true;
		
			//HIDE hover,pin commands, show first choose level, or click
			this.click_for_expl.visible = false;
			this.pin.visible = false;
			this.choose_level.visible = true;
			this.or_click.visible = true;
		
			//SHOW all techniques
			this.lisha.alpha = 1;
			this.hafrada.alpha = 1;
			this.benmarie.alpha = 1;
			this.kipul.alpha = 1;
			this.haktsafa.alpha = 1;
			this.ridud.alpha = 1;
			this.iveret.alpha = 1;
			this.ziluf.alpha = 1;
			this.temprur.alpha = 1;
			this.kirmul.alpha = 1;
		
			//HIDE techniques V
			this.lisha_H.visible = false;
			this.hafrada_H.visible = false;
			this.benmarie_H.visible = false;
			this.kipul_H.visible = false;
			this.haktsafa_H.visible = false;
			this.ridud_H.visible = false;
			this.iveret_H.visible = false;
			this.ziluf_H.visible = false;
			this.temprur_H.visible = false;
			this.kirmul_H.visible = false;
		
			//SHOW all tools
			this.matrefa.alpha = 1;
			this.marit.alpha = 1;
			this.tanur.alpha = 1;
			this.mishkal.alpha = 1;
			this.maaroh.alpha = 1;
			this.mida.alpha = 1;
			this.mesanenet.alpha = 1;
			this.mixer.alpha = 1;
			this.meabed.alpha = 1;
			this.gas.alpha = 1;
			this.zantar.alpha = 1;
			this.sakit.alpha = 1;
		
			//SHOW all foods
			this.cupcake.alpha = 1;
			this.parich.alpha = 1;
			this.bhushot.alpha = 1;
			this.gvina.alpha = 1;
			this.metuganim.alpha = 1;
			this.ravuch.alpha = 1;
			this.lehem.alpha = 1;
			this.tiramisu.alpha = 1;
			this.macaroon.alpha = 1;
			this.tart.alpha = 1;
			this.preline.alpha = 1;
			this.croissant.alpha = 1;
			this.kosot.alpha = 1;
			this.alim.alpha = 1;
			this.patissier.alpha = 1;
		}
		
		//hover over BEGINNER fades irrelevant hats + tech+tool+foods
		this.beginner.addEventListener("mouseover", HoverBeginner.bind(this));
		function HoverBeginner() {
			//FADE MED+PRO hats
			this.medium.alpha = 0.2;
			this.pro.alpha = 0.2;
		
			//SHOW pin command, hide or click command
			this.pin.visible = true;
			this.or_click.visible = false;
		
			//SHOW V for relevant techniques, FADE irrelevant techniques
			this.lisha_H.visible = true;
			this.hafrada_H.visible = true;
			this.benmarie.alpha = 0.2;
			this.kipul.alpha = 0.2;
			this.haktsafa.alpha = 0.2;
			this.ridud.alpha = 0.2;
			this.iveret.alpha = 0.2;
			this.ziluf.alpha = 0.2;
			this.temprur.alpha = 0.2;
			this.kirmul.alpha = 0.2;
			//HIDE tools	
			this.maaroh.alpha = 0.2;
			this.mesanenet.alpha = 0.2;
			this.mixer.alpha = 0.2;
			this.meabed.alpha = 0.2;
			this.gas.alpha = 0.2;
			this.zantar.alpha = 0.2;
			this.sakit.alpha = 0.2;
			//HIDE foods
			this.ravuch.alpha = 0.2;
			this.lehem.alpha = 0.2;
			this.tiramisu.alpha = 0.2;
			this.macaroon.alpha = 0.2;
			this.tart.alpha = 0.2;
			this.preline.alpha = 0.2;
			this.croissant.alpha = 0.2;
			this.kosot.alpha = 0.2;
			this.alim.alpha = 0.2;
			this.patissier.alpha = 0.2;
			console.log("mouse hover over beginnner");
		}
		
		//moving mouse off BEGINNER - ShowAll - function which shows all objects; only works if wasClicked is 0 (if hat was not CLICKED)
		this.beginner.addEventListener("mouseout", ShowAll.bind(this));
		function ShowAll() {
			if (wasClicked == 0) {
				this.beginner.alpha = 1;
				this.medium.alpha = 1;
				this.pro.alpha = 1;
				//hide pin command
				this.pin.visible = false;
				this.or_click.visible = true;
		
				//techniques
				this.lisha.alpha = 1;
				this.hafrada.alpha = 1;
				this.benmarie.alpha = 1;
				this.kipul.alpha = 1;
				this.haktsafa.alpha = 1;
				this.ridud.alpha = 1;
				this.iveret.alpha = 1;
				this.ziluf.alpha = 1;
				this.temprur.alpha = 1;
				this.kirmul.alpha = 1;
		
				//hide techniques V
				this.lisha_H.visible = false;
				this.hafrada_H.visible = false;
				this.benmarie_H.visible = false;
				this.kipul_H.visible = false;
				this.haktsafa_H.visible = false;
				this.ridud_H.visible = false;
				this.iveret_H.visible = false;
				this.ziluf_H.visible = false;
				this.temprur_H.visible = false;
				this.kirmul_H.visible = false;
		
				//tools
				this.matrefa.alpha = 1;
				this.marit.alpha = 1;
				this.tanur.alpha = 1;
				this.mishkal.alpha = 1;
				this.maaroh.alpha = 1;
				this.mida.alpha = 1;
				this.mesanenet.alpha = 1;
				this.mixer.alpha = 1;
				this.meabed.alpha = 1;
				this.gas.alpha = 1;
				this.zantar.alpha = 1;
				this.sakit.alpha = 1;
		
				//foods
				this.cupcake.alpha = 1;
				this.parich.alpha = 1;
				this.bhushot.alpha = 1;
				this.gvina.alpha = 1;
				this.metuganim.alpha = 1;
				this.ravuch.alpha = 1;
				this.lehem.alpha = 1;
				this.tiramisu.alpha = 1;
				this.macaroon.alpha = 1;
				this.tart.alpha = 1;
				this.preline.alpha = 1;
				this.croissant.alpha = 1;
				this.kosot.alpha = 1;
				this.alim.alpha = 1;
				this.patissier.alpha = 1;
			}
		}
		
		//clicking BEGINNER "locks" fade state for irrelevant food+tools+tech 
		this.beginner.addEventListener("click", ClickBeginner.bind(this));
		function ClickBeginner() {
			wasClicked = 1;
			beginnerClicked = 1;
			//hide "hover command", show "click command"
			this.or_click.visible = false;
			this.pin.visible = false;
			this.click_for_expl.visible = true;
		
			//hide MED+PRO hats + disable mouse click
			this.medium.alpha = 0.2;
			this.pro.alpha = 0.2;
			this.medium.mouseEnabled = false;
			this.pro.mouseEnabled = false;
		
			//fade techniques
			this.lisha_H.visible = true;
			this.hafrada_H.visible = true;
			this.benmarie.alpha = 0.2;
			this.kipul.alpha = 0.2;
			this.haktsafa.alpha = 0.2;
			this.ridud.alpha = 0.2;
			this.iveret.alpha = 0.2;
			this.ziluf.alpha = 0.2;
			this.temprur.alpha = 0.2;
			this.kirmul.alpha = 0.2;
			//disable mouse click for techniques
			this.benmarie.mouseEnabled = false;
			this.kipul.mouseEnabled = false;
			this.haktsafa.mouseEnabled = false;
			this.ridud.mouseEnabled = false;
			this.iveret.mouseEnabled = false;
			this.ziluf.mouseEnabled = false;
			this.temprur.mouseEnabled = false;
			this.kirmul.mouseEnabled = false;
		
			//fade tools
			this.maaroh.alpha = 0.2;
			this.mesanenet.alpha = 0.2;
			this.mixer.alpha = 0.2;
			this.meabed.alpha = 0.2;
			this.gas.alpha = 0.2;
			this.zantar.alpha = 0.2;
			this.sakit.alpha = 0.2;
			//disable mouse tools
			this.maaroh.mouseEnabled = false;
			this.mesanenet.mouseEnabled = false;
			this.mixer.mouseEnabled = false;
			this.meabed.mouseEnabled = false;
			this.gas.mouseEnabled = false;
			this.zantar.mouseEnabled = false;
			this.sakit.mouseEnabled = false;
		
			//hide foods
			this.ravuch.alpha = 0.2;
			this.lehem.alpha = 0.2;
			this.tiramisu.alpha = 0.2;
			this.macaroon.alpha = 0.2;
			this.tart.alpha = 0.2;
			this.preline.alpha = 0.2;
			this.croissant.alpha = 0.2;
			this.kosot.alpha = 0.2;
			this.alim.alpha = 0.2;
			this.patissier.alpha = 0.2;
			//disable mouse foods
			this.ravuch.mouseEnabled = false;
			this.lehem.mouseEnabled = false;
			this.tiramisu.mouseEnabled = false;
			this.macaroon.mouseEnabled = false;
			this.tart.mouseEnabled = false;
			this.preline.mouseEnabled = false;
			this.croissant.mouseEnabled = false;
			this.kosot.mouseEnabled = false;
			this.alim.mouseEnabled = false;
			this.patissier.mouseEnabled = false;
		
			console.log("mouse clicked beginnner");
		}
		
		//hovering over MEDIUM hides irrelevant tech+tool+foods and shows relevant HOVER states
		this.medium.addEventListener("mouseover", HoverMedium.bind(this));
		function HoverMedium() {
			wasClicked == 0;
			//SHOW pin command, hide or click command
			this.pin.visible = true;
			this.or_click.visible = false;
			//HIDE hats
			this.beginner.alpha = 0.2;
			this.pro.alpha = 0.2;
		
			//techniques
			this.ziluf.alpha = 0.2;
			this.temprur.alpha = 0.2;
			this.kirmul.alpha = 0.2;
			//tools	
			this.gas.alpha = 0.2;
			this.zantar.alpha = 0.2;
			this.sakit.alpha = 0.2;
			//foods
			this.preline.alpha = 0.2;
			this.croissant.alpha = 0.2;
			this.kosot.alpha = 0.2;
			this.alim.alpha = 0.2;
			this.patissier.alpha = 0.2;
			console.log("mouse hover over MED");
		
			//SHOW techniques
			this.lisha_H.visible = true;
			this.hafrada_H.visible = true;
			this.benmarie_H.visible = true;
			this.kipul_H.visible = true;
			this.haktsafa_H.visible = true;
			this.ridud_H.visible = true;
			this.iveret_H.visible = true;
		}
		
		//moving mouse off MEDIUM - ShowAll - function which shows all objects
		this.medium.addEventListener("mouseout", ShowAll.bind(this));
		
		//clicking MEDIUM "locks" fade state for irrelevant food+tools+tech 
		this.medium.addEventListener("click", ClickMedium.bind(this));
		function ClickMedium() {
			wasClicked = 1;
			mediumClicked = 1;
			//hide "hover command", show "click command"
			this.or_click.visible = false;
			this.pin.visible = false;
			this.click_for_expl.visible = true;
		
			//HIDE hats + disable mouse click
			this.beginner.alpha = 0.2;
			this.pro.alpha = 0.2;
			this.beginner.mouseEnabled = false;
			this.pro.mouseEnabled = false;
		
			//fade techniques
			this.ziluf.alpha = 0.2;
			this.temprur.alpha = 0.2;
			this.kirmul.alpha = 0.2;
			//disable mouse techniques
			this.ziluf.mouseEnabled = false;
			this.temprur.mouseEnabled = false;
			this.kirmul.mouseEnabled = false;
		
			//fade tools	
			this.gas.alpha = 0.2;
			this.zantar.alpha = 0.2;
			this.sakit.alpha = 0.2;
			//disable mouse tools
			this.gas.mouseEnabled = false;
			this.zantar.mouseEnabled = false;
			this.sakit.mouseEnabled = false;
			//fade foods
			this.preline.alpha = 0.2;
			this.croissant.alpha = 0.2;
			this.kosot.alpha = 0.2;
			this.alim.alpha = 0.2;
			this.patissier.alpha = 0.2;
			//disable mouse foods
			this.preline.mouseEnabled = false;
			this.croissant.mouseEnabled = false;
			this.kosot.mouseEnabled = false;
			this.alim.mouseEnabled = false;
			this.patissier.mouseEnabled = false;
			console.log("mouse clicked on MED");
		
			//SHOW V
			//techniques
			this.lisha_H.visible = true;
			this.hafrada_H.visible = true;
			this.benmarie_H.visible = true;
			this.kipul_H.visible = true;
			this.haktsafa_H.visible = true;
			this.ridud_H.visible = true;
			this.iveret_H.visible = true;
		}
		
		//hovering over PRO shows HOVER states for everything XD
		this.pro.addEventListener("mouseover", HoverPro.bind(this));
		function HoverPro() {
			wasClicked == 0;
			//SHOW pin command, hide or click command
			this.pin.visible = true;
			this.or_click.visible = false;
		
			//HIDE hats
			this.medium.alpha = 0.2;
			this.beginner.alpha = 0.2;
		
			//show techniques
			this.lisha_H.visible = true;
			this.hafrada_H.visible = true;
			this.benmarie_H.visible = true;
			this.kipul_H.visible = true;
			this.haktsafa_H.visible = true;
			this.ridud_H.visible = true;
			this.iveret_H.visible = true;
			this.ziluf_H.visible = true;
			this.temprur_H.visible = true;
			this.kirmul_H.visible = true;
		}
		
		//moving mouse off PRO - ShowAll - function which shows all elements
		this.pro.addEventListener("mouseout", ShowAll.bind(this));
		
		//clicking PRO "locks" fade state for irrelevant food+tools+tech 
		this.pro.addEventListener("click", ClickPro.bind(this));
		function ClickPro() {
			wasClicked = 1;
			proClicked = 1;
			//hide "hover command", show "click command"
			this.or_click.visible = false;
			this.pin.visible = false;
			this.click_for_expl.visible = true;
		
			//HIDE hats + disable mouse click
			this.medium.alpha = 0.2;
			this.beginner.alpha = 0.2;
			this.beginner.mouseEnabled = false;
			this.medium.mouseEnabled = false;
		
			//show all techniques V
			this.lisha_H.visible = true;
			this.hafrada_H.visible = true;
			this.benmarie_H.visible = true;
			this.kipul_H.visible = true;
			this.haktsafa_H.visible = true;
			this.ridud_H.visible = true;
			this.iveret_H.visible = true;
			this.ziluf_H.visible = true;
			this.temprur_H.visible = true;
			this.kirmul_H.visible = true;
		}
		
		
		//function to DISABLE all clicks (all hats+foods+tools+techcniques) to use when opening NOTEBOOK
		function disableAll() {
			//hats
			this.beginner.mouseEnabled = false;
			this.medium.mouseEnabled = false;
			this.pro.mouseEnabled = false;
			//tools
			this.matrefa.mouseEnabled = false;
			this.marit.mouseEnabled = false;
			this.tanur.mouseEnabled = false;
			this.mishkal.mouseEnabled = false;
			this.maaroh.mouseEnabled = false;
			this.mida.mouseEnabled = false;
			this.mesanenet.mouseEnabled = false;
			this.mixer.mouseEnabled = false;
			this.meabed.mouseEnabled = false;
			this.gas.mouseEnabled = false;
			this.zantar.mouseEnabled = false;
			this.sakit.mouseEnabled = false;
			//foods
			this.cupcake.mouseEnabled = false;
			this.parich.mouseEnabled = false;
			this.bhushot.mouseEnabled = false;
			this.gvina.mouseEnabled = false;
			this.metuganim.mouseEnabled = false;
			this.ravuch.mouseEnabled = false;
			this.lehem.mouseEnabled = false;
			this.tiramisu.mouseEnabled = false;
			this.macaroon.mouseEnabled = false;
			this.tart.mouseEnabled = false;
			this.preline.mouseEnabled = false;
			this.croissant.mouseEnabled = false;
			this.kosot.mouseEnabled = false;
			this.alim.mouseEnabled = false;
			this.patissier.mouseEnabled = false;
			//techniques
			this.lisha.mouseEnabled = false;
			this.hafrada.mouseEnabled = false;
			this.benmarie.mouseEnabled = false;
			this.kipul.mouseEnabled = false;
			this.haktsafa.mouseEnabled = false;
			this.ridud.mouseEnabled = false;
			this.iveret.mouseEnabled = false;
			this.ziluf.mouseEnabled = false;
			this.temprur.mouseEnabled = false;
			this.kirmul.mouseEnabled = false;
		}
		
		//function to ENABLE all clicks
		function enableAll() {
			//hats
			this.beginner.mouseEnabled = true;
			this.medium.mouseEnabled = true;
			this.pro.mouseEnabled = true;
			//tools
			this.matrefa.mouseEnabled = true;
			this.marit.mouseEnabled = true;
			this.tanur.mouseEnabled = true;
			this.mishkal.mouseEnabled = true;
			this.maaroh.mouseEnabled = true;
			this.mida.mouseEnabled = true;
			this.mesanenet.mouseEnabled = true;
			this.mixer.mouseEnabled = true;
			this.meabed.mouseEnabled = true;
			this.gas.mouseEnabled = true;
			this.zantar.mouseEnabled = true;
			this.sakit.mouseEnabled = true;
			//foods
			this.cupcake.mouseEnabled = true;
			this.parich.mouseEnabled = true;
			this.bhushot.mouseEnabled = true;
			this.gvina.mouseEnabled = true;
			this.metuganim.mouseEnabled = true;
			this.ravuch.mouseEnabled = true;
			this.lehem.mouseEnabled = true;
			this.tiramisu.mouseEnabled = true;
			this.macaroon.mouseEnabled = true;
			this.tart.mouseEnabled = true;
			this.preline.mouseEnabled = true;
			this.croissant.mouseEnabled = true;
			this.kosot.mouseEnabled = true;
			this.alim.mouseEnabled = true;
			this.patissier.mouseEnabled = true;
			//techniques
			this.lisha.mouseEnabled = true;
			this.hafrada.mouseEnabled = true;
			this.benmarie.mouseEnabled = true;
			this.kipul.mouseEnabled = true;
			this.haktsafa.mouseEnabled = true;
			this.ridud.mouseEnabled = true;
			this.iveret.mouseEnabled = true;
			this.ziluf.mouseEnabled = true;
			this.temprur.mouseEnabled = true;
			this.kirmul.mouseEnabled = true;
		}
		
		//function to enable click for objects for BEGINNER LEVEL
		function beginnerEnable() {
			//tools
			this.matrefa.mouseEnabled = true;
			this.marit.mouseEnabled = true;
			this.tanur.mouseEnabled = true;
			this.mishkal.mouseEnabled = true;
			this.mida.mouseEnabled = true;
			//foods
			this.cupcake.mouseEnabled = true;
			this.parich.mouseEnabled = true;
			this.bhushot.mouseEnabled = true;
			this.gvina.mouseEnabled = true;
			this.metuganim.mouseEnabled = true;
			//techniques
			this.lisha.mouseEnabled = true;
			this.hafrada.mouseEnabled = true;
		}
		
		//function to enable click for objects for MEDIUM LEVEL (which includes BEGINNER objects)
		function mediumEnable() {
			//tools
			this.matrefa.mouseEnabled = true;
			this.marit.mouseEnabled = true;
			this.tanur.mouseEnabled = true;
			this.mishkal.mouseEnabled = true;
			this.maaroh.mouseEnabled = true;
			this.mida.mouseEnabled = true;
			this.mesanenet.mouseEnabled = true;
			this.mixer.mouseEnabled = true;
			this.meabed.mouseEnabled = true;
			//foods
			this.cupcake.mouseEnabled = true;
			this.parich.mouseEnabled = true;
			this.bhushot.mouseEnabled = true;
			this.gvina.mouseEnabled = true;
			this.metuganim.mouseEnabled = true;
			this.ravuch.mouseEnabled = true;
			this.lehem.mouseEnabled = true;
			this.tiramisu.mouseEnabled = true;
			this.macaroon.mouseEnabled = true;
			this.tart.mouseEnabled = true;
			//techniques
			this.lisha.mouseEnabled = true;
			this.hafrada.mouseEnabled = true;
			this.benmarie.mouseEnabled = true;
			this.kipul.mouseEnabled = true;
			this.haktsafa.mouseEnabled = true;
			this.ridud.mouseEnabled = true;
			this.iveret.mouseEnabled = true;
		}
		
		//function to enable click for objects for PRO LEVEL (includes BEGINNER+MEDIUM) (basically it's just "enableALL" func but without the HATS)
		function proEnable() {
			//tools
			this.matrefa.mouseEnabled = true;
			this.marit.mouseEnabled = true;
			this.tanur.mouseEnabled = true;
			this.mishkal.mouseEnabled = true;
			this.maaroh.mouseEnabled = true;
			this.mida.mouseEnabled = true;
			this.mesanenet.mouseEnabled = true;
			this.mixer.mouseEnabled = true;
			this.meabed.mouseEnabled = true;
			this.gas.mouseEnabled = true;
			this.zantar.mouseEnabled = true;
			this.sakit.mouseEnabled = true;
			//foods
			this.cupcake.mouseEnabled = true;
			this.parich.mouseEnabled = true;
			this.bhushot.mouseEnabled = true;
			this.gvina.mouseEnabled = true;
			this.metuganim.mouseEnabled = true;
			this.ravuch.mouseEnabled = true;
			this.lehem.mouseEnabled = true;
			this.tiramisu.mouseEnabled = true;
			this.macaroon.mouseEnabled = true;
			this.tart.mouseEnabled = true;
			this.preline.mouseEnabled = true;
			this.croissant.mouseEnabled = true;
			this.kosot.mouseEnabled = true;
			this.alim.mouseEnabled = true;
			this.patissier.mouseEnabled = true;
			//techniques
			this.lisha.mouseEnabled = true;
			this.hafrada.mouseEnabled = true;
			this.benmarie.mouseEnabled = true;
			this.kipul.mouseEnabled = true;
			this.haktsafa.mouseEnabled = true;
			this.ridud.mouseEnabled = true;
			this.iveret.mouseEnabled = true;
			this.ziluf.mouseEnabled = true;
			this.temprur.mouseEnabled = true;
			this.kirmul.mouseEnabled = true;
		}
		
		//    ------------- clicking FOODS    -------------
		
		this.macaroon.addEventListener("click", NotebookMacaroon.bind(this));
		function NotebookMacaroon() {
			disableAll.bind(this)();
			this.macaroon_back_btn.visible = true;
			this.MACAROONS.visible = true;
			console.log("macaroon pop up visible");
		}
		
		//clicking BACK BUTTON (timer) HIDES notebook page
		this.macaroon_back_btn.addEventListener("click", NotebookMacaroonHide.bind(this));
		function NotebookMacaroonHide() {
			this.MACAROONS.visible = false;
			this.macaroon_back_btn.visible = false;
			if (mediumClicked == 1) {
				mediumEnable.bind(this)();
			} else if (proClicked == 1) {
				proEnable.bind(this)();
			} else {
				enableAll.bind(this)();
			}
			console.log("macaroon_back_btn clicked");
		}
		
		this.preline.addEventListener("click", NotebookPreline.bind(this));
		function NotebookPreline() {
			disableAll.bind(this)();
			this.preline_back_btn.visible = true;
			this.PRELINE.visible = true;
		}
		
		this.preline_back_btn.addEventListener("click", NotebookPrelineHide.bind(this));
		function NotebookPrelineHide() {
			this.preline_back_btn.visible = false;
			this.PRELINE.visible = false;
			if (proClicked == 1) {
				proEnable.bind(this)();
			} else {
				enableAll.bind(this)();
			}
		}
		
		this.alim.addEventListener("click", NotebookAlim.bind(this));
		function NotebookAlim() {
			disableAll.bind(this)();
			this.alim_back_btn.visible = true;
			this.ALIM.visible = true;
		}
		this.alim_back_btn.addEventListener("click", NotebookAlimHide.bind(this));
		function NotebookAlimHide() {
			this.alim_back_btn.visible = false;
			this.ALIM.visible = false;
			if (proClicked==1){proEnable.bind(this)(); }
			else {enableAll.bind(this)();}
		}
		
		this.cupcake.addEventListener("click", NotebookCupcake.bind(this));
		function NotebookCupcake() {
			disableAll.bind(this)();
			this.cupcake_back_btn.visible = true;
			this.CUPCAKE.visible = true;
		}
		
		this.cupcake_back_btn.addEventListener("click", NotebookCupcakeHide.bind(this));
		function NotebookCupcakeHide() {
			this.cupcake_back_btn.visible = false;
			this.CUPCAKE.visible = false;
			if (beginnerClicked == 1) {
				beginnerEnable.bind(this)();
			} else if (mediumClicked == 1) {
				mediumEnable.bind(this)();
			} else if (proClicked == 1) {
				proEnable.bind(this)();
			} else {
				enableAll.bind(this)();
			}
		
		}
		
		this.kosot.addEventListener("click", NotebookKosot.bind(this));
		function NotebookKosot() {
			disableAll.bind(this)();
			this.kosot_back_btn.visible = true;
			this.KOSOT.visible = true;
		}
		
		this.kosot_back_btn.addEventListener("click", NotebookKosotHide.bind(this));
		function NotebookKosotHide() {
			this.kosot_back_btn.visible = false;
			this.KOSOT.visible = false;
			if (proClicked==1){proEnable.bind(this)(); }
			else {enableAll.bind(this)();}
		}
		
		this.metuganim.addEventListener("click", NotebookMetugan.bind(this));
		function NotebookMetugan() {
			disableAll.bind(this)();
			this.metugan_back_btn.visible = true;
			this.METUGAN.visible = true;
		}
		
		this.metugan_back_btn.addEventListener("click", NotebookMetuganHide.bind(this));
		function NotebookMetuganHide() {
			this.metugan_back_btn.visible = false;
			this.METUGAN.visible = false;
			if (beginnerClicked == 1) {
				beginnerEnable.bind(this)();
			} else if (mediumClicked == 1) {
				mediumEnable.bind(this)();
			} else if (proClicked == 1) {
				proEnable.bind(this)();
			} else {
				enableAll.bind(this)();
			}
		}
		
		this.ravuch.addEventListener("click", Notebookravuch.bind(this));
		function Notebookravuch() {
			disableAll.bind(this)();
			this.ravuch_back_btn.visible = true;
			this.RAVUCH.visible = true;
		}
		
		this.ravuch_back_btn.addEventListener("click", NotebookravuchHide.bind(this));
		function NotebookravuchHide() {
			this.ravuch_back_btn.visible = false;
			this.RAVUCH.visible = false;
			if (mediumClicked == 1) {
				mediumEnable.bind(this)();
			} else if (proClicked == 1) {
				proEnable.bind(this)();
			} else {
				enableAll.bind(this)();
			}
		}
		
		this.croissant.addEventListener("click", Notebookcroissant.bind(this));
		function Notebookcroissant() {
			disableAll.bind(this)();
			this.croissant_back_btn.visible = true;
			this.CROISSANT.visible = true;
		}
		
		this.croissant_back_btn.addEventListener("click", NotebookcroissantHide.bind(this));
		function NotebookcroissantHide() {
			this.croissant_back_btn.visible = false;
			this.CROISSANT.visible = false;
			if (proClicked==1){proEnable.bind(this)(); }
			else {enableAll.bind(this)();}
		}
		
		this.gvina.addEventListener("click", Notebookgvina.bind(this));
		function Notebookgvina() {
			disableAll.bind(this)();
			this.gvina_back_btn.visible = true;
			this.GVINA.visible = true;
		}
		
		this.gvina_back_btn.addEventListener("click", NotebookgvinaHide.bind(this));
		function NotebookgvinaHide() {
			this.gvina_back_btn.visible = false;
			this.GVINA.visible = false;
			if (beginnerClicked == 1) {
				beginnerEnable.bind(this)();
			} else if (mediumClicked == 1) {
				mediumEnable.bind(this)();
			} else if (proClicked == 1) {
				proEnable.bind(this)();
			} else {
				enableAll.bind(this)();
			}
		}
		
		this.tart.addEventListener("click", Notebooktart.bind(this));
		function Notebooktart() {
			disableAll.bind(this)();
			this.tart_back_btn.visible = true;
			this.TART.visible = true;
		}
		
		this.tart_back_btn.addEventListener("click", NotebooktartHide.bind(this));
		function NotebooktartHide() {
			this.tart_back_btn.visible = false;
			this.TART.visible = false;
			if (mediumClicked == 1) {
				mediumEnable.bind(this)();
			} else if (proClicked == 1) {
				proEnable.bind(this)();
			} else {
				enableAll.bind(this)();
			}
		}
		
		this.tiramisu.addEventListener("click", Notebooktiramisu.bind(this));
		function Notebooktiramisu() {
			disableAll.bind(this)();
			this.tiramisu_back_btn.visible = true;
			this.TIRAMISU.visible = true;
		}
		
		this.tiramisu_back_btn.addEventListener("click", NotebooktiramisuHide.bind(this));
		function NotebooktiramisuHide() {
			this.tiramisu_back_btn.visible = false;
			this.TIRAMISU.visible = false;
			if (mediumClicked == 1) {
				mediumEnable.bind(this)();
			} else if (proClicked == 1) {
				proEnable.bind(this)();
			} else {
				enableAll.bind(this)();
			}
		}
		
		this.parich.addEventListener("click", Notebookparich.bind(this));
		function Notebookparich() {
			disableAll.bind(this)();
			this.parich_back_btn.visible = true;
			this.PARICH.visible = true;
		}
		
		this.parich_back_btn.addEventListener("click", NotebookparichHide.bind(this));
		function NotebookparichHide() {
			this.parich_back_btn.visible = false;
			this.PARICH.visible = false;
			if (beginnerClicked == 1) {
				beginnerEnable.bind(this)();
			} else if (mediumClicked == 1) {
				mediumEnable.bind(this)();
			} else if (proClicked == 1) {
				proEnable.bind(this)();
			} else {
				enableAll.bind(this)();
			}
		}
		
		this.lehem.addEventListener("click", Notebooklehem.bind(this));
		function Notebooklehem() {
			disableAll.bind(this)();
			this.lehem_back_btn.visible = true;
			this.LEHEM.visible = true;
		}
		
		this.lehem_back_btn.addEventListener("click", NotebooklehemHide.bind(this));
		function NotebooklehemHide() {
			this.lehem_back_btn.visible = false;
			this.LEHEM.visible = false;
			if (mediumClicked == 1) {
				mediumEnable.bind(this)();
			} else if (proClicked == 1) {
				proEnable.bind(this)();
			} else {
				enableAll.bind(this)();
			}
		}
		
		this.bhushot.addEventListener("click", Notebookbhushot.bind(this));
		function Notebookbhushot() {
			disableAll.bind(this)();
			this.bhusha_back_btn.visible = true;
			this.BHUSHA.visible = true;
		}
		
		this.bhusha_back_btn.addEventListener("click", NotebookbhushotHide.bind(this));
		function NotebookbhushotHide() {
			this.bhusha_back_btn.visible = false;
			this.BHUSHA.visible = false;
			if (beginnerClicked == 1) {
				beginnerEnable.bind(this)();
			} else if (mediumClicked == 1) {
				mediumEnable.bind(this)();
			} else if (proClicked == 1) {
				proEnable.bind(this)();
			} else {
				enableAll.bind(this)();
			}
		}
		
		this.patissier.addEventListener("click", Notebookpatissier.bind(this));
		function Notebookpatissier() {
			disableAll.bind(this)();
			this.patissier_back_btn.visible = true;
			this.PATISSIERE.visible = true;
		}
		
		this.patissier_back_btn.addEventListener("click", NotebookpatissierHide.bind(this));
		function NotebookpatissierHide() {
			this.patissier_back_btn.visible = false;
			this.PATISSIERE.visible = false;
			if (proClicked==1){proEnable.bind(this)(); }
			else {enableAll.bind(this)();}
		}
		
		//--------------- CLICKING TOOLS ------------
		
		this.mixer.addEventListener("click", Notebookmixer.bind(this));
		function Notebookmixer() {
			disableAll.bind(this)();
			this.mixer_back_btn.visible = true;
			this.MIXER.visible = true;
		}
		
		this.mixer_back_btn.addEventListener("click", NotebookmixerHide.bind(this));
		function NotebookmixerHide() {
			this.mixer_back_btn.visible = false;
			this.MIXER.visible = false;
			if (mediumClicked == 1) {
				mediumEnable.bind(this)();
			} else if (proClicked == 1) {
				proEnable.bind(this)();
			} else {
				enableAll.bind(this)();
			}
		}
		
		this.meabed.addEventListener("click", Notebookmeabed.bind(this));
		function Notebookmeabed() {
			disableAll.bind(this)();
			this.meabed_back_btn.visible = true;
			this.MEABED.visible = true;
		}
		
		this.meabed_back_btn.addEventListener("click", NotebookmeabedHide.bind(this));
		function NotebookmeabedHide() {
			this.meabed_back_btn.visible = false;
			this.MEABED.visible = false;
			if (mediumClicked == 1) {
				mediumEnable.bind(this)();
			} else if (proClicked == 1) {
				proEnable.bind(this)();
			} else {
				enableAll.bind(this)();
			}
		}
		
		this.gas.addEventListener("click", Notebookgas.bind(this));
		function Notebookgas() {
			disableAll.bind(this)();
			this.gas_back_btn.visible = true;
			this.GAS.visible = true;
		}
		
		this.gas_back_btn.addEventListener("click", NotebookgasHide.bind(this));
		function NotebookgasHide() {
			this.gas_back_btn.visible = false;
			this.GAS.visible = false;
			if (proClicked == 1) {
				proEnable.bind(this)();
			} else {
				enableAll.bind(this)();
			}
		}
		
		this.tanur.addEventListener("click", Notebooktanur.bind(this));
		function Notebooktanur() {
			disableAll.bind(this)();
			this.tanur_back_btn.visible = true;
			this.TANUR.visible = true;
		}
		
		this.tanur_back_btn.addEventListener("click", NotebooktanurHide.bind(this));
		function NotebooktanurHide() {
			this.tanur_back_btn.visible = false;
			this.TANUR.visible = false;
			if (beginnerClicked == 1) {
				beginnerEnable.bind(this)();
			} else if (mediumClicked == 1) {
				mediumEnable.bind(this)();
			} else if (proClicked == 1) {
				proEnable.bind(this)();
			} else {
				enableAll.bind(this)();
			}
		}
		
		this.zantar.addEventListener("click", Notebookzantar.bind(this));
		function Notebookzantar() {
			disableAll.bind(this)();
			this.zantar_back_btn.visible = true;
			this.ZANTAR.visible = true;
		}
		
		this.zantar_back_btn.addEventListener("click", NotebookzantarHide.bind(this));
		function NotebookzantarHide() {
			this.zantar_back_btn.visible = false;
			this.ZANTAR.visible = false;
			if (proClicked == 1) {
				proEnable.bind(this)();
			} else {
				enableAll.bind(this)();
			}
		}
		
		
		this.sakit.addEventListener("click", Notebooksakit.bind(this));
		function Notebooksakit() {
			disableAll.bind(this)();
			this.sakit_back_btn.visible = true;
			this.SAKIT.visible = true;
		}
		
		this.sakit_back_btn.addEventListener("click", NotebooksakitHide.bind(this));
		function NotebooksakitHide() {
			this.sakit_back_btn.visible = false;
			this.SAKIT.visible = false;
			if (proClicked == 1) {
				proEnable.bind(this)();
			} else {
				enableAll.bind(this)();
			}
		}
		
		this.mishkal.addEventListener("click", Notebookmishkal.bind(this));
		function Notebookmishkal() {
			disableAll.bind(this)();
			this.mishkal_back_btn.visible = true;
			this.MISHKAL.visible = true;
		}
		
		this.mishkal_back_btn.addEventListener("click", NotebookmishkalHide.bind(this));
		function NotebookmishkalHide() {
			this.mishkal_back_btn.visible = false;
			this.MISHKAL.visible = false;
			if (beginnerClicked == 1) {
				beginnerEnable.bind(this)();
			} else if (mediumClicked == 1) {
				mediumEnable.bind(this)();
			} else if (proClicked == 1) {
				proEnable.bind(this)();
			} else {
				enableAll.bind(this)();
			}
		}
		
		
		this.mesanenet.addEventListener("click", Notebookmesanenet.bind(this));
		function Notebookmesanenet() {
			disableAll.bind(this)();
			this.mesanenet_back_btn.visible = true;
			this.MESANENET.visible = true;
		}
		
		this.mesanenet_back_btn.addEventListener("click", NotebookmesanenetHide.bind(this));
		function NotebookmesanenetHide() {
			this.mesanenet_back_btn.visible = false;
			this.MESANENET.visible = false;
			if (mediumClicked == 1) {
				mediumEnable.bind(this)();
			} else if (proClicked == 1) {
				proEnable.bind(this)();
			} else {
				enableAll.bind(this)();
			}
		}
		
		this.mida.addEventListener("click", Notebookmida.bind(this));
		function Notebookmida() {
			disableAll.bind(this)();
			this.mida_back_btn.visible = true;
			this.MIDA.visible = true;
		}
		
		this.mida_back_btn.addEventListener("click", NotebookmidaHide.bind(this));
		function NotebookmidaHide() {
			this.mida_back_btn.visible = false;
			this.MIDA.visible = false;
			if (beginnerClicked == 1) {
				beginnerEnable.bind(this)();
			} else if (mediumClicked == 1) {
				mediumEnable.bind(this)();
			} else if (proClicked == 1) {
				proEnable.bind(this)();
			} else {
				enableAll.bind(this)();
			}
		}
		
		this.matrefa.addEventListener("click", Notebookmatrefa.bind(this));
		function Notebookmatrefa() {
			disableAll.bind(this)();
			this.matrefa_back_btn.visible = true;
			this.MATREFA.visible = true;
		}
		
		this.matrefa_back_btn.addEventListener("click", NotebookmatrefaHide.bind(this));
		function NotebookmatrefaHide() {
			this.matrefa_back_btn.visible = false;
			this.MATREFA.visible = false;
			if (beginnerClicked == 1) {
				beginnerEnable.bind(this)();
			} else if (mediumClicked == 1) {
				mediumEnable.bind(this)();
			} else if (proClicked == 1) {
				proEnable.bind(this)();
			} else {
				enableAll.bind(this)();
			}
		}
		
		this.marit.addEventListener("click", Notebookmarit.bind(this));
		function Notebookmarit() {
			disableAll.bind(this)();
			this.marit_back_btn.visible = true;
			this.MARIT.visible = true;
		}
		
		this.marit_back_btn.addEventListener("click", NotebookmaritHide.bind(this));
		function NotebookmaritHide() {
			this.marit_back_btn.visible = false;
			this.MARIT.visible = false;
			if (beginnerClicked == 1) {
				beginnerEnable.bind(this)();
			} else if (mediumClicked == 1) {
				mediumEnable.bind(this)();
			} else if (proClicked == 1) {
				proEnable.bind(this)();
			} else {
				enableAll.bind(this)();
			}
		}
		
		this.maaroh.addEventListener("click", Notebookmaaroh.bind(this));
		function Notebookmaaroh() {
			disableAll.bind(this)();
			this.maaroh_back_btn.visible = true;
			this.MAAROH.visible = true;
		}
		
		this.maaroh_back_btn.addEventListener("click", NotebookmaarohHide.bind(this));
		function NotebookmaarohHide() {
			this.maaroh_back_btn.visible = false;
			this.MAAROH.visible = false;
			if (mediumClicked == 1) {
				mediumEnable.bind(this)();
			} else if (proClicked == 1) {
				proEnable.bind(this)();
			} else {
				enableAll.bind(this)();
			}
		}
		
		//TECHNIQUES
		this.lisha.addEventListener("click", Notebooklisha.bind(this));
		function Notebooklisha() {
			disableAll.bind(this)();
			this.lisha_back_btn.visible = true;
			this.LISHA.visible = true;
		}
		
		this.lisha_back_btn.addEventListener("click", NotebooklishaHide.bind(this));
		function NotebooklishaHide() {
			this.lisha_back_btn.visible = false;
			this.LISHA.visible = false;
			if (beginnerClicked == 1) {
				beginnerEnable.bind(this)();
			} else if (mediumClicked == 1) {
				mediumEnable.bind(this)();
			} else if (proClicked == 1) {
				proEnable.bind(this)();
			} else {
				enableAll.bind(this)();
			}
		}
		
		this.ridud.addEventListener("click", Notebookridud.bind(this));
		function Notebookridud() {
			disableAll.bind(this)();
			this.ridud_back_btn.visible = true;
			this.RIDUD.visible = true;
		}
		
		this.ridud_back_btn.addEventListener("click", NotebookridudHide.bind(this));
		function NotebookridudHide() {
			this.ridud_back_btn.visible = false;
			this.RIDUD.visible = false;
			if (mediumClicked == 1) {
				mediumEnable.bind(this)();
			} else if (proClicked == 1) {
				proEnable.bind(this)();
			} else {
				enableAll.bind(this)();
			}
		}
		
		this.hafrada.addEventListener("click", Notebookhafrada.bind(this));
		function Notebookhafrada() {
			disableAll.bind(this)();
			this.hafrada_back_btn.visible = true;
			this.HAFRADA.visible = true;
		}
		
		this.hafrada_back_btn.addEventListener("click", NotebookhafradaHide.bind(this));
		function NotebookhafradaHide() {
			this.hafrada_back_btn.visible = false;
			this.HAFRADA.visible = false;
			if (beginnerClicked == 1) {
				beginnerEnable.bind(this)();
			} else if (mediumClicked == 1) {
				mediumEnable.bind(this)();
			} else if (proClicked == 1) {
				proEnable.bind(this)();
			} else {
				enableAll.bind(this)();
			}
		}
		
		this.benmarie.addEventListener("click", Notebookbenmarie.bind(this));
		function Notebookbenmarie() {
			disableAll.bind(this)();
			this.benmarie_back_btn.visible = true;
			this.BENMARIE.visible = true;
		}
		
		this.benmarie_back_btn.addEventListener("click", NotebookbenmarieHide.bind(this));
		function NotebookbenmarieHide() {
			this.benmarie_back_btn.visible = false;
			this.BENMARIE.visible = false;
			if (mediumClicked == 1) {
				mediumEnable.bind(this)();
			} else if (proClicked == 1) {
				proEnable.bind(this)();
			} else {
				enableAll.bind(this)();
			}
		}
		
		this.kipul.addEventListener("click", Notebookkipul.bind(this));
		function Notebookkipul() {
			disableAll.bind(this)();
			this.kipul_back_btn.visible = true;
			this.KIPUL.visible = true;
		}
		
		this.kipul_back_btn.addEventListener("click", NotebookkipulHide.bind(this));
		function NotebookkipulHide() {
			this.kipul_back_btn.visible = false;
			this.KIPUL.visible = false;
			if (mediumClicked == 1) {
				mediumEnable.bind(this)();
			} else if (proClicked == 1) {
				proEnable.bind(this)();
			} else {
				enableAll.bind(this)();
			}
		}
		
		this.iveret.addEventListener("click", Notebookiveret.bind(this));
		function Notebookiveret() {
			disableAll.bind(this)();
			this.iveret_back_btn.visible = true;
			this.IVERET.visible = true;
		}
		
		this.iveret_back_btn.addEventListener("click", NotebookiveretHide.bind(this));
		function NotebookiveretHide() {
			this.iveret_back_btn.visible = false;
			this.IVERET.visible = false;
			if (mediumClicked == 1) {
				mediumEnable.bind(this)();
			} else if (proClicked == 1) {
				proEnable.bind(this)();
			} else {
				enableAll.bind(this)();
			}
		}
		
		this.haktsafa.addEventListener("click", Notebookhaktsafa.bind(this));
		function Notebookhaktsafa() {
			disableAll.bind(this)();
			this.haktsafa_back_btn.visible = true;
			this.HAKTSAFA.visible = true;
		}
		
		this.haktsafa_back_btn.addEventListener("click", NotebookhaktsafaHide.bind(this));
		function NotebookhaktsafaHide() {
			this.haktsafa_back_btn.visible = false;
			this.HAKTSAFA.visible = false;
			if (mediumClicked == 1) {
				mediumEnable.bind(this)();
			} else if (proClicked == 1) {
				proEnable.bind(this)();
			} else {
				enableAll.bind(this)();
			}
		}
		
		this.kirmul.addEventListener("click", Notebookkirmul.bind(this));
		function Notebookkirmul() {
			disableAll.bind(this)();
			this.kirmul_back_btn.visible = true;
			this.KIRMUL.visible = true;
		}
		
		this.kirmul_back_btn.addEventListener("click", NotebookkirmulHide.bind(this));
		function NotebookkirmulHide() {
			this.kirmul_back_btn.visible = false;
			this.KIRMUL.visible = false;
			if (proClicked == 1) {
				proEnable.bind(this)();
			} else {
				enableAll.bind(this)();
			}
		}
		
		this.ziluf.addEventListener("click", Notebookziluf.bind(this));
		function Notebookziluf() {
			disableAll.bind(this)();
			this.ziluf_back_btn.visible = true;
			this.ZILUF.visible = true;
		}
		
		this.ziluf_back_btn.addEventListener("click", NotebookzilufHide.bind(this));
		function NotebookzilufHide() {
			this.ziluf_back_btn.visible = false;
			this.ZILUF.visible = false;
			if (proClicked == 1) {
				proEnable.bind(this)();
			} else {
				enableAll.bind(this)();
			}
		}
		
		this.temprur.addEventListener("click", Notebooktemprur.bind(this));
		function Notebooktemprur() {
			disableAll.bind(this)();	
			this.temprur_back_btn.visible = true;
			this.TEMPRUR.visible = true;
		}
		
		this.temprur_back_btn.addEventListener("click", NotebooktemprurHide.bind(this));
		function NotebooktemprurHide() {
			this.temprur_back_btn.visible = false;
			this.TEMPRUR.visible = false;
			if (proClicked == 1) {
				proEnable.bind(this)();
			} else {
				enableAll.bind(this)();
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// TEMPRUR
	this.temprur_back_btn = new lib.timerback();
	this.temprur_back_btn.parent = this;
	this.temprur_back_btn.setTransform(928.1,147.5,0.369,0.368,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.temprur_back_btn, 0, 1, 1);

	this.TEMPRUR = new lib.TEMPRUR();
	this.TEMPRUR.parent = this;
	this.TEMPRUR.setTransform(499.7,349.9,1,1,0,0,0,5.7,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.TEMPRUR},{t:this.temprur_back_btn}]}).wait(1));

	// ZILUF
	this.ziluf_back_btn = new lib.timerback();
	this.ziluf_back_btn.parent = this;
	this.ziluf_back_btn.setTransform(928.1,147.5,0.369,0.368,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.ziluf_back_btn, 0, 1, 1);

	this.ZILUF = new lib.ZILUF();
	this.ZILUF.parent = this;
	this.ZILUF.setTransform(500.2,348.5,1,1,0,0,0,4.7,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ZILUF},{t:this.ziluf_back_btn}]}).wait(1));

	// KIRMUL
	this.kirmul_back_btn = new lib.timerback();
	this.kirmul_back_btn.parent = this;
	this.kirmul_back_btn.setTransform(928.1,147.5,0.369,0.368,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.kirmul_back_btn, 0, 1, 1);

	this.KIRMUL = new lib.KIRMUL();
	this.KIRMUL.parent = this;
	this.KIRMUL.setTransform(500.8,349.6,1,1,0,0,0,4.7,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.KIRMUL},{t:this.kirmul_back_btn}]}).wait(1));

	// HAKTSAFA
	this.haktsafa_back_btn = new lib.timerback();
	this.haktsafa_back_btn.parent = this;
	this.haktsafa_back_btn.setTransform(928.1,147.5,0.369,0.368,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.haktsafa_back_btn, 0, 1, 1);

	this.HAKTSAFA = new lib.HAKTSAFA();
	this.HAKTSAFA.parent = this;
	this.HAKTSAFA.setTransform(500.4,349,1,1,0,0,0,4.7,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.HAKTSAFA},{t:this.haktsafa_back_btn}]}).wait(1));

	// RIDUD
	this.ridud_back_btn = new lib.timerback();
	this.ridud_back_btn.parent = this;
	this.ridud_back_btn.setTransform(928.1,147.5,0.369,0.368,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.ridud_back_btn, 0, 1, 1);

	this.RIDUD = new lib.RIDUD();
	this.RIDUD.parent = this;
	this.RIDUD.setTransform(499,349.8,1,1,0,0,0,4.7,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.RIDUD},{t:this.ridud_back_btn}]}).wait(1));

	// KIPUL
	this.kipul_back_btn = new lib.timerback();
	this.kipul_back_btn.parent = this;
	this.kipul_back_btn.setTransform(928.1,147.5,0.369,0.368,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.kipul_back_btn, 0, 1, 1);

	this.KIPUL = new lib.KIPUL();
	this.KIPUL.parent = this;
	this.KIPUL.setTransform(500,349.6,1,1,0,0,0,4.7,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.KIPUL},{t:this.kipul_back_btn}]}).wait(1));

	// IVERET
	this.iveret_back_btn = new lib.timerback();
	this.iveret_back_btn.parent = this;
	this.iveret_back_btn.setTransform(928.1,147.5,0.369,0.368,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.iveret_back_btn, 0, 1, 1);

	this.IVERET = new lib.IVERET();
	this.IVERET.parent = this;
	this.IVERET.setTransform(500.4,350.6,1,1,0,0,0,4.7,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.IVERET},{t:this.iveret_back_btn}]}).wait(1));

	// BEN MARIE
	this.benmarie_back_btn = new lib.timerback();
	this.benmarie_back_btn.parent = this;
	this.benmarie_back_btn.setTransform(928.1,147.5,0.369,0.368,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.benmarie_back_btn, 0, 1, 1);

	this.BENMARIE = new lib.BENMARIE();
	this.BENMARIE.parent = this;
	this.BENMARIE.setTransform(499.7,349.2,1,1,0,0,0,4.7,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.BENMARIE},{t:this.benmarie_back_btn}]}).wait(1));

	// HAFRADA
	this.hafrada_back_btn = new lib.timerback();
	this.hafrada_back_btn.parent = this;
	this.hafrada_back_btn.setTransform(928.1,147.5,0.369,0.368,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.hafrada_back_btn, 0, 1, 1);

	this.HAFRADA = new lib.HAFRADA();
	this.HAFRADA.parent = this;
	this.HAFRADA.setTransform(501,317.9,1,1,0,0,0,4.7,-32.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.HAFRADA},{t:this.hafrada_back_btn}]}).wait(1));

	// LISHA
	this.lisha_back_btn = new lib.timerback();
	this.lisha_back_btn.parent = this;
	this.lisha_back_btn.setTransform(928.1,147.5,0.369,0.368,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.lisha_back_btn, 0, 1, 1);

	this.LISHA = new lib.LISHA();
	this.LISHA.parent = this;
	this.LISHA.setTransform(500,349,1,1,0,0,0,4.7,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.LISHA},{t:this.lisha_back_btn}]}).wait(1));

	// MAAROH
	this.maaroh_back_btn = new lib.timerback();
	this.maaroh_back_btn.parent = this;
	this.maaroh_back_btn.setTransform(928.1,147.5,0.369,0.368,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.maaroh_back_btn, 0, 1, 1);

	this.MAAROH = new lib.MAAROH();
	this.MAAROH.parent = this;
	this.MAAROH.setTransform(500,349,1,1,0,0,0,4.7,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.MAAROH},{t:this.maaroh_back_btn}]}).wait(1));

	// MARIT
	this.marit_back_btn = new lib.timerback();
	this.marit_back_btn.parent = this;
	this.marit_back_btn.setTransform(928.1,147.5,0.369,0.368,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.marit_back_btn, 0, 1, 1);

	this.MARIT = new lib.MARiT();
	this.MARIT.parent = this;
	this.MARIT.setTransform(500.8,350.8,1,1,0,0,0,4.7,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.MARIT},{t:this.marit_back_btn}]}).wait(1));

	// MATREFA
	this.matrefa_back_btn = new lib.timerback();
	this.matrefa_back_btn.parent = this;
	this.matrefa_back_btn.setTransform(928.1,147.5,0.369,0.368,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.matrefa_back_btn, 0, 1, 1);

	this.MATREFA = new lib.MATREFA();
	this.MATREFA.parent = this;
	this.MATREFA.setTransform(499.4,349.8,1,1,0,0,0,4.7,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.MATREFA},{t:this.matrefa_back_btn}]}).wait(1));

	// MIDA
	this.mida_back_btn = new lib.timerback();
	this.mida_back_btn.parent = this;
	this.mida_back_btn.setTransform(928.1,147.5,0.369,0.368,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.mida_back_btn, 0, 1, 1);

	this.MIDA = new lib.MIDA();
	this.MIDA.parent = this;
	this.MIDA.setTransform(499.8,350.5,1,1,0,0,0,4.7,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.MIDA},{t:this.mida_back_btn}]}).wait(1));

	// MESANENET
	this.mesanenet_back_btn = new lib.timerback();
	this.mesanenet_back_btn.parent = this;
	this.mesanenet_back_btn.setTransform(928.1,147.5,0.369,0.368,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.mesanenet_back_btn, 0, 1, 1);

	this.MESANENET = new lib.MESANENET();
	this.MESANENET.parent = this;
	this.MESANENET.setTransform(500.2,350.2,1,1,0,0,0,4.7,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.MESANENET},{t:this.mesanenet_back_btn}]}).wait(1));

	// MISHKAL
	this.mishkal_back_btn = new lib.timerback();
	this.mishkal_back_btn.parent = this;
	this.mishkal_back_btn.setTransform(928.1,147.5,0.369,0.368,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.mishkal_back_btn, 0, 1, 1);

	this.MISHKAL = new lib.MISHKAL();
	this.MISHKAL.parent = this;
	this.MISHKAL.setTransform(499.7,351.3,1,1,0,0,0,4.7,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.MISHKAL},{t:this.mishkal_back_btn}]}).wait(1));

	// SAKIT
	this.sakit_back_btn = new lib.timerback();
	this.sakit_back_btn.parent = this;
	this.sakit_back_btn.setTransform(928.1,147.5,0.369,0.368,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.sakit_back_btn, 0, 1, 1);

	this.SAKIT = new lib.SAKIT();
	this.SAKIT.parent = this;
	this.SAKIT.setTransform(499.7,349.9,1,1,0,0,0,4.7,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.SAKIT},{t:this.sakit_back_btn}]}).wait(1));

	// ZANTAR
	this.zantar_back_btn = new lib.timerback();
	this.zantar_back_btn.parent = this;
	this.zantar_back_btn.setTransform(928.1,147.5,0.369,0.368,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.zantar_back_btn, 0, 1, 1);

	this.ZANTAR = new lib.ZANTAR();
	this.ZANTAR.parent = this;
	this.ZANTAR.setTransform(499.9,350.5,1,1,0,0,0,4.7,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ZANTAR},{t:this.zantar_back_btn}]}).wait(1));

	// TANUR
	this.tanur_back_btn = new lib.timerback();
	this.tanur_back_btn.parent = this;
	this.tanur_back_btn.setTransform(928.1,147.5,0.369,0.368,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.tanur_back_btn, 0, 1, 1);

	this.TANUR = new lib.TANUR();
	this.TANUR.parent = this;
	this.TANUR.setTransform(499.5,349.9,1,1,0,0,0,4.7,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.TANUR},{t:this.tanur_back_btn}]}).wait(1));

	// GAS
	this.gas_back_btn = new lib.timerback();
	this.gas_back_btn.parent = this;
	this.gas_back_btn.setTransform(928.1,147.5,0.369,0.368,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.gas_back_btn, 0, 1, 1);

	this.GAS = new lib.GAS();
	this.GAS.parent = this;
	this.GAS.setTransform(499.7,349,1,1,0,0,0,4.7,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.GAS},{t:this.gas_back_btn}]}).wait(1));

	// MEABED
	this.meabed_back_btn = new lib.timerback();
	this.meabed_back_btn.parent = this;
	this.meabed_back_btn.setTransform(928.1,147.5,0.369,0.368,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.meabed_back_btn, 0, 1, 1);

	this.MEABED = new lib.MEABED();
	this.MEABED.parent = this;
	this.MEABED.setTransform(500.2,350.1,1,1,0,0,0,4.7,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.MEABED},{t:this.meabed_back_btn}]}).wait(1));

	// MIXER
	this.mixer_back_btn = new lib.timerback();
	this.mixer_back_btn.parent = this;
	this.mixer_back_btn.setTransform(928.1,147.5,0.369,0.368,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.mixer_back_btn, 0, 1, 1);

	this.MIXER = new lib.MIXER();
	this.MIXER.parent = this;
	this.MIXER.setTransform(1417.7,350.3,1,1,0,0,0,922.9,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.MIXER},{t:this.mixer_back_btn}]}).wait(1));

	// PATISSIERE
	this.patissier_back_btn = new lib.timerback();
	this.patissier_back_btn.parent = this;
	this.patissier_back_btn.setTransform(928.1,147.5,0.369,0.368,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.patissier_back_btn, 0, 1, 1);

	this.PATISSIERE = new lib.PATISSIERE();
	this.PATISSIERE.parent = this;
	this.PATISSIERE.setTransform(499.4,350.4,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.PATISSIERE},{t:this.patissier_back_btn}]}).wait(1));

	// BHUSHA
	this.bhusha_back_btn = new lib.timerback();
	this.bhusha_back_btn.parent = this;
	this.bhusha_back_btn.setTransform(928.1,147.5,0.369,0.368,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.bhusha_back_btn, 0, 1, 1);

	this.BHUSHA = new lib.BHUSHA();
	this.BHUSHA.parent = this;
	this.BHUSHA.setTransform(500,349,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.BHUSHA},{t:this.bhusha_back_btn}]}).wait(1));

	// LECHEM
	this.lehem_back_btn = new lib.timerback();
	this.lehem_back_btn.parent = this;
	this.lehem_back_btn.setTransform(928.1,147.5,0.369,0.368,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.lehem_back_btn, 0, 1, 1);

	this.LEHEM = new lib.LEHEM();
	this.LEHEM.parent = this;
	this.LEHEM.setTransform(499.6,350.4,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.LEHEM},{t:this.lehem_back_btn}]}).wait(1));

	// PARICH
	this.parich_back_btn = new lib.timerback();
	this.parich_back_btn.parent = this;
	this.parich_back_btn.setTransform(928.1,147.5,0.369,0.368,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.parich_back_btn, 0, 1, 1);

	this.PARICH = new lib.PARICH();
	this.PARICH.parent = this;
	this.PARICH.setTransform(499.6,349,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.PARICH},{t:this.parich_back_btn}]}).wait(1));

	// TIRAMISU
	this.tiramisu_back_btn = new lib.timerback();
	this.tiramisu_back_btn.parent = this;
	this.tiramisu_back_btn.setTransform(928.1,147.5,0.369,0.368,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.tiramisu_back_btn, 0, 1, 1);

	this.TIRAMISU = new lib.TIRAMISU();
	this.TIRAMISU.parent = this;
	this.TIRAMISU.setTransform(500,349.1,1,1,0,0,0,-9.7,6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.TIRAMISU},{t:this.tiramisu_back_btn}]}).wait(1));

	// TART
	this.tart_back_btn = new lib.timerback();
	this.tart_back_btn.parent = this;
	this.tart_back_btn.setTransform(928.1,147.5,0.369,0.368,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.tart_back_btn, 0, 1, 1);

	this.TART = new lib.TART();
	this.TART.parent = this;
	this.TART.setTransform(500.1,349,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.TART},{t:this.tart_back_btn}]}).wait(1));

	// GVINA
	this.gvina_back_btn = new lib.timerback();
	this.gvina_back_btn.parent = this;
	this.gvina_back_btn.setTransform(928.1,147.5,0.369,0.368,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.gvina_back_btn, 0, 1, 1);

	this.GVINA = new lib.GVINA();
	this.GVINA.parent = this;
	this.GVINA.setTransform(500,349,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.GVINA},{t:this.gvina_back_btn}]}).wait(1));

	// CROISSANT
	this.croissant_back_btn = new lib.timerback();
	this.croissant_back_btn.parent = this;
	this.croissant_back_btn.setTransform(928.1,147.5,0.369,0.368,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.croissant_back_btn, 0, 1, 1);

	this.CROISSANT = new lib.CROISSANT();
	this.CROISSANT.parent = this;
	this.CROISSANT.setTransform(499.5,349,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.CROISSANT},{t:this.croissant_back_btn}]}).wait(1));

	// RAVUCH
	this.ravuch_back_btn = new lib.timerback();
	this.ravuch_back_btn.parent = this;
	this.ravuch_back_btn.setTransform(928.1,147.5,0.369,0.368,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.ravuch_back_btn, 0, 1, 1);

	this.RAVUCH = new lib.RAVUCH();
	this.RAVUCH.parent = this;
	this.RAVUCH.setTransform(500.6,349.7,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.RAVUCH},{t:this.ravuch_back_btn}]}).wait(1));

	// METUGAN
	this.metugan_back_btn = new lib.timerback();
	this.metugan_back_btn.parent = this;
	this.metugan_back_btn.setTransform(928.1,147.5,0.369,0.368,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.metugan_back_btn, 0, 1, 1);

	this.METUGAN = new lib.METUGAN();
	this.METUGAN.parent = this;
	this.METUGAN.setTransform(499.6,350.4,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.METUGAN},{t:this.metugan_back_btn}]}).wait(1));

	// KOSOT
	this.kosot_back_btn = new lib.timerback();
	this.kosot_back_btn.parent = this;
	this.kosot_back_btn.setTransform(928.1,147.5,0.369,0.368,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.kosot_back_btn, 0, 1, 1);

	this.KOSOT = new lib.KOSOT();
	this.KOSOT.parent = this;
	this.KOSOT.setTransform(500,349.2,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.KOSOT},{t:this.kosot_back_btn}]}).wait(1));

	// CUPCAKE
	this.cupcake_back_btn = new lib.timerback();
	this.cupcake_back_btn.parent = this;
	this.cupcake_back_btn.setTransform(928.1,147.5,0.369,0.368,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.cupcake_back_btn, 0, 1, 1);

	this.CUPCAKE = new lib.CUPCAKE();
	this.CUPCAKE.parent = this;
	this.CUPCAKE.setTransform(500,349,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.CUPCAKE},{t:this.cupcake_back_btn}]}).wait(1));

	// ALIM
	this.alim_back_btn = new lib.timerback();
	this.alim_back_btn.parent = this;
	this.alim_back_btn.setTransform(928.1,147.5,0.369,0.368,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.alim_back_btn, 0, 1, 1);

	this.ALIM = new lib.ALIM();
	this.ALIM.parent = this;
	this.ALIM.setTransform(496,350.2,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ALIM},{t:this.alim_back_btn}]}).wait(1));

	// PRELINE
	this.preline_back_btn = new lib.timerback();
	this.preline_back_btn.parent = this;
	this.preline_back_btn.setTransform(928.1,147.5,0.369,0.368,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.preline_back_btn, 0, 1, 1);

	this.PRELINE = new lib.PRELINE();
	this.PRELINE.parent = this;
	this.PRELINE.setTransform(228.2,362.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.PRELINE},{t:this.preline_back_btn}]}).wait(1));

	// MACAROON
	this.macaroon_back_btn = new lib.timerback();
	this.macaroon_back_btn.parent = this;
	this.macaroon_back_btn.setTransform(928.1,147.3,0.369,0.368,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.macaroon_back_btn, 0, 1, 1);

	this.MACAROONS = new lib.MACAROONS();
	this.MACAROONS.parent = this;
	this.MACAROONS.setTransform(499.1,348.9,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.MACAROONS},{t:this.macaroon_back_btn}]}).wait(1));

	// foods
	this.text = new cjs.Text(":מאפים שאפשר להכין", "bold 20px 'Gisha'");
	this.text.textAlign = "right";
	this.text.lineHeight = 25;
	this.text.lineWidth = 212;
	this.text.parent = this;
	this.text.setTransform(805.5,255.3);

	this.patissier = new lib.patissier();
	this.patissier.parent = this;
	this.patissier.setTransform(723.5,333.3,0.423,0.423);
	new cjs.ButtonHelper(this.patissier, 0, 1, 1);

	this.tart = new lib.tart();
	this.tart.parent = this;
	this.tart.setTransform(931.9,445.5,0.553,0.451,0,0,0,0.2,0.1);
	new cjs.ButtonHelper(this.tart, 0, 1, 1);

	this.croissant = new lib.croissant_1();
	this.croissant.parent = this;
	this.croissant.setTransform(838.2,398.1,0.369,0.369,0,-15,165,-0.2,0.4);
	new cjs.ButtonHelper(this.croissant, 0, 1, 1);

	this.metuganim = new lib.metuganim_1();
	this.metuganim.parent = this;
	this.metuganim.setTransform(944.9,394.6,0.227,0.227,0,0,-2.2);
	new cjs.ButtonHelper(this.metuganim, 0, 1, 1);

	this.ravuch = new lib.ravuch();
	this.ravuch.parent = this;
	this.ravuch.setTransform(898.8,395.7,0.238,0.238,-15);
	new cjs.ButtonHelper(this.ravuch, 0, 1, 1);

	this.parich = new lib.parich_1();
	this.parich.parent = this;
	this.parich.setTransform(737.9,446.5,0.542,0.542,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.parich, 0, 1, 1);

	this.tiramisu = new lib.tiramisu();
	this.tiramisu.parent = this;
	this.tiramisu.setTransform(836.5,453.3,0.321,0.321);
	new cjs.ButtonHelper(this.tiramisu, 0, 1, 1);

	this.gvina = new lib.gvina_1();
	this.gvina.parent = this;
	this.gvina.setTransform(777.5,392.6,0.383,0.383,0,15,-165);
	new cjs.ButtonHelper(this.gvina, 0, 1, 1);

	this.kosot = new lib.kosot();
	this.kosot.parent = this;
	this.kosot.setTransform(803.8,323.4,0.269,0.269,0,0,-0.6);
	new cjs.ButtonHelper(this.kosot, 0, 1, 1);

	this.preline = new lib.Preline();
	this.preline.parent = this;
	this.preline.setTransform(846.7,257.4,0.151,0.151,0,0,0,0.4,0.4);
	new cjs.ButtonHelper(this.preline, 0, 1, 1);

	this.macaroon = new lib.macaroon();
	this.macaroon.parent = this;
	this.macaroon.setTransform(880.6,253.5,0.372,0.372);
	new cjs.ButtonHelper(this.macaroon, 0, 1, 1);

	this.cupcake = new lib.cupcake_1();
	this.cupcake.parent = this;
	this.cupcake.setTransform(859.4,321.7,0.314,0.315,0,0,0,4.3,0.5);
	new cjs.ButtonHelper(this.cupcake, 0, 1, 1);

	this.alim = new lib.alim();
	this.alim.parent = this;
	this.alim.setTransform(914.7,325.6,0.331,0.305);
	new cjs.ButtonHelper(this.alim, 0, 1, 1);

	this.lehem = new lib.lehem_1();
	this.lehem.parent = this;
	this.lehem.setTransform(608.8,457.3,0.779,0.611,0,-5.7,174.2);
	new cjs.ButtonHelper(this.lehem, 0, 1, 1);

	this.bhushot = new lib.bhushot();
	this.bhushot.parent = this;
	this.bhushot.setTransform(645.3,343.7,0.488,0.387);
	new cjs.ButtonHelper(this.bhushot, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#865539").ss(1,1,1).p("AszhDIZxAAIgKCHI5xAAg");
	this.shape.setTransform(678.5,360.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#865539").s().p("As8BEIAKiHIZvAAIgJCHg");
	this.shape_1.setTransform(678.5,360.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.bhushot},{t:this.lehem},{t:this.alim},{t:this.cupcake},{t:this.macaroon},{t:this.preline},{t:this.kosot},{t:this.gvina},{t:this.tiramisu},{t:this.parich},{t:this.ravuch},{t:this.metuganim},{t:this.croissant},{t:this.tart},{t:this.patissier},{t:this.text}]}).wait(1));

	// tools
	this.mixer = new lib.mixer();
	this.mixer.parent = this;
	this.mixer.setTransform(427.4,390.7,0.344,0.344,0,0,180,0,0.1);
	new cjs.ButtonHelper(this.mixer, 0, 1, 1);

	this.zantar = new lib.zantar_1();
	this.zantar.parent = this;
	this.zantar.setTransform(95.2,457.6,0.151,0.151);
	new cjs.ButtonHelper(this.zantar, 0, 1, 1);

	this.sakit = new lib.sakit();
	this.sakit.parent = this;
	this.sakit.setTransform(174.1,266.3,0.316,0.316);
	new cjs.ButtonHelper(this.sakit, 0, 1, 1);

	this.mishkal = new lib.mishkal_1();
	this.mishkal.parent = this;
	this.mishkal.setTransform(40.9,431.4,0.605,0.605,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.mishkal, 0, 1, 1);

	this.gas = new lib.gas_1();
	this.gas.parent = this;
	this.gas.setTransform(263.6,463.7,1.197,1.018,0,1.6,0,0.1,0.1);
	new cjs.ButtonHelper(this.gas, 0, 1, 1);

	this.tanur = new lib.tanur_1();
	this.tanur.parent = this;
	this.tanur.setTransform(260.9,593.5,1.036,0.926,0,0,0,0.1,0.3);
	new cjs.ButtonHelper(this.tanur, 0, 1, 1);

	this.mida = new lib.mida();
	this.mida.parent = this;
	this.mida.setTransform(154.9,259.5,0.283,0.283,-60,0,0,-0.3,-0.1);
	new cjs.ButtonHelper(this.mida, 0, 1, 1);

	this.mesanenet = new lib.mesanenet_1();
	this.mesanenet.parent = this;
	this.mesanenet.setTransform(51.2,293.4,0.561,0.561,-75,0,0,-0.1,0.2);
	new cjs.ButtonHelper(this.mesanenet, 0, 1, 1);

	this.meabed = new lib.meabed_1();
	this.meabed.parent = this;
	this.meabed.setTransform(152.1,399.4,0.147,0.147);
	new cjs.ButtonHelper(this.meabed, 0, 1, 1);

	this.matrefa = new lib.matrefa_1();
	this.matrefa.parent = this;
	this.matrefa.setTransform(215.7,280.2,0.526,0.526,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.matrefa, 0, 1, 1);

	this.marit = new lib.marit_1();
	this.marit.parent = this;
	this.marit.setTransform(247.7,261.7,0.297,0.297,180,0,0,-0.1,-0.1);
	new cjs.ButtonHelper(this.marit, 0, 1, 1);

	this.maaroh = new lib.maaroh_1();
	this.maaroh.parent = this;
	this.maaroh.setTransform(284.3,289.7,0.365,0.365);
	new cjs.ButtonHelper(this.maaroh, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.maaroh},{t:this.marit},{t:this.matrefa},{t:this.meabed},{t:this.mesanenet},{t:this.mida},{t:this.tanur},{t:this.gas},{t:this.mishkal},{t:this.sakit},{t:this.zantar},{t:this.mixer}]}).wait(1));

	// techniques_HOVER
	this.temprur_H = new lib.check_1();
	this.temprur_H.parent = this;
	this.temprur_H.setTransform(138.4,121.8);

	this.ziluf_H = new lib.check_1();
	this.ziluf_H.parent = this;
	this.ziluf_H.setTransform(138.8,94.7);

	this.kirmul_H = new lib.check_1();
	this.kirmul_H.parent = this;
	this.kirmul_H.setTransform(139.1,68.8);

	this.iveret_H = new lib.check_1();
	this.iveret_H.parent = this;
	this.iveret_H.setTransform(399.6,144.2);

	this.haktsafa_H = new lib.check_1();
	this.haktsafa_H.parent = this;
	this.haktsafa_H.setTransform(258.5,119.1);

	this.ridud_H = new lib.check_1();
	this.ridud_H.parent = this;
	this.ridud_H.setTransform(258.5,90.3);

	this.kipul_H = new lib.check_1();
	this.kipul_H.parent = this;
	this.kipul_H.setTransform(258.5,65.7);

	this.benmarie_H = new lib.check_1();
	this.benmarie_H.parent = this;
	this.benmarie_H.setTransform(398.3,119.7);

	this.hafrada_H = new lib.check_1();
	this.hafrada_H.parent = this;
	this.hafrada_H.setTransform(399.6,91.6);

	this.lisha_H = new lib.check_1();
	this.lisha_H.parent = this;
	this.lisha_H.setTransform(399.6,66);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lisha_H},{t:this.hafrada_H},{t:this.benmarie_H},{t:this.kipul_H},{t:this.ridud_H},{t:this.haktsafa_H},{t:this.iveret_H},{t:this.kirmul_H},{t:this.ziluf_H},{t:this.temprur_H}]}).wait(1));

	// techniques
	this.text_1 = new cjs.Text(":טכניקות שכדאי לדעת", "bold 20px 'Gisha'", "#FCFCFC");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 25;
	this.text_1.lineWidth = 200;
	this.text_1.parent = this;
	this.text_1.setTransform(402,12.3);

	this.text_2 = new cjs.Text(":כלים שכדאי שיהיו", "bold 20px 'Gisha'");
	this.text_2.textAlign = "right";
	this.text_2.lineHeight = 25;
	this.text_2.lineWidth = 186;
	this.text_2.parent = this;
	this.text_2.setTransform(418.3,185.1);

	this.lisha = new lib.lisha();
	this.lisha.parent = this;
	this.lisha.setTransform(366.9,69.3,0.958,0.958);
	new cjs.ButtonHelper(this.lisha, 0, 1, 1);

	this.temprur = new lib.temprur();
	this.temprur.parent = this;
	this.temprur.setTransform(73.1,123.8,0.958,0.958);
	new cjs.ButtonHelper(this.temprur, 0, 1, 1);

	this.ziluf = new lib.ziluf_1();
	this.ziluf.parent = this;
	this.ziluf.setTransform(110.4,96.3,0.958,0.958);
	new cjs.ButtonHelper(this.ziluf, 0, 1, 1);

	this.haktsafa = new lib.haktsafa();
	this.haktsafa.parent = this;
	this.haktsafa.setTransform(217.3,120.2,0.958,0.958);
	new cjs.ButtonHelper(this.haktsafa, 0, 1, 1);

	this.hafrada = new lib.hafrada();
	this.hafrada.parent = this;
	this.hafrada.setTransform(340.1,92.7,0.958,0.958);
	new cjs.ButtonHelper(this.hafrada, 0, 1, 1);

	this.benmarie = new lib.benmarie();
	this.benmarie.parent = this;
	this.benmarie.setTransform(360.4,119.6,0.958,0.958,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.benmarie, 0, 1, 1);

	this.iveret = new lib.iveret();
	this.iveret.parent = this;
	this.iveret.setTransform(340.2,147.1,0.958,0.958,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.iveret, 0, 1, 1);

	this.ridud = new lib.ridud_1();
	this.ridud.parent = this;
	this.ridud.setTransform(225.4,94.1,0.958,0.958);
	new cjs.ButtonHelper(this.ridud, 0, 1, 1);

	this.kipul = new lib.kipul_1();
	this.kipul.parent = this;
	this.kipul.setTransform(226.9,66.1,0.958,0.958);
	new cjs.ButtonHelper(this.kipul, 0, 1, 1);

	this.kirmul = new lib.kirmul();
	this.kirmul.parent = this;
	this.kirmul.setTransform(106.7,69.4,0.958,0.958,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.kirmul, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.kirmul},{t:this.kipul},{t:this.ridud},{t:this.iveret},{t:this.benmarie},{t:this.hafrada},{t:this.haktsafa},{t:this.ziluf},{t:this.temprur},{t:this.lisha},{t:this.text_2},{t:this.text_1}]}).wait(1));

	// levels
	this.pin = new lib.pin();
	this.pin.parent = this;
	this.pin.setTransform(759.3,213.3);

	this.or_click = new lib.or_click();
	this.or_click.parent = this;
	this.or_click.setTransform(733.8,211.9);

	this.click_for_expl = new lib.click_for_expl();
	this.click_for_expl.parent = this;
	this.click_for_expl.setTransform(745,211.6);

	this.pro = new lib.pro_1();
	this.pro.parent = this;
	this.pro.setTransform(544.1,134.1,0.679,0.679);
	new cjs.ButtonHelper(this.pro, 0, 1, 1);

	this.medium = new lib.medium_1();
	this.medium.parent = this;
	this.medium.setTransform(666.4,150.1,0.7,0.698,0,0,0,0.3,0.2);
	new cjs.ButtonHelper(this.medium, 0, 1, 1);

	this.beginner = new lib.beginner_1();
	this.beginner.parent = this;
	this.beginner.setTransform(801.7,149.9,0.704,0.704);
	new cjs.ButtonHelper(this.beginner, 0, 1, 1);

	this.ipus = new lib.timer();
	this.ipus.parent = this;
	this.ipus.setTransform(928.8,150.4);
	new cjs.ButtonHelper(this.ipus, 0, 1, 1);

	this.choose_level = new cjs.Text(",בחר את רמת בקיאותך להצגת מאפים שתוכל להכין טכניקות שכדאי שתדע, וכלים שכדאי שיהיו לך", "bold 15px 'Gisha'");
	this.choose_level.name = "choose_level";
	this.choose_level.textAlign = "center";
	this.choose_level.lineHeight = 20;
	this.choose_level.lineWidth = 356;
	this.choose_level.parent = this;
	this.choose_level.setTransform(725,73);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#BE7631").ss(4.1,1,1).p("EggmgNbMBBNAAAIAAa3MhBNAAAg");
	this.shape_2.setTransform(211.5,88.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#023802").s().p("EggmANcIAA62MBBNAAAIAAa2g");
	this.shape_3.setTransform(211.5,88.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.choose_level},{t:this.ipus},{t:this.beginner},{t:this.medium},{t:this.pro},{t:this.click_for_expl},{t:this.or_click},{t:this.pin}]}).wait(1));

	// kitchen
	this.text_3 = new cjs.Text("המדריך לאופה החובב", "bold 30px 'Gisha'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 37;
	this.text_3.lineWidth = 318;
	this.text_3.parent = this;
	this.text_3.setTransform(725.9,16.8);

	this.instance = new lib.bannerHQ();
	this.instance.parent = this;
	this.instance.setTransform(463,9,1.092,0.851);

	this.instance_1 = new lib.stand1_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(863.4,357.8);

	this.instance_2 = new lib.stand1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(589,365,0.166,0.122);

	this.instance_3 = new lib.bar();
	this.instance_3.parent = this;
	this.instance_3.setTransform(9,222);

	this.instance_4 = new lib.kitchen();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1,4,1.04,1.038);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.text_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(452.8,349.9,1065.8,724.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;