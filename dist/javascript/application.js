(function() {
  var Init, Menu, Playing, Preload, carManager, carWay, enemyManager, game, hola, init, playing, preload, roadManager, speed;

  Init = (function() {
    function Init(game) {
      this.game = game;
      console.log("cponms");
    }

    Init.prototype.preload = function() {
      console.log("preload");
      this.game.stage.backgroundColor = "#ffffff";
      this.game.load.image('road', 'images/road.jpg');
      this.game.load.image('car', 'images/car.jpg');
      this.game.load.image('enemy', 'images/enemigo.jpg');
      return this.game.load.image('px', 'images/px.jpg');
    };

    Init.prototype.create = function() {
      console.log("create");
      return this.game.state.start('playing', true, true);
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
      console.log("Playing cponms");
    }

    Playing.prototype.preload = function() {
      return console.log("Playing preload");
    };

    Playing.prototype.create = function() {
      var pxHeight, pxWidth;
      console.log("Playing");
      pxWidth = parseInt(this.game.world.width / 12);
      pxHeight = parseInt(this.game.world.height / 24);
      roadManager.create(this.game, pxWidth, pxHeight);
      carManager.create(this.game, pxWidth, pxHeight);
      enemyManager.create(this.game, pxWidth, pxHeight, carManager.getCar());
      this.px1 = this.game.add.sprite(this.game.world.width / 2, this.game.world.height / 2, 'px');
      this.px1.name = 'px1';
      this.px2 = this.game.add.sprite(this.game.world.width / 2, this.game.world.height / 2 - 200, 'px');
      this.px2.name = 'px2';
      return this.px2.body.velocity.y = 100;
    };

    Playing.prototype.update = function() {
      carManager.update(carWay);
      roadManager.update(speed);
      enemyManager.update(speed, 50);
      return this.game.physics.collide(this.px1, this.px2, this.collisionHandler, null, this);
    };

    Playing.prototype.collisionHandler = function() {
      return console.log("crashssssssssssssssssss");
    };

    Playing.prototype.render = function() {
      this.game.debug.renderRectangle(this.px1.body);
      return this.game.debug.renderRectangle(this.px2.body);
    };

    return Playing;

  })();

  game = new Phaser.Game(480, 800, Phaser.CANVAS);

  init = new Init(game);

  preload = new Preload(game);

  playing = new Playing(game);

  roadManager = new RoadManager;

  carManager = new CarManager;

  enemyManager = new EnemyManager;

  carWay = -1;

  speed = 5;

  hola = "hola";

  game.state.add('init', init, true);

  game.state.add('preload', preload, false);

  game.state.add('playing', playing, false);

  $(document).ready(function() {
    return $$('canvas').tap(function() {
      carWay = carWay * -1;
      return console.log('the tap', carWay, hola);
    });
  });

}).call(this);
