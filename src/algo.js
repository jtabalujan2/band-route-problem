const math = require('mathjs')
const data = require('./data');
const fs = require('fs')

function getClosestLocation(startingNode, availableLocationsArr) {

  let shortestLocDist = undefined;
  let shortestLoc = undefined;

  if (shortestLocDist === undefined) {
    shortestLocDist = math.distance({ pointOneX: startingNode.x, pointOneY: startingNode.y }, { pointTwoX: availableLocationsArr[0].x, pointTwoY: availableLocationsArr[0].y })
  }

  for (let index = 0; index < availableLocationsArr.length; index++) {

    distance = math.distance(
      { pointOneX: startingNode.x, pointOneY: startingNode.y },
      { pointTwoX: availableLocationsArr[index].x, pointTwoY: availableLocationsArr[index].y }
    )

    if (distance <= shortestLocDist) {
      shortestLocDist = distance
      shortestLoc = availableLocationsArr[index]
      resultIndex = index
    }
  }


  return result = { shortestLoc: shortestLoc, resultIndex: resultIndex }
}


function findShortestPath(arrOfLocations) {

  const arrOfPath = [];
  let startingLocation = arrOfLocations[0]
  let resultIndex = 0;

  while (arrOfLocations.length > 1) {

    arrOfPath.push(startingLocation)
    arrOfLocations.splice(resultIndex, 1)

    let results = getClosestLocation(startingLocation, arrOfLocations)
    startingLocation = results.shortestLoc
    resultIndex = results.resultIndex

  }

  //add the last location 
  arrOfPath.push(arrOfLocations[0])
  return arrOfPath
}

// console.log(data.points[0])


for (let index = 0; index < data.points.length; index++) {

  fs.writeFile(
    `../public/path${index}.js`,
    `const chart${index} = ` + JSON.stringify(
      findShortestPath(data.points[index])
    ),
    (err) => {
      if (err) console.log(err)
      console.log('File written')
    }
  )
}



// console.log(findShortestPath(data.points5))

// getClosestLocation(data.points20[0], data.points20.slice(1))

//get the first index and set it as the current node
//iterate through and get the distance of every other node 
//push each distance into an array



//