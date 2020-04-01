
//THIS IS A SHARED ON LOAD SCRIPT
//SHARED THROUGHOUGHT
	
arr_checkfish_note_words = ["good", "great", "healthy", "in good condition", "wonderful", "OK", "all good", "nice", "ready", "unctuous", "acceptable", "satisfactory", "nice", "cool", "okay", "immense"];

arr_transitionSOunds = ["screen_fade_in.mp3", "screen_fade_out.mp3"];
arr_snd_manageFishClicks = ["AUD_GAME_JUMP03.mp3", "AUD_GAME_JUMP01.mp3", "AUD_GAME_JUMP02.mp3"];

arr_snd_typing = ["Typing1.mp3", "Typing2.mp3"];
arr_snd_typingNewLine = ["TypingSelect.mp3", "TypingNewline.mp3"];

//virtual vermin "blah's"
arr_snd_verm = ["SND_ESSAY03_VERMIN_BLAH_10.mp3", "SND_ESSAY03_VERMIN_BLAH_09.mp3", "SND_ESSAY03_VERMIN_BLAH_06.mp3", "SND_ESSAY03_VERMIN_BLAH_07.mp3", "SND_ESSAY03_VERMIN_BLAH_08.mp3", "SND_ESSAY03_VERMIN_BLAH_05.mp3", "SND_ESSAY03_VERMIN_BLAH_04.mp3", "SND_ESSAY03_VERMIN_BLAH_03.mp3", "SND_ESSAY03_VERMIN_BLAH_02.mp3", "SND_ESSAY03_VERMIN_BLAH_01.mp3"];
arr_snd_eat = ["AUD_INGAME_SFX_FroggyEats01.mp3", "AUD_INGAME_SFX_FroggyEats02.mp3", "AUD_INGAME_SFX_FroggyEats03.mp3", "AUD_INGAME_SFX_FroggyEats04.mp3", "AUD_INGAME_SFX_FroggyEats05.mp3"];
//goldfishy "blah's"
arr_snd_goldfishy = ["AUD_ESSAY03_EGG_EGG01_07.mp3", "AUD_ESSAY03_EGG_EGG01_05.mp3", "AUD_ESSAY03_EGG_EGG01_06.mp3", "AUD_ESSAY03_EGG_EGG01_03.mp3", "AUD_ESSAY03_EGG_EGG01_04.mp3", "AUD_ESSAY03_EGG_EGG01_02.mp3", "AUD_ESSAY03_EGG_EGG01_01.mp3"];

int_timer = 0; //interval for any and all timers --shared throughougt all scenes
writeInt = 0;//interval for writing

//booleans (shared)
bool_manageFish_gone = false; //the Fish in ManageFish are all gone (hide them and show alert)
bool_installFish_broke = false; //if you broke "install fish" by installing too often
bool_visitedSite = false; //if you already visited the site DON'T show the story pop up, if you didn't then show it
bool_site_fallingClicked = false; //to check if you clicked the trailing buttins (at the bottom of the page) already. only allowed to show the message ONCE, then they fall by default without a message

//countdowns
num_vermDialogue = 0;//current Verm dialogue (this can't reset when you re-visit the page, this count is permanent)

//coordinates (x/y)
num_vermX = 0;
num_vermSpeed = 50;

//various shared scripts

//browser information
browserName = function(){
	return navigator.appName;
}

browserEngine = function(){
	return navigator.product
}

browserVersion1a = function(){
	return navigator.appVersion
}

browserVersion1b = function(){
	return navigator.userAgent
}

browserLanguage = function(){
	return navigator.language
}

browserOnline = function(){
	return navigator.onLine
}

browserPlatform = function(){
	return navigator.platform
}

dataCookiesEnabled = function(){
	return navigator.cookieEnabled
}

dataStorage = function(){
	return localStorage
}


//Write out text
//myTextField = text field
//myText = the string
//endFunction = function to call at the end (if not null)
writeText = function(myTextField, myText, endFunction) {
	//loop through text...
	var i = 0;
	//interval calls this
	function write() {
		if (i<=myText.length) {
			//document.getElementById("jargon").innerHTML = myText.substr(0, i)+"_";
			setText(myTextField, myText.substr(0, i)+"_");
			//only randomly play sound
			//if(Math.random()*100 > 50){
				playSound(randArray(arr_snd_typing));
			//}
			//
			i = i+1;
			//
		} else {
			//document.getElementById("jargon").innerHTML =  myText.substr(0, i);
			setText(myTextField, myText.substr(0, i));
			playSound(randArray(arr_snd_typingNewLine));
			clearInterval(writeInt);
			//if not null call ending function
			if(endFunction != null){
				endFunction();
			}
		}
	}
	//start
	clearInterval(writeInt);
	writeInt = setInterval(write, 70);
}

//activate physics
event_physics_setDynamic = function(_div){
	
	hypeDocument.setElementProperty(_div, "physics-body-type", hypeDocument.kPhysicsBodyTypeDynamic);
 
};

//reset physics (back to static)
event_physics_reset = function(_div){
	hypeDocument.setElementProperty(_div, "physics-body-type", hypeDocument.kPhysicsBodyTypeDead);
}

event_physics_static = function(_div){
	hypeDocument.setElementProperty(_div, "physics-body-type", hypeDocument.kPhysicsBodyTypeStatic);
}

//loading things...
//iframes
openiframe = function(str_url, num_width, num_height){

	str_iframe = "<iframe class='iframeGame' title='Fish' id='_iframe' width=" + String(num_width) + "px height=" + String(num_height) + "px src=" + str_url + "></iframe>";
	
	return str_iframe;
}

closeiframe = function(str_id){
	var iframe = document.getElementById(str_id);
	iframe.contentWindow.document.close();
}

//url
gotoURL = function(str){

	window.open(str, "_self");

}
openNewWindow = function(str){
	window.open(str, "_blank");
}

fp_returnDocWidth = function(){
	var num_width = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;

	return num_width;
}

fp_returnDocHeight = function (){
	var num_height = window.innerHeight
	|| document.documentElement.clientHeight
	|| document.body.clientHeight;

	return num_height;
}


//math
Math_randomRange = function(num_min, num_max){
	return num_min + (num_max - num_min) * Math.random();
}

//arrays
randArray = function(arr){
	var element = arr[Math.ceil(Math.random()*arr.length)-1];
	return element;
}

//sound

playSound = function(str_filename){

	var snd = new Audio("${resourcesFolderName}/" + str_filename);
	snd.play();
	
	
};


//writing
setText = function(div, str){
	div.innerHTML = str;
}

//step up a dialogue array (count up, pass it a string for the number variable, pass it a div)
nextDialogue = function(div, arr, str_num){
	
	var num = window[str_num];
	
	setText(div, arr[num]);
	
	if(window[str_num] >= arr.length -1){
		window[str_num] = arr.length -1;
		playSound("gasp1.mp3");
	}else{
		window[str_num] += 1;
		playSound("menu_item_rollover.mp3");
	}	
	
}

//objects

//"hidden", "visible"
hideObject = function(obj){
	setOpacity(obj, 0);
	obj.style.visibility = "hidden";
}
showObject = function(obj){
	setOpacity(obj, 1);
	obj.style.visibility = "visible";
}

setOpacity = function(obj, num){
	obj.style.opacity = num;
}

//load
gotoScene = function(str){
	//console.log(str);
	//hypeDocument.showNextScene(hypeDocument.kSceneTransitionInstant, 1.1);
	var arr_types = ["crossfade", "leftToRight", "rightToLeft", "bottomToTop", "topToBottom"];
	var randType = randArray(arr_types);
	var num_speed = .5;
	//play tikutiku sound
	playSound(randArray(arr_transitionSOunds));
	
	//clear all here (if there are events or listeners)
	clearInterval(int_timer);
	clearInterval(writeInt);
	//clearInterval(globalInt);
	
	//
	if(randType == "crossfade"){
		hypeDocument.showSceneNamed(str, hypeDocument.kSceneTransitionCrossfade, num_speed);
	};
	if(randType == "leftToRight"){
		hypeDocument.showSceneNamed(str, hypeDocument.kSceneTransitionPushLeftToRight, num_speed);
	};
	if(randType == "rightToLeft"){
		hypeDocument.showSceneNamed(str, hypeDocument.kSceneTransitionPushRightToLeft, num_speed);
	};
	if(randType == "bottomToTop"){
		hypeDocument.showSceneNamed(str, hypeDocument.kSceneTransitionPushBottomToTop, num_speed);
	}else{
		hypeDocument.showSceneNamed(str, hypeDocument.kSceneTransitionPushTopToBottom, num_speed);
	};
};

//custom behavior call (like playing a clip)
callBehavior = function(str){
	//symb.startTimelineNamed('Main Timeline', hypeDocument.kDirectionForward);
	hypeDocument.triggerCustomBehaviorNamed(str);
}


/////////COLISION/////////

hitTest = function(a, b){
	//
	var circleRect = a.getBoundingClientRect();
	var squareRect = b.getBoundingClientRect();
	var b_width = squareRect.width;
	var b_height = squareRect.height;
	var a_height = circleRect.height;
	var a_width = circleRect.width;
	//
	aPos = {x:circleRect.left, y:circleRect.top};
	bPos = {x:squareRect.left, y:squareRect.top};
	//
	return aPos.x < bPos.x + b_width && aPos.x + a_width > bPos.x && aPos.y < bPos.y + b_height && aPos.y + a_height > bPos.y;
}

returnX = function(a){
	
	var circleRect = a.getBoundingClientRect();
	return circleRect.left;

}

returnY = function(a){
	var circleRect = a.getBoundingClientRect();
	return circleRect.top;
}

setX = function(div, x){
	div.style.left = String(x) + 'px';
}

setY = function(div, y){
	div.style.left = String(y) + 'px';
}


////////GRAVITY (changing gravity variables to simulate swimming)////////

initGravity = function(arr){

	//
	for(var i = 0; i<arr.length; ++i){
	
		var engine = hypeDocument.getElementProperty(arr[i], "physics-engine");
		var gravity = engine.world.gravity;
		
		updateGravity(engine);
	
	}
}

updateGravity = function(engine){
	
	engine.world.gravity.x = Math_randomRange(-2, 2);
	engine.world.gravity.y = Math_randomRange(-2, 2);
	
	var bodies = engine.world.bodies;
	//var Body = Matter.Body;		
	
	for (var i = 0; i < bodies.length; i++) {
	
		var body = bodies[i];
		
		if(Math.random()*100 > 90){
				body.angle += Math_randomRange(-0.3, 0.3);
		}
		
	}
	
};


////FISH AND OTHER EFFECTS////

	var arr_fishes = [];//fishes here
	var arr_bubbles = [];//bubbles here
	var int_elements;//interval for moving fishes
	
	var arr_bubbleImages = ["IMG_BUBBLE_01.png", "IMG_BUBBLE_02.png", "IMG_BUBBLE_03.png"];
	
	//make an element
	function makethis(id, image, arr, appendto){
		_makethis = document.createElement("div");
		_makethis.id = id;
		_makethis.style.position = "fixed";
		_makethis.style.left = String(Math.random()*fp_returnDocWidth()) + 'px';
		_makethis.style.bottom = String(Math.random()*fp_returnDocHeight()) + 'px';
		_makethis.innerHTML = "<img src=" + image + ">";
		//
		_makethis.style.pointerEvents = "none";
		//
		if(appendto == null){
			document.getElementsByTagName("body")[0].appendChild(_makethis);
		}else{
			//_makethis.appendChild(appendto);
			appendto.appendChild(_makethis);
		}
		//
		arr.push(id);
	}
	
	function move_elements(){
		for(j = 0; j < arr_fishes.length; ++j){
			var fishes = document.getElementById(arr_fishes[j]);
			var fish_x = parseInt(fishes.style.left);
			fish_x += Math_randomRange(1, 7);
			fishes.style.left = String(fish_x) + "px";
			//
			if(fish_x > fp_returnDocWidth()){
				fishes.style.left = '0px';
				fishes.style.bottom = String(Math.random()*fp_returnDocHeight()) + 'px';
			}
		}
		
		for(var n = 0; n<arr_bubbles.length; ++n){
		
		
				var bubbles = document.getElementById(arr_bubbles[n]);
				var bubbles_y = parseInt(bubbles.style.bottom);
				bubbles_y += 5;
				bubbles.style.bottom= String(bubbles_y) + "px";
				//
				if(bubbles_y > fp_returnDocHeight()){
					bubbles.style.left = String(Math.random()*fp_returnDocWidth()) + 'px';
					bubbles.style.bottom = '0px';//String(Math.random()*fp_returnDocHeight()) + 'px';
				}
		
		}
	};
	
	initElements = function(){
	
		//fish
		makethis("fish01", "${resourcesFolderName}/IMG_FISH_01_LARGE.gif", arr_fishes, null);
		//makethis("fish02", "${resourcesFolderName}/IMG_FISH_02_LARGE.gif", arr_fishes, null);
		makethis("fish03", "${resourcesFolderName}/IMG_FISH_03_LARGE.gif", arr_fishes, null);
		makethis("fish04", "${resourcesFolderName}/IMG_FISH_04_LARGE.gif", arr_fishes, null);
		//makethis("fish05", "${resourcesFolderName}/IMG_FISH_05_LARGE.gif", arr_fishes, null);
		
		//make bubbles
		for(var n = 0; n<10; ++n){
			
			makethis("bubble" + String(n), "${resourcesFolderName}/" + randArray(arr_bubbleImages), arr_bubbles, null);
			
			//adjust settings...
			var bubbles = document.getElementById("bubble" + String(n));
			bubbles.style.zIndex = "100"; 
		
		}
		
		//clear first in case
		clearInterval(int_elements);
		//
		int_elements = setInterval(move_elements, 50);
	
	}


initElements();

//cursor on body is set here because main cursor changes
document.body.style.cursor = "url('${resourcesFolderName}/IMG_CURSOR_DEFAULT.png'), auto";
//document.getElementById(hypeDocument.documentId()).style.margin = "0";

