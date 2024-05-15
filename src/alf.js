function SearchSpaceship(){}
SearchSpaceship.prototype.add = function(map){
	let lines = map.split("\n");

	for (let y = 0; y < lines.length; y++) {
        for (let x = 0; x < lines[y].length; x++) {
            if (lines[y][x] === 'X') {
                let adjustedY = 5 - y;
                return [x, adjustedY];
            }
        }
    }
	
        return "spaceship lost forever";
    
};