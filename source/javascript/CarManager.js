(function() {
  var CarManager, EnemyManager;

  CarManager = (function() {
    function CarManager() {}

    CarManager.prototype.create = function(game, pxWidth, pxHeight) {
      this.game = game;
      this.pxWidth = pxWidth;
      this.pxHeight = pxHeight;
      this.car = this.game.add.sprite(this.pxWidth * 3, this.pxHeight * 18, 'car');
      this.car.width = this.pxWidth * 3;
      return this.car.height = this.pxHeight * 4;
    };

    CarManager.prototype.update = function(carWay) {
      this.carWay = carWay;
      if (this.carWay === -1) {
        return this.car.x = this.pxWidth * 3;
      } else if (this.carWay === 1) {
        return this.car.x = this.pxWidth * 6;
      }
    };

    CarManager.prototype.getCar = function() {
      return this.car;
    };

    return CarManager;

  })();

  EnemyManager = (function() {
    function EnemyManager() {
      this.contEnemyTime = 0;
      this.contGlobalSpeed = 0;
      this.arrEnemies = [];
    }

    EnemyManager.prototype.create = function(game, pxWidth, pxHeight, car) {
      this.game = game;
      this.pxWidth = pxWidth;
      this.pxHeight = pxHeight;
      this.car = car;
    };

    EnemyManager.prototype.update = function(speed, enemyTime) {
      this.speed = speed;
      this.enemyTime = enemyTime;
      this.contGlobalSpeed++;
      this.contEnemyTime++;
      if (this.contEnemyTime === this.enemyTime) {
        this.createEnemy();
        this.contEnemyTime = 0;
      }
      if (this.contGlobalSpeed === this.speed) {
        this.moveEnemy();
        this.contGlobalSpeed = 0;
      }
      if (this.arrEnemies.length > 0) {
        return this.collision();
      }
    };

    EnemyManager.prototype.createEnemy = function() {
      var t, tt;
      if (this.lastEnemyCar().y > this.pxHeight * 6 || this.lastEnemyCar() === 0) {
        if (this.randomInteger(0, 1) === 0) {
          t = this.game.add.sprite(this.pxWidth * 3, -this.pxHeight * 0, 'enemy');
          t.width = this.pxWidth * 3;
          t.height = this.pxHeight * 4;
          return this.arrEnemies.push(t);
        } else {
          tt = this.game.add.sprite(this.pxWidth * 6, -this.pxHeight * 0, 'enemy');
          tt.width = this.pxWidth * 3;
          tt.height = this.pxHeight * 4;
          return this.arrEnemies.push(tt);
        }
      }
    };

    EnemyManager.prototype.moveEnemy = function() {
      var k, _results;
      if (this.arrEnemies.length > 0) {
        k = 0;
        _results = [];
        while (k < this.arrEnemies.length) {
          this.arrEnemies[k].y = this.arrEnemies[k].y + this.pxHeight * 1;
          if (this.arrEnemies[k].y > this.game.world.height) {
            this.arrEnemies.splice(k, 1);
          }
          _results.push(k++);
        }
        return _results;
      }
    };

    EnemyManager.prototype.randomInteger = function(min, max) {
      return Math.floor(Math.random() * (1 + max - min) + min);
    };

    EnemyManager.prototype.lastEnemyCar = function() {
      var last;
      if (this.arrEnemies.length > 0) {
        last = this.arrEnemies.length - 1;
        return this.arrEnemies[last];
      } else {
        return 0;
      }
    };

    EnemyManager.prototype.collision = function() {
      return this.game.physics.collide(this.arrEnemies[0], this.car, this.collisionHandler, null, this);
    };

    EnemyManager.prototype.collisionHandler = function(a, b) {
      return console.log("choque");
    };

    return EnemyManager;

  })();

  this.CarManager = CarManager;

  this.EnemyManager = EnemyManager;

}).call(this);

/*
//@ sourceMappingURL=CarManager.js.map
*/