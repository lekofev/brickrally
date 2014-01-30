(function() {
  var RoadManager;

  RoadManager = (function() {
    function RoadManager() {
      this.contadorSpeed = 0;
      this.arrRoadL = [];
      this.arrRoadR = [];
    }

    RoadManager.prototype.create = function(game, pxWidth, pxHeight) {
      var j, _results;
      this.game = game;
      this.pxWidth = pxWidth;
      this.pxHeight = pxHeight;
      console.log("creating road");
      j = 0;
      this.arrRoadL.push(this.game.add.sprite(this.pxWidth * 1, 0, 'road'));
      this.arrRoadL.push(this.game.add.sprite(this.pxWidth * 1, -this.pxHeight * 24, 'road'));
      this.arrRoadR.push(this.game.add.sprite(this.pxWidth * 10, 0, 'road'));
      this.arrRoadR.push(this.game.add.sprite(this.pxWidth * 10, -this.pxHeight * 24, 'road'));
      _results = [];
      while (j < 2) {
        this.arrRoadL[j].width = this.pxWidth * 1;
        this.arrRoadL[j].height = this.pxHeight * 24;
        this.arrRoadR[j].width = this.pxWidth * 1;
        this.arrRoadR[j].height = this.pxHeight * 24;
        _results.push(j++);
      }
      return _results;
    };

    RoadManager.prototype.update = function(speed) {
      this.speed = speed;
      this.contadorSpeed++;
      if (this.contadorSpeed === this.speed) {
        this.roadUpdate();
        return this.contadorSpeed = 0;
      }
    };

    RoadManager.prototype.roadUpdate = function() {
      var i;
      i = 0;
      while (i < 2) {
        this.arrRoadL[i].y = this.arrRoadL[i].y + this.pxHeight * 1;
        this.arrRoadR[i].y = this.arrRoadR[i].y + this.pxHeight * 1;
        i++;
      }
      if (this.arrRoadL[0].y > this.game.world.height) {
        this.arrRoadL[0].y = 0;
        this.arrRoadL[1].y = -this.arrRoadL[0].height;
        this.arrRoadR[0].y = 0;
        return this.arrRoadR[1].y = -this.arrRoadR[0].height;
      }
    };

    RoadManager.prototype.getX = function() {};

    return RoadManager;

  })();

  this.RoadManager = RoadManager;

}).call(this);

/*
//@ sourceMappingURL=RoadManager.js.map
*/