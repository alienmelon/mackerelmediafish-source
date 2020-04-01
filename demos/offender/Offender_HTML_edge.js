/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['"Press Start 2P", "Lucida Console", Monaco, monospace']='<link href=\'http://fonts.googleapis.com/css?family=Press+Start+2P\' rel=\'stylesheet\' type=\'text/css\'>';

var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "both",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'IMG_Menu_Back',
                display: 'none',
                type: 'image',
                rect: ['0', '0','406px','331px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_Menu_Back.png",'0px','0px']
            },
            {
                id: 'IMG_Menu_Title',
                display: 'none',
                type: 'image',
                rect: ['91px', '86px','224px','50px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_Menu_Title.png",'0px','0px']
            },
            {
                id: 'IMG_Menu_Bunny_F1',
                display: 'none',
                type: 'image',
                rect: ['172px', '94px','42px','50px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_Menu_Bunny_F1.png",'0px','0px']
            },
            {
                id: 'Menu_Bunny_Poof',
                display: 'none',
                type: 'rect',
                rect: ['187', '87','auto','auto','auto', 'auto']
            },
            {
                id: 'IMG_Menu_Aliens',
                display: 'none',
                type: 'image',
                rect: ['146px', '238px','260px','94px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_Menu_Aliens.gif",'0px','0px']
            },
            {
                id: 'IMG_Menu_PLAY',
                display: 'none',
                type: 'image',
                rect: ['174px', '166','57px','34px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"IMG_Menu_PLAY.png",'0px','0px']
            },
            {
                id: 'IMG_Menu_SCORES',
                display: 'none',
                type: 'image',
                rect: ['156px', '207px','93px','34px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"IMG_Menu_SCORES.png",'0px','0px']
            },
            {
                id: 'IMG_Menu_KEYS',
                display: 'none',
                type: 'image',
                rect: ['170px', '251px','65px','34px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"IMG_Menu_KEYS.png",'0px','0px']
            },
            {
                id: 'IMG_Keys_02',
                display: 'none',
                type: 'image',
                rect: ['0', '0','406px','331px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_Keys_02.gif",'0px','0px']
            },
            {
                id: 'Btn_OK_ScoresCopy',
                display: 'none',
                type: 'rect',
                rect: ['318', '286','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'IMG_Scores_Title',
                display: 'none',
                type: 'image',
                rect: ['147px', '30px','112px','45px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_Scores_Title.png",'0px','0px']
            },
            {
                id: 'txt_highscore',
                display: 'none',
                type: 'text',
                rect: ['0px', '98px','406px','120px','auto', 'auto'],
                text: ".",
                align: "center",
                font: ['"Press Start 2P", "Lucida Console", Monaco, monospace', 15, "rgba(255,255,204,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Scores_Disguised',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'Btn_OK_Scores',
                display: 'none',
                type: 'rect',
                rect: ['318', '286','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'IMG_Win_OffendersWin',
                display: 'none',
                type: 'image',
                rect: ['0', '0','406px','331px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_Win_OffendersWin.gif",'0px','0px']
            },
            {
                id: 'IMG_Win_End_Text',
                display: 'none',
                type: 'image',
                rect: ['104px', '106','197px','42px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_Win_End_Text.png",'0px','0px']
            },
            {
                id: 'IMG_Win_BubbleName',
                display: 'none',
                type: 'image',
                rect: ['158px', '190px','194px','68px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_Win_BubbleName.png",'0px','0px']
            },
            {
                id: 'IMG_Win_F1',
                display: 'none',
                type: 'image',
                rect: ['0', '0','406px','331px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_Win_F1.gif",'0px','0px']
            },
            {
                id: 'IMG_Win_F2',
                display: 'block',
                type: 'image',
                rect: ['0', '0','406px','331px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_Win_F2.gif",'0px','0px']
            },
            {
                id: 'IMG_Win_F3',
                display: 'block',
                type: 'image',
                rect: ['0', '0','406px','331px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_Win_F3.gif",'0px','0px']
            },
            {
                id: 'IMG_Win_F4_WOFade',
                display: 'block',
                type: 'image',
                rect: ['0', '0','406px','331px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_Win_F4_WOFade.gif",'0px','0px']
            },
            {
                id: 'Win_Fade',
                display: 'none',
                type: 'rect',
                rect: ['0px', '0px','406px','331px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'IMG_Win_F5',
                display: 'none',
                type: 'image',
                rect: ['0', '0','406px','331px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_Win_F5.gif",'0px','0px']
            },
            {
                id: 'txt_name',
                display: 'none',
                type: 'text',
                rect: ['163px', '197px','184px','14px','auto', 'auto'],
                text: "Name, plz:",
                align: "left",
                font: ['\'Press Start 2P\', \'Lucida Console\', Monaco, monospace', 12, "rgba(29,97,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Btn_OK',
                display: 'none',
                type: 'rect',
                rect: ['318', '286','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'IMG_BACK_PlayArea03',
                display: 'block',
                type: 'image',
                rect: ['0', '0','406px','331px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_BACK_PlayArea03.png",'0px','0px']
            },
            {
                id: 'IMG_BACK_PlayArea04',
                display: 'block',
                type: 'image',
                rect: ['0', '0','406px','331px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_BACK_PlayArea04.png",'0px','0px']
            },
            {
                id: 'IMG_BACK_PlayArea05',
                display: 'block',
                type: 'image',
                rect: ['0', '0','406px','331px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_BACK_PlayArea05.png",'0px','0px']
            },
            {
                id: 'IMG_BACK_PlayArea06',
                display: 'block',
                type: 'image',
                rect: ['0', '0','406px','331px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_BACK_PlayArea06.png",'0px','0px']
            },
            {
                id: 'IMG_BACK_PlayArea07',
                display: 'block',
                type: 'image',
                rect: ['0', '0','406px','331px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_BACK_PlayArea07.png",'0px','0px']
            },
            {
                id: 'IMG_BACK_PlayArea08',
                display: 'block',
                type: 'image',
                rect: ['0', '0','406px','331px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_BACK_PlayArea08.png",'0px','0px']
            },
            {
                id: 'IMG_BACK_PlayArea09',
                display: 'block',
                type: 'image',
                rect: ['0', '0','406px','331px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_BACK_PlayArea09.png",'0px','0px']
            },
            {
                id: 'IMG_BACK_PlayArea01',
                display: 'none',
                type: 'image',
                rect: ['0', '0','406px','331px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_BACK_PlayArea01.png",'0px','0px']
            },
            {
                id: 'IMG_FRAME_PlayArea01',
                display: 'none',
                type: 'image',
                rect: ['0', '0','406px','331px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_FRAME_PlayArea01.png",'0px','0px']
            },
            {
                id: 'Beds',
                display: 'none',
                type: 'rect',
                rect: ['147', '259','auto','auto','auto', 'auto']
            },
            {
                id: 'txt_score',
                display: 'none',
                type: 'text',
                rect: ['275px', '25px','110px','18px','auto', 'auto'],
                text: "0",
                align: "right",
                font: ['"Press Start 2P", "Lucida Console", Monaco, monospace', 17, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'Nightmare',
                display: 'none',
                type: 'rect',
                rect: ['7', '174','auto','auto','auto', 'auto']
            },
            {
                id: 'Transition_Blink',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'Screen_End',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'Screen_Score',
                display: 'none',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'IMG_ANIM_Blink013Copy',
                display: 'none',
                type: 'image',
                rect: ['0px', '0px','406px','331px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_ANIM_Blink01.gif",'0px','0px']
            },
            {
                id: 'IMG_Sprite_Bed01_TOP',
                display: 'none',
                type: 'image',
                rect: ['106px', '136px','40px','72px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_Sprite_Bed01_TOP.gif",'0px','0px']
            },
            {
                id: 'IMG_Sprite_Bunny01_Sleeping',
                display: 'none',
                type: 'image',
                rect: ['115px', '140px','22px','20px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_Sprite_Bunny01_Sleeping.gif",'0px','0px']
            },
            {
                id: 'IMG_Sprite_Bed01_BOTTOM',
                display: 'none',
                type: 'image',
                rect: ['106px', '136px','40px','72px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_Sprite_Bed01_BOTTOM.gif",'0px','0px']
            },
            {
                id: 'IMG_Sprite_BunnySleeping',
                display: 'none',
                type: 'image',
                rect: ['159px', '136px','40px','72px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_Sprite_BunnySleeping.gif",'0px','0px']
            },
            {
                id: 'IMG_Sprite_BunnySleeping2',
                display: 'none',
                type: 'image',
                rect: ['211px', '136px','40px','72px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_Sprite_BunnySleeping.gif",'0px','0px']
            },
            {
                id: 'IMG_Sprite_Bunny',
                display: 'none',
                type: 'image',
                rect: ['305px', '144px','22px','22px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_Sprite_Bunny.gif",'0px','0px']
            },
            {
                id: 'IMG_Sprite_BunnyStill01',
                display: 'none',
                type: 'image',
                rect: ['305px', '146px','22px','20px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_Sprite_BunnyStill01.png",'0px','0px']
            },
            {
                id: 'IMG_Sprite_BunnyStill02',
                display: 'none',
                type: 'image',
                rect: ['309px', '144px','14px','22px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_Sprite_BunnyStill02.png",'0px','0px']
            },
            {
                id: 'IMG_Sprite_Bed01_TOP2',
                display: 'none',
                type: 'image',
                rect: ['264px', '136px','40px','72px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_Sprite_Bed01_TOP.gif",'0px','0px']
            },
            {
                id: 'IMG_Sprite_BunnyStill03',
                display: 'none',
                type: 'image',
                rect: ['305px', '146px','22px','20px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_Sprite_BunnyStill03.png",'0px','0px']
            },
            {
                id: 'IMG_Sprite_BunnyStill04',
                display: 'none',
                type: 'image',
                rect: ['273', '138','22px','14px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_Sprite_BunnyStill04.png",'0px','0px']
            },
            {
                id: 'IMG_Sprite_BunnyStill05',
                display: 'none',
                type: 'image',
                rect: ['273', '138','22px','14px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_Sprite_BunnyStill05.png",'0px','0px']
            },
            {
                id: 'IMG_Sprite_BunnyStill06_Blink1',
                display: 'none',
                type: 'image',
                rect: ['273', '138','22px','14px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_Sprite_BunnyStill06_Blink1.png",'0px','0px']
            },
            {
                id: 'IMG_Sprite_BunnyStill06_Blink2',
                display: 'none',
                type: 'image',
                rect: ['273', '138','22px','14px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_Sprite_BunnyStill06_Blink2.png",'0px','0px']
            },
            {
                id: 'IMG_Sprite_BunnyStill06_Blink3',
                display: 'none',
                type: 'image',
                rect: ['273', '138px','22px','14px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_Sprite_BunnyStill06_Blink3.png",'0px','0px']
            },
            {
                id: 'IMG_Sprite_Bed01_BOTTOM2',
                display: 'none',
                type: 'image',
                rect: ['264px', '136px','40px','72px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_Sprite_Bed01_BOTTOM.gif",'0px','0px']
            },
            {
                id: 'IMG_Sprite_UFO_Beam',
                display: 'none',
                type: 'image',
                rect: ['83px', '0px','76px','176px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"IMG_Sprite_UFO_Beam.gif",'0px','0px']
            },
            {
                id: 'Fader',
                display: 'none',
                type: 'rect',
                rect: ['0px', '0px','406px','331px','auto', 'auto'],
                fill: ["rgba(0,20,43,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            }],
            symbolInstances: [
            {
                id: 'Nightmare',
                symbolName: 'Nightmare',
                autoPlay: {

                }
            },
            {
                id: 'Scores_Disguised',
                symbolName: 'Scores_Disguised',
                autoPlay: {

                }
            },
            {
                id: 'Btn_OK_Scores',
                symbolName: 'Btn_OK',
                autoPlay: {

                }
            },
            {
                id: 'Transition_Blink',
                symbolName: 'Transition_Blink',
                autoPlay: {

                }
            },
            {
                id: 'Beds',
                symbolName: 'Beds',
                autoPlay: {

                }
            },
            {
                id: 'Screen_Score',
                symbolName: 'Screen_Score',
                autoPlay: {

                }
            },
            {
                id: 'Screen_End',
                symbolName: 'Screen_End',
                autoPlay: {

                }
            },
            {
                id: 'Btn_OK_ScoresCopy',
                symbolName: 'Btn_OK',
                autoPlay: {

                }
            },
            {
                id: 'Menu_Bunny_Poof',
                symbolName: 'Menu_Bunny_Poof',
                autoPlay: {

                }
            },
            {
                id: 'Btn_OK',
                symbolName: 'Btn_OK',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_IMG_Win_OffendersWin}": [
                ["style", "display", 'none']
            ],
            "${_IMG_Sprite_BunnySleeping2}": [
                ["style", "top", '136px'],
                ["style", "left", '211px'],
                ["style", "display", 'none']
            ],
            "${_IMG_Win_F1}": [
                ["style", "display", 'none']
            ],
            "${_IMG_Sprite_Bed01_TOP2}": [
                ["style", "top", '136px'],
                ["style", "left", '264px'],
                ["style", "display", 'none']
            ],
            "${_IMG_BACK_PlayArea03}": [
                ["style", "display", 'block']
            ],
            "${_IMG_Sprite_BunnyStill02}": [
                ["style", "top", '144px'],
                ["style", "left", '309px'],
                ["style", "display", 'none']
            ],
            "${_IMG_Sprite_Bunny01_Sleeping}": [
                ["style", "top", '140px'],
                ["style", "left", '115px'],
                ["style", "display", 'none']
            ],
            "${_Menu_Bunny_Poof}": [
                ["style", "display", 'none']
            ],
            "${_Screen_End}": [
                ["style", "display", 'none']
            ],
            "${_IMG_Win_F2}": [
                ["style", "display", 'block']
            ],
            "${_IMG_Win_BubbleName}": [
                ["style", "top", '190px'],
                ["style", "left", '158px'],
                ["style", "display", 'none']
            ],
            "${_Screen_Score}": [
                ["style", "display", 'none']
            ],
            "${_IMG_Win_F3}": [
                ["style", "display", 'block']
            ],
            "${_Fader}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0.000000']
            ],
            "${_IMG_Sprite_BunnyStill04}": [
                ["style", "display", 'none']
            ],
            "${_IMG_Sprite_Bed01_BOTTOM2}": [
                ["style", "top", '136px'],
                ["style", "left", '264px'],
                ["style", "display", 'none']
            ],
            "${_IMG_Sprite_BunnySleeping}": [
                ["style", "top", '136px'],
                ["style", "left", '159px'],
                ["style", "display", 'none']
            ],
            "${_IMG_ANIM_Blink013Copy}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.097632996737957'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_IMG_Win_End_Text}": [
                ["style", "left", '104px'],
                ["style", "display", 'none']
            ],
            "${_Btn_OK_ScoresCopy}": [
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none']
            ],
            "${_IMG_Sprite_BunnyStill05}": [
                ["style", "display", 'none']
            ],
            "${_IMG_Sprite_BunnyStill06_Blink2}": [
                ["style", "display", 'none']
            ],
            "${_IMG_Sprite_Bed01_BOTTOM}": [
                ["style", "top", '136px'],
                ["style", "left", '106px'],
                ["style", "display", 'none']
            ],
            "${_IMG_Menu_Back}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${_IMG_BACK_PlayArea09}": [
                ["style", "display", 'block']
            ],
            "${_Scores_Disguised}": [
                ["style", "display", 'none'],
                ["style", "cursor", 'auto']
            ],
            "${_Btn_OK}": [
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none']
            ],
            "${_IMG_Sprite_Bunny}": [
                ["style", "top", '144px'],
                ["style", "left", '405px'],
                ["style", "display", 'none']
            ],
            "${_IMG_Menu_KEYS}": [
                ["style", "top", '171px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '170px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Beds}": [
                ["style", "left", '124px'],
                ["style", "display", 'none']
            ],
            "${_IMG_Win_F4_WOFade}": [
                ["style", "display", 'block']
            ],
            "${_IMG_Menu_Aliens}": [
                ["style", "top", '238px'],
                ["style", "opacity", '0'],
                ["style", "left", '146px'],
                ["style", "display", 'none']
            ],
            "${_IMG_BACK_PlayArea01}": [
                ["style", "display", 'none']
            ],
            "${_IMG_BACK_PlayArea05}": [
                ["style", "display", 'block']
            ],
            "${_IMG_Scores_Title}": [
                ["style", "top", '30px'],
                ["style", "left", '147px'],
                ["style", "display", 'none']
            ],
            "${_IMG_Win_F5}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1']
            ],
            "${_txt_score}": [
                ["style", "top", '25px'],
                ["style", "width", '110px'],
                ["style", "text-align", 'right'],
                ["style", "display", 'none'],
                ["style", "height", '18px'],
                ["style", "font-family", '"Press Start 2P", "Lucida Console", Monaco, monospace'],
                ["style", "left", '275px'],
                ["style", "font-size", '17px']
            ],
            "${_Transition_Blink}": [
                ["style", "display", 'none']
            ],
            "${_IMG_BACK_PlayArea06}": [
                ["style", "display", 'block']
            ],
            "${_IMG_Menu_SCORES}": [
                ["style", "top", '150px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '156px'],
                ["style", "cursor", 'pointer']
            ],
            "${_txt_highscore}": [
                ["color", "color", 'rgba(255,255,204,1.00)'],
                ["style", "left", '0px'],
                ["style", "font-size", '15px'],
                ["style", "top", '98px'],
                ["style", "text-align", 'center'],
                ["style", "height", '120px'],
                ["style", "font-family", '"Press Start 2P", "Lucida Console", Monaco, monospace'],
                ["style", "width", '406px'],
                ["style", "display", 'none']
            ],
            "${_Win_Fade}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${_IMG_BACK_PlayArea07}": [
                ["style", "display", 'block']
            ],
            "${_Nightmare}": [
                ["style", "display", 'none']
            ],
            "${_IMG_FRAME_PlayArea01}": [
                ["style", "display", 'none']
            ],
            "${_Btn_OK_Scores}": [
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none']
            ],
            "${_IMG_Keys_02}": [
                ["style", "display", 'none']
            ],
            "${_IMG_Menu_Title}": [
                ["style", "top", '86px'],
                ["style", "display", 'none'],
                ["transform", "scaleY", '0.1875'],
                ["style", "height", '50px'],
                ["transform", "scaleX", '0.1875'],
                ["style", "opacity", '0'],
                ["style", "left", '91px'],
                ["style", "width", '224px']
            ],
            "${_IMG_Sprite_Bed01_TOP}": [
                ["style", "top", '136px'],
                ["style", "left", '106px'],
                ["style", "display", 'none']
            ],
            "${_txt_name}": [
                ["style", "top", '197px'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(29,97,0,1)'],
                ["style", "height", '14px'],
                ["style", "left", '163px'],
                ["style", "width", '184px']
            ],
            "${_IMG_BACK_PlayArea04}": [
                ["style", "display", 'block']
            ],
            "${_IMG_Sprite_BunnyStill03}": [
                ["style", "top", '146px'],
                ["style", "left", '305px'],
                ["style", "display", 'none']
            ],
            "${_IMG_Menu_Bunny_F1}": [
                ["style", "display", 'none'],
                ["style", "top", '94px'],
                ["style", "left", '163px'],
                ["transform", "rotateZ", '-37deg']
            ],
            "${_IMG_Sprite_BunnyStill01}": [
                ["style", "top", '146px'],
                ["style", "left", '305px'],
                ["style", "display", 'none']
            ],
            "${_IMG_BACK_PlayArea08}": [
                ["style", "display", 'block']
            ],
            "${_IMG_Sprite_UFO_Beam}": [
                ["style", "top", '0px'],
                ["style", "left", '83px'],
                ["style", "display", 'none']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,20,43,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '331px'],
                ["style", "width", '406px']
            ],
            "${_IMG_Menu_PLAY}": [
                ["style", "top", '134px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '174px'],
                ["style", "cursor", 'pointer']
            ],
            "${_IMG_Sprite_BunnyStill06_Blink3}": [
                ["style", "top", '138px'],
                ["style", "display", 'none']
            ],
            "${_IMG_Sprite_BunnyStill06_Blink1}": [
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 32720,
            autoPlay: true,
            labels: {
                "intro": 500,
                "menu_intro": 16250,
                "menu": 21000,
                "keys": 21523,
                "scores": 21757,
                "game": 22000,
                "win": 22073
            },
            timeline: [
                { id: "eid248", tween: [ "style", "${_IMG_Menu_SCORES}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid245", tween: [ "style", "${_IMG_Menu_SCORES}", "display", 'block', { fromValue: 'none'}], position: 19586, duration: 0, easing: "easeOutQuad" },
                { id: "eid242", tween: [ "style", "${_IMG_Menu_SCORES}", "display", 'none', { fromValue: 'block'}], position: 21523, duration: 0, easing: "easeOutQuad" },
                { id: "eid281", tween: [ "style", "${_IMG_Menu_PLAY}", "opacity", '1', { fromValue: '0'}], position: 19215, duration: 477, easing: "easeOutQuad" },
                { id: "eid218", tween: [ "transform", "${_IMG_Menu_Title}", "scaleY", '0.89006', { fromValue: '0.1875'}], position: 17687, duration: 756, easing: "easeInQuad" },
                { id: "eid223", tween: [ "transform", "${_IMG_Menu_Title}", "scaleY", '1', { fromValue: '0.89006'}], position: 18443, duration: 116, easing: "easeOutQuad" },
                { id: "eid378", tween: [ "style", "${_IMG_Sprite_Bed01_TOP2}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeInQuad" },
                { id: "eid385", tween: [ "style", "${_IMG_Sprite_Bed01_TOP2}", "display", 'none', { fromValue: 'block'}], position: 16250, duration: 0, easing: "easeInQuad" },
                { id: "eid413", tween: [ "style", "${_IMG_ANIM_Blink013Copy}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0, easing: "easeInQuad" },
                { id: "eid431", tween: [ "style", "${_IMG_ANIM_Blink013Copy}", "display", 'none', { fromValue: 'block'}], position: 10800, duration: 0, easing: "easeInQuad" },
                { id: "eid183", tween: [ "style", "${_txt_highscore}", "display", 'block', { fromValue: 'none'}], position: 21757, duration: 0, easing: "easeInQuad" },
                { id: "eid184", tween: [ "style", "${_txt_highscore}", "display", 'none', { fromValue: 'block'}], position: 22000, duration: 0, easing: "easeInQuad" },
                { id: "eid76", tween: [ "style", "${_Screen_End}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid68", tween: [ "style", "${_Screen_End}", "display", 'block', { fromValue: 'none'}], position: 22000, duration: 0 },
                { id: "eid122", tween: [ "style", "${_Screen_End}", "display", 'none', { fromValue: 'block'}], position: 22073, duration: 0 },
                { id: "eid409", tween: [ "style", "${_IMG_Sprite_BunnyStill03}", "top", '125px', { fromValue: '146px'}], position: 4250, duration: 162, easing: "easeOutQuad" },
                { id: "eid411", tween: [ "style", "${_IMG_Sprite_BunnyStill03}", "top", '138px', { fromValue: '125px'}], position: 4412, duration: 173, easing: "easeInQuad" },
                { id: "eid185", tween: [ "style", "${_Btn_OK_Scores}", "display", 'block', { fromValue: 'none'}], position: 21757, duration: 0, easing: "easeInQuad" },
                { id: "eid186", tween: [ "style", "${_Btn_OK_Scores}", "display", 'none', { fromValue: 'block'}], position: 22000, duration: 0, easing: "easeInQuad" },
                { id: "eid379", tween: [ "style", "${_IMG_Sprite_BunnySleeping2}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeInQuad" },
                { id: "eid386", tween: [ "style", "${_IMG_Sprite_BunnySleeping2}", "display", 'none', { fromValue: 'block'}], position: 16250, duration: 0, easing: "easeInQuad" },
                { id: "eid381", tween: [ "style", "${_IMG_Sprite_Bed01_BOTTOM}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeInQuad" },
                { id: "eid388", tween: [ "style", "${_IMG_Sprite_Bed01_BOTTOM}", "display", 'none', { fromValue: 'block'}], position: 16250, duration: 0, easing: "easeInQuad" },
                { id: "eid257", tween: [ "style", "${_IMG_Menu_Aliens}", "display", 'block', { fromValue: 'none'}], position: 20441, duration: 0, easing: "easeOutQuad" },
                { id: "eid258", tween: [ "style", "${_IMG_Menu_Aliens}", "display", 'none', { fromValue: 'block'}], position: 21523, duration: 0, easing: "easeOutQuad" },
                { id: "eid383", tween: [ "style", "${_IMG_Sprite_Bed01_TOP}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeInQuad" },
                { id: "eid390", tween: [ "style", "${_IMG_Sprite_Bed01_TOP}", "display", 'none', { fromValue: 'block'}], position: 16250, duration: 0, easing: "easeInQuad" },
                { id: "eid133", tween: [ "style", "${_Win_Fade}", "opacity", '1', { fromValue: '0'}], position: 25730, duration: 1782, easing: "easeInQuad" },
                { id: "eid408", tween: [ "style", "${_IMG_Sprite_BunnyStill03}", "left", '283px', { fromValue: '305px'}], position: 4250, duration: 162, easing: "easeOutQuad" },
                { id: "eid410", tween: [ "style", "${_IMG_Sprite_BunnyStill03}", "left", '273px', { fromValue: '283px'}], position: 4412, duration: 173, easing: "easeInQuad" },
                { id: "eid217", tween: [ "transform", "${_IMG_Menu_Title}", "scaleX", '0.89009', { fromValue: '0.1875'}], position: 17687, duration: 756, easing: "easeInQuad" },
                { id: "eid222", tween: [ "transform", "${_IMG_Menu_Title}", "scaleX", '1', { fromValue: '0.89009'}], position: 18443, duration: 116, easing: "easeOutQuad" },
                { id: "eid421", tween: [ "style", "${_IMG_Sprite_Bunny01_Sleeping}", "top", '-21px', { fromValue: '140px'}], position: 7500, duration: 3300, easing: "easeInQuad" },
                { id: "eid145", tween: [ "style", "${_IMG_Win_F5}", "opacity", '1', { fromValue: '1'}], position: 28000, duration: 0, easing: "easeInQuad" },
                { id: "eid148", tween: [ "style", "${_IMG_Win_F5}", "opacity", '0', { fromValue: '1'}], position: 29223, duration: 586, easing: "easeInQuad" },
                { id: "eid152", tween: [ "style", "${_IMG_Win_End_Text}", "display", 'block', { fromValue: 'none'}], position: 31282, duration: 0 },
                { id: "eid87", tween: [ "style", "${_IMG_BACK_PlayArea03}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid88", tween: [ "style", "${_IMG_BACK_PlayArea03}", "display", 'block', { fromValue: 'none'}], position: 22073, duration: 0 },
                { id: "eid90", tween: [ "style", "${_IMG_BACK_PlayArea03}", "display", 'none', { fromValue: 'block'}], position: 22176, duration: 0 },
                { id: "eid151", tween: [ "style", "${_IMG_Win_OffendersWin}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid150", tween: [ "style", "${_IMG_Win_OffendersWin}", "display", 'block', { fromValue: 'none'}], position: 29809, duration: 0 },
                { id: "eid195", tween: [ "style", "${_IMG_Menu_Back}", "opacity", '1', { fromValue: '0'}], position: 16250, duration: 1057, easing: "easeOutQuad" },
                { id: "eid187", tween: [ "style", "${_IMG_Keys_02}", "display", 'block', { fromValue: 'none'}], position: 21523, duration: 0, easing: "easeInQuad" },
                { id: "eid188", tween: [ "style", "${_IMG_Keys_02}", "display", 'none', { fromValue: 'block'}], position: 21757, duration: 0, easing: "easeInQuad" },
                { id: "eid94", tween: [ "style", "${_IMG_BACK_PlayArea05}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid95", tween: [ "style", "${_IMG_BACK_PlayArea05}", "display", 'block', { fromValue: 'none'}], position: 22287, duration: 0 },
                { id: "eid96", tween: [ "style", "${_IMG_BACK_PlayArea05}", "display", 'none', { fromValue: 'block'}], position: 22399, duration: 0 },
                { id: "eid103", tween: [ "style", "${_IMG_BACK_PlayArea08}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid104", tween: [ "style", "${_IMG_BACK_PlayArea08}", "display", 'block', { fromValue: 'none'}], position: 22650, duration: 0 },
                { id: "eid105", tween: [ "style", "${_IMG_BACK_PlayArea08}", "display", 'none', { fromValue: 'block'}], position: 22780, duration: 0 },
                { id: "eid106", tween: [ "style", "${_IMG_BACK_PlayArea09}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid107", tween: [ "style", "${_IMG_BACK_PlayArea09}", "display", 'block', { fromValue: 'none'}], position: 22780, duration: 0 },
                { id: "eid108", tween: [ "style", "${_IMG_BACK_PlayArea09}", "display", 'none', { fromValue: 'block'}], position: 22910, duration: 0 },
                { id: "eid396", tween: [ "style", "${_IMG_Sprite_BunnyStill01}", "display", 'block', { fromValue: 'none'}], position: 3092, duration: 0 },
                { id: "eid398", tween: [ "style", "${_IMG_Sprite_BunnyStill01}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid286", tween: [ "style", "${_IMG_Menu_Title}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid285", tween: [ "style", "${_IMG_Menu_Title}", "display", 'block', { fromValue: 'none'}], position: 16250, duration: 0, easing: "easeOutQuad" },
                { id: "eid284", tween: [ "style", "${_IMG_Menu_Title}", "display", 'none', { fromValue: 'block'}], position: 21523, duration: 0, easing: "easeOutQuad" },
                { id: "eid424", tween: [ "style", "${_IMG_Sprite_BunnyStill04}", "display", 'block', { fromValue: 'none'}], position: 7500, duration: 0, easing: "easeInQuad" },
                { id: "eid427", tween: [ "style", "${_IMG_Sprite_BunnyStill04}", "display", 'none', { fromValue: 'block'}], position: 9349, duration: 0, easing: "easeInQuad" },
                { id: "eid452", tween: [ "style", "${_Fader}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid453", tween: [ "style", "${_Fader}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
                { id: "eid451", tween: [ "style", "${_Fader}", "display", 'none', { fromValue: 'block'}], position: 16250, duration: 0 },
                { id: "eid91", tween: [ "style", "${_IMG_BACK_PlayArea04}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid92", tween: [ "style", "${_IMG_BACK_PlayArea04}", "display", 'block', { fromValue: 'none'}], position: 22176, duration: 0 },
                { id: "eid93", tween: [ "style", "${_IMG_BACK_PlayArea04}", "display", 'none', { fromValue: 'block'}], position: 22287, duration: 0 },
                { id: "eid78", tween: [ "style", "${_Nightmare}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid70", tween: [ "style", "${_Nightmare}", "display", 'block', { fromValue: 'none'}], position: 22000, duration: 0 },
                { id: "eid85", tween: [ "style", "${_Nightmare}", "display", 'none', { fromValue: 'block'}], position: 22073, duration: 0 },
                { id: "eid97", tween: [ "style", "${_IMG_BACK_PlayArea06}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid98", tween: [ "style", "${_IMG_BACK_PlayArea06}", "display", 'block', { fromValue: 'none'}], position: 22399, duration: 0 },
                { id: "eid99", tween: [ "style", "${_IMG_BACK_PlayArea06}", "display", 'none', { fromValue: 'block'}], position: 22521, duration: 0 },
                { id: "eid135", tween: [ "style", "${_IMG_Win_F5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid136", tween: [ "style", "${_IMG_Win_F5}", "display", 'block', { fromValue: 'none'}], position: 28000, duration: 0, easing: "easeInQuad" },
                { id: "eid282", tween: [ "style", "${_IMG_Menu_KEYS}", "opacity", '1', { fromValue: '0'}], position: 19965, duration: 476, easing: "easeOutQuad" },
                { id: "eid157", tween: [ "style", "${_Btn_OK}", "display", 'block', { fromValue: 'none'}], position: 32720, duration: 0 },
                { id: "eid79", tween: [ "style", "${_txt_score}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid71", tween: [ "style", "${_txt_score}", "display", 'block', { fromValue: 'none'}], position: 22000, duration: 0 },
                { id: "eid86", tween: [ "style", "${_txt_score}", "display", 'none', { fromValue: 'block'}], position: 22073, duration: 0 },
                { id: "eid269", tween: [ "style", "${_IMG_Menu_SCORES}", "top", '210px', { fromValue: '150px'}], position: 19586, duration: 471, easing: "easeOutQuad" },
                { id: "eid395", tween: [ "style", "${_IMG_Sprite_Bunny}", "left", '305px', { fromValue: '405px'}], position: 500, duration: 2592 },
                { id: "eid435", tween: [ "style", "${_IMG_Sprite_BunnyStill06_Blink2}", "display", 'block', { fromValue: 'none'}], position: 13100, duration: 0 },
                { id: "eid438", tween: [ "style", "${_IMG_Sprite_BunnyStill06_Blink2}", "display", 'none', { fromValue: 'block'}], position: 13244, duration: 0 },
                { id: "eid442", tween: [ "style", "${_IMG_Sprite_BunnyStill06_Blink2}", "display", 'block', { fromValue: 'none'}], position: 13757, duration: 0 },
                { id: "eid443", tween: [ "style", "${_IMG_Sprite_BunnyStill06_Blink2}", "display", 'none', { fromValue: 'block'}], position: 13893, duration: 0 },
                { id: "eid80", tween: [ "style", "${_Beds}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid72", tween: [ "style", "${_Beds}", "display", 'block', { fromValue: 'none'}], position: 22000, duration: 0 },
                { id: "eid109", tween: [ "style", "${_Beds}", "display", 'none', { fromValue: 'block'}], position: 23520, duration: 0 },
                { id: "eid119", tween: [ "style", "${_IMG_Win_F4_WOFade}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid120", tween: [ "style", "${_IMG_Win_F4_WOFade}", "display", 'block', { fromValue: 'block'}], position: 25730, duration: 0 },
                { id: "eid149", tween: [ "style", "${_IMG_Win_F4_WOFade}", "display", 'none', { fromValue: 'block'}], position: 28000, duration: 0, easing: "easeInQuad" },
                { id: "eid116", tween: [ "style", "${_IMG_Win_F3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid117", tween: [ "style", "${_IMG_Win_F3}", "display", 'block', { fromValue: 'none'}], position: 24830, duration: 0 },
                { id: "eid118", tween: [ "style", "${_IMG_Win_F3}", "display", 'none', { fromValue: 'block'}], position: 25730, duration: 0 },
                { id: "eid415", tween: [ "style", "${_IMG_Sprite_UFO_Beam}", "display", 'block', { fromValue: 'none'}], position: 7500, duration: 0, easing: "easeInQuad" },
                { id: "eid432", tween: [ "style", "${_IMG_Sprite_UFO_Beam}", "display", 'none', { fromValue: 'block'}], position: 10800, duration: 0 },
                { id: "eid158", tween: [ "style", "${_IMG_Scores_Title}", "display", 'block', { fromValue: 'none'}], position: 21757, duration: 0 },
                { id: "eid159", tween: [ "style", "${_IMG_Scores_Title}", "display", 'none', { fromValue: 'block'}], position: 22000, duration: 0 },
                { id: "eid238", tween: [ "style", "${_Menu_Bunny_Poof}", "display", 'block', { fromValue: 'none'}], position: 18500, duration: 0, easing: "easeOutQuad" },
                { id: "eid239", tween: [ "style", "${_Menu_Bunny_Poof}", "display", 'none', { fromValue: 'block'}], position: 19500, duration: 0, easing: "easeOutQuad" },
                { id: "eid391", tween: [ "style", "${_IMG_Sprite_Bunny}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeInQuad" },
                { id: "eid397", tween: [ "style", "${_IMG_Sprite_Bunny}", "display", 'none', { fromValue: 'block'}], position: 3092, duration: 0 },
                { id: "eid262", tween: [ "style", "${_IMG_Menu_Aliens}", "opacity", '1', { fromValue: '0'}], position: 20441, duration: 559, easing: "easeOutQuad" },
                { id: "eid377", tween: [ "style", "${_IMG_Sprite_Bed01_BOTTOM2}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeInQuad" },
                { id: "eid384", tween: [ "style", "${_IMG_Sprite_Bed01_BOTTOM2}", "display", 'none', { fromValue: 'block'}], position: 16250, duration: 0, easing: "easeInQuad" },
                { id: "eid247", tween: [ "style", "${_IMG_Menu_PLAY}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid244", tween: [ "style", "${_IMG_Menu_PLAY}", "display", 'block', { fromValue: 'none'}], position: 19215, duration: 0, easing: "easeOutQuad" },
                { id: "eid241", tween: [ "style", "${_IMG_Menu_PLAY}", "display", 'none', { fromValue: 'block'}], position: 21523, duration: 0, easing: "easeOutQuad" },
                { id: "eid161", tween: [ "style", "${_Scores_Disguised}", "display", 'block', { fromValue: 'none'}], position: 21757, duration: 0 },
                { id: "eid162", tween: [ "style", "${_Scores_Disguised}", "display", 'none', { fromValue: 'block'}], position: 22000, duration: 0 },
                { id: "eid81", tween: [ "style", "${_IMG_FRAME_PlayArea01}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid73", tween: [ "style", "${_IMG_FRAME_PlayArea01}", "display", 'block', { fromValue: 'none'}], position: 22000, duration: 0 },
                { id: "eid83", tween: [ "style", "${_IMG_FRAME_PlayArea01}", "display", 'none', { fromValue: 'block'}], position: 22073, duration: 0 },
                { id: "eid206", tween: [ "style", "${_IMG_Menu_Bunny_F1}", "left", '182px', { fromValue: '163px'}], position: 16250, duration: 2250 },
                { id: "eid156", tween: [ "style", "${_txt_name}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid155", tween: [ "style", "${_txt_name}", "display", 'block', { fromValue: 'none'}], position: 32720, duration: 0 },
                { id: "eid437", tween: [ "style", "${_IMG_Sprite_BunnyStill06_Blink3}", "display", 'block', { fromValue: 'none'}], position: 13244, duration: 0 },
                { id: "eid439", tween: [ "style", "${_IMG_Sprite_BunnyStill06_Blink3}", "display", 'none', { fromValue: 'block'}], position: 13374, duration: 0 },
                { id: "eid444", tween: [ "style", "${_IMG_Sprite_BunnyStill06_Blink3}", "display", 'block', { fromValue: 'none'}], position: 13893, duration: 0 },
                { id: "eid445", tween: [ "style", "${_IMG_Sprite_BunnyStill06_Blink3}", "display", 'none', { fromValue: 'block'}], position: 14034, duration: 0 },
                { id: "eid111", tween: [ "style", "${_IMG_Win_F1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid110", tween: [ "style", "${_IMG_Win_F1}", "display", 'block', { fromValue: 'none'}], position: 23520, duration: 0 },
                { id: "eid112", tween: [ "style", "${_IMG_Win_F1}", "display", 'none', { fromValue: 'block'}], position: 24220, duration: 0 },
                { id: "eid430", tween: [ "style", "${_IMG_ANIM_Blink013Copy}", "opacity", '0', { fromValue: '0.097632996737957'}], position: 7500, duration: 3300 },
                { id: "eid75", tween: [ "style", "${_Screen_Score}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid67", tween: [ "style", "${_Screen_Score}", "display", 'block', { fromValue: 'none'}], position: 22000, duration: 0 },
                { id: "eid121", tween: [ "style", "${_Screen_Score}", "display", 'none', { fromValue: 'block'}], position: 22073, duration: 0 },
                { id: "eid196", tween: [ "style", "${_IMG_Menu_Bunny_F1}", "display", 'block', { fromValue: 'none'}], position: 16250, duration: 0, easing: "easeOutQuad" },
                { id: "eid208", tween: [ "style", "${_IMG_Menu_Bunny_F1}", "display", 'none', { fromValue: 'block'}], position: 18500, duration: 0 },
                { id: "eid197", tween: [ "style", "${_IMG_Menu_Bunny_F1}", "display", 'none', { fromValue: 'none'}], position: 21523, duration: 0, easing: "easeOutQuad" },
                { id: "eid100", tween: [ "style", "${_IMG_BACK_PlayArea07}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid101", tween: [ "style", "${_IMG_BACK_PlayArea07}", "display", 'block', { fromValue: 'none'}], position: 22521, duration: 0 },
                { id: "eid102", tween: [ "style", "${_IMG_BACK_PlayArea07}", "display", 'none', { fromValue: 'block'}], position: 22650, duration: 0 },
                { id: "eid191", tween: [ "style", "${_IMG_Menu_Back}", "display", 'block', { fromValue: 'none'}], position: 16250, duration: 0, easing: "easeInQuad" },
                { id: "eid192", tween: [ "style", "${_IMG_Menu_Back}", "display", 'none', { fromValue: 'block'}], position: 21523, duration: 0, easing: "easeInQuad" },
                { id: "eid283", tween: [ "style", "${_IMG_Menu_SCORES}", "opacity", '1', { fromValue: '0'}], position: 19586, duration: 471, easing: "easeOutQuad" },
                { id: "eid113", tween: [ "style", "${_IMG_Win_F2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid114", tween: [ "style", "${_IMG_Win_F2}", "display", 'block', { fromValue: 'none'}], position: 24220, duration: 0 },
                { id: "eid115", tween: [ "style", "${_IMG_Win_F2}", "display", 'none', { fromValue: 'block'}], position: 24830, duration: 0 },
                { id: "eid433", tween: [ "style", "${_IMG_Sprite_BunnyStill06_Blink1}", "display", 'block', { fromValue: 'none'}], position: 11300, duration: 0 },
                { id: "eid436", tween: [ "style", "${_IMG_Sprite_BunnyStill06_Blink1}", "display", 'none', { fromValue: 'block'}], position: 13100, duration: 0 },
                { id: "eid440", tween: [ "style", "${_IMG_Sprite_BunnyStill06_Blink1}", "display", 'block', { fromValue: 'none'}], position: 13374, duration: 0 },
                { id: "eid441", tween: [ "style", "${_IMG_Sprite_BunnyStill06_Blink1}", "display", 'none', { fromValue: 'block'}], position: 13757, duration: 0 },
                { id: "eid446", tween: [ "style", "${_IMG_Sprite_BunnyStill06_Blink1}", "display", 'block', { fromValue: 'none'}], position: 14034, duration: 0 },
                { id: "eid454", tween: [ "style", "${_IMG_Sprite_BunnyStill06_Blink1}", "display", 'none', { fromValue: 'block'}], position: 16250, duration: 0 },
                { id: "eid426", tween: [ "style", "${_IMG_Sprite_BunnyStill05}", "display", 'block', { fromValue: 'none'}], position: 9349, duration: 0, easing: "easeInQuad" },
                { id: "eid434", tween: [ "style", "${_IMG_Sprite_BunnyStill05}", "display", 'none', { fromValue: 'block'}], position: 11300, duration: 0 },
                { id: "eid450", tween: [ "style", "${_Fader}", "opacity", '1', { fromValue: '0.000000'}], position: 15000, duration: 1250 },
                { id: "eid246", tween: [ "style", "${_IMG_Menu_KEYS}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid243", tween: [ "style", "${_IMG_Menu_KEYS}", "display", 'block', { fromValue: 'none'}], position: 19965, duration: 0, easing: "easeOutQuad" },
                { id: "eid240", tween: [ "style", "${_IMG_Menu_KEYS}", "display", 'none', { fromValue: 'block'}], position: 21523, duration: 0, easing: "easeOutQuad" },
                { id: "eid271", tween: [ "style", "${_IMG_Menu_KEYS}", "top", '261px', { fromValue: '171px'}], position: 19965, duration: 476, easing: "easeOutQuad" },
                { id: "eid124", tween: [ "style", "${_Win_Fade}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid123", tween: [ "style", "${_Win_Fade}", "display", 'block', { fromValue: 'none'}], position: 25730, duration: 0 },
                { id: "eid125", tween: [ "style", "${_Win_Fade}", "display", 'block', { fromValue: 'block'}], position: 27512, duration: 0 },
                { id: "eid134", tween: [ "style", "${_Win_Fade}", "display", 'none', { fromValue: 'block'}], position: 28000, duration: 0, easing: "easeInQuad" },
                { id: "eid77", tween: [ "style", "${_Transition_Blink}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid69", tween: [ "style", "${_Transition_Blink}", "display", 'block', { fromValue: 'none'}], position: 22000, duration: 0 },
                { id: "eid84", tween: [ "style", "${_Transition_Blink}", "display", 'none', { fromValue: 'block'}], position: 22073, duration: 0 },
                { id: "eid207", tween: [ "style", "${_IMG_Menu_Bunny_F1}", "top", '86px', { fromValue: '94px'}], position: 16250, duration: 2250 },
                { id: "eid221", tween: [ "style", "${_IMG_Menu_Title}", "opacity", '0.8646939992904663', { fromValue: '0'}], position: 17687, duration: 756, easing: "easeInQuad" },
                { id: "eid224", tween: [ "style", "${_IMG_Menu_Title}", "opacity", '1', { fromValue: '0.8646939992904663'}], position: 18443, duration: 116, easing: "easeOutQuad" },
                { id: "eid401", tween: [ "style", "${_IMG_Sprite_BunnyStill03}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
                { id: "eid425", tween: [ "style", "${_IMG_Sprite_BunnyStill03}", "display", 'none', { fromValue: 'block'}], position: 7500, duration: 0, easing: "easeInQuad" },
                { id: "eid154", tween: [ "style", "${_IMG_Win_BubbleName}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid153", tween: [ "style", "${_IMG_Win_BubbleName}", "display", 'block', { fromValue: 'none'}], position: 32720, duration: 0 },
                { id: "eid270", tween: [ "style", "${_IMG_Menu_PLAY}", "top", '164px', { fromValue: '134px'}], position: 19215, duration: 477, easing: "easeOutQuad" },
                { id: "eid82", tween: [ "style", "${_IMG_BACK_PlayArea01}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid74", tween: [ "style", "${_IMG_BACK_PlayArea01}", "display", 'block', { fromValue: 'none'}], position: 22000, duration: 0 },
                { id: "eid89", tween: [ "style", "${_IMG_BACK_PlayArea01}", "display", 'none', { fromValue: 'block'}], position: 22073, duration: 0 },
                { id: "eid201", tween: [ "transform", "${_IMG_Menu_Bunny_F1}", "rotateZ", '126deg', { fromValue: '-37deg'}], position: 16250, duration: 2250, easing: "easeOutQuad" },
                { id: "eid380", tween: [ "style", "${_IMG_Sprite_BunnySleeping}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeInQuad" },
                { id: "eid387", tween: [ "style", "${_IMG_Sprite_BunnySleeping}", "display", 'none', { fromValue: 'block'}], position: 16250, duration: 0, easing: "easeInQuad" },
                { id: "eid399", tween: [ "style", "${_IMG_Sprite_BunnyStill02}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid400", tween: [ "style", "${_IMG_Sprite_BunnyStill02}", "display", 'none', { fromValue: 'block'}], position: 4250, duration: 0 },
                { id: "eid382", tween: [ "style", "${_IMG_Sprite_Bunny01_Sleeping}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeInQuad" },
                { id: "eid422", tween: [ "style", "${_IMG_Sprite_Bunny01_Sleeping}", "display", 'none', { fromValue: 'block'}], position: 10800, duration: 0, easing: "easeInQuad" },
                { id: "eid389", tween: [ "style", "${_IMG_Sprite_Bunny01_Sleeping}", "display", 'none', { fromValue: 'none'}], position: 16250, duration: 0, easing: "easeInQuad" },
                { id: "eid189", tween: [ "style", "${_Btn_OK_ScoresCopy}", "display", 'block', { fromValue: 'none'}], position: 21523, duration: 0, easing: "easeInQuad" },
                { id: "eid190", tween: [ "style", "${_Btn_OK_ScoresCopy}", "display", 'none', { fromValue: 'block'}], position: 21757, duration: 0, easing: "easeInQuad" }            ]
        }
    }
},
"Beds": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'IMG_Sprite_Bed04',
                    type: 'image',
                    rect: ['149px', '0px', '40px', '72px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/IMG_Sprite_Bunny02_Sleeping.gif', '0px', '0px']
                },
                {
                    id: 'IMG_Sprite_Bed02',
                    type: 'rect',
                    rect: ['50', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'IMG_Sprite_Bed03',
                    type: 'rect',
                    rect: ['50', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'IMG_Sprite_Bed01',
                    type: 'image',
                    rect: ['0px', '0px', '40px', '72px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/IMG_Sprite_Bed01.gif', '0px', '0px']
                }
            ],
            symbolInstances: [
            {
                id: 'IMG_Sprite_Bed02',
                symbolName: 'IMG_Sprite_Bed02',
                autoPlay: {

               }
            },
            {
                id: 'IMG_Sprite_Bed03',
                symbolName: 'IMG_Sprite_Bed02',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_IMG_Sprite_Bed01}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_IMG_Sprite_Bed04}": [
                ["style", "left", '149px'],
                ["style", "top", '0px']
            ],
            "${_IMG_Sprite_Bed03}": [
                ["style", "left", '99px']
            ],
            "${symbolSelector}": [
                ["style", "height", '72px'],
                ["style", "width", '191px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1288,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"IMG_Sprite_Bed02": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'Top',
                    type: 'image',
                    rect: ['0', '0', '40px', '72px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/IMG_Sprite_Bed01_TOP.gif', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['9px', '4px', '22px', '20px', 'auto', 'auto'],
                    id: 'Bunny',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_Sprite_Bunny01_Sleeping.gif', '0px', '0px']
                },
                {
                    id: 'Bottom',
                    type: 'image',
                    rect: ['0px', '0px', '40px', '72px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/IMG_Sprite_Bed01_BOTTOM.gif', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Bunny}": [
                ["style", "display", 'block'],
                ["style", "top", '4px'],
                ["style", "left", '9px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_Bottom}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '72px'],
                ["style", "width", '40px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1288,
            autoPlay: true,
            timeline: [
                { id: "eid15", tween: [ "style", "${_Bunny}", "display", 'none', { fromValue: 'block'}], position: 1288, duration: 0, easing: "easeInQuad" },
                { id: "eid10", tween: [ "style", "${_Bunny}", "top", '-283px', { fromValue: '4px'}], position: 0, duration: 1250, easing: "easeInQuad" },
                { id: "eid14", tween: [ "transform", "${_Bunny}", "rotateZ", '220deg', { fromValue: '0deg'}], position: 0, duration: 1250, easing: "easeInQuad" }            ]
        }
    }
},
"IMG_Sprite_Bed03": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'IMG_Sprite_Bed01_BOTTOMCopy',
                    type: 'image',
                    rect: ['0px', '0px', '40px', '72px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/IMG_Sprite_Bed01_BOTTOM.gif', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_IMG_Sprite_Bed01_BOTTOMCopy}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '72px'],
                ["style", "width", '40px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Transition_Blink": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0px', '0px', '406px', '331px', 'auto', 'auto'],
                    id: 'IMG_ANIM_Blink013',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_ANIM_Blink01.gif', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_IMG_ANIM_Blink013}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.097632996737957'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '331px'],
                ["style", "width", '406px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1200,
            autoPlay: true,
            labels: {
                "transition": 0
            },
            timeline: [
                { id: "eid16", tween: [ "style", "${_IMG_ANIM_Blink013}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid17", tween: [ "style", "${_IMG_ANIM_Blink013}", "display", 'block', { fromValue: 'none'}], position: 36, duration: 0, easing: "easeInQuad" },
                { id: "eid21", tween: [ "style", "${_IMG_ANIM_Blink013}", "opacity", '0', { fromValue: '0.097632996737957'}], position: 36, duration: 1164, easing: "easeInQuad" }            ]
        }
    }
},
"Nightmare": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    display: 'block',
                    rect: ['0px', '0px', '168px', '146px', 'auto', 'auto'],
                    id: 'IMG_ANIM_AbductionInterval01',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_ANIM_AbductionInterval01.gif', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '168px', '146px', 'auto', 'auto'],
                    id: 'IMG_ANIM_AbductionInterval02',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_ANIM_AbductionInterval02.gif', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_IMG_ANIM_AbductionInterval02}": [
                ["style", "display", 'none']
            ],
            "${_IMG_ANIM_AbductionInterval01}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '146px'],
                ["style", "width", '168px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5686,
            autoPlay: true,
            labels: {
                "start": 0
            },
            timeline: [
                { id: "eid23", tween: [ "style", "${_IMG_ANIM_AbductionInterval02}", "display", 'none', { fromValue: 'none'}], position: 42, duration: 0, easing: "easeInQuad" },
                { id: "eid26", tween: [ "style", "${_IMG_ANIM_AbductionInterval02}", "display", 'block', { fromValue: 'none'}], position: 3046, duration: 0, easing: "easeInQuad" },
                { id: "eid27", tween: [ "style", "${_IMG_ANIM_AbductionInterval02}", "display", 'none', { fromValue: 'block'}], position: 5686, duration: 0, easing: "easeInQuad" },
                { id: "eid24", tween: [ "style", "${_IMG_ANIM_AbductionInterval01}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid25", tween: [ "style", "${_IMG_ANIM_AbductionInterval01}", "display", 'block', { fromValue: 'none'}], position: 42, duration: 0, easing: "easeInQuad" },
                { id: "eid22", tween: [ "style", "${_IMG_ANIM_AbductionInterval01}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "easeInQuad" }            ]
        }
    }
},
"Ship": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'IMG_Sprite_UFO',
                    type: 'image',
                    rect: ['0px', '0px', '62px', '32px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/IMG_Sprite_UFO.gif', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '32px'],
                ["style", "width", '62px']
            ],
            "${_IMG_Sprite_UFO}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Ray": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'IMG_Sprite_UFO_Beam',
                    type: 'image',
                    rect: ['0px', '0px', '76px', '176px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/IMG_Sprite_UFO_Beam.gif', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '176px'],
                ["style", "width", '76px']
            ],
            "${_IMG_Sprite_UFO_Beam}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Bunny": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'IMG_Sprite_Bunny',
                    type: 'image',
                    rect: ['0px', '0px', '22px', '22px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/IMG_Sprite_Bunny.gif', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_IMG_Sprite_Bunny}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '22px'],
                ["style", "width", '22px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Enemy_Ship": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'IMG_Sprite_Enemy',
                    type: 'image',
                    rect: ['0px', '0px', '34px', '16px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/IMG_Sprite_Enemy.gif', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_IMG_Sprite_Enemy}": [
                ["style", "top", '0px'],
                ["style", "right", 'auto'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '16px'],
                ["style", "width", '34px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Fire": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'IMG_Sprite_Enemy_Fire',
                    type: 'image',
                    rect: ['0px', '0px', '100px', '2px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/IMG_Sprite_Enemy_Fire.gif', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_IMG_Sprite_Enemy_Fire}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '2px'],
                ["style", "width", '100px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Explode": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '32px', '34px', 'auto', 'auto'],
                    id: 'IMG_Explode_F1',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_Explode_F1.png', '0px', '0px']
                },
                {
                    rect: ['0', '0', '32px', '34px', 'auto', 'auto'],
                    id: 'IMG_Explode_F2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_Explode_F2.png', '0px', '0px']
                },
                {
                    rect: ['0', '0', '32px', '34px', 'auto', 'auto'],
                    id: 'IMG_Explode_F3',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_Explode_F3.png', '0px', '0px']
                },
                {
                    rect: ['0', '0', '32px', '34px', 'auto', 'auto'],
                    id: 'IMG_Explode_F4',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_Explode_F4.png', '0px', '0px']
                },
                {
                    rect: ['0', '0', '32px', '34px', 'auto', 'auto'],
                    id: 'IMG_Explode_F5',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_Explode_F5.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_IMG_Explode_F1}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'block']
            ],
            "${_IMG_Explode_F5}": [
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '34px'],
                ["style", "width", '32px']
            ],
            "${_IMG_Explode_F3}": [
                ["style", "display", 'none']
            ],
            "${_IMG_Explode_F2}": [
                ["style", "display", 'none']
            ],
            "${_IMG_Explode_F4}": [
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 543,
            autoPlay: true,
            labels: {
                "explode": 0
            },
            timeline: [
                { id: "eid52", tween: [ "style", "${_IMG_Explode_F3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid57", tween: [ "style", "${_IMG_Explode_F3}", "display", 'block', { fromValue: 'none'}], position: 214, duration: 0 },
                { id: "eid58", tween: [ "style", "${_IMG_Explode_F3}", "display", 'none', { fromValue: 'block'}], position: 325, duration: 0 },
                { id: "eid49", tween: [ "style", "${_IMG_Explode_F1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid54", tween: [ "style", "${_IMG_Explode_F1}", "display", 'none', { fromValue: 'block'}], position: 103, duration: 0 },
                { id: "eid50", tween: [ "style", "${_IMG_Explode_F5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid61", tween: [ "style", "${_IMG_Explode_F5}", "display", 'block', { fromValue: 'none'}], position: 439, duration: 0 },
                { id: "eid62", tween: [ "style", "${_IMG_Explode_F5}", "display", 'none', { fromValue: 'block'}], position: 543, duration: 0 },
                { id: "eid51", tween: [ "style", "${_IMG_Explode_F4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid59", tween: [ "style", "${_IMG_Explode_F4}", "display", 'block', { fromValue: 'none'}], position: 325, duration: 0 },
                { id: "eid60", tween: [ "style", "${_IMG_Explode_F4}", "display", 'none', { fromValue: 'block'}], position: 439, duration: 0 },
                { id: "eid53", tween: [ "style", "${_IMG_Explode_F2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid55", tween: [ "style", "${_IMG_Explode_F2}", "display", 'block', { fromValue: 'none'}], position: 103, duration: 0 },
                { id: "eid56", tween: [ "style", "${_IMG_Explode_F2}", "display", 'none', { fromValue: 'block'}], position: 214, duration: 0 }            ]
        }
    }
},
"Screen_End": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Background',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '0px', '406px', '331px', 'auto', 'auto'],
                    fill: ['rgba(0,20,43,1.00)']
                },
                {
                    id: 'IMG_Sprite_Bed01',
                    type: 'image',
                    rect: ['183px', '240px', '40px', '72px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/IMG_Sprite_Bed01.gif', '0px', '0px']
                },
                {
                    id: 'IMG_Scene_GameOver_TextBack',
                    type: 'image',
                    rect: ['125px', '128px', '156px', '112px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/IMG_Scene_GameOver_TextBack.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'ScoreBack',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['1px', '72px', '406px', '25px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    font: ['\'Press Start 2P\', \'Lucida Console\', Monaco, monospace', 12, 'rgba(29,97,0,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    align: 'right',
                    id: 'btn_surrender',
                    text: 'SURRENDER',
                    cursor: ['pointer'],
                    rect: ['149px', '153px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['\'Press Start 2P\', \'Lucida Console\', Monaco, monospace', 12, 'rgba(94,162,0,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    align: 'left',
                    id: 'btn_overachieve',
                    text: 'OVERACHIEVE',
                    cursor: ['pointer'],
                    rect: ['137px', '189px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['\'Press Start 2P\', \'Lucida Console\', Monaco, monospace', 12, 'rgba(94,162,0,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'txt_gamefail',
                    text: 'GAME FAIL!',
                    align: 'right',
                    rect: ['143px', '27px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    font: ['\'Press Start 2P\', \'Lucida Console\', Monaco, monospace', 24, 'rgba(29,97,0,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'txt_plyr_score',
                    text: 'You score 100!',
                    align: 'center',
                    rect: ['0px', '74px', '406px', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_IMG_Sprite_Bed01}": [
                ["style", "left", '183px'],
                ["style", "top", '240px']
            ],
            "${_btn_surrender}": [
                ["style", "top", '153px'],
                ["color", "color", 'rgba(29,97,0,1.00)'],
                ["style", "left", '149px'],
                ["style", "cursor", 'pointer'],
                ["style", "font-size", '12px']
            ],
            "${_txt_plyr_score}": [
                ["style", "top", '74px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(29,97,0,1.00)'],
                ["style", "width", '406px'],
                ["style", "left", '0px'],
                ["style", "font-size", '24px']
            ],
            "${_ScoreBack}": [
                ["style", "height", '25px'],
                ["style", "top", '72px']
            ],
            "${_btn_overachieve}": [
                ["style", "top", '189px'],
                ["style", "text-align", 'left'],
                ["color", "color", 'rgba(94,162,0,1.00)'],
                ["style", "left", '137px'],
                ["style", "cursor", 'pointer'],
                ["style", "font-size", '12px']
            ],
            "${symbolSelector}": [
                ["style", "height", '331px'],
                ["style", "width", '406px']
            ],
            "${_txt_gamefail}": [
                ["style", "top", '27px'],
                ["style", "left", '143px'],
                ["color", "color", 'rgba(94,162,0,1.00)']
            ],
            "${_IMG_Scene_GameOver_TextBack}": [
                ["style", "top", '128px'],
                ["style", "left", '125px'],
                ["style", "width", '156px']
            ],
            "${_Background}": [
                ["color", "background-color", 'rgba(0,20,43,1.00)'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Screen_Score": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Background',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '0px', '406px', '331px', 'auto', 'auto'],
                    fill: ['rgba(0,20,43,1.00)']
                },
                {
                    id: 'IMG_Scene_Submission_Alien',
                    type: 'image',
                    rect: ['229px', '234px', '40px', '66px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/IMG_Scene_Submission_Alien.gif', '0px', '0px']
                },
                {
                    id: 'IMG_Scene_Submission_TextBack',
                    type: 'image',
                    rect: ['100px', '166px', '206px', '68px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/IMG_Scene_Submission_TextBack.png', '0px', '0px']
                },
                {
                    font: ['\'Press Start 2P\', \'Lucida Console\', Monaco, monospace', 12, 'rgba(29,97,0,1.00)', '400', 'none', 'normal'],
                    type: 'text',
                    id: 'txt_name',
                    text: 'Name, plz:',
                    align: 'left',
                    rect: ['111px', '174px', '184px', '14px', 'auto', 'auto']
                },
                {
                    id: 'Btn_OK',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['318', '286', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'Btn_OK',
                symbolName: 'Btn_OK',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_IMG_Scene_Submission_TextBack}": [
                ["style", "left", '100px'],
                ["style", "top", '166px']
            ],
            "${symbolSelector}": [
                ["style", "height", '331px'],
                ["style", "width", '406px']
            ],
            "${_Btn_OK}": [
                ["style", "cursor", 'pointer']
            ],
            "${_txt_name}": [
                ["style", "top", '174px'],
                ["style", "height", '14px'],
                ["color", "color", 'rgba(29,97,0,1.00)'],
                ["style", "left", '111px'],
                ["style", "width", '184px']
            ],
            "${_IMG_Scene_Submission_Alien}": [
                ["style", "left", '229px'],
                ["style", "top", '234px']
            ],
            "${_Background}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Btn_OK": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '88px', '14px', 'auto', 'auto'],
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    font: ['\'Press Start 2P\', \'Lucida Console\', Monaco, monospace', 12, 'rgba(94,162,0,1)', '400', 'none', 'normal'],
                    type: 'text',
                    align: 'right',
                    id: 'txt_ok',
                    text: 'OK&gt;&gt;&gt;',
                    cursor: ['pointer'],
                    rect: ['3px', '2px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '88px']
            ],
            "${symbolSelector}": [
                ["style", "height", '14px'],
                ["style", "width", '88px']
            ],
            "${_txt_ok}": [
                ["style", "top", '2px'],
                ["style", "left", '3px'],
                ["style", "cursor", 'pointer']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Scores_Disguised": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    display: 'none',
                    rect: ['-10px', '-1px', '151px', '289px', 'auto', 'auto'],
                    id: 'IMG_Scores_DisguisedBeam',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_Scores_DisguisedBeam.gif', '0px', '0px']
                },
                {
                    type: 'image',
                    rect: ['33px', '192px', '66px', '116px', 'auto', 'auto'],
                    display: 'block',
                    id: 'IMG_Scores_DisguisedBunny',
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/IMG_Scores_DisguisedBunny.gif', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['14px', '284px', '103px', '32px', 'auto', 'auto'],
                    id: 'IMG_Scores_DisguisedTxt',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_Scores_DisguisedTxt.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0px', '0px', '406px', '331px', 'auto', 'auto'],
                    id: 'IMG_ANIM_Blink013',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_ANIM_Blink01.gif', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_IMG_Scores_DisguisedTxt}": [
                ["style", "top", '284px'],
                ["style", "left", '14px'],
                ["style", "display", 'block']
            ],
            "${symbolSelector}": [
                ["style", "height", '331px'],
                ["style", "width", '406px']
            ],
            "${_IMG_Scores_DisguisedBeam}": [
                ["style", "top", '-1px'],
                ["style", "left", '-10px'],
                ["style", "display", 'none']
            ],
            "${_IMG_Scores_DisguisedBunny}": [
                ["style", "top", '192px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'block'],
                ["style", "left", '33px'],
                ["style", "cursor", 'pointer']
            ],
            "${_IMG_ANIM_Blink013}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.20000000298023224'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1757,
            autoPlay: true,
            timeline: [
                { id: "eid181", tween: [ "style", "${_IMG_Scores_DisguisedBunny}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid180", tween: [ "style", "${_IMG_Scores_DisguisedBunny}", "display", 'none', { fromValue: 'block'}], position: 1757, duration: 0, easing: "easeInQuad" },
                { id: "eid178", tween: [ "style", "${_IMG_Scores_DisguisedBunny}", "top", '-114px', { fromValue: '192px'}], position: 176, duration: 1581, easing: "easeInQuad" },
                { id: "eid173", tween: [ "style", "${_IMG_Scores_DisguisedBunny}", "left", '33px', { fromValue: '33px'}], position: 176, duration: 0, easing: "easeInQuad" },
                { id: "eid176", tween: [ "style", "${_IMG_Scores_DisguisedBunny}", "left", '33px', { fromValue: '33px'}], position: 1757, duration: 0, easing: "easeInQuad" },
                { id: "eid170", tween: [ "style", "${_IMG_ANIM_Blink013}", "opacity", '0', { fromValue: '0.20000000298023224'}], position: 176, duration: 1581, easing: "easeInQuad" },
                { id: "eid182", tween: [ "style", "${_IMG_Scores_DisguisedTxt}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid172", tween: [ "style", "${_IMG_Scores_DisguisedTxt}", "display", 'none', { fromValue: 'block'}], position: 26, duration: 0, easing: "easeInQuad" },
                { id: "eid163", tween: [ "style", "${_IMG_Scores_DisguisedBeam}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid164", tween: [ "style", "${_IMG_Scores_DisguisedBeam}", "display", 'block', { fromValue: 'none'}], position: 26, duration: 0 },
                { id: "eid171", tween: [ "style", "${_IMG_Scores_DisguisedBeam}", "display", 'none', { fromValue: 'block'}], position: 1757, duration: 0, easing: "easeInQuad" },
                { id: "eid165", tween: [ "style", "${_IMG_ANIM_Blink013}", "display", 'block', { fromValue: 'none'}], position: 26, duration: 0 },
                { id: "eid160", tween: [ "style", "${_IMG_ANIM_Blink013}", "display", 'none', { fromValue: 'block'}], position: 1757, duration: 0 },
                { id: "eid179", tween: [ "transform", "${_IMG_Scores_DisguisedBunny}", "rotateZ", '154deg', { fromValue: '0deg'}], position: 176, duration: 1581, easing: "easeInQuad" }            ]
        }
    }
},
"Menu_Bunny_Poof": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    display: 'block',
                    rect: ['0px', '0px', '42px', '50px', 'auto', 'auto'],
                    id: 'IMG_Menu_Bunny_F2',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_Menu_Bunny_F2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '42px', '50px', 'auto', 'auto'],
                    id: 'IMG_Menu_Bunny_F3',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_Menu_Bunny_F3.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '42px', '50px', 'auto', 'auto'],
                    id: 'IMG_Menu_Bunny_F4',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_Menu_Bunny_F4.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '42px', '50px', 'auto', 'auto'],
                    id: 'IMG_Menu_Bunny_F5',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_Menu_Bunny_F5.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '42px', '50px', 'auto', 'auto'],
                    id: 'IMG_Menu_Bunny_F6',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_Menu_Bunny_F6.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_IMG_Menu_Bunny_F5}": [
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '50px'],
                ["style", "width", '42px']
            ],
            "${_IMG_Menu_Bunny_F3}": [
                ["style", "display", 'none']
            ],
            "${_IMG_Menu_Bunny_F4}": [
                ["style", "display", 'none']
            ],
            "${_IMG_Menu_Bunny_F2}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "display", 'block']
            ],
            "${_IMG_Menu_Bunny_F6}": [
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 663,
            autoPlay: true,
            timeline: [
                { id: "eid225", tween: [ "style", "${_IMG_Menu_Bunny_F3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid230", tween: [ "style", "${_IMG_Menu_Bunny_F3}", "display", 'block', { fromValue: 'none'}], position: 139, duration: 0, easing: "easeOutQuad" },
                { id: "eid231", tween: [ "style", "${_IMG_Menu_Bunny_F3}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0, easing: "easeOutQuad" },
                { id: "eid228", tween: [ "style", "${_IMG_Menu_Bunny_F4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid232", tween: [ "style", "${_IMG_Menu_Bunny_F4}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0, easing: "easeOutQuad" },
                { id: "eid233", tween: [ "style", "${_IMG_Menu_Bunny_F4}", "display", 'none', { fromValue: 'block'}], position: 358, duration: 0, easing: "easeOutQuad" },
                { id: "eid229", tween: [ "style", "${_IMG_Menu_Bunny_F2}", "display", 'none', { fromValue: 'block'}], position: 139, duration: 0, easing: "easeOutQuad" },
                { id: "eid226", tween: [ "style", "${_IMG_Menu_Bunny_F6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid236", tween: [ "style", "${_IMG_Menu_Bunny_F6}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutQuad" },
                { id: "eid237", tween: [ "style", "${_IMG_Menu_Bunny_F6}", "display", 'none', { fromValue: 'block'}], position: 663, duration: 0, easing: "easeOutQuad" },
                { id: "eid227", tween: [ "style", "${_IMG_Menu_Bunny_F5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid234", tween: [ "style", "${_IMG_Menu_Bunny_F5}", "display", 'block', { fromValue: 'none'}], position: 358, duration: 0, easing: "easeOutQuad" },
                { id: "eid235", tween: [ "style", "${_IMG_Menu_Bunny_F5}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0, easing: "easeOutQuad" }            ]
        }
    }
},
"Logo": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Background',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '0px', '406px', '331px', 'auto', 'auto'],
                    fill: ['rgba(0,20,43,1.00)']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['0', '0', '406px', '331px', 'auto', 'auto'],
                    id: 'IMG_AMLogo_F1',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_AMLogo_F1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '406px', '331px', 'auto', 'auto'],
                    id: 'IMG_AMLogo_F2',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_AMLogo_F2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '406px', '331px', 'auto', 'auto'],
                    id: 'IMG_AMLogo_F3',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_AMLogo_F3.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '406px', '331px', 'auto', 'auto'],
                    id: 'IMG_AMLogo_F4',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_AMLogo_F4.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '406px', '331px', 'auto', 'auto'],
                    id: 'IMG_AMLogo_F5',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_AMLogo_F5.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '406px', '331px', 'auto', 'auto'],
                    id: 'IMG_AMLogo_F6',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_AMLogo_F6.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '406px', '331px', 'auto', 'auto'],
                    id: 'IMG_AMLogo_F7',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_AMLogo_F7.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '406px', '331px', 'auto', 'auto'],
                    id: 'IMG_AMLogo_FEnd',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_AMLogo_FEnd.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '406px', '331px', 'auto', 'auto'],
                    id: 'IMG_AMLogo_MB_F1',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_AMLogo_MB_F1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['0', '0', '406px', '331px', 'auto', 'auto'],
                    id: 'IMG_AMLogo_MB_F2',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_AMLogo_MB_F2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['0', '0', '406px', '331px', 'auto', 'auto'],
                    id: 'IMG_AMLogo_MB_F3',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_AMLogo_MB_F3.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['0', '0', '406px', '331px', 'auto', 'auto'],
                    id: 'IMG_AMLogo_MB_F4',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_AMLogo_MB_F4.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['0', '0', '406px', '331px', 'auto', 'auto'],
                    id: 'IMG_AMLogo_MB_F5',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_AMLogo_MB_F5.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['0', '0', '406px', '331px', 'auto', 'auto'],
                    id: 'IMG_AMLogo_MB_F6',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_AMLogo_MB_F6.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['0', '0', '406px', '331px', 'auto', 'auto'],
                    id: 'IMG_AMLogo_MB_F7',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_AMLogo_MB_F7.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['0', '0', '406px', '331px', 'auto', 'auto'],
                    id: 'IMG_AMLogo_MB_F8',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_AMLogo_MB_F8.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['0', '0', '406px', '331px', 'auto', 'auto'],
                    id: 'IMG_AMLogo_MB_F9',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_AMLogo_MB_F9.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['0', '0', '406px', '331px', 'auto', 'auto'],
                    id: 'IMG_AMLogo_MB_F10',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_AMLogo_MB_F10.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['0', '0', '406px', '331px', 'auto', 'auto'],
                    id: 'IMG_AMLogo_MB_F11',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_AMLogo_MB_F11.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['0', '0', '406px', '331px', 'auto', 'auto'],
                    id: 'IMG_AMLogo_MB_F12',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_AMLogo_MB_F12.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['0', '0', '406px', '331px', 'auto', 'auto'],
                    id: 'IMG_AMLogo_MB_F13End',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_AMLogo_MB_F13End.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '406px', '331px', 'auto', 'auto'],
                    id: 'IMG_AMLogo_MBPR_F1',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_AMLogo_MBPR_F1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '406px', '331px', 'auto', 'auto'],
                    id: 'IMG_AMLogo_MBPR_F2',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_AMLogo_MBPR_F2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '406px', '331px', 'auto', 'auto'],
                    id: 'IMG_AMLogo_MBPR_F3',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_AMLogo_MBPR_F3.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '406px', '331px', 'auto', 'auto'],
                    id: 'IMG_AMLogo_MBPR_F4',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_AMLogo_MBPR_F4.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '406px', '331px', 'auto', 'auto'],
                    id: 'IMG_AMLogo_MBPR_F5',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_AMLogo_MBPR_F5.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '406px', '331px', 'auto', 'auto'],
                    id: 'IMG_AMLogo_MBPR_F6',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_AMLogo_MBPR_F6.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0', '0', '406px', '331px', 'auto', 'auto'],
                    id: 'IMG_AMLogo_MBPR_F7',
                    fill: ['rgba(0,0,0,0)', 'images/IMG_AMLogo_MBPR_F7.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_IMG_AMLogo_MB_F3}": [
                ["style", "display", 'block']
            ],
            "${_IMG_AMLogo_F6}": [
                ["style", "display", 'none']
            ],
            "${_IMG_AMLogo_F1}": [
                ["style", "display", 'block']
            ],
            "${_IMG_AMLogo_MB_F2}": [
                ["style", "display", 'block']
            ],
            "${_IMG_AMLogo_MB_F1}": [
                ["style", "display", 'none']
            ],
            "${_IMG_AMLogo_F4}": [
                ["style", "display", 'none']
            ],
            "${_IMG_AMLogo_F3}": [
                ["style", "display", 'none']
            ],
            "${_IMG_AMLogo_MB_F10}": [
                ["style", "display", 'block']
            ],
            "${_IMG_AMLogo_MBPR_F6}": [
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '331px'],
                ["style", "width", '406px']
            ],
            "${_IMG_AMLogo_MB_F13End}": [
                ["style", "display", 'block']
            ],
            "${_IMG_AMLogo_MB_F6}": [
                ["style", "display", 'block']
            ],
            "${_IMG_AMLogo_MBPR_F3}": [
                ["style", "display", 'none']
            ],
            "${_IMG_AMLogo_MB_F8}": [
                ["style", "display", 'block']
            ],
            "${_IMG_AMLogo_MBPR_F2}": [
                ["style", "display", 'none']
            ],
            "${_IMG_AMLogo_MB_F7}": [
                ["style", "display", 'block']
            ],
            "${_IMG_AMLogo_F5}": [
                ["style", "display", 'none']
            ],
            "${_IMG_AMLogo_MB_F9}": [
                ["style", "display", 'block']
            ],
            "${_IMG_AMLogo_FEnd}": [
                ["style", "display", 'none']
            ],
            "${_IMG_AMLogo_MBPR_F1}": [
                ["style", "display", 'none']
            ],
            "${_IMG_AMLogo_F2}": [
                ["style", "display", 'none']
            ],
            "${_IMG_AMLogo_MB_F5}": [
                ["style", "display", 'block']
            ],
            "${_IMG_AMLogo_MB_F4}": [
                ["style", "display", 'block']
            ],
            "${_IMG_AMLogo_MBPR_F5}": [
                ["style", "display", 'none']
            ],
            "${_IMG_AMLogo_MB_F11}": [
                ["style", "display", 'block']
            ],
            "${_IMG_AMLogo_MBPR_F7}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1']
            ],
            "${_IMG_AMLogo_MB_F12}": [
                ["style", "display", 'block']
            ],
            "${_IMG_AMLogo_MBPR_F4}": [
                ["style", "display", 'none']
            ],
            "${_IMG_AMLogo_F7}": [
                ["style", "display", 'none']
            ],
            "${_Background}": [
                ["color", "background-color", 'rgba(0,20,43,1.00)'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4700,
            autoPlay: true,
            timeline: [
                { id: "eid313", tween: [ "style", "${_IMG_AMLogo_MB_F12}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid348", tween: [ "style", "${_IMG_AMLogo_MB_F12}", "display", 'block', { fromValue: 'none'}], position: 1481, duration: 0, easing: "easeOutQuad" },
                { id: "eid349", tween: [ "style", "${_IMG_AMLogo_MB_F12}", "display", 'none', { fromValue: 'block'}], position: 1542, duration: 0, easing: "easeOutQuad" },
                { id: "eid353", tween: [ "style", "${_IMG_AMLogo_MBPR_F1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid359", tween: [ "style", "${_IMG_AMLogo_MBPR_F1}", "display", 'block', { fromValue: 'none'}], position: 1832, duration: 0, easing: "easeOutQuad" },
                { id: "eid360", tween: [ "style", "${_IMG_AMLogo_MBPR_F1}", "display", 'none', { fromValue: 'block'}], position: 1891, duration: 0, easing: "easeOutQuad" },
                { id: "eid312", tween: [ "style", "${_IMG_AMLogo_MB_F13End}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid350", tween: [ "style", "${_IMG_AMLogo_MB_F13End}", "display", 'block', { fromValue: 'none'}], position: 1542, duration: 0, easing: "easeOutQuad" },
                { id: "eid351", tween: [ "style", "${_IMG_AMLogo_MB_F13End}", "display", 'none', { fromValue: 'block'}], position: 1832, duration: 0, easing: "easeOutQuad" },
                { id: "eid296", tween: [ "style", "${_IMG_AMLogo_F1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid297", tween: [ "style", "${_IMG_AMLogo_F1}", "display", 'none', { fromValue: 'block'}], position: 95, duration: 0, easing: "easeOutQuad" },
                { id: "eid324", tween: [ "style", "${_IMG_AMLogo_MB_F1}", "display", 'block', { fromValue: 'none'}], position: 717, duration: 0, easing: "easeOutQuad" },
                { id: "eid326", tween: [ "style", "${_IMG_AMLogo_MB_F1}", "display", 'none', { fromValue: 'block'}], position: 801, duration: 0, easing: "easeOutQuad" },
                { id: "eid304", tween: [ "style", "${_IMG_AMLogo_F5}", "display", 'block', { fromValue: 'none'}], position: 320, duration: 0, easing: "easeOutQuad" },
                { id: "eid305", tween: [ "style", "${_IMG_AMLogo_F5}", "display", 'none', { fromValue: 'block'}], position: 393, duration: 0, easing: "easeOutQuad" },
                { id: "eid317", tween: [ "style", "${_IMG_AMLogo_MB_F8}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid339", tween: [ "style", "${_IMG_AMLogo_MB_F8}", "display", 'block', { fromValue: 'none'}], position: 1225, duration: 0, easing: "easeOutQuad" },
                { id: "eid340", tween: [ "style", "${_IMG_AMLogo_MB_F8}", "display", 'none', { fromValue: 'block'}], position: 1287, duration: 0, easing: "easeOutQuad" },
                { id: "eid357", tween: [ "style", "${_IMG_AMLogo_MBPR_F3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid363", tween: [ "style", "${_IMG_AMLogo_MBPR_F3}", "display", 'block', { fromValue: 'none'}], position: 1940, duration: 0, easing: "easeOutQuad" },
                { id: "eid364", tween: [ "style", "${_IMG_AMLogo_MBPR_F3}", "display", 'none', { fromValue: 'block'}], position: 1974, duration: 0, easing: "easeOutQuad" },
                { id: "eid323", tween: [ "style", "${_IMG_AMLogo_MB_F2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid327", tween: [ "style", "${_IMG_AMLogo_MB_F2}", "display", 'block', { fromValue: 'none'}], position: 801, duration: 0, easing: "easeOutQuad" },
                { id: "eid328", tween: [ "style", "${_IMG_AMLogo_MB_F2}", "display", 'none', { fromValue: 'block'}], position: 877, duration: 0, easing: "easeOutQuad" },
                { id: "eid310", tween: [ "style", "${_IMG_AMLogo_FEnd}", "display", 'block', { fromValue: 'none'}], position: 523, duration: 0, easing: "easeOutQuad" },
                { id: "eid325", tween: [ "style", "${_IMG_AMLogo_FEnd}", "display", 'none', { fromValue: 'block'}], position: 717, duration: 0, easing: "easeOutQuad" },
                { id: "eid308", tween: [ "style", "${_IMG_AMLogo_F7}", "display", 'block', { fromValue: 'none'}], position: 449, duration: 0, easing: "easeOutQuad" },
                { id: "eid309", tween: [ "style", "${_IMG_AMLogo_F7}", "display", 'none', { fromValue: 'block'}], position: 523, duration: 0, easing: "easeOutQuad" },
                { id: "eid306", tween: [ "style", "${_IMG_AMLogo_F6}", "display", 'block', { fromValue: 'none'}], position: 393, duration: 0, easing: "easeOutQuad" },
                { id: "eid307", tween: [ "style", "${_IMG_AMLogo_F6}", "display", 'none', { fromValue: 'block'}], position: 449, duration: 0, easing: "easeOutQuad" },
                { id: "eid354", tween: [ "style", "${_IMG_AMLogo_MBPR_F6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid369", tween: [ "style", "${_IMG_AMLogo_MBPR_F6}", "display", 'block', { fromValue: 'none'}], position: 2027, duration: 0, easing: "easeOutQuad" },
                { id: "eid370", tween: [ "style", "${_IMG_AMLogo_MBPR_F6}", "display", 'none', { fromValue: 'block'}], position: 2052, duration: 0, easing: "easeOutQuad" },
                { id: "eid316", tween: [ "style", "${_IMG_AMLogo_MB_F9}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid341", tween: [ "style", "${_IMG_AMLogo_MB_F9}", "display", 'block', { fromValue: 'none'}], position: 1287, duration: 0, easing: "easeOutQuad" },
                { id: "eid342", tween: [ "style", "${_IMG_AMLogo_MB_F9}", "display", 'none', { fromValue: 'block'}], position: 1365, duration: 0, easing: "easeOutQuad" },
                { id: "eid315", tween: [ "style", "${_IMG_AMLogo_MB_F10}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid343", tween: [ "style", "${_IMG_AMLogo_MB_F10}", "display", 'block', { fromValue: 'none'}], position: 1365, duration: 0, easing: "easeOutQuad" },
                { id: "eid346", tween: [ "style", "${_IMG_AMLogo_MB_F10}", "display", 'none', { fromValue: 'block'}], position: 1431, duration: 0, easing: "easeOutQuad" },
                { id: "eid302", tween: [ "style", "${_IMG_AMLogo_F4}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0, easing: "easeOutQuad" },
                { id: "eid303", tween: [ "style", "${_IMG_AMLogo_F4}", "display", 'none', { fromValue: 'block'}], position: 320, duration: 0, easing: "easeOutQuad" },
                { id: "eid319", tween: [ "style", "${_IMG_AMLogo_MB_F6}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid334", tween: [ "style", "${_IMG_AMLogo_MB_F6}", "display", 'block', { fromValue: 'none'}], position: 1092, duration: 0, easing: "easeOutQuad" },
                { id: "eid335", tween: [ "style", "${_IMG_AMLogo_MB_F6}", "display", 'none', { fromValue: 'block'}], position: 1159, duration: 0, easing: "easeOutQuad" },
                { id: "eid300", tween: [ "style", "${_IMG_AMLogo_F3}", "display", 'block', { fromValue: 'none'}], position: 183, duration: 0, easing: "easeOutQuad" },
                { id: "eid301", tween: [ "style", "${_IMG_AMLogo_F3}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0, easing: "easeOutQuad" },
                { id: "eid352", tween: [ "style", "${_IMG_AMLogo_MBPR_F7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid371", tween: [ "style", "${_IMG_AMLogo_MBPR_F7}", "display", 'block', { fromValue: 'none'}], position: 2052, duration: 0, easing: "easeOutQuad" },
                { id: "eid376", tween: [ "style", "${_IMG_AMLogo_MBPR_F7}", "display", 'none', { fromValue: 'block'}], position: 4405, duration: 0, easing: "easeInQuad" },
                { id: "eid314", tween: [ "style", "${_IMG_AMLogo_MB_F11}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid344", tween: [ "style", "${_IMG_AMLogo_MB_F11}", "display", 'block', { fromValue: 'none'}], position: 1431, duration: 0, easing: "easeOutQuad" },
                { id: "eid347", tween: [ "style", "${_IMG_AMLogo_MB_F11}", "display", 'none', { fromValue: 'block'}], position: 1481, duration: 0, easing: "easeOutQuad" },
                { id: "eid298", tween: [ "style", "${_IMG_AMLogo_F2}", "display", 'block', { fromValue: 'none'}], position: 95, duration: 0, easing: "easeOutQuad" },
                { id: "eid299", tween: [ "style", "${_IMG_AMLogo_F2}", "display", 'none', { fromValue: 'block'}], position: 183, duration: 0, easing: "easeOutQuad" },
                { id: "eid355", tween: [ "style", "${_IMG_AMLogo_MBPR_F5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid367", tween: [ "style", "${_IMG_AMLogo_MBPR_F5}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeOutQuad" },
                { id: "eid368", tween: [ "style", "${_IMG_AMLogo_MBPR_F5}", "display", 'none', { fromValue: 'block'}], position: 2027, duration: 0, easing: "easeOutQuad" },
                { id: "eid356", tween: [ "style", "${_IMG_AMLogo_MBPR_F4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid365", tween: [ "style", "${_IMG_AMLogo_MBPR_F4}", "display", 'block', { fromValue: 'none'}], position: 1974, duration: 0, easing: "easeOutQuad" },
                { id: "eid366", tween: [ "style", "${_IMG_AMLogo_MBPR_F4}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0, easing: "easeOutQuad" },
                { id: "eid318", tween: [ "style", "${_IMG_AMLogo_MB_F7}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid336", tween: [ "style", "${_IMG_AMLogo_MB_F7}", "display", 'block', { fromValue: 'none'}], position: 1159, duration: 0, easing: "easeOutQuad" },
                { id: "eid338", tween: [ "style", "${_IMG_AMLogo_MB_F7}", "display", 'none', { fromValue: 'block'}], position: 1225, duration: 0, easing: "easeOutQuad" },
                { id: "eid321", tween: [ "style", "${_IMG_AMLogo_MB_F4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid331", tween: [ "style", "${_IMG_AMLogo_MB_F4}", "display", 'block', { fromValue: 'none'}], position: 951, duration: 0, easing: "easeOutQuad" },
                { id: "eid332", tween: [ "style", "${_IMG_AMLogo_MB_F4}", "display", 'none', { fromValue: 'block'}], position: 1023, duration: 0, easing: "easeOutQuad" },
                { id: "eid375", tween: [ "style", "${_IMG_AMLogo_MBPR_F7}", "opacity", '0', { fromValue: '1'}], position: 3520, duration: 883, easing: "easeInQuad" },
                { id: "eid320", tween: [ "style", "${_IMG_AMLogo_MB_F5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid333", tween: [ "style", "${_IMG_AMLogo_MB_F5}", "display", 'block', { fromValue: 'none'}], position: 1023, duration: 0, easing: "easeOutQuad" },
                { id: "eid337", tween: [ "style", "${_IMG_AMLogo_MB_F5}", "display", 'none', { fromValue: 'block'}], position: 1092, duration: 0, easing: "easeOutQuad" },
                { id: "eid322", tween: [ "style", "${_IMG_AMLogo_MB_F3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid329", tween: [ "style", "${_IMG_AMLogo_MB_F3}", "display", 'block', { fromValue: 'none'}], position: 877, duration: 0, easing: "easeOutQuad" },
                { id: "eid330", tween: [ "style", "${_IMG_AMLogo_MB_F3}", "display", 'none', { fromValue: 'block'}], position: 951, duration: 0, easing: "easeOutQuad" },
                { id: "eid358", tween: [ "style", "${_IMG_AMLogo_MBPR_F2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid361", tween: [ "style", "${_IMG_AMLogo_MBPR_F2}", "display", 'block', { fromValue: 'none'}], position: 1891, duration: 0, easing: "easeOutQuad" },
                { id: "eid362", tween: [ "style", "${_IMG_AMLogo_MBPR_F2}", "display", 'none', { fromValue: 'block'}], position: 1940, duration: 0, easing: "easeOutQuad" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-8051110");
