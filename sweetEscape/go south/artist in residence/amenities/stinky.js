//STINKY FILE
//summon flies to your website
//website is now stinky
//click on the flies to swat them and make them go away
//this is the good version
/*
  /$$$$$$  /$$$$$$$$ /$$$$$$ /$$   /$$ /$$   /$$ /$$     /$$          /$$$$$  /$$$$$$ 
 /$$__  $$|__  $$__/|_  $$_/| $$$ | $$| $$  /$$/|  $$   /$$/         |__  $$ /$$__  $$
| $$  \__/   | $$     | $$  | $$$$| $$| $$ /$$/  \  $$ /$$/             | $$| $$  \__/
|  $$$$$$    | $$     | $$  | $$ $$ $$| $$$$$/    \  $$$$/              | $$|  $$$$$$ 
 \____  $$   | $$     | $$  | $$  $$$$| $$  $$     \  $$/          /$$  | $$ \____  $$
 /$$  \ $$   | $$     | $$  | $$\  $$$| $$\  $$     | $$          | $$  | $$ /$$  \ $$
|  $$$$$$/   | $$    /$$$$$$| $$ \  $$| $$ \  $$    | $$          |  $$$$$$/|  $$$$$$/
 \______/    |__/   |______/|__/  \__/|__/  \__/    |__/           \______/  \______/ 
...credits........................................................................................
...................written.by.Frogston.Mc.Frogface................code.by.Froglorious.Froghart....
......................................special.....thanks.....to............@alienmelon............
..................................................................................................
*/

//sound: "stinky_audio/"
//buzzing
var arr_snd_buzzingloop = ["AUD_FLIES_BUZZING_LOOP_01", "AUD_FLIES_BUZZING_LOOP_02", "AUD_FLIES_BUZZING_LOOP_03", "AUD_FLIES_BUZZING_LOOP_04"];
//laughing fly dialogue
var arr_snd_laughfly = ["AUD_FLIES_LAUGHINGFLY_01", "AUD_FLIES_LAUGHINGFLY_02", "AUD_FLIES_LAUGHINGFLY_03", "AUD_FLIES_LAUGHINGFLY_04", "AUD_FLIES_LAUGHINGFLY_05", "AUD_FLIES_LAUGHINGFLY_06", "AUD_FLIES_LAUGHINGFLY_07", "AUD_FLIES_LAUGHINGFLY_08", "AUD_FLIES_LAUGHINGFLY_09", "AUD_FLIES_LAUGHINGFLY_10", "AUD_FLIES_LAUGHINGFLY_11", "AUD_FLIES_LAUGHINGFLY_12", "AUD_FLIES_LAUGHINGFLY_13", "AUD_FLIES_LAUGHINGFLY_14", "AUD_FLIES_LAUGHINGFLY_15", "AUD_FLIES_LAUGHINGFLY_16", "AUD_FLIES_LAUGHINGFLY_17", "AUD_FLIES_LAUGHINGFLY_18"];
//fly dialogue (before looping)
var arr_snd_dialogue = ["AUD_FLY_DIALOGUE_01", "AUD_FLY_DIALOGUE_02", "AUD_FLY_DIALOGUE_03", "AUD_FLY_DIALOGUE_04", "AUD_FLY_DIALOGUE_05", "AUD_FLY_DIALOGUE_06", "AUD_FLY_DIALOGUE_07", "AUD_FLY_DIALOGUE_08", "AUD_FLY_DIALOGUE_09", "AUD_FLY_DIALOGUE_10", "AUD_FLY_DIALOGUE_11", "AUD_FLY_DIALOGUE_12", "AUD_FLY_DIALOGUE_13", "AUD_FLY_DIALOGUE_14", "AUD_FLY_DIALOGUE_15", "AUD_FLY_DIALOGUE_16", "AUD_FLY_DIALOGUE_17", "AUD_FLY_DIALOGUE_18", "AUD_FLY_DIALOGUE_19", "AUD_FLY_DIALOGUE_20", "AUD_FLY_DIALOGUE_21", "AUD_FLY_DIALOGUE_22", "AUD_FLY_DIALOGUE_23", "AUD_FLY_DIALOGUE_24", "AUD_FLY_DIALOGUE_25", "AUD_FLY_DIALOGUE_26", "AUD_FLY_DIALOGUE_27", "AUD_FLY_DIALOGUE_28"];
//fly dialouge (looping randomly)
var arr_snd_dialogue_loop = ["AUD_FLY_DIALOGUELOOP_01", "AUD_FLY_DIALOGUELOOP_02", "AUD_FLY_DIALOGUELOOP_03", "AUD_FLY_DIALOGUELOOP_04", "AUD_FLY_DIALOGUELOOP_05", "AUD_FLY_DIALOGUELOOP_06", "AUD_FLY_DIALOGUELOOP_07", "AUD_FLY_DIALOGUELOOP_08", "AUD_FLY_DIALOGUELOOP_09", "AUD_FLY_DIALOGUELOOP_10", "AUD_FLY_DIALOGUELOOP_11", "AUD_FLY_DIALOGUELOOP_12", "AUD_FLY_DIALOGUELOOP_13", "AUD_FLY_DIALOGUELOOP_14", "AUD_FLY_DIALOGUELOOP_15", "AUD_FLY_DIALOGUELOOP_16", "AUD_FLY_DIALOGUELOOP_17", "AUD_FLY_DIALOGUELOOP_18", "AUD_FLY_DIALOGUELOOP_19", "AUD_FLY_DIALOGUELOOP_20", "AUD_FLY_DIALOGUELOOP_21", "AUD_FLY_DIALOGUELOOP_22", "AUD_FLY_DIALOGUELOOP_23"];
//grinding sound (hit -- used for closing and taking off)
var arr_snd_grinding = ["AUD_GRIND01"];
//grinding takeoff and landing
var arr_snd_takeoff = ["AUD_SHORTGRIND_29", "AUD_SHORTGRIND_24", "AUD_SHORTGRIND_25", "AUD_SHORTGRIND_26", "AUD_SHORTGRIND_27", "AUD_SHORTGRIND_28", "AUD_SHORTGRIND_29"];
//starting sound (init flies)
var arr_snd_stinkystart = ["AUD_START"];

//strings
//paths
var str_path_img = "stinky_images";
var str_path_snd = "stinky_audio/";
//sounds
var snd_fly01;
var snd_fly02;
var snd_fly03;
var snd_fly04;
//sounds (talking and laugh)
var snd_fly01_talk;
var snd_fly02_laugh;

//numbers
//fly width/height
var num_flyWidth = 158;
var num_flyHeight = 138;

//window width and height
var num_screenWidth = 0;
var num_screenHeight = 0;

//target x / y for each fly
var num_fly1_targ_x = 0; //??set somewhere in center first: Math.ceil(num_screenWidth/2 - num_flyWidth.width/2);
var num_fly1_targ_y = 0; //Math.ceil(num_screenHeight/2 - num_flyHeight.height/2);
var num_fly2_targ_x = 0;
var num_fly2_targ_y = 0;
var num_fly3_targ_x = 0;
var num_fly3_targ_y = 0;
var num_fly4_targ_x = 0;
var num_fly4_targ_y = 0;

//takeoff and landing countdowns for each fly
var num_fly1_landCount = 50;
var num_fly1_takeoffCount = 50;
var num_fly2_landCount = 50;
var num_fly2_takeoffCount = 50;
var num_fly3_landCount = 50;
var num_fly3_takeoffCount = 50;
var num_fly4_landCount = 50;
var num_fly4_takeoffCount = 50;

//talking fly only
var num_dialogue = 0;

//booleans
//talking fly only
var bool_dialogueComplete = true;

//the fly divs
//id is _fly01, classname is stinkyfly
var fly01;
var fly02;
var fly03;
var fly04;

//interval id's
var _fly01_move = 0;
var _fly02_move = 0;
var _fly03_move = 0;
var _fly04_move = 0;



//SETUP

function stinky_returnDocWidth(){
	var num_width = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;
	//
	return num_width;
};

function stinky_returnDocHeight(){
	var num_height = window.innerHeight
	|| document.documentElement.clientHeight
	|| document.body.clientHeight;
	//
	return num_height;
};

//ARRAYS

function stinky_randArr(arr){
	return arr[Math.ceil(Math.random()*arr.length)-1];
};

//SOUND

stinky_play_sound = function(arr){
	var snd = new Audio(str_path_snd + stinky_randArr(arr) + ".mp3");
	snd.play();
};

function stinky_stop_flying(str_snd){
	if(window[str_snd] != undefined){
		window[str_snd].pause();
	};
};

function stinky_play_flying(str_snd){
	window[str_snd] = new Audio(str_path_snd + stinky_randArr(arr_snd_buzzingloop) + ".mp3");
	window[str_snd].loop = true;
	window[str_snd].play();
};

function stinky_play_laugh(str_snd){
	window[str_snd] = new Audio(str_path_snd + stinky_randArr(arr_snd_laughfly) + ".mp3");
	window[str_snd].play();
};

//      _       
//    _|_|_     
//    (o o)     
//ooO--(_)--Ooo- hello, i am the lead writer on this fly. i wrote the dialogue. i am a good writer!
//fly 1's dialogue
function stinky_play_dialogue(){
	if(bool_dialogueComplete){
		//
		bool_dialogueComplete = false;
		//
		if(num_dialogue > arr_snd_dialogue.length -1){
			//play this instead (finished dialogue)
			snd_fly01_talk = new Audio(str_path_snd + stinky_randArr(arr_snd_dialogue_loop) + ".mp3");
		}else{
			//play default
			snd_fly01_talk = new Audio(str_path_snd + arr_snd_dialogue[num_dialogue] + ".mp3");
		};
		//
		num_dialogue += 1;
		snd_fly01_talk.play();
		//sound complete - reset
		snd_fly01_talk.onended = function() {
		    bool_dialogueComplete = true;
		};
	};
};

//MATH

//return random range number
function stinky_math_randomRange(num_min, num_max){
	return Math.ceil(num_min + (num_max - num_min) * Math.random());
};

//MOVEMENT          
//    ()_()     
//    (o o)     
//ooO--`o'--Ooo- hello, i am the movement mouse. i am responsible for making these flies move. i am a good mouse!
function interval_move(div_name, str_elem, snd_name){

	//vars
	var num_x = parseInt(div_name.style.left);
	var num_y = parseInt(div_name.style.top);
	
	//get current "state" by reading what img is visible
	var fly = window.getComputedStyle(document.getElementById(str_elem+"_flying"));
	var land = window.getComputedStyle(document.getElementById(str_elem+"_landed"));
	
	//countdown to reset
	window["num" + str_elem + "_landCount"] -= 1;
	//num_fly1_landCount -= 1;
	
	//landed (count down, and stop flying sound)
	if(window["num" + str_elem + "_landCount"] < 0){
		window["num" + str_elem + "_takeoffCount"] -= 1;
		//num_fly1_takeoffCount -= 1;
		//play sound only once
		if(land.visibility == "hidden"){
			stinky_play_sound(arr_snd_grinding);
		}
		stinky_landSprite(str_elem);
		//stop flying sound
		stinky_stop_flying(snd_name);
	}
	
	//take off again (reset)
	if(window["num" + str_elem + "_takeoffCount"] < 0){
		window["num" + str_elem + "_landCount"] = stinky_math_randomRange(20, 100);
		window["num" + str_elem + "_takeoffCount"] = stinky_math_randomRange(20, 100);
		stinky_flySprite(str_elem);
		//
		stinky_play_sound(arr_snd_grinding);
		stinky_play_flying(snd_name);
		//play audio based on fly
		if(str_elem == "_fly1"){
			stinky_play_dialogue();
		};
		//play laughing fly audio
		if(str_elem == "_fly2"){
			stinky_play_laugh("snd_fly02_laugh");
		};
	}
	
	//flying
	if(window["num" + str_elem + "_landCount"] > 0){
		div_name.style.top = String(stinky_math_randomRange(num_y - 50, num_y + 50)) + "px";
		div_name.style.left = String(stinky_math_randomRange(num_x - 50, num_x + 50)) + "px";
	};
	
	//check bounds
	if(num_x > stinky_returnDocWidth() - num_flyWidth){
		stinky_place_fly(div_name);
	};
	if(num_x < -num_flyWidth){
		stinky_place_fly(div_name);
	};
	if(num_y > stinky_returnDocHeight() - num_flyHeight){
		stinky_place_fly(div_name);
	};
	if(num_y < -num_flyHeight){
		stinky_place_fly(div_name);
	};
		
};

//MANAGE SPRITES/DIVS

//    _   _     
//   (_)-(_)    
//    (o o)     
//ooO--(_)--Ooo- hello, i am the idea mouse. i contributed my ideas. i am a good mouse!
function stinky_landSprite(str_elem){
	stinky_hidethis(str_elem + "_flying");
	stinky_showthis(str_elem + "_landed");
};

function stinky_flySprite(str_elem){
	stinky_showthis(str_elem + "_flying");
	stinky_hidethis(str_elem + "_landed");
};

function stinky_hidethis(str_elem){
	document.getElementById(str_elem).style.visibility = "hidden";
};

function stinky_showthis(str_elem){
	document.getElementById(str_elem).style.visibility = "visible";
};

function stinky_kill_fly(div_name){
	//
	stinky_play_sound(arr_snd_grinding);
	clearInterval(window[String(div_name) + "_move"]);
	stinky_stop_flying("snd"+div_name);
	//
	document.getElementById(div_name).remove();
	//
	dead += 1;
	if(dead > 3){
		//start again
		stinky();
	}
};

//place fly at random coords
function stinky_place_fly(div_name){
	div_name.style.top = String(stinky_math_randomRange(0, stinky_returnDocWidth() - num_flyWidth)) + "px";
	div_name.style.left = String(stinky_math_randomRange(0, stinky_returnDocHeight() - num_flyHeight)) + "px";
};

//load fly gifs into the fly div...
function stinky_loadDiv(div_name, str_name){
	//div_name is the name of the div
	//str_name is to name the div, must match with image name (FLY1...)
	//flying
	_fly_flying = document.createElement("div");
	_fly_flying.id = "_"+str_name.toLowerCase() + "_flying";
	div_name.appendChild(_fly_flying);
	_fly_flying.innerHTML = '<img src='+str_path_img+"/IMG_" + str_name + "_FLYING.gif"+'>';
	_fly_flying.style.position = 'absolute';
	//landed
	_fly_landed = document.createElement("div");
	_fly_landed.id = "_"+str_name.toLowerCase() + "_landed";
	div_name.appendChild(_fly_landed);
	_fly_landed.innerHTML = '<img src='+str_path_img+"/IMG_" + str_name + "_LAND.gif"+'>';
	_fly_landed.style.position = 'absolute';
	//more styling here...
	_fly_flying.style.top = '0px';
	_fly_flying.style.left = '0px';
	_fly_landed.style.top = '0px';
	_fly_landed.style.left = '0px';
	//
	
};

var dead = 0;

//        .     
//    ,-_-|     
//   ([o o])    
//ooO--(_)--Ooo- hello, this is the function you should call to run these flies. trust me. i am an expert!
function stinky(){
	dead = 0;
	//set vals
	num_screenWidth = stinky_returnDocWidth();
	num_screenHeight = stinky_returnDocHeight();
	
	//make them
	fly01 = document.createElement("div");
	fly01.id = "_fly01";
	fly01.className = "stinkyfly";
	
	fly02 = document.createElement("div");
	fly02.id = "_fly02";
	fly02.className = "stinkyfly";
	
	fly03 = document.createElement("div");
	fly03.id = "_fly03";
	fly03.className = "stinkyfly";
	
	fly04 = document.createElement("div");
	fly04.id = "_fly04";
	fly04.className = "stinkyfly";
	
	//load them
	stinky_loadDiv(fly01, "FLY1");
	stinky_loadDiv(fly02, "FLY2");
	stinky_loadDiv(fly03, "FLY3");
	stinky_loadDiv(fly04, "FLY4");
	
	//style...
	fly01.style.position = 'fixed';
	fly02.style.position = 'fixed';
	fly03.style.position = 'fixed';
	fly04.style.position = 'fixed';
	fly01.style.cursor = "pointer";
	fly02.style.cursor = "pointer";
	fly03.style.cursor = "pointer";
	fly04.style.cursor = "pointer";
	
	//place...
	stinky_place_fly(fly01);
	stinky_place_fly(fly02);
	stinky_place_fly(fly03);
	stinky_place_fly(fly04);
	
	//place
	document.getElementsByTagName("body")[0].appendChild(fly01);
	document.getElementsByTagName("body")[0].appendChild(fly02);
	document.getElementsByTagName("body")[0].appendChild(fly03);
	document.getElementsByTagName("body")[0].appendChild(fly04);
	
	//set sprites
	stinky_flySprite("_fly1");
	stinky_flySprite("_fly2");
	stinky_flySprite("_fly3");
	stinky_flySprite("_fly4");
	
	//listeners
	fly01.addEventListener("click", function(){ stinky_kill_fly("_fly01") });
	fly02.addEventListener("click", function(){ stinky_kill_fly("_fly02") });
	fly03.addEventListener("click", function(){ stinky_kill_fly("_fly03") });
	fly04.addEventListener("click", function(){ stinky_kill_fly("_fly04") });
	
	//intervals
	_fly01_move = setInterval(function(){ interval_move(fly01, "_fly1", "snd_fly01"); }, 100);
	stinky_play_flying("snd_fly01");
	stinky_play_dialogue();
	//
	_fly02_move = setInterval(function(){ interval_move(fly02, "_fly2", "snd_fly02"); }, 100);
	stinky_play_flying("snd_fly02");
	//
	_fly03_move = setInterval(function(){ interval_move(fly03, "_fly3", "snd_fly03"); }, 100);
	stinky_play_flying("snd_fly03");
	//
	_fly04_move = setInterval(function(){ interval_move(fly04, "_fly4", "snd_fly04"); }, 100);
	stinky_play_flying("snd_fly04");
};