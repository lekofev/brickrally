
class CarManager
	constructor: ->


	create: (@game, @pxWidth, @pxHeight) ->
		# console.log "creating car"

		@car = @game.add.sprite @pxWidth*3, @pxHeight*18,'car'
		@car.width = @pxWidth*3;
		@car.height = @pxHeight*4;


	update: (@carWay)->
		# @px.y = @px.y + 1
		# console.log @carWay
		if @carWay is -1
			@car.x = @pxWidth*3
		else if @carWay is 1
			@car.x = @pxWidth*6

	getCar: ->
		return @car
		

class EnemyManager
	constructor: ->
		@contEnemyTime = 0
		@contGlobalSpeed = 0
		@arrEnemies = [];

	create: (@game, @pxWidth, @pxHeight, @car) ->

	update: (@speed, @enemyTime)->
		@contGlobalSpeed++
		@contEnemyTime++
		if @contEnemyTime is @enemyTime	
			@createEnemy()

			@contEnemyTime = 0

		if @contGlobalSpeed is @speed
			@moveEnemy()

			@contGlobalSpeed = 0

		if @arrEnemies.length > 0
			@collision()


	createEnemy:() ->
		# console.log "create enemy"
		# console.log @lastEnemyCar(), @lastEnemyCar().y
		if @lastEnemyCar().y > @pxHeight*6	or @lastEnemyCar() is 0
			if @randomInteger(0,1) is 0
				t = @game.add.sprite @pxWidth*3, -@pxHeight*0, 'enemy'
				t.width = @pxWidth*3;
				t.height = @pxHeight*4;
				@arrEnemies.push(t)

			else
				tt = @game.add.sprite @pxWidth*6, -@pxHeight*0, 'enemy'
				tt.width = @pxWidth*3;
				tt.height = @pxHeight*4;
				@arrEnemies.push(tt)


	moveEnemy: ->
		# console.log "move enemy"
		if @arrEnemies.length > 0
			k = 0
			while k < @arrEnemies.length
				@arrEnemies[k].y = @arrEnemies[k].y + @pxHeight*1
				if @arrEnemies[k].y > @game.world.height
					@arrEnemies.splice(k,1)
				k++

		# console.log @arrEnemies.length

	randomInteger:(min, max) ->
    	return Math.floor(Math.random() * (1 + max - min) + min);

    lastEnemyCar: ->
    	if @arrEnemies.length > 0
    		last = @arrEnemies.length-1
    		return @arrEnemies[last]
    	else
    		return 0

    collision: ->
    	# console.log @arrEnemies[0]
    	@game.physics.collide(@arrEnemies[0], @car, @collisionHandler, null, this);
    	# m = 0
    	# while m < @arrEnemies.length 
    	# 	# console.log "call collision", @arrEnemies[m], @car
    	# 	@game.physics.collide(@arrEnemies[m], @car, @collisionHandler, null, this);
    	# 	m++

    collisionHandler: (a, b)->
    	console.log "choque"
    	# @game.paused = true





    	

this.CarManager = CarManager
this.EnemyManager = EnemyManager