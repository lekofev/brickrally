
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

game = new Phaser.Game 480, 800, Phaser.CANVAS
class Init
	constructor:(@game) ->
		console.log "cponms"
	preload: ->
		console.log "preload"
		console.log "preload"
		game.stage.backgroundColor = "#ffffff"

	create: ->
		console.log "create"
		game.state.start('preload', true, true);

	update: ->
		console.log "update"


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
		console.log "Menu cponms"
	preload: ->
		console.log "Menu preload"

	create: ->
		console.log "Menu"






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
init = new Init game
preload = new Preload game


game.state.add 'init', init, false
game.state.add 'preload', preload, false

game.state.start('init', true, true);