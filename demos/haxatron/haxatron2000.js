(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 960,
	height: 640,
	fps: 30,
	color: "#000000",
	manifest: [
		{src:"images/IMG_Error_01.png", id:"IMG_Error_01"},
		{src:"images/IMG_Error_02.png", id:"IMG_Error_02"},
		{src:"images/IMG_Error_03.png", id:"IMG_Error_03"},
		{src:"images/IMG_Error_04.png", id:"IMG_Error_04"},
		{src:"images/IMG_Error_05.png", id:"IMG_Error_05"},
		{src:"images/IMG_Error_Back.png", id:"IMG_Error_Back"},
		{src:"images/IMG_faq.png", id:"IMG_faq"},
		{src:"images/IMG_Memory_Back.png", id:"IMG_Memory_Back"},
		{src:"images/IMG_Memory_Exit_F1.png", id:"IMG_Memory_Exit_F1"},
		{src:"images/IMG_Memory_Exit_F10.png", id:"IMG_Memory_Exit_F10"},
		{src:"images/IMG_Memory_Exit_F11.png", id:"IMG_Memory_Exit_F11"},
		{src:"images/IMG_Memory_Exit_F12.png", id:"IMG_Memory_Exit_F12"},
		{src:"images/IMG_Memory_Exit_F13.png", id:"IMG_Memory_Exit_F13"},
		{src:"images/IMG_Memory_Exit_F2.png", id:"IMG_Memory_Exit_F2"},
		{src:"images/IMG_Memory_Exit_F3.png", id:"IMG_Memory_Exit_F3"},
		{src:"images/IMG_Memory_Exit_F4.png", id:"IMG_Memory_Exit_F4"},
		{src:"images/IMG_Memory_Exit_F5.png", id:"IMG_Memory_Exit_F5"},
		{src:"images/IMG_Memory_Exit_F6.png", id:"IMG_Memory_Exit_F6"},
		{src:"images/IMG_Memory_Exit_F7.png", id:"IMG_Memory_Exit_F7"},
		{src:"images/IMG_Memory_Exit_F8.png", id:"IMG_Memory_Exit_F8"},
		{src:"images/IMG_Memory_Exit_F9.png", id:"IMG_Memory_Exit_F9"},
		{src:"images/IMG_Memory_Line_10.png", id:"IMG_Memory_Line_10"},
		{src:"images/IMG_Memory_Line_11.png", id:"IMG_Memory_Line_11"},
		{src:"images/IMG_Memory_Line_12.png", id:"IMG_Memory_Line_12"},
		{src:"images/IMG_Memory_Line_13.png", id:"IMG_Memory_Line_13"},
		{src:"images/IMG_Memory_Line_14.png", id:"IMG_Memory_Line_14"},
		{src:"images/IMG_Memory_Line_15.png", id:"IMG_Memory_Line_15"},
		{src:"images/IMG_Memory_Line_16.png", id:"IMG_Memory_Line_16"},
		{src:"images/IMG_Memory_Line_17.png", id:"IMG_Memory_Line_17"},
		{src:"images/IMG_Memory_Line_18.png", id:"IMG_Memory_Line_18"},
		{src:"images/IMG_Memory_Line_19.png", id:"IMG_Memory_Line_19"},
		{src:"images/IMG_Memory_Line_20.png", id:"IMG_Memory_Line_20"},
		{src:"images/IMG_Memory_Line_21.png", id:"IMG_Memory_Line_21"},
		{src:"images/IMG_Memory_Line_22.png", id:"IMG_Memory_Line_22"},
		{src:"images/IMG_Memory_Line_5.png", id:"IMG_Memory_Line_5"},
		{src:"images/IMG_Memory_Line_6.png", id:"IMG_Memory_Line_6"},
		{src:"images/IMG_Memory_Line_7.png", id:"IMG_Memory_Line_7"},
		{src:"images/IMG_Memory_Line_8.png", id:"IMG_Memory_Line_8"},
		{src:"images/IMG_Memory_Line_9.png", id:"IMG_Memory_Line_9"},
		{src:"images/IMG_Memory_UP.png", id:"IMG_Memory_UP"},
		{src:"images/IMG_Player_DIE_F1.png", id:"IMG_Player_DIE_F1"},
		{src:"images/IMG_Player_DIE_F10.png", id:"IMG_Player_DIE_F10"},
		{src:"images/IMG_Player_DIE_F11.png", id:"IMG_Player_DIE_F11"},
		{src:"images/IMG_Player_DIE_F2.png", id:"IMG_Player_DIE_F2"},
		{src:"images/IMG_Player_DIE_F3.png", id:"IMG_Player_DIE_F3"},
		{src:"images/IMG_Player_DIE_F4.png", id:"IMG_Player_DIE_F4"},
		{src:"images/IMG_Player_DIE_F5.png", id:"IMG_Player_DIE_F5"},
		{src:"images/IMG_Player_DIE_F6.png", id:"IMG_Player_DIE_F6"},
		{src:"images/IMG_Player_DIE_F7.png", id:"IMG_Player_DIE_F7"},
		{src:"images/IMG_Player_DIE_F8.png", id:"IMG_Player_DIE_F8"},
		{src:"images/IMG_Player_DIE_F9.png", id:"IMG_Player_DIE_F9"},
		{src:"images/IMG_Player_DOWN_F1.png", id:"IMG_Player_DOWN_F1"},
		{src:"images/IMG_Player_DOWN_F2.png", id:"IMG_Player_DOWN_F2"},
		{src:"images/IMG_Player_DOWN_F3.png", id:"IMG_Player_DOWN_F3"},
		{src:"images/IMG_Player_DOWN_F4.png", id:"IMG_Player_DOWN_F4"},
		{src:"images/IMG_Player_RIGHT_F1.png", id:"IMG_Player_RIGHT_F1"},
		{src:"images/IMG_Player_RIGHT_F2.png", id:"IMG_Player_RIGHT_F2"},
		{src:"images/IMG_Player_UP_F1.png", id:"IMG_Player_UP_F1"},
		{src:"images/IMG_Player_UP_F2.png", id:"IMG_Player_UP_F2"},
		{src:"images/IMG_Player_UP_F3.png", id:"IMG_Player_UP_F3"},
		{src:"images/IMG_Player_UP_F4.png", id:"IMG_Player_UP_F4"},
		{src:"images/IMG_Player_WIN_F1.png", id:"IMG_Player_WIN_F1"},
		{src:"images/IMG_Player_WIN_F10.png", id:"IMG_Player_WIN_F10"},
		{src:"images/IMG_Player_WIN_F11.png", id:"IMG_Player_WIN_F11"},
		{src:"images/IMG_Player_WIN_F12.png", id:"IMG_Player_WIN_F12"},
		{src:"images/IMG_Player_WIN_F13.png", id:"IMG_Player_WIN_F13"},
		{src:"images/IMG_Player_WIN_F2.png", id:"IMG_Player_WIN_F2"},
		{src:"images/IMG_Player_WIN_F3.png", id:"IMG_Player_WIN_F3"},
		{src:"images/IMG_Player_WIN_F4.png", id:"IMG_Player_WIN_F4"},
		{src:"images/IMG_Player_WIN_F5.png", id:"IMG_Player_WIN_F5"},
		{src:"images/IMG_Player_WIN_F6.png", id:"IMG_Player_WIN_F6"},
		{src:"images/IMG_Player_WIN_F7.png", id:"IMG_Player_WIN_F7"},
		{src:"images/IMG_Player_WIN_F8.png", id:"IMG_Player_WIN_F8"},
		{src:"images/IMG_Player_WIN_F9.png", id:"IMG_Player_WIN_F9"},
		{src:"images/IMG_Tile100x100.png", id:"IMG_Tile100x100"},
		{src:"sounds/Die.mp3", id:"Die"}
	]
};

// stage content:
(lib.haxatron2000 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{menu:63,faq:213,game:218,"win":225,menu_win:590});

	// timeline functions:
	this.frame_0 = function() {
		/*JAVASCRIPT*/
		//This would be best solved in CSS, but the interesting thing is
		//if you edit the html file, your changes/aditions will be overwritten next time
		//you publish with Flash (you will lose it). Not ideal, imo, but to get around this, 
		//I append new rules to documents head.
		
		var font_fixedsys = document.createElement("style");
		font_fixedsys.appendChild(document.createTextNode("\
		@font-face {\
		    font-family: '" + 'fixedsys_excelsior_3' + "';\
			src: url('" + 'fontquirrels/fsex300-webfont.eot?#iefix' + "') format('embedded-opentype'),\
				 url('" + 'fontquirrels/fsex300-webfont.woff' + "') format('woff'),\
			     url('" + 'fontquirrels/fsex300-webfont.ttf' + "') format('truetype'),\
				 url('" + 'fontquirrels/fsex300-webfont.svg#fixedsys_excelsior_3.01Rg' + "') format('svg');\
			font-weight: normal;\
			font-style: normal;\
		}\
		"));
		
		document.head.appendChild(font_fixedsys);
		
		//for scripts (js files) you would use:
		//document.getElementsByTagName("head")[0].appendChild(script);
		//see: http://stackoverflow.com/questions/1140402/how-to-add-jquery-in-js-file
		//http://stackoverflow.com/questions/3991492/include-a-javascript-file-in-a-javascript-file
		//http://stackoverflow.com/questions/950087/how-to-include-a-javascript-file-in-another-javascript-file
		//and: http://stackoverflow.com/questions/16368973/include-jquery-from-another-javascript-file
		//for more detail
		//
		//Here, I am importing keymaster.js link: https://github.com/madrobby/keymaster
		//to reduce cross browser issues with keyboard keys, consider using something like this
		//There is an example of usage bellow in /*KEYBOARD*/ section
		//
		var js_misc = document.createElement("script");
		js_misc.src = "libs/keymaster.js";
		js_misc.type = "text/javascript";
		document.getElementsByTagName("head")[0].appendChild(js_misc);
		
		//control page elements/properties/style/etc... from here
		//set the background color, and other styles
		//refer to: https://developer.mozilla.org/en-US/docs/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
		//or http://www.w3schools.com/jsref/dom_obj_style.asp
		//for a good explanation
		var page_body = document.getElementsByTagName("body")[0];
		page_body.style.backgroundColor = "black";
		page_body.style.overflow = "hidden";//hide scrollbars
		page_body.style.position = "fixed";//no scroll. ever.
		//note, alternative would be: document.body.style.backgroundColor = "black";
		//the canvas (this is the game)
		var page_canvas = document.getElementsByTagName("canvas")[0];
		stageWidth = page_canvas.width;
		stageHeight = page_canvas.height;
		/*console.log("width: "+page_canvas.width);
		console.log("height: "+page_canvas.height);
		console.log("canvas: "+page_canvas);*/
		
		//Scanlines (I like scanlines)
		//alternatively I could have done: http://createjs.com/Docs/EaselJS/classes/DOMElement.html
		// create overlay and append to page
		var overlay = document.createElement("div_overlay");
		//make sure it's before the canvas
		document.body.insertBefore(overlay, page_canvas);
		//create image and append overlay
		var img = document.createElement("img");
		img.src = "images/IMG_Scalines_DARK.png";
		overlay.appendChild(img);
		//place it above everything
		overlay.style.position = "absolute";
		overlay.style.zIndex="999";
		
		//I picked out two approaches to this that where available online, 
		//that I thought matched common problems people may wish to solve.
		//One (Option 1) is for sizing the canvas (stretch it)
		//Thanks so much to: http://community.createjs.com/discussions/createjs/547-resizing-canvas-and-its-content-proportionally-cross-platform
		//I need not re-invent the wheel! :)
		//The other (Option 2) resizes it, and centers it.
		//For more info, see: http://stackoverflow.com/questions/13368724/how-to-dynamically-resize-and-center-a-flash-createjs-canvas-element-animation
		function onResize()
		{
			//OPTION 1:
			//Scales proportionately, but does not center.
			/*
			// browser viewport size
			var w = window.innerWidth;
			var h = window.innerHeight;
			// stage dimensions
			var ow = 960; // your stage width
			var oh = 640; // your stage height
			// keep aspect ratio
			var scale = Math.min(w / ow, h / oh);
			var newHeight = ow * scale;
			var newWidth = oh * scale;
			//
			stage.scaleX = scale;
			stage.scaleY = scale;
			// adjust canvas size
			stage.canvas.width = newHeight;
			stage.canvas.height = newWidth;
			//set width and height variables again
			//stageWidth = page_canvas.width;
			//stageHeight = page_canvas.height;
			//
			//
			// update the stage
			stage.update()
			*/
			//OPTION 2: scale and center
			var widthToHeight = stageWidth / stageHeight;
			var newWidth = window.innerWidth;
			var newHeight = window.innerHeight;
			var newWidthToHeight = newWidth / newHeight;
			//
			if (newWidthToHeight > widthToHeight)
			{
				newWidth = newHeight * widthToHeight;
				page_canvas.style.height = newHeight + "px";
				page_canvas.style.width = newWidth + "px";
			} else {
				newHeight = newWidth / widthToHeight;
				page_canvas.style.height = newHeight + "px";
				page_canvas.style.width = newWidth + "px";
			}
				scale = newWidthToHeight / widthToHeight;
				stage.width = newWidth;
				stage.height = newHeight;
				page_canvas.style.marginTop = ((window.innerHeight - newHeight) / 2) + "px";
				page_canvas.style.marginLeft = ((window.innerWidth - newWidth) / 2) + "px";
			//
		}
		//
		window.onresize = function()
		{
		     onResize();
		}
		//
		onResize();
			
		/*DEFINITIONS*/
		
		//Start with mobile detection (basic version, in this case)
		//see: http://detectmobilebrowsers.com/ for something better
		isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
		if(isMobile){
			//window.alert("This is mobile");	
		}
		
		//Variables
		_stage = this;//stage
		_stage.stop();
		
		//what scene is the player on (game? menu? ending?)
		//value will determine keyboard behavior
		_scene = "";
		//when an item from the menu is selected
		//termines where "playhead" should go to
		selectedMenuItem = "";
		//to submit to twitter
		pageURL = "http://haxatron.alienmelon.com";
		
		//Boolean for the footer note (version 64 bit...)
		//should write only once
		bool_footerNote = false;
		
		//text field properties
		txtCol = "#00FF00";//the text color
		txtFont = "26px 'fixedsys_excelsior_3', 'Lucida Console', Monaco, monospace";
		txtFont_sml = "15px 'fixedsys_excelsior_3', 'Lucida Console', Monaco, monospace";
		
		//Intervals
		//This example uses setInterval a lot http://createjs.com/Docs/EaselJS/classes/Ticker.html#method_setInterval
		//So as to not deriviate from the original code too much (don't want to rewrite everything)
		//for other options see the Ticker Class: http://createjs.com/Docs/EaselJS/classes/Ticker.html
		var writeInt;
		
		/*MISC*/
		
		//Math
		randomNumber = function(num) {
			return (Math.floor(Math.random()*num));
		}
		
		//Twitter (submit everything to twitter) -- see menu_win
		tinyURL = function(){
			var url = "http://twitter.com/home?status=I haxed teh system with Haxatron 2000: "+pageURL+" in "+seconds+" seconds, and "+tries+" tries. Haxing is tricky business.";
			window.open(url,"_blank");
		}
		
		/*TEXT*/
		 
		 //Write out text
		writeText = function(myText, myTextField) {
			var i = 0;
			function write() {
				if (i<=myText.length) {
					myTextField.text = myText.substr(0, i)+"_";
					randTypeSnd();
					i = i+1;
				} else {
					myTextField.text = myText.substr(0, i);
					clearInterval(writeInt);
				}
			}
			clearInterval(writeInt);
			writeInt = setInterval(write, 40);
		}
		
		//Create text fields
		//Title (start with the "LOADING" message, so screen isn't blank)
		txt_title = new createjs.Text("Reticulating\n\nSplines...", txtFont, txtCol);
		txt_title.x = 384;
		txt_title.y = 197;
		_stage.addChild(txt_title);
		//shadow is much like glow, so I'll use shadow
		//color String = The color of the shadow.
		//offsetX Number = The x offset of the shadow in pixels.
		//offsetY Number = The y offset of the shadow in pixels.
		//blur Number = The size of the blurring effect.
		//See: http://www.createjs.com/Docs/EaselJS/classes/Shadow.html for more
		txt_title.shadow = new createjs.Shadow("#00FF00", 3, 0, 10);
		//Menu
		txt_start = new createjs.Text("", txtFont, txtCol);
		txt_start.x = 436;
		txt_start.y = 329;
		_stage.addChild(txt_start);
		txt_start.shadow = new createjs.Shadow("#00FF00", 3, 0, 10);
		
		txt_faq = new createjs.Text("", txtFont, txtCol);
		txt_faq.x = 447;
		txt_faq.y = 361;
		_stage.addChild(txt_faq);
		txt_faq.shadow = new createjs.Shadow("#00FF00", 3, 0, 10);
		
		txt_msg = new createjs.Text("", txtFont_sml, txtCol);
		txt_msg.x = 0;
		txt_msg.y = 590;
		_stage.addChild(txt_msg);
		txt_msg.shadow = new createjs.Shadow("#00FF00", 3, 0, 10);
		
		//Win
		txt_msg_win = new createjs.Text("", txtFont, txtCol);
		txt_msg_win.x = 120;
		txt_msg_win.y = 43;
		_stage.addChild(txt_msg_win);
		txt_msg_win.shadow = new createjs.Shadow("#00FF00", 3, 0, 10);
		
		txt_stats_win = new createjs.Text("", txtFont, txtCol);
		txt_stats_win.x = 246;
		txt_stats_win.y = 172;
		_stage.addChild(txt_stats_win);
		txt_stats_win.shadow = new createjs.Shadow("#00FF00", 3, 0, 10);
		
		txt_seconds_win = new createjs.Text("", txtFont, txtCol);
		txt_seconds_win.x = 245;
		txt_seconds_win.y = 233;
		_stage.addChild(txt_seconds_win);
		txt_seconds_win.shadow = new createjs.Shadow("#00FF00", 3, 0, 10);
		
		txt_tries_win = new createjs.Text("", txtFont, txtCol);
		txt_tries_win.x = 245;
		txt_tries_win.y = 294;
		_stage.addChild(txt_tries_win);
		txt_tries_win.shadow = new createjs.Shadow("#00FF00", 3, 0, 10);
		
		txt_options_win = new createjs.Text("", txtFont, txtCol);
		txt_options_win.x = 119;
		txt_options_win.y = 355;
		_stage.addChild(txt_options_win);
		txt_options_win.shadow = new createjs.Shadow("#00FF00", 3, 0, 10);
		
		txt_option1_win = new createjs.Text("", txtFont, txtCol);
		txt_option1_win.x = 246;
		txt_option1_win.y = 417;
		_stage.addChild(txt_option1_win);
		txt_option1_win.shadow = new createjs.Shadow("#00FF00", 3, 0, 10);
		
		txt_option2_win = new createjs.Text("", txtFont, txtCol);
		txt_option2_win.x = 246;
		txt_option2_win.y = 478;
		_stage.addChild(txt_option2_win);
		txt_option2_win.shadow = new createjs.Shadow("#00FF00", 3, 0, 10);
		
		//clearing all text fields
		//for going between scenes
		clearText = function(){
			var arr_fields = new Array(txt_title, txt_start, txt_faq, txt_msg, txt_msg_win, txt_stats_win, txt_seconds_win, txt_tries_win, txt_options_win, txt_option1_win, txt_option2_win);
			for(i=0; i<arr_fields.length; ++i){
				arr_fields[i].text = "";
			};
		};
		
		/*PRELOAD*/
		/*SOUND*/
		//based on: http://createjs.com/tutorials/SoundJS%20and%20PreloadJS/
		//see docs for more details: http://www.createjs.com/Docs/SoundJS/classes/Sound.html
		//see for an example of use in a game: https://github.com/CreateJS/SoundJS/blob/master/examples/Game.html
		//see for information about mobile: http://createjs.com/tutorials/Mobile%20Safe%20Approach/
		//assetsPath = A path that will be prepended on to the 
		//source parameter of all items in the queue before they are loaded.
		var assetsPath = "sounds/";
		var snd_manifest = [
			{id:"Die", src:"Die.ogg"},
			{id:"Intro", src:"Intro.ogg"},
			{id:"Move1", src:"Move1.ogg"},
			{id:"Move2", src:"Move2.ogg"},
			{id:"Spawn", src:"Spawn.ogg"},
			{id:"TransitionNewScene", src:"TransitionNewScene.ogg"},
			{id:"Aud_Type1", src:"Typing1.ogg"},
			{id:"Aud_Type2", src:"Typing2.ogg"},
			{id:"Aud_Type3", src:"TypingNewline.ogg"},
			{id:"TypingSelect", src:"TypingSelect.ogg"},
			{id:"Win", src:"Win.ogg"}
		];
		
		//var queue = new createjs.LoadQueue();
		//[useXHR=true], [basePath=""]
		var queue = new createjs.LoadQueue(true, assetsPath);
		//SoundJS will only preload audio that is supported, 
		//so if multiple formats are provided, 
		//only the one that the browser can play will be preloaded.
		//alternateExtensions = array of extensions to attempt to use when loading sound, 
		//if the default is unsupported by the active plugin.
		//See: http://www.createjs.com/Docs/SoundJS/classes/Sound.html#property_alternateExtensions
		//Note: Sounds will fail in Safari if quicktime plugin is not installed
		createjs.Sound.alternateExtensions = ["mp3", "wav"];
		//Sound can be used as a plugin with PreloadJS to help preload audio properly.
		//When it's preloaded with PreloadJS it is automatically registered.
		//If sound is not preloaded from the outset it will do an internal load,
		//as a result audio may not play imediately the first time you call it
		//It is recomended that you preload all audio
		queue.installPlugin(createjs.Sound);
		//two event listeners - one when load is complete, and the other to display the load progress
		queue.addEventListener("complete", handleComplete);
		queue.addEventListener("progress",handleProgress);
		//load manifest is to load multiple sounds/a set of them
		queue.loadManifest(snd_manifest);
		//to load an individual file:
		//queue.loadFile({id:"Die", src:"sounds/Die.ogg"});
		
		
		function handleComplete(evt) {
			console.log("Loading sound complete.");
			playSound("Spawn");//"LOADED" sound indication
			txt_title.text = "";
			_stage.play();
			//play the timeline after loading (continue)
		}
		
		function handleProgress(evt) {
			//console.log("Event Loading: " + (queue.progress.toFixed(2) * 100) + "%");
		}
		
		function playSound(name) {
			return createjs.Sound.play(name);
		}
		
		function playSoundLoop(name, loops){
			return createjs.Sound.play(name, {loop:loops});
		};
		
		//MISC SOUND NOTES:
		//Flash users: to play a sound that's in the library
		//createjs.Sound.play("Die");
		
		//to just play a sound
		//var AUD_Die = createjs.Sound.play("sounds/Die.mp3");
		//var AUD_Typing1 = createjs.Sound.play("sounds/Typing-1.mp3");
		
		//to loop a sound
		//http://createjs.com/Docs/SoundJS/classes/SoundInstance.html
		/*Once a SoundInstance is created, 
		a reference can be stored that can be used 
		to control the audio directly through the SoundInstance. 
		If the reference is not stored, 
		the SoundInstance will play out its audio (and any loops), 
		and is then de-referenced from the Sound class*/
		/*
		var myInstance = createjs.Sound.play("sounds/Die.mp3", {loop:2});
		 myInstance.addEventListener("loop", handleLoop);
		 function handleLoop(event) {
		     myInstance.volume = myInstance.volume * 0.5;
		 }
		*/
		
		//set up an array of typing sounds
		Arr_TypingSnds = new Array("Aud_Type1", "Aud_Type2");
		//chose a random typing sound and play it
		//for text writing
		randTypeSnd = function() {
			var randNum = Math.ceil(Math.random()*(Arr_TypingSnds.length))-1;
			var randomSound = Arr_TypingSnds[randNum];
			if(randomSound==undefined){
				randomSound = Arr_TypingSnds[0];
			};
			playSound(randomSound);
		}
		 
		/*KEYBOARD*/
		// consider using: https://github.com/madrobby/keymaster
		// which may have less cross browser issues (e.g. numbers may differ cross browsers...)
		// example of importing .js file, above
		//
		// further good examples of keyboard use in createjs game are:
		// https://github.com/CreateJS/EaselJS/blob/master/examples/Game.html
		// and https://github.com/javierj/EaselJS/blob/master/KeyboardDemo/DemoKeyboard.html
		
		//normal keyboard example:
		KEY_ENTER = 13;
		KEY_SPACE = 32;
		KEY_ESC = 27;
		KEY_UP = 38;
		KEY_DOWN = 40;
		KEY_LEFT = 37;
		KEY_RIGHT = 39;
		KEY_W = 87;
		KEY_A = 65;
		KEY_S = 83;
		KEY_D = 68;
		
		evnt_KEYDOWN = function(e){
			//cross browser issues exist
			if(!e){ var e = window.event; }
			//
			console.log("press " + e.keyCode);
			//
			if(_scene == "faq"){
				//escape - back to menu
				if(e.keyCode == KEY_ESC || e.keyCode == KEY_SPACE || e.keyCode == KEY_ENTER){
					playSound("TypingSelect");
					selectedMenuItem = "menu";
					transition();
				};
			};
			//
			if(_scene == "menu"){
				//make menu sellection
				if(e.keyCode == KEY_SPACE || e.keyCode == KEY_ENTER){
					playSound("TypingSelect");
					transition();
				};
				//up/down on menu items
				//only two items, so, simply put...
				if(e.keyCode == KEY_UP){
					writeText("START",txt_start);
					selectItem("game",txt_start,txt_faq);
				};
				if(e.keyCode == KEY_DOWN){
					writeText("WIKI",txt_faq);
					selectItem("faq",txt_faq,txt_start);
				};
			};
			//
			if(_scene == "menu_win"){
				//select - if "submit" submit to twitter - if "game" then hack again
				if(e.keyCode == KEY_SPACE || e.keyCode == KEY_ENTER){
					if (selectedMenuItem == "submit") {
						tinyURL();
					}
					if(selectedMenuItem == "game"){
						playSound("TypingSelect");
						transition();
					}
				};
				if(e.keyCode == KEY_UP){
					writeText("Submit This Hack",txt_option1_win);
					selectItem("submit",txt_option1_win,txt_option2_win);
				};
				if(e.keyCode == KEY_DOWN){
					writeText("Hack Again",txt_option2_win);
					selectItem("game",txt_option2_win,txt_option1_win);
				};
			};
			//
		};
		
		//Adding keyboard input is wrapped in functions so I can add/remove them in "game"
		//"game" has it's own, more complex one...
		//remove default listeners
		removeDefaultKeys = function(){
			document.onkeydown = null;
		};
		//add them
		addDefaultKeys = function(){
			document.onkeydown = evnt_KEYDOWN;
			//key up is similar, exapmle:
			//document.onkeyup = evnt_KEYUP;
		};
		
		addDefaultKeys();
		
		//keymaster.js keyboard:
		//create ticker: http://createjs.com/Docs/EaselJS/classes/Ticker.html
		//to handle keyboard input
		/*
		createjs.Ticker.addEventListener("tick", keyboard_ticker);
		
		function keyboard_ticker(event) {
			if (key.isPressed("up") || key.isPressed("w")) {
				console.log("UP pressed");
			}
			if (key.isPressed("down") || key.isPressed("s")) {
				console.log("DOWN pressed");
			}
			if (key.isPressed("left") || key.isPressed("a")) {
				console.log("LEFT pressed");
			}
			if (key.isPressed("right") || key.isPressed("d")) {
				console.log("RIGHT pressed");
			}
		}
		*/
	}
	this.frame_1 = function() {
		/*
		I am adding all addChild movieclips, images, etc. here, 
		because Flash CC does not allow you to set linkages to HTML5 library items.
		Once it has been on the stage it becomes available for adding via:
		
		var myMC = new lib.LINKAGE();
		_stage.addChild(myMC);
		
		These sprites are added after the initial load (second frame), so as not to interrupt
		the properly preloaded assets on first frame. Doesn't matter how these load in --
		They are small enough to be there by the time the player starts the game.
		
		Player sprite will have some actions in it. It makes a call to win/die event.
		Other than that it's fairly straightforward...
		
		*/
	}
	this.frame_7 = function() {
		writeText("Welcome to", txt_title);
	}
	this.frame_63 = function() {
		writeText("Haxatron 2000", txt_title);
	}
	this.frame_100 = function() {
		playSound("Intro");
	}
	this.frame_144 = function() {
		writeText("START", txt_start);
	}
	this.frame_174 = function() {
		writeText("WIKI", txt_faq);
	}
	this.frame_212 = function() {
		_stage.stop();
		_scene = "menu";
		selectedMenuItem = "game";
		
		//to play the "version" line only once
		//after that show keyboard controls... incase they forget... it could happen
		if (!bool_footerNote) {
			writeText("Version 2.0. Now in 64 bit. KEYBOARD enabled! UP/DOWN = SELECT ITEM, SPACE = SUBMIT SELECTION.",txt_msg);
			bool_footerNote = true;
		}else{
			writeText("KEYBOARD: UP/DOWN = SELECT ITEM, SPACE = SUBMIT SELECTION.",txt_msg);
		};
		
		//transition
		//plays a sound when you change screens
		//also handles miscelaneous clearing
		transition = function() {
			playSound("TransitionNewScene");
			//
			//clear all fields
			clearText();
			//
			_stage.gotoAndPlay(selectedMenuItem);
		}
		
		//For menu item selection
		//toggles the alpha between items, 
		//and sets the selectedMenuItem to current selection
		selectItem = function(selectedItm, currItem, prevItem) {
			playSound("Aud_Type3");
			selectedMenuItem = selectedItm;
			prevItem.alpha = 1;
			currItem.alpha = 0.5;
		}
	}
	this.frame_213 = function() {
		_stage.stop();
		_scene = "faq";
		selectedMenuItem = "faq";
		
		writeText("KEYBOARD: ESC = RETURN TO MENU",txt_msg);
		
		console.log("_scene: "+_scene);
	}
	this.frame_218 = function() {
		this.stop();
		_scene = "game";
		
		///////////
		// Higher-level, global game-specific logic and resources.
		//////////
		
		var gameTileParent; //Sprite
		var gameLoops = {mapRedraw: -1}; //Object, see: http://www.w3schools.com/js/js_objects.asp for more info
		var gameTileSize = 100;
		var gameCurrentMap; //Object
		var gameTilePlayerIsOn = null; //Object
		
		var changeInt = 20;
		var redrawInt = 50;
		var shouldCenterMap = true;
		
		function gameLoadMap(tiles, mapWidth, mapHeight) {
			//console.log("gameLoadMap(tiles, mapWidth, mapHeight)");
			//alternatively could use a Container for this: http://createjs.com/Docs/EaselJS/classes/Container.html
			var gamemc = new createjs.Container();//new createjs.MovieClip();
			gameCurrentMap = {map: tiles, width: mapWidth, height: mapHeight};
			//console.log("gameCurrentMap{map: "+tiles+", width: "+mapWidth+", height: "+mapHeight+"};");
			_stage.addChild(gamemc);
			gamemc.name = "gamemc";
			gameTileParent = gamemc;
			//console.log("gameTileParent, gamemc = "+gameTileParent);
			gameStartMapRedraw();
		}
		
		function gameRenderTile(tile) {
			////console.log("gameRenderTile(tile)");
			// Create totally new tile
			if (tile.mc == null) {
				//
				var mc = new tile.tile();
				gameTileParent.addChild(mc);
				mc.name = "tile_" + tile.x + "_" + tile.y;
				//
				mc.x = tile.x * gameTileSize;
				mc.y = tile.y * gameTileSize;
				mc.stop();
				tile.mc = mc;
			}
			// Check if tile relocated since last redraw
			else
			{
				if (tile.mc.x != (tile.x * gameTileSize) || (tile.mc.y != tile.y * gameTileSize))
				{
					tile.mc.x = tile.x * gameTileSize;
					tile.mc.y = tile.y * gameTileSize;
					tile.x = Math.floor(tile.mc.x / gameTileSize);
					tile.y = Math.floor(tile.mc.y / gameTileSize);
				}
			}
			tile.mc.stop();
			//
			if (!tile.isPlayer) tile.mc.gotoAndStop(tile.opening);
			//if (!tile.isPlayer) tile.mc.gotoAndStop(tile.opening+1);
		}
		
		function gameStartMapRedraw() {
			//console.log("gameStartMapRedraw()");
			if (gameLoops.mapRedraw == -1) {
				gameLoops.mapRedraw = setInterval(gameRedrawMap, redrawInt);
				gameLoops.mapShuffle = setInterval(gameShuffleMap, changeInt);
				playerKeyboardUpdate();//!!??
			}
		}
		
		function gameStopMapRedraw() {
			//console.log("gameStopMapRedraw()");
			clearInterval(gameLoops.mapRedraw);
			gameLoops.mapRedraw = 0;
		}
		
		function centerMap(){
			////console.log("centerMap()");
			if(shouldCenterMap == true){
				gameTileParent.x = Math.floor((stageWidth / 2) - (containerWidth / 2)) - 100;
				gameTileParent.y = Math.floor((stageHeight / 2) - (containerHeight / 2)) -50;	//-50 added to pull it up a bit
			};
		};
		
		function gameRedrawMap() {
			////console.log("gameRedrawMap()");
			//
			var tile = null;
			var player = null;
			//
			for (var a = 0; a != gameCurrentMap.map.length; ++a) {
				tile = gameCurrentMap.map[a];
				gameRenderTile(tile);
			}
			centerMap();
			playerCheckTile();//checked here and in keyboard so he doesn't idle on a deadly tile
		}
		function gameMakeTile(symbol, tx, ty) {
			////console.log("gameMakeTile(symbol, tx, ty)");
			return {tile:symbol, x:tx, y:ty, opening:(Math.round(Math.random()))};
		}
		
		function gameShuffleMap() {
			////console.log("gameShuffleMap()");
			var tile1 = gameCurrentMap.map[(Math.floor(Math.random() * gameCurrentMap.map.length + 1)-1)];
			while (tile1.isPlayer || (tile1.x == player.x && tile1.y == player.y) ) { // Slow, but at least now the setInterval for this function is accurate
				tile1 = gameCurrentMap.map[(Math.floor(Math.random() * gameCurrentMap.map.length + 1)-1)];
			}
			tile1.opening = Math.floor(Math.random() * 3);
			//to test win
			//tile1.opening = Math.floor(Math.random() * 2);
		}
		
		///////////
		// Player control and render logic
		//////////
		
		// dr = Direction as string: up, down, left, right
		// I left this in from the touchscreen controls version
		// This is here incase touchscreen controls are added back in
		// Each touchscreen button would set dir...
		// Keyboard now uses it as well.
		var dr = ""; 
		var playerSprite; //Sprite
		var player; //Object
		var playerCurrentTile = null; //Object
		
		function playerMake(symbol, px, py) {
			//console.log("playerMake(symbol, px, py)");
			player = gameMakeTile(symbol, px, py);
			player.isPlayer = true;
			return player;
		}
		function setKeyboard(){
			//console.log("setKeyboard()");
			//
			document.onkeydown = playerKeyboardMove;
			document.onkeyup = playerKeyboardUp;
			//
		};
		function clearKeyboard(){
			//console.log("clearKeyboard()");
			document.onkeydown = null;
			document.onkeyup = null;
		};
		//KEY_UP
		function playerKeyboardUpdate() {
			////console.log("playerKeyboardUpdate()");
			// Tile player is on right now
			for (var i = 0; i != gameCurrentMap.map.length; ++i) {
				if (gameCurrentMap.map[i].x == player.x && gameCurrentMap.map[i].y == player.y && gameCurrentMap.map[i] != player) {
					playerCurrentTile = gameCurrentMap.map[i];
					break;
				}
			}
		}
		function playerKeyboardUp(event){//KeyboardEvent
			////console.log("playerKeyboardUp(event)");
			playerKeyboardUpdate();
		}
		//KEY_DOWN
		function playerKeyboardMove(e) {//KeyboardEvent
			////console.log("playerKeyboardMove(event)");
			//
			if(!e){ var e = window.event; }
			//var dr = ""; // Direction: left | up | down | right 
			switch (e.keyCode){
				case KEY_LEFT:
					if (gameTileParent.getChildByName("tile_"+(player.x-1)+"_"+player.y) != null  && playerCurrentTile.opening == 1) {
						player.x--;
						dr = "left";
						playSound("Move1");
					}
					break;
				case KEY_UP:
					if (gameTileParent.getChildByName("tile_"+player.x+"_"+(player.y-1)) != null && playerCurrentTile.opening == 0) { 
						player.y--;
						dr = "up";
						playSound("Move2");
					}
					break;
				case KEY_RIGHT:
					if (gameTileParent.getChildByName("tile_"+(player.x+1)+"_"+player.y) != null && playerCurrentTile.opening == 1) {
						player.x++;
						dr = "right";
						playSound("Move2");
					}
					break;
				case KEY_DOWN:
					if (gameTileParent.getChildByName("tile_"+player.x+"_"+(player.y+1)) != null && playerCurrentTile.opening == 0) {
						player.y++;
						dr = "down";
						playSound("Move1");
					}
					break;
			}
			if (dr != "")  {
				player.mc.gotoAndStop(dr);
			}
			playerCheckTile();
		}
		
		function playerCheckTile(){
			////console.log("playerCheckTile()");
			////console.log("playerCheckTile(): "+gameTileParent.getChildByName("tile_" + player.x + "_" + player.y).timeline.position);
			var currLabel = player.mc.getCurrentLabel();
			//Win condition
			if (gameTileParent.getChildByName("tile_" + player.x + "_" + player.y).timeline.position == 2) {
				player.mc.gotoAndStop("die");
			}
			//Die condition
			if(gameTileParent.getChildByName("tile_" + player.x + "_" + player.y)==gameTileParent.getChildByName("tile_" + ExitX + "_" + ExitY)){//if it's Exit tile: [object Exit]
				//Start win failsafe
				if(currLabel!="win"){
					clearKeyboard();
					winInt = setInterval(winInterval,1000);
				};
				//default
				player.mc.gotoAndStop("win");
			}
		}
		
		//WIN FAILSAFE:
		//If the player does not trigger the "win" animation for whatever reason 
		//(problem seems to sometimes occur, and I'm not sure if what it is, or how to recreate it, or if it still exists...)
		//Countdown wait, and then force demoWin(); if the animation doesn't trigger & call it
		function winInterval(){
			console.log("winCnt: "+winCnt);
			winCnt+=1;
			if(winCnt>3){
				clearInterval(winInt);
				demoWin();
			};
		};
		
		///////////
		// Start
		///////////
		
		//The current map's width and height
		var currMapWidth; //Number
		var currMapHeight; //Number
		//To calculate the width and height of the map container (used in centering)
		//take gameTileSize and multiply by currMapWidth, and currMapHeight
		//CreateJS does not support .width yet, so this is how I handle it...
		var containerWidth;
		var containerHeight;
		//
		var currMapTiles; //Array
		//The current "Player" sprite - in this case, the little green guy
		var currPlayer; //Object
		//Placement of the Exit
		//I'm saving this here because location of exit may vary
		//--Depending on how much you decide to customize this
		var ExitX;
		var ExitY;
		
		//seconds and tries is your ranking
		//the player will be congradulated on this at the end
		//so both variables are set to global scope
		seconds = 0;
		tries = 0;
		
		var timeInt; //uint
		//Win failsafe (if, for whatever reason, win might not trigger)
		winInt = 0;
		var winCnt = 0;
		
		//the time interval
		function time(){
			seconds+=1;
		};
		
		function killAllIntervals() {
			//console.log("killAllIntervals() - murder called");
			//murder
			for (var i = 0; i<100; i++) {
				clearInterval(i);
			}
		}
		
		function init(){
			//console.log("init()");
			winCnt = 0;
			dr = "";
			currPlayer = null;
			gameCurrentMap = null;
			currMapWidth = 7;
			currMapHeight = 4;
			//
			containerWidth = gameTileSize*currMapWidth;
			containerHeight = gameTileSize*currMapHeight;
			//
			currMapTiles = [];
			demoLibrary = [];
			//*Make the Player
			currPlayer = playerMake(lib.Player, 0, 2);
			//
			for (var i = 0; i <= currMapWidth; ++i) {
				for (var j = 0; j <= currMapHeight; ++j) {
					var chosen = Math.floor(Math.random() * 1);
					--chosen;
					//*Make the Memory tiles
					currMapTiles.push(gameMakeTile(lib.Memory, i, j));
				}
			}
			//Place Exit tile -- in this case at the end of the map
			//First the variables
			ExitX = currMapWidth+1;
			ExitY = Math.floor(currMapHeight/2);
			//*Make the Exit tile
			currMapTiles.push(gameMakeTile(lib.Exit, ExitX, ExitY));
			currMapTiles.push(currPlayer);
			gameLoadMap(currMapTiles, currMapWidth, currMapHeight);
			//
			shouldCenterMap = true;
			setKeyboard();
			playSound("Spawn");
			//
			playerKeyboardUpdate();
		};
		
		function uninit(){
			//console.log("uninit()");
			shouldCenterMap = false;
			clearKeyboard();
			//
			for (var j = 0; j < gameTileParent.numChildren; j++){
				  gameTileParent.removeChild(gameTileParent.getChildAt(j));
			}
			_stage.removeChild(gameTileParent);
		};
		
		//Scope of win, and lose has been changed to be global
		//They are called within the demo player - at the end of its respective animation
		demoWin = function() {
			//console.log("demoWin()");
			clearInterval(gameLoops.mapRedraw);
			clearInterval(gameLoops.mapShuffle);
			clearInterval(timeInt);
			clearInterval(winInt);
			killAllIntervals();
			uninit();
			addDefaultKeys();//start the default keyboard again
			//go to win!
			selectedMenuItem = "win";
			transition();
		}
		demoLose = function() {
			//console.log("demoLose()");
			tries+=1;
			uninit();
			init();
		}
		
		removeDefaultKeys();//remove default keyboard
		init();
		timeInt = setInterval(time,1000);
	}
	this.frame_225 = function() {
		writeText("Success!",txt_msg_win);
	}
	this.frame_273 = function() {
		writeText("Great Scott! Hack has infiltrated the system.",txt_msg_win);
	}
	this.frame_371 = function() {
		writeText("It took you:",txt_stats_win);
	}
	this.frame_420 = function() {
		writeText(seconds+" seconds",txt_seconds_win);
	}
	this.frame_446 = function() {
		writeText(tries+" tries",txt_tries_win);
	}
	this.frame_473 = function() {
		writeText("Would you like to...",txt_options_win);
	}
	this.frame_510 = function() {
		writeText("Submit This Hack",txt_option1_win);
	}
	this.frame_560 = function() {
		writeText("Hack Again",txt_option2_win);
	}
	this.frame_590 = function() {
		_scene = "menu_win";//unlock keyboard
		selectedMenuItem = "submit";
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(6).call(this.frame_7).wait(56).call(this.frame_63).wait(37).call(this.frame_100).wait(44).call(this.frame_144).wait(30).call(this.frame_174).wait(38).call(this.frame_212).wait(1).call(this.frame_213).wait(5).call(this.frame_218).wait(7).call(this.frame_225).wait(48).call(this.frame_273).wait(98).call(this.frame_371).wait(49).call(this.frame_420).wait(26).call(this.frame_446).wait(27).call(this.frame_473).wait(37).call(this.frame_510).wait(50).call(this.frame_560).wait(30).call(this.frame_590).wait(10));

	// addedChildren
	this.instance = new lib.Player();
	this.instance.setTransform(-70,50,1,1,0,0,0,50,50);

	this.instance_1 = new lib.Memory();
	this.instance_1.setTransform(-70,-60,1,1,0,0,0,50,50);

	this.instance_2 = new lib.Exit();
	this.instance_2.setTransform(-70,150,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).to({state:[]},7).to({state:[]},205).wait(387));

	// faq
	this.instance_3 = new lib.IMG_faq();
	this.instance_3.setTransform(396.5,127);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(213).to({_off:false},0).to({_off:true},1).wait(386));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// symbols:
(lib.IMG_Error_01 = function() {
	this.initialize(img.IMG_Error_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.IMG_Error_02 = function() {
	this.initialize(img.IMG_Error_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.IMG_Error_03 = function() {
	this.initialize(img.IMG_Error_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.IMG_Error_04 = function() {
	this.initialize(img.IMG_Error_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.IMG_Error_05 = function() {
	this.initialize(img.IMG_Error_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.IMG_Error_Back = function() {
	this.initialize(img.IMG_Error_Back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.IMG_faq = function() {
	this.initialize(img.IMG_faq);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,386);


(lib.IMG_Memory_Back = function() {
	this.initialize(img.IMG_Memory_Back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.IMG_Memory_Exit_F1 = function() {
	this.initialize(img.IMG_Memory_Exit_F1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.IMG_Memory_Exit_F10 = function() {
	this.initialize(img.IMG_Memory_Exit_F10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.IMG_Memory_Exit_F11 = function() {
	this.initialize(img.IMG_Memory_Exit_F11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.IMG_Memory_Exit_F12 = function() {
	this.initialize(img.IMG_Memory_Exit_F12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.IMG_Memory_Exit_F13 = function() {
	this.initialize(img.IMG_Memory_Exit_F13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.IMG_Memory_Exit_F2 = function() {
	this.initialize(img.IMG_Memory_Exit_F2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.IMG_Memory_Exit_F3 = function() {
	this.initialize(img.IMG_Memory_Exit_F3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.IMG_Memory_Exit_F4 = function() {
	this.initialize(img.IMG_Memory_Exit_F4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.IMG_Memory_Exit_F5 = function() {
	this.initialize(img.IMG_Memory_Exit_F5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.IMG_Memory_Exit_F6 = function() {
	this.initialize(img.IMG_Memory_Exit_F6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.IMG_Memory_Exit_F7 = function() {
	this.initialize(img.IMG_Memory_Exit_F7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.IMG_Memory_Exit_F8 = function() {
	this.initialize(img.IMG_Memory_Exit_F8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.IMG_Memory_Exit_F9 = function() {
	this.initialize(img.IMG_Memory_Exit_F9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.IMG_Memory_Line_10 = function() {
	this.initialize(img.IMG_Memory_Line_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.IMG_Memory_Line_11 = function() {
	this.initialize(img.IMG_Memory_Line_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.IMG_Memory_Line_12 = function() {
	this.initialize(img.IMG_Memory_Line_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.IMG_Memory_Line_13 = function() {
	this.initialize(img.IMG_Memory_Line_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.IMG_Memory_Line_14 = function() {
	this.initialize(img.IMG_Memory_Line_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.IMG_Memory_Line_15 = function() {
	this.initialize(img.IMG_Memory_Line_15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.IMG_Memory_Line_16 = function() {
	this.initialize(img.IMG_Memory_Line_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.IMG_Memory_Line_17 = function() {
	this.initialize(img.IMG_Memory_Line_17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.IMG_Memory_Line_18 = function() {
	this.initialize(img.IMG_Memory_Line_18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.IMG_Memory_Line_19 = function() {
	this.initialize(img.IMG_Memory_Line_19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.IMG_Memory_Line_20 = function() {
	this.initialize(img.IMG_Memory_Line_20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.IMG_Memory_Line_21 = function() {
	this.initialize(img.IMG_Memory_Line_21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.IMG_Memory_Line_22 = function() {
	this.initialize(img.IMG_Memory_Line_22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.IMG_Memory_Line_5 = function() {
	this.initialize(img.IMG_Memory_Line_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.IMG_Memory_Line_6 = function() {
	this.initialize(img.IMG_Memory_Line_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.IMG_Memory_Line_7 = function() {
	this.initialize(img.IMG_Memory_Line_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.IMG_Memory_Line_8 = function() {
	this.initialize(img.IMG_Memory_Line_8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.IMG_Memory_Line_9 = function() {
	this.initialize(img.IMG_Memory_Line_9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.IMG_Memory_UP = function() {
	this.initialize(img.IMG_Memory_UP);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.IMG_Player_DIE_F1 = function() {
	this.initialize(img.IMG_Player_DIE_F1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,370,180);


(lib.IMG_Player_DIE_F10 = function() {
	this.initialize(img.IMG_Player_DIE_F10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,370,180);


(lib.IMG_Player_DIE_F11 = function() {
	this.initialize(img.IMG_Player_DIE_F11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,370,180);


(lib.IMG_Player_DIE_F2 = function() {
	this.initialize(img.IMG_Player_DIE_F2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,370,180);


(lib.IMG_Player_DIE_F3 = function() {
	this.initialize(img.IMG_Player_DIE_F3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,370,180);


(lib.IMG_Player_DIE_F4 = function() {
	this.initialize(img.IMG_Player_DIE_F4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,370,180);


(lib.IMG_Player_DIE_F5 = function() {
	this.initialize(img.IMG_Player_DIE_F5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,370,180);


(lib.IMG_Player_DIE_F6 = function() {
	this.initialize(img.IMG_Player_DIE_F6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,370,180);


(lib.IMG_Player_DIE_F7 = function() {
	this.initialize(img.IMG_Player_DIE_F7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,370,180);


(lib.IMG_Player_DIE_F8 = function() {
	this.initialize(img.IMG_Player_DIE_F8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,370,180);


(lib.IMG_Player_DIE_F9 = function() {
	this.initialize(img.IMG_Player_DIE_F9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,370,180);


(lib.IMG_Player_DOWN_F1 = function() {
	this.initialize(img.IMG_Player_DOWN_F1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,90);


(lib.IMG_Player_DOWN_F2 = function() {
	this.initialize(img.IMG_Player_DOWN_F2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,90);


(lib.IMG_Player_DOWN_F3 = function() {
	this.initialize(img.IMG_Player_DOWN_F3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,90);


(lib.IMG_Player_DOWN_F4 = function() {
	this.initialize(img.IMG_Player_DOWN_F4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,90);


(lib.IMG_Player_RIGHT_F1 = function() {
	this.initialize(img.IMG_Player_RIGHT_F1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.IMG_Player_RIGHT_F2 = function() {
	this.initialize(img.IMG_Player_RIGHT_F2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.IMG_Player_UP_F1 = function() {
	this.initialize(img.IMG_Player_UP_F1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,90);


(lib.IMG_Player_UP_F2 = function() {
	this.initialize(img.IMG_Player_UP_F2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,90);


(lib.IMG_Player_UP_F3 = function() {
	this.initialize(img.IMG_Player_UP_F3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,90);


(lib.IMG_Player_UP_F4 = function() {
	this.initialize(img.IMG_Player_UP_F4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,90);


(lib.IMG_Player_WIN_F1 = function() {
	this.initialize(img.IMG_Player_WIN_F1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,90);


(lib.IMG_Player_WIN_F10 = function() {
	this.initialize(img.IMG_Player_WIN_F10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1450,1070);


(lib.IMG_Player_WIN_F11 = function() {
	this.initialize(img.IMG_Player_WIN_F11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1960,1220);


(lib.IMG_Player_WIN_F12 = function() {
	this.initialize(img.IMG_Player_WIN_F12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2580,1450);


(lib.IMG_Player_WIN_F13 = function() {
	this.initialize(img.IMG_Player_WIN_F13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2920,1730);


(lib.IMG_Player_WIN_F2 = function() {
	this.initialize(img.IMG_Player_WIN_F2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,90);


(lib.IMG_Player_WIN_F3 = function() {
	this.initialize(img.IMG_Player_WIN_F3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,100);


(lib.IMG_Player_WIN_F4 = function() {
	this.initialize(img.IMG_Player_WIN_F4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,110);


(lib.IMG_Player_WIN_F5 = function() {
	this.initialize(img.IMG_Player_WIN_F5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,120);


(lib.IMG_Player_WIN_F6 = function() {
	this.initialize(img.IMG_Player_WIN_F6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,250);


(lib.IMG_Player_WIN_F7 = function() {
	this.initialize(img.IMG_Player_WIN_F7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,440,370);


(lib.IMG_Player_WIN_F8 = function() {
	this.initialize(img.IMG_Player_WIN_F8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,660,500);


(lib.IMG_Player_WIN_F9 = function() {
	this.initialize(img.IMG_Player_WIN_F9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1060,800);


(lib.IMG_Tile100x100 = function() {
	this.initialize(img.IMG_Tile100x100);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.Tile_Line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.IMG_Memory_UP();

	this.instance_1 = new lib.IMG_Memory_Line_5();

	this.instance_2 = new lib.IMG_Memory_Line_6();

	this.instance_3 = new lib.IMG_Memory_Line_7();

	this.instance_4 = new lib.IMG_Memory_Line_8();

	this.instance_5 = new lib.IMG_Memory_Line_9();

	this.instance_6 = new lib.IMG_Memory_Line_10();

	this.instance_7 = new lib.IMG_Memory_Line_11();

	this.instance_8 = new lib.IMG_Memory_Line_12();

	this.instance_9 = new lib.IMG_Memory_Line_13();

	this.instance_10 = new lib.IMG_Memory_Line_14();

	this.instance_11 = new lib.IMG_Memory_Line_15();

	this.instance_12 = new lib.IMG_Memory_Line_16();

	this.instance_13 = new lib.IMG_Memory_Line_17();

	this.instance_14 = new lib.IMG_Memory_Line_18();

	this.instance_15 = new lib.IMG_Memory_Line_19();

	this.instance_16 = new lib.IMG_Memory_Line_20();

	this.instance_17 = new lib.IMG_Memory_Line_21();

	this.instance_18 = new lib.IMG_Memory_Line_22();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.Tile_Error = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//Play a random frame
		this.gotoAndStop(Math.ceil(Math.random()*this.timeline.duration));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35));

	// Errors
	this.instance = new lib.IMG_Error_01();

	this.instance_1 = new lib.IMG_Error_02();

	this.instance_2 = new lib.IMG_Error_03();

	this.instance_3 = new lib.IMG_Error_04();

	this.instance_4 = new lib.IMG_Error_05();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_3}]},7).to({state:[{t:this.instance_4}]},7).wait(7));

	// Back
	this.instance_5 = new lib.IMG_Error_Back();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.Player_WIN = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_2 = function() {
		playSound("Win");
	}
	this.frame_31 = function() {
		//this.stop();
		demoWin();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(29).call(this.frame_31).wait(1));

	// Player
	this.instance = new lib.IMG_Player_WIN_F1();
	this.instance.setTransform(5.4,-39);

	this.instance_1 = new lib.IMG_Player_WIN_F2();
	this.instance_1.setTransform(5.4,-39);

	this.instance_2 = new lib.IMG_Player_WIN_F3();
	this.instance_2.setTransform(-4.6,-44);

	this.instance_3 = new lib.IMG_Player_WIN_F4();
	this.instance_3.setTransform(-4.6,-49);

	this.instance_4 = new lib.IMG_Player_WIN_F5();
	this.instance_4.setTransform(-14.6,-54);

	this.instance_5 = new lib.IMG_Player_WIN_F6();
	this.instance_5.setTransform(-79.6,-119);

	this.instance_6 = new lib.IMG_Player_WIN_F7();
	this.instance_6.setTransform(-169.6,-179);

	this.instance_7 = new lib.IMG_Player_WIN_F8();
	this.instance_7.setTransform(-279.6,-244);

	this.instance_8 = new lib.IMG_Player_WIN_F9();
	this.instance_8.setTransform(-479.6,-394);

	this.instance_9 = new lib.IMG_Player_WIN_F10();
	this.instance_9.setTransform(-674.6,-529);

	this.instance_10 = new lib.IMG_Player_WIN_F11();
	this.instance_10.setTransform(-929.6,-604);

	this.instance_11 = new lib.IMG_Player_WIN_F12();
	this.instance_11.setTransform(-1239.6,-719);

	this.instance_12 = new lib.IMG_Player_WIN_F13();
	this.instance_12.setTransform(-1409.6,-859);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.4,-39,90,90);


(lib.Player_UP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// Player
	this.instance = new lib.IMG_Player_UP_F1();
	this.instance.setTransform(5,5);

	this.instance_1 = new lib.IMG_Player_UP_F2();
	this.instance_1.setTransform(5,5);

	this.instance_2 = new lib.IMG_Player_UP_F3();
	this.instance_2.setTransform(5,5);

	this.instance_3 = new lib.IMG_Player_UP_F4();
	this.instance_3.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_3}]},6).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,90,90);


(lib.Player_RIGHT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_22 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(22).call(this.frame_22).wait(1));

	// Player
	this.instance = new lib.IMG_Player_RIGHT_F1();
	this.instance.setTransform(0,-40);

	this.instance_1 = new lib.IMG_Player_RIGHT_F2();
	this.instance_1.setTransform(0,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},6).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-40,100,100);


(lib.Player_Down = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Plaer
	this.instance = new lib.IMG_Player_DOWN_F1();
	this.instance.setTransform(5,5);

	this.instance_1 = new lib.IMG_Player_DOWN_F2();
	this.instance_1.setTransform(5,5);

	this.instance_2 = new lib.IMG_Player_DOWN_F3();
	this.instance_2.setTransform(5,5);

	this.instance_3 = new lib.IMG_Player_DOWN_F4();
	this.instance_3.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,90,90);


(lib.Player_DIE = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("Die");
	}
	this.frame_44 = function() {
		//this.stop();
		demoLose();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(42).call(this.frame_44).wait(1));

	// Player
	this.instance = new lib.IMG_Player_DIE_F1();
	this.instance.setTransform(-125,-120);

	this.instance_1 = new lib.IMG_Player_DIE_F2();
	this.instance_1.setTransform(-125,-120);

	this.instance_2 = new lib.IMG_Player_DIE_F3();
	this.instance_2.setTransform(-125,-120);

	this.instance_3 = new lib.IMG_Player_DIE_F4();
	this.instance_3.setTransform(-125,-120);

	this.instance_4 = new lib.IMG_Player_DIE_F5();
	this.instance_4.setTransform(-125,-120);

	this.instance_5 = new lib.IMG_Player_DIE_F6();
	this.instance_5.setTransform(-125,-120);

	this.instance_6 = new lib.IMG_Player_DIE_F7();
	this.instance_6.setTransform(-125,-120);

	this.instance_7 = new lib.IMG_Player_DIE_F8();
	this.instance_7.setTransform(-125,-120);

	this.instance_8 = new lib.IMG_Player_DIE_F9();
	this.instance_8.setTransform(-125,-120);

	this.instance_9 = new lib.IMG_Player_DIE_F10();
	this.instance_9.setTransform(-125,-120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_9}]},3).to({state:[]},3).to({state:[]},1).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125,-120,370,180);


(lib.Exit_Tile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.IMG_Memory_Exit_F13();

	this.instance_1 = new lib.IMG_Memory_Exit_F1();

	this.instance_2 = new lib.IMG_Memory_Exit_F2();

	this.instance_3 = new lib.IMG_Memory_Exit_F3();

	this.instance_4 = new lib.IMG_Memory_Exit_F4();

	this.instance_5 = new lib.IMG_Memory_Exit_F5();

	this.instance_6 = new lib.IMG_Memory_Exit_F6();

	this.instance_7 = new lib.IMG_Memory_Exit_F7();

	this.instance_8 = new lib.IMG_Memory_Exit_F8();

	this.instance_9 = new lib.IMG_Memory_Exit_F9();

	this.instance_10 = new lib.IMG_Memory_Exit_F10();

	this.instance_11 = new lib.IMG_Memory_Exit_F11();

	this.instance_12 = new lib.IMG_Memory_Exit_F12();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.Player = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{down:0,up:6,right:10,left:14,die:18,win:22,none:27});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(32));

	// Player
	this.instance = new lib.Player_Down();
	this.instance.setTransform(50,5,1,1,0,0,0,50,50);

	this.instance_1 = new lib.Player_UP();
	this.instance_1.setTransform(50,5,1,1,0,0,0,50,50);

	this.instance_2 = new lib.Player_RIGHT();
	this.instance_2.setTransform(50,50,1,1,0,0,0,50,50);

	this.instance_3 = new lib.Player_DIE();
	this.instance_3.setTransform(50,50,1,1,0,0,0,50,50);

	this.instance_4 = new lib.Player_WIN();
	this.instance_4.setTransform(50,50,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_2,p:{skewY:0}}]},4).to({state:[{t:this.instance_2,p:{skewY:180}}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[]},5).wait(5));

	// TileArea
	this.instance_5 = new lib.IMG_Tile100x100();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-40,100,140);


(lib.Memory = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Tile_Line();
	this.instance.setTransform(50,50,1,1,0,0,0,50,50);

	this.instance_1 = new lib.Tile_Error();
	this.instance_1.setTransform(50,50,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{rotation:0}}]}).to({state:[{t:this.instance,p:{rotation:90}}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// Back
	this.instance_2 = new lib.IMG_Memory_Back();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.Exit = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_13 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(1));

	// Exit
	this.instance = new lib.Exit_Tile();
	this.instance.setTransform(50,50,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;