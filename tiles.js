let length = 100;
let width = 100;

// 1x1 tiles are sold per dozen
let minTiles = (length * width);
let desiredTiles = minTiles * 1.1;

// the # of tiles we want, divided by tiles per box, rounded up because we can't buy partial boxes
let boxCount = Math.ceil(desiredTiles / 12);

console.log("To fill a room with dimesnions " + length + "x" + width + "ft, and have at least 10% extra, we need " + boxCount + " boxes of tiles");