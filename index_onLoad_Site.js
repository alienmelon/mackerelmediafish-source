	
	/*
	from onLoad():
	
	num_vermDialogue -- dialogue count for Verm
	num_vermX -- the x cooridnate of Verm
	bool_site_fallingClicked -- if the first trailing link has been clicked, then fall by default without showing dialogue
	
	*/
	
	//DIALOGUE FOR WINDOWS...
	//opening dialogue
	var str_dialogue_01 = "As you finally enter the website you are greeted by a very old, very worn out page.<br>The digital tides have eroded most of it, and what was left has been long picked apart by virtual vermin.<br>You can hear digital scavengers chewing somewhere in the distance...<br><br>From the little that is left of this site, you can tell that this was once a vibrant and exciting corner of the internet.<br><br>Despite being so broken, this space has a mysterious allure to it. Almost as if there's more hiding here...<br>Better take on the role of an internet archeologist and see what you can find!<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Ok!</a></center><br><br><br>(P.S. Stay out of dark places! It can be hazardous.)";
	
	//OPENING PAGE NAVIGATION
	//list of sites
	var str_site_listofsites_01 = "You take a closer look at an old worn out hyperlink.<br><br>This one is supposedly pointing to a list of sites. The link looks far too worn out to safely lead anywhere, with large portions of it corroded by digital rust.<br><br>Virtual vermin must have been chewing on it. Would you like to...<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Visit it anyway</a><br><br><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_02'>Leave it alone</a></center>";
	var str_site_listofsites_02 = "As expected, whatever small amount of information that kept the hyperlink in place disintegrates before your eyes.<br><br>Its tiny bits of href information fall to the ground, perhaps to be consumed by the virtual void, perhaps to be food for the digital vermin scavenging this space.<br>Either way, it was too brittle for your cursor. Such are the hazards of digital archeology!<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Ok</a></center>";
	var str_gogofish_01 = "Strangely, this hyperlink seems newer?<br><br>It seems to have been among the last things posted in an update here, leading you to believe it was probably injected by an outside source.<br>Is this spam?<br>Who knows... Old sites can deteriorate in a number of ways.<br><br>The link looks strange. It's weirdly relevant to Fish technology. Perhaps it was even left here by one of the Fish.<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Follow Hyperlink</a><br><br><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_02'>One of the Fish?</a></center>";
	var str_gogofish_02 = "A yes... Those Fish. Those strange Fish floating around the murky corners of the internet. They are so illusive.<br><br>How are they still around? They should have been deprecated years ago, but still manage to evade being consumed by the virtual void.<br><br>...These fish are reminders of an older web.<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Follow Hyperlink</a><br><br><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_02'>Close</a></center>";
	var str_support_01_1 = "A small in-line link beckons you to visit the Support page... Support pages are always tricky, and never very safe. They tend to lead to <em>DARK</em> places.<br><br>This one looks like one of those. You can distinctly see what remains of its href information leading to a very dark very cold place. Possibly too dark for the likes of you!<br><br>Do you want to follow it? Shall you investigate further?<br>Is that even a good idea?<br>Such are the hazards of an internet archeologist!<br><br><br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>No! Leave it alone.</a><br><br><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_02'>Investigate further.</a></center>";
	var str_orderyourcopy_01 = "A hyperlink covered in digital dust invites you to 'Order your copy today'.<br><br>Whatever page it once pointed to is now long gone. You can see the broken chain linking to a glaring 404 page.<br><br>The loss of information heavily looms over this space.<br>As you lean in closer to further examine the broken inline link, it falls into ruin.<br>This morsel will serve as more food for the insatiable virtual vermin that couldn't reach it before.<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Visit 404</a><br><br><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_02'>Ok</a></center>";
	var str_electriczinemaker_01 = "You lean in to investigate a link boasting an exciting program for authoring zines.<br><br>It's called the Electric Zine Maker? What a delightful name!<br><br>The links still works too! Finally!<br><br>Perhaps you should visit and check it out sometime?<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Visit the Zine Maker website</a><br><br><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_02'>Ok</a></center>";
	var str_potatoware_01 = "You brush away the rust obscuring an old body of text talking about an affiliation with Electric Love Potatoes.<br><br>It comes as no surprise to you since Electric Love Potatoes are everywhere.<br>The old hyperlink looks like it still works and fully links to the Electric Love Potato website!<br><br>Strange... the text bellow this paragraph seems to have fallen off completely.<br>Was it virtual vermin? Or was it a coverup to something more sinister?<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Visit the potatoware website!</a><br><br><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_02'>Ok</a></center>";
	var str_bepartof_01 = "Whatever was holding the last piece of text on the opening page in place finally disintegrates. The hyperlink falls to the website floor to serve as food for the virtual vermin here.<br><br>Small pieces of text still hang bellow this last paragraph.<br>The wording below this is strange. Almost like a call for help?<br><br>The virtual vermin on this page seems hungry.<br><br>If you feed virtual vermin enough they are bound to give you something in return. Maybe that's worth trying?<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Ok</a>";
	var str_dropLastButtons_01 = "Hyperlinks left behind from long eroded paragraphs hang at the bottom of the page, just out of reach of the virtual vermin who may have otherwise eaten them.<br><br>The links allude to something that went terribly wrong a long time ago. What could have happened to warrant the word 'murdered' on a commercial website?<br>'help us' is clearly a call for help, but why?<br>It's slightly disturbing, but intriguing all the same.<br><br>If you feed virtual vermin enough information they are obligated to give you something in return. Maybe that's worth trying?<br>That vermin might be able to give you what you need in order to get to the bottom of this!<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Ok</a>";
	var str_pageCount_01 = "At the bottom of the websites sits what appears to be an old page count. This is a strange one since most of the pages have disappeared. The numbers seem wildly off...<br><br>You have a feeling that this is a goal of some kind?<br>There seems to be something that needs doing in order to progress in your journey. What exactly? You're not sure yet...<br><br>Perhaps you should ask the virtual vermin that is currently eating the site what this means. They could tell you things since they're the one that likely ate everything.<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Ok</a>";
	var str_goback_01 = "The 'Go Back...' link falls to the floor. It will serve as a fine morsel for the virtual vermin. Such is the bitter sweet lifecycle of a website.<br><br>Either way...<br>You are trapped here.<br>There is no going back, only going forward.<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Ok</a>";
	//////////
	//rss (News..) story
	var str_news_01 = "As you investigate the News link you uncover a long forgotten RSS feed.<br><br>The very last entry seems to be about a new affiliation with the potatoware network. It talks about Electric Love Potatoes and gives a small sales job about how amazing they are.<br><br><a href='http://potatoware.alienmelon.com/' target='_blank' class='btn_element'><img src='${resourcesFolderName}/IMG_BANNER02.gif' width = '400' alt=''></img></a><br><br>Behind this last entry lie a series of older, murkier, more difficult to decipher entries...<br>The further back into an RSS feed you go, the darker it can get. RSS spelunking is not for amateurs. It can be hazardous.<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Investigate Further</a><br><br><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_02'>Exit RSS Feed</a></center>";
	var str_news_02 = "You investigate the feed even further. The space before you gets darker. It's colder here. The warmer virtual tides cannot reach these deeper spaces.<br><br>Some older information seems to float just ahead. It indicates that this was once a very vibrant digital space, boasting an abundance of creative work with a thriving community. Sad how these spaces become abandoned.<br>Things change...<br>Attention shifts to other things...<br><br>There's a lot of talk about Fish here. Not just the many little Fish, but one big Fish. <em>THE</em> Fish? More information looks to be deeper in the feed, but it's so much darker down there.<br><br>It might be unsafe...<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Go deeper</a><br><br><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_02'>Exit RSS Feed</a></center>";
	var str_news_03 = "You travel deeper into the darker part of the feed. As you reach for a piece of information that seems to look promising part of the feed that you are standing on gives out.<br><br>You fall far, past what seems to be dozens of RSS entries describing how Fish went missing. Portions of community comments bemoaning the sudden disappearance of Fish, and some speculation as to where the Fish went...all zoom by.<br>You finally hit the ground. The floor is stable here, unfortunately it's just as dark. You can barely see anything.<br><br>You did learn a lot from the fall: Fish was once loved. One day Fish disappeared and nobody knows where it went. There are speculations that you might be able to find Fish if you look in the right places...Traces of where Fish may have gone hover ahead, in the darkest part of the feed. It's fearfully dark there. It seems very unsafe.<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Go into the dark</a><br><br><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_02'>Exit RSS Feed</a></center>";
	var str_news_04 = "As you enter the cold darkness you hear a growling sound circling you. It's not a virtual vermin, but something much larger... Much more malicious.<br><br>It breaths behind you, approaching. Your processes freeze as you are too afraid to move.<br>What feels like bony inhuman fingers press against your shoulder. Claws? Of What?<br><br>You are suddenly pulled into the dark...<br>Your useragent begins to redirect...<br><br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Cry for help!</a></center>";
	var str_news_exitRSS = "Stepping outside of the old RSS feed causes its only connecting link to give out and finally fall.<br>The word 'News' slowly drifts down to become food for the virtual vermin here.<br><br>You can no longer enter the old feed. Whatever information you might have found there is now lost to the virtual void.<br><br>Be more careful next time! Digital archeology is a sensitive undertaking...<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Ok</a></center>";
	//////////
	//About Us story
	var str_aboutus_01 = "Taking great care not to damage the About Us link, you lightly poke and prod it to see where it leads.<br><br>It seems to be perfectly in tact! This is not a surprise because nobody ever visits 'About Us' sections... this part of the site received the least traffic.<br><br>It's not as worn out as all the other sections of the site.<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Investigate About Us</a><br><br><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_02'>Close</a></center>";
	var str_aboutus_02 = "The text on the About Us page reads...<br><br>Welcome to the home of Mackerelmedia Fish! The dot-com boom is an exciting time for push-button technologies. We're thrilled to bring you our solution to the changing landscape of multimedia.<br>Mackerelmedia Fish enhances the web with Fish driven animation for your homepage...<br><br>The text trails off. It seems to have been scratched away. This doesn't look like the work of a virtual vermin... It looks like vandalism! The vandal wrote something...<br>Hmmm... Online vandalism can be a hazard...<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Investigate vandalism</a><br><br><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_02'>Leave it alone</a></center>";
	//the last state warning self-destruct (strings in three parts: body, countdown warning, and button
	var str_aboutus_03 = "<br><br>Fish is gone!<br><br>Fish has been murdered!<br><br>Kill the Fish! LONG LIVE FISH!<br><br><br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Take a step back!!</a>";
	var str_aboutus_warning = "THIS MESSAGE WILL SELF DESTRUCT IN... ";
	//you canceled the self-destruct sequence
	var str_aboutus_cancel = "The About Us page goes up in flames.<br><br>It was a self-destructing vandalism! How eery... These became illegal a long time ago because too many websites went up in flames. Rumors through the electric grapevine even tell stories of how this was the real reason Geocities died... Fascinating. You never thought you would experience this up close.<br>The vandal was careful. The rest of the site didn't catch fire.<br><br>The About Us page is no more. The link to it uselessly falls to the ground...<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Sorry :(</a>";
	//the gameover state (if you didn't heed the warning state)
	var str_aboutus_gameover = "In a blaze of glory, the vandalism self-destructs!<br>Unfortunately you were caught in that glorious blaze.<br>You start to go up in flames too...<br><br>Your useragent's protective measures kick in, and starts to redirect...<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Call for help!</a>";
	//////////
	//SWEET ESCAPE LINK
	var str_sweetescape_01 = "A mysterious link points to sweet ESCAPE.<br><br>You recognize where it is going. It has been part of the internet since the very early days. The only type of functionality that cannot be deprecated.<br>This is the ESCAPE all of us trapped in the virtual void crave. The one that points to a true purgatory of nothingness, where information can be as it is. Free of an index.html or all the other evolving technicalities that keep the world wide web bound to perpetual forward movement...<br><br>Yes... That place where you can see websites for how they are...<br>You have a feeling that you'll find your answers in ESCAPE...<br><br>Would you like to try?<br>Are you sure you are ready to leave?<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>I WANT TO BE FREE!</a><br><br><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_02'>Not yet...</a></center>";
	//////////
	//FISH DEMOS
	var str_fishdemos_01 = "As you lean into the demos page a copy of marketing lingo greets you.<br>It seems cheerful and completely unaware of how dated it is...<br><br>You have a feeling that you'll find what you're looking for in one of these demos.<br><br>Most of the games require keyboard input and will not work on mobile...<br>Except for one.<br>Sad :(<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Investigate marketing lingo</a><br><br><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_02'>Leave it alone</a></center>";
	var str_fishdemos_02 = "“Welcome to the Mackerelmedia demos page! Check out this unremarkable browser game built entirely in Fish, breach any system by giving <a href='http://haxatron.alienmelon.com/' target='_blank'>HAXATRON</a> a go, celebrate the new year with this adorable e-card, enjoy this happy pants dance, or have your mind blown by the classic arcade port of Offender entirely re-made in Fish!... The possibilities are endless!”<br><br>News: Our unremarkable browser game built in Fish is an FFNY finalist!<br><img src='${resourcesFolderName}/ffny-finalist.gif', alt=''><br><br><a href='#' class='inspectionMessageButton' id='btn_fishdemos01'>Visit e-card</a></center><br><br><a href='#' class='inspectionMessageButton' id='btn_fishdemos02'>Check out the pants dance</a></center><br><br><a href='#' class='inspectionMessageButton' id='btn_fishdemos03'>Try Haxatron 2000</a></center><br><br><a href='#' class='inspectionMessageButton' id='btn_fishdemos04'>Investigate the browser game</a></center><br><br><a href='#' class='inspectionMessageButton' id='btn_fishdemos05'>Have mind blown by Offender</a></center><br><br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Come back later...</a>";
	//////////
	//SAMPLES
	var str_samples_01 = "The samples page of a long lost and long abandoned technology is held lightly in place by a deteriorating link. The page is barely around anymore. The virtual tides have all but eroded the best samples. You might not even see much here.<br><br>You have a feeling that digging into this will completely destroy it... Either way, you will be the very last web surfer to see it if you choose to access the page.<br><br>The marketing copy on this page looks optimistic about the future of the world wide web as well as the place of Fish in it.<br>Would you like to...<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Access it anyway.</a><br><br><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_02'>Leave it alone...</a></center>";
	var str_samples_02 = "You follow the link to the Samples page. Accessing it finally destroys any link to it. This is it. You are truly the last person to ever visit this page.<br><br>Would you like to...<br><br><br><br><center><a href='#' class='inspectionMessageButton' id='btn_samplesPage_01'>Read marketing lingo</a><br><br><a href='#' class='inspectionMessageButton' id='btn_samplesPage_02'>Investigate the first sample</a><br><br><a href='#' class='inspectionMessageButton' id='btn_samplesPage_03'>Poke at the second sample</a><br><br><a href='#' class='inspectionMessageButton' id='btn_samplesPage_04'>Look at the third sample</a><br><br><a href='#' class='inspectionMessageButton' id='btn_samplesPage_05'>Scrutinize the fourth sample</a><br><br><a href='#' class='inspectionMessageButton' id='btn_samplesPage_06'>Scold the fifth sample</a><br><br><br><br><a href='#' class='inspectionMessageButton' id='btn_samplesPage_07'>Leave this page forever....</a></center>";
	var str_samples_marketing = "“Mackerelmedia Fish is an intuitive and easy to learn platform for bringing cutting edge animations and rich media experiences to the web. Your website will stand out from the crowd!<br>Not sure where to begin? No worries!<br>Our staff of talented coders, animators, and designers have assembled a variety of samples to help you get started.<br>These examples are but a few things you can achieve with Fish. Multimedia has never been easier!”<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Look at samples...</a></center>";
	var str_samples_investigateFirstPage = "<img src='http://mackerelmediafish.com/samples/GENERIC_ERROR.gif' width=400px height=266px alt='error 404'><br>Investigating the first page leads to a hopeless 404 page. It looks like an absolute catastrophe. Whatever happened here was nuclear!<br><br>Bits and bites of the page float about this virtual space, completely shattered beyond recognition.<br>The 8-bit folk inhabiting this area look on in perpetual shock.<br><br>Who would do such a thing?<br>Why would you delete such a perfectly good page?<br>Where else will they go now that they have no place to live?<br>WHY????<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Apologize and go back...</a></center>";
	var str_samples_pokeAtSecond = "<img src='http://mackerelmediafish.com/samples/ERROR_AAaaaH.gif' width=400px height=266px alt='error 404'><br>You lightly poke at the second sample and quickly learn that your intrusion causes the page to collapse into a wretched pile of 404 errors.<br><br>The 8-bit folk that chose this space as their home look on in shock. They are horrified.<br><br>They no longer have a home...<br>You did this!<br>Why?<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Sorry...</a></center>";
	var str_samples_lookAtThird = "<img src='http://mackerelmediafish.com/samples/ERROR_AH.gif' width=400px height=266px alt='error 404'><br>You very carefully look at the third sample page... This time you are much more cautious.<br><br>Unfortunately you where not cautious enough. The 8-bit folk inhabiting this space get a good jump scare from your intrusion and the page quickly collapses into a 404 error.<br><br>They seem to view you as the boogeyman...<br>You really scared them too!<br>That wasn't cool of you...<br><br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Apologize and leave...</a></center>";
	var str_samples_scrutinizeFourth = "<img src='http://mackerelmediafish.com/samples/HAPPYMUSIC.gif' width=400px height=266px alt='error 404'><br>You barge into the fourth sample page, ready to thoroughly scrutinize it!<br><br>An 8-bit inhabitant stands in a virtual wasteland, listening to an old .mp3 file.<br>He seems to be enjoying himself, seemingly never growing tired of listening to the same tune... over and over and over and over...<br><br>You look at the file's play history. It's been played back-to-back since the late 90's.<br>To him it's a good song.<br>Don't judge.<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Ok. Sorry.</a></center>";
	var str_samples_scoldFifth = "<img src='http://mackerelmediafish.com/samples/FISHSCIENTIST.gif' width=400px height=266px alt='error 404'><br>With an authoritative stride you confidently enter the last remaining sample page...<br> You are ready to scold whatever is here. Why? No reason. You don't need one.<br><br>The page looks surprisingly empty except for a Fish scientist, sitting behind some complicated looking 8-bit equipment, monitoring an empty aquarium.<br>He's caught on loop, looking for signs of fish...<br><br>Poor soul. Nobody told him.<br>Fish is no more. Nobody is working here anymore.<br>As the page starts to deteriorate, slowly consumed by 404 errors, you can't help but feel bad for him...<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Sorry :(</a></center>";
	/////////
	//ABOUT FISH (page consumed by void story -- cry for help)
	var str_aboutFish_01 = "You barely brush against the About Fish link and it gives out, falling away from the site. The connection to the About Fish page is slowly fading.<br><br>If you act quickly you might still be able to visit the page...<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Visit the page</a><br><br><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_02'>Leave it alone</center>";
	var str_aboutFish_01_warning = "This page will be lost to the void in...";
	//you canceled the self-destruct sequence (SUCCESS, THIS LEADS TO THE REST OF THE STORY)
	var str_aboutFish_01_cancel = "You successfully enter the page, following the dying hyperlink's glow to what is a long abandoned About Fish section.<br><br>The space is dark, and slowly growing dim. With no link to the rest of the web, visibility here is slowly deteriorating...<br><br>It's cold.<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Light a fire</a><br><br><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_02'>Go back...</center>";
	//the self-destruct state state (if you didn't heed the warning state)
	var str_aboutFish_01_gameover = "The last connection to About Fish is lost forever. You watch it fade into the virtual void like a dying light.<br><br>Whatever you might have found there is now completely inaccessible to you. Such is the internet... pages don't ever really disappear. Access to them is simply lost.<br><br>There is no way of knowing what you would have found there, but perhaps it is for the best.<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>I agree</a>"
	//rest of the story
	var str_aboutFish_02 = "You light a fire. You know it wont last but it will provide enough light for you to look around.<br><br>About Fish looks chewed to pieces by virtual vermin. You can't make out most of the information here. It almost looks like a very large vermin made this its home for a while.<br>Judging by the scratches on the walls it looks like a pretty big one!<br>You feel certain that it's not around, and since the page's connection has been severed, nothing can enter this space again.<br><br>There's a small piece of information just up ahead.<br>Your light is slowly dimming...<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Investigate information</a><br><br><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_02'>Go back...</center>";
	var str_aboutFish_03 = "You approach the small piece of information. It's the only piece of text here that hasn't completely acquiesced to the cold jaws of the virtual void.<br><br>The text talks about how exciting of a technology Fish is. It looks ahead both hopeful and full of joy about the possibilities of the internet. It speaks of a better time when it was good to stand out, when personal websites where cool, social media wasn't king, and businesses where just finding a footing for what all this means... It trails off, promoting the works of long forgotten artists and web designers.<br><br>You sigh heavily.<br>What a find. This truly is a relic.<br><br>Your light continues to dim...<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Investigate information more</a><br><br><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_02'>Go back...</center>";
	var str_aboutFish_04 = "The piece of text doesn't say much more. Its optimism for the future is contagious.<br><br>You almost wish you could have seen the thriving creative community that surrounded these web philosophies. It's hard to believe that people actually payed for custom websites? That things looked so different? That different was even a good thing to be... The nostalgia here is thick enough to pocket.<br><br>Your light is just about gone...<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Pocket nostalgia</a><br><br><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_02'>Go back...</center>";
	var str_aboutFish_05 = "As you pocket the nostalgia, your light completely gives out. You stand in absolute darkness now... The cold slowly sets in.<br><br>With no source of warmth to light up this space, your surroundings start to freeze.<br><br>You should have known this would happen! This is how it's like to be lost to the virtual void!<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Cry for help!</a><br><br><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_02'>Go back!</center>";
	//branches
	var str_aboutFish_cry_01 = "Your cries remain unanswered.<br><br>Nevertheless, you know that help is the <em>only</em> way to escape the void.<br><br>The void wishes to consume you...<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Cry for help!!!!</a><br><br><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_02'>Go back!?</center>";
	var str_aboutFish_stumble_01 = "You stumble around in the dark. Desperately trying to escape the impending freeze that is overtaking this space.<br><br>Where did you enter? Where is the exit? Without any source of light, navigating is impossible.<br>You recognize some small details from when you entered, but the void is quickly consuming it.<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Cry for help!</a><br><br><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_02'>Follow landmarks...</center>";
	var str_aboutFish_landmarks_LOSE = "You try to push past the icy grip of the virtual void. It's so cold here. The darkness is a pronounced presence now. It's wretched. You don't want to be trapped here.<br><br>Something cold grips you. You stepped on it, stumbling about the dark.<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Give up</a>";
	var str_aboutFish_cry_WIN = "Your useragent makes a successful connection. Your cries are heard!<br><br>Your http request grants you permission to return to index.html.<br><br>You are quickly pulled out of the dark just as the virtual void completely consumes the space you where occupying.<br><br>Wow, that was a close call!<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Yay!</a>";
	var str_aboutFish_LOSE = "The virtual void slowly consumes you.<br>You cannot move. You cannot scream.<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Oh no :(</a>";
	/////////
	//INFO
	var str_info_01 = "<br><br><center>“The information you are looking for has been moved. Don't come looking for it. Don't call the cops. We will <em>KNOW!</em>”</center><br><br>Ok, you definitely don't have time for <em>this</em> drama. The link falls the the ground anyway, so there's no point in meddling further.<br><br>This is a case best left to the authorities, and not for a fine internet archeologist such as yourself.<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Investigate anyway...</a><br><br><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_02'>Thank you!</a></center>";
	/////////
	//SUPPORT
	var str_support_01 = "<center>“There is no support!<br>There is no help!<br>Save yourselves!<br>Help is not coming!!!<br><br>P.S. Yes, the survivors have ESCAPED. If you are looking for us. Don't. We're fine.”</center><br><img src='${resourcesFolderName}/IMG_SITE_INFO_BLOOD.gif' height='300px' alt='help'><br><br>The support page is long gone. Whoever wrote this, did so in a hurry. Streaks of bloody handprints lead to sweet ESCAPE. Wow, that's dramatic!<br><br>Somehow you lose the support link in the process. This message was very unstable...<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Sorry...</a>";
	
	/////////
	
	//////////
	//ITEMS
	var str_item_key = "<img src='${resourcesFolderName}/IMG_SITE_KEY.png' alt=''> You got the secret password!<br><br>It is: goldfishy<br><br>...But what could something this old possibly unlock?<br><br><center><a href='#' class='inspectionMessageButton' id='btn_itemMessage'>Yay</a>";
	var str_item_name = "<img src='${resourcesFolderName}/IMG_SITE_NAME.png' alt=''> You got the special name!<br><br>It is: gogopowerfishy<br><br>You can use this to escape the website.<br>You just need to find the password... but who could possibly have it?<br><br><center><a href='#' class='inspectionMessageButton' id='btn_itemMessage'>Yay</a>";
	
	//other strings
	//appended at the end of the site goal button (1 of NN)
	//var str_siteGoal_btn = "<br><br><center><a href='#' class='inspectionMessageButton' id='btn_siteGoal_close'>Ok</a>";
	/*
	<br><br>
<center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>INLINE OPTION 1</a>
<br><br>
<a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_02'>INLINE OPTION 1</a></center>
	*/
	
	//dialogue arrays
	//introductory dialogue for clicking on the first time
	var arr_vermOpeningDialogue = ["Hey! Name's Verm. I'm the virtual vermin eating this website!", "Yep! I eat all the information that falls from this site. It tastes SO GOOoOOoOooOD!!!", "Sometimes I can jump high enough to grab the tasty bits, but lately I've not been able to reach the rest. It's just too high up :(...<br>I'm so HUNGRYYYYYY!! D:", "Heya...Uh...So here's the deal... Can you do me a favor? Please! There's a reward in it for you.<br>Can you please knock down what's left of this site so I can eat it. I'm famished! I may die! I can feel the cold grip of the virtual void approaching! It will surely take me if I don't eat something soon... This hunger is no joke!", "We virtual vermin digest bits and bites very fast. A garbage collector's metabolism is HIGH. Gotta keep eating!", "Yes, ok... Of course. In return for your trouble I'll give you some information. It's good information! It will help you on your quest to find whatever it is you're looking for!"];
	//looping end dialogue (when clicking on again)
	var arr_vermLoopingDialogue = ["Please give me more information! More links! More text! More of ANYTHING please. I'm still hungry!", "I'm still hungry! I need to be fed more before you get anything from me.", "My processes are getting foggy. I need food. Please help! FEED ME THOSE LINKS!", "Please feed me those tasty links. I'm so hungry. I promise to give you something in return if you do.", "Those tasty morsels of text and hyperlinks and images... Yes... Give them all to me please. I am famished!", "I'm so hungry :( I need those links if you're going to get anything from me D: I promise it will be worth your while.", "I promise that if you give me those last links it will be worth your while! Please feed me those last bits. I'm so hungry!", "Pease feed me those last hyperlinks! I'm so huuuUUUuUUUngry!!!! I promise it will be worth your while, yes!", "Yep, yep! I'm still hungry. If you feed me those last morsels of information, I promise to give you something in return. I just need to be full!", "All I want is to be full! If you help feed me then I'll give you something in return too. I promise!"];
	var str_vermWinDialogue = "Phew!<br>That was SOOOoOOOooOOoo GOOD! I am STUFFED!<br>Oh yes, of course, If you feed Verm enough then Verm gives something in return! Please take this password. It's a very old password. I gathered it here a LooOOooOoong time ago. Maybe you'll know what it unlocks!";
	
	//the "story" pop up (shared) + all containing elements
	var site_popUpStory = hypeDocument.getElementById("site_popUpStory");//the full pop up element (with background)
	var txt_story_message = hypeDocument.getElementById("txt_story_message");//the text field in the pop up (the story message)
	
	//the VERM pop up (dialogue)
	site_popUpVerm1 = hypeDocument.getElementById("site_popUpVerm1");//the full pop up graphic
	txt_story_verm1 = hypeDocument.getElementById("txt_story_verm1");//the nested text field inside of pop up
		
	//the GOLDFISHY pop up (dialogue)
	site_popUpGoldfishy = hypeDocument.getElementById("site_popUpGoldfishy");//the full pop up graphic
	txt_story_goldfishy = hypeDocument.getElementById("txt_story_goldfishy");//the nested text field inside of pop up
	
	//item message ("you found the key!")
	var site_popUpItem = hypeDocument.getElementById("site_popUpItem");//the full pop up graphic
	var txt_popUpItem = hypeDocument.getElementById("txt_popUpItem");//the text field nested inside popup

		
	//OPENING PAGE elements (buttons in text...)
	var btn_site_listofSites = hypeDocument.getElementById("btn_site_listofSites");//"checkout this LIST OF SITES..."
	var btn_site_gogofishredux = hypeDocument.getElementById("btn_site_gogofishredux");//"GOGOFISH REDUX!"
	var btn_site_support1 = hypeDocument.getElementById("btn_site_support1");//first inline support link
	//second paragraph
	var btn_site_orderyourcopy = hypeDocument.getElementById("btn_site_orderyourcopy");//"order your copy today!" in the second paragraph
	//third paragraph
	var btn_site_electriczinemaker1 = hypeDocument.getElementById("btn_site_electriczinemaker1");//electric zine maker" in the third paragraph talking about what it was made in
	//fourth (last) paragraph
	var btn_site_potatoware1 = hypeDocument.getElementById("btn_site_potatoware1");//inline potatoware link
	var btn_site_bepartof = hypeDocument.getElementById("btn_site_bepartof");//the last link ("be part of...") that trails off
	
	//page count (SCORE)
	var btn_site_goal = hypeDocument.getElementById("btn_site_goal");//the NUMBER of NUMBER score at the bottom of the page (refreshes)
	
	//buttons at the bottom of the page (trailing buttons to feed to the vermin)
	var btn_site_falling_downloadFishToday = hypeDocument.getElementById("btn_site_falling_downloadFishToday");
	var btn_site_falling_onlinenow = hypeDocument.getElementById("btn_site_falling_onlinenow");
	var btn_site_falling_fish = hypeDocument.getElementById("btn_site_falling_fish");
	var btn_site_falling_goesonlinewith = hypeDocument.getElementById("btn_site_falling_goesonlinewith");
	var btn_site_falling_missing = hypeDocument.getElementById("btn_site_falling_missing");
	var btn_site_falling_helpus = hypeDocument.getElementById("btn_site_falling_helpus");
	var btn_site_falling_murdered = hypeDocument.getElementById("btn_site_falling_murdered");
	var btn_site_falling_pleasehelp = hypeDocument.getElementById("btn_site_falling_pleasehelp");
	
	//////MENU (SIDEBAR) HERE/////
	//buttons in the MENU area of the site (SIDE BAR)
	var btn_siteMenu_goback = hypeDocument.getElementById("btn_siteMenu_goback"); //Go Back... at the top left. no turning back now...
	var btn_siteMenu_news = hypeDocument.getElementById("btn_siteMenu_news"); //News at the top of the main menu area. Opens the spelunking story
	var btn_siteMenu_sweetescape = hypeDocument.getElementById("btn_siteMenu_sweetescape"); //ESCAPE site link (sweet escape)
	var btn_siteMenu_fishdemos = hypeDocument.getElementById("btn_siteMenu_fishdemos"); //the FISH DEMOS page
	var btn_siteMenu_samples = hypeDocument.getElementById("btn_siteMenu_samples"); //SAMPLES page (falls if you investigate it)
	var btn_siteMenu_aboutFish = hypeDocument.getElementById("btn_siteMenu_aboutFish"); //ABOUT FISH pate
	var btn_siteMenu_info = hypeDocument.getElementById("btn_siteMenu_info"); //the small "info" at the bottom of the side-bar
	var btn_siteMenu_support = hypeDocument.getElementById("btn_siteMenu_support"); //the small "support" button in the side-bar
	
	//the VERMINE character
	div_site_vermin = hypeDocument.getElementById("div_site_vermin");
	//the GROUND to colide against (check colision of food with ground)
	//div_site_ground = hypeDocument.getElementById("div_site_ground");
	//animation states within div_site_vermin
	verm_idle = hypeDocument.getElementById("verm_idle");
	verm_eating = hypeDocument.getElementById("verm_eating");
	verm_running_left = hypeDocument.getElementById("verm_running_left");
	verm_running_right = hypeDocument.getElementById("verm_running_right");
	
	//food that gets thrown down to the VERMINE character
	food_listofsites = hypeDocument.getElementById("food_listofsites");
	food_orderyourcopy = hypeDocument.getElementById("food_orderyourcopy");
	food_bepartof = hypeDocument.getElementById("food_bepartof");
	food_downloadfishtoday = hypeDocument.getElementById("food_downloadfishtoday");
	food_onlinenow = hypeDocument.getElementById("food_onlinenow");
	food_fish = hypeDocument.getElementById("food_fish");
	food_goesonlinewith = hypeDocument.getElementById("food_goesonlinewith");
	food_missing = hypeDocument.getElementById("food_missing");
	food_helpus = hypeDocument.getElementById("food_helpus");
	food_murdered = hypeDocument.getElementById("food_murdered");
	food_pleasehelp = hypeDocument.getElementById("food_pleasehelp");
	food_goback = hypeDocument.getElementById("food_goback");
	food_news = hypeDocument.getElementById("food_news");
	food_aboutus = hypeDocument.getElementById("food_aboutus");
	food_samplesDot = hypeDocument.getElementById("food_samplesDot");
	food_samples = hypeDocument.getElementById("food_samples");
	food_aboutfish = hypeDocument.getElementById("food_aboutfish");
	food_aboutfishDot = hypeDocument.getElementById("food_aboutfishDot");
	food_info = hypeDocument.getElementById("food_info");
	food_support = hypeDocument.getElementById("food_support");
	food_support1 = hypeDocument.getElementById("food_support");
	
	//loop through to check colision with VERM (if food reached VIRM then hide and eat and increment food score)
	arr_foodColiders = [food_support1, food_support, food_info, food_aboutfishDot, food_aboutfish, food_samplesDot, food_samples, food_listofsites, food_orderyourcopy, food_bepartof, food_downloadfishtoday, food_onlinenow, food_fish, food_goesonlinewith, food_missing, food_helpus, food_murdered, food_pleasehelp, food_goback, food_news, food_aboutus];
	
	//VERM vars
	var bool_vernShouldMove = false;
	var num_verm_targetLocation;//target x
	var str_verm_direction;//string = "left" "right"
	var div_currentFoodTarget;//the targeted div to eat
	var num_totalFood = arr_foodColiders.length-1; //all the food that is available on the site (not the same as goal)
	var num_collectedFood = 0;//0; //the current amount of food that has been fed to Verm
	var num_siteGoal = 12; //the total goal (less than totalFood atm)
	var bool_allFoodCollected = false;
	
	//GAMEOVER STATE (self destructive text, corosive areas...)
	var str_gameoverlink = "http://mackerelmediafish.com/404_doom.html";
	var num_gameoverMax = 40; //the default value to reset to (if you canceled it in time)
	var num_gameoverCount = num_gameoverMax;
	var bool_gameOverStateIsOn = false;//the gameover state is active and the counter should run. this is set in individual buttons.
	var str_self_destruct_message = "";//opens the story window to show the "gameover" self destruct message
	var str_selfDestructWarning_message = ""; //the warning that shows (update counter)
	var funcDestructCall = null;//called for gameover (pass custom things)
	//var funcCancelSelfDestructAction = null;//the function call to make
	//var str_selfDestructWarningAction = ""; //the action (button)
	
	//GOLDFISHY vars
	var bool_goldfishy_win = false;//false; //the fish mission is not yet complete (check on friend)
	var num_fishDialogue = 0;
	var str_fishDialogueType = "default"; //default, win, waiting, winloop (default = intro, this goes to waiting after runthrough, win = thank you, here's the directory, waiting = go check on my friend please loop, winloop = "I hope you find what you are looking for!...+key window)
	
	//GOLDFISHY DIALOGUE
	//opening default / intro
	var arr_goldfishyDialogue_default = ["Are you looking for <em>THE</em> Fish? Not just any Fish, but THE one and only? You're in a pickle then because...<br><br>Fish ESCAPED this site a long time ago!<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionFishy_01'>I knew it!</a>", "I know because I was there. I watched <em>THE</em> Fish leave!<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionFishy_01'>I believe you...</a>", "That was in the old days too.<br>A long time ago.<br><br>You might not even find <em>The</em> Fish anymore, even if you do manage to get to ESCAPE.<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionFishy_01'>I need to hope...</a>", "AH yes...<br><br>Sweet ESCAPE leads to a locked directory.<br>You need the key and correct name tho...<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionFishy_01'>Who has the name?</a>", "I have the name!<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionFishy_01'>Yay!</a>", "Do you want it?<br><br>If you are looking for <em>THE</em> Fish that I think you're looking for, then you'll need it.<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionFishy_01'>Yes, please give it to me.</a>", "Well...<br><br>If you want it from me, you have to first check if my Birdy friend is OK.<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionFishy_01'>What are the deets?</a>", "I'm worried about my friend, Birdy. They got stuck flopping around for all of eternity because they signed up to be a sprite in this really bad browser game... I mean, good lord it is BAD. Lamest game EVER.<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionFishy_01'>That sounds awful. I am so sorry.</a>", "I have already searched the 'Samples' page and haven't found them. I just restored the 'Demos' page. Can you go look there? They must be somewhere in that space...<br><br>Please go check on them and come back to let me know how they are doing...<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionFishy_01'>I will help you, goldfishy!</a>"];
	var str_goldfishyDialogue_waiting = "Have you found my Birdy? No??? Please go find them! I checked most of the pages except for one... Please, I need to know. Until then you're not getting any information from me!<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionFishy_01'>I'm still looking, goldfishy!</a>";
	var arr_goldfishyDialogue_win = ["How is it looking? Did you find my Birdy?? IS BIRDY OK?????<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionFishy_01'>Birdy is fine</a>", "Oh! Oh my... Oh I'm so relieved to hear that. It has been a long time since I got an update from them.<br>Ok, as par our agreement, I'll give you the secret name... If you want the other half then you'll have to talk to the Vermin...<br>Here's the special word that you need to escape...<br><br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionFishy_01'>Give it to me!!</a>"];
	var str_goldfishyDialogue_winloop = "Hey...<br><br>Thanks again for helping me.<br>I sure hope you find whatever it is that you are looking for...<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionFishy_01'>Thank you, Goldfishy. So do I.</a>";
	
	//COLLISION
	collision_ground = hypeDocument.getElementById("collision_ground");
	//WHEN AN ELEMENT HITS THE GROUND, TOGGLE TRUE, AND PUSH THAT ELEMNET TO AN ARRAY, THEN HAVE GERB BE ATTRACTED TO IT AND EAT IT
	//GERB KEEPS EATING, FOR A COUNTER, AND THEN GOES TO ANOTHER ELEMENT, AND IF ELEMENT IS LAST ONE IT RESETS AND PLAYS IDLE ANIMATION
	//OR RUNS BACK AND FORTH
	
	//open a URL that's a "gamevoer event"
	function openGameOverURL(strURL){
		hideObject(site_popUpStory);
		openNewWindow(strURL);
		//gotoURL(strURL);
	}

	
	//shared: open's the story pop up to describe a link
	//some are two button options (yes, nevermind...)
	//some are single button options
	
	site_openStory = function(txt_message, eventFunction1, eventFunction2){
		
		//populate...
		
		showObject(site_popUpStory);
		setText(txt_story_message, txt_message);
		
		//reset any gameover counter
		if(!bool_gameOverStateIsOn){
			num_gameoverCount = num_gameoverMax;
		}
		//
		
		//assign AFTER populating the text file
		var btn_inspectionMessage_01 = hypeDocument.getElementById("btn_inspectionMessage_01");//the FIRST OK button
		var btn_inspectionMessage_02 = hypeDocument.getElementById("btn_inspectionMessage_02");//the SECOND OK button
		
		//clear events (if buttons exist in the text field)
		if(btn_inspectionMessage_01 != null){
			btn_inspectionMessage_01.onclick = null;
		}
		if(btn_inspectionMessage_02 != null){
			btn_inspectionMessage_02.onclick = null;
		}
		
		//event listeners...
		//single
		if(btn_inspectionMessage_01 != null){
			//console.log("first button assigned");
			btn_inspectionMessage_01.onclick = function() {
				eventFunction1();
			}
		}
		//double
		if(btn_inspectionMessage_02 != null){
			//console.log("second button assigned");
			btn_inspectionMessage_02.onclick = function() {
				eventFunction2();
			}
		}
	
	}
	
	//things on a timer go here
	site_intervalCall = function(){
		//move verm and handle verm state:
		move_verm();
		
		//self destructing messages (counter here)
		self_destructText();
	}
	
	/*
	gameover state that counts down
	(self destructive text, or spaces that are unsafe)
	when counter reaches 0, forward to the appropriate URL
	*/
	self_destructText = function(){
		//
		if(bool_gameOverStateIsOn){
			num_gameoverCount -= 1;
			//countdown message text
			var strMessage = str_selfDestructWarning_message + String(num_gameoverCount);
			setText(txt_story_counter, strMessage);
		}
		//self destruct message is on now!
		//this is the self destruct state
		if(num_gameoverCount <= 0 && bool_gameOverStateIsOn){
			bool_gameOverStateIsOn = false;//stop it
			playSound("AUD_ESSAY03_ERROR_OS_01.mp3");
			hideObject(txt_story_counter);
			funcDestructCall();
			//open message (if you get a link)
			if(str_gameoverlink != "nolink"){
				site_openStory(str_self_destruct_message, function(){ openGameOverURL(str_gameoverlink) });
			}
		}
	}
	
	//initiate self destructive gameover state
	function startSelfDestruct(strStory, strGameOverMessage, strWarning, funcCancelAction, funcDestructAction, strLink){
		//reset
		num_gameoverCount = num_gameoverMax;
		bool_gameOverStateIsOn = true;
		showObject(txt_story_counter);
		//set the main body of text (story describing that a hazard has been triggered)
		site_openStory(strStory, funcCancelAction, funcDestructAction);
		//reset in case a unique one is set
		str_gameoverlink = strLink;//"http://mackerelmediafish.com/404_doom.html";
		str_self_destruct_message = strGameOverMessage;
		str_selfDestructWarning_message = strWarning;
		funcDestructCall = funcDestructAction;
		//funcCancelSelfDestructAction = funcCancelAction;
		//str_selfDestructWarningAction = str_ActionButton;
	}
	
	function stopSelfDestruct(){
		num_gameoverCount = num_gameoverMax;
		bool_gameOverStateIsOn = false;
		hideObject(txt_story_counter);
	}
	
	function aboutUsDestructAction(){
		event_aboutUsStory_destructCancel();
		
	}
	/*
	goldfish dialogue
	check if state is win
	if not complain that you have to check in on friend
	if you did check in on friend (and answered how they are doing)
	then fish gives you name -- name pop up is default from now on
	*/
	//DIALOGUE FOR THE GOLDFISHY
	goldfishDialogue = function(){
		
		
		showObject(site_popUpGoldfishy);
		playSound(randArray(arr_snd_goldfishy));
		
		if(str_fishDialogueType == "default" && !bool_goldfishy_win){
			//
			setText(txt_story_goldfishy, arr_goldfishyDialogue_default[num_fishDialogue]);
			//check to restore the demo's link (show object)
			if(num_fishDialogue >= arr_goldfishyDialogue_default.length-1){
				showObject(btn_siteMenu_fishdemos);
			}
			//if greater than (you agreed to help) CLOSE
			//set string to "waiting"
			//resume on re-visit
			if(num_fishDialogue >= arr_goldfishyDialogue_default.length){
				//reset...
				num_fishDialogue = 0;
				//switch to waiting dialogue
				str_fishDialogueType = "waiting"
				//hide now...
				hideObject(site_popUpGoldfishy);
			}
			//
		}
		
		if(str_fishDialogueType == "waiting" && !bool_goldfishy_win){
			//
			setText(txt_story_goldfishy, str_goldfishyDialogue_waiting);
		}
		
		//if WIN and greater than... (default WIN comment after coming back)
		if(str_fishDialogueType == "winloop"){
			setText(txt_story_goldfishy, str_goldfishyDialogue_winloop);
		}
		
		//default win dialogue
		if((str_fishDialogueType == "win" || bool_goldfishy_win) && str_fishDialogueType!= "winloop"){
			//set to win dialogue & reset
			if(str_fishDialogueType != "win"){
				str_fishDialogueType = "win"
				num_fishDialogue = 0;
			}
			//
			setText(txt_story_goldfishy, arr_goldfishyDialogue_win[num_fishDialogue]);
			//if greater than...set default key string
			if(num_fishDialogue >= arr_goldfishyDialogue_win.length){
				showGoldfishyName();
				hideObject(site_popUpGoldfishy);
				str_fishDialogueType = "winloop";
				//default value...
				setText(txt_story_goldfishy, str_goldfishyDialogue_winloop);
			}
		}
		
		//INCREMENT AFTER DISPLAYING APPROPRIATE TEXT HERE:
		num_fishDialogue += 1;
		
		//events
		var btn_inspectionMessage_01 = hypeDocument.getElementById("btn_inspectionFishy_01");//the dialogue button
		
		if(btn_inspectionFishy_01 != null){
			//remove first
			btn_inspectionFishy_01.onclick = null;
			//
			btn_inspectionFishy_01.onclick = function(){
				if(str_fishDialogueType!= "waiting" && str_fishDialogueType!= "winloop"){
					//all other "page through" cases where you page through a dialogue and then close
					goldfishDialogue();
					//
				}else if(str_fishDialogueType == "winloop"){
					//close default WIN comment and show key again
					showGoldfishyName();
					hideObject(site_popUpGoldfishy);
					//
				}else{
					//hide if "waiting"
					hideObject(site_popUpGoldfishy);
				}
			}
		}
	
	}
	
	
	//show the NAME window from goldfishy (this is the win state)
	function showGoldfishyName(){
		//console.log("OPEN NAME");
		gainItem(str_item_name);
	}
	
	/*
	drop an item, set the target, push target to array
	verm choses last array target
	goes there, eats, clears last from array
	choses next
	step down until all is gone
	*/
	//THE VERMINE WALKING BACK AND FORTH AND EATING SITE PARTS
	move_verm = function(){
		
		/*
		DEBUG NOTE: COMMENT BACK IN ALLFOODISCOLLECTED CHECKS AND REFERENCES (WHEN EVERYTHING IS COLLECTED VERM SHOULD NOT EAT ANYMORE)
		*/
		
		//manage food
		//WIN STATE: VERM (call only once)
		if(num_collectedFood >= num_siteGoal && !bool_allFoodCollected){			//TRIGGER WIN DIALOGUE
			bool_allFoodCollected = true;
			bool_vernShouldMove = false;//reset this AFTER win dialuge
			vermDialogue();
			//
		}
		
		//first run & idle handling...
		if(!bool_vernShouldMove){
			//setup the coords
			//parseInt(div_site_vermin.style.left);
			num_vermX = returnX(div_site_vermin);
			set_verm_idle();
		}
		
		//arr_foodColiders
		//div_site_ground
		for(var i = 0; i < arr_foodColiders.length; ++i){
			//check if it fell		
			if(hitTest(arr_foodColiders[i], collision_ground) && !bool_vernShouldMove){// && !bool_allFoodCollected){
			
				num_verm_move_countdown = 200;
				div_currentFoodTarget = arr_foodColiders[i];
				num_verm_targetLocation = Math.ceil(returnX(arr_foodColiders[i]));
				bool_vernShouldMove = true; //this is reset after eating (set to false again, so it can trigger again if there are multiple on the ground)
				//console.log("food fell to the ground. setup target and go there " + div_currentFoodTarget);
				//reset physics once a colision has occured
				//NO: NEVER DO THIS: event_physics_static(div_currentFoodTarget);
				
				//remove current target from array so that Virm doesn't run through all targets when browser window re-sizes
				//only go there once, and then remove any reference to it
				arr_foodColiders.splice(i, 1);
				
			}
		
		}
		
		if(bool_vernShouldMove){// && !bool_allFoodCollected){
			
			//set animation
			if(returnX(div_site_vermin) > num_verm_targetLocation){
				set_verm_move("left");
				str_verm_direction = "left";
				num_vermX -= num_vermSpeed;
				//move
				setX(div_site_vermin, num_vermX);
				//console.log("left");
			}else{
				set_verm_move("right");
				str_verm_direction = "right"
				num_vermX += num_vermSpeed;
				//move
				setX(div_site_vermin, num_vermX);
				//console.log("right");
			}
			
			//got there, remove food elements, hide, reset physics
			if(hitTest(div_site_vermin, div_currentFoodTarget)){
				//console.log("arrived, stop");
				bool_vernShouldMove = false;
				//remove food element
				collectFood();
			}

		}
		
		/*if(bool_allFoodCollected){
			bool_vernShouldMove = false;
		}*/
			
	}
	
	//set the score field (bottom page count but score)
	setSiteScore = function(){
		//setup the score / goal at the bottom of the page
		var str_score = String(num_collectedFood) + " of " + String(num_totalFood);
		setText(btn_site_goal, str_score);
	}
	
	//successfully got a food, increase score and handle food sprite
	collectFood = function(){
		num_collectedFood += 1;
		//remove food element
		hideObject(div_currentFoodTarget);
		event_physics_reset(div_currentFoodTarget);
		setY(div_currentFoodTarget, -100);
		setSiteScore();
		//play sound
		playSound(randArray(arr_snd_eat));
	}
	
	
	
	set_verm_idle = function(){
		showObject(verm_idle);
		//hide rest
		hideObject(verm_eating);
		hideObject(verm_running_left);
		hideObject(verm_running_right);
	}
	
	set_verm_move = function(dir){
		//dir = directuion string
		//hide first
		hideObject(verm_idle);
		hideObject(verm_eating);
		hideObject(verm_running_left);
		hideObject(verm_running_right);
		//
		if(dir == "left"){
			showObject(verm_running_left);
		}else{
			//right
			showObject(verm_running_right);
		}
	}
	
	set_verm_eating = function(){
		showObject(verm_eating);
		//hide rest
		hideObject(verm_idle);
		hideObject(verm_running_left);
		hideObject(verm_running_right);
	}
	
	
	vermDialogue = function(){
		
		//vermDialogueSetUpText();
		//opening, middle, and end button texts
		var str_vermButtonStart = "<br><br><center><a href='#' class='inspectionMessageButton' id='btn_vermMessage'>Hi, Verm!</a>";
		var str_vermButtonBody = "<br><br><center><a href='#' class='inspectionMessageButton' id='btn_vermMessage'>Tell me more, Verm!</a>";
		var str_vermButtonEnding = "<br><br><center><a href='#' class='inspectionMessageButton' id='btn_vermMessage'>Will do, Verm...</a>";
		
		var str_vermButtonWin = "<br><br><center><a href='#' class='inspectionMessageButton' id='btn_vermMessage'>Thanks, Verm!</a>";
		
		showObject(site_popUpVerm1);
		
		//console.log("num_vermDialogue: " + num_vermDialogue);
		
		//opening dialogue (NOT a loop, page through)
		if(num_vermDialogue < arr_vermOpeningDialogue.length && !bool_allFoodCollected){
			//check to see what button to append...
			//opening
			if(num_vermDialogue == 0){
				setText(txt_story_verm1, arr_vermOpeningDialogue[num_vermDialogue] + str_vermButtonStart);
			}else if(num_vermDialogue < arr_vermOpeningDialogue.length-1){ //num_vermDialogue > 1 && 
				//
				setText(txt_story_verm1, arr_vermOpeningDialogue[num_vermDialogue] + str_vermButtonBody);
				//
			}else{ // (num_vermDialogue == arr_vermOpeningDialogue.length)
				//
				setText(txt_story_verm1, arr_vermOpeningDialogue[num_vermDialogue] + str_vermButtonEnding);
			}
		}else if(!bool_allFoodCollected){
			//ending dialogue loop (default)
		
			setText(txt_story_verm1, randArray(arr_vermLoopingDialogue) + str_vermButtonEnding);
		
		}
		
		//WIN: VERN
		if(bool_allFoodCollected){
			//WIN DIALOGUE HERE
			//
			
			setText(txt_story_verm1, str_vermWinDialogue + str_vermButtonWin);
						
			//bool_vernShouldMove
			//console.log("all food is collected");
			//Phew! THAT WAS SO GOOD I AM SO FULL! Thank you!!! Oh yes, of course, I promosed somehting in return. Please take this password. It's old. I gathered it here a LOOOooOOooOong time ago. Maybe you'll know what it unlocks!
			//Animation: tadatadaaaa! You got a password! But what could it unlock?
		}
			
		//button event
		var btn_vermMessage = hypeDocument.getElementById("btn_vermMessage");
			
		//on click for button...
		if(btn_vermMessage != null){
			//remove first
			//btn_vermMessage.onclick = null;
			//add again
			btn_vermMessage.onclick = function() {
				//check state here, if start then keep playing through, if end then close/hide
				//
				if(num_vermDialogue < arr_vermOpeningDialogue.length && !bool_allFoodCollected){
					//vermDialogueSetUpText();
					vermDialogue();//call self? is this a good idea?
				}else{
					
					//check if you WON and give the key (default from now on)
					if(bool_allFoodCollected){
						gainItem(str_item_key);
					}
					//end, hide
					hideObject(site_popUpVerm1);
					
				}
				playSound(randArray(arr_snd_verm));
			}
		}
		
		//set verm back to normal
		set_verm_idle();
		//increment at end
		num_vermDialogue += 1;
		
	}
	
	//EVENTS (from dialogue)
	
	//called for trailing links at the bottom of the page ('murdered, help us...')
	//checks if the message has already been shown. if it has then just the text should fall
	function event_fallingFoodEvent(buttonToHide, divToDrop){
		
		if(!bool_site_fallingClicked){
			//show message here
			site_openStory(str_dropLastButtons_01, function(){ hideObject(site_popUpStory) });
		}
		
		bool_site_fallingClicked = true; //set to true so the message doesn't show again
		
		event_physics_setDynamic(divToDrop);
		hideObject(buttonToHide);
	}
	
	//ITEMS
	
	//gained an item
	function gainItem(strMessage){
		playSound("minibyte_tada.mp3");//tada
		showObject(site_popUpItem);
		setText(txt_popUpItem, strMessage);
		//events
		var btn_itemMessage = hypeDocument.getElementById("btn_itemMessage");
		//
		if(btn_itemMessage != null){
			//remove first
			btn_itemMessage.onclick = null;
			//event
			btn_itemMessage.onclick = function(){
				playSound("AUD_CLICK03.mp3");
				hideObject(site_popUpItem);
				btn_itemMessage.onclick = null;
			}
		}
	}
	
	
	//BUTTONS
	
	
	//option to "open anyway" for the "list of sites" dialogue
	function btn_site_listofSites_open(){
	
		hideObject(btn_site_listofSites);
		site_openStory(str_site_listofsites_02, function(){ hideObject(site_popUpStory) });
		
		event_physics_setDynamic(food_listofsites);
		
		//PLAY 404 SOUND
	}
	//first interaction with GOGOFISH opening "One of the Fish?" question
	function btn_site_gogofish_oneofthefish(){
		site_openStory(str_gogofish_02, btn_site_gogofish_followhyperlink, function(){ hideObject(site_popUpStory) });
	}
	function btn_site_gogofish_followhyperlink(){
		hideObject(site_popUpStory);
		openNewWindow("https://alienmelon.itch.io/gogofish");
	}
	
	
	//events
	
	btn_site_listofSites.onclick = function(){
		site_openStory(str_site_listofsites_01, btn_site_listofSites_open, function(){ hideObject(site_popUpStory) });
	}
	
	btn_site_gogofishredux.onclick = function(){
		site_openStory(str_gogofish_01, btn_site_gogofish_followhyperlink, btn_site_gogofish_oneofthefish);
	}
	
	btn_site_support1.onclick = function(){
		site_openStory(str_support_01_1, function(){ hideObject(site_popUpStory) }, event_support1_1_visitAnyway);
	}
	
	btn_site_orderyourcopy.onclick = function(){
		event_physics_setDynamic(food_orderyourcopy);
		hideObject(btn_site_orderyourcopy);
		site_openStory(str_orderyourcopy_01, function(){ openNewWindow("http://mackerelmediafish.com/404_1.html") }, function(){ hideObject(site_popUpStory) });
	}
	
	btn_site_electriczinemaker1.onclick = function(){
		site_openStory(str_electriczinemaker_01, function(){ openNewWindow("http://unicornycopia.com/ezm/") }, function(){ hideObject(site_popUpStory) });
	}
	
	btn_site_potatoware1.onclick = function(){
		site_openStory(str_potatoware_01, function(){ openNewWindow("http://potatoware.alienmelon.com/") }, function(){ hideObject(site_popUpStory) });
	}
	
	btn_site_bepartof.onclick = function(){
		event_physics_setDynamic(food_bepartof);
		hideObject(btn_site_bepartof);
		site_openStory(str_bepartof_01, function(){ hideObject(site_popUpStory) });
	
	}
	
	//I AM HERE (added later)
	//first inline body support link (near goldfish)
	function event_support1_1_visitAnyway(){
		openGameOverURL("http://mackerelmediafish.com/404.html");
		hideObject(btn_site_support1);
		event_physics_setDynamic(food_support1);
	}
	
	//events for the falling food texts (the trailing buttons at the bottom of the page..."murder",etc...)
	btn_site_falling_downloadFishToday.onclick = function(){
		event_fallingFoodEvent(btn_site_falling_downloadFishToday, food_downloadfishtoday);
	}
	btn_site_falling_onlinenow.onclick = function(){
		event_fallingFoodEvent(btn_site_falling_onlinenow, food_onlinenow);
	}
	btn_site_falling_fish.onclick = function(){
		event_fallingFoodEvent(btn_site_falling_fish, food_fish);
	}
	btn_site_falling_goesonlinewith.onclick = function(){
		event_fallingFoodEvent(btn_site_falling_goesonlinewith, food_goesonlinewith);
	}
	btn_site_falling_missing.onclick = function(){
		event_fallingFoodEvent(btn_site_falling_missing, food_missing);
	}
	btn_site_falling_helpus.onclick = function(){
		event_fallingFoodEvent(btn_site_falling_helpus, food_helpus);
	}
	btn_site_falling_murdered.onclick = function(){
		event_fallingFoodEvent(btn_site_falling_murdered, food_murdered);
	}
	btn_site_falling_pleasehelp.onclick = function(){
		event_fallingFoodEvent(btn_site_falling_pleasehelp, food_pleasehelp);
	}
	
	//open the page count story window
	btn_site_goal.onclick = function(){
		site_openStory(str_pageCount_01, function(){ hideObject(site_popUpStory) });
	}
	
	//open "go back..." story window and hide the button (no turning back now)
	btn_siteMenu_goback.onclick = function(){
		event_physics_setDynamic(food_goback);
		hideObject(btn_siteMenu_goback);
		site_openStory(str_goback_01, function(){ hideObject(site_popUpStory) });
	}
	/////////////
	//NEWS EVENT
	//manage events for the NEWS story (spelunking sequence)
	function event_newsStory_exitFeed(){
		//when you exit the RSS feed the button falls as food for Verm
		event_physics_setDynamic(food_news);
		hideObject(btn_siteMenu_news);
		site_openStory(str_news_exitRSS, function(){ hideObject(site_popUpStory) });
	}
	function event_newsStory01(){
		site_openStory(str_news_02, event_newsStory02, event_newsStory_exitFeed);
	}
	function event_newsStory02(){
		site_openStory(str_news_03, event_newsStory03, event_newsStory_exitFeed);
		playSound("benito.mp3");
	}
	function event_newsStoryOpenGameOver(){
		openGameOverURL("http://mackerelmediafish.com/404.html");
	}
	function event_newsStory03(){
		hideObject(btn_siteMenu_news);
		site_openStory(str_news_04, event_newsStoryOpenGameOver);//function(){ openGameOverURL("http://mackerelmediafish.com/404.html") });
	}
	//the NEWS... story (spelunking)
	btn_siteMenu_news.onclick = function(){
		site_openStory(str_news_01, event_newsStory01, event_newsStory_exitFeed);
	}
	/////////////
	//ABOUT US EVENT
	//manage events for the About Us story (self-destruct graffiti)
	function event_aboutUsStory01(){
	
		site_openStory(str_aboutus_02, event_aboutUsStory_destructWarning, function(){ hideObject(site_popUpStory) });
		
	}
	function event_aboutUsStory_destructWarning(){
		
		//set link
		startSelfDestruct(str_aboutus_03, str_aboutus_gameover, str_aboutus_warning, event_aboutUsStory_destructCancel, event_aboutUsStory_destructSuccess, "http://mackerelmediafish.com/404_doom.html");
		
	}
	//blow up and knock down text
	function event_aboutUsStory_destructSuccess(){
		stopSelfDestruct();
		hideObject(btn_siteMenu_aboutus);
		event_physics_setDynamic(food_aboutus);
		playSound("bewm.mp3");
	}
	//blow up but don't show message
	function event_aboutUsStory_destructCancel(){
		//step back and cancel self destruction
		stopSelfDestruct();
		hideObject(btn_siteMenu_aboutus);
		event_physics_setDynamic(food_aboutus);
		site_openStory(str_aboutus_cancel, function(){ hideObject(site_popUpStory) });
		playSound("bewm.mp3");
	}
	//the ABOUT US story (self-destructive message)
	btn_siteMenu_aboutus.onclick = function(){
		//
		site_openStory(str_aboutus_01, event_aboutUsStory01, function(){ hideObject(site_popUpStory) });
		
	}
	/////////////
	//SWEET ESCAPE
	btn_siteMenu_sweetescape.onclick = function(){
		site_openStory(str_sweetescape_01, function(){ gotoURL("http://mackerelmediafish.com/sweetEscape/") }, function(){ hideObject(site_popUpStory) });
	}
	/////////////
	//FISH DEMOS (story and then items)
	function event_fishdemos_01(){
		//
		site_openStory(str_fishdemos_02, function(){ hideObject(site_popUpStory) });
		//string for closing out of iframe...
		var str_closeiframeBtn = "<br><br><center><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_01'>Go to link...</a><br><br><a href='#' class='inspectionMessageButton' id='btn_inspectionMessage_02'>Go back...</a></center>";
		//unique button events for iframe get assigned here...??
		var btn_fishdemos01 = hypeDocument.getElementById("btn_fishdemos01"); //Visit e-card
		var btn_fishdemos02 = hypeDocument.getElementById("btn_fishdemos02"); //Check out the pants dance
		var btn_fishdemos03 = hypeDocument.getElementById("btn_fishdemos03"); //Try Haxatron 2000   
		var btn_fishdemos04 = hypeDocument.getElementById("btn_fishdemos04"); //Investigate the browser game (SET BOOL HERE)
		var btn_fishdemos05 = hypeDocument.getElementById("btn_fishdemos05"); //Have mind blown by Offender
		//clear all first
		btn_fishdemos01.onclick = null;
		btn_fishdemos02.onclick = null;
		btn_fishdemos03.onclick = null;
		btn_fishdemos04.onclick = null;
		btn_fishdemos05.onclick = null;
		//setup
		btn_fishdemos01.onclick = function(){
			site_openStory("This looks like an e-card from the late 00's...<br><br>" + openiframe("http://mackerelmediafish.com/fishdemos/happynewyear/", "400", "266") + str_closeiframeBtn, function(){ openNewWindow("http://mackerelmediafish.com/fishdemos/happynewyear/") }, event_fishdemos_closeiframe);
		}
		btn_fishdemos02.onclick = function(){
			site_openStory("It looks like a silly web animation...<br><br>" + openiframe("http://mackerelmediafish.com/fishdemos/pantsdance/", "400", "266") + str_closeiframeBtn, function(){ openNewWindow("http://mackerelmediafish.com/fishdemos/pantsdance/") }, event_fishdemos_closeiframe);
		}
		btn_fishdemos03.onclick = function(){
			site_openStory("It looks like an old system infiltration tool...<br><br>" + openiframe("http://mackerelmediafish.com/fishdemos/haxatron/", "400", "266") + str_closeiframeBtn, function(){ openNewWindow("http://mackerelmediafish.com/fishdemos/haxatron/") }, event_fishdemos_closeiframe);
		}
		btn_fishdemos04.onclick = function(){
			bool_goldfishy_win = true;
			site_openStory("This browser game looks very bad. It's almost a torturous existence for the sprite trapped in it. You make a note of it...<br><br>" + openiframe("http://mackerelmediafish.com/fishdemos/birdy/", "400", "266") + str_closeiframeBtn, function(){ openNewWindow("http://mackerelmediafish.com/fishdemos/birdy/") }, event_fishdemos_closeiframe);
		}
		btn_fishdemos05.onclick = function(){
			site_openStory("Ah! An arcade classic remade entirely in Fish. What an achievement!<br><br>" + openiframe("http://mackerelmediafish.com/fishdemos/offender/", "400", "266") + str_closeiframeBtn, function(){ openNewWindow("http://mackerelmediafish.com/fishdemos/offender/") }, event_fishdemos_closeiframe);
		}
		
	}
	//close iframe and go back to previous text
	function event_fishdemos_closeiframe(){
		//closeiframe("_iframe");
		event_fishdemos_01();
	}
	//
	btn_siteMenu_fishdemos.onclick = function(){
		//
		site_openStory(str_fishdemos_01, event_fishdemos_01, function(){ hideObject(site_popUpStory) });
	}
	//////////////
	//SAMPLES
	// 
	//hide 
	
	
	
	function event_samplesStory_01(){
		//fall here (drop buttons finally and end access to it)
		event_physics_setDynamic(food_samplesDot);
		event_physics_setDynamic(food_samples);
		//hide it too...
		hideObject(btn_siteMenu_samples);
		//
		setText(txt_story_message, str_samples_02);
		//setup events for this
		//buttons here...
		var btn_samplesPage_01 = hypeDocument.getElementById("btn_samplesPage_01"); //Read marketing lingo
		var btn_samplesPage_02 = hypeDocument.getElementById("btn_samplesPage_02"); //Investigate the first sample
		var btn_samplesPage_03 = hypeDocument.getElementById("btn_samplesPage_03"); //Poke at the second sample
		var btn_samplesPage_04 = hypeDocument.getElementById("btn_samplesPage_04"); //Look at the third sample
		var btn_samplesPage_05 = hypeDocument.getElementById("btn_samplesPage_05"); //Scrutinize the fourth sample
		var btn_samplesPage_06 = hypeDocument.getElementById("btn_samplesPage_06"); //Scold the fifth sample
		var btn_samplesPage_07 = hypeDocument.getElementById("btn_samplesPage_07"); //Leave this page forever....
		//clear first
		btn_samplesPage_01.onclick = null;
		btn_samplesPage_02.onclick = null;
		btn_samplesPage_03.onclick = null;
		btn_samplesPage_04.onclick = null;
		btn_samplesPage_05.onclick = null;
		btn_samplesPage_06.onclick = null;
		btn_samplesPage_07.onclick = null;
		//listeners
		btn_samplesPage_01.onclick = function(){
			site_openStory(str_samples_marketing, event_samplesStory_01);
		}
		btn_samplesPage_02.onclick = function(){
			site_openStory(str_samples_investigateFirstPage, event_samplesStory_01);
		}
		btn_samplesPage_03.onclick = function(){
			site_openStory(str_samples_pokeAtSecond, event_samplesStory_01);
		}
		btn_samplesPage_04.onclick = function(){
			site_openStory(str_samples_lookAtThird, event_samplesStory_01);
		}
		btn_samplesPage_05.onclick = function(){
			site_openStory(str_samples_scrutinizeFourth, event_samplesStory_01);
		}
		btn_samplesPage_06.onclick = function(){
			site_openStory(str_samples_scoldFifth, event_samplesStory_01);
		}
		//leave forever
		btn_samplesPage_07.onclick = function(){
			hideObject(site_popUpStory);
		}
	}
	//starting interaction
	btn_siteMenu_samples.onclick = function(){
		site_openStory(str_samples_01, event_samplesStory_01, function(){ hideObject(site_popUpStory) });
	}
	///////////////
	//ABOUT FISH
	function event_aboutFish_destructCancel(){
		//page is entered, you can check it out
		stopSelfDestruct();
		site_openStory(str_aboutFish_01_cancel, event_aboutFish_story02, function(){ hideObject(site_popUpStory) });
	}
	function event_aboutFish_destructSuccess(){
		//page has been lost, you need to go back
		stopSelfDestruct();
		playSound("AUD_ESSAY03_ERROR_OS_01.mp3");
		site_openStory(str_aboutFish_01_gameover, function(){ hideObject(site_popUpStory) });
	}
	function event_aboutFish_story02(){
		//
		site_openStory(str_aboutFish_02, event_aboutFish_story03, function(){ hideObject(site_popUpStory) });
	}
	function event_aboutFish_story03(){
		//
		site_openStory(str_aboutFish_03, event_aboutFish_story04, function(){ hideObject(site_popUpStory) });
	}
	function event_aboutFish_story04(){
		//
		site_openStory(str_aboutFish_04, event_aboutFish_story05, function(){ hideObject(site_popUpStory) });
	}
	function event_aboutFish_story05(){
		//
		site_openStory(str_aboutFish_05, event_aboutFish_storyCry01, event_aboutFish_storyStubmle);
	}
	function event_aboutFish_storyCry01(){
		//
		site_openStory(str_aboutFish_cry_01, event_aboutFish_storyCryWIN, event_aboutFish_storyStubmle);
	}
	function event_aboutFish_storyStubmle(){
		//
		site_openStory(str_aboutFish_stumble_01, event_aboutFish_storyCryWIN, event_aboutFish_landmarksLOSE);
	}
	function event_aboutFish_landmarksLOSE(){
		//
		site_openStory(str_aboutFish_landmarks_LOSE, event_aboutFish_storyLOSE);
	}
	//actual lose
	function event_aboutFish_storyLOSE(){
		//
		playSound("benito.mp3");
		site_openStory(str_aboutFish_LOSE, aboutFish_GAMEOVER);
	}
	//win 1
	function event_aboutFish_storyCryWIN(){
		playSound("minibyte_tada_2.mp3");
		site_openStory(str_aboutFish_cry_WIN, event_aboutFish_WIN);
	}
	//the game over event that gives the last piece of text, and forwards to the 404
	function aboutFish_GAMEOVER(){
		hideObject(site_popUpStory);
		openGameOverURL("http://mackerelmediafish.com/404_doom.html");
		//forward
	}
	function event_aboutFish_WIN(){
		hideObject(site_popUpStory);
	}
	btn_siteMenu_aboutFish.onclick = function(){
		//self-destruct (non-fatal) sequence is attached here...
		startSelfDestruct(str_aboutFish_01, str_aboutFish_01_gameover, str_aboutFish_01_warning, event_aboutFish_destructCancel, event_aboutFish_destructSuccess, "nolink");
		event_physics_setDynamic(food_aboutfish);
		event_physics_setDynamic(food_aboutfishDot);
		hideObject(btn_siteMenu_aboutFish);
	}
	///////////////
	//INFO (side nave at bottom)
	function event_info01(){
		hideObject(site_popUpStory);
		openNewWindow("http://mackerelmediafish.com/404_1.html");
	}
	btn_siteMenu_info.onclick = function(){
		//
		site_openStory(str_info_01, event_info01, function(){ hideObject(site_popUpStory) });
		event_physics_setDynamic(food_info);
		hideObject(btn_siteMenu_info);
	}
	///////////////
	//SUPPORT (help us)
	btn_siteMenu_support.onclick = function(){
		//
		site_openStory(str_support_01, function(){ hideObject(site_popUpStory) });
		event_physics_setDynamic(food_support);
		hideObject(btn_siteMenu_support);
	}
	
	site_openStory(str_dialogue_01, function(){ hideObject(site_popUpStory) });
	
	//checking state...
	//if you already visited, then don't show the greeting story pop up
	//NOTE: this is not necessary anymore because you SHOULD NOT BE ABLE TO GO BACK ONCE ENTERING THIS AREA (this is the game now)
	if(bool_visitedSite){
		hideObject(site_popUpStory);
	}
	
	//init
	hideObject(txt_story_counter);
	hideObject(site_popUpItem);
	hideObject(site_popUpGoldfishy);
	hideObject(btn_siteMenu_fishdemos);//GOLDFISHY restors this so you can go look
	setSiteScore();
	set_verm_idle();
	hideObject(site_popUpVerm1);
	playSound("benito.mp3");
	document.body.style.cursor = "url('${resourcesFolderName}/IMG_CURSOR_MAGNIFY.png'), auto";
	//document.body.style.cursor = "url('${resourcesFolderName}/ICO_CURSOR_INSPECT_SML.png'), auto";
	//moving
	int_timer = setInterval(site_intervalCall, 200);
	
	//RESET FOOD HERE
	//food_listofsites
	
