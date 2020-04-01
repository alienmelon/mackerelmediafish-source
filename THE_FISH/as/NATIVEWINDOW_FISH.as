////////////////NATIVE WINDOWS (FOR FISH)

var NW_window_dialogue:NativeWindow;
var arr_particleWindows:Array = new Array();

//setup
var NWI_initOptions:NativeWindowInitOptions = new NativeWindowInitOptions();
//customizing...
NWI_initOptions.maximizable = false;
NWI_initOptions.minimizable = false;
NWI_initOptions.resizable = false;
NWI_initOptions.systemChrome = NativeWindowSystemChrome.NONE; 
NWI_initOptions.transparent = true;
NWI_initOptions.type = NativeWindowType.UTILITY;
NWI_initOptions.owner = window;

//var mc_message = addChildByString(str_ui_linkage);
function addChildByString(mc:String){
	var classReference:Class = getDefinitionByName(mc) as Class;
	var tempMC:Object = new classReference();
	return tempMC;
}

function window_close(window){
	try{
		window.close();
	}catch(e:Error){
		//trace("error closing window: " + window);
	}
}


function window_dialogue(str_say:String){
	//
	window_close(NW_window_dialogue);
	//
	NW_window_dialogue = new NativeWindow(NWI_initOptions);
	//setup the stage
	NW_window_dialogue.stage.align = "TL"; 
	NW_window_dialogue.stage.scaleMode = "noScale"; 
	//
	NW_window_dialogue.alwaysInFront = true;
	//
	//Add some movieclip, or whatever, to it...
	var mc_message:MovieClip = new MESSAGE();
	NW_window_dialogue.stage.addChild(mc_message);
	mc_message.name = "mc_message";
	mc_message.txt_message.text = str_say;
	//
	NW_window_dialogue.width = mc_message.width;
	NW_window_dialogue.height = mc_message.height;
	//
	//Placement...
	NW_window_dialogue.x = (Screen.mainScreen.bounds.width - NW_window_dialogue.width)/2;
	NW_window_dialogue.y = (Screen.mainScreen.bounds.height - NW_window_dialogue.height) - 50;
	//
	//NW_window_dialogue.owner = stage.nativeWindow;
	NW_window_dialogue.activate();
	//
}

//open a "particle" window (limited interaction)
//clicking on it optionally does something (like close the window)
function window_particle(str_linkage:String, boolPlaySound:Boolean = true){
	//open a particle that closes if you click on it, or closes if it reaches the top	
	var NW_window_particle:NativeWindow = new NativeWindow(NWI_initOptions);
	var num_speed:Number = randRange(1, 5);
	//stage setup
	NW_window_particle.stage.align = "TL";
	NW_window_particle.stage.scaleMode = "noScale";
	NW_window_particle.alwaysInFront = true;
	//
	var mc_particle = addChildByString(str_linkage);
	NW_window_particle.stage.addChild(mc_particle);
	mc_particle.name = "mc_particle";
	mc_particle.gotoAndStop(num_moodFrame);
	//
	NW_window_particle.width = mc_particle.width;
	NW_window_particle.height = mc_particle.height;
	//place particle on face
	NW_window_particle.x = window.x + (window.width - 50) + randRange(-20, 20);
	NW_window_particle.y = window.y + (window.height/2) + randRange(-20, 20);
	
	//keep record of all of them
	arr_particleWindows.push(NW_window_particle);
	
	NW_window_particle.activate();
	
	function _closeCall(){
		//
		//trace("_closeCall called");
		NW_window_particle.removeEventListener(Event.CLOSING, _closeParticle);
		mc_particle.removeEventListener(Event.ENTER_FRAME, _moveParticle);
		mc_particle.removeEventListener(MouseEvent.MOUSE_UP, _clickParticle);
		//
		window_close(NW_window_particle);
	}
	
	function _moveParticle(event:Event){
		NW_window_particle.y -= num_speed;
		//if at top
		if(NW_window_particle.y <= NW_window_particle.height){
			//randArr(arr_snd_bubble).play();
			playWarmDrySong();
			_closeCall();
		}
	}
	
	function _clickParticle(event:MouseEvent){
		_closeCall();
		//randArr(arr_snd_bubble).play();
		playSong();
	}
	
	function _closeParticle(event:Event){
		//
		event.preventDefault();
		_closeCall();
		_initCloseFish();//_closeFish();//call to CLOSE ALL is made here for when a call to close fish is made
		//
	}
	
	mc_particle.buttonMode = true;
	mc_particle.addEventListener(MouseEvent.MOUSE_UP, _clickParticle);
	NW_window_particle.addEventListener(Event.CLOSING, _closeParticle);
	mc_particle.addEventListener(Event.ENTER_FRAME, _moveParticle);
	
}

//init the close sequence where fish swims off screen AND THEN closes
function _initCloseFish(){
	stopFishSound();
	playFishSound("bye", true);//"bye bye sound"
	//snd_powerdown.play();
	bool_isClosing = true;
}

function _closeFish(){
	//trace("close everything and all windows here");
	//
	for(var i:Number = 0; i<arr_particleWindows.length; ++i){
		window_close(arr_particleWindows[i]);
	}
	//
	stage.removeEventListener(Event.ENTER_FRAME, event_event);
	mc_clip.removeEventListener(MouseEvent.MOUSE_UP, event_interact);
	//
	
	window_close(NW_window_dialogue);
	
	window.close();
}

function event_closeAll(event:Event){
	event.preventDefault();
	//_closeFish();
	_initCloseFish();
}