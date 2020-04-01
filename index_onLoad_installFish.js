
btn_installFish_systemReq = hypeDocument.getElementById("btn_installFish_systemReq");
txt_installFish_system = hypeDocument.getElementById("txt_installFish_system");
txt_installFish_cookies = hypeDocument.getElementById("txt_installFish_cookies");
btn_installFish_cookies = hypeDocument.getElementById("btn_installFish_cookies");

//the actual windows
div_installFish_getFish = hypeDocument.getElementById("div_installFish_getFish");
div_installFish_optional = hypeDocument.getElementById("div_installFish_optional");
div_installFish_install = hypeDocument.getElementById("div_installFish_install");

//optional fish window
div_optionalFish_checkbox = hypeDocument.getElementById("div_optionalFish_checkbox");
//learn more
txt_installFish_optional_more = hypeDocument.getElementById("txt_installFish_optional_more");
btn_installFish_optional_more = hypeDocument.getElementById("btn_installFish_optional_more");

//the actual INSTALL FISH window
btn_txt_installFish = hypeDocument.getElementById("btn_txt_installFish");
txt_installFish_STORY = hypeDocument.getElementById("txt_installFish_STORY");
div_installFish_btnBack = hypeDocument.getElementById("div_installFish_btnBack");
txt_installFish_totalSize = hypeDocument.getElementById("txt_installFish_totalSize");

//the intros
div_installFishIntro = hypeDocument.getElementById("div_installFishIntro");

//elements that get changed in the intro
txt_installFish_installerWindow = hypeDocument.getElementById("txt_installFish_installerWindow");

//elements in the intro that get gravity applied
div_installng_grav_01 = hypeDocument.getElementById("div_installng_grav_01");
div_installng_grav_02 = hypeDocument.getElementById("div_installng_grav_02");


var str_system = browserName() + " " + browserEngine() + " " + browserVersion1a() + " " + browserLanguage() + " " + browserPlatform();

num_installFish_story = 0;//0;//count for install fish story (manages the event by counting up)


//behavior_playIntro_progressWindow = plays the progress window in the intro
//behavior_playIntro = plays the actual intro


function playInstallFish(){
	showObject(div_installFishIntro);
	callBehavior('behavior_playIntro');
}



//ending of typing -- called after typing, etc...
installFish_STORY = function(){
	
	//console.log("installFish_STORY called: " + num_installFish_story);
	
	//first run
	if(num_installFish_story == 0){
		setText(btn_txt_installFish, "No! Instal again!"); //keep adding !!! at end
	}
	
	if(num_installFish_story == 1){
		//write text (no function passed, null)
		//change setText on button  with another !!
		playSound(randArray(arr_snd_typingNewLine));
		playSound("minibyte_tada_2.mp3");
		setText(txt_installFish_STORY, "You install Fish all over again!<br>You experience the adrenaline rush of downloading it like it's the very first time.<br>You feel satisfied that now you REALLY have it installed.");
		setText(btn_txt_installFish, "Instal it again!!!");
	}
	
	if(num_installFish_story == 2){
		playSound(randArray(arr_snd_typingNewLine));
		playSound("minibyte_tada_2.mp3");
		setText(txt_installFish_STORY, "You download and install Fish again.<br>You feel confident that THIS is the one. This'll definitely do it. This is the last time you need to download it for it to REALLY be on your system.<br>It's good to be sure.");
		setText(btn_txt_installFish, "AGAIN! AGAIN!!");
	}
	
	if(num_installFish_story == 3){
		playSound(randArray(arr_snd_typingNewLine));
		playSound("minibyte_tada_2.mp3");
		setText(txt_installFish_STORY, "Somewhere across the globe a server admin is working overtime to make sure the server can deliver this one last download... The overage charges will do them in, but at least one last person (you) downloaded it... This is it tho. This is the last one for you and then you go home.");
		setText(btn_txt_installFish, "NO! GIVE ME ANOTHER!");
	}
	
	if(num_installFish_story == 4){
		playSound(randArray(arr_snd_typingNewLine));
		playSound("minibyte_tada_2.mp3");
		setText(txt_installFish_STORY, "Stop!!!");
		setText(btn_txt_installFish, "NEVER!!!!!");
	}
	
	showObject(btn_txt_installFish);
	hideObject(div_installFishIntro);
	num_installFish_story += 1;
	
}

//the actual event to call (for buttons)
installFish_STORY_event = function(){

	//console.log("installFish_STORY_event: " + num_installFish_story);
		
	hideObject(btn_txt_installFish);//hide and show the button (to prevent button mashing)
	
	//run first intro, at end of animation call installFish_STORY and write text without animation, with one sound...
	if(num_installFish_story == 1){
		//callBehavior('behavior_playIntro');
		playInstallFish();
		event_physics_setDynamic(div_installng_grav_01);
		event_physics_setDynamic(div_installng_grav_02);
	}
	
	if(num_installFish_story == 2){
		playInstallFish();
	}
	
	if(num_installFish_story == 3){
		playInstallFish();
	}
	
	if(num_installFish_story == 4){
		playInstallFish();
	}
	
	if(num_installFish_story == 5){
		//rain errors, and break UI
		setText(txt_installFish_STORY, ":(");
		
		playSound("AUD_ESSAY03_ERROR_OS_01.mp3");
		
		event_physics_setDynamic(div_installFish_install);
		event_physics_setDynamic(btn_txt_installFish);
		event_physics_setDynamic(txt_installFish_STORY);
		event_physics_setDynamic(div_installFish_btnBack);
		event_physics_setDynamic(div_installFish_optional);
		event_physics_setDynamic(div_optionalFish_checkbox);
		event_physics_setDynamic(btn_installFish_optional_more);
		event_physics_setDynamic(div_installFish_getFish);
		event_physics_setDynamic(btn_installFish_systemReq);
		event_physics_setDynamic(txt_installFish_system);
		event_physics_setDynamic(btn_installFish_cookies);
		
		bool_installFish_broke = true;
	}
	
	//EDIT: this was moved to the bottom, and typing taken out... no more writing out text...
	//first run event
	if(num_installFish_story == 0){
		//writeText(txt_installFish_STORY, "Checking your Fish version...<br><br>Fish is up to date!<br>Fish is already installed on your system.", installFish_STORY);
		//installFish_STORY();
		setText(btn_txt_installFish, "No! Instal again!"); //keep adding !!! at end
		setText(txt_installFish_STORY, "Checking your Fish version...<br><br>Fish is up to date!<br>Fish is already installed on your system...<br><br>But is that enough?<br>That's a nice yellow button...");
		showObject(btn_txt_installFish);
		installFish_STORY();
	}
	
}


//cookies message
if(dataCookiesEnabled() == true){
	setText(txt_installFish_cookies, "Your cookies are enabled! You are ready!");
	setText(btn_installFish_cookies, "Yay!");
}else{
	setText(txt_installFish_cookies, "Your cookies are not enabled. :(");
	setText(btn_installFish_cookies, "Sorry.");
}

//broke install fish
if(bool_installFish_broke){
	setText(txt_installFish_STORY, "<br><br>No, not you again!!");
	setText(txt_installFish_totalSize, "Run away!");
	playSound("AUD_ESSAY03_ERROR_OS_01.mp3");
	event_physics_setDynamic(div_installFish_install);
	event_physics_setDynamic(btn_txt_installFish);
	event_physics_setDynamic(txt_installFish_STORY);
	event_physics_setDynamic(div_installFish_btnBack);
	event_physics_setDynamic(div_installFish_optional);
	event_physics_setDynamic(div_optionalFish_checkbox);
	event_physics_setDynamic(btn_installFish_optional_more);
	event_physics_setDynamic(div_installFish_getFish);
	event_physics_setDynamic(btn_installFish_systemReq);
	event_physics_setDynamic(txt_installFish_system);
	event_physics_setDynamic(btn_installFish_cookies);
}

setText(txt_installFish_system, str_system);
hideObject(div_installFishIntro);


