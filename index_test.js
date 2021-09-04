var expect = chai.expect;

describe ("Player", function(){
    describe("#constructor", function() {
        it("should create the player name", function () {
            const player = new Player();
            expect(player.playerCards).to.be.a("array");
        });
        
    });
});