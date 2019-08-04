const math = require('mathjs')

const data = require('./data');


let starting_node = 0

function getDistance(starting_node, available_nodesArr) {
    const distance = []

    if(starting_node === 0) {
        starting_node = data.points20[0]
    }

    for(let node of available_nodesArr) {
        distances.push(math.distance({pointOneX: starting_node.x, pointOneY: starting_node.y },{ pointTwoX: node.x, pointTwoY: node.y }))
    }
    
    return distances
}




console.log(getDistance(starting_node,data.points20))
// console.log(math.distance(data.points20[0], data.points20[1]))

//get the first index and set it as the current node
//iterate through and get the distance of every other node 
//push each distance into an array