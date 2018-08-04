var pointCoord = [
    [ 50, 50 ], [ 200, 130 ], [ 400, 130 ], [ 100, 300 ]
];

( function setWay () {
    for ( var coord of pointCoord ) {
	    var point = document.createElement('div')
			point.className = 'point'
			point.style.left = coord [0] + 'px'
			point.style.top =  coord [1] + 'px'
			document.body.appendChild (point)
	}
})()

var personage = {};
( function setPersonage () {
    personage = document.createElement ('img')
    personage.src = "http://i.imgur.com/uohQTdJ.gif"
    personage.className = "personage"
    document.body.appendChild (personage)
    personage.coord = pointCoord [0]
    personage.nextPoint = 1
    personage.velocity = 5
    personage.interval = setInterval (mc_personage, 100)
})()

function mc_personage ( event ) {
	 var dimX = pointCoord [ personage.nextPoint ][0] -
   						personage.coord [0]
	 var dimY = pointCoord [ personage.nextPoint ][1] -
   						personage.coord [1]
   // достигли очередной точки маршрута
	 if ( dimX === 0 && dimY === 0 ) {
   		personage.nextPoint =
      		personage.nextPoint < pointCoord.length-1 ?
          	personage.nextPoint + 1 : 0
	 }
   personage.style.transform = dimX < 0 ?
   							"rotateY(180deg)" : "rotateY(0deg)"
	 personage.coord [0] += dimX !== 0 ?
   				Math.sign(dimX) * personage.velocity : 0
	 personage.coord [1] += dimY !== 0 ?
   				Math.sign(dimY) * personage.velocity : 0
	 personage.style.left = personage.coord [0] + 'px'
	 personage.style.top = personage.coord [1] + 'px'

}
