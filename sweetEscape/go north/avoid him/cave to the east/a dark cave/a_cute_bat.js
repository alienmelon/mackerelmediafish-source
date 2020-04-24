function init_bat(){
	
	/*
	About...
	
	  /######        /##                               /##                 /##                   /##                     
	 /##__  ##      | ##                              | ##                | ##                  | ##                     
	| ##  \ ##      | ##  /######  /##    /## /###### | ## /##   /##      | #######   /######  /######      /##  /#######
	| ########      | ## /##__  ##|  ##  /##//##__  ##| ##| ##  | ##      | ##__  ## |____  ##|_  ##_/     |__/ /##_____/
	| ##__  ##      | ##| ##  \ ## \  ##/##/| ########| ##| ##  | ##      | ##  \ ##  /#######  | ##        /##|  ###### 
	| ##  | ##      | ##| ##  | ##  \  ###/ | ##_____/| ##| ##  | ##      | ##  | ## /##__  ##  | ## /##   | ## \____  ##
	| ##  | ##      | ##|  ######/   \  #/  |  #######| ##|  #######      | #######/|  #######  |  ####//##| ## /#######/
	|__/  |__/      |__/ \______/     \_/    \_______/|__/ \____  ##      |_______/  \_______/   \___/ |__/| ##|_______/ 
	                                                       /##  | ##                                  /##  | ##          
	                                                      |  ######/                                 |  ######/          
	                                                       \______/                                   \______/ (A lovely bat.js)
	
	A cute bat celebrity for your website! The bat goes on a rant and then closes at the end. Ideal for all ages.
	
	      ( made by alienmelon, https://github.com/alienmelon/ )
	*/
	
	//setps through all this
	//once finished, the bat closes
	//[num][0] = sound file name
	//[num][1] = dialogue for that sound file
	var arr_bat_dialogue = [["AUD_BAT01_DIALOGUE_01", "Ah! Oh no! I have been disturbed!"], ["AUD_BAT01_DIALOGUE_02", "You found me! You found me out! Damn, you, meddler!"], ["AUD_BAT01_DIALOGUE_03", "How dare you disturb my rest, how dare you?"], ["AUD_BAT01_DIALOGUE_04", "How rude! How dare you?"], ["AUD_BAT01_DIALOGUE_05", "I am so tired too. I have not had a nights rest in ages. I was just starting to fall asleep too when you disturbed me. It took me years to get this far."], ["AUD_BAT01_DIALOGUE_06", "Ah! Oh no... oh! No! I know how you humans feel about bats."], ["AUD_BAT01_DIALOGUE_07", "Like you think we are horrible creatures!"], ["AUD_BAT01_DIALOGUE_08", "I know you do. Don't deny it! That's why you are always waking us up when we are trying to rest!"], ["AUD_BAT01_DIALOGUE_09", "Ha! Ha Ha! Little do you know that YOU are the horrible creatures! Yes, you. With all your meddling."], ["AUD_BAT01_DIALOGUE_10", "Always running away, and panicking at the sight of us, and throwing your hands in the air, and screaming, and asking if “it's caught in my hair”, and saying “Ah! Get it off me! Ah! Get it off!”... ugh, so rude."], ["AUD_BAT01_DIALOGUE_11", "I will let you know that I am NOT ugly!"], ["AUD_BAT01_DIALOGUE_12", "I am a very lovely bat. I won a bat beauty pageant once."], ["AUD_BAT01_DIALOGUE_13", "That might be news to you, but not to us bats."], ["AUD_BAT01_DIALOGUE_14", "I am a bat celebrity. Most bats know about me."], ["AUD_BAT01_DIALOGUE_15", "Yes... I am a very lovely little bat. Very, very lovely."], ["AUD_BAT01_DIALOGUE_16", "Don't you laugh! I will have you know that I have had a number of suitors in my life."], ["AUD_BAT01_DIALOGUE_17", "So many bats, and spiders, love me. It is hard to choose. So I do not choose."], ["AUD_BAT01_DIALOGUE_18", "Polyamory works. Yes... It sure does."], ["AUD_BAT01_DIALOGUE_19", "Oh look at that!"], ["AUD_BAT01_DIALOGUE_20", "Oh no I could not land there, that was not a good place."], ["AUD_BAT01_DIALOGUE_21", "Oh no, I'm so tired, but where can I rest?"], ["AUD_BAT01_DIALOGUE_22", "Who can I trust?"], ["AUD_BAT01_DIALOGUE_23", "Where might I lay my weary head to rest?"], ["AUD_BAT01_DIALOGUE_24", "Where may I hang my travel worn body?"], ["AUD_BAT01_DIALOGUE_25", "Yes... where indeed. Where... indeed..."], ["AUD_BAT01_DIALOGUE_26", "Is it here?"], ["AUD_BAT01_DIALOGUE_27", "Is it there?"], ["AUD_BAT01_DIALOGUE_28", "No. It was neither of these places."], ["AUD_BAT01_DIALOGUE_29", "Maybe over there."], ["AUD_BAT01_DIALOGUE_30", "Nope, that was even worst than all the other places."], ["AUD_BAT01_DIALOGUE_31", "Ah, yes... here is closer to home."], ["AUD_BAT01_DIALOGUE_32", "Ah, yes... I am getting tired. This is enough for me."], ["AUD_BAT01_DIALOGUE_33", "This is nice... Yes... goodbye."]];
	//squeak when you click on the bat
	var arr_clicksqueak = ["AUD_GIRB_SQUESHORT01", "AUD_GIRB_SQUESHORT02", "AUD_GIRB_SQUESHORT03", "AUD_GIRB_SQUESHORT04", "AUD_GIRB_SQUESHORT05"];
	var snd_grind = "AUD_BOOGY_SFX_01"; //the "pickup" and event sound
	//paths to files (easy to change)
	var str_sndPath = "audio/";
	var str_sndType = ".mp3";
	var str_imgPath = "images/";
	//the sound reference (pause or start this)
	var snd_bat = null;
	//is a sound playing? (on complete, handle this state)
	var bool_talking = false;
	var bool_batPickedUp = false;//if you are drag/dropping the bat (move)
	var bool_ismobile = false;//do a mobile check and prevent drag/drop if it's mobile (mobile takes more work to do right)
	//number of current dialogue array element
	var num_currTalk = 0;
	//number of width/height of bat
	var num_batHeight = 300;
	var num_batWidth = 655;
	var num_speedX;
	var num_speedY;
	var num_batTargX;
	var num_batTargY;
	var num_batMoveCount;//countdown till canceling going to a place
	//references to the main divs
	var popup = null;//opening pop up alert
	var bat = null;//the actual bat
	var dialogue = null;//dialogue window at the bottom writing out what bat is saying
	//
	var curr_action = ""; //what type of state the bat is in (manage animations this way...)
	//animation timer
	var int_timer;//set interval timer
	
	//-----------------CHECK
	
	//
	function mobilecheck(){
		//http://detectmobilebrowsers.com/
		var check = false;
		(function(a){if(/(android|bb\d+|meego).+mobile|android|ipad|playbook|silk|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
		return check;
	}
	

	
	//-----------------NUMBERS
	
	function setRandomMoveCount(){
		num_batMoveCount = returnRandRange(20, 50);
	}
	
	function randomTarget(){
		num_batTargX = returnRandRange(0, returnDocWidth() - num_batWidth);
		num_batTargY = returnRandRange(0, returnDocHeight() - num_batHeight);
		setRandomMoveCount();
	}
	
	function speed_walk() {
		num_speedX = .01;
		num_speedY = .01;
		snd_footstep();
	}
	
	function speed_stop() {
		num_speedX = 0;
		num_speedY = 0;
		snd_footstep();
	}
	
	//set the size variables (important for detecting if off screen...)
	//edit: not necessary...
	/*function window_rest(){
		num_batWidth = 306;
	}

	function window_fly(){
		num_batWidth = 650;
	}*/
	
	function returnRandRange(num_min, num_max){
	    return (Math.floor(Math.random() * (num_max - num_min + 1)) + num_min);
	}
	
	function returnDocWidth(){
		var num_width = window.innerWidth
		|| document.documentElement.clientWidth
		|| document.body.clientWidth;
		//
		return num_width;
	}

	function returnDocHeight(){
		var num_height = window.innerHeight
		|| document.documentElement.clientHeight
		|| document.body.clientHeight;
		//
		return num_height;
	}
	
	//set an element's x/y position
	function setX(str_id, num){
		getById(str_id).style.left = String(num) + 'px';
	}
	function setY(str_id, num){
		getById(str_id).style.top = String(num) + 'px';
	}
	
	//move div to x/y -- ("divID", event.pageX, event.pageY)
  	function moveDivTo(div, pageX, pageY) {
    	getById(div).style.left = pageX - getById(div).offsetWidth / 2 + 'px';
    	getById(div).style.top = pageY - getById(div).offsetHeight / 2 + 'px';
  	}
	
	//-----------------AUDIO
	
	//walking footstep
	function snd_footstep() {
		//TODO: PLOP SOUND
	}
	
	//play a basic sound effect
	function playSoundFX(strFilename){
		var snd_audio = new Audio(str_sndPath + strFilename + str_sndType);
		snd_audio.play();
	}
	
	//comment out to test ending dialogue parts:
	//num_currTalk = arr_bat_dialogue.length - 3;
	//play dialogue audio
	function playDialogue(){
		//stop it first in case it's already running...
		if(snd_bat != undefined){
			snd_bat.pause();
		}
		//force quit if over (error returns null)
		//sorry this is nested in a whole bunch of ifs because this was a last minute hack after testing on mobile...
		//it doesn't look prety but at least it works
		if(num_currTalk > arr_bat_dialogue.length-1 || typeof arr_bat_dialogue[num_currTalk] === 'undefined'){
			endBat();
		}else{
			//actually run the audio now...
			snd_bat = new Audio(str_sndPath + arr_bat_dialogue[num_currTalk][0] + str_sndType);
			snd_bat.play();
			narrationDialogueWindow(arr_bat_dialogue[num_currTalk][1]);
			bool_talking = true;
			//increment
			num_currTalk += 1;
			//animation state
			showThisAnimation(curr_action);
			//if bat is on the VERY LAST dialogue piece, then it should rest before closing...
			if(num_currTalk >= arr_bat_dialogue.length){
				num_batMoveCount = 1000;
				curr_action = "_idle";
				setTalkingAnimation();
			}
			//on complete, manage sound ending (reset animation, reset bat, check if bat dialogue is done)...
			snd_bat.onended = function(){ 
				bool_talking = false;
				setTalkingAnimation(); //set back to non-talking
				hideThis("dialogue");
				//if bat has reached the end then quit
				if(num_currTalk >= arr_bat_dialogue.length){
					endBat();
				}
			};
		}
	}
	
	function narrationDialogueWindow(str_text){
		//open window to show the bat's narration
		console.log("Bat says: " + arr_bat_dialogue[num_currTalk][1]);
		showThis("dialogue");
		dialogue.innerHTML = "Bat says: " + arr_bat_dialogue[num_currTalk][1];
	}
	
	//------------------CONTROLING ELEMENTS AND VISIBILITY
	
	function appendToDiv(appendTo, str_id, str_img){
		var elem = document.createElement("div");
		elem.id = str_id;
		//elem.className = "_bat";
		appendTo.appendChild(elem);
		elem.innerHTML = '<img src=' + str_imgPath + str_img + '>';
		elem.style.position = 'absolute';
	}
	
	//return element by ID (shorthand)
	function getById(str_ID){
		return document.getElementById(str_ID);
	}
	
	//delete/remove element
	function removeThis(str_ID){
		var _this = getById(str_ID);
		if(_this != null){
			_this.parentNode.removeChild(_this);
		};
	}
	
	function hideThis(str_ID){
		getById(str_ID).style.visibility = "hidden";
	}
	
	function showThis(str_ID){
		getById(str_ID).style.visibility = "visible";
	}
	
	//-----------------ANIMATIONS
	
	function changeEvent() {
		//don't repeat sucking
		var arr_states = ["_idle", "_walking"];
		//
		curr_action = arr_states[Math.ceil(Math.random()*arr_states.length)-1];
		//manage talking here... call another
		if(!bool_talking){
			playDialogue();
		}
		//restrict for audio playing (if bat is talking then append _talking to the state)
		setTalkingAnimation();
		//handle setting acording to what was chosen here...
		//if walking, set state, if talking set that...
		if(curr_action == "_idle"){
			batSetIdle();
		}
		if(curr_action == "_idle_talking"){
			batSetIdleTalking();
		}
		if(curr_action == "_walking_talking"){
			batSetWalkingTalking();
		}
		if(curr_action == "_walking"){
			batSetWalking();
		}
	}
	
	//restrict/set states for talking
	//if bat IS talking, then append _talking
	//if bat IS NOT talking, then force back to default
	function setTalkingAnimation(){
		if(bool_batPickedUp){
			curr_action = "_pickup";
		}
		if(bool_talking){
			if(curr_action == "_walking"){
				curr_action = "_walking_talking";
			}
			if(curr_action == "_pickup"){
				curr_action = "_pickup_talking";
			}
			if(curr_action == "_idle"){
				curr_action= "_idle_talking";
			}
		}
		//if NOT talking (force set to that too)
		if(!bool_talking){
			if(curr_action == "_walking_talking"){
				curr_action = "_walking";
			}
			if(curr_action == "_pickup_talking"){
				curr_action = "_pickup";
			}
			if(curr_action == "_idle_talking"){
				curr_action= "_idle";
			}
		}
		//show...
		showThisAnimation(curr_action);
	}
	
	function showThisAnimation(str_div){
		//hide all of them first
		hideThis("_idle");
		hideThis("_idle_talking");
		hideThis("_walking");
		hideThis("_walking_talking");
		hideThis("_pickup");
		hideThis("_pickup_talking");
		//show just the one
		curr_action = str_div;
		showThis(curr_action);
	}
	
	//setups for both types of state
	function batSetWalkingState(){
		randomTarget();
		//window_fly();
		//speed_walk();
	}
	function batSetIdleState(){
		setRandomMoveCount();
		//window_rest();
	}
	
	function batSetIdle(){
		showThisAnimation("_idle");
		batSetIdleState();
	}
	
	function batSetIdleTalking(){
		showThisAnimation("_idle_talking");
		batSetIdleState();
	}
	
	function batSetWalking(){
		showThisAnimation("_walking");
		batSetWalkingState();
	}
	
	function batSetWalkingTalking(){
		showThisAnimation("_walking_talking");
		batSetWalkingState();
	}
	
	function batSetPickup(){
		showThisAnimation("_pickup");
		//window_fly();
	}
	
	function batSetPickupTalking(){
		showThisAnimation("_pickup_talking");
		//window_fly();
	}
	
	//-----------------TIMER & EVENTS (ANIMATION)
	
	function event_timer(){
		//calculating distance from target
		var num_x = parseInt(bat.style.left);
		var num_y = parseInt(bat.style.top);
		var num_targX = num_batTargX;
		var num_targY = num_batTargY;
		var num_distX = num_targX - num_x;
		var num_distY = num_targY - num_y;
		//IF IDLE (has ended)
		if((curr_action == "_idle" || curr_action == "_idle_talking") && num_batMoveCount <= 0){
			changeEvent();	
		}
		//WALKING (go to place)
		if(curr_action == "_walking" || curr_action == "_walking_talking"){
			//
			setX("bat", (num_x+num_distX*.07));
			setY("bat", (num_y+num_distY*.07));
			//if arrived (RESET)
			if(parseInt(bat.style.left) == num_targX || parseInt(bat.style.top) == num_targY || num_batMoveCount <= 0){
				changeEvent();
			}
		}
		//deduct countdown to force a state reset
		num_batMoveCount -= 1;
	}
	
	//drag&drop thanks to...
	// >>> https://javascript.info/mouse-drag-and-drop
	function event_batEvents(){
		//playDialogue
		bat.onclick = function(){
			//squeak 
			playSoundFX(arr_clicksqueak[Math.ceil(Math.random()*arr_clicksqueak.length)-1]);
			//clicking on bat forces the next dialogue to play (in case bat is not talking)
			if(!bool_talking){
				playDialogue();
			}
			//"auto play" issues get in the way,
			//so if it's mobile then just force the next set of dialogue...
			//irregardless of cutting off the bat
			if(bool_ismobile){
				playDialogue();
			}
		}
		//only drag/drop if not mobile
		if(!bool_ismobile){
			//prevent default
			bat.ondragstart = function() {
			  return false;
			};
			//messy drag and drop for bat...
			bat.onmousedown = function(event){
				//squeak
				playSoundFX(arr_clicksqueak[Math.ceil(Math.random()*arr_clicksqueak.length)-1]);
				//handle drag & drop
				bool_batPickedUp = true;
				bat.addEventListener('mousemove', bat_moveEvent);
				setTalkingAnimation();
				//
				bat.onmouseup = function() {
					bat.removeEventListener('mousemove', bat_moveEvent);
					bat.onmouseup = null;
					bool_batPickedUp = false;
					changeEvent();//change bat's event when put down...
				};
			}
		}
	}
	
	function bat_moveEvent(event) {
		moveDivTo("bat", event.pageX, event.pageY);
	}
	
	//-----------------init (MAKE BAT & OTHER ELEMENTS)
	
	//call this to completely start the bat
	function initBat(){
		makeBat();
		//set/init the first state
		curr_action = "_walking_talking";
		speed_walk();
		//set first audio and place to fly to here...
		playDialogue();
		event_batEvents();//init event listeners for bat
	}
	
	//setup the bat and all states
	function makeBat(){
		bat = document.createElement("div");
		bat.id = "bat";
		bat.style.position = 'absolute';
		bat.style.width = '655px';
		bat.style.height = '300px'
		bat.style.left = "40%";
		bat.style.top = "40%";
		bat.style.cursor = "grab";
		//append animations here
		appendToDiv(bat, "_idle", "IMG_BATS_IDLE.gif");
		appendToDiv(bat, "_idle_talking", "IMG_BATS_IDLETALKING.gif");
		appendToDiv(bat, "_walking", "IMG_BATS_WALKING.gif");
		appendToDiv(bat, "_walking_talking", "IMG_BATS_WALKING_TALKING.gif");
		appendToDiv(bat, "_pickup", "IMG_BATS_PICKUP.gif");
		appendToDiv(bat, "_pickup_talking", "IMG_BATS_PICKUP_TALKING.gif");
		//append all of the above into "bat" div...
		document.getElementsByTagName("body")[0].appendChild(bat);
		//place
		setX("bat", (returnDocWidth() - num_batWidth)/2);
		setY("bat", (returnDocHeight() - num_batHeight)/2);
	}
	
	//completely remove the bat
	function endBat(){
		console.log("The bat has left.");
		clearInterval(int_timer);
		removeThis("bat");
		removeThis("dialogue");
	}
	
	//create the dialogue window
	function makeDialogue(){
		dialogue = document.createElement("div");
		dialogue.id = "dialogue";
		dialogue.style.position = "fixed";
		dialogue.style.width = "400px";
		dialogue.style.height = "100px";
		//font and colors
		dialogue.style.textAlign = "center";
		dialogue.style.border = "2px solid black";
		dialogue.style.borderColor = "#FF8212";
		dialogue.style.padding = "10px";
		dialogue.style.color = "white";
		dialogue.style.fontFamily = "'Lucida Console', Monaco, monospace";
		dialogue.style.backgroundColor = "#C15500";
		//align
		dialogue.style.bottom = "5px";
		dialogue.style.left = "35%";
		document.getElementsByTagName("body")[0].appendChild(dialogue);
	}
	
	//show alert window first
	function bat_alert(){
		//play gridn sound
		popup = document.createElement("div");
		popup.id = "popup";
		//append elements to popup
		appendToDiv(popup, "_popupwindow", "IMG_ALERTWINDOW_TEXT.png");
		appendToDiv(popup, "btn_popup", "IMG_ALERTWINDOW_BUTTON.png");
		//append all the above
		document.getElementsByTagName("body")[0].appendChild(popup);
		//center pop up
		popup.style.position = 'fixed';
		setX("popup", (returnDocWidth() - 270)/2);
		setY("popup", (returnDocHeight() - 270)/2);
		//position button in pop up
		getById("btn_popup").style.left = '98px';
		getById("btn_popup").style.top = '170px';
		getById("btn_popup").style.cursor = 'pointer';
		//
		getById("btn_popup").onclick = function(){
			playSoundFX(snd_grind);
			removeThis("popup");
			//checks
			if(mobilecheck()){
				bool_ismobile = true;
			}else{
				bool_ismobile = false;
			}
			//values
			randomTarget();
			//init bat
			console.log("The bat has been unleashed...");
			makeDialogue();
			initBat();
			//events and animation timer
			int_timer = setInterval(event_timer, 100);
		}
		//
	}
	
	//start alert window...
	bat_alert();
}


