class RoadManager
	constructor:->
		@contadorSpeed = 0
		@arrRoadL = []
		@arrRoadR = []


	create:(@game, @pxWidth, @pxHeight)  ->
		console.log "creating road"
		j = 0
		# while j<2
		@arrRoadL.push(@game.add.sprite @pxWidth*1, 0,'road')		
		@arrRoadL.push(@game.add.sprite @pxWidth*1, -@pxHeight*24,'road')

		@arrRoadR.push(@game.add.sprite @pxWidth*10, 0,'road')	
		@arrRoadR.push(@game.add.sprite @pxWidth*10, -@pxHeight*24,'road')		
			# j++


		while j < 2
			@arrRoadL[j].width = @pxWidth*1
			@arrRoadL[j].height = @pxHeight*24

			@arrRoadR[j].width = @pxWidth*1
			@arrRoadR[j].height = @pxHeight*24
			j++
		# @arrRoadL.push(@game.add.sprite @pxWidth*1, 0,'road')		
		# @arrRoadR.push(@game.add.sprite @pxWidth*10, 0,'road')
		
		# @road.width = @pxWidth*1
		# @road.height = @pxHeight*24

	update: (@speed)->
		@contadorSpeed++
		if @contadorSpeed is @speed		
			@roadUpdate()
			@contadorSpeed = 0

	roadUpdate: ->
		# console.log "mover road"
		i = 0
		while i<2
			@arrRoadL[i].y =  @arrRoadL[i].y + @pxHeight*1
			@arrRoadR[i].y =  @arrRoadR[i].y + @pxHeight*1 
		
			i++

		if @arrRoadL[0].y > @game.world.height
			@arrRoadL[0].y = 0
			@arrRoadL[1].y = -@arrRoadL[0].height

			@arrRoadR[0].y = 0
			@arrRoadR[1].y = -@arrRoadR[0].height

	getX: ->


		# @road.y = @road.y + @pxHeight*1
	
	# roadLoop: ->





this.RoadManager = RoadManager
