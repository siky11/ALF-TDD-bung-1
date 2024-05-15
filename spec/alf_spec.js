describe('Help Alf', function(){
	beforeEach(function(){
		spaceship = new SearchSpaceship();
	});

	it('should return [0,0] for given map', function(){
		expect(spaceship.add("..........\n..........\n..........\n..........\n..........\n..........")).toEqual([0,0]);
	});
});