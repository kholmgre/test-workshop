import { assert } from 'chai';
import { adder } from '../src/adder';
import { DB } from '../src/db';
import { GenericService } from '../src/genericService';

// This test describes a simple structure of a unit-test
describe('The structure of a unit-test', function () {
    it('should assert the code under test is working', function () {
        // Arrange
        const expected = 2;

        // Act
        const actual = adder(1);

        // Assert
        assert.equal(expected, actual);
    });
});

// This test describs how to use a fake server and check how many requests were made during execution of our unit-of-work
describe('DB', function () {

    let server;

    before(function () { server = sinon.fakeServer.create(); });
    after(function () { server.restore(); });

    it('should should have made 1 server requests', function () {
        // Arrange
        const callback = sinon.spy();
        const db = new DB();

        // Act
        db.getItems(callback);

        // Assert
        assert(server.requests.length === 1);
    });
});

// This test describes how to mock dependencies outside of the unit-of-work you are actually testing.
describe('How to use stubs', function () {
    it('should replace code that has side-effecs', function () {
        // Arrange

        // DB is a dependency in generic service
        const db = new DB();

        // Mock the getItems method of the db-object so that no external call is made during execution
        sinon.stub(db, "getItems").callsFake(() => { return ['hello', 'hello2']});

        // Create unit under test
        const genericService = new GenericService(db);

        // Act
        const mappedItems = genericService.getMappedItems();

        // Assert
        assert(mappedItems[0] === 'hello map value added' && mappedItems[1] === 'hello2 map value added');
    });
});
