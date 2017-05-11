import { assert } from 'chai';
import { Router } from '../src/router';

/**
 * In this module we will look at spies and how they can help us verify if a method has been called and with what arguments. What setup needs to be done
 * to verify if a function has been called and how do we assert it?
 */

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