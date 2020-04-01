
var arr_ghoulclicks = ["AUD_GHOST_CLICK_01.mp3", "AUD_GHOST_CLICK_02.mp3", "AUD_GHOST_CLICK_03.mp3", "AUD_GHOST_CLICK_04.mp3", "AUD_GHOST_CLICK_05.mp3"];
var arr_ghoulTalking = ["AUD_GHOST_SAY01.mp3", "AUD_GHOST_SAY02.mp3", "AUD_GHOST_SAY03.mp3", "AUD_GHOST_SAY04.mp3", "AUD_GHOST_SAY05.mp3", "AUD_GHOST_SAY06.mp3", "AUD_GHOST_SAY07.mp3", "AUD_GHOST_SAY08.mp3", "AUD_GHOST_SAY09.mp3", "AUD_GHOST_SAY10.mp3", "AUD_GHOST_SAY11.mp3", "AUD_GHOST_SAY12.mp3", "AUD_GHOST_SAY13.mp3"];
var arr_ghoulBoo = ["AUD_GHOST_BOO_01.mp3", "AUD_GHOST_BOO_02.mp3", "AUD_GHOST_BOO_03.mp3", "AUD_GHOST_BOO_04.mp3", "AUD_GHOST_BOO_05.mp3", "AUD_GHOST_BOO_06.mp3", "AUD_GHOST_BOO_07.mp3", "AUD_GHOST_BOO_08.mp3", "AUD_GHOST_BOO_09.mp3", "AUD_GHOST_BOO_10.mp3", "AUD_GHOST_BOO_11.mp3", "AUD_GHOST_BOO_12.mp3", "AUD_GHOST_BOO_13.mp3", "AUD_GHOST_BOO_14.mp3"];

snd_ghoul = null;//sound obj for ghoul (onended)

///////////////SHARED

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


//writing
setText = function(div, str){
	div.innerHTML = str;
}

//custom behavior call (like playing a clip)
callBehavior = function(str){
	//symb.startTimelineNamed('Main Timeline', hypeDocument.kDirectionForward);
	hypeDocument.triggerCustomBehaviorNamed(str);
}

//url
gotoURL = function(str){

	window.open(str, "_self");

}

newURLWindow = function(str){
	window.open(str, "_blank");
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

playGhoulSound = function(str_filename){
	//stop if one is playing
	if(snd_ghoul != undefined){
		snd_ghoul.pause();
	}
	//start now...
	snd_ghoul = new Audio("${resourcesFolderName}/" + str_filename);
	snd_ghoul.play();
	//idle when done
	snd_ghoul.onended = function(){
		ghoulDoneTalking();
		snd_ghoul.onended = null;//habbit i cannot break
	}
}

///////////////DIALOGUE WINDOW EVENTS AND CONTROL

//call the dialogue and setup events for the functions...
function setupDialogue(str, strType, event_function1, event_function2){
	
	showObject(div_dialogue);
	setText(div_dialogue, str);
	
	//should BOO or just talk
	if(strType == "boo"){
		ghoulBoo();
	}
	if(strType == "talk"){
		ghoulTalking();
	}
	
	var btn1 = hypeDocument.getElementById("btn1");
	var btn2 = hypeDocument.getElementById("btn2");
	//clear (incase...not necessary, but either way)
	//btn1.onclick = null;
	//btn2.onclick = null;
	
	//listeners for two optional functions
	//first
	if(btn1 != null){
		btn1.onclick = function() {
			event_function1();
		}
	}
	//second
	if(btn2 != null){
		btn2.onclick = function() {
			event_function2();
		}
	}

}

//////////////CONTROL

function ghoulTalking(){
	callBehavior("tatghoulTalking");
	//long sound
	playGhoulSound(randArray(arr_ghoulTalking));
	//complete
	//onended
}

function ghoulBoo(){
	callBehavior("tatghoulBoo");
	playGhoulSound(randArray(arr_ghoulBoo));
}

//ON AUDIO COMPLETE
function ghoulDoneTalking(){
	callBehavior("tatghoulIdle");
}

function closeText(){
	setText(div_dialogue, "");
	hideObject(div_dialogue);
}


//////////////DIVS
//tatghou's custom events:
//tatghoulIdle
//tatghoulSleeping
//tatghoulTalking
//tatghoulBoo


div_dialogue = hypeDocument.getElementById("div_dialogue");//dialogue (text at the bottom)
tatghoul = hypeDocument.getElementById("tatghoul");//tathgoul herself
div_block = hypeDocument.getElementById("div_block");//the "block" of shade before waking tatghoul
div_amenities = hypeDocument.getElementById("div_amenities");//the little treasure chest
div_tool = hypeDocument.getElementById("div_tool");//the monitor (ASCII tool)
div_bob = hypeDocument.getElementById("div_bob");//the skeleton
//artworks
div_art1 = hypeDocument.getElementById("div_art1");
div_art2 = hypeDocument.getElementById("div_art2");
div_art3 = hypeDocument.getElementById("div_art3");
div_art4 = hypeDocument.getElementById("div_art4");
div_art5 = hypeDocument.getElementById("div_art5");

var str_openingText = "The entrance to the castle guides you to the artist's residency... It is indeed in the dungeon!<br>The space looks scary. A tiny ghost sleeps in the center of the room. Could this be the artist? If so, would it be polite to wake her?<br>Art hangs on the wall. It looks interesting. You would really like a tour...<br><br><center><a href='#' class='inspectionMessageButton' id='btn1'>Wake her!</a> ... <a href='#' class='inspectionMessageButton' id='btn2'>Leave...</a></center>";
//TATGHOUL OPENING DIALOGUE
var str_tatghoul_01 = "Tatghoul Says: Oh haha! What a pleasant surprise! I remember you! Or do I? Hmm, it's been a while...<br>Are you here to see my art?? How wonderful! After escaping <a href='http://unicornycopia.com/graveyard/' target='_blank'>Cyberpet Graveyard</a> I decided to pursue my dreams as an ASCII artist!<br><br><center><a href='#' class='inspectionMessageButton' id='btn1'>Yes, I am here to see your arts!</a></center>";
var str_tatghoul_02 = "Ah! I'm thrilled to have gotten the opportunity to be an artist in residency to this open directory. It was hard to get in too! I had to scare a fish and virtual vermin into giving me the login information.<br>After that I had to deal with that skeleton. He wasn't always a skeleton tho... Long story.<br><br><center><a href='#' class='inspectionMessageButton' id='btn1'>Congratulations on the residency, Tatghoul!</a></center>";
var str_tatghoul_03 = "Haha! Thank you. I actually made all the ASCII art that you see in these folders. Before me, this space was just text. No arts. As you can see, my talents extend well beyond frightening people to death.<br>Please take a look around... This is just one of the many spaces that I artfully occupy on the internet.<br><br><center><a href='#' class='inspectionMessageButton' id='btn1'>Thank you, will do!</a> ... <a href='#' class='inspectionMessageButton' id='btn2'>I need help.</a></center>";
var str_tatghoul_04 = "What do you need help with?<br><br><center><a href='#' class='inspectionMessageButton' id='btn1'>I am looking for the Fish.<br>Not just any Fish but <em>THE</em> Fish.</a></center>";
var str_tatghoul_05 = "Oh that sounds a bit much. You should visit the <a href='../../go east'>east village</a> for that... If it's still around... Virtual vermin have found their way into this directory lately, so most of the inhabitants are at risk of being devoured. I'm not sure what information is still left, but you might find your answers there.<br><br><center><a href='#' class='inspectionMessageButton' id='btn1'>Ok. Tell me more...</a></center>";
var str_tatghoul_06 = "<em>The</em> Fish, not just any fish but <em>the</em> one that you are looking for, passed through here a long time ago.<br>The village probably had something to do with its escape from all this... Those villagers where very Fish sympathetic. Either way. Enough about that. Buy my art. Thank you.<br><br><center><a href='#' class='inspectionMessageButton' id='btn1'>Ok, thank you.</a></center>";
//AMENITIES
var str_amenities_01 = "Those are my amenities! The residency provided them. I know this because they came with the place.<br>Feel free to take a look. My castle is your castle, haha!<br><br><center><a href='#' class='inspectionMessageButton' id='btn1'>No thanks. I'm good.</a> ... <a href='#' class='inspectionMessageButton' id='btn2'>Investigate amenities...</a></center>";
//TOOL
var str_tool_01 = "This is my tool! <a href='http://alienmelon.com' target='_blank'>alienmelon</a> made it for me!<br>I make all my art with it...<br>Would you like to try it???? :3<br><br><center><a href='#' class='inspectionMessageButton' id='btn1'>Yes! Show it to me.</a> ... <a href='#' class='inspectionMessageButton' id='btn2'>No, thank you. I am here for the art.</a></center>";
//SKELETON
var str_skeleton_01 = "The skeleton? Oh, that guy was bad news for everyone. You should never trust <em>ANYONE</em> that lives in a castle... except for ghosts of course! I mean... The reason that he's the way he is right now isn't really my fault... I mean...<br>Am I in trouble again?<br><br><center><a href='#' class='inspectionMessageButton' id='btn1'>Interesting. Is this piece for sale?</a> ... <a href='#' class='inspectionMessageButton' id='btn2'>Yes, you are in trouble.</a></center>";
var str_skeleton_02 = "Um... Yes. This piece is called Bob. It's an installation piece about... Um... Facing our fears, as well as the cold mortality of existence. It's a commentary on um... castles and consumer culture and rejecting power structures... yes... It will cost you a few billion bitcoin. Come back when u have the coins.<br><br><center><a href='#' class='inspectionMessageButton' id='btn1'>Interesting. Thank you.</a></center>";
var str_skeleton_trouble_01 = "*Tatghoul emits a frightening ghostly howl. Fear takes hold of your soul! A foolish mortal such as yourself should never have challenged a ghost.<br>So rude!*<br><br><center><a href='#' class='inspectionMessageButton' id='btn1'>Sorry. I had no idea!</a></center>";
var str_skeleton_trouble_02 = "Water under the bridge.<br><br><center><a href='#' class='inspectionMessageButton' id='btn1'>Thank you for forgiving me.</a></center>";
//ARTWORKS
var str_art01 = "This is an experimental piece exploring the tangibility of unicode. The stripe-like structure is an abstract representation of the infinite flow of data that our social networks create.<br>Would you like to see it?<br><br><center><a href='#' class='inspectionMessageButton' id='btn1'>Yes.</a> ... <a href='#' class='inspectionMessageButton' id='btn2'>No thank you. I'm just browsing.</a></center>";
var str_art02 = "This piece is a very emotional one. It represents my inner turmoil. I deal a lot with data-loss, and feel like I have to keep up my hauntings in order to even feel. Incurring fear upon mortals is what I was designed to do, but it also goes against my nature of just wanting to be loved.<br>Would you like to see it??<br><br><center><a href='#' class='inspectionMessageButton' id='btn1'>Yes.</a> ... <a href='#' class='inspectionMessageButton' id='btn2'>No thank you. I'm interested in happy art only.</a></center>";
var str_art03 = "This is a self-portrait. I made it right after I left <a href='http://unicornycopia.com/graveyard/' target='_blank'>Cyberpet Graveyard</a> and was dealing with feeling misplaced in the digital world. Things are better now, but I value this for how it captures the plight of many virtual inhabitants that lose their place in digital society.<br>Are you interested?<br><br><center><a href='#' class='inspectionMessageButton' id='btn1'>Yes, of course.</a> ... <a href='#' class='inspectionMessageButton' id='btn2'>No, but thank you for keeping it up.</a></center>";
var str_art04 = "This is my portrait of an <a href='http://potatoware.alienmelon.com/' target='_blank'>Electric Love Potato</a>. It was made during a personal victory. I was feeling very inspired by their story of perseverance and brought it into my own work. I think of this moment often.<br>Would you like to see it?<br><br><center><a href='#' class='inspectionMessageButton' id='btn1'>Yes, please.</a> ... <a href='#' class='inspectionMessageButton' id='btn2'>No thank you. I am looking for sad art.</a></center>";
var str_art05 = "This is an existential piece. I feel like it's important to let this work speak for itself.<br>Would you like to see it??<br><br><center><a href='#' class='inspectionMessageButton' id='btn1'>Yes, and thank you.</a> ... <a href='#' class='inspectionMessageButton' id='btn2'>No... I'm not ready for existentialism right now.</a></center>";

//EVENTS

////ARTWORKS

//used to close any painting (cancel)
function event_artwork_CLOSE(){
	closeText();
	//random boo
	if(Math.random()*100 > 60){
		ghoulBoo();
	}
}

function event_openArt(str){
	closeText();
	newURLWindow("artwork/" + str);
}

////BOB (skeleton)

function event_dialogue_skeleton_FORSALE_CLOSE(){
	closeText();
}

function event_dialogue_skeleton_FORSALE(){
	setupDialogue(str_skeleton_02, "talk", event_dialogue_skeleton_FORSALE_CLOSE);
}

function event_dialogue_YESTROUBLE_CLOSE(){
	closeText();
	ghoulBoo();
}

function event_dialogue_YESTROUBLE_02(){
	setupDialogue(str_skeleton_trouble_02, "talk", event_dialogue_YESTROUBLE_CLOSE);
}

function event_dialogue_YESTROUBLE(){
	setupDialogue(str_skeleton_trouble_01, "boo", event_dialogue_YESTROUBLE_02);
}

////TOOL

function event_dialogue_tool_SHOW(){
	closeText();
	newURLWindow("tool/");
}

function event_dialogue_tool_NOTHANKYOU(){
	closeText();
	playSound(randArray(arr_ghoulclicks));
}

////AMENITIES

function event_dialogue_amenities_CLOSE(){
	closeText();
	playSound(randArray(arr_ghoulclicks));
}

function event_dialogue_amenities_INVESTIGATE(){
	closeText();
	newURLWindow("amenities/");
}

////TATGHOUL'S OPENING DIALOGUE

function event_dialgoue_openingHelp_END(){
	closeText();
	ghoulBoo();
	hideObject(div_block);
}

function event_dialgoue_openingHelp_3(){
	setupDialogue(str_tatghoul_06, "talk", event_dialgoue_openingHelp_END);
}

function event_dialgoue_openingHelp_2(){
	//
	setupDialogue(str_tatghoul_05, "boo", event_dialgoue_openingHelp_3);
}

function event_dialgoue_openingHelp_1(){
	//"i need help" chain
	setupDialogue(str_tatghoul_04, "talk", event_dialgoue_openingHelp_2);
}

function event_dialogue_openingCont_END(){
	//close now
	closeText();
	ghoulBoo();
	hideObject(div_block);
}


function event_dialogue_openingCont_2(){
	setupDialogue(str_tatghoul_03, "talk", event_dialogue_openingCont_END, event_dialgoue_openingHelp_1);
}

function event_dialogue_openingCont_1(){
	//
	setupDialogue(str_tatghoul_02, "talk", event_dialogue_openingCont_2);
}

function event_dialogue_opening1(){
	//goul wake up
	//goul talks
	//done talking doesn't control anything elase BUT for the ghoul sprite (in case mobile/autoplay issues)
	
	//nothing. wake her happens when you open dialogue
	//init this on first opening click
	
	playSound("AUD_BOOTUP_DEFAULT.mp3");
	//manage scene THIS AT THE END!!!
	//hideObject(div_block);
	
	setupDialogue(str_tatghoul_01, "talk", event_dialogue_openingCont_1);
}

function event_dialogue_opening2(){
	gotoURL("../");//leave(go back)
}

//start (show story, but don't wake up yet)
tatghoul.onclick = function(){

	playSound(randArray(arr_ghoulclicks));
	setupDialogue(str_openingText, "none", event_dialogue_opening1, event_dialogue_opening2);
	tatghoul.onclick = null;

}

//amenities
div_amenities.onclick = function(){
	setupDialogue(str_amenities_01, "talk", event_dialogue_amenities_CLOSE, event_dialogue_amenities_INVESTIGATE);
}

//the tool (monitor)
div_tool.onclick = function(){
	setupDialogue(str_tool_01, "talk", event_dialogue_tool_SHOW, event_dialogue_tool_NOTHANKYOU);
}

//bob
div_bob.onclick = function(){
	setupDialogue(str_skeleton_01, "talk", event_dialogue_skeleton_FORSALE, event_dialogue_YESTROUBLE);
}

/////ARTWORKS

div_art1.onclick = function(){
	setupDialogue(str_art01, "talk", function(){ event_openArt("unicoded.txt") }, event_artwork_CLOSE);
}

div_art2.onclick = function(){
	setupDialogue(str_art02, "talk", function(){ event_openArt("moodpiece.txt") }, event_artwork_CLOSE);
}

div_art3.onclick = function(){
	setupDialogue(str_art03, "talk", function(){ event_openArt("sadtato.txt") }, event_artwork_CLOSE);
}

div_art4.onclick = function(){
	setupDialogue(str_art04, "talk", function(){ event_openArt("victoryman.txt") }, event_artwork_CLOSE);
}

div_art5.onclick = function(){
	setupDialogue(str_art05, "talk", function(){ event_openArt("whytato.txt") }, event_artwork_CLOSE);
}

//start
closeText();//hide text on first run opening
