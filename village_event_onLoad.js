
//SOUND VARS
arr_snd_tikuTalking = ["AUD_FAQ_REPLY01.mp3", "AUD_FAQ_REPLY02.mp3", "AUD_FAQ_REPLY03.mp3", "AUD_FAQ_REPLY04.mp3", "AUD_FAQ_REPLY05.mp3", "AUD_FAQ_REPLY06.mp3", "AUD_FAQ_REPLY07.mp3", "AUD_FAQ_REPLY08.mp3", "AUD_FAQ_REPLY09.mp3", "AUD_FAQ_REPLY10.mp3"];
//arr_snd_vermBlah = ["SND_ESSAY03_VERMIN_BLAH_10.mp3", "SND_ESSAY03_VERMIN_BLAH_09.mp3", "SND_ESSAY03_VERMIN_BLAH_07.mp3", "SND_ESSAY03_VERMIN_BLAH_08.mp3", "SND_ESSAY03_VERMIN_BLAH_05.mp3", "SND_ESSAY03_VERMIN_BLAH_06.mp3", "SND_ESSAY03_VERMIN_BLAH_04.mp3", "SND_ESSAY03_VERMIN_BLAH_03.mp3", "SND_ESSAY03_VERMIN_BLAH_01.mp3", "SND_ESSAY03_VERMIN_BLAH_02.mp3"];

//VARS

var int_timer = 0;//interval for animation and movement

//OBJECT REFERENCES
//for the small panic bubble (help us)
div_bubble_panic = hypeDocument.getElementById("div_bubble_panic");
txt_panic = hypeDocument.getElementById("txt_panic");
div_dialogue = hypeDocument.getElementById("div_dialogue");//bottom dialogue window

div_alert = hypeDocument.getElementById("div_alert");//alert window (would you like to defeat this vermin) that pops up
txt_alert = hypeDocument.getElementById("txt_alert");//text alert inside the alert window

div_verm = hypeDocument.getElementById("div_verm");//the actual vermin
div_vamoose = hypeDocument.getElementById("div_vamoose");//run away animation

btn_door = hypeDocument.getElementById("btn_door");//the door that opens

//villagers
div_villager01 = hypeDocument.getElementById("div_villager01");
div_villager02 = hypeDocument.getElementById("div_villager02");
div_villager03 = hypeDocument.getElementById("div_villager03");
div_villager04 = hypeDocument.getElementById("div_villager04");
div_villager05 = hypeDocument.getElementById("div_villager05");
div_villager06 = hypeDocument.getElementById("div_villager06");
div_villager07 = hypeDocument.getElementById("div_villager07");

//background elements that fade out when done
div_chaos_fire = hypeDocument.getElementById("div_chaos_fire");
div_chaos_fuzzy = hypeDocument.getElementById("div_chaos_fuzzy");
div_chaos_errors = hypeDocument.getElementById("div_chaos_errors");

//pop up item window
txt_item = hypeDocument.getElementById("txt_item");
div_item = hypeDocument.getElementById("div_item");



arr_villagers = [div_villager01, div_villager02, div_villager03, div_villager04, div_villager05, div_villager06, div_villager07];

//DIALOGUE
arr_villagers_panic = ["Help us! The vermin is eating our village!", "Somebody help!", "We're doomed!", "Oh no! It's over!", "Error on line 32!!", "We're doomed!", "We're doomed beyond reproach!", "Doom!", "Help us!", "Please defeat the vermin!", "Won't anyone please defeat the vermin!", "Our village has been eaten!", "All our homes have been eaten!", "That vermin devoured our entire village!", "First our homes, then us! We're next!", "No! We're next! We surely will get eaten!", "All our homes are gone!", "We're next!", "Please! You must stop him!!", "Somebody help! Defeat that vermin!", "Save our villagers!", "Our village is gone! Save our villagers!", "Stop the vermin!", "HEEEEEELllLLllLP!", "Error on line 1002!!", "Error on line 48!", "Error! Error everywhere!", "Error on line 9201! Terminal corruption imminent!", "Terminal deletion imminent!", "AaaAaAaaa!", "Help us!", "No :( I don't want to be vermin food!"];
arr_villagers_agreedToHelp = ["Fight!", "Fight! Fight! Fight!", "Make it go away!", "Scare the vermin!", "Save us! I know you can!", "Please make it go away!", "Destroy the vermin!", "Our hero is here! Destroy the vermin!", "Defeat the vermin! DO IT!!!", "Save our village!", "Defeat!", "Please help us!", "Please! You must help us!", "Save us!", "Save our village! Save our villagers!", "Fight the vermin!", "Do it!!!!", "Please please please!", "HEEeeEEeeeEElp!!!", "We know you have it in you!", "We believe in you!", "We know you can defeat it!", "We all believe in you!", "You are our hero! We know it!", "Yay! Fight!"];
//vermin has been defeated. they are celebrating now
arr_villagers_celebrate = ["Thank you!", "With the victory that you have granted us we will rebuild!", "We will overcome!", "Yes, we will overcome! We will thrive!", "Yay!", "We're free!", "The oppression is over!", "Finally I can go and see my kids!", "We all have lives we can go back to!", "Yay! It's over!", "Yay! The worst is behind us!", "We can go back to normal!", "Hurray! You're our hero!", "I will write songs about you!", "I will write poems about you!", "I will name my children after you!", "We will never forget this!", "Hurray! Safety is ours!"];

//STRINGS
var str_opening01 = "The East Village has plunged into complete chaos. Fires rage in glitching fields as every possible critical error clouds what normally would be a clear sky.<br>All of the houses are gone. The villagers stand helpless beneath the shadow of a giant virtual vermin that devoured everything they love.<br>Things look bad for the inhabitants here!<br>If no one defeats the vermin then surely the villagers will be devoured next.<br>Maybe you should offer to help...<br><br><center><a href='#' class='inspectionMessageButton' id='btn1'>Ok.</a></center>";
//first set of TIKU's asking for help (Save us!)
var str_tiku_helpUs01 = "<img src='${resourcesFolderName}/IMG_VILLAGER_03.gif' alt=''> TIKU says:<br><br>Please defeat the vermin! It is eating our village! All our homes are gone. We're next!<br>Please, you must stop him!!!<br><br><center><a href='#' class='inspectionMessageButton' id='btn1'>I will help you, Tiku!</a> ... <a href='#' class='inspectionMessageButton' id='btn2'>No.</a></center>";
var str_tiku_helpUs_YES = "<img src='${resourcesFolderName}/IMG_VILLAGER_07.gif' alt=''> TIKU says:<br><br>YAY! WE'RE SAVED!<br><br><center><a href='#' class='inspectionMessageButton' id='btn1'>Ok.</a></center>";
var str_tiku_helpUs_NO = "<img src='${resourcesFolderName}/IMG_VILLAGER_01.gif' alt=''> TIKU says:<br><br>D: WHY??? ONLY U CAN DO IT!!!<br><br><center><a href='#' class='inspectionMessageButton' id='btn1'>Sorry.</a></center>";

//click on vermin
var str_alert01 = "Would you like to defeat this vermin?<br><br><a href='#' class='inspectionMessageButton' id='btn1'><img src='${resourcesFolderName}/IMG_BTN_YES.png' alt=''></a> <a href='#' class='inspectionMessageButton' id='btn2'><img src='${resourcesFolderName}/IMG_BTN_CANCEL.png' alt=''></a>";
var str_alert02 = "Excellent! DO IT:<br><br><a href='#' class='inspectionMessageButton' id='btn1'><img src='${resourcesFolderName}/IMG_BTN_VAMOOSE.png' alt=''></a>";
var str_alert_defeated = "The vermin has been successfully defeated!<br><br>(He ran away forever.)<br><br><a href='#' class='inspectionMessageButton' id='btn1'><img src='${resourcesFolderName}/IMG_BTN_YAY.png' alt=''></a>";

//dialogue control
num_villager_panic = 0;//step through the array
var num_bubbleChangeDefault = 20;//default value to set back to once countdown has ended
var bubbleChangeCnt = 0;//the one that gets changed (bubbleChangeCnt-=1)

var str_dialogueType = "panic"; //type: "panic", "agreedToHelp", "vamoosed" (win), "ending" (end of all dialogue, enter door)

////////SHARED////////

//math
Math_randomRange = function(num_min, num_max){
	return num_min + (num_max - num_min) * Math.random();
}

//custom behavior call (like playing a clip)
callBehavior = function(str){
	//symb.startTimelineNamed('Main Timeline', hypeDocument.kDirectionForward);
	hypeDocument.triggerCustomBehaviorNamed(str);
}

playSound = function(str_filename){
	var snd = new Audio("${resourcesFolderName}/" + str_filename);
	snd.play();
};



//writing
setText = function(div, str){
	div.innerHTML = str;
}

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

returnX = function(a){
	return hypeDocument.getElementProperty(a, 'left');
}

returnY = function(a){
	return hypeDocument.getElementProperty(a, 'top');
}

setX = function(div, x){
	div.style.left = String(x) + 'px';
}

setY = function(div, y){
	div.style.bottom = String(y) + 'px';
}

//url
gotoURL = function(str){

	window.open(str, "_self");

}

////////////////////CLICK ON VERMIN



clickVermin = function(){
	
	if(str_dialogueType == "agreedToHelp"){
		//playSound(arr_snd_vermBlah[Math.ceil(Math.random()*arr_snd_vermBlah.length)-1]);
		showAlertWindow(str_alert01, event_clickVermin_defeat_YES, event_clickVermin_defeat_NO);
		playSound("AUD_ESSAY03_ERROR_OS_01.mp3");
		event_dialogue_DISMISS();//close any dialogue that's open
	};
};

function event_clickVermin_defeat_YES(){
	showAlertWindow(str_alert02, event_VAMOOSE, null);
}

function event_clickVermin_defeat_NO(){
	hideAlertWindow();
}

function event_VAMOOSE(){
	//THIS EVENT CHASES VERM AWAY
	hideAlertWindow();
	str_dialogueType = "vamoosed";
	showObject(div_vamoose);
	
	hideObject(div_verm);
	
	callBehavior("MAKE_VARMOOSE");
	
	//stop sound
	callBehavior("stopMainLoop");
	playSound("AUD_BOOTUP_DEFAULT.mp3");
}

//this gets called at the end of the animation. trigger everything else here
event_END_VAMOOSE_ANIMATION = function(){
	
	hideObject(div_vamoose);
	//fade out
	div_chaos_fire.style.opacity = "0";
	div_chaos_fuzzy.style.opacity = "0";
	div_chaos_errors.style.opacity = "0";
	
	//happy default music
	callBehavior("playNewMainLoop");
	playSound("minibyte_tada_2.mp3");
	
	showAlertWindow(str_alert_defeated, event_VAMOOSE_triggerEndingDialogue, null);
	
	
}

function event_VAMOOSE_triggerEndingDialogue(){
	//TRIGGER THE ENDING DIALOGUE WHERE THEY GIVE YOU THE LICENSE KEY
	hideAlertWindow();
	setMainWindowText(str_dialogue_ENDING_01, event_tiku_WINDIALOUGE_01, null);
}


////////////////////TIKU SPECIFIC



clickTiku = function(){

	if(str_dialogueType == "panic"){
		playSound(arr_snd_tikuTalking[Math.ceil(Math.random()*arr_snd_tikuTalking.length)-1]);
		setMainWindowText(str_tiku_helpUs01, event_tiku_helpUs_YES, event_tiku_helpUs_NO);
	};
	
	//CLICKING ANY OTHER STATES FIRE HERE
	//MAKE A "HURRAY OUR HERO" LOOP FOR VAMOOSED STATE
	
}

//DIALOGUE TREES
//setMainWindowText(str_tiku_helpUs01, event_dialogue_DISMISS, null);
function event_tiku_helpUs_YES(){
	str_dialogueType = "agreedToHelp";
	event_dialogue_DISMISS();
	div_verm.style.filter = "brightness(100%)";
	div_verm.style.cursor = "pointer";
	//YAY 
	setMainWindowText(str_tiku_helpUs_YES, event_dialogue_DISMISS, null);
}

function event_tiku_helpUs_NO(){
	str_dialogueType = "agreedToHelp";
	event_dialogue_DISMISS();
	div_verm.style.filter = "brightness(100%)";
	div_verm.style.cursor = "pointer";
	//D:
	setMainWindowText(str_tiku_helpUs_NO, event_dialogue_DISMISS, null);
}

//!!!!!!I AM HERE!!!!!!

///TIKU WIN DIALOGUE TREE (LICENSE KEY GETS GIVEN HERE - SHOW DOOR - ENABLE DOOR - FADE THEM OUT)
var str_dialogue_ENDING_01 = "<img src='${resourcesFolderName}/IMG_VILLAGER_01.gif' alt=''> TIKU says:<br>Thank you! We're saved!!<br>If there is ever anything you need from us, please let us know!<br><br><img src='${resourcesFolderName}/IMG_VILLAGER_02.gif' alt=''> TIKU #2 says:<br>Yes, we will help!<br><br><center><a href='#' class='inspectionMessageButton' id='btn1'>I need help.</a></center>";
var str_dialogue_ENDING_02 = "<img src='${resourcesFolderName}/IMG_VILLAGER_01.gif' alt=''> TIKU SAYS:<br>Yay!<br><img src='${resourcesFolderName}/IMG_VILLAGER_02.gif' alt=''> TIKU #2 says:<br>What do you need help with?<br><img src='${resourcesFolderName}/IMG_VILLAGER_01.gif' alt=''> TIKU SAYS:<br>Yes! We can help you!<br><img src='${resourcesFolderName}/IMG_VILLAGER_04.gif' alt=''> TIKU #3 SAYS:<br>We <em>KNOW</em> things...<br><br><center><a href='#' class='inspectionMessageButton' id='btn1'>Great! I am looking for the fish. Not just any fish but <em>THE</em> Fish. Spill the beans, bean!</a></center>";
var str_dialogue_ENDING_03 = "<img src='${resourcesFolderName}/IMG_VILLAGER_01.gif' alt=''> TIKU SAYS:<br>Oh...<br><br><img src='${resourcesFolderName}/IMG_VILLAGER_04.gif' alt=''> TIKU #3 SAYS:<br>Oh, the Fish, not just any fish but <em>THE</em> fish...<br><br><center><a href='#' class='inspectionMessageButton' id='btn1'>Yes. That one please.</a></center>";
var str_dialogue_ENDING_04 = "<img src='${resourcesFolderName}/IMG_VILLAGER_05.gif' alt=''> TIKU #4 SPILLS THE BEANS:<br>They went thataway!<br><br><center><a href='#' class='inspectionMessageButton' id='btn1'>Great. Tell me more...</a></center>";
var str_dialogue_ENDING_05_givekey = "<img src='${resourcesFolderName}/IMG_VILLAGER_04.gif' alt=''> TIKU #3 SAYS:<br>Ok somewhere is critical information that you need in order to complete your journey...<br><img src='${resourcesFolderName}/IMG_VILLAGER_01.gif' alt=''> TIKU SAYS:<br>Yes, it's around here somewhere...<br><br><img src='${resourcesFolderName}/IMG_VILLAGER_05.gif' alt=''> TIKU #4 SPILLS THOSE BEANS:<br>I know! You need <em>this</em> license key! Please enter it when you find whatever it is that you are looking for.<br><br><center><a href='#' class='inspectionMessageButton' id='btn1'>Give it to me!!</a></center>";

var str_licenseKeyMessage = "<img src='${resourcesFolderName}/IMG_SITE_KEY.png' alt=''> Congratulations! You have found the license key!<br><br>The license key is:<br><center>HOT-BIG-GIGABYTES-123</center><br><br>It looks like a good one, promising to unlock something important, something great even.<br>...But what?<br><br><center><a href='#' class='inspectionMessageButton' id='btn_closeItem'>Ok.</a></center>";

var str_dialogue_ENDING_06_closing = "<img src='${resourcesFolderName}/IMG_VILLAGER_01.gif' alt=''> TIKU SAYS:<br>A long time ago we sent one of our own after THE Fish, with this key, but they never returned. We know they failed their mission. :(<br><img src='${resourcesFolderName}/IMG_VILLAGER_04.gif' alt=''> TIKU #3 SAYS:<br>Maybe you will succeed!<br><br><br><center><a href='#' class='inspectionMessageButton' id='btn1'>I will. Thank you.</a></center>";


//OPEN UP THE SECOND ANIMATION THAT SHOWS VERM RUNNING AWAY
//WHEN CLOSES, PLAY CLOSING TIKU DIALOGUE
//TIKUS GIVE YOU LICENSE KEY
//OPEN THE DOOR
//AND POINT YOU ON YOUR JOURNEY

function event_tiku_WINDIALOUGE_01(){
	setMainWindowText(str_dialogue_ENDING_02, event_tiku_WINDIALOGUE_02, null);
}

function event_tiku_WINDIALOGUE_02(){
	setMainWindowText(str_dialogue_ENDING_03, event_tiku_WINDIALOGUE_03, null);
}

function event_tiku_WINDIALOGUE_03(){
	//show the door here...
	showObject(btn_door);
	btn_door.style.filter = "brightness(30%)";
	btn_door.style.pointerEvents = "none";
	//
	setMainWindowText(str_dialogue_ENDING_04, event_tiku_WINDIALOGUE_04, null);
}

function event_tiku_WINDIALOGUE_04(){
	//
	setMainWindowText(str_dialogue_ENDING_05_givekey, event_tiku_WINDIALOGUE_05_givekey, null);
}

function event_tiku_WINDIALOGUE_05_givekey(){
	//open window
	gainItem(str_licenseKeyMessage);
	//final closing set of dialogue
	setMainWindowText(str_dialogue_ENDING_06_closing, event_tiku_END, null);
}


//THE END OF THE LINE. FADE THEM OUT. ENABLE DOOR
function event_tiku_END(){
	btn_door.style.filter = "brightness(100%)";
	btn_door.style.pointerEvents = "auto";
	btn_door.style.cursor = "pointer";
	//
	event_dialogue_DISMISS();
	//fade them out
	for (var i = 0; i<arr_villagers.length; ++i){
		arr_villagers[i].style.opacity = "0";
		arr_villagers[i].style.pointerEvents = "none";
	}
	//WAIT FOR CLICK NOW...
	clearInterval(int_timer);
	hideObject(div_bubble_panic);
	str_dialogueType = "ending";
	
}

////////////////////CLICK DOOR

clickDoor = function(){
	//forward
	gotoURL("door to thataway/");
}


////////////////////WINDOWS AND ALERTS

//gained an item
function gainItem(strMessage){		
	playSound("minibyte_tada_2.mp3");
	showObject(div_item);
	setText(txt_item, strMessage);
	//events
	var btn_closeItem = hypeDocument.getElementById("btn_closeItem");
	//
	if(btn_closeItem != null){
		//event
		btn_closeItem.onclick = function(){
			playSound("AUD_CLICK03.mp3");
			hideObject(div_item);
			btn_closeItem.onclick = null;
		}
	}
}

function hideAlertWindow(){
	hideObject(div_alert);
	setText(txt_alert, "");
}

function showAlertWindow(str, event_function1, event_function2){
		
	showObject(div_alert);
	setText(txt_alert, str);
	
	//get and set button here (it's an image");
	//buttons
	var btn1 = hypeDocument.getElementById("btn1");
	var btn2 = hypeDocument.getElementById("btn2");
	
	//listeners for two optional functions
	//first
	if(btn1 != null){
		btn1.onclick = function() {
			event_function1();
			playSound("AUD_CLICK03.mp3");
		}
	}
	//second
	if(btn2 != null){
		btn2.onclick = function() {
			event_function2();
			playSound("AUD_CLICK03.mp3");
		}
	}
	
};

function setBubbleCords(divToSet){
	//random villager that should say the thing
	//set there and set the text
	//text gets set every time it moves
	var randVillager = arr_villagers[Math.ceil(Math.random()*arr_villagers.length)-1];
	var randTargX = returnX(randVillager);
	var randTargY = returnY(randVillager);
			
	setX(divToSet, randTargX - 200);
	setY(divToSet, randTargY + 50);
}

function setPanicBubble(arr){
	//show in case it's hidden
	showObject(div_bubble_panic);
	//
	setBubbleCords(div_bubble_panic);
	bubbleChangeCnt = Math_randomRange(10, num_bubbleChangeDefault);
	//
	if(num_villager_panic > arr.length-1){
		num_villager_panic = 0;
	}
	//check
	setText(txt_panic, arr[num_villager_panic]);
	num_villager_panic += 1;
	
	//if...
}

function setMainWindowText(str, event_function1, event_function2){
	
	showObject(div_dialogue);
	setText(div_dialogue, str);
	
	//talking sound
	playSound(arr_snd_tikuTalking[Math.ceil(Math.random()*arr_snd_tikuTalking.length)-1]);
	
	//buttons
	var btn1 = hypeDocument.getElementById("btn1");
	var btn2 = hypeDocument.getElementById("btn2");
	
	//listeners for two optional functions
	//first
	if(btn1 != null){
		btn1.onclick = function() {
			event_function1();
			playSound("AUD_CLICK06.mp3");
		}
	}
	//second
	if(btn2 != null){
		btn2.onclick = function() {
			event_function2();
			playSound("AUD_CLICK06.mp3");
		}
	}
	
}

//close the dialogue window
function event_dialogue_DISMISS(){
	hideObject(div_dialogue);
	setText(div_dialogue, "");
}

////////////////////

function event_timer(){
	
	if(str_dialogueType == "panic" && bubbleChangeCnt <= 0){
		setPanicBubble(arr_villagers_panic);
	}
	
	if(str_dialogueType == "agreedToHelp" && bubbleChangeCnt <= 0){
		setPanicBubble(arr_villagers_agreedToHelp);
	}
	
	if(str_dialogueType == "vamoosed" && bubbleChangeCnt <= 0){
		setPanicBubble(arr_villagers_celebrate);
	}
	
	bubbleChangeCnt -= 1;
	
}



setMainWindowText(str_opening01, event_dialogue_DISMISS, null);

div_verm.style.filter = "brightness(0%)";//HIDE VERM FOR NOW

hideObject(div_alert);
hideObject(div_vamoose);
hideObject(btn_door);
//
hideObject(div_item);

int_timer = setInterval(event_timer, 100);
