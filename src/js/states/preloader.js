var Preloader = function () {
  this.asset = null;
  this.ready = false;
};

module.exports = Preloader;

Preloader.prototype = {

  preload: function () {
    this.asset = this.add.sprite(320, 240, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.load.setPreloadSprite(this.asset);
    this.load.image('testsprite', 'assets/test.png');
    this.load.image('logo', 'assets/TeamSkeltal.png');
    this.load.image('menulogo', 'assets/gamelogo.png');
    this.load.image('menuback', 'assets/background-ruby.png');
    this.load.spritesheet('menuplay', 'assets/menu/playbutton.png', 338, 170);
    this.load.spritesheet('menusettings', 'assets/menu/settingsbutton.png', 338, 170);
    this.load.spritesheet('menucredits', 'assets/menu/creditsbutton.png', 338, 170);
    this.load.audio('bwing', 'assets/audio/bwing.mp3');
    this.load.audio('menutheme', 'assets/audio/Kawai Kitsune.mp3');
    this.load.audio('airhorn', 'assets/audio/MLG Air Horn.mp3');


  },

  create: function () {
    this.asset.cropEnabled = false;
  },

  update: function () {
    if (!!this.ready) {
      this.game.state.start('Splash');
    }
  },

  onLoadComplete: function () {
    this.ready = true;
  }
};
