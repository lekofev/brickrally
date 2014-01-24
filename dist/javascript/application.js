(function() {
  var Init, Menu, Playing, Preload, game, init, preload;

  game = new Phaser.Game(480, 800, Phaser.CANVAS);

  Init = (function() {
    function Init(game) {
      this.game = game;
      console.log("cponms");
    }

    Init.prototype.preload = function() {
      console.log("preload");
      console.log("preload");
      return game.stage.backgroundColor = "#ffffff";
    };

    Init.prototype.create = function() {
      console.log("create");
      return game.state.start('preload', true, true);
    };

    Init.prototype.update = function() {
      return console.log("update");
    };

    return Init;

  })();

  Preload = (function() {
    function Preload(game) {
      this.game = game;
      console.log("preloader cponms");
    }

    Preload.prototype.preload = function() {
      return console.log("preloader preload");
    };

    Preload.prototype.create = function() {
      return console.log("preloadercreate");
    };

    Preload.prototype.update = function() {
      return console.log("preloader update");
    };

    return Preload;

  })();

  Menu = (function() {
    function Menu(game) {
      this.game = game;
      console.log("Menu cponms");
    }

    Menu.prototype.preload = function() {
      return console.log("Menu preload");
    };

    Menu.prototype.create = function() {
      return console.log("Menu");
    };

    return Menu;

  })();

  Playing = (function() {
    function Playing(game) {
      this.game = game;
      console.log("Menu cponms");
    }

    Playing.prototype.preload = function() {
      return console.log("Menu preload");
    };

    Playing.prototype.create = function() {
      return console.log("Menu");
    };

    return Playing;

  })();

  init = new Init(game);

  preload = new Preload(game);

  game.state.add('init', init, false);

  game.state.add('preload', preload, false);

  game.state.start('init', true, true);

}).call(this);
