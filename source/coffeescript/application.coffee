
# class Animal
#   constructor: (@name) ->

#   move: (meters) ->
#     console.log @name + " moved #{meters}m."

# class Snake extends Animal
#   move: ->
#     console.log "Slithering..."
#     super 5

# class Horse extends Animal
#   move: ->
#     console.log "Galloping..."
#     super 45

# sam = new Snake "Sammy the Python"
# tom = new Horse "Tommy the Palomino"

# sam.move()
# tom.move()

class Init
	constructor:(@game) ->
		console.log "cponms"
	preload: ->
		console.log "preload"
		@game.stage.backgroundColor = "#ffffff"
		@game.load.image 'road', 'images/road.jpg'
		@game.load.image 'car', 'images/car.jpg'
		@game.load.image 'enemy', 'images/enemigo.jpg'


		@game.load.image 'px', 'images/px.jpg'


	create: ->
		# console.log game.world.width, game.world.height, parseInt(game.world.width/12), parseInt(game.world.height/24)
		console.log "create"
		@game.state.start 'playing', true, true



class Preload
	constructor:(@game) ->
		console.log "preloader cponms"
	preload: ->
		console.log "preloader preload"

	create: ->
		console.log "preloadercreate"

	update: ->
		console.log "preloader update"

class Menu
	constructor:(@game) ->
		console.log "Menu cponms"
	preload: ->
		console.log "Menu preload"

	create: ->
		console.log "Menu"

class Playing
	constructor:(@game) ->
		console.log "Playing cponms"
	preload: ->
		console.log "Playing preload"

	create: ->
		console.log "Playing"
		pxWidth = parseInt(@game.world.width/12)
		pxHeight = parseInt(@game.world.height/24)
		
		roadManager.create(@game, pxWidth, pxHeight)
		carManager.create(@game, pxWidth, pxHeight)
		enemyManager.create(@game, pxWidth, pxHeight, carManager.getCar())

		@px1 = @game.add.sprite @game.world.width/2, @game.world.height/2,'px'
		@px1.name = 'px1'
		@px2 = @game.add.sprite @game.world.width/2, @game.world.height/2-200,'px'
		@px2.name = 'px2'
		@px2.body.velocity.y = 100

	update: ->
		carManager.update(carWay)
		roadManager.update(speed)
		enemyManager.update(speed, 50)
		# console.log "Playing update", @roadManager.getX()
		# @px2.y++
		@game.physics.collide(@px1, @px2, @collisionHandler, null, this)
		# @game.physics.collide(sprite1, sprite2, collisionHandler, null, this);


	collisionHandler: ->
		console.log "crashssssssssssssssssss"
		
	render: ->
		@game.debug.renderRectangle(@px1.body)
		@game.debug.renderRectangle(@px2.body)






# start= game;
# preload.boot = game;
# # welcome.boot = game;
# # cinematica.boot = game;
# playing.boot = game;

# game.state.add('preload', preload, false);
# game.state.add('start', start, false);    
# game.state.add('welcome', welcome, false);
# game.state.add('cinematica', cinematica, false);
# game.state.add('playing', playing, true);

game = new Phaser.Game 480, 800, Phaser.CANVAS

init = new Init game
preload = new Preload game
playing = new Playing game

roadManager = new RoadManager
carManager = new CarManager
enemyManager = new EnemyManager

carWay = -1
speed = 5;
hola = "hola"

# roadManager = new RoadManager game, playing.px

game.state.add 'init', init, true
game.state.add 'preload', preload, false
game.state.add 'playing', playing, false


# game.state.start('init', true, true);

$(document).ready ->
	$$('canvas').tap ->        
		carWay = carWay*-1
		console.log 'the tap', carWay, hola