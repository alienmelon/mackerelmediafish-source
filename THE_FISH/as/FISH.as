import flash.events.Event;
import flash.media.SoundChannel;
import flash.events.MouseEvent;
import flash.display.NativeWindow;
import flash.media.Sound;

///////////AUDIO
var arr_snd_squeak:Array = new Array(new AUD_GIRB_SQUELONG01(), new AUD_GIRB_SQUELONG02(), new AUD_GIRB_SQUELONG03(), new AUD_GIRB_SQUELONG04(), new AUD_GIRB_SQUELONG05(), new AUD_GIRB_SQUELONG06(), new AUD_GIRB_SQUELONG07(), new AUD_GIRB_SQUELONG08(), new AUD_GIRB_SQUELONG09(), new AUD_GIRB_SQUELONG10(), new AUD_GIRB_SQUELONG11(), new AUD_GIRB_SQUELONG12(), new AUD_GIRB_SQUELONG13(), new AUD_GIRB_SQUELONG14(), new AUD_GIRB_SQUESHORT01(), new AUD_GIRB_SQUESHORT02(), new AUD_GIRB_SQUESHORT03(), new AUD_GIRB_SQUESHORT04(), new AUD_GIRB_SQUESHORT05(), new AUD_GIRB_SQUESHORT06(), new AUD_GIRB_SQUESHORT07(), new AUD_GIRB_SQUESHORT08(), new AUD_GIRB_SQUESHORT09(), new AUD_GIRB_SQUESHORT10());
var arr_snd_bubble:Array = new Array(new AUD_NOTIFY02());//, new AUD_NOTIFY03_02(), new AUD_NOTIFY03_01());
var arr_snd_errors:Array = new Array(new AUD_XPSYS_07(), new AUD_XPSYS_06(), new AUD_XPSYS_05(), new AUD_XPSYS_04(), new AUD_XPSYS_03(), new AUD_XPSYS_02());

var snd_click:Sound = new AUD_XPSYS_01();
var snd_powerdown:Sound = new AUD_XPSYS_POWERDOWN();

var arr_notes_song1:Array = new Array(new AUD_FISH_SONGNOTE_01(), new AUD_FISH_SONGNOTE_02(), new AUD_FISH_SONGNOTE_03(), new AUD_FISH_SONGNOTE_04(), new AUD_FISH_SONGNOTE_05(), new AUD_FISH_SONGNOTE_06(), new AUD_FISH_SONGNOTE_07(), new AUD_FISH_SONGNOTE_08(), new AUD_FISH_SONGNOTE_09(), new AUD_FISH_SONGNOTE_10(), new AUD_FISH_SONGNOTE_11(), new AUD_FISH_SONGNOTE_12(), new AUD_FISH_SONGNOTE_13(), new AUD_FISH_SONGNOTE_14(), new AUD_FISH_SONGNOTE_15(), new AUD_FISH_SONGNOTE_16(), new AUD_FISH_SONGNOTE_17(), new AUD_FISH_SONGNOTE_18(), new AUD_FISH_SONGNOTE_19(), new AUD_FISH_SONGNOTE_20(), new AUD_FISH_SONGNOTE_21(), new AUD_FISH_SONGNOTE_22(), new AUD_FISH_SONGNOTE_23(), new AUD_FISH_SONGNOTE_24(), new AUD_FISH_SONGNOTE_25(), new AUD_FISH_SONGNOTE_26(), new AUD_FISH_SONGNOTE_27(), new AUD_FISH_SONGNOTE_28(), new AUD_FISH_SONGNOTE_29(), new AUD_FISH_SONGNOTE_30(), new AUD_FISH_SONGNOTE_31(), new AUD_FISH_SONGNOTE_32(), new AUD_FISH_SONGNOTE_33(), new AUD_FISH_SONGNOTE_34(), new AUD_FISH_SONGNOTE_35(), new AUD_FISH_SONGNOTE_36(), new AUD_FISH_SONGNOTE_37(), new AUD_FISH_SONGNOTE_38(), new AUD_FISH_SONGNOTE_39(), new AUD_FISH_SONGNOTE_40(), new AUD_FISH_SONGNOTE_41(), new AUD_FISH_SONGNOTE_42(), new AUD_FISH_SONGNOTE_43(), new AUD_FISH_SONGNOTE_44(), new AUD_FISH_SONGNOTE_45(), new AUD_FISH_SONGNOTE_46(), new AUD_FISH_SONGNOTE_47(), new AUD_FISH_SONGNOTE_48(), new AUD_FISH_SONGNOTE_49(), new AUD_FISH_SONGNOTE_50(), new AUD_FISH_SONGNOTE_51(), new AUD_FISH_SONGNOTE_52(), new AUD_FISH_SONGNOTE_53(), new AUD_FISH_SONGNOTE_54(), new AUD_FISH_SONGNOTE_55(), new AUD_FISH_SONGNOTE_56(), new AUD_FISH_SONGNOTE_57(), new AUD_FISH_SONGNOTE_58());
var arr_notesWarmDry:Array = new Array(new AUD_WARMDRYNOTE_01(), new AUD_WARMDRYNOTE_02(), new AUD_WARMDRYNOTE_03(), new AUD_WARMDRYNOTE_04(), new AUD_WARMDRYNOTE_05(), new AUD_WARMDRYNOTE_06(), new AUD_WARMDRYNOTE_07());

var arr_snd_trouble:Array = new Array(new AUD_FISH_TROUBLE_48(), new AUD_FISH_TROUBLE_01(), new AUD_FISH_TROUBLE_02(), new AUD_FISH_TROUBLE_03(), new AUD_FISH_TROUBLE_04(), new AUD_FISH_TROUBLE_05(), new AUD_FISH_TROUBLE_06(), new AUD_FISH_TROUBLE_07(), new AUD_FISH_TROUBLE_08(), new AUD_FISH_TROUBLE_09(), new AUD_FISH_TROUBLE_10(), new AUD_FISH_TROUBLE_11(), new AUD_FISH_TROUBLE_12(), new AUD_FISH_TROUBLE_13(), new AUD_FISH_TROUBLE_14(), new AUD_FISH_TROUBLE_15(), new AUD_FISH_TROUBLE_16(), new AUD_FISH_TROUBLE_17(), new AUD_FISH_TROUBLE_18(), new AUD_FISH_TROUBLE_19(), new AUD_FISH_TROUBLE_20(), new AUD_FISH_TROUBLE_21(), new AUD_FISH_TROUBLE_22(), new AUD_FISH_TROUBLE_23(), new AUD_FISH_TROUBLE_24(), new AUD_FISH_TROUBLE_25(), new AUD_FISH_TROUBLE_26(), new AUD_FISH_TROUBLE_27(), new AUD_FISH_TROUBLE_28(), new AUD_FISH_TROUBLE_29(), new AUD_FISH_TROUBLE_30(), new AUD_FISH_TROUBLE_31(), new AUD_FISH_TROUBLE_32(), new AUD_FISH_TROUBLE_33(), new AUD_FISH_TROUBLE_34(), new AUD_FISH_TROUBLE_35(), new AUD_FISH_TROUBLE_36(), new AUD_FISH_TROUBLE_37(), new AUD_FISH_TROUBLE_38(), new AUD_FISH_TROUBLE_39(), new AUD_FISH_TROUBLE_40(), new AUD_FISH_TROUBLE_41(), new AUD_FISH_TROUBLE_42(), new AUD_FISH_TROUBLE_43(), new AUD_FISH_TROUBLE_44(), new AUD_FISH_TROUBLE_45(), new AUD_FISH_TROUBLE_46(), new AUD_FISH_TROUBLE_47());
var arr_snd_ok:Array = new Array(new AUD_FISH_OK_1(), new AUD_FISH_OK_2(), new AUD_FISH_OK_3(), new AUD_FISH_OK_4(), new AUD_FISH_OK_5(), new AUD_FISH_OK_6(), new AUD_FISH_OK_7(), new AUD_FISH_OK_8(), new AUD_FISH_OK_9(), new AUD_FISH_OK_10(), new AUD_FISH_OK_11(), new AUD_FISH_OK_12(), new AUD_FISH_OK_13(), new AUD_FISH_OK_14(), new AUD_FISH_OK_15(), new AUD_FISH_OK_16(), new AUD_FISH_OK_17(), new AUD_FISH_OK_18(), new AUD_FISH_OK_19(), new AUD_FISH_OK_20(), new AUD_FISH_OK_21(), new AUD_FISH_OK_22(), new AUD_FISH_OK_23(), new AUD_FISH_OK_24(), new AUD_FISH_OK_25(), new AUD_FISH_OK_26(), new AUD_FISH_OK_27(), new AUD_FISH_OK_28(), new AUD_FISH_OK_29(), new AUD_FISH_OK_30(), new AUD_FISH_OK_31(), new AUD_FISH_OK_32(), new AUD_FISH_OK_33(), new AUD_FISH_OK_34(), new AUD_FISH_OK_35());
var arr_snd_curious:Array = new Array(new AUD_FISH_SURPRISE_1(), new AUD_FISH_SURPRISE_2(), new AUD_FISH_SURPRISE_3(), new AUD_FISH_SURPRISE_4(), new AUD_FISH_SURPRISE_5(), new AUD_FISH_SURPRISE_6(), new AUD_FISH_SURPRISE_7(), new AUD_FISH_SURPRISE_8(), new AUD_FISH_SURPRISE_9(), new AUD_FISH_SURPRISE_10(), new AUD_FISH_SURPRISE_11(), new AUD_FISH_SURPRISE_12(), new AUD_FISH_SURPRISE_13(), new AUD_FISH_SURPRISE_14(), new AUD_FISH_SURPRISE_15(), new AUD_FISH_SURPRISE_16(), new AUD_FISH_SURPRISE_17(), new AUD_FISH_SURPRISE_18(), new AUD_FISH_SURPRISE_19(), new AUD_FISH_SURPRISE_20(), new AUD_FISH_SURPRISE_21(), new AUD_FISH_SURPRISE_22(), new AUD_FISH_SURPRISE_23(), new AUD_FISH_SURPRISE_24(), new AUD_FISH_SURPRISE_25(), new AUD_FISH_SURPRISE_26(), new AUD_FISH_SURPRISE_27(), new AUD_FISH_SURPRISE_28(), new AUD_FISH_SURPRISE_29(), new AUD_FISH_SURPRISE_30(), new AUD_FISH_SURPRISE_31(), new AUD_FISH_SURPRISE_32(), new AUD_FISH_SURPRISE_33(), new AUD_FISH_SURPRISE_34(), new AUD_FISH_SURPRISE_35(), new AUD_FISH_SURPRISE_36(), new AUD_FISH_SURPRISE_37(), new AUD_FISH_SURPRISE_38(), new AUD_FISH_SURPRISE_39(), new AUD_FISH_SURPRISE_40(), new AUD_FISH_SURPRISE_41(), new AUD_FISH_SURPRISE_42());
var arr_snd_sleep:Array = new Array(new AUD_FISH_SLEEP_1(), new AUD_FISH_SLEEP_2(), new AUD_FISH_SLEEP_3(), new AUD_FISH_SLEEP_4(), new AUD_FISH_SLEEP_5(), new AUD_FISH_SLEEP_6(), new AUD_FISH_SLEEP_7(), new AUD_FISH_SLEEP_8(), new AUD_FISH_SLEEP_9(), new AUD_FISH_SLEEP_10(), new AUD_FISH_SLEEP_11(), new AUD_FISH_SLEEP_12(), new AUD_FISH_SLEEP_13(), new AUD_FISH_SLEEP_14(), new AUD_FISH_SLEEP_15(), new AUD_FISH_SLEEP_16(), new AUD_FISH_SLEEP_17(), new AUD_FISH_SLEEP_18(), new AUD_FISH_SLEEP_19(), new AUD_FISH_SLEEP_20(), new AUD_FISH_SLEEP_21());
var arr_snd_bye:Array = new Array(new AUD_FISH_BYE_1(), new AUD_FISH_BYE_2(), new AUD_FISH_BYE_3(), new AUD_FISH_BYE_4(), new AUD_FISH_BYE_5(), new AUD_FISH_BYE_6(), new AUD_FISH_BYE_7(), new AUD_FISH_BYE_8(), new AUD_FISH_BYE_9(), new AUD_FISH_BYE_10(), new AUD_FISH_BYE_11(), new AUD_FISH_BYE_12(), new AUD_FISH_BYE_13(), new AUD_FISH_BYE_14(), new AUD_FISH_BYE_15(), new AUD_FISH_BYE_16(), new AUD_FISH_BYE_17(), new AUD_FISH_BYE_18(), new AUD_FISH_BYE_19());
//var arr_snd_froze:Array = new Array(new AUD_FISH_FREEZE_1(), new AUD_FISH_FREEZE_2(), new AUD_FISH_FREEZE_3(), new AUD_FISH_FREEZE_4(), new AUD_FISH_FREEZE_5(), new AUD_FISH_FREEZE_6(), new AUD_FISH_FREEZE_7(), new AUD_FISH_FREEZE_8(), new AUD_FISH_FREEZE_9(), new AUD_FISH_FREEZE_10(), new AUD_FISH_FREEZE_11(), new AUD_FISH_FREEZE_12(), new AUD_FISH_FREEZE_13(), new AUD_FISH_FREEZE_14(), new AUD_FISH_FREEZE_15(), new AUD_FISH_FREEZE_16(), new AUD_FISH_FREEZE_17(), new AUD_FISH_FREEZE_18(), new AUD_FISH_FREEZE_19(), new AUD_FISH_FREEZE_20(), new AUD_FISH_FREEZE_21(), new AUD_FISH_FREEZE_22(), new AUD_FISH_FREEZE_23(), new AUD_FISH_FREEZE_24(), new AUD_FISH_FREEZE_25(), new AUD_FISH_FREEZE_26(), new AUD_FISH_FREEZE_27(), new AUD_FISH_FREEZE_28(), new AUD_FISH_FREEZE_29(), new AUD_FISH_FREEZE_30(), new AUD_FISH_FREEZE_31(), new AUD_FISH_FREEZE_32(), new AUD_FISH_FREEZE_33(), new AUD_FISH_FREEZE_34(), new AUD_FISH_FREEZE_35(), new AUD_FISH_FREEZE_36(), new AUD_FISH_FREEZE_37(), new AUD_FISH_FREEZE_38(), new AUD_FISH_FREEZE_39(), new AUD_FISH_FREEZE_40(), new AUD_FISH_FREEZE_41(), new AUD_FISH_FREEZE_42(), new AUD_FISH_FREEZE_43(), new AUD_FISH_FREEZE_44(), new AUD_FISH_FREEZE_45(), new AUD_FISH_FREEZE_46(), new AUD_FISH_FREEZE_47(), new AUD_FISH_FREEZE_48(), new AUD_FISH_FREEZE_49(), new AUD_FISH_FREEZE_50());
var arr_snd_talking1:Array = new Array(new AUD_FISH_TALKING02_1(), new AUD_FISH_TALKING02_2(), new AUD_FISH_TALKING02_3(), new AUD_FISH_TALKING02_4(), new AUD_FISH_TALKING02_5(), new AUD_FISH_TALKING02_6(), new AUD_FISH_TALKING02_7(), new AUD_FISH_TALKING02_8(), new AUD_FISH_TALKING02_9(), new AUD_FISH_TALKING02_10(), new AUD_FISH_TALKING02_11(), new AUD_FISH_TALKING02_12(), new AUD_FISH_TALKING02_13(), new AUD_FISH_TALKING02_14(), new AUD_FISH_TALKING02_15(), new AUD_FISH_TALKING02_16(), new AUD_FISH_TALKING02_17(), new AUD_FISH_TALKING02_18(), new AUD_FISH_TALKING02_19(), new AUD_FISH_TALKING02_20(), new AUD_FISH_TALKING02_21(), new AUD_FISH_TALKING02_22(), new AUD_FISH_TALKING02_23(), new AUD_FISH_TALKING02_24(), new AUD_FISH_TALKING02_25(), new AUD_FISH_TALKING02_26(), new AUD_FISH_TALKING02_27(), new AUD_FISH_TALKING02_28(), new AUD_FISH_TALKING02_29(), new AUD_FISH_TALKING02_30(), new AUD_FISH_TALKING02_31(), new AUD_FISH_TALKING02_32(), new AUD_FISH_TALKING02_33(), new AUD_FISH_TALKING02_34(), new AUD_FISH_TALKING02_35(), new AUD_FISH_TALKING02_36(), new AUD_FISH_TALKING02_37(), new AUD_FISH_TALKING02_38(), new AUD_FISH_TALKING02_39(), new AUD_FISH_TALKING02_40(), new AUD_FISH_TALKING02_41(), new AUD_FISH_TALKING02_42(), new AUD_FISH_TALKING02_43(), new AUD_FISH_TALKING02_44(), new AUD_FISH_TALKING02_45(), new AUD_FISH_TALKING02_46(), new AUD_FISH_TALKING02_47(), new AUD_FISH_TALKING02_48(), new AUD_FISH_TALKING02_49(), new AUD_FISH_TALKING02_50(), new AUD_FISH_TALKING02_51(), new AUD_FISH_TALKING02_52(), new AUD_FISH_TALKING02_53(), new AUD_FISH_TALKING02_54(), new AUD_FISH_TALKING02_55(), new AUD_FISH_TALKING02_56(), new AUD_FISH_TALKING02_57(), new AUD_FISH_TALKING02_58(), new AUD_FISH_TALKING02_59(), new AUD_FISH_TALKING02_60(), new AUD_FISH_TALKING02_61(), new AUD_FISH_TALKING02_62(), new AUD_FISH_TALKING02_63(), new AUD_FISH_TALKING02_64(), new AUD_FISH_TALKING02_65(), new AUD_FISH_TALKING02_66(), new AUD_FISH_TALKING02_67(), new AUD_FISH_TALKING02_68(), new AUD_FISH_TALKING02_69(), new AUD_FISH_TALKING02_70(), new AUD_FISH_TALKING02_71(), new AUD_FISH_TALKING02_72());
var arr_snd_talking:Array = new Array(new AUD_FISH_TALKING01_1(), new AUD_FISH_TALKING01_2(), new AUD_FISH_TALKING01_3(), new AUD_FISH_TALKING01_4(), new AUD_FISH_TALKING01_5(), new AUD_FISH_TALKING01_6(), new AUD_FISH_TALKING01_7(), new AUD_FISH_TALKING01_8(), new AUD_FISH_TALKING01_9(), new AUD_FISH_TALKING01_10(), new AUD_FISH_TALKING01_11(), new AUD_FISH_TALKING01_12(), new AUD_FISH_TALKING01_13(), new AUD_FISH_TALKING01_14(), new AUD_FISH_TALKING01_15(), new AUD_FISH_TALKING01_16(), new AUD_FISH_TALKING01_17(), new AUD_FISH_TALKING01_18(), new AUD_FISH_TALKING01_19(), new AUD_FISH_TALKING01_20(), new AUD_FISH_TALKING01_21(), new AUD_FISH_TALKING01_22(), new AUD_FISH_TALKING01_23(), new AUD_FISH_TALKING01_24(), new AUD_FISH_TALKING01_25(), new AUD_FISH_TALKING01_26(), new AUD_FISH_TALKING01_27(), new AUD_FISH_TALKING01_28(), new AUD_FISH_TALKING01_29(), new AUD_FISH_TALKING01_30(), new AUD_FISH_TALKING01_31(), new AUD_FISH_TALKING01_32(), new AUD_FISH_TALKING01_33(), new AUD_FISH_TALKING01_34(), new AUD_FISH_TALKING01_35(), new AUD_FISH_TALKING01_36(), new AUD_FISH_TALKING01_37(), new AUD_FISH_TALKING01_38(), new AUD_FISH_TALKING01_39(), new AUD_FISH_TALKING01_40(), new AUD_FISH_TALKING01_41(), new AUD_FISH_TALKING01_42(), new AUD_FISH_TALKING01_43(), new AUD_FISH_TALKING01_44(), new AUD_FISH_TALKING01_45(), new AUD_FISH_TALKING01_46(), new AUD_FISH_TALKING01_47(), new AUD_FISH_TALKING01_48(), new AUD_FISH_TALKING01_49(), new AUD_FISH_TALKING01_50(), new AUD_FISH_TALKING01_51(), new AUD_FISH_TALKING01_52(), new AUD_FISH_TALKING01_53(), new AUD_FISH_TALKING01_54(), new AUD_FISH_TALKING01_55(), new AUD_FISH_TALKING01_56(), new AUD_FISH_TALKING01_57(), new AUD_FISH_TALKING01_58(), new AUD_FISH_TALKING01_59(), new AUD_FISH_TALKING01_60(), new AUD_FISH_TALKING01_61(), new AUD_FISH_TALKING01_62(), new AUD_FISH_TALKING01_63(), new AUD_FISH_TALKING01_64(), new AUD_FISH_TALKING01_65(), new AUD_FISH_TALKING01_66(), new AUD_FISH_TALKING01_67(), new AUD_FISH_TALKING01_68(), new AUD_FISH_TALKING01_69(), new AUD_FISH_TALKING01_70(), new AUD_FISH_TALKING01_71());
var arr_snd_singing:Array = new Array(new AUD_FISH_SING_01(), new AUD_FISH_SING_02(), new AUD_FISH_SING_03(), new AUD_FISH_SING_04(), new AUD_FISH_SING_05(), new AUD_FISH_SING_06(), new AUD_FISH_SING_07(), new AUD_FISH_SING_08(), new AUD_FISH_SING_09(), new AUD_FISH_SING_10(), new AUD_FISH_SING_11(), new AUD_FISH_SING_12(), new AUD_FISH_SING_13(), new AUD_FISH_SING_14(), new AUD_FISH_SING_15(), new AUD_FISH_SING_16(), new AUD_FISH_SING_17(), new AUD_FISH_SING_18(), new AUD_FISH_SING_19(), new AUD_FISH_SING_20(), new AUD_FISH_SING_21(), new AUD_FISH_SING_22(), new AUD_FISH_SING_23(), new AUD_FISH_SING_24(), new AUD_FISH_SING_25(), new AUD_FISH_SING_26(), new AUD_FISH_SING_27(), new AUD_FISH_SING_28(), new AUD_FISH_SING_29(), new AUD_FISH_SING_30(), new AUD_FISH_SING_31(), new AUD_FISH_SING_32(), new AUD_FISH_SING_33(), new AUD_FISH_SING_34(), new AUD_FISH_SING_35(), new AUD_FISH_SING_36(), new AUD_FISH_SING_37(), new AUD_FISH_SING_38(), new AUD_FISH_SING_39(), new AUD_FISH_SING_40(), new AUD_FISH_SING_41());
var arr_snd_giggle:Array = new Array(new AUD_FISH_GIGGLE_1(), new AUD_FISH_GIGGLE_2(), new AUD_FISH_GIGGLE_3(), new AUD_FISH_GIGGLE_4(), new AUD_FISH_GIGGLE_5(), new AUD_FISH_GIGGLE_6(), new AUD_FISH_GIGGLE_7(), new AUD_FISH_GIGGLE_8(), new AUD_FISH_GIGGLE_9(), new AUD_FISH_GIGGLE_10(), new AUD_FISH_GIGGLE_11(), new AUD_FISH_GIGGLE_12(), new AUD_FISH_GIGGLE_13(), new AUD_FISH_GIGGLE_14(), new AUD_FISH_GIGGLE_15(), new AUD_FISH_GIGGLE_16(), new AUD_FISH_GIGGLE_17(), new AUD_FISH_GIGGLE_18(), new AUD_FISH_GIGGLE_19(), new AUD_FISH_GIGGLE_20(), new AUD_FISH_GIGGLE_21(), new AUD_FISH_GIGGLE_22(), new AUD_FISH_GIGGLE_23(), new AUD_FISH_GIGGLE_24(), new AUD_FISH_GIGGLE_25(), new AUD_FISH_GIGGLE_26(), new AUD_FISH_GIGGLE_27(), new AUD_FISH_GIGGLE_28(), new AUD_FISH_GIGGLE_29(), new AUD_FISH_GIGGLE_30(), new AUD_FISH_GIGGLE_31(), new AUD_FISH_GIGGLE_32(), new AUD_FISH_GIGGLE_33(), new AUD_FISH_GIGGLE_34(), new AUD_FISH_GIGGLE_35(), new AUD_FISH_GIGGLE_36(), new AUD_FISH_GIGGLE_37(), new AUD_FISH_GIGGLE_38(), new AUD_FISH_GIGGLE_39(), new AUD_FISH_GIGGLE_40(), new AUD_FISH_GIGGLE_41(), new AUD_FISH_GIGGLE_42(), new AUD_FISH_GIGGLE_43(), new AUD_FISH_GIGGLE_44(), new AUD_FISH_GIGGLE_45(), new AUD_FISH_GIGGLE_46(), new AUD_FISH_GIGGLE_47(), new AUD_FISH_GIGGLE_48());
//FISH SOUNDS FOR EACH "MOOD" WILL GO HERE
//SPLICE THEM TOGETHER, HAVE A COUNTER, KEEP PLAYING SOUND AFTER SOUND UNTIL COUNTER IS 0

var chan_fish:SoundChannel = new SoundChannel();
var chan_volume:SoundTransform = new SoundTransform();
var chan_song:SoundChannel = new SoundChannel();
var chan_songVolume:SoundTransform = new SoundTransform();
chan_volume.volume = .3;
chan_songVolume.volume = .3;

var num_fishSoundCount:Number = randRange(10, 20);
var num_particleCount:Number = randRange(5, 10);//how many particle windows to spawn
var num_moodFrame:Number = randRange(0, 7);//the current "mood" to set the emoji to (particle emoji) !THERE ARE ALWAYS A TOTAL OF 7 EMOJIS
var str_soundMood = "default";
var num_fishSpeedBurst:Number = 0; //fish "runs" when you click on it... count down and set back to normal speed

var num_songCount:Number = 0;//note of the song
var num_warmDrySongCount:Number = 0;//note for the warm dry song

///////////DIALOGUE
//dialogue arrs for states


var arr_happy:Array = new Array("Your Fish is so happy!", "Your Fish loves you!", "Fish loves you!", "Fish is so happy right now!!", "Your Fish is happy to be here.", "Your Fish loves you!!", "Your Fish is happy about this friendship.", "Your Fish is a good fish!", "Your Fish thinks you're the best.", "Your Fish thinks highly of you!", "Your Fish is very happy...", "Your Fish expresses joy.", "Your Fish expresses feelings of joy.", "Your Fish expresses feelings of love.", "Your Fish is expressing happy emotions.", "Your Fish thinks this place is pretty great.", "Your Fish thinks that you're pretty great.", "Your Fish is so happy right now...", "Fish is happy to be here.", "Fish is overjoyed to be open!", "Fish is full of joy right now!", "Fish is full of joy!");
var arr_talking:Array = new Array("Fish is saying something about what you just did...", "Fish is communicating strong emotions about a thought it just had!", "Fish is saying insightful things!", "Fish has strong opinions about that.", "Fish is telling you a bunch of things!", "Your Fish is telling you a bunch of things...", "Fish is voicing strong opinions about that!", "Fish is giving you important feedback...", "Fish is giving you feedback. You better listen.", "Fish has very strong opinions about that...", "Fish is telling you how happy it is.", "Fish is telling you all about how happy it is.", "Your Fish is telling you a story.", "Your Fish is telling you about what happened the other day.", "Your Fish is bearing its heart and soul to you.", "Fish is bearing its heart and soul to you!", "Your Fish is telling you something important.", ":D", ":)", ":3", ":o", ":O", "(o_o;)", "(._.)", "(._.')", "Your Fish is telling you things!", "Your Fish is telling you things...", "Your Fish is saying things...", "Fish is telling you things...", "Fish has some strong insights about that...", "Your Fish is sharing insights.", "Your Fish has a lot to talk about...", "Fish is telling you some things...", "Your Fish has a lot to talk about right now...", "Your Fish is sharing things.", "Your Fish is sharing its feelings with you.", "Your Fish is sharing some feelings.", "Your Fish is sharing how it feels about this.", "Fish is sharing how it feels.", "Your Fish is sharing feelings...", "Your Fish just had a thought that it wants to share with you!", "Your Fish had a thought and is sharing it with you!", "Your Fish is telling you a bunch of things!", "Your Fish has an opinion about that...", "Your Fish has an opinion...", "Your Fish is sharing an opinion...", "Your Fish just had a thought!", "Your Fish just had a thought it wants to share!", "Your Fish is sharing a thought it just had...", "Your Fish shares deep and profound things with you...");
var arr_singing:Array = new Array("Fish is singing a song for you!", "Your Fish is singing you a song!", "Your Fish shares a song with you...", "Fish is singing a ballad!", "Your Fish is singing to you!", "Fish is singing...", "Your Fish is singing a tune!", "Your Fish is serenading you.", "Fish serenades you with a tune...", "Fish serenades you with a fishy tune...", "Your Fish is singing a song to you!", "Your Fish is singing!", "Fish is singing!", "Your Fish sings you a song!", "Your Fish is improvising a melody.", "Your Fish is improvising a new song!", "Your Fish is sharing a new song it just made!", "Your Fish is improvising music!");
var arr_bellyUp:Array = new Array("Your Fish has gone belly up...", "Fish has gone belly up...", "Your Fish has gone belly up!", ":o Fish goes belly up!!", ":O Fish has gone belly up.", "Fish has gone belly up??", "Your Fish has gone belly up.");
var arr_hiding:Array = new Array("Your Fish is hiding...", "Your Fish is hiding? Where is Fish??", "Where is Fish???", "Can you find them??", "Where is your Fish?", "Your Fish is hiding!", "Can you find your Fish?", "Your Fish is hiding from you.", "Your Fish is hiding somewhere.", "Your Fish is hiding somewhere here...", "Your Fish decided to hide.", "Your Fish has gone into hiding.", "Where did Fish go?", "Your Fish has vanished.", "Your Fish vanished.", "Fish has vanished mysteriously.", "Fish has mysteriously gone into hiding...", "Fish has gone into hiding and might return one day...", "Your Fish is hiding... but where?", "Fish has mysteriously vanished without a trace.", "Your Fish has mysteriously vanished without a trace...");
var arr_scared:Array = new Array("Your Fish froze! Please click Fish to restart...", "Your Fish found unsettling file information! It needs to restart...", "Your Fish found an error on line 13 and froze! Click Fish to reassure it.", "Your Fish stared into the void and can no longer move. Please click Fish to restart.", "No more space for Fish! Please click on Fish to reassure it that everything is OK.", "Fish error! Fish saw something scary and needs a reassuring click!", "Fish saw something very scary on your desktop and needs a reassuring click...", "Fish was frightened by something on your desktop and needs your click!", "Fish is scared and needs a reassuring click...", "Your Fish broke! It needs your love and a click to return to normal...", "Critical error on line 38! Fish needs a reassuring click to return to normal.", "Your Fish saw something! It's scared now.", "Your Fish saw something truly terrifying and is scared. Gently click Fish to reassure it.", "Your Fish is mortified by something it saw. Please click on Fish to reassure it.", "Your Fish saw something truly mortifying and cannot move. Please click on Fish to reassure it.", "Fish is mortified. Please click on Fish to reassure it.", "Fish is scared and needs reassurance...", "Error! Fish needs a reassuring click in order to return back to normal.");
var arr_surprise:Array = new Array("Something surprised Fish!", "Something surprised your Fish!", "Whoa! Fish got surprised!", "Your Fish was surprised by that!", "That surprised your Fish!", "Your Fish is pleasantly surprised by that!", "That surprised your Fish!", "Your Fish is bemused!", "Your Fish was bewildered!", "Your Fish is slightly taken aback by that...", "That amused your Fish!", "Fish was amused by that!", "Your Fish found that amusing!", "Fish was amused by that...", "Your Fish was delighted by that...", "That made your Fish curious...", "Your Fish got curious...", "Your Fish is curious at something...", "Your Fish is amused.", "Your Fish saw something amusing!", "Something surprised your Fish!");
//click on
var arr_clickSleep:Array = new Array("Whoa! Fish was tired!", "Wow your Fish was tired.", "Your Fish was very tired...", "Your Fish was very tired and needed that...", "Wow your Fish was very tired!", "A nap was necessary!", "Your Fish really needed that nap.", "Fish really needed a nap.", "That nap was necessary!", "That nap was a necessary feature!", "Your Fish needed that nap.", "Naps are a necessary feature!", "Your Fish is glad it got some sleep...", "Your Fish is happy it got some shut eye...", "Your Fish is happy to have gotten some rest.", "Your Fish needed some rest!", "Your Fish was very tired and needed that!", "That nap was very necessary!", "That nap was a very necessary feature...", "Fish really needed that nap.", "Your Fish really needed the sleep.", "Fish needed the sleep...");
var arr_clickFroze:Array = new Array("Thank you for helping Fish.", "Fish is grateful for your help.", "Fish is thankful for that help.", "Fish thanks you for the help.", "Your Fish thanks you for helping.", "Your Fish is glad that you have its back.", "Your Fish is lucky that you have its back!", "Your Fish is lucky to have you.", "Your Fish is grateful for the help.", "Your Fish is happy that you unconfused it.", "Your Fish is happy that you reset it.", "Your Fish is grateful for the reset.", "Your Fish is lucky to have you!", "Your Fish is lucky to have you...", "Fish is very lucky to have you.", "Fish expresses gratitude for the help.", "Your Fish expresses gratitude for the help.");
var arr_clickHide:Array = new Array("Haha! You found Fish!", "You found your Fish!", "Haha! You found your Fish!", "Your fish was found!", "You found your Fish...", "Your Fish is glad that you found it.", "Fish is happy that you found it!", "Fish is glad that you found it again.", "Your Fish is glad you found it.", "Fish is glad to be back!", "Fish is glad to be visible again...", "Fish is happy to be visible again!");
var arr_goodbye:Array = new Array("Goodbye!", "C u later!", "See you later!", "Bye!", "Ok bye!", "Thank you bye!!", "See you later!!", "Till next time!", "Bye bye!!", "Ok thanks bye!");

///////////STATES
var arr_fishStates:Array = new Array("idle", "idle", "swim", "swim", "swim", "swim", "happy", "happy", "talking", "talking", "singing", "singing", "froze", "curious", "sleep", "hide", "bellyup");

var str_currState = "idle";
var num_stateCount:Number;//count down till next state

//////////MOVEMENT RELATED VARS

var org_x:Number = window.x; //original x position of window (for flipping)
var num_distX:Number;
var num_distY:Number;
var num_targ_x:Number;
var num_targ_y:Number;
//the windows width/height (not sized)
var num_winWidth:Number = window.width;
var num_winHeight:Number = window.height;
//if fish is closing (stop all, walk fish off screen, THEN close)
var bool_isClosing:Boolean = false;

//AUDIO

//play part of the song when a note gets clicked on
function playSong(){
	//arr_notes_song1
	//num_songCount
	//
	if(num_songCount < arr_notes_song1.length - 1){
		num_songCount += 1;
	}else{
		num_songCount = 0;
	}
	//chan_song
	chan_song = arr_notes_song1[num_songCount].play();
	chan_song.soundTransform = chan_songVolume;
	//
}

//play the song for when a note "pops" when reaching the top
function playWarmDrySong(){
	//
	if(num_warmDrySongCount < arr_notesWarmDry.length - 1){
		num_warmDrySongCount += 1;
	}else{
		num_warmDrySongCount = 0;
	}
	//
	chan_song = arr_notesWarmDry[num_warmDrySongCount].play();
	chan_song.soundTransform = chan_songVolume;
}

//play a sound for fish dialogue, singing... small clip and count down until done making noise
//default
//singing
//scared
// ** this is what should be called to init the sounds **
function playFishSound(str_type:String = "default", playOnce:Boolean = false){
	//reset and set the current mood
	str_soundMood = str_type;
	num_fishSoundCount = randRange(10, 20);
	triggerFishSound(playOnce);
}

function stopFishSound(){
	//stop and clear all fish sounds
	chan_fish.removeEventListener(Event.SOUND_COMPLETE, loopFishSound);
	chan_fish.stop();
}

//shared between sound_complete and playFishSound
function triggerFishSound(playOnce:Boolean = false){
	//remove and stop just in case...
	stopFishSound();
	//play random squeak
	if(Math.random()*100 > 80){
		randArr(arr_snd_squeak).play();
	}
	//play acording to mood
	if(str_soundMood == "default"){
		//
		chan_fish = randArr(arr_snd_talking).play();
	}
	//
	if(str_soundMood == "talking"){//
		//
		if(Math.random()*100 > 50){
			chan_fish = randArr(arr_snd_talking1).play();
		}else{
			chan_fish = randArr(arr_snd_squeak).play();
		}
	}
	//
	if(str_soundMood == "bubbles"){
		//
		chan_fish = randArr(arr_snd_squeak).play();
	}
	//
	if(str_soundMood == "singing"){
		//
		if(Math.random()*100 > 50){
			chan_fish = randArr(arr_snd_singing).play();
		}else{
			chan_fish = randArr(arr_snd_squeak).play();
		}
	}
	//
	if(str_soundMood == "giggle"){
		//fish is laughing
		chan_fish = randArr(arr_snd_giggle).play();
	}
	//
	if(str_soundMood == "frozen"){
		//froze
		chan_fish = randArr(arr_snd_trouble).play();
	}
	//
	if(str_soundMood == "bye"){
		chan_fish = randArr(arr_snd_bye).play();
	}
	//
	if(str_soundMood == "sleep"){
		chan_fish = randArr(arr_snd_sleep).play();
	}
	//
	if(str_soundMood == "curious"){
		//
		chan_fish = randArr(arr_snd_curious).play();
	}
	//
	if(str_soundMood == "ok"){
		//
		chan_fish = randArr(arr_snd_ok).play();
	}
	//if it's a multiple playing sound, then add listener to re-trigger it
	if(!playOnce){
		chan_fish.addEventListener(Event.SOUND_COMPLETE, loopFishSound);
	}
	chan_fish.soundTransform = chan_volume;
	//count down till stop
	num_fishSoundCount -= 1;//count down
}

function loopFishSound(event:Event){
	//manage playback
	if(num_fishSoundCount <= 0){
		//stop and call a new state
		stopFishSound();
		set_state();
		//
	}else{
		//if not at the end play the sound again
		triggerFishSound();
	}
}

//MOVEMENT

function get_bounds(){
	num_screenWidth = Screen.mainScreen.bounds.width;
	num_screenHeight = Screen.mainScreen.bounds.height;
}

function get_randTarg(){
	num_targ_x = Math.ceil(Math.random()*Screen.mainScreen.bounds.width - num_winWidth);
	num_targ_y = Math.ceil(Math.random()*Screen.mainScreen.bounds.height - num_winHeight);
}

//set or reset the state countdown (countdown till changing what it's doing)
function set_stateCountdown(numMin:Number = 50, numMax:Number = 200){
	num_stateCount = randRange(numMin, numMax);
	num_particleCount = randRange(5, 10);
	num_moodFrame = randRange(0, 7);
}

////////////////ANIMATION & STATES
//TODO: EACH OF THESE MAKES IT'S OWN CALL TO THE DESCRIPTION WINDOW SETTING TEXT STORY

function fish_talking(){
	//OPEN WINDOW DESCRIBING WHAT THEY ARE SAYING
	//RANDOM TEXT FOR WINDOW
	//
	fish_gotoAnimation("talking");
	playFishSound("talking");
	//
	window_dialogue(randArr(arr_talking));
};

function fish_talking_event(str:String){
	//unique call to talking that's user set
	//when "froze" or "hiding" and you click on fish
	//fish makes a comment for a moment, then resumes
	str_currState = "talking";
	playFishSound("default");
	fish_gotoAnimation("talking");
	set_stateCountdown();
	//
	window_dialogue(str);
}

function fish_singing(){
	fish_gotoAnimation("singing");
	playFishSound("singing");
	window_dialogue(randArr(arr_singing));
	window_particle("PARTICLE_NOTE");
}

function fish_idle(){
	fish_gotoAnimation("idle");
}

function fish_curious(){
	//curious is like idle, but the text is different
	fish_gotoAnimation("curious");
	window_dialogue(randArr(arr_surprise));
	playFishSound("curious", true);
}

function fish_froze(){
	//error sound (cute error sound), readout at the bottom that's more like an allert window now
	window_dialogue(randArr(arr_scared));
	fish_gotoAnimation("froze");
	playFishSound("frozen");
	set_stateCountdown(300, 500);
	//set to proper scale for placement of particles
	//mc_clip.scaleX = 1;
	//spawn a bubble bunch of shock particles
	for(var i:Number = 0; i<num_particleCount/2; ++i){
		window_particle("PARTICLE_SHOCK");
		randArr(arr_snd_errors).play();
	}
}

function fish_hide(){
	//silently dissapear for a while
	//only readout is special, fish just disappeared for a while, can you find them? where are they??
	//fish is hiding?? where is fish??
	window_dialogue(randArr(arr_hiding));
	fish_gotoAnimation("hide");
	playFishSound("ok", true);
	set_stateCountdown(300, 500);
}

function fish_sleeping(){
	//only once (init)
	if(mc_clip.currentLabel != "sleep"){
		set_stateCountdown(500, 800);
		playFishSound("sleep", true);
	}
	fish_gotoAnimation("sleep");
}

function fish_bellyup(){
	//only once (init)
	if(mc_clip.currentLabel != "bellyup"){
		set_stateCountdown(500, 800);
		window_dialogue(randArr(arr_bellyUp));
		playFishSound("giggle", true);
	}
	fish_gotoAnimation("bellyup");
}

function fish_happy(){
	//blow happy bubbles
	//first run only (init)
	if(mc_clip.currentLabel != "happy"){
		playFishSound("bubbles");
		mc_clip.scaleX = 1;//reset scale for particles
		window_particle("PARTICLE_HAPPY");
		window_dialogue(randArr(arr_happy));
		//
		playFishSound("giggle");
	}
	//set animation state
	fish_gotoAnimation("happy");
	
	//open windows and count down...
	//COMMENTED OUT FOR DEBUG PURPOSES, WHEN DONE TESTING COMMENT BACK ON
	if(num_particleCount > 0 && Math.random()*100 > 90){
		//open window here
		window_particle("PARTICLE_HAPPY");
		num_particleCount -= 1;
	}
	
	//
}

function fish_close(){
	
	if(mc_clip.currentLabel != "swimFast"){
		mc_clip.scaleX = -1; //point left to go into that direction
		window_dialogue(randArr(arr_goodbye));
	}
	
	fish_gotoAnimation("swimFast");
}

function fish_gotoAnimation(str){
	//really make sure it gets set only once
	if(mc_clip.currentLabel != str){
		mc_clip.gotoAndStop(str);
	}
}

/*
NOTE!!!
not all states are triggered by countdown, some should wait longer
like froze is click based (long countdown)
hide should hide for a long time...
*/

//THIS SETS THE STATE
//to change the fish's state call this
//pass true if you want it to swim (swim is default)
function set_state(bool_shouldSwim:Boolean = false){
	
	var str_state = randArr(arr_fishStates);
	
	//reset everything here...
	stopFishSound();
	
	//start another...
	
	//DUPLICATE STATE
	//catch if it's the same state again (keep from being repetitive)
	if(str_state == str_currState || bool_shouldSwim){
		//set to swim again if it's a double same state (swim is default)
		str_state = "swim";
		playFishSound("ok", true);
	}
	
	//DEBUG ONLY, COMMENT ALL BACK IN AND COMMENT OUT THIS LINE
	//str_state = "swim";
	
	//now set
	str_currState = str_state;
	
	//reset counter TODO: SET THIS BASED ON STATE TYPE (SOME ARE LONGER)
	set_stateCountdown();
	get_randTarg();//random target for movement (in case this is movement)
	org_x = window.x;//set original y (for flipping)
	
	//close anything still open (reset)
	window_close(NW_window_dialogue);
	
}

//////////////////TIMER ANIMATIONS (ENTER_FRAME)

//
function fish_move(){
	//move to x/y
	num_distX = num_targ_x - window.x;
	num_distY = num_targ_y - window.y;
	//
	if(num_fishSpeedBurst <= 0){
		//normal speed
		window.x = Math.ceil(window.x + num_distX * 0.005);
		window.y = Math.ceil(window.y + num_distY * 0.005);
		fish_gotoAnimation("swim");
	}else{
		//burst of energy
		num_fishSpeedBurst -= 1;
		window.x = Math.ceil(window.x + num_distX * 0.02);
		window.y = Math.ceil(window.y + num_distY * 0.02);
		fish_gotoAnimation("swimFast");
	}
	//
	//face direction that it is going
	//face direction / flip
	if(window.x > org_x){
		mc_clip.scaleX = 1;
	}else{
		mc_clip.scaleX = -1;
	}
	//arrived at target OR timed out -- reset
	if(window.x == num_targ_x || window.y == num_targ_y || num_stateCount < 0){
		//
		set_state();
	};
}

function fish_floatUp(){
	//MANAGE COORDS AND BOUNDING HERE
	//if not at the top, then float up
	if(window.y > 10){//num_winHeight){
		window.y -= 2;
	}else{
		//stop, reached the top
	}
}
//same as above but resets and plays a giggle when reaching the top
function fish_floatUpReset(){
	if(window.y >= 50){
		window.y -= 2;
	}else{
		//stop, reached the top
		playFishSound("giggle", true);
		set_state();
	}
}

function leaveScreen(){
	if(window.x > window.width/2){
		window.x -= 15;
	}else{
		//close
		_closeFish();
	}
}


function event_event(event:Event){
		
	//call a new one
	if(num_stateCount <= 0){
		
		set_state();
		
	}
	//_closeFish bool_isClosing
	//handle them...
	
	if(!bool_isClosing){
		//TALKING
		//set to talking (only if not already set, so check frame for that)
		if(str_currState == "talking" && mc_clip.currentLabel != "talking"){
			fish_talking();
		}
		//SINGING
		//start singing audio
		if(str_currState == "singing" && mc_clip.currentLabel != "singing"){
			fish_singing();
		}
		//IDLE
		if(str_currState == "idle" && mc_clip.currentLabel != "idle"){
			fish_idle();
		}
		//CURIOUS (curious is like idle)
		if(str_currState == "curious" && mc_clip.currentLabel != "curious"){
			fish_curious();
		}
		//HIDING (like idle, but not visible)
		if(str_currState == "hide" && mc_clip.currentLabel != "hide"){
			fish_hide();
		}
		
		//HAPPY (spawn windows for a certain count, then just play through the audio till the end)
		if(str_currState == "happy"){
			fish_happy();
		}
		//FROZE (like idle, but waiting for interaction)
		if(str_currState == "froze" && mc_clip.currentLabel != "froze"){
			fish_froze();
		}
		
		//SWIM (GO TO PLACE)
		if(str_currState == "swim"){
			fish_move();
			//set animation
			//fish_gotoAnimation("swim");
		}
		if(str_currState == "swimFast"){
			fish_move();
			//fish_gotoAnimation("swimFast");
		}
		//SLEEP (FLOAT UP)
		if(str_currState == "sleep"){
			fish_floatUp();
			fish_sleeping();
		}
		//BELLY UP (FLOAT UP WITH ONE GIGGLE)
		if(str_currState == "bellyup"){
			fish_floatUpReset();
			fish_bellyup();
		}
			
		num_stateCount-=1;
	}else{
		//
		//fish is closing
		//walk off screen
		//once reached the end THEN close
		fish_close();
		leaveScreen();
	}
	
}


function event_interact(event:MouseEvent){
	//interact with fish
	//events like FROZE
	//if not frozen then call up the INPUT field for talking to fish
	//e.g. type something and "fish doesn't really understand because they're just a fish but are happy for the interaction!"
	
	if(str_currState == "froze"){
		//
		fish_talking_event(randArr(arr_clickFroze));
		//
	}else if(str_currState == "hide"){
		//
		fish_talking_event(randArr(arr_clickHide));
		//
	}else if(str_currState == "sleep"){
		//
		fish_talking_event(randArr(arr_clickSleep));
		//
	}else if(str_currState == "bellyup"){
		playFishSound("giggle", true);
	}else{
		//SPEED BURST CLICK HERE
		//a burst of speed so fish runs away from your mouse
		//also set to "swimming"		
		//
		window_particle("PARTICLE_HEARTS");
		num_fishSpeedBurst = 10;
		set_state(true);
		playFishSound("giggle", true);
		//str_currState = "swimFast";
		//
	}
}

//////////////////INIT

//center_window();
resizeWindow(179, 152);

get_bounds();
get_randTarg();
set_stateCountdown();

//playFishSound("default");
set_state(true);

stage.addEventListener(Event.ENTER_FRAME, event_event);
mc_clip.addEventListener(MouseEvent.MOUSE_UP, event_interact);

window.addEventListener(Event.CLOSING, event_closeAll);

stop();