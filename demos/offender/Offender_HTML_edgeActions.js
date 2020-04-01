/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22000, function(sym, e) {
         sym.stop();
         
         /* Score usage:
         sym.getComposition().getStage().setScore("50");
         console.log("SCORE: "+comp.getScore()); 
         */
         
         //Collision Detection
         //simple object intersection hit test because this is a small project
         //consider using JQuery Collision http://sourceforge.net/projects/jquerycollision/
         //for more elaborate things -- thanks to Adobe forums for pointing me in the right direction
         function hitTest(a, b){
         	//
         	aPos = {x:parseInt(a.css('left')), y:parseInt(a.css('top'))};
         	bPos = {x:parseInt(b.css('left')), y:parseInt(b.css('top'))};
         	//
         	return aPos.x < bPos.x + b.width() && aPos.x + a.width() > bPos.x && aPos.y < bPos.y + b.height() && aPos.y + a.height() > bPos.y
         }
         
         //Player
         //create and place ship and beam
         function createSprites() {
         	sym.mc_ship = sym.createChildSymbol("Ship", "Stage").getSymbolElement();
         	sym.mc_ship.css({"position":"absolute", "top":sym.shipY + "px", "left":sym.shipX + "px"});
         		//
         	sym.mc_ray = sym.createChildSymbol("Ray", "Stage").getSymbolElement();
         	sym.mc_ray.css({"position":"absolute", "top":sym.rayY + "px", "left":sym.shipX + "px"});
         	sym.mc_ray.hide();
         }
         
         function removeSprites(){
         	sym.mc_ship.stop();
         	sym.mc_ray.stop();
         	sym.mc_ship.remove();
         	sym.mc_ray.remove();
         }
         
         //Sound
         //random "hits" for when bunnies get abducted or player dies
         var randHitArr = [Aud_Hit1_, Aud_Hit2_, Aud_Hit3_];
         function randHit() {
         	var randHit = randHitArr[Math.floor(Math.random()*randHitArr.length)];
         	if(randHit == undefined){
         		randHit = randHitArr[0];
         	}
         	randHit.play();
         }
         
         //Bunnies!
         function bunnyM(clip) {
         	//console.log(clip);
         	//speed, and end variables
         	var bEnd = sym.stage.width()-clip.width();
         	var bSpeed = (Math.ceil(Math.random()*sym.bunnySpeed)+sym.bunnySpeed)-500;
         	//place it randomly (x) on the stage
         	clip.css({"position":"absolute", "top":sym.bunnyY + "px", "left":(Math.ceil(Math.random()*sym.stage.width())-clip.width()) + "px"});
         	//call first to cancel queue -- just incase this could become a problem
         	clip.stop();
         	//
         	clip.animate( {left: bEnd}, bSpeed, "linear", function(){
         		sym.score -= 1;//"escapee" penalty
         		bunnyM(clip);
         	}
         	);
         }
         
         function makeBunny() {
         	for (var i = 0; i<sym.bNum; i++) {
         		var mc_bunny = sym.createChildSymbol("Bunny", "Stage").getSymbolElement();
         		//push to array for access later and start moving it
         		//bunnyM also takes care of placeing them
         		//note: bunnies must be stored in array
         		//for colision detection, and better access
         		sym.arr_bunnies.push(mc_bunny);
         		bunnyM(mc_bunny);
         	}
         }
         
         function removeBunny() {
         	//delete bunnies
         	//You can remove in two ways .remove() or .deleteSymbol()
         	//I am not certain what the difference is so I am using .remove()
         	//see: http://api.jquery.com/remove/
         	//always .stop(); to cancel the .animate();
         	for (var i = 0; i<sym.arr_bunnies.length; ++i){
         		sym.arr_bunnies[i].stop();
         		sym.arr_bunnies[i].remove();
         		//sym.getSymbol(sym.arr_bunnies[i]).deleteSymbol();
         	}
         }
         
         function bunnyD(clip) {
         	if(hitTest(sym.mc_ray, clip)){
         		sym.score += 1;
         		sym.bunnyAbAmnt+=1;
         		clip.stop();//stop current animation queue
         		clip.animate( {top: 0}, 200, "linear", function(){
         			bunnyM(clip);
         		}
         		);
         	}
         }
         
         //creating function with sym.
         //to change scope so keyboard events can access these
         sym.key_onKeyDown = function() {
         	sym.mc_ray.show();
         	Aud_BeamLoop.play();
         	//hit detection
         	for (var i = 0; i<sym.arr_bunnies.length; ++i){
         		  bunnyD(sym.arr_bunnies[i]);
         	}
         };
         sym.key_onKeyUp = function() {
         	Aud_BeamLoop.stop();
         	sym.mc_ray.hide();
         }
         
         //Enemy Ship
         //And Enemy Laser
         
         function enemyFire(clip)
         {
         	var randSpeed = (Math.random()*20)+10;
         	//enemy fire serves as a warning that an enemy is approaching
         	//fire does nothing, it passes the ship,
         	//and should appear randomly somewhere under the ship, and over the bunnies
         	clip.css({"position":"absolute", "top":Math.ceil(Math.random()*40)+90 + "px", "left":-clip.width() + "px"});
         	//
         	clip.animate( {left: (sym.stage.width()+clip.width())}, 1000, "linear", function(){
         		clip.remove();//get rid of it when it's passed
         	}
         	);
         }
         
         
         function makeEnemyFire(){
         	Aud_Laser.play();
         	//make as much enemy fire as there are enemies, so going by sym.enemyAmount
         	for (var i = 1; i<sym.enemyAmount+1; i++)
         	{
         		var mc_fire = sym.createChildSymbol("Fire", "Stage").getSymbolElement();
         		enemyFire(mc_fire); 
         	}
         }
         
         //enemy ship comes in 8 steps using .anmiate to call the next when a movement is done
         //this simulates the ship flying up/down exactly how I want it
         //I'm certain there are better ways of doing this, if so let me know!
         //
         //the starting function is called at random -- in enemyShip(clip);
         //so when there are multiple enemies there is a random flying pattern to doge
         var enemyBounceSpeed = 500; //the speed of up/down movement -- should last 0.3 seconds
         function enemyShip_move1(clip){
         	clip.animate({
         		top: 83
         		}, { 
         			duration: enemyBounceSpeed, 
         			queue: false, 
         			easing: "easeInCubic", 
         			complete: function(){
         				enemyShip_move2(clip);
         			}
         	});
         }
         function enemyShip_move2(clip){
         	clip.animate({
         		top: 120
         		}, { 
         			duration: enemyBounceSpeed, 
         			queue: false, 
         			easing: "easeOutCubic", 
         			complete: function(){
         				enemyShip_move3(clip);
         			}
         	});
         }
         function enemyShip_move3(clip){
         	clip.animate({
         		top: 60
         		}, { 
         			duration: enemyBounceSpeed, 
         			queue: false, 
         			easing: "easeInCubic", 
         			complete: function(){
         				enemyShip_move4(clip);
         			}
         	});
         }
         function enemyShip_move4(clip){
         	clip.animate({
         		top: 25
         		}, { 
         			duration: enemyBounceSpeed, 
         			queue: false, 
         			easing: "easeOutCubic", 
         			complete: function(){
         				enemyShip_move1(clip);
         			}
         	});
         }
         
         function enemyShip(clip)
         {
         	//position ship - somewhere off screen, at same Y
         	var enemyStartX = (Math.random()*-500)-200;
         	clip.css({"position":"absolute", "top":sym.enemyY + "px", "left":enemyStartX + "px"});
         	//random speed
         	var randNum = (Math.random()*10000)+5000;
         	//move it
         	clip.animate({
         		left: (sym.stage.width()+clip.width())
         		}, {
         			duration: randNum, 
         			queue: false,
         			easing: "linear", 
         			complete: function(){
         				clip.remove();
         			}
         	});
         	//start moving it up/down -- call the starting movement
         	//at random -- either the top most or bottom most
         	if(randNum>randNum/2){
         		enemyShip_move2(clip);
         	}else{
         		enemyShip_move4(clip);
         	}
         }
         
         //DEATH
         //was the player hit by an enemy ship?
         function enemyHit(){
         	//
         	for(var i = 0; i<sym.arr_enemies.length; ++i){
         	//
         		if(hitTest(sym.mc_ship, sym.arr_enemies[i])){
         			//create and place an explosion on the ship coords
         			var mc_explode = sym.createChildSymbol("Explode", "Stage").getSymbolElement();
         			mc_explode.css({"position":"absolute", "top":sym.mc_ship.position().top + "px", "left":sym.mc_ship.position().left+ "px"});
         			//
         			Aud_Explode.play();
         			sym.arr_enemies[i].stop();
         			sym.arr_enemies[i].remove();
         			//you lose
         			sym.SCENE = "lose";
         			stopG();
         		}
         	}
         }
         
         
         function attachEnemyShip()
         {
         	for (var i = 0; i<sym.enemyAmount; i++)
         	{
         		var mc_enemy = sym.createChildSymbol("Enemy_Ship", "Stage").getSymbolElement();
         		sym.arr_enemies.push(mc_enemy);
         		enemyShip(mc_enemy);
         	}
         }
         
         
         function removeEnemyShip()
         {
         	//remove all enemies
         	for (var i = 0; i<sym.arr_enemies.length; ++i){
         	//You can remove in two ways .remove() or .deleteSymbol()
         	//I am not certain what the difference is so I am using .remove()
         	//see: http://api.jquery.com/remove/
         	//always .stop(); if you are removing a symbol with .animate()
         		sym.arr_enemies[i].stop();
         		sym.arr_enemies[i].remove();
         		//sym.getSymbol(sym.arr_enemies[i]).deleteSymbol();
         	}
         }
         
         //enemyInit calls to create the enemy
         //as you play, and as you progress
         //the game gets more difficutl -- more enemies
         function enemyInit()
         {
         	clearInterval(sym.enemyInterval);
         	//was (Math.random()*20000)+10000;
         	var randNum = (Math.random()*9000)+10000;
         	//
         	if(sym.score>=sym.lvl1_goal-100){
         		randNum = (Math.random()*8000)+9000;
         	}
         	if(sym.score>=sym.lvl2_goal-200){
         		randNum = (Math.random()*5000)+7000;
         	}
         	if(sym.score>=sym.win_goal-400){
         		randNum = (Math.random()*1000)+6000;
         	}
         	if(sym.score>=sym.win_goal-200){
         		randNum = (Math.random()*1000)+5000;
         	}
         	//if sym.bunnyAbAmnt is above the goal
         	//then you may start creating enemies
         	if(sym.bunnyAbAmnt>10){
         		makeEnemyFire();
         		attachEnemyShip();
         	};
         	//
         	sym.enemyInterval = setInterval(enemyInit, randNum);
         }
         
         //Bunny nightmare pannel
         //bad dreams ocasionally show up acompanied with a sound
         function nightmareInit() {
         	clearInterval(sym.nightmareInterval);
         	var randNum = (Math.random()*10000)+10000;
         	sym.mc_nightmare.play();
         	Aud_Nightmare.play();
         	//start again
         	sym.nightmareInterval = setInterval(nightmareInit, randNum);
         }
         
         //game timer
         //initiates enemies
         function timer(){
         	//set score
         	sym.txt_score.html(sym.score);
         	//increment time
         	sym.time+=1;
         	//increment enemies, if the score is past lvl1_goal
         	if (sym.time>100 && sym.score>sym.lvl1_goal-100) {
         		sym.time = 1;
         		if (sym.enemyAmount<sym.enemyMax) {
         			sym.enemyAmount++;
         		}
         		//no more than 4 enemies, reset it
         		if (sym.enemyAmount == sym.enemyMax) {
         			sym.enemyAmount = 1;
         		}
         	}
         }
         
         //leveling system
         function elapsed() {
         	sym.timeElapsed += 1;
         	//win
         	if (sym.timeElapsed>sym.win_time && sym.score>sym.win_goal) {
         		console.log("You win.");
         		sym.SCENE = "win";
         		//play();
         		stopG();
         		sym.$("Screen_End").hide();//hide gameover
         		sym.play();
         	}
         	//.data to keep it .play() called once
         	if ((sym.timeElapsed>sym.lvl2_time && sym.score>sym.lvl2_goal) && sym.mc_b2_data != false) {
         		randHit();
         		sym.mc_transition.play("transition");//blink
         		sym.mc_b2.play();
         		sym.mc_b2_data = false;
         	}
         	if ((sym.timeElapsed>sym.lvl1_time && sym.score>sym.lvl1_goal) && sym.mc_b1_data != false) {
         		randHit();
         		sym.mc_transition.play("transition");//blink
         		sym.mc_b1.play();
         		sym.mc_b1_data = false;
         	}
         }
         
         //stop all sounds :)
         //better yet would be to use a groupd
         //and buzz.all() to do this: http://buzz.jaysalvat.com/documentation/group/
         function SoundMixer_stopAll(){
         	Aud_GameTrack.stop();
         	Aud_Hit1_.stop();
         	Aud_Hit2_.stop();
         	Aud_Hit3_.stop();
         	Aud_BeamLoop.stop();
         	Aud_Laser.stop();
         	Aud_Nightmare.stop();
         }
         
         //"submit" your score window
         //hide the current gameover window
         //and open the submission one
         //to call from screen: sym.getComposition().getStage().scorecall();
         sym.scorecall = function() {
         	sym.$("Screen_End").hide();//hide mc_gameover
         	sym.$("Screen_Score").show();
         }
         //same as above but the "overachieve" option
         //to call from screen: sym.getComposition().getStage().overachieve();
         sym.overachieve = function(){
         	resumeG();
         }
         //done submitting scores, and playing, go to the scores scene
         //leaves the game -- called in Screen_Score
         sym.gotoScores = function(){
         	sym.SCENE = "scores";
         	sym.stop("scores");
         }
         
         //stops the game
         //this clears the current game
         //to start it again call resumeG();
         function stopG() {
         	SoundMixer_stopAll();
         	//set player score message for if this is gameover
         	sym.mc_gameover.$("txt_plyr_score").html("You score "+sym.score+"!");
         	//
         	randHit();
         	Aud_Explode.play();
         	//show gameover
         	sym.$("Screen_End").show();
         	//
         	removeEnemyShip();
         	removeSprites();
         	removeBunny();
         	clearInterval(sym.timerInt);
         	clearInterval(sym.nightmareInterval);
         	clearInterval(sym.enemyInterval);
         	clearInterval(sym.timeElapsedInt);
         	clearInterval(sym.shipHitInterval);
         }
         
         //resumeG functions both as init() and resuming
         //if the player loses, the game is cleared in stopG(),
         //and this would be called to start a fresh one
         //so this is setting all values to their default state
         //as well as creating all new sprites
         function resumeG() {
         	sym.SCENE = "game"; //set to game so game keyboard input will work
         	sym.score = 1;	
         	sym.mc_b1.stop(0);
         	sym.mc_b2.stop(0);
         	sym.mc_b1_data = true;
         	sym.mc_b2_data = true;
         	sym.bunnyAbAmnt = 0;
         	//clear/reset arrays
         	//there are a number of ways to do this, for example: 
         	//http://stackoverflow.com/questions/1232040/how-to-empty-an-array-in-javascript
         	//but keeping it simple...
         	sym.arr_bunnies = [];
         	sym.arr_enemies = [];
         	//start the music
         	Aud_GameTrack.play().fadeIn();
         	sym.$("Screen_End").hide();//hide mc_gameover
         	sym.$("Screen_Score").hide();//hide the "your name here" screen
         	createSprites();
         	makeBunny();
         	enemyInit();
         	nightmareInit();  
         	sym.timerInt = setInterval(timer, 100);
         	sym.timeElapsedInt = setInterval(elapsed, 100);
         	sym.shipHitInterval = setInterval(enemyHit , 100);
         	//
         	//removeEnemyShip();
         	//reset vars
         	sym.time = 1;
         	sym.enemyAmount = 1;
         	sym.timeElapsed = 1;
         	//set these values AFTER sprites have been created
         	sym.maxX = sym.stage.width()-sym.mc_ship.width();
         	sym.minX = 0;
         }
         
         //Start game
         resumeG();
         
         
         

      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "document", "keydown", function(sym, e) {
         //GAME KEYBOARD
         //add others acording to behavior for desired "SCENE"
         //example: if it is main menu then enable main menu keyboard functionality
         //if it is game then enable game keyboard functionality
         
         //GAME
         if(sym.SCENE == "game"){
         	//32 is SPACE
         	if (e.which == 32) {
         		//call the function on the stage's "game trigger"
         		sym.getComposition().getStage().key_onKeyDown();
         		//sym.mc_ray.show();
         		//Aud_BeamLoop.play();
         	}
         	//37 is LEFT
         	if (e.which == 37){
         		//keeps it from "crawling" if key is pressed while ship is close to left of screen
         		sym.playerSpeed_left = (sym.mc_ship.position().left);
         		sym.bool_left = true;
         	}
         	//39 is RIGHT
         	if (e.which == 39){
         		//keeps it from "crawling" if key is pressed while ship is close to right of screen
         		sym.playerSpeed_right = (sym.stage.width()-(sym.mc_ship.position().left));
         		sym.bool_right = true;
         	}
         	//player movement
         	//is an interval - target left/right location are the sides of the screen
         	//if the keyboard key is released .anmiate is stopped/canceled (see keyup)
         	//there are a number of ways to animate with css/js http://www.dehats.com/drupal/node/120
         	//has some good examples. I've chosen .animate here, and because the target are the edges
         	//of the screen it will continue to move there untill you release the key
         	//it will also not go off the screen...
         	if(sym.bool_left){
         		sym.mc_ship.animate( {left: sym.minX}, {duration: sym.playerSpeed_left, easing: "linear"} );
         		sym.mc_ray.animate( {left: sym.minX}, {duration: sym.playerSpeed_left, easing: "linear"} );
         	}
         	if(sym.bool_right){
         		sym.mc_ship.animate( {left: sym.maxX}, {duration: sym.playerSpeed_right, easing: "linear"} );
         		sym.mc_ray.animate( {left: sym.maxX}, {duration: sym.playerSpeed_right, easing: "linear"} );
         	}
         }
         
         //DEBUG
         if(e.which==27){
         //
         }

      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         //"GLOBAL" VARIABLES
         //what label? 
         //will check against this and if it is "game" then game functionality will unlock
         //if it is menu then keyboard for menu will unlock, etc...
         sym.SCENE; 
         
         sym.score = 100;	
         sym.time = 1;
         sym.enemyAmount = 1;//current amount
         sym.enemyMax = 3;//maximum amount of enemies alowed at once
         sym.timeElapsed = 1;
         sym.playerSpeed = 600;//5
         sym.playerSpeed_left = 600;//5
         sym.playerSpeed_right = 600;//5
         sym.bunnySpeed = 5000;//will be random + itself, this is the default minimum value
         //sym.bunnyAbAmnt = amount of abducted bunnies, if it's above a certain number then enemies will start appearing
         //this keeps the game from generating enemies right away -- gives the player time to adjust
         sym.bunnyAbAmnt = 0;
         //goals (before leveling up)
         sym.lvl1_goal = 300;
         sym.lvl2_goal = 530;
         //targeted time (how long you have been playing before you can go to next level)
         sym.lvl1_time = 300;
         sym.lvl2_time = 500;
         //above but for winning
         sym.win_time = 700;
         sym.win_goal = 800;
         
         sym.bNum = 10;//maximum number of bunnies on stage
         
         //Booleans - flags
         sym.bool_left = false;
         sym.bool_right = false;
         
         //.data to keep it .play() called once
         //may only play once if it is true then the transition to next level may play
         sym.mc_b1_data = false;
         sym.mc_b2_data = false;
         
         //symbol refferences
         sym.stage = sym.$("Stage");
         sym.mc_b1 = sym.getSymbol("Beds").getSymbol("IMG_Sprite_Bed02");
         sym.mc_b2 = sym.getSymbol("Beds").getSymbol("IMG_Sprite_Bed03");
         sym.mc_nightmare = sym.getSymbol("Nightmare");
         sym.mc_transition = sym.getSymbol("Transition_Blink");
         sym.mc_gameover = sym.getSymbol("Screen_End");
         sym.mc_score = sym.getSymbol("Screen_Score");
         sym.mc_ship;
         sym.mc_ray;
         sym.txt_score = sym.$("txt_score");
         
         //Arrays
         sym.arr_bunnies = [];
         sym.arr_enemies = [];
         
         //X Y positions
         sym.shipY = 70;//25
         sym.enemyY = 88;
         sym.rayY = 66;//66
         sym.bunnyY = 180;
         //centering
         sym.centerX = sym.stage.width()/2;
         sym.centerY = sym.stage.height()/2;
         //left/right bounds
         sym.maxX = sym.stage.width();
         sym.minX = 10;//minimum placement for ship
         //player X (incremented/decremented via keyboard input, initial value is center)
         sym.shipX = sym.centerX;
         
         //Timers - intervals
         sym.timerInt;
         sym.timeElapsedInt;
         sym.nightmareInterval;
         sym.enemyInterval;
         sym.shipHitInterval;
         
         //SOUND
         
         //I manually made the sound longer so it appears to loop -- nevermind the gap
         //it is a bit more hacking around to get seamless audio looping (Flash does it well)
         //here are some notes for those interested in getting it to work
         //http://sound.stackexchange.com/questions/8916/mp3-gapless-looping-help
         //http://forestmist.org/blog/html5-audio-loops/
         //the main soundrack of the game:
         Aud_GameTrack = new buzz.sound("audio/mainmenu-loop", {formats: ["wav", "ogg", "mp3"], preload: true, loop: true});
         //plays at the end of the game:
         Aud_GameTrack_2 = new buzz.sound("audio/mainmenu-under-loop2", {formats: ["wav", "ogg", "mp3"], preload: true, loop: true});
         Aud_ScoresTrack = new buzz.sound("audio/scores-loop", {formats: ["wav", "ogg", "mp3"], preload: true, loop: true});
         Aud_KeysTrack = new buzz.sound("audio/Keys-loop", {formats: ["wav", "ogg", "mp3"], preload: true, loop: true});
         //Menu sounds
         Aud_MenuPreLoop = new buzz.sound("audio/Mainmenu-preloop", {formats: ["wav", "ogg", "mp3"], preload: true});
         Aud_MenuLoop = new buzz.sound("audio/mainmenu-loop3", {formats: ["wav", "ogg", "mp3"], preload: true, loop: true});
         
         //Intro
         //Aud_LogoMoron = new buzz.sound("audio/morons-blb", {formats: ["wav", "ogg", "mp3"]});
         Aud_Intro = new buzz.sound("audio/Intro", {formats: ["wav", "ogg", "mp3"], preload: true});
         
         Aud_Nightmare = new buzz.sound("audio/JAPAN-3", {formats: ["wav", "ogg", "mp3"]});
         Aud_Explode = new buzz.sound("audio/explode", {formats: ["wav", "ogg", "mp3"],preload: true});
         Aud_End = new buzz.sound("audio/End", {formats: ["wav", "ogg", "mp3"],preload: true});
         Aud_Hit1_ = new buzz.sound("audio/daaaam-1", {formats: ["wav", "ogg", "mp3"]});
         Aud_Hit2_ = new buzz.sound("audio/daaaam-2", {formats: ["wav", "ogg", "mp3"]});
         Aud_Hit3_ = new buzz.sound("audio/daaaam-3", {formats: ["wav", "ogg", "mp3"]});
         
         Aud_BeamLoop = new buzz.sound("audio/beam-loop", {formats: ["wav", "ogg", "mp3"],
         	loop: true
         });
         
         Aud_Laser = new buzz.sound("audio/LASER", {formats: ["wav", "ogg", "mp3"]});
         
         //load them with Edge
         Aud_GameTrack.load();
         Aud_GameTrack_2.load();
         Aud_ScoresTrack.load();
         Aud_KeysTrack.load();
         Aud_MenuPreLoop.load();
         Aud_MenuLoop.load();
         Aud_Intro.load();
         Aud_Nightmare.load();
         Aud_Explode.load();
         Aud_End.load();
         Aud_Hit1_.load();
         Aud_Hit2_.load();
         Aud_Hit3_.load();
         
         //stop all currently playing "hits" for menu and anywhere else they trigger on button overs
         sym.stopHits = function(){
         	Aud_Hit1_.stop();
         	Aud_Hit2_.stop();
         	Aud_Hit3_.stop();
         }

      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "document", "keyup", function(sym, e) {
         //GAME KEYBOARD
         //add others acording to behavior for desired "SCENE"
         //example: if it is main menu then enable main menu keyboard functionality
         //if it is game then enable game keyboard functionality
         
         //GAME
         if(sym.SCENE == "game"){
         	//32 is SPACE
         	if (e.which == 32) {
         		//sym.mc_ray.hide();
         		//Aud_BeamLoop.stop();
         		sym.getComposition().getStage().key_onKeyUp();
         	}
         	//37 is LEFT
         	if (e.which == 37){
         		sym.bool_left = false;
         	}
         	//39 is RIGHT
         	if (e.which == 39){
         		sym.bool_right = false;
         	}
         	//stop movement and cancel anything queue -- prevents animation queue buildup
         	if(!sym.bool_left && !sym.bool_right){
         		sym.mc_ship.animate( {left: sym.mc_ship.position().left}, {duration: sym.playerSpeed, easing: "linear"} );
         		sym.mc_ship.finish();
         		sym.mc_ray.finish();
         		//force placement of ray back to ship's x...
         		sym.mc_ray.css({"position":"absolute", "top":sym.rayY + "px", "left":sym.mc_ship.position().left + "px"});
         	}
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         sym.stop();
         sym.SCENE = "menu";

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22073, function(sym, e) {
         Aud_End.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21523, function(sym, e) {
         sym.stop();
         sym.SCENE = "keys";
         
         //soundtrack
         Aud_KeysTrack.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21757, function(sym, e) {
         sym.SCENE = "scores";
         sym.stop();
         
         //sound
         Aud_ScoresTrack.play();
         
         //get and set record holder (player + score + funny little comment)
         var scr_plyrName = sym.getComposition().getStage().getName();
         var scr_plyrScore = sym.getComposition().getStage().getScore();
         
         //the funny comment
         var arr_scoreMsg = ["Such an excellent role model!", "It was a magnificent harvest!", "The harvest was great!", "It was a sight to see!", "Such excellence will not go unnoticed!"];
         var rand_scoreNum = Math.ceil(Math.random()*arr_scoreMsg.length)-1;
         var rand_msg = arr_scoreMsg[rand_scoreNum];
         //if it returns null then set it to one
         if(arr_scoreMsg[rand_scoreNum] == undefined){
         	rand_msg = arr_scoreMsg[0];
         }
         //create the message
         var msg_score = "The latest record holder is, " + scr_plyrName + ", who abducted, " + scr_plyrScore + " rabbits. " + rand_msg;
         //if player hasn't played yet, and there is nothing to show in getName or getScore...
         if(scr_plyrScore == undefined){
         	msg_score = "Nothing here, move along."
         }
         //set the message
         sym.$("txt_highscore").html(msg_score);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         //play sound
         Aud_Intro.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 32720, function(sym, e) {
         sym.stop();
         //
         // prepare the final input field
         var namefield = sym.$("txt_name")
         namefield.html("Name, plz: ");
         inputName = $('<input />').attr({'type':'text', 'value':'x', 'id':'plyr_winname'});//id must be unique
         inputName.appendTo(namefield);
         //

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Btn_OK}", "click", function(sym, e) {
         //get the value and send to localStorage
         var _score = sym.getComposition().getStage().score;
         var _name = plyr_winname.value;
         //
         sym.getComposition().getStage().setScore(_score);
         sym.getComposition().getStage().setName(_name);
         //stop the sound
         Aud_GameTrack_2.stop();
         //go to the "scores" scene
         sym.stop("scores");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 29809, function(sym, e) {
         Aud_GameTrack_2.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 31282, function(sym, e) {
         Aud_Hit1_.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Btn_OK_Scores}", "click", function(sym, e) {
         Aud_ScoresTrack.stop();//stop the scores soundtrack
         Aud_MenuLoop.play().fadeIn();//start the menu soundtrack again
         sym.stop("menu");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Btn_OK_ScoresCopy}", "click", function(sym, e) {
         Aud_KeysTrack.stop();//stop the keys soundtrack
         Aud_MenuLoop.play().fadeIn();//start the menu soundtrack again
         sym.stop("menu");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16250, function(sym, e) {
         //
         Aud_MenuPreLoop.play().fadeOut();
         //
         //Basic (not always reliable) check.
         //Instead of the bellow I recommend a more elaborate solution such as:
         //https://github.com/sebarmeli/JS-Redirection-Mobile-Site
         //http://detectmobilebrowsers.com/
         //or reffer to this thread: http://stackoverflow.com/questions/11381673/javascript-solution-to-detect-mobile-browser
         //For this case:
         //mobile users?
         sym.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
         //
         if (sym.isMobile) { 
         	//sym.stop();
         	window.alert("Sorry mobile, but this game is not yet compatible for touchscreen devices.");
         }else{
         	//you may pass
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18500, function(sym, e) {
         sym.getSymbol("Menu_Bunny_Poof").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17000, function(sym, e) {
         Aud_MenuLoop.play().fadeIn();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_IMG_Menu_PLAY}", "click", function(sym, e) {
         sym.play("game");
         Aud_MenuLoop.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_IMG_Menu_SCORES}", "click", function(sym, e) {
         sym.play("scores");
         Aud_MenuLoop.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_IMG_Menu_KEYS}", "click", function(sym, e) {
         sym.play("keys");
         Aud_MenuLoop.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_IMG_Menu_PLAY}", "mouseover", function(sym, e) {
         sym.stopHits();
         Aud_Hit1_.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_IMG_Menu_SCORES}", "mouseover", function(sym, e) {
         sym.stopHits();
         Aud_Hit2_.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_IMG_Menu_KEYS}", "mouseover", function(sym, e) {
         sym.stopHits();
         Aud_Hit3_.play();
         

      });
      //Edge binding end

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Beds'
   (function(symbolName) {   
   
   })("Beds");
   //Edge symbol end:'Beds'

   //=========================================================
   
   //Edge symbol: 'IMG_Sprite_Bed02'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1288, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("IMG_Sprite_Bed02");
   //Edge symbol end:'IMG_Sprite_Bed02'

   //=========================================================
   
   //Edge symbol: 'IMG_Sprite_Bed03'
   (function(symbolName) {   
   
   })("IMG_Sprite_Bed03");
   //Edge symbol end:'IMG_Sprite_Bed03'

   //=========================================================
   
   //Edge symbol: 'Transition_Blink'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1200, function(sym, e) {
         sym.stop("transition");

      });
      //Edge binding end

   })("Transition_Blink");
   //Edge symbol end:'Transition_Blink'

   //=========================================================
   
   //Edge symbol: 'Nightmare'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5686, function(sym, e) {
         sym.stop("start");

      });
      //Edge binding end

   })("Nightmare");
   //Edge symbol end:'Nightmare'

   //=========================================================
   
   //Edge symbol: 'Ship'
   (function(symbolName) {   
   
   })("Ship");
   //Edge symbol end:'Ship'

   //=========================================================
   
   //Edge symbol: 'Ray'
   (function(symbolName) {   
   
   })("Ray");
   //Edge symbol end:'Ray'

   //=========================================================
   
   //Edge symbol: 'Bunny'
   (function(symbolName) {   
   
   })("Bunny");
   //Edge symbol end:'Bunny'

   //=========================================================
   
   //Edge symbol: 'Enemy_Ship'
   (function(symbolName) {   
   
      

      

   })("Enemy_Ship");
   //Edge symbol end:'Enemy_Ship'

   //=========================================================
   
   //Edge symbol: 'Fire'
   (function(symbolName) {   
   
   })("Fire");
   //Edge symbol end:'Fire'

   //=========================================================
   
   //Edge symbol: 'Explode'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 543, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("Explode");
   //Edge symbol end:'Explode'

   //=========================================================
   
   //Edge symbol: 'Screen_End'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_btn_surrender}", "click", function(sym, e) {
         sym.getComposition().getStage().scorecall();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_overachieve}", "click", function(sym, e) {
         sym.getComposition().getStage().overachieve();

      });
      //Edge binding end

   })("Screen_End");
   //Edge symbol end:'Screen_End'

   //=========================================================
   
   //Edge symbol: 'Screen_Score'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // prepare input field
         var namefield = sym.$("txt_name")
         namefield.html("Name, plz: ");
         inputName = $('<input />').attr({'type':'text', 'value':'x', 'id':'plyr_name'});//id must be unique
         inputName.appendTo(namefield);

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_Btn_OK}", "click", function(sym, e) {
         //get the value and send to localStorage!
         var _score = sym.getComposition().getStage().score;
         var _name = plyr_name.value;
         //console.log("_score: "+_score);
         //console.log("_name: "+_name);
         sym.getComposition().getStage().setScore(_score);
         sym.getComposition().getStage().setName(_name);
         //go to the "scores" scene
         sym.getComposition().getStage().gotoScores();

      });
      //Edge binding end

   })("Screen_Score");
   //Edge symbol end:'Screen_Score'

   //=========================================================
   
   //Edge symbol: 'Btn_OK'
   (function(symbolName) {   
   
   })("Btn_OK");
   //Edge symbol end:'Btn_OK'

   //=========================================================
   
   //Edge symbol: 'Scores_Disguised'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 26, function(sym, e) {
         Aud_Nightmare.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1757, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_IMG_Scores_DisguisedBunny}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("Scores_Disguised");
   //Edge symbol end:'Scores_Disguised'

   //=========================================================
   
   //Edge symbol: 'Menu_Bunny_Poof'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 663, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("Menu_Bunny_Poof");
   //Edge symbol end:'Menu_Bunny_Poof'

   //=========================================================
   
   //Edge symbol: 'Logo'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         Aud_LogoMoron.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4700, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().play();

      });
      //Edge binding end

   })("Logo");
   //Edge symbol end:'Logo'

})(jQuery, AdobeEdge, "EDGE-8051110");