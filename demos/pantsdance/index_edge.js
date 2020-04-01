/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Dance_Background',
                type: 'image',
                rect: ['0px', '0px','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Dance_Background.gif",'0px','0px']
            },
            {
                id: 'Cool_Dancer',
                type: 'image',
                rect: ['42%', '26.7%','153px','297px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Cool_Dancer.gif",'0px','0px']
            },
            {
                id: 'AUD_NAME_012',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['0', '0','320px','45px','auto', 'auto'],
                autoplay: 'autoplay',
                loop: 'loop',
                source: ['images/AUD_NAME_01.wav'],
                preload: 'auto'
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '100%'],
                ["style", "height", '100%'],
                ["style", "overflow", 'hidden']
            ],
            "${_Cool_Dancer}": [
                ["style", "left", '41.98%'],
                ["style", "top", '26.72%']
            ],
            "${_Dance_Background}": [
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
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-19822938");
