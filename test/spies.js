import { assert } from 'chai';
import { Router } from '../src/router';

// In this exercise, write two tests that uses spies to verify the correct function was called and that it was called with the correct argument
describe('router', function () {
    it('should call the success function if it is in success state', function () {
        // Arrange
        const errorFunction = (argument) => { };
        const successFunction = (argument) => { };
        const argument = 1;
        const router = new Router(successFunction, errorFunction);
        router.setSuccessState();

        // Act
        router.route();

        // Assert
        assert.fail();
    });

    it('should call the error function if it is in error state', function () {
        // Arrange
        const errorFunction = (argument) => { };
        const successFunction = (argument) => { };
        const argument = 1;
        const router = new Router(successFunction, errorFunction);
        router.setErrorState();

        // Act
        router.route();

        // Assert
        assert.fail();
    });
});