'use strict';

cc.Class({
    'extends': cc.Component,

    properties: {},

    playAgain: function playAgain() {
        cc.director.loadScene('youxi');
    },
    // use this for initialization
    onLoad: function onLoad() {}

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },