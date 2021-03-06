cc.Class({
    extends: cc.Component,

    properties: {
        buttonAudio:{
            default: null,
            url: cc.AudioClip
        },
        audioMng: {
            default: null,
            type: cc.Node
        }
    },
    
    onNewGame: function(){
        cc.director.loadScene('GamePlay');
    },
    
    onSettings: function(){
        cc.director.loadScene('Settings');
    },
    
    onButtonEffect: function(){
        cc.audioEngine.playEffect(this.buttonAudio);
    },
    // playMusic: function(){
    //     //播放背景音乐，true代表循环无限次播放，false表示只播放一次。
    //     // if (GC.SOUND_ON){
    //         // if (cc.audioEngine.isMusicPlaying()){
    //         //     return;
    //         // }
    //         cc.audioEngine.playMusic(this.bgAudio, true);
    //     // }
    // },
    // pauseMusic: function(){
    //     cc.audioEngine.pauseMusic();
    // },
    

    // use this for initialization
    onLoad: function () {
        this.audioMng = this.audioMng.getComponent('AudioMng');
        this.audioMng.playMusic();
        
        // this.playMusic();
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
