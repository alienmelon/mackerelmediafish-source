
import flash.media.Sound;
import flash.events.MouseEvent;
import flash.media.SoundChannel;
import flash.events.Event;

/*

FIRSTRUN is the first unlock screen that opens the final story segment

*/

var chan_firstrun:SoundChannel = new SoundChannel();
//so_fish

function firstrun_checkKey(){
	if(txt_firstrun_serial.text.toUpperCase() == str_serial){
		//
		so_fish.data.unlocked = "menu_unlocked_story";
		so_fish.flush();
		event_firstrun_clearAll();
		gotoAndStop(so_fish.data.unlocked);
	}
}

function event_firstrun_url(event:MouseEvent){
	navigateToURL( new URLRequest( "http://mackerelmediafish.com") );
}

function event_firstrun_ok(event:MouseEvent){
	firstrun_checkKey();
}

function event_firstrun_cancel(event:MouseEvent){
	event_firstrun_clearAll();
	//hide so only sound is heard...
	resizeWindow(30, 30);
	MovieClip(root).visible = false;
	//init close
	chan_firstrun = snd_alert_powerdown.play();
	chan_firstrun.addEventListener(Event.SOUND_COMPLETE, event_firstrun_closeAll);
}

//on sound complete, close...
function event_firstrun_closeAll(event:Event){
	window.close();
}

function event_firstrun_keyDown(event:KeyboardEvent):void
{
	//trace("Key Code Pressed: " + event.keyCode);
	// End your custom code
	if(event.keyCode == Keyboard.ENTER && txt_firstrun_serial.text.toUpperCase() != str_serial){
		txt_firstrun_serial.text = "";
		snd_alert_3.play();
	}
	if (event.keyCode == Keyboard.ENTER) {
		firstrun_checkKey();
	}

	//
}


function event_firstrun_stageClick(event:MouseEvent){
	snd_alert_7.play();
}

function event_firstrun_clearAll(){
	//clear all before leaving
	stage.removeEventListener(MouseEvent.MOUSE_UP, event_firstrun_stageClick);
	stage.removeEventListener(KeyboardEvent.KEY_DOWN, event_firstrun_keyDown);
	btn_firstrun_ok.removeEventListener(MouseEvent.MOUSE_UP, event_firstrun_ok);
	btn_firstrun_cancel.removeEventListener(MouseEvent.MOUSE_UP, event_firstrun_cancel);
	btn_firstrun_fish.removeEventListener(MouseEvent.MOUSE_UP, event_firstrun_url);
	//chan_firstrun.removeEventListener(Event.SOUND_COMPLETE, event_firstrun_closeAll);
}

snd_alert_6.play();
resizeWindow(326, 258);

stage.addEventListener(MouseEvent.MOUSE_UP, event_firstrun_stageClick);
stage.addEventListener(KeyboardEvent.KEY_DOWN, event_firstrun_keyDown);

btn_firstrun_ok.addEventListener(MouseEvent.MOUSE_UP, event_firstrun_ok);
btn_firstrun_cancel.addEventListener(MouseEvent.MOUSE_UP, event_firstrun_cancel);
btn_firstrun_fish.addEventListener(MouseEvent.MOUSE_UP, event_firstrun_url);