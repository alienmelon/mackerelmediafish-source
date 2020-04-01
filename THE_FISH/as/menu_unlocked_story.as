import flash.media.Sound;
import flash.media.SoundChannel;
import flash.events.Event;
import flash.events.MouseEvent;

/*

this is the story segment that gives the final set of story
and then offers to unlock fish
this is the last screen before fish is permanently unlocked

*/

//the story here (final story)
/*btn_story_set1_01//explore skeleton
btn_story_set1_02//pay respects
btn_story_set2_01//take a closer look
btn_story_set3_01//examine abnormality
btn_story_set4_01//access the inferior process*/
var arr_story_buttons:Array = new Array(btn_story_set1_01, btn_story_set1_02, btn_story_set2_01, btn_story_set3_01, btn_story_set4_01);

var str_story_01:String = "As you finally unlock THE Fish, the program opens to a deserted lonely space. A skeleton towers over the broken ground here. A relic of something long forgotten...\nIt seems like THE Fish (the one that you where looking for) slowly perished under the license restriction it was locked inside of.\nThe bones are as dry as the ground. They are massive.\nLarge enough to stand in...";
var str_story_02:String = "You make a small moment of silence for the perceived loss looming before you.\nA feeling of hollowness fills this space. Silence has occupied it for far too long.\nThe digital fossil has a story to tell...";
var str_story_03:String = "You approach the towering skeleton and stand in the middle of its ribs. You can't help but wonder how it may have looked when it was alive. How might it be like to see something this massive roam the virtual sea? How easily did it get trapped here and how easily forgotten...\nIt looks like it may have lived a good life. No digital artifact gets this big without purpose.\nSomewhere near its head you spot an abnormality.";
var str_story_04:String = "It's a very strange, very inferior looking build, compiled of whatever was left. It looks like it has been slowly degrading. This seems like it could still run!\n\nSomething inside you feels like THIS is what you have been looking for all along.\nYou might even have the key necessary to bring it to life...";

var snd_story_start:Sound = new AUD_INTRO_START();
//var snd_story_long:Sound = new AUD_GAMEWIN01_MUSIC();
var snd_story_warmdry:Sound = new AUD_WARMDRYLOOP_01();
var chan_story:SoundChannel = new SoundChannel();

//hide all buttons for setting story state
function story_hideAllButtons(){
	for(var i:Number = 0; i<arr_story_buttons.length; ++i){
		arr_story_buttons[i].visible = false;
	}
}

function event_storyState(event:MouseEvent){
	var clip = event.currentTarget;
	var clip_name = clip.name;
	//hide first
	story_hideAllButtons();
	//sound
	snd_alert_7.play();
	//manage visibility and story
	if(clip_name == "btn_story_set1_01"){
		setStory(str_story_03);
		btn_story_set3_01.visible = true;
	}
	if(clip_name == "btn_story_set1_02"){
		setStory(str_story_02);
		btn_story_set2_01.visible = true;
	}
	if(clip_name == "btn_story_set2_01"){
		setStory(str_story_03);
		btn_story_set3_01.visible = true;
	}
	if(clip_name == "btn_story_set3_01"){
		setStory(str_story_04);//str_story_03);
		btn_story_set4_01.visible = true;
		mc_story_padlock.visible = true;
	}
	if(clip_name == "btn_story_set4_01"){
		setStory(str_story_04);
		story_hideAllButtons();
		mc_story_padlock.visible = true;
		mc_story_finalunlock.visible = true;
		txt_story.visible = false;
		mc_story_back.visible = false;
		snd_alert_4.play();
		//start keyboard
		stage.addEventListener(KeyboardEvent.KEY_DOWN, event_story_keyDown);
		//
	}
}

function setStory(str:String){
	txt_story.text = str;
}

function event_storyMusic(event:Event){
	chan_story.removeEventListener(Event.SOUND_COMPLETE, event_storyMusic);
	chan_story = snd_story_warmdry.play(0, int.MAX_VALUE);
}

//check if input is correct
//save state and open fish now (where padlock is)
//refer this in OK button event and keyboard
function _story_OK(){
	//trace(mc_story_finalunlock.txt_inferior.text.toUpperCase());
	if(mc_story_finalunlock.txt_inferior.text.toUpperCase() == str_tinySerial){
		//snd_alert_tada.play();
		mc_story_finalunlock.txt_inferior.text = "";
		story_win();
	}else{
		mc_story_finalunlock.txt_inferior.text = "";
		snd_alert_3.play();
	}
}

function event_story_OK(event:MouseEvent){
	_story_OK();
	snd_alert_7.play();
}

function event_story_CANCEL(event:MouseEvent){
	mc_story_finalunlock.txt_story_finalunlock.text = "You can't quit now:";
	snd_alert_1.play();
}

function event_story_keyDown(event:KeyboardEvent):void
{
	//trace("Key Code Pressed: " + event.keyCode);
	// End your custom code
	if (event.keyCode == Keyboard.ENTER) {
		_story_OK();
	}
	//
}

function story_win(){
	//you got the key right
	//unlock all for the final time
	//save state to menu_default
	//build menu_default (just a small window with trial expiring on 30 years, and you click the icon to run)
	so_fish.data.unlocked = "menu_default";
	so_fish.flush();
	story_clearAll();
	//
	gotoAndPlay("unlockFish");
}

function story_clearAll(){
	chan_story.stop();
	//
	btn_story_set1_01.removeEventListener(MouseEvent.MOUSE_UP, event_storyState);
	btn_story_set1_02.removeEventListener(MouseEvent.MOUSE_UP, event_storyState);
	btn_story_set2_01.removeEventListener(MouseEvent.MOUSE_UP, event_storyState);
	btn_story_set3_01.removeEventListener(MouseEvent.MOUSE_UP, event_storyState);
	btn_story_set4_01.removeEventListener(MouseEvent.MOUSE_UP, event_storyState);
	//
	stage.removeEventListener(KeyboardEvent.KEY_DOWN, event_story_keyDown);
	//
	mc_story_finalunlock.btn_finalunlock_ok.removeEventListener(MouseEvent.MOUSE_UP, event_story_OK);
	mc_story_finalunlock.btn_finalunlock_cancel.removeEventListener(MouseEvent.MOUSE_UP, event_story_CANCEL);
}



resizeWindow(938, 638);

chan_story = snd_story_start.play();
chan_story.addEventListener(Event.SOUND_COMPLETE, event_storyMusic);
//snd_story_long.play();
story_hideAllButtons();
btn_story_set1_01.visible = true;
btn_story_set1_02.visible = true;
setStory(str_story_01);

mc_story_padlock.visible = false;
mc_story_finalunlock.visible = false;

btn_story_set1_01.addEventListener(MouseEvent.MOUSE_UP, event_storyState);
btn_story_set1_02.addEventListener(MouseEvent.MOUSE_UP, event_storyState);
btn_story_set2_01.addEventListener(MouseEvent.MOUSE_UP, event_storyState);
btn_story_set3_01.addEventListener(MouseEvent.MOUSE_UP, event_storyState);
btn_story_set4_01.addEventListener(MouseEvent.MOUSE_UP, event_storyState);

mc_story_finalunlock.btn_finalunlock_ok.addEventListener(MouseEvent.MOUSE_UP, event_story_OK);
mc_story_finalunlock.btn_finalunlock_cancel.addEventListener(MouseEvent.MOUSE_UP, event_story_CANCEL);