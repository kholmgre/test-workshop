import { assert } from 'chai';
import { JsonToHtml } from '../src/jsonToHtml';
import { DB } from '../src/db';
import { GenericService } from '../src/genericService';

/**
 * Here we look at stubs and how they can help us not have to deal with dependencies that have side-effects (making http-calls and such) or is not implemented yet.
 */

// In this test we already have an almost complete test. However, the genericService.getItems method is not complete yet so we want to fake that it is to 
// test that we map the json to valid html. Write a stub that fakes the return from the correct method
describe('jsonToHtml', function () {
    it('should return correct html from received data', function () {
        // Arrange
        const fakeReturn = [{ name: 'test' }, { name: 'hello' }];
        const expected = '<div><div>test</div><div>hello</div></div>';

        const db = new DB();
        const genericService = new GenericService(db);
        const jsonToHtml = new JsonToHtml(genericService);

        // Act
        const result = jsonToHtml.getHtml();

        // Assert
        assert.fail();
    });
});






























// hindsight
// sinon.stub(genericService, 'getItems').callsFake(() => { return fakeReturn });