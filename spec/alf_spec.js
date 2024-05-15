describe('Help Alf', function(){
	beforeEach(function(){
		spaceship = new SearchSpaceship();
	});

	it('should return [0,0] for given map', function(){
		expect(spaceship.add("..........\n..........\n..........\n..........\n..........\n..........")).toEqual([0,0]);
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

});