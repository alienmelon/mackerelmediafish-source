import flash.media.Sound;

/*

this is the opening setup (first thing to run)
this is shared throughought

*/

stage.align = StageAlign.TOP_LEFT; 
stage.scaleMode = StageScaleMode.NO_SCALE;

stage.nativeWindow.alwaysInFront = true;

var so_fish:SharedObject = SharedObject.getLocal("fish/data");
//debug
//so_fish.clear();

var window = stage.nativeWindow;

var snd_alert_1:Sound = new AUD_XPSYS_01();//critical stop
var snd_alert_6:Sound = new AUD_XPSYS_06();//alert
var snd_alert_4:Sound = new AUD_XPSYS_04();//alert
var snd_alert_3:Sound = new AUD_XPSYS_03();
var snd_alert_7:Sound = new AUD_XPSYS_07();//click
var snd_alert_powerdown:Sound = new AUD_XPSYS_POWERDOWN();
var snd_alert_tada:Sound = new AUD_XPSYS_TADA_SMALL1();

//the keys
var str_serial:String = "HOT-BIG-GIGABYTES-123";
var str_tinySerial:String = "TINY-KEY-123";

/////////SHARED

//the stage's window w/h
var num_screenWidth:Number = window.width;
var num_screenHeight:Number = window.height;
//the actual monitor/screen width / height
var num_resolutionWidth:Number = Screen.mainScreen.bounds.width;
var num_resolutionHeight:Number = Screen.mainScreen.bounds.height;

//SETUP
function center_window(){
	window.x = Math.ceil(Screen.mainScreen.bounds.width - num_screenWidth)/2;
	window.y = Math.ceil(Screen.mainScreen.bounds.height - num_screenHeight)/2;
}

//place at random x at bottom of screen
function bottomCenter_window(){
	window.x = Math.ceil(Screen.mainScreen.bounds.width - num_screenWidth);
	window.y = Math.ceil(Screen.mainScreen.bounds.height - num_screenHeight);
}

//resize
function resizeWindow(num_width:Number, num_height:Number){
	window.width = num_width;
	window.height = num_height;
	num_screenWidth = num_width;
	num_screenHeight = num_height;
	center_window();
}

//random number range
function randRange(num_min:Number, num_max:Number){
	return Math.ceil(num_min + (num_max - num_min) * Math.random());
}

//random array
function randArr(arr:Array){
	return arr[Math.ceil(Math.random()*arr.length-1)];
}