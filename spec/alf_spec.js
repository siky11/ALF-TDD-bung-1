describe('Help Alf', function(){
	beforeEach(function(){
		spaceship = new SearchSpaceship();
	});

	it('should return [0,0] for given map', function(){
		expect(spaceship.add("..........\n..........\n..........\n..........\n..........\nX..........")).toEqual([0,0]);
	});
	it('should return [3,1] for given map', function(){
		expect(spaceship.add("..........\n..........\n..........\n..........\n...X.......\n..........")).toEqual([3,1]);
	});
	it('should return [7,2] for given map', function(){
		expect(spaceship.add("..........\n..........\n..........\n.......X...\n..........\n..........")).toEqual([7,2]);
	});
	it('should return [1,3] for given map', function(){
		expect(spaceship.add("..........\n..........\n.X.........\n..........\n..........\n..........")).toEqual([1,3]);
	});
	it('should return [5,4] for given map', function(){
		expect(spaceship.add("..........\n.....X.....\n..........\n..........\n..........\n..........")).toEqual([5,4]);
	});
	it('should return [9,5] for given map', function(){
		expect(spaceship.add(".........X.\n..........\n..........\n..........\n..........\n..........")).toEqual([9,5]);
	});
	it('should return "spaceship lost forever" for given map', function(){
		expect(spaceship.add("..........\n..........\n..........\n..........\n..........\n..........")).toEqual("spaceship lost forever");
	});
});